// ============================================
// Alushe システム共通設定
// 会社名・店舗・役職・権限・接続先はここだけで管理する
// 他社導入時はこのファイルを差し替える
// ============================================
const APP_CONFIG = {
  companyName: 'Alushe',

  // Supabase接続先（全ページ共通）
  supabaseUrl: 'https://kxuzdkwbmxfinmmqqkep.supabase.co',
  supabaseAnon: 'sb_publishable_2JQdW4ZrTUHo8vDBsF829w_82lPC_53',

  // 全店に所属する人（代表・管理者）の店舗値
  allStoresValue: '全店共通',

  // 店舗グループ（表示順）
  // label = プルダウンの見出し / short = 店舗切り替えボタンの表示名
  storeGroups: [
    { id: 'hair', label: 'ヘアサロン',     short: 'ヘア' },
    { id: 'eye',  label: 'まつげ・ネイル', short: 'アイ・ネイル' },
  ],

  // 店舗一覧（この順番で左から表示）
  // id = DBに保存される値 / label = 画面に表示する名前
  stores: [
    { id: '新宿',           label: '新宿',           group: 'hair' },
    { id: '原宿',           label: '原宿',           group: 'hair' },
    { id: '秋葉原',         label: '秋葉原',         group: 'hair' },
    { id: '錦糸町',         label: '錦糸町',         group: 'hair' },
    { id: 'メルティエ',     label: 'メルティエ',     group: 'hair' },
    { id: 'elua',           label: '錦糸町elua',     group: 'hair' },
    { id: '平井',           label: '平井',           group: 'hair' },
    { id: 'アルーシェ船堀', label: 'アルーシェ船堀', group: 'hair' },
    { id: '船堀スカイ',     label: '船堀スカイ',     group: 'hair' },
    { id: '心斎橋',         label: '心斎橋',         group: 'hair' },
    // まつげ・ネイル系
    { id: '錦糸町アイ',       label: '錦糸町アイ',       group: 'eye' },
    { id: '平井アイ・ネイル', label: '平井アイ・ネイル', group: 'eye' },
    { id: 'Amour菊川',        label: 'Amour菊川',        group: 'eye' },
    { id: '菊川アイ',         label: '菊川アイ',         group: 'eye' },
    { id: '西大島アイ',       label: '西大島アイ',       group: 'eye' },
    { id: '船堀アイ',         label: '船堀アイ',         group: 'eye' },
  ],

  // 役職（上位から順に。スタッフ一覧・数値管理の役職順に使う）
  positions: [
    '代表取締役', 'FCオーナー', 'マネージャー', 'サブマネージャー', '店長',
    '副店長', 'スタイリスト', 'アシスタント', 'アルバイト', '管理者',
  ],

  // 本人以外には名前を見せない役職（ログイン一覧・人材マスターに出さない）
  hiddenPositions: ['管理者'],

  // 新規登録で本人が選べる役職
  selfRegisterPositions: ['副店長', 'スタイリスト', 'アシスタント', 'アルバイト'],

  // 企業理念（ミッション・ビジョン・バリュー）
  // ホームの「今日の理念」は、この3つを日替わりで順番に表示する。理念ページでも同じ内容を使う。
  philosophy: {
    corporateName: '株式会社AHL',
    items: [
      { key: 'mission', label: 'ミッション', en: 'MISSION', text: 'Alusheに携わる人を好きになり幸せにする' },
      { key: 'vision',  label: 'ビジョン',   en: 'VISION',  text: '日本一幸福度の高い企業グループ（幸福度No.1企業）' },
      { key: 'value',   label: 'バリュー',   en: 'VALUE',   text: '遊びのように仕事をし美容を楽しむ！' },
    ],
    nameOrigin: '社名の「AHL」は「Alushe Happy Love」（アルーシェ ハッピー ラブ）に由来します。スタッフやその家族、お客様など、アルーシェに携わるすべての人を喜ばせ、幸せにしたいという想いが込められています。',
  },

  // 権限（役職名で判定）
  roles: {
    staffEditor:   ['代表取締役', '管理者', 'FCオーナー', 'マネージャー', 'サブマネージャー', '店長'],             // 人材マスターの編集
    meetingViewer: ['代表取締役', '管理者', 'FCオーナー', 'マネージャー', 'サブマネージャー', '店長'],             // 会議報告の閲覧
    currEditor:    ['代表取締役', '管理者', 'FCオーナー', 'マネージャー', '店長', '副店長', 'スタイリスト'], // カリキュラム編集
    currTarget:    ['アシスタント', 'アルバイト'],                                          // カリキュラム対象者
    teacher:       ['店長', '副店長', 'スタイリスト'],                                      // 担当講師の候補
    salesSettings: ['代表取締役', '管理者', 'FCオーナー', 'マネージャー', 'サブマネージャー', '店長'],             // 役職別基準値・材料比率の設定
    evalEditor:    ['代表取締役', '管理者', 'FCオーナー', 'マネージャー', 'サブマネージャー', '店長'],             // 人事評価の項目編集
    evalTarget:    ['マネージャー', 'サブマネージャー', '店長', '副店長', 'スタイリスト', 'アシスタント'],          // 人事評価の対象者
  },

  // メニュー（ホーム画面のカードと上部タブはこの順番で表示）
  // access: 'all' = ログインした全員 / それ以外は roles のキー名
  menus: [
    { id: 'sales',       icon: '📊', name: '数値管理',         url: 'sales.html',            access: 'all' },
    { id: 'meeting',     icon: '📝', name: '会議報告',         url: 'meeting.html',          access: 'meetingViewer' },
    { id: 'evaluation',  icon: '⭐', name: '人事評価制度',     url: 'evaluation.html',       access: 'all' },
    { id: 'schedule',    icon: '📆', name: '年間スケジュール', url: 'schedule.html',         access: 'all' },
    { id: 'appointment', icon: '📅', name: '次回予約管理',     url: 'next-reservation.html', access: 'all', comingSoon: true },
    { id: 'staff',       icon: '👥', name: '人材マスター',     page: 'staff',                access: 'staffEditor' },
  ],
};

