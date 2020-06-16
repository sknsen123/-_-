// 分けてみようと思って作ってみたけど結局分かりにくくてまだ使ってない、成績表示始めたところまでは一応簡単に映したよ

// 'use strict';
// {
//   var ncmb = new NCMB("ad3da03c7c0dbd222b0e7f0b7d891e9de2f79acda2dd3cdbf606a92687b13af5","e6b5108ec940908467b82b77bbc622e1c67fba5ca4ccc48202672bf769192839");

//   var question;
//   var score = 0;
//   var wrongAnswer = [];

//   document.addEventListener('init', function(event) {
//     var page = event.target;
    
//     // 本当は全部英語で書くんやできっと…英語できないとダメやで…
//     // 余裕があれば下の処理を時代別にするのではなくて1つにまとめる！！！

//     // 学習モードトップ⇔弥生時代
//     if (page.matches('#st-top-page')) {
//       page.querySelector('#yayoi-btn').onclick = function() {
//         document.querySelector('#navigator').pushPage('yayoi.html', {
//           // 'yayoi.html'に"弥生"というデータを渡す
//           data: {
//             時代: "弥生"
//           }
//         });
//       };
//     } else if (page.matches('#yayoi-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage();
//       };
//     }

//     // 学習モードトップ⇔飛鳥時代
//     if (page.matches('#st-top-page')) {
//       page.querySelector('#asuka-btn').onclick = function() {
//         document.querySelector('#navigator').pushPage('asuka.html',{
//           data: {
//             時代: "飛鳥"
//           }
//         });
//       };
//     } else if (page.matches('#asuka-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage();
//      };
//     }

//     // 学習モードトップ⇔奈良時代
//     if (page.matches('#st-top-page')) {
//       page.querySelector('#nara-btn').onclick = function() {
//         document.querySelector('#navigator').pushPage('nara.html', {
//           data: {
//             時代: "奈良"
//           }
//         });
//       };
//     } else if (page.matches('#nara-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage();
//       };
//     }

//     // 年号リスト⇔学習ページ
//     if (page.matches('#yayoi-page')) {
//       page.querySelector('#goro-btn1').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         // ↑「https://onsen.io/v2/api/js/ons-navigator.html#sending-custom-data-to-a-new-page」に書いてある
//         // topPage.data で上の'yayoi.html'に渡した"弥生"というデータを受け取る
//         age.年号 = "57"; //←ここを変えなければならない

//         // ここでさらに"弥生"に"57"というデータを足す(=代入する)
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#yayoi-page')) {
//       page.querySelector('#goro-btn2').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "239"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn3').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "538/552"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn4').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "593"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn5').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "603"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn6').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "604"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn7').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "607"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn8').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "645"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn9').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "663"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn10').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "672"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#asuka-page')) {
//       page.querySelector('#goro-btn11').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "701"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#nara-page')) {
//       page.querySelector('#goro-btn12').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "710"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     if (page.matches('#nara-page')) {
//       page.querySelector('#goro-btn13').onclick = function() {
//         let age = document.querySelector('#navigator').topPage.data;
//         age.年号 = "743"; 
//         document.querySelector('#navigator').pushPage('study-list.html', {
//           data: age
//         });
//       };
//     } else if (page.matches('#study-list-page')) {
//       page.querySelector('#st-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//       };
//     }
//     // ここまで力技で各学習ページを出しています。できればまとめよう。

//     // ページ開いたらその年号の解説とかが出るようにしたい。↓
//     if (page.matches('#study-list-page')) {

//       let age = document.querySelector('#navigator').topPage.data; //ここで{時代:"弥生", 年号:"57"}を受け取る
//       let foundHistory = history.find((element) => {
//         // historyという配列の中からelementを取り出す
//         return element.年号 === age.年号;
//       });

//       // 学習ページのJSのID取得→定数で定義
//       const era = document.getElementById('era');
//       const ageNum = document.getElementById('age-num');
//       const nengo = document.getElementById('nengo');
//       const stPic = document.getElementById('stPic');
//       const goro = document.getElementById('goro');
//       const explanation = document.getElementById('explanation');
//       const yuru = document.getElementById('yuru');
      
