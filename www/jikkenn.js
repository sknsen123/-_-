// 一旦時代は別リスト
const jidaiList = [
  {
    "時代名": "弥生",
    "ID": "yayoi"
  },
  {
    "時代名": "飛鳥",
    "ID": "asuka"
  }
];
  // 一部抜粋
const nengoList = [
  {
    "時代": "弥生",
    "通し": 1,
    "時代別": "1",
    "年号": "57",
    "画像": "css/picture/金印.jpg",
    "内容": "漢委奴国王と書かれた金印をもらう",
    "ゴロ合わせ": "コンナ金印５７",
    "解説": "あなたを漢(中国)の中の倭(日本)の中の奴国の王様と認めますよー"
  },
  {
    "時代": "弥生",
    "通し": 2,
    "時代別": "2",
    "年号": "239",
    "画像": "css/picture/卑弥呼.png",
    "内容": "卑弥呼に魏から手紙が届く",
    "ゴロ合わせ": "卑弥呼に文来る（フミク）２３９",
    "解説": "卑弥呼を魏(中国)と親しい倭(日本)の王と認めますよー"
  },
  {
    "時代": "飛鳥",
    "通し": 3,
    "時代別": "1",
    "年号": "538",
    "画像": "css/picture/お釈迦様.png",
    "内容": "仏教伝来",
    "ゴロ合わせ": "ゴミヤはゴゴニ",
    "解説": "仏教以外にもいろいろ教えてもらったよ"
  }
];
for (let jidai of jidaiList){
  SetJidai(jidai.時代名, jidai.ID);
}
function SetJidai(時代名, ID){
  // 学習モードトップ⇔時代
  if (page.matches('#st-top-page')) {
      page.querySelector('#' + ID + '-btn').onclick = function() {
        document.querySelector('#navigator').pushPage(id + '.html', {
          data: {
            時代: 時代名
          }
        });
      };
  } else if (page.matches('#' + ID + '-page')) {
      page.querySelector('#st-top-btn').onclick = function() {
        document.querySelector('#navigator').popPage();
      };
      // 以下、goroループ
      for (let nengo of nengoList){
        // SetJidaiの引数の時代名と一致するもののみ処理の対象に
        if (nengo.時代 = 時代名) {
          SetNengo(nengo.通し, nengo.年号);
        }
      }
  }
}
function SetNengo(通し, 年号){
  page.querySelector('#goro-btn' + 通し).onclick = function() {
    let age = document.querySelector('#navigator').topPage.data;
    age.年号 = 年号;
    document.querySelector('#navigator').pushPage('study-list.html', {
      data: age
    });
  };
}