// ===== 共通ヘルパー =====
function storeLabel(id) {
  if (id === APP_CONFIG.allStoresValue) return '全店共通';
  const s = APP_CONFIG.stores.find(function (x) { return x.id === id; });
  return s ? s.label : (id || '');
}

// 店舗の並び順（全店共通が先頭、未登録の店舗は末尾）
function storeOrder(id) {
  if (id === APP_CONFIG.allStoresValue) return -1;
  const i = APP_CONFIG.stores.findIndex(function (x) { return x.id === id; });
  return i === -1 ? 999 : i;
}

// 店舗の<option>を生成（withAll=trueで先頭に「すべての店舗」）
function storeOptionsHtml(selected, withAll) {
  let html = withAll ? '<option value="">すべての店舗</option>' : '';
  APP_CONFIG.storeGroups.forEach(function (g) {
    const list = APP_CONFIG.stores.filter(function (s) { return s.group === g.id; });
    if (!list.length) return;
    html += '<optgroup label="' + g.label + '">';
    list.forEach(function (s) {
      html += '<option value="' + s.id + '"' + (s.id === selected ? ' selected' : '') + '>' + s.label + '</option>';
    });
    html += '</optgroup>';
  });
  return html;
}

// 役職の<option>を生成（list省略時は全役職）
function positionOptionsHtml(selected, list) {
  const src = list || APP_CONFIG.positions;
  return src.map(function (p) {
    return '<option value="' + p + '"' + (p === selected ? ' selected' : '') + '>' + p + '</option>';
  }).join('');
}

// 役職の並び順
function positionOrder(p) {
  const i = APP_CONFIG.positions.indexOf(p || '');
  return i === -1 ? 999 : i;
}