//       // 押された年号のその他(時代・番号・内容・語呂合わせ・解説)が入るようにして着地先に渡す
//       era.textContent = foundHistory.時代;
//       ageNum.textContent = foundHistory.時代別;
//       nengo.textContent = foundHistory.年号;
//       // 画像の表示の仕方：参考「https://techacademy.jp/magazine/20738」
//       stPic.src = foundHistory.画像;
//       goro.textContent = foundHistory.ゴロ合わせ;
//       explanation.textContent = foundHistory.内容;
//       yuru.textContent = foundHistory.解説;

//       // 横移動だけは「history.js」の「通し」を数値にすればいける
//       document.getElementById('next-btn').addEventListener('click', () => {
//         let presentGoro = foundHistory.通し;
//         if (foundHistory.通し === 13) {
//           return;
//         }
//         presentGoro ++;
//         foundHistory = history.find((element) => {
//           return element.通し === presentGoro;
//         });

//         era.textContent = foundHistory.時代;
//         ageNum.textContent = foundHistory.時代別;
//         nengo.textContent = foundHistory.年号;
//         stPic.src = foundHistory.画像;
//         goro.textContent = foundHistory.ゴロ合わせ;
//         explanation.textContent = foundHistory.内容;
//         yuru.textContent = foundHistory.解説;
//       });   

//       document.getElementById('prev-btn').addEventListener('click', () => {
//         let presentGoro = foundHistory.通し;
//         if (foundHistory.通し === 1) {
//           return;
//         }
//         presentGoro --;
//         foundHistory = history.find((element) => {
//           return element.通し === presentGoro;
//         });

//         era.textContent = foundHistory.時代;
//         ageNum.textContent = foundHistory.時代別;
//         nengo.textContent = foundHistory.年号;
//         stPic.src = foundHistory.画像;
//         goro.textContent = foundHistory.ゴロ合わせ;
//         explanation.textContent = foundHistory.内容;
//         yuru.textContent = foundHistory.解説;
//       });       

//     }

//     // ☆学習モード選択画面にいるとき
//     if (page.matches('#pra-top-page')) {
//       page.querySelector('#pra-start').onclick = function() {
//         document.querySelector('#navigator').pushPage('pra.html');
//       }
//     }
    
//     // ☆問題を解く画面に来たとき
//     else if (page.matches('#pra-page')) {

//       // ☆セレクトボックスで選択した値を取得する
//       const questionNum = document.getElementById("questionNum").value;
//       const format = document.getElementById("format").value;
//       const range = document.getElementById("range").value;

//       console.log(questionNum, format, range);

//       // 配列のフィルタリング参考「http://lifelog.main.jp/wordpress/?p=2557」
//       // ☆全問題から出題
//       if (format === "all-era") {
//         const findEra = history.filter(function(element) {
//           return element.時代;
//         });
//         console.log(findEra); 
//         // ↑これで取得してるのは配列
        
//         // 全時代からやるなら順番に出題を選択できないようにしてランダムのみ選択できるようにしたい
//         // ⇒これは余裕があったらやるやつ
//         if (range === "orderBy") {
//           if (questionNum === "10") {
//             question = findEra.slice(0, 10);
//             console.log(question);
//           } 
//           else if (questionNum === "30") {
//             question = findEra.slice(0, 30);
//             console.log(question);
//           } 
//           else if (questionNum === "50") {
//             question = findEra.slice(0, 50);
//             console.log(question);
//           }
//         } 
        
//         else if (range === "random") {
//           // ドットインストールのフィッシャー・イェーツのアルゴリズムのコード
//           // ⇒解説「https://qiita.com/may88seiji/items/69d5b05dff2c9d059155」
//           const shuffledObj = ([...findEra]) => {
//             for (let i = findEra.length - 1; i >= 0; i--) {
//               const j = Math.floor(Math.random() * (i + 1));
//               [findEra[i], findEra[j]] = [findEra[j], findEra[i]]
//             }
//             return findEra;
//           }
//           // フィッシャー・イェーツのアルゴリズム、表示参考「https://www.nxworld.net/tips/js-array-shuffle.html」
//           console.log(shuffledObj(findEra)); 

