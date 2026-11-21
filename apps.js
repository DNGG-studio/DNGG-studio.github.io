/*
 * DNGG-studio のアプリの一覧（公開サイトの正本）。
 * トップページ（index.html）と、各アプリの紹介ページ・使い方のページの「ほかのアプリ」の欄は、ここから作る。
 * アプリを足すときは、下の APPS に 1 件足すだけでよい（テンプレート template-android の docs/public-pages-guide.md「アプリの一覧」）。
 *
 * 使い方（ページの側）：
 *   <section class="dngg-apps" data-mode="others" data-current="<アプリのフォルダ>" data-lang="ja">
 *     <p><a href="../">DNGG-studio のアプリ一覧</a></p>   … スクリプトが動かないときに出る
 *   </section>
 *   <script src="../apps.js" defer></script>
 *   data-mode：others＝ほかのアプリ（各アプリのページ）、all＝すべて（トップページ）
 *   data-lang：ja か en
 */
(function () {
  var APPS = [
    {
      id: 'calendar-plus', category: 'tool', icon: true, manual: true,
      name: { ja: 'カレンダープラスα', en: 'Calendar Plus α' },
      desc: {
        ja: 'Google カレンダーの予定に、画像・ファイルの添付と 1 週間の天気をプラス。',
        en: 'Adds images, file attachments and 7-day weather to your Google Calendar.'
      }
    },
    {
      id: 'talking-clock', category: 'tool', icon: false, manual: false,
      name: { ja: 'しゃべる時計', en: 'Talking Clock' },
      desc: {
        ja: '時刻を声で知らせる時計。写真の着せ替えや今日の予定の読み上げにも対応。',
        en: 'A clock that tells the time out loud, with photo themes and today\'s events.'
      }
    },
    {
      id: 'kumiki', category: 'game', icon: true, manual: false,
      name: { ja: 'Block KUMIKI', en: 'Block KUMIKI' },
      desc: {
        ja: 'ピースを置いて、そろえて、消す。木のぬくもりのブロックパズル。',
        en: 'Place, line up and clear! A warm wooden block puzzle.'
      }
    },
    {
      id: 'tetogravity', category: 'game', icon: true, manual: false,
      name: { ja: 'TETOGRAVITY（テトグラビティ）', en: 'TETOGRAVITY' },
      desc: {
        ja: '落ちてくるブロックを、空に浮かぶ島の上に積み上げる重力バランスゲーム。',
        en: 'Stack falling blocks on an island floating in the sky.'
      }
    },
    {
      id: 'irodori-survivor', category: 'game', icon: true, manual: false,
      name: { ja: 'いろどり冒険サバイバー', en: 'IRODORI SURVIVOR' },
      desc: {
        ja: '絵本の世界で 30 分生きのびよう。攻撃は自動、操作は移動だけのサバイバーアクション。',
        en: 'Survive 30 minutes in a picture-book world. Attacks are automatic. Just move.'
      }
    },
    {
      id: 'reversi', category: 'game', icon: true, manual: false,
      name: { ja: 'リバーシ先生', en: 'Reversi Sensei' },
      desc: {
        ja: '20 段階の CPU、理由つきヒント、振り返り、定石学習でリバーシが上達。',
        en: 'Get better at Reversi with 20 CPU levels, explained hints and game review.'
      }
    },
    {
      id: 'eiken', category: 'study', icon: true, manual: false,
      name: { ja: '英検トレーナー', en: 'Eiken Trainer' },
      desc: {
        ja: '英検 5 級・4 級・3 級の単語・筆記・リスニング・ライティングをまとめて学習。',
        en: 'Vocabulary, reading, listening and writing for Eiken Grades 5, 4 and 3.'
      }
    },
    {
      id: 'denko2', category: 'study', icon: true, manual: false,
      name: { ja: '電工二種 過去問ドリル', en: 'Denko2 Drill' },
      desc: {
        ja: '第二種電気工事士の学科試験・技能試験の対策アプリ。',
        en: 'Past questions and wiring practice for Japan\'s Class 2 Electrician exams.'
      }
    }
  ];

  var CATEGORIES = [
    { id: 'tool', ja: '暮らしに役立つアプリ', en: 'Everyday tools' },
    { id: 'study', ja: '学習アプリ', en: 'Study' },
    { id: 'game', ja: 'ゲーム', en: 'Games' }
  ];

  var TEXT = {
    ja: {
      others: 'DNGG-studio のほかのアプリ', all: 'すべてのアプリを見る', about: '紹介', manual: '使い方',
      privacy: 'プライバシーポリシー', status: 'Google Play で配信準備中'
    },
    en: {
      others: 'More apps from DNGG-studio', all: 'See all apps', about: 'About', manual: 'User guide (Japanese)',
      privacy: 'Privacy Policy', status: 'Coming soon to Google Play'
    }
  };

  var CSS = '' +
    '.dngg-apps[data-mode=others]{margin:2.5em 0 1em;padding-top:1em;border-top:1px solid #ddd}' +
    '.dngg-apps h2{font-size:1.1em;margin:0 0 .6em}' +
    '.dngg-apps h3{font-size:1em;margin:1.4em 0 .5em;color:#555}' +
    '.dngg-apps-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin:0;padding:0;list-style:none}' +
    '.dngg-app{display:flex;gap:12px;align-items:flex-start;padding:12px;border:1px solid #e3e3e3;border-radius:12px;background:#fff;color:#222;text-decoration:none;line-height:1.5}' +
    'a.dngg-app:hover{border-color:#4285f4;background:#f7faff}' +
    '.dngg-app-icon{flex:none;width:56px;height:56px;border-radius:14px;object-fit:cover;background:#eee}' +
    '.dngg-app-letter{display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:24px;color:#fff;background:#5c6bc0}' +
    '.dngg-app-body{min-width:0}' +
    '.dngg-app-name{display:block;font-weight:bold}' +
    '.dngg-app-desc{display:block;font-size:.88em;color:#555;margin-top:2px}' +
    '.dngg-app-links{display:block;font-size:.85em;margin-top:6px}' +
    '.dngg-app-links a{margin-right:.8em}' +
    '.dngg-app-status{display:block;font-size:.8em;color:#888;margin-top:4px}' +
    '.dngg-apps-more{margin-top:1em}';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function icon(app, base) {
    if (app.icon) {
      var img = el('img', 'dngg-app-icon');
      img.src = base + app.id + '/images/icon.png';
      img.alt = '';
      img.width = 56;
      img.height = 56;
      img.loading = 'lazy';
      return img;
    }
    return el('span', 'dngg-app-icon dngg-app-letter', app.name.ja.charAt(0));
  }

  /** 1 件の札。full のときは紹介・使い方・プライバシーポリシーのリンクを並べ、そうでなければ札全体を紹介ページへのリンクにする */
  function card(app, lang, base, full) {
    var t = TEXT[lang];
    var box = el(full ? 'div' : 'a', 'dngg-app');
    if (!full) box.href = base + app.id + '/';
    box.appendChild(icon(app, base));
    var body = el('span', 'dngg-app-body');
    if (full) {
      var name = el('a', 'dngg-app-name', app.name[lang]);
      name.href = base + app.id + '/';
      body.appendChild(name);
    } else {
      body.appendChild(el('span', 'dngg-app-name', app.name[lang]));
    }
    body.appendChild(el('span', 'dngg-app-desc', app.desc[lang]));
    if (full) {
      var links = el('span', 'dngg-app-links');
      var items = [[t.about, app.id + '/']];
      if (app.manual) items.push([t.manual, app.id + '/manual.html']);
      items.push([t.privacy, app.id + '/privacy.html']);
      items.forEach(function (it) {
        var a = el('a', '', it[0]);
        a.href = base + it[1];
        links.appendChild(a);
      });
      body.appendChild(links);
      body.appendChild(el('span', 'dngg-app-status', t.status));
    }
    box.appendChild(body);
    var li = el('li');
    li.appendChild(box);
    return li;
  }

  function render(section) {
    var lang = section.getAttribute('data-lang') === 'en' ? 'en' : 'ja';
    var mode = section.getAttribute('data-mode') === 'all' ? 'all' : 'others';
    var current = section.getAttribute('data-current');
    var base = mode === 'all' ? '' : '../';
    var t = TEXT[lang];
    section.textContent = '';
    if (mode === 'all') {
      CATEGORIES.forEach(function (c) {
        var apps = APPS.filter(function (a) { return a.category === c.id; });
        if (!apps.length) return;
        section.appendChild(el('h3', '', c[lang]));
        var ul = el('ul', 'dngg-apps-list');
        apps.forEach(function (a) { ul.appendChild(card(a, lang, base, true)); });
        section.appendChild(ul);
      });
      return;
    }
    section.appendChild(el('h2', '', t.others));
    var list = el('ul', 'dngg-apps-list');
    APPS.filter(function (a) { return a.id !== current; })
      .forEach(function (a) { list.appendChild(card(a, lang, base, false)); });
    section.appendChild(list);
    var more = el('p', 'dngg-apps-more');
    var link = el('a', '', t.all + ' →');
    link.href = base;
    more.appendChild(link);
    section.appendChild(more);
  }

  function start() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    var sections = document.querySelectorAll('.dngg-apps');
    for (var i = 0; i < sections.length; i++) render(sections[i]);
  }

  window.DNGG_APPS = APPS;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