// ===== メニュー（全ページ共通） =====
function canAccessMenu(m, me) {
  if (!me || m.comingSoon) return false;
  if (m.access === 'all') return true;
  return (APP_CONFIG.roles[m.access] || []).includes(me.position);
}

// 上部タブのHTML（activeId: 'home' またはメニューのid）
function appNavHtml(activeId, me) {
  let h = '<button class="nav-tab' + (activeId === 'home' ? ' active' : '') + '" onclick="goNav(\'home\')">🏠 ホーム</button>';
  APP_CONFIG.menus.forEach(function (m) {
    if (m.comingSoon) {
      h += '<button class="nav-tab" disabled style="opacity:0.4;cursor:not-allowed">' + m.icon + ' ' + m.name + '</button>';
      return;
    }
    if (!canAccessMenu(m, me)) return;
    h += '<button class="nav-tab' + (activeId === m.id ? ' active' : '') + '" onclick="goNav(\'' + m.id + '\')">' + m.icon + ' ' + m.name + '</button>';
  });
  return h;
}

// タブ・カードを押したときの移動
// ページ側で window.onAppNav を定義すると、そのページ内で処理できる
function goNav(id) {
  if (typeof window.onAppNav === 'function' && window.onAppNav(id)) return;
  if (id === 'home') { location.href = 'index.html'; return; }
  const m = APP_CONFIG.menus.find(function (x) { return x.id === id; });
  if (!m || m.comingSoon) return;
  location.href = m.page ? 'index.html#' + m.page : m.url;
}

// ===== 共通ヘッダー（1段目：会社名・ログイン情報 / 2段目：共通メニュー） =====
// 各ページの <body> 先頭に <div id="app-header"></div> を置き、
// const ME = await initAppHeader(sb, 'sales'); のように呼ぶ
function injectHeaderStyle() {
  if (document.getElementById('app-header-style')) return;
  const st = document.createElement('style');
  st.id = 'app-header-style';
  st.textContent =
    '.app-top-bar{background:#1a1410;color:#e8d5b0;padding:12px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}' +
    '.app-top-title{font-family:"Playfair Display",serif;font-size:18px;letter-spacing:2px;cursor:pointer;}' +
    '.app-top-right{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}' +
    '.app-user-badge{font-size:12px;background:rgba(255,255,255,0.1);padding:5px 12px;border-radius:20px;white-space:nowrap;}' +
    '.app-logout{font-family:"Noto Sans JP",sans-serif;font-size:12px;padding:6px 12px;border-radius:7px;border:1.5px solid #c9a96e;background:transparent;color:#e8d5b0;cursor:pointer;}' +
    '.nav-tabs{background:white;border-bottom:2px solid #e8d5b0;padding:0 16px;display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;}' +
    '.nav-tab{font-family:"Noto Sans JP",sans-serif;font-size:13px;font-weight:500;padding:12px 18px;border:none;background:none;color:#7a6a58;cursor:pointer;white-space:nowrap;border-bottom:3px solid transparent;margin-bottom:-2px;}' +
    '.nav-tab.active{color:#c9a96e;border-bottom-color:#c9a96e;font-weight:700;}' +
    // 店舗タブ：折り返さず1行で横スクロール（店舗が増えても高さが変わらない）
    '.store-tabs{flex-wrap:nowrap !important;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:4px;}' +
    '.store-tabs::-webkit-scrollbar{display:none;}' +
    '.store-tab{flex-shrink:0;white-space:nowrap;}' +
    '@media(max-width:600px){.store-tab{font-size:12px !important;padding:6px 14px !important;}}' +
    // 店舗の切り替え（グループボタン＋店舗プルダウン）
    '.sf-wrap{margin-bottom:14px;}' +
    '.sf-sel{font-family:"Noto Sans JP",sans-serif;font-size:14px;font-weight:700;padding:9px 34px 9px 16px;border-radius:20px;border:2px solid #c9a96e;outline:none;cursor:pointer;color:#1a1410;background:white url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27%3E%3Cpath d=%27M0 0l5 6 5-6z%27 fill=%27%23c9a96e%27/%3E%3C/svg%3E") no-repeat right 14px center;appearance:none;-webkit-appearance:none;}' +
    '@media(max-width:600px){.sf-sel{font-size:13px;padding:7px 30px 7px 14px;}}';
  document.head.appendChild(st);
}