//           // ☆指定された問題数を配列で抜き取る
//           // ①10問
//           if (questionNum === "10") {
//             question = shuffledObj(findEra).slice(0, 10);
//             console.log(question);
//           } 
//           // ②30問
//           else if (questionNum === "30") {
//             question = shuffledObj(findEra).slice(0, 30);
//             console.log(question);
//           } 
//           // ③50問
//           else if (questionNum === "50") {
//             question = shuffledObj(findEra).slice(0, 50);
//             console.log(question);
//           }
//         }
//       }

//       // ☆時代別…弥生
//       else if (format === "yayoi-era") {
//         const findEra = history.filter(function(element) {
//           return element.時代 === "弥生";
//         });
//         console.log(findEra);

//         if (range === "orderBy") {
//           if (questionNum === "10" || "30" || "50") {
//             question = findEra.slice(0, 10);
//             console.log(question);
//           } 
//         } else if (range === "random") {
//           const shuffledObj = ([...findEra]) => {
//             for (let i = findEra.length - 1; i >= 0; i--) {
//               const j = Math.floor(Math.random() * (i + 1));
//               [findEra[i], findEra[j]] = [findEra[j], findEra[i]]
//             }
//             return findEra;
//           }
//           console.log(shuffledObj(findEra)); 

//           if (questionNum === "10" || "30" || "50") {
//             question = shuffledObj(findEra).slice(0, 10);
//             console.log(question);
//           } 
//         }
//       } 

//       // ☆時代別…飛鳥
//       else if (format === "asuka-era") {
//         const findEra = history.filter(function(element) {
//           return element.時代 === "飛鳥";
//         });
//         console.log(findEra);

//         if (range === "orderBy") {
//           if (questionNum === "10" || "30" || "50") {
//             question = findEra.slice(0, 10);
//             console.log(question);
//           } 
//         } else if (range === "random") {
//           const shuffledObj = ([...findEra]) => {
//             for (let i = findEra.length - 1; i >= 0; i--) {
//               const j = Math.floor(Math.random() * (i + 1));
//               [findEra[i], findEra[j]] = [findEra[j], findEra[i]]
//             }
//             return findEra;
//           }
//           console.log(shuffledObj(findEra)); 

//           if (questionNum === "10" || "30" || "50") {
//             question = shuffledObj(findEra).slice(0, 10);
//             console.log(question);
//           } 
//         }
//       } 

//       // ☆時代別…奈良
//       else if (format === "nara-era") {
//         const findEra = history.filter(function(element) {
//           return element.時代 === "奈良";
//         });
//         console.log(findEra);

//         if (range === "orderBy") {
//           if (questionNum === "10" || "30" || "50") {
//             question = findEra.slice(0, 10);
//             console.log(question);
//           } 
//         } else if (range === "random") {
//           const shuffledObj = ([...findEra]) => {
//             for (let i = findEra.length - 1; i >= 0; i--) {
//               const j = Math.floor(Math.random() * (i + 1));
//               [findEra[i], findEra[j]] = [findEra[j], findEra[i]]
//             }
//             return findEra;
//           }
//           console.log(shuffledObj(findEra)); 

//           if (questionNum === "10" || "30" || "50") {
//             question = shuffledObj(findEra).slice(0, 10);
//             console.log(question);
//           } 
//         }
//       }

//       page.querySelector('#pra-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage();
//         score = 0;
//         wrongAnswer = [];
//       }
//     }

//     // ☆ひな形に入れ込んでいく部分
//     if (page.matches('#pra-page')) {
//       const praPic = document.getElementById('praPic');
//       const praExplanation = document.getElementById('praExplanation');
//       let i = 0;
//       // let qNum = document.getElementById('qNum');

//       function nextQuestion() {
//         // ↓input(=入力欄)の中身を消去
//         var answerForm = document.getElementById('answer');
//         answerForm.value = '';

//         // 最後の問題だったら結果画面に遷移させる処理
//         if (i === question.length - 1) {
//           // すでにonclickが発火しているので、ここではonclickを設定しなくて良い！
//           document.querySelector('#navigator').pushPage('pra-score.html');
//           return;
//         }

//         // 第〇問のところどうにかしたくていじった ⇒ 上のscoreをvarで定義しないとうまくいかなくなる
//         i ++;
//         qNum.innerHTML = i + 1;
//         praPic.src = question[i].画像;
//         praExplanation.textContent = question[i].内容;
        
//         document.getElementById('ans-btn').disabled = true;
//       }
      
