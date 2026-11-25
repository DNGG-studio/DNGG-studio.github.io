/*
 * DNGG-studio のアプリの一覧（公開サイトの正本）。
 * トップページ（index.html）と、各アプリの紹介ページ・使い方のページの「ほかのアプリ」の欄は、ここから作る。
 * shots：トップページの札に並べる画面の画像 [名前, 日本語の説明, 英語の説明]（4 枚まで）。画像は <フォルダ>/images/thumbs/<ja か en>/<名前>.jpg（幅 240px の JPEG）。
 * enShots：英語の画像（thumbs/en/）があれば true。
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
      shots: [['1', '天気が予定の横に並ぶ 3 週の表示', '3-week view with weather'], ['3', '画像と添付ファイルの付いた予定', 'Event with images and files'], ['4', 'やることと予定のウィジェット', 'Widget with to-dos'], ['5', '天気の詳しい予報', 'Detailed forecast']], enShots: false,
      name: { ja: 'カレンダープラスα', en: 'Calendar Plus α' },
      desc: {
        ja: 'Google カレンダーの予定に、画像・ファイルの添付と 1 週間の天気をプラス。',
        en: 'Adds images, file attachments and 7-day weather to your Google Calendar.'
      }
    },
    {
      id: 'talking-clock', category: 'tool', icon: false, manual: true,
      shots: [['1', 'コーギーの写真の着せ替え', 'Corgi photo theme'], ['2', 'スイーツの写真の着せ替え', 'Sweets photo theme'], ['3', '着せ替えのカテゴリー', 'Theme categories'], ['4', '設定の画面', 'Settings']], enShots: false,
      name: { ja: 'しゃべる時計', en: 'Talking Clock' },
      desc: {
        ja: '時刻を声で知らせる時計。写真の着せ替えや今日の予定の読み上げにも対応。',
        en: 'A clock that tells the time out loud, with photo themes and today\'s events.'
      }
    },
    {
      id: 'morning-news', category: 'tool', icon: false, manual: true,
      shots: [['1', '予定の一覧', 'Schedules'], ['2', '予定の編集', 'Edit a schedule'], ['3', '情報源の一覧', 'Sources'], ['4', 'NAS の設定', 'NAS settings']], enShots: false,
      name: { ja: 'おはようニュースタイマー', en: 'Good Morning News Timer' },
      desc: {
        ja: '決めた時刻に、ニュースの再生を自動で開始。URL の追加や NAS の動画にも対応。',
        en: 'Starts playing the news at the time you set. Supports your own URLs and NAS.'
      }
    },
    {
      id: 'food-tag', category: 'tool', icon: true, manual: true,
      shots: [['1', '経過日数と期限の色が並ぶ一覧', 'Days stored and expiry colors'], ['2', '番号を打つだけで入れる', 'Just type the number'], ['3', '写真と名前の付いた食品', 'Food with a photo and name'], ['4', '使用中と空きの番号', 'Numbers in use and free']], enShots: true,
      name: { ja: 'たべもの番号帳', en: 'Food Tag Log' },
      desc: {
        ja: '容器に番号シール。入れる・出すは番号を打つだけで、冷蔵庫の食べ物の日数と期限を管理。',
        en: 'Number tags on containers: type the number to track how long food has been in your fridge.'
      }
    },
    {
      id: 'tabi-log', category: 'tool', icon: true, manual: true,
      shots: [['1', '経路と写真の地図', 'Route and photos on a map'], ['2', '旅のスライドショー', 'Trip slideshow'], ['3', 'その日の移動の全体', 'The day at a glance'], ['4', '立ち寄りと滞在時間', 'Stops and length of stay']], enShots: true,
      name: { ja: 'たびログ', en: 'TabiLog' },
      desc: {
        ja: '歩いた道・立ち寄った場所・写真を記録。旅を地図とスライドショーで振り返り、動画にも。',
        en: 'Record your route, stops and photos, then relive the trip as a slideshow or video.'
      }
    },
    {
      id: 'kumiki', category: 'game', icon: true, manual: true,
      shots: [['1', 'タイトル画面', 'Title screen'], ['2', 'プレイ画面', 'Gameplay'], ['karakuri', 'からくり屋敷のステージ', 'Karakuri house stage'], ['4', '銀河のステージ', 'Galaxy stage']], enShots: true,
      name: { ja: 'Block KUMIKI', en: 'Block KUMIKI' },
      desc: {
        ja: 'ピースを置いて、そろえて、消す。木のぬくもりのブロックパズル。',
        en: 'Place, line up and clear! A warm wooden block puzzle.'
      }
    },
    {
      id: 'tetogravity', category: 'game', icon: true, manual: false,
      shots: [['1', 'タイトル', 'Title'], ['2', 'とことんテトグラ', 'Endless mode'], ['3', 'お城防衛', 'Castle defense'], ['4', '木を育てよう', 'Grow a tree']], enShots: true,
      name: { ja: 'TETOGRAVITY（テトグラビティ）', en: 'TETOGRAVITY' },
      desc: {
        ja: '落ちてくるブロックを、空に浮かぶ島の上に積み上げる重力バランスゲーム。',
        en: 'Stack falling blocks on an island floating in the sky.'
      }
    },
    {
      id: 'irodori-survivor', category: 'game', icon: true, manual: false,
      shots: [['1', 'タイトル', 'Title'], ['2', 'プレイ画面', 'Gameplay'], ['4', '仲間を選ぶ', 'Choose a buddy'], ['5', 'ステージを選ぶ', 'Choose a stage']], enShots: true,
      name: { ja: 'いろどり冒険サバイバー', en: 'IRODORI SURVIVOR' },
      desc: {
        ja: '絵本の世界で 30 分生きのびよう。攻撃は自動、操作は移動だけのサバイバーアクション。',
        en: 'Survive 30 minutes in a picture-book world. Attacks are automatic. Just move.'
      }
    },
    {
      id: 'reversi', category: 'game', icon: true, manual: false,
      shots: [['1', 'ホーム', 'Home'], ['2', 'ヒント', 'Hints'], ['3', '振り返り', 'Game review'], ['4', '定石レッスン', 'Opening lessons']], enShots: true,
      name: { ja: 'リバーシ先生', en: 'Reversi Sensei' },
      desc: {
        ja: '20 段階の CPU、理由つきヒント、振り返り、定石学習でリバーシが上達。',
        en: 'Get better at Reversi with 20 CPU levels, explained hints and game review.'
      }
    },
    {
      id: 'eiken', category: 'study', icon: true, manual: true,
      shots: [['1', 'ホーム', 'Home'], ['2', '単語', 'Vocabulary'], ['3', '筆記と解説', 'Reading and explanations'], ['4', 'リスニング', 'Listening']], enShots: true,
      name: { ja: '英検トレーナー', en: 'Eiken Trainer' },
      desc: {
        ja: '英検 5 級・4 級・3 級の単語・筆記・リスニング・ライティングをまとめて学習。',
        en: 'Vocabulary, reading, listening and writing for Eiken Grades 5, 4 and 3.'
      }
    },
    {
      id: 'denko2', category: 'study', icon: true, manual: false,
      shots: [['1', 'ホーム', 'Home'], ['2', '問題', 'Question'], ['3', '解説', 'Explanation'], ['5', '学習範囲', 'Study range']], enShots: true,
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
    '.dngg-apps-more{margin-top:1em}' +
    '.dngg-apps[data-mode=all] .dngg-apps-list{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}' +
    '.dngg-app-full{display:block;padding:12px;border:1px solid #e3e3e3;border-radius:12px;background:#fff}' +
    '.dngg-app-head{display:flex;gap:12px;align-items:flex-start;line-height:1.5}' +
    '.dngg-app-shots{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:10px}' +
    '.dngg-app-shots a{display:block;border-radius:6px;overflow:hidden;border:1px solid #e3e3e3;background:#eee;aspect-ratio:9/16}' +
    '.dngg-app-shots img{display:block;width:100%;height:100%;object-fit:cover}';

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
    var box = el(full ? 'div' : 'a', full ? 'dngg-app-head' : 'dngg-app');
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
    if (!full) {
      li.appendChild(box);
      return li;
    }
    var wrap = el('div', 'dngg-app-full');
    wrap.appendChild(box);
    if (app.shots && app.shots.length) wrap.appendChild(shots(app, lang, base));
    li.appendChild(wrap);
    return li;
  }

  /** 画面の小さな画像（images/thumbs/<言語>/<名前>.jpg）。押すと紹介ページを開く。英語の画像がないアプリは日本語の画像を出す */
  function shots(app, lang, base) {
    var dir = base + app.id + '/images/thumbs/' + (lang === 'en' && app.enShots ? 'en' : 'ja') + '/';
    var row = el('div', 'dngg-app-shots');
    app.shots.forEach(function (s) {
      var a = el('a');
      a.href = base + app.id + '/';
      var img = el('img');
      img.src = dir + s[0] + '.jpg';
      img.alt = s[lang === 'en' ? 2 : 1];
      img.title = img.alt;
      img.width = 240;
      img.height = 427;
      img.loading = 'lazy';
      a.appendChild(img);
      row.appendChild(a);
    });
    return row;
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