function appLogout() {
  localStorage.removeItem('logged_in_id');
  location.href = 'index.html';
}

async function initAppHeader(sb, activeId) {
  injectHeaderStyle();
  const id = localStorage.getItem('logged_in_id');
  if (!id) { location.href = 'index.html'; return null; }
  const { data: me } = await sb.from('students').select('*').eq('id', id).single();
  if (!me || me.is_active === false) { appLogout(); return null; }
  // 権限のないページに直接来た場合はホームへ
  const menu = APP_CONFIG.menus.find(function (m) { return m.id === activeId; });
  if (menu && !canAccessMenu(menu, me)) { location.href = 'index.html'; return null; }
  const el = document.getElementById('app-header');
  if (el) {
    el.innerHTML =
      '<div class="app-top-bar">' +
        '<div class="app-top-title" onclick="goNav(\'home\')">✦ ' + APP_CONFIG.companyName + '</div>' +
        '<div class="app-top-right">' +
          '<span class="app-user-badge">🔑 ' + String(me.name).replace(/</g, '&lt;') + (me.position ? ' / ' + me.position : '') + '</span>' +
          '<button class="app-logout" onclick="appLogout()">ログアウト</button>' +
        '</div>' +
      '</div>' +
      '<div class="nav-tabs">' + appNavHtml(activeId, me) + '</div>';
  }
  if (menu) document.title = menu.name + ' | ' + APP_CONFIG.companyName;
  return me;
}