//       // 第〇問の部分を変える
//       qNum.innerHTML = i + 1;
//       praPic.src = question[i].画像;
//       praExplanation.textContent = question[i].内容;

//       // 2文字以上入力しないとボタンが押せないようにする処理
//       document.getElementById('ans-btn').disabled = true;
//       document.getElementById('answer').addEventListener('keyup', function() {
//         if (this.value.length < 2) {
//           document.getElementById('ans-btn').disabled = true;
//         } else {
//           document.getElementById('ans-btn').disabled = false;
//         }
//       });

//       // クリックしたら次の問題が表示されるようにしている
//       document.getElementById('ans-btn').addEventListener('click', () => {
//         const answer = document.getElementById("answer").value;
        
//         // ☆正誤判定
//         if (String(answer) === question[i].年号) {
//           // 何問正解かだけでいいので情報を保持して、結果表示のところで数字を使う
//           // できれば〇！とか×！の画像を表示したい⇒あとで。

//           score++;
//         } else {
//           // 間違えた問題を保持
//           wrongAnswer.push(question[i]);
//         }
//         console.log(wrongAnswer, score);
        
//         // 1秒後に次の問題へ進める
//         setTimeout(() => {
//           nextQuestion();
//         }, 500);
        
//       });   
//     }

//     // ☆結果表示ページの処理
//     if (page.matches('#pra-score-page')) {
//       // 〇正答数表示
//       const praScore = document.querySelector('#pra-score');
//       // const scorePic = document.querySelector('#scorePic');
//       praScore.textContent = `${score} / ${question.length}`;

//       // 〇正解数に応じたコメントをつける
//       // jsの除法は小数点以下までちゃんと出してくれるみたいだからこれにしました。改行させたい。調べる。
//       const praComment = document.getElementById('pra-comment');
//       if (score / question.length === 1) {
//         praComment.textContent = "Perfect!!! \n これで君もゴロ合わせは完璧だ！ \n 忘れないように復習しよう！"
//         // 全問正解の時だけ何もないのつまらないから画像が表示されるようにしたい
//         // scorePic.src = "css/picture/ヘタリア_日本.jpg";
//       } else if (score / question.length >= 0.8) {
//         praComment.textContent = "Excellent!!! \n もう少しでパーフェクト！ \n 覚えるまでやりこもう！"
//       } else if (score / question.length >= 0.6) {
//         praComment.textContent = "Great!! \n すごいすごい！いい調子！ \n 全問正解目指して頑張ろう！"
//       } else if (score / question.length >= 0.4) {
//         praComment.textContent = "Good! \n 少し覚えてきたね！ \n いい調子だよ、頑張ろう！"
//       } else {
//         praComment.textContent = "OK! \n まだまだこれからだね！ \n 少しずつ頑張っていこう！"
//       }

      
//       // 〇間違えた問題の解説
//       // それぞれをボーダーで囲みたいんだけどできるかしら、明日以降やる
//       wrongAnswer.forEach((wrongElement) => {

//         var praScorePic = document.createElement('img');
//         var praScoreNengo = document.createElement('p');
//         var praScoreExplanation = document.createElement('p');
//         var praScoreYuru = document.createElement('p');

//         praScorePic.src = wrongElement.画像;
//         praScorePic.height = 200;
//         praScoreNengo.textContent = wrongElement.年号;
//         praScoreExplanation.textContent = wrongElement.内容;
//         praScoreYuru.textContent = wrongElement.解説;

//         document.getElementById('scoreExplanation').appendChild(praScorePic);
//         document.getElementById('scoreExplanation').appendChild(praScoreNengo);
//         document.getElementById('scoreExplanation').appendChild(praScoreExplanation);
//         document.getElementById('scoreExplanation').appendChild(praScoreYuru);

//       });

//       // 練習モードtopに戻るボタンの有効化
//       page.querySelector('#pra-top-btn').onclick = function() {
//         document.querySelector('#navigator').popPage({times: 2});
//         score = 0;
//         wrongAnswer = [];
//       };
//     }

//     // 実施結果をニフクラに流し込む処理 …下のはとりあえず書いてみた的な
//     var TestScore = ncmb.DataStore("TestScore");
//     var testScore = new TestScore();


//   });

//   if (ons.platform.isIPhoneX()) {
//     document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
//     document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
//   }
// }