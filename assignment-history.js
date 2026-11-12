// assignment_history 共通ロジック（店舗・役職など属性を問わず使い回せる）

async function loadAssignmentHistory(sb){
  const {data} = await sb.from('assignment_history').select('*');
  return data || [];
}

function valueAsOf(history, studentId, attribute, dateStr){
  const rows = history.filter(function(h){
    return h.student_id===studentId && h.attribute===attribute && h.effective_from<=dateStr;
  });
  if(!rows.length) return null;
  rows.sort(function(a,b){return a.effective_from<b.effective_from?1:-1;});
  return rows[0].value;
}

function monthToDate(monthStr){
  return monthStr + '-01';
}

async function saveAssignmentChange(sb, studentId, attribute, value, effectiveFrom, note){
  await sb.from('assignment_history').insert({
    student_id: studentId, attribute: attribute, value: value,
    effective_from: effectiveFrom, note: note || null
  });
  const today = new Date().toISOString().slice(0,10);
  if(effectiveFrom <= today){
    const field = attribute;
    await sb.from('students').update({[field]: value}).eq('id', studentId);
  }
}

function futureChangesOf(history, studentId, attribute){
  const today = new Date().toISOString().slice(0,10);
  return history.filter(function(h){
    return h.student_id===studentId && h.attribute===attribute && h.effective_from>today;
  }).sort(function(a,b){return a.effective_from<b.effective_from?-1:1;});
}

// ===== 兼務（追加所属店舗：staff_stores テーブル） =====
// メイン所属は students.store（＋ assignment_history の異動）。ここで扱うのは追加の所属だけ。
//   effective_from = 兼務の開始日（月の1日）/ effective_to = 終了日（月末日。空欄＝続いている）
// 終了した兼務は消さずに effective_to を入れる（過去の月の表からその人が消えないように）
async function loadStaffStores(sb){
  const {data, error} = await sb.from('staff_stores').select('*');
  if(error){ console.error('staff_stores', error); return []; }
  return data || [];
}

// 'YYYY-MM' の月末日 'YYYY-MM-DD'
function monthLastDate(monthStr){
  const p = monthStr.split('-');
  const d = new Date(Number(p[0]), Number(p[1]), 0).getDate();
  return monthStr + '-' + String(d).padStart(2,'0');
}

// その月に有効な兼務の行（1日でも重なっていれば有効）
function isStaffStoreActive(row, monthStr){
  return row.effective_from <= monthLastDate(monthStr) &&
         (!row.effective_to || row.effective_to >= monthToDate(monthStr));
}

// その月の兼務先の店舗id一覧（メイン所属と同じ店舗は除く）
function extraStoresAsOf(staffStores, studentId, monthStr, mainStore){
  const out = [];
  staffStores.forEach(function(r){
    if(r.student_id !== studentId) return;
    if(!isStaffStoreActive(r, monthStr)) return;
    if(r.store === mainStore || out.indexOf(r.store) !== -1) return;
    out.push(r.store);
  });
  out.sort(function(a,b){ return storeOrder(a) - storeOrder(b); });
  return out;
}