// ===== 添付ファイルをアプリ内で開く（全ページ共通） =====
// ホーム画面に追加したアプリでは「新しいタブで開く」が効かないため、画面内のビューアで表示する。
//   画像 → そのまま表示 / PDF → 埋め込み表示 / Word・Excel・PowerPoint → Microsoftの閲覧ビューアで表示
// 使い方：<a href="ファイルURL" class="att-open" data-name="ファイル名">ファイル名</a>
function openAttachment(url, name) {
  const lower = (name || url).toLowerCase();
  const isImage = /\.(jpg|jpeg|png|gif|webp|heic|heif)$/.test(lower);
  const isPdf = /\.pdf$/.test(lower);
  const isOffice = /\.(docx?|xlsx?|pptx?)$/.test(lower);
  const safeUrl = String(url).replace(/"/g, '&quot;');
  const safeName = String(name || 'ファイル').replace(/</g, '&lt;');
  const frame = 'width:100%;height:70vh;border:none;border-radius:8px;background:white';
  let body;
  if (isImage) {
    body = '<img src="' + safeUrl + '" style="max-width:100%;max-height:70vh;display:block;margin:0 auto;border-radius:8px">';
  } else if (isPdf) {
    body = '<iframe src="' + safeUrl + '" style="' + frame + '"></iframe>';
  } else if (isOffice) {
    body = '<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(url) + '" style="' + frame + '"></iframe>';
  } else {
    body = '<div style="padding:30px 10px;text-align:center;color:#7a6a58;font-size:13px;line-height:1.8">この形式は画面内で表示できません。<br>下の「別の画面で開く」から開いてください。</div>';
  }
  const ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;';
  ov.innerHTML =
    '<div style="background:white;border-radius:14px;padding:14px;max-width:900px;width:100%;max-height:92vh;overflow:auto;">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px">' +
        '<div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0">' + safeName + '</div>' +
        '<button type="button" data-close style="flex-shrink:0;white-space:nowrap;font-family:inherit;font-size:13px;padding:6px 14px;border-radius:7px;border:none;background:#1a1410;color:white;cursor:pointer">閉じる</button>' +
      '</div>' +
      body +
      '<div style="text-align:center;margin-top:12px"><a href="' + safeUrl + '" style="display:inline-block;font-size:13px;padding:8px 16px;border-radius:7px;border:1.5px solid #c4b49e;color:#3a3028;text-decoration:none">別の画面で開く</a></div>' +
    '</div>';
  ov.addEventListener('click', function (e) {
    if (e.target === ov || e.target.hasAttribute('data-close')) ov.remove();
  });
  document.body.appendChild(ov);
}
document.addEventListener('click', function (e) {
  const a = e.target.closest && e.target.closest('a.att-open');
  if (!a) return;
  e.preventDefault();
  openAttachment(a.getAttribute('href'), a.getAttribute('data-name'));
});

// 店舗タブを押したら、選んだタブを横スクロールの中央に寄せる（全ページ共通）
document.addEventListener('click', function (e) {
  if (!(e.target.closest && e.target.closest('.store-tab'))) return;
  setTimeout(function () {
    const a = document.querySelector('.store-tab.active');
    if (a) a.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, 0);
});

// ===== 店舗の切り替え（全ページ共通） =====
// 値の形：'all'（全店舗）/ 'group:hair' などのグループ全体 / 店舗id（単独店舗）
function storeGroupOf(storeId) {
  const st = APP_CONFIG.stores.find(function (x) { return x.id === storeId; });
  return st ? st.group : null;
}
function isSingleStore(filter) {
  return APP_CONFIG.stores.some(function (x) { return x.id === filter; });
}
// 店舗idが、選択中の切り替え（全店舗・グループ・単独店舗）に含まれるか
function storeFilterMatches(filter, storeId) {
  if (filter === 'all') return true;
  if (String(filter).indexOf('group:') === 0) return storeGroupOf(storeId) === filter.slice(6);
  return storeId === filter;
}
// 選択中の切り替えに含まれる店舗idの一覧
function storesInFilter(filter) {
  return APP_CONFIG.stores.filter(function (x) { return storeFilterMatches(filter, x.id); }).map(function (x) { return x.id; });
}
// 表示名（例：全店舗／ヘア全体／新宿）
function storeFilterLabel(filter) {
  if (filter === 'all') return '全店舗';
  if (String(filter).indexOf('group:') === 0) {
    const g = APP_CONFIG.storeGroups.find(function (x) { return x.id === filter.slice(6); });
    return g ? (g.short || g.label) + '全体' : '';
  }
  return storeLabel(filter);
}
// 初期表示：ログインした人の所属店舗（全店共通などは全店舗）
function defaultStoreFilter(me) {
  return me && isSingleStore(me.store) ? me.store : 'all';
}
// 切り替え部品を描画する。onChange(新しい値) が呼ばれる
// 1つのプルダウンにまとめる：全店舗 → ヘア（全体＋各店舗） → アイ・ネイル（全体＋各店舗）
function renderStoreFilter(containerId, current, onChange) {
  const el = document.getElementById(containerId);
  if (!el) return;
  window.__storeFilterCb = onChange;
  el.className = 'sf-wrap';
  let h = '<select class="sf-sel" onchange="__storeFilterCb(this.value)">';
  h += '<option value="all"' + (current === 'all' ? ' selected' : '') + '>全店舗</option>';
  APP_CONFIG.storeGroups.forEach(function (g) {
    const list = APP_CONFIG.stores.filter(function (x) { return x.group === g.id; });
    if (!list.length) return;
    const name = g.short || g.label;
    h += '<optgroup label="' + name + '">';
    h += '<option value="group:' + g.id + '"' + (current === 'group:' + g.id ? ' selected' : '') + '>' + name + '全体</option>';
    list.forEach(function (x) {
      h += '<option value="' + x.id + '"' + (current === x.id ? ' selected' : '') + '>' + x.label + '</option>';
    });
    h += '</optgroup>';
  });
  h += '</select>';
  el.innerHTML = h;
}
