﻿// 1919の後ろ、()で番号振ったよ
// 今後の課題⇒JSONのファイルの一部を数値で取得することはできないのかな？
// そもそもJSONは文字列のファイルって書いてあったから無理かなぁ…

let history = [
  {
      "時代": "弥生",
      "通し": 1,
      "時代別": "1",
      "年号": "57",
      "画像": "css/金印.jpg",
      "内容": "漢委奴国王と書かれた金印をもらう",
      "ゴロ合わせ": "コンナ金印５７",
      "解説": "あなたを漢(中国)の中の倭(日本)の中の奴国の王様と認めますよー"
    },
    {
      "時代": "弥生",
      "通し": 2,
      "時代別": "2",
      "年号": "239",
      "画像": "css/卑弥呼.png",
      "内容": "卑弥呼に魏から手紙が届く",
      "ゴロ合わせ": "卑弥呼に文来る（フミク）２３９",
      "解説": "卑弥呼を魏(中国)と親しい倭(日本)の王と認めますよー"
    },
    {
      "時代": "飛鳥",
      "通し": 3,
      "時代別": "1",
      "年号": "538/552",
      "画像": "css/お釈迦様.png",
      "内容": "仏教伝来",
      "ゴロ合わせ": "ゴミヤはゴゴニ",
      "解説": "仏教以外にもいろいろ教えてもらったよ"
    },
    {
      "時代": "飛鳥",
      "通し": 4,
      "時代別": "2",
      "年号": "593",
      "画像": "css/聖徳太子.png",
      "内容": "聖徳太子が推古天皇の摂政になる",
      "ゴロ合わせ": "聖徳太子はコックさん",
      "解説": "聖徳太子が推古天皇をお助けいたします！"
    },
    {
      "時代": "飛鳥",
      "通し": 5,
      "時代別": "3",
      "年号": "603",
      "画像": "css/冠位十二階.png",
      "内容": "冠位十二階の制",
      "ゴロ合わせ": "労を授かる（ロヲサ）冠位十二階",
      "解説": "仕事できる奴が偉くなるんだぜー"
    },
    {
      "時代": "飛鳥",
      "通し": 6,
      "時代別": "4",
      "年号": "604",
      "画像": "css/十七条の憲法.jpg",
      "内容": "憲法十七条制定",
      "ゴロ合わせ": "大使が作った憲法に、群れ寄る（ムレヨ）役人、数知れず",
      "解説": "みんな仲良く天皇のもとで暮らしましょうね"
    },
    {
      "時代": "飛鳥",
      "通し": 7,
      "時代別": "5",
      "年号": "607",
      "画像": "css/小野妹子.png",
      "内容": "小野妹子が遣隋使として隋へ",
      "ゴロ合わせ": "無礼な（ブレイナ）おっさん小野妹子",
      "解説": "日本「太陽の上る国の王様が太陽の沈む国の王様に手紙を送るよ！元気ー？」"
    },
    {
      "時代": "飛鳥",
      "通し": 8,
      "時代別": "6",
      "年号": "645",
      "画像": "css/乙巳の変.jpg",
      "内容": "大化の改新が行われる",
      "ゴロ合わせ": "虫殺して（ムシコ）大化の改新",
      "解説": "天皇が一番偉い国を作ろうぜ！"
    },
    {
      "時代": "飛鳥",
      "通し": 9,
      "時代別": "7",
      "年号": "663",
      "画像": "css/朝鮮半島.png",
      "内容": "白村江の戦いが起こる",
      "ゴロ合わせ": "ロクロクミ（663）ないで、白村江",
      "解説": "日本が新羅と唐にぼっこぼこにされたのがこれ"
    },
    {
      "時代": "飛鳥",
      "通し": 10,
      "時代別": "8",
      "年号": "697",
      "画像": "css/天武天皇.jpg",
      "内容": "壬申の乱がおこる",
      "ゴロ合わせ": "いやーこの頃ろくな(ロクナ二)人間いませんね",
      "解説": "天皇の座を巡って家族内で殺し合い"
    },
    {
      "時代": "飛鳥",
      "通し": 11,
      "時代別": "9",
      "年号": "701",
      "画像": "css/藤原不比等.png",
      "内容": "大宝律令が発令される",
      "ゴロ合わせ": "８世紀の最初の年に大宝律令",
      "解説": "法律ちゃんと作ってみたよ"
    },
    {
      "時代": "奈良",
      "通し": 12,
      "時代別": "1",
      "年号": "710",
      "画像": "css/平城京.jpg",
      "内容": "平城京遷都",
      "ゴロ合わせ": "なんと(ナント)立派な平城京",
      "解説": "平城京、現在はだだっ広い草原"
    },
    {
      "時代": "奈良",
      "通し": 13,
      "時代別": "2",
      "年号": "743",
      "画像": "css/聖武天皇.png",
      "内容": "墾田永年私財法・聖武の時代",
      "ゴロ合わせ": "返すの無しさ(ナシサ)！私財法",
      "解説": "仏教に頼れば不況も流行り病もなんとかなる"
    },
    {
      "時代": "平安",
      "通し": 14,
      "時代別": "1",
      "年号": "794",
      "画像": "css/平安京.jpg",
      "内容": "平安京遷都",
      "ゴロ合わせ": "鳴くよ(ナクヨ)うぐいす平安京",
      "解説": "平安京、京都中心部は今も観光地として大人気！"
    },
    {
      "時代": "平安",
      "通し": 15,
      "時代別": "2",
      "年号": "797",
      "画像": "css/坂上田村麻呂.png",
      "内容": "坂上田村麻呂が征夷大将軍になる",
      "ゴロ合わせ": "泣くな（ナクナ）行ってこい田村麻呂",
      "解説": "東北も天皇の支配下においてやるぜっっっ！"
    },
    {
      "時代": "平安",
      "通し": 16,
      "時代別": "3",
      "年号": "804",
      "内容": "最澄・空海が入唐",
      "ゴロ合わせ": "歯をしっかり（ハオシ）磨いて唐に出発",
      "解説": "唐(中国)で仏教の勉強をしてまいります！"
    },
    {
      "時代": "平安",
      "通し": 17,
      "時代別": "4",
      "年号": "894",
      "内容": "遣唐使が停止される",
      "ゴロ合わせ": "白紙(ハクシ)にもどそう遣唐使",
      "解説": "もう唐(中国)から学ぶことは特に無いから勉強会辞めます。"
    },
    {
      "時代": "平安",
      "通し": 18,
      "時代別": "5",
      "年号": "939",
      "内容": "平将門・藤原純友の乱が起こる",
      "ゴロ合わせ": "藤原純友　臭く（クサク）ない？",
      "解説": "将門・純友「こんな世界くそくらえだ！俺たちが変えてやる！」"
    },
    {
      "時代": "平安",
      "通し": 19,
      "時代別": "6",
      "年号": "1016",
      "内容": "藤原道長が権力を持つ",
      "ゴロ合わせ": "遠い昔（トオイム）の摂関政治",
      "解説": "この世のすべてを手に入れた男"
    },
    {
      "時代": "平安",
      "通し": 20,
      "時代別": "7",
      "年号": "1086",
      "内容": "白河院政が行われる",
      "ゴロ合わせ": "父（トオ）ちゃんやろ（ヤロ）う白河院政",
      "解説": "藤原じゃなくて天皇より偉くなった父ちゃんが政治したるわ"
    },
    {
      "時代": "平安",
      "通し": 21,
      "時代別": "8",
      "年号": "1167",
      "内容": "平清盛が太政大臣になる",
      "ゴロ合わせ": "平清盛いい胸毛（イイムナ）",
      "解説": "貴族(っぽいもの)に成り上がった男"
    },
    {
      "時代": "鎌倉",
      "通し": 22,
      "時代別": "1",
      "年号": "1192",
      "内容": "鎌倉幕府が成立する",
      "ゴロ合わせ": "いい国(イイクニ)つくろう頼朝さん",
      "解説": "かの有名な源頼朝公"
    },
    {
      "時代": "鎌倉",
      "通し": 23,
      "時代別": "2",
      "年号": "1221",
      "内容": "承久の乱が起こる",
      "ゴロ合わせ": "２のサンドイッチ",
      "解説": "後鳥羽上皇「武士が政治やるなんてけしからん、政治は天皇がやるんだい！」→完敗"
    },
    {
      "時代": "鎌倉",
      "通し": 24,
      "時代別": "3",
      "年号": "1232",
      "内容": "御成敗式目が定められる",
      "ゴロ合わせ": "いつ見に（イツミニ）行っても御成敗",
      "解説": "揉め事があまりにも多すぎるから自分たちで解決してねとマニュアルを作りました"
    },
    {
      "時代": "鎌倉",
      "通し": 25,
      "時代別": "4",
      "年号": "1274",
      "内容": "元寇",
      "ゴロ合わせ": "生き残った人、1人なし（イチニンナシ）",
      "解説": "元「日本を侵略してやる！」"
    },
    {
      "時代": "鎌倉",
      "通し": 26,
      "時代別": "5",
      "年号": "1297",
      "内容": "永仁の徳政令が発令される",
      "ゴロ合わせ": "とっても皮肉な(ヒニクナ)徳政令",
      "解説": "御家人が抱えている借金を全部取り消してあげよう"
    },
    {
      "時代": "室町",
      "通し": 27,
      "時代別": "1",
      "年号": "1334",
      "内容": "建武の新政が行われる",
      "ゴロ合わせ": "さあさしっかり(ササシ)建武の新政",
      "解説": "後醍醐天皇が調子乗って自分のやりたい放題に政治進めたら味方に裏切られた"
    },
    {
      "時代": "室町",
      "通し": 28,
      "時代別": "2",
      "年号": "1338",
      "内容": "足利尊氏が征夷大将軍になる",
      "ゴロ合わせ": "瞳さわやか(ヒトミサワ）尊氏さん",
      "解説": "足利尊氏の「尊」は後醍醐天皇からもらった漢字らしい"
    },
    {
      "時代": "室町",
      "通し": 29,
      "時代別": "3",
      "年号": "1404",
      "内容": "日明貿易(勘合貿易)の開始",
      "ゴロ合わせ": "明の人、寄れよ（ヒトヨレヨ）日本に",
      "解説": "倭寇(海賊)に荷物奪われないように厳重に警戒して貿易するぞ！"
    },
    {
      "時代": "室町",
      "通し": 30,
      "時代別": "4",
      "年号": "1428",
      "内容": "正長の土一揆が起こる",
      "ゴロ合わせ": "一緒にやろう（イッショニヤ）土一揆",
      "解説": "農民が抱えてる借金を全部取り消してくれよー！って言いながら農民大暴れ"
    },
    {
      "時代": "室町",
      "通し": 31,
      "時代別": "5",
      "年号": "1467",
      "内容": "応仁の乱が起こる",
      "ゴロ合わせ": "人の世むなしい(ヒトヨムナ)応仁の乱",
      "解説": "将軍の跡継ぎ争いしてたら京都が焼け野原になった"
    },
    {
      "時代": "室町",
      "通し": 32,
      "時代別": "6",
      "年号": "1485",
      "内容": "山城国一揆が起こる",
      "ゴロ合わせ": "意地で反抗(イジハコ)国一揆",
      "解説": "山城国はみんなで治めるからよろしく"
    },
    {
      "時代": "室町",
      "通し": 33,
      "時代別": "7",
      "年号": "1488",
      "内容": "加賀の一向一揆が起こる",
      "ゴロ合わせ": "意思がはばたく(イシハバ)一向一揆",
      "解説": "加賀国は農民が自分たちで治めるからよろしく"
    },
    {
      "時代": "室町",
      "通し": 34,
      "時代別": "8",
      "年号": "1492",
      "内容": "コロンブスがアメリカ大陸を発見する",
      "ゴロ合わせ": "意欲に(イヨクニ)燃えるコロンブス",
      "解説": "インドを探しに行ったはずなのにアメリカに着いていた男"
    },
    {
      "時代": "室町",
      "通し": 35,
      "時代別": "9",
      "年号": "1498",
      "内容": "バスコ=ダ=ガマがインドに到達する",
      "ゴロ合わせ": "意欲やった（イヨクヤ）バスコ・ダ・ガマ",
      "解説": "ずっと行きたかったインドに行けた男"
    },
    {
      "時代": "室町",
      "通し": 36,
      "時代別": "10",
      "年号": "1517",
      "内容": "ルターが中心になって宗教改革が起こる",
      "ゴロ合わせ": "ルターが食べてるいちごいいな（イチゴイイナ）",
      "解説": "キリスト教腐ってるからちゃんとしたキリスト教に戻そうぜ"
    },
    {
      "時代": "室町",
      "通し": 37,
      "時代別": "11",
      "年号": "1519",
      "内容": "マゼラン一行が世界一周の旅を開始する",
      "ゴロ合わせ": "マゼラン一行行く（イッコウイク）",
      "解説": "フィリピンで殺された男、マゼラン…"
    },
    {
      "時代": "室町",
      "通し": 38,
      "時代別": "12",
      "年号": "1543",
      "内容": "鉄砲伝来",
      "ゴロ合わせ": "鉄砲2丁いいご予算(イイゴヨサン）",
      "解説": "鉄砲2丁で3億円…たっか"
    },
    {
      "時代": "室町",
      "通し": 39,
      "時代別": "13",
      "年号": "1549",
      "内容": "キリスト教伝来",
      "ゴロ合わせ": "以後、よく(イゴヨク)広まるキリスト教",
      "解説": "キリスト教信者の大名も出るほど日本全国に広まった"
    },
    {
      "時代": "安土桃山",
      "通し": 40,
      "時代別": "1",
      "年号": "1560",
      "内容": "桶狭間の戦いが起こる",
      "ゴロ合わせ": "いちご（イチゴ）の群れ（ムレ）",
      "解説": "今川が酒盛りしているところに織田が奇襲を仕掛けたよ"
    },
    {
      "時代": "安土桃山",
      "通し": "41",
      "時代別": "2",
      "年号": "1575",
      "内容": "長篠の戦いが起こる",
      "ゴロ合わせ": "長篠の以後和やか（イゴナゴ）な鉄砲隊",
      "解説": "織田の鉄砲隊は当時最強だった武田氏を破るくらい強かった"
    },
    {
      "時代": "安土桃山",
      "通し": "42",
      "時代別": "3",
      "年号": "1582",
      "内容": "本能寺の変が起こる・太閤検地が行われる",
      "ゴロ合わせ": "イチゴパンツの本能寺",
      "解説": "織田から豊臣へ代替わり"
    },
    {
      "時代": "安土桃山",
      "通し": "43",
      "時代別": "4",
      "年号": "1588",
      "内容": "刀狩が行われる",
      "ゴロ合わせ": "以後、ぱっぱ(イゴパッパ)と働く農民たち",
      "解説": "農民から武器を全部奪ったよ"
    },
    {
      "時代": "安土桃山",
      "通し": "44",
      "時代別": "5",
      "年号": "1600",
      "内容": "関ヶ原の戦いが起こる",
      "ゴロ合わせ": "１６世紀の終わりに関が原",
      "解説": "天下分け目の戦いは、たったの６時間で決着がついた"
    },
    {
      "時代": "江戸",
      "通し": "45",
      "時代別": "1",
      "年号": "1603",
      "内容": "江戸幕府が成立する",
      "ゴロ合わせ": "ヒーローオッサン家康さん",
      "解説": "260年続く江戸時代の幕開け"
    },
    {
      "時代": "江戸",
      "通し": "46",
      "時代別": "2",
      "年号": "1615",
      "内容": "武家諸法度が発令される",
      "ゴロ合わせ": "とろい御（トロイゴ）法度つくったな",
      "解説": "大名のみんなはちゃんと守ってねー"
    },
    {
      "時代": "江戸",
      "通し": "47",
      "時代別": "3",
      "年号": "1635",
      "内容": "武家諸法度に参勤交代が追加される",
      "ゴロ合わせ": "大名行列、色みごと（イロミゴ）",
      "解説": "奥さんと子供(大名の人質)に会いに江戸においで"
    },
    {
      "時代": "江戸",
      "通し": "48",
      "時代別": "4",
      "年号": "1637",
      "内容": "島原・天草一揆が起こる",
      "ゴロ合わせ": "人無残な（ヒトムザナ）り、島原の乱",
      "解説": "天草四郎は16歳で総大将になった"
    },
    {
      "時代": "江戸",
      "通し": "49",
      "時代別": "5",
      "年号": "1639",
      "内容": "鎖国が完成する",
      "ゴロ合わせ": "一路柵（イチロサク）出せ、鎖国完成",
      "解説": "外国の影響なんていらない、200年くらい日本人引きこもります"
    },
    {
      "時代": "江戸",
      "通し": "50",
      "時代別": "6",
      "年号": "1642",
      "内容": "ピューリタン(清教徒)革命が起こる",
      "ゴロ合わせ": "ヒーロー世に（ヒロヨニ）出る清教徒",
      "解説": "宗教の自由を認めてくれない王様なんて処刑しろー！"
    },
    {
      "時代": "江戸",
      "通し": "51",
      "時代別": "7",
      "年号": "1680",
      "内容": "徳川綱吉が将軍になる",
      "ゴロ合わせ": "ヒーローはお（ヒーローハオ）れだ、綱吉だ",
      "解説": "人間よりも犬のほうが良いものを食べれるようになった法律、生類憐みの令を出した人"
    },
    {
      "時代": "江戸",
      "通し": "52",
      "時代別": "8",
      "年号": "1688",
      "内容": "名誉革命が起こる",
      "ゴロ合わせ": "ヒーローはばたく（ヒーローハバ）名誉革命",
      "解説": "血が一滴も流れないから「名誉」"
    },
    {
      "時代": "江戸",
      "通し": "53",
      "時代別": "9",
      "年号": "1709",
      "内容": "新井白石による正徳の治が行われる",
      "ゴロ合わせ": "綱吉の政治の非難まるく（ヒナンマルク）おさめる新井白石",
      "解説": "徳川綱吉がお金無駄遣いしまくるから、その尻ぬぐいに駆り出された苦労人"
    },
    {
      "時代": "江戸",
      "通し": "54",
      "時代別": "10",
      "年号": "1716",
      "内容": "享保の改革(徳川吉宗)が行われる",
      "ゴロ合わせ": "非難いろいろ（イロイロ）享保の改革",
      "解説": "庶民の意見を聞いて政治にも反映させよう、裁判の基準を作るぞ！"
    },
    {
      "時代": "江戸",
      "通し": "55",
      "時代別": "11",
      "年号": "1765",
      "内容": "イギリスで世界初の産業革命が始まる",
      "ゴロ合わせ": "どうなろう、こ（ドウナロウコ）れからの産業は",
      "解説": "工業が手作業じゃなくなるからたーくさん物を作れるようになるよ！"
    },
    {
      "時代": "江戸",
      "通し": "56",
      "時代別": "12",
      "年号": "1772",
      "内容": "田沼意次の政治が行われる",
      "ゴロ合わせ": "柔軟な人間（ジュウナンナ二）ですよ、田沼さん",
      "解説": "わいろが横行した時代、わいろを助長したのはこの人。"
    },
    {
      "時代": "江戸",
      "通し": "57",
      "時代別": "13",
      "年号": "1775",
      "内容": "アメリカ独立戦争が起こる",
      "ゴロ合わせ": "お前らいーな、和んでる(イーナ、ナゴ)場合ではないんだ、独立するんだ",
      "解説": "もうイギリスの支配には耐えられん、ジョージ・ワシントンをトップにしてアメリカを独立させるぞ！"
    },
    {
      "時代": "江戸",
      "通し": "58",
      "時代別": "14",
      "年号": "1787",
      "内容": "寛政の改革(松平定信)が行われる",
      "ゴロ合わせ": "粋な花（イキナハナ）咲く 寛政の改革",
      "解説": "質素倹約節制生活！を強制しすぎた人"
    },
    {
      "時代": "江戸",
      "通し": "59",
      "時代別": "15",
      "年号": "1789",
      "内容": "フランス革命が起こる",
      "ゴロ合わせ": "非難爆（ヒナンバク）発バスティーユ",
      "解説": "あの有名なマリー・アントワネットはここで処刑されました"
    },
    {
      "時代": "江戸",
      "通し": "60",
      "時代別": "16",
      "年号": "1837",
      "内容": "大塩平八郎の乱が起こる",
      "ゴロ合わせ": "人は皆(ヒトハミナ)怒っているんですよ！",
      "解説": "半日で鎮圧されてしまった…"
    },
    {
      "時代": "江戸",
      "通し": "61",
      "時代別": "17",
      "年号": "1840",
      "内容": "アヘン戦争が起こる",
      "ゴロ合わせ": "アヘンで人はよれよれ(ヒトハヨレ)だ―",
      "解説": "ここで香港がイギリスのものになり、150年間イギリスの割譲地となったのだった"
    },
    {
      "時代": "江戸",
      "通し": "62",
      "時代別": "18",
      "年号": "1841",
      "内容": "天保の改革(水野忠邦)が行われる",
      "ゴロ合わせ": "人は「良い！」（ヒトハヨイ）と言う天保の改革",
      "解説": "やりたかったことが何もかも全部うまくいかなかった人。"
    },
    {
      "時代": "江戸",
      "通し": "63",
      "時代別": "19",
      "年号": "1853",
      "内容": "ペリーが浦賀に来航する",
      "ゴロ合わせ": "いやでござ（イヤゴザ）んすペリーさん",
      "解説": "ペリー「日本の皆さん、仲良くなりましょう！」日本「1年経ったらもう一回来てください返事するんで！」"
    },
    {
      "時代": "江戸",
      "通し": "64",
      "時代別": "20",
      "年号": "1854",
      "内容": "日米和親条約が結ばれる",
      "ゴロ合わせ": "一夜越し(イチヤゴシ)で結ばれた日米和親条約でした。",
      "解説": "ペリー「ちゃんと来ましたよ！貿易しましょう！」日本「………わかりました」"
    },
    {
      "時代": "江戸",
      "通し": "65",
      "時代別": "21",
      "年号": "1858",
      "内容": "日米修好通商条約が結ばれる",
      "ゴロ合わせ": "人は怖がる(ヒトハコワ)日米通商条約結ばれた",
      "解説": "ハリス「もっともっともっと貿易盛んにやりましょう！」日本「わかりました(泣)」"
    },
    {
      "時代": "江戸",
      "通し": "66",
      "時代別": "22",
      "年号": "1860",
      "内容": "桜田門外の変が起こる",
      "ゴロ合わせ": "いんちき野郎（インチキヤロウ）が桜田門外で殺されたー",
      "解説": "井伊直弼は日米修好通商条を勝手に結んだ人。"
    },
    {
      "時代": "江戸",
      "通し": "67",
      "時代別": "23",
      "年号": "1861",
      "内容": "南北戦争が起こる",
      "ゴロ合わせ": "人は無意味（ヒトハムイ）な 南北戦争",
      "解説": "奴隷制度反対(北部) VS 奴隷制度賛成(南部)の戦い"
    },
    {
      "時代": "江戸",
      "通し": "68",
      "時代別": "24",
      "年号": "1867",
      "内容": "大政奉還が起こる",
      "ゴロ合わせ": "一夜でむなしい(イチヤムナ)　大政奉還",
      "解説": "慶喜「政治する権利を天皇家に返すね…」"
    },
    {
      "時代": "明治",
      "通し": "69",
      "時代別": "1",
      "年号": "1868",
      "内容": "五箇条の御誓文が起こる",
      "ゴロ合わせ": "いや、６は(イヤ６ハ)多いよ、御誓文",
      "解説": "みんなで話し合って政治していきましょーえいえいおー"
    },
    {
      "時代": "明治",
      "通し": "70",
      "時代別": "2",
      "年号": "1869",
      "内容": "版籍奉還",
      "ゴロ合わせ": "人はむくれる(ヒトハムク)版籍奉還",
      "解説": "土地も人もすべて天皇のものやで、藩のものじゃないんやで。"
    },
    {
      "時代": "明治",
      "通し": "71",
      "時代別": "3",
      "年号": "1871",
      "内容": "廃藩置県",
      "ゴロ合わせ": "藩とは言わない（イワナイ）廃藩置県",
      "解説": "3府72県に分かれたよ"
    },
    {
      "時代": "明治",
      "通し": "72",
      "時代別": "4",
      "年号": "1872",
      "内容": "学制",
      "ゴロ合わせ": "いやーなつかしい（イヤナツ）学制時代",
      "解説": "6歳以上の男女はみんな学校に行こう？？？"
    },
    {
      "時代": "明治",
      "通し": "73",
      "時代別": "5",
      "年号": "1873",
      "内容": "地租改正",
      "ゴロ合わせ": "いやな３％(イヤナ３)だ、地租改正",
      "解説": "税金を年貢(米)じゃなくてお金にしよう"
    },
    {
      "時代": "明治",
      "通し": "74",
      "時代別": "6",
      "年号": "1873",
      "内容": "徴兵令",
      "ゴロ合わせ": "人は涙(ヒトハナミ)の徴兵令",
      "解説": "20歳以上の男子は3年間軍隊に入れちゃう"
    },
    {
      "時代": "明治",
      "通し": "75",
      "時代別": "7",
      "年号": "1876",
      "内容": "日朝修好条規が結ばれる",
      "ゴロ合わせ": "江華島で 嫌なムード（イヤナム）の 修好条規",
      "解説": "朝鮮には上から目線でいたかった日本…"
    },
    {
      "時代": "明治",
      "通し": "76",
      "時代別": "8",
      "年号": "1877",
      "内容": "西南戦争が起こる",
      "ゴロ合わせ": "嫌な涙の（いやなな）西南戦争",
      "解説": "あの有名な西郷どんが活躍したのはここ"
    },
    {
      "時代": "明治",
      "通し": "77",
      "時代別": "9",
      "年号": "1889",
      "内容": "大日本帝国憲法が発布される",
      "ゴロ合わせ": "いち早く(イチハヤク)ドイツ見習い　大日本帝国憲法",
      "解説": "プロイセン(ドイツ)から学んだぞ！天皇第一！天皇陛下万歳！"
    },
    {
      "時代": "明治",
      "通し": "78",
      "時代別": "10",
      "年号": "1894",
      "内容": "日清戦争が起こる",
      "ゴロ合わせ": "人は苦心の(ヒトハクシ)日清戦争",
      "解説": "中国「朝鮮は俺がいただく！日本なんかにやらん！」日本「朝鮮は俺がいただく！中国なんかにやらん！」"
    },
    {
      "時代": "明治",
      "通し": "79",
      "時代別": "11",
      "年号": "1902",
      "内容": "日英同盟が結ばれる",
      "ゴロ合わせ": "行くわ日英（イクハニ）、同盟だ",
      "解説": "お互いロシアが怖いから仲良くしとこうぜ☆"
    },
    {
      "時代": "明治",
      "通し": "80",
      "時代別": "12",
      "年号": "1904",
      "内容": "日露戦争が起こる",
      "ゴロ合わせ": "与謝野晶子が一句を読む(イックヲヨ)間にロシア艦隊撃沈！",
      "解説": "ロシアの強い艦隊との戦いに打ち勝った日本…！がんばったね…！"
    },
    {
      "時代": "大正",
      "通し": "81",
      "時代別": "1",
      "年号": "1910",
      "内容": "韓国併合",
      "ゴロ合わせ": "俺は行く、銃(イク、ジュウ)を持って韓国へ",
      "解説": "1500年前から欲しかった韓国がやっと日本の植民地になった…！"
    },
    {
      "時代": "大正",
      "通し": "82",
      "時代別": "2",
      "年号": "1914",
      "内容": "第一次世界大戦が起こる",
      "ゴロ合わせ": "日本も行く意思（イクイシ）固める世界大戦",
      "解説": "オーストリア皇太子夫妻暗殺されたぞ！？戦争だ！！！"
    },
    {
      "時代": "大正",
      "通し": "83",
      "時代別": "3",
      "年号": "1915",
      "内容": "二十一か条の要求が出される",
      "ゴロ合わせ": "行く人強引(イクヒトゴ)な二十一か条の要求",
      "解説": "戦争のどさくさに紛れて中国の一部を日本も占領しよう"
    },
    {
      "時代": "大正",
      "通し": "84",
      "時代別": "4",
      "年号": "1917",
      "内容": "ロシア革命が起こる",
      "ゴロ合わせ": "革命得意な（トクイナ）、レーニンさん",
      "解説": "ロシア帝国からソビエト社会主義共和国連邦に進化しましたー"
    },
    {
      "時代": "大正",
      "通し": "85",
      "時代別": "5",
      "年号": "1918",
      "内容": "米騒動が起こる",
      "ゴロ合わせ": "遠く富山（トオクトヤ）で米騒動",
      "解説": "富山のおばちゃん達がはじまり。おばちゃん強すぎるぜ…"
    },
    {
      "時代": "大正",
      "通し": "86",
      "時代別": "6",
      "年号": "1919(1)",
      "内容": "ベルサイユ条約が結ばれる",
      "ゴロ合わせ": "行く行く(イクイク)一緒にベルサイユ",
      "解説": "花の都パリで第一次世界大戦の後始末するよ！ドイツは約200兆円の借金返済頑張って☆"
    },
    {
      "時代": "大正",
      "通し": "87",
      "時代別": "7",
      "年号": "1919(2)",
      "内容": "三・一独立運動が起こる",
      "ゴロ合わせ": "行く行く(イクイク)長さん中腰へ",
      "解説": "韓国「日本の支配なんて受け付けない！日本出ていけー！」"
    },
    {
      "時代": "大正",
      "通し": "88",
      "時代別": "8",
      "年号": "1919(3)",
      "内容": "五・四運動が起こる",
      "ゴロ合わせ": "行く行く(イクイク)長さん中腰へ",
      "解説": "中国「日本の支配なんて受け付けない！日本出ていけー！」"
    },
    {
      "時代": "大正",
      "通し": "89",
      "時代別": "9",
      "年号": "1920",
      "内容": "国際連盟が成立する",
      "ゴロ合わせ": "平和には　特に大（トクニオ）きな国際連盟",
      "解説": "世界は平和になるべきだよ、世界平和を目指そう！"
    },
    {
      "時代": "大正",
      "通し": "90",
      "時代別": "10",
      "年号": "1923",
      "内容": "関東大震災が起こる",
      "ゴロ合わせ": "大震災、人（ヒト）の苦（ク）労を踏みにじる（フミ）",
      "解説": "東京神奈川が焼け野原に…"
    },
    {
      "時代": "大正",
      "通し": "91",
      "時代別": "11",
      "年号": "1925",
      "内容": "普通選挙法",
      "ゴロ合わせ": "選挙へ行くニコニコと（イクニコ）",
      "解説": "25歳以上の男性であればみんな選挙行きましょうー！"
    },
    {
      "時代": "大正",
      "通し": "92",
      "時代別": "12",
      "年号": "1925",
      "内容": "治安維持法",
      "ゴロ合わせ": "社会主義者の弾圧でニコニコ(2525)歩く日本国民",
      "解説": "日本の治安を乱す奴は全員捕まえてやる"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "93",
      "時代別": "1",
      "年号": "1929",
      "内容": "世界恐慌が起こる",
      "ゴロ合わせ": "ひどく憎いよ！(ヒドクニク)世界恐慌",
      "解説": "アメリカのNYで株価大暴落…世界中が不況に…"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "94",
      "時代別": "2",
      "年号": "1931",
      "内容": "満州事変が起こる",
      "ゴロ合わせ": "満州事変は人くさい（ヒトクサイ）",
      "解説": "日本「中国の満州地域に新しく独立国家作ったろ、うれしいじゃろ？」中国「いえ全然」"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "95",
      "時代別": "3",
      "年号": "1932",
      "内容": "五・一五事件が起こる",
      "ゴロ合わせ": "戦に(イクサニ)向かう五･一五",
      "解説": "犬養毅総理大臣を暗殺して日本軍が日本の政治権力をゲットしたのでした"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "96",
      "時代別": "4",
      "年号": "1936",
      "内容": "二・二六事件が起こる",
      "ゴロ合わせ": "ひどく寒い日(ヒドクサム)２・２６",
      "解説": "日本の海軍は自国の首都・東京だって占領しちゃうんだぜ！"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "97",
      "時代別": "5",
      "年号": "1937",
      "内容": "日中戦争が起こる",
      "ゴロ合わせ": "戦長引く（イクサナ）日中戦争",
      "解説": "最近中国が調子乗ってるから叩き潰したろうと思ったけど全然勝てなくてどうしよう…ってなる戦い"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "98",
      "時代別": "6",
      "年号": "1938",
      "内容": "国家総動員法が発令される",
      "ゴロ合わせ": "戦は（イクサハ）嫌なのに総動員…",
      "解説": "人も物資も全部日本軍が勝手に動かしちゃうぜー"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "99",
      "時代別": "7",
      "年号": "1939",
      "内容": "第二次世界大戦が起こる",
      "ゴロ合わせ": "いくさ苦しむ(イクサク)第２次世界大戦",
      "解説": "ドイツ「WW1の賠償金、200兆円なんて払えない！連合国に勝つしかないぞこれは！」"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "100",
      "時代別": "8",
      "年号": "1940",
      "内容": "日独伊三国同盟が結ばれる",
      "ゴロ合わせ": "行くよ俺（イクヨオレ）たち 三国同盟",
      "解説": "何があってもお互い助けに行こうね！という同盟"
    },
    {
      "時代": "昭和(戦前)",
      "通し": "101",
      "時代別": "9",
      "年号": "1941",
      "内容": "太平洋戦争が起こる",
      "ゴロ合わせ": "行くよ一気（イクヨイ）に太平洋戦争",
      "解説": "日本がこんなに生活難なのはアメリカのせいだ！アメリカも潰してやる！と無謀な戦いを挑んだ日本"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "102",
      "時代別": "1",
      "年号": "1945",
      "内容": "終戦",
      "ゴロ合わせ": "戦争に負けて、ひどく汚れた(ヒドクヨゴ)日本国",
      "解説": "2回原爆が落とされ空襲された日本はもう焼け野原…"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "103",
      "時代別": "2",
      "年号": "1946",
      "内容": "日本国憲法が公布される",
      "ゴロ合わせ": "よろ（46）こんでバンザイ（11）三（3）唱",
      "解説": "新しい憲法でみんな再スタートを切ろう頑張ろう日本！"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "104",
      "時代別": "3",
      "年号": "1950",
      "内容": "朝鮮戦争が起こる",
      "ゴロ合わせ": "引くぞこれから(ヒクゾコレ)朝鮮戦争",
      "解説": "北朝鮮 VS 韓国 (今も「休戦」中やで)"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "105",
      "時代別": "4",
      "年号": "1951",
      "内容": "サンフランシスコ平和条約が結ばれる",
      "ゴロ合わせ": "サンフランシスコへ行く御一行は(イクゴイッコウ)吉田茂さんたち",
      "解説": "GHQから独立したぞ！これからはしっかり私たちの国だ！"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "106",
      "時代別": "5",
      "年号": "1956",
      "内容": "日ソ共同宣言が出される",
      "ゴロ合わせ": "ひどく喜んで（ヒドクヨロ）日ソ共同宣言",
      "解説": "ソ連と仲直りして国際連合に加入させてもらおう"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "107",
      "時代別": "6",
      "年号": "1964",
      "内容": "東京オリンピックが行われる",
      "ゴロ合わせ": "一苦労し（ヒトクロウシ）て 東京オリンピック",
      "解説": "20年前と比べたら信じられないくらいの復活を果たした日本"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "108",
      "時代別": "7",
      "年号": "1965",
      "内容": "日韓基本条約が結ばれる",
      "ゴロ合わせ": "遠く向こう（トオクムコ）で、韓国と",
      "解説": "韓国と仲直り"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "109",
      "時代別": "8",
      "年号": "1972",
      "内容": "沖縄がアメリカから返還される",
      "ゴロ合わせ": "１９の後に何（ナニ）が何でも沖縄返還",
      "解説": "アメリカに取られていた沖縄が日本に返ってきた！"
    },
    {
      "時代": "昭和(戦後)",
      "通し": "110",
      "時代別": "9",
      "年号": "1978",
      "内容": "日中平和友好条約が結ばれる",
      "ゴロ合わせ": "ビッグなパ（ビックナパ）ンダの 平和友好",
      "解説": "中国と、もっともっともっと仲良くなりましょうね！とお約束"
    }

]
