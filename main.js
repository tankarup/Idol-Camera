//https://lab.syncer.jp/Web/JavaScript/Snippet/66/
function rgb2hsv ( rgb ) {
	var r = rgb[0] / 255 ;
	var g = rgb[1] / 255 ;
	var b = rgb[2] / 255 ;

	var max = Math.max( r, g, b ) ;
	var min = Math.min( r, g, b ) ;
	var diff = max - min ;

	var h = 0 ;

	switch( min ) {
		case max :
			h = 0 ;
		break ;

		case r :
			h = (60 * ((b - g) / diff)) + 180 ;
		break ;

		case g :
			h = (60 * ((r - b) / diff)) + 300 ;
		break ;

		case b :
			h = (60 * ((g - r) / diff)) + 60 ;
		break ;
	}

	var s = max == 0 ? 0 : diff / max ;
	var v = max ;

	return [ h, s, v ] ;
}

const idols = [{'color': '#e22b30', 'hue': '358', 'label': '天海春香', 'name': 'haruka'},
{'color': '#2743d2', 'hue': '230', 'label': '如月千早', 'name': 'chihaya'},
{'color': '#b4e04b', 'hue': '78', 'label': '星井美希', 'name': 'miki'},
{'color': '#d3dde9', 'hue': '213', 'label': '萩原雪歩', 'name': 'yukiho'},
{'color': '#f39939', 'hue': '31', 'label': '高槻やよい', 'name': 'yayoi'},
{'color': '#515558', 'hue': '206', 'label': '菊地真', 'name': 'makoto'},
{'color': '#fd99e1', 'hue': '317', 'label': '水瀬伊織', 'name': 'iori'},
{'color': '#a6126a', 'hue': '324', 'label': '四条貴音', 'name': 'takane'},
{'color': '#01a860', 'hue': '154', 'label': '秋月律子', 'name': 'ritsuko'},
{'color': '#9238be', 'hue': '280', 'label': '三浦あずさ', 'name': 'azusa'},
{'color': '#ffe43f', 'hue': '52', 'label': '双海亜美', 'name': 'ami'},
{'color': '#ffe43f', 'hue': '52', 'label': '双海真美', 'name': 'mami'},
{'color': '#01adb9', 'hue': '184', 'label': '我那覇響', 'name': 'hibiki'},
{'color': '#ea5b76', 'hue': '349', 'label': '春日未来', 'name': 'mirai'},
{'color': '#6495cf', 'hue': '213', 'label': '最上静香', 'name': 'shizuka'},
{'color': '#fed552', 'hue': '46', 'label': '伊吹翼', 'name': 'tsubasa'},
{'color': '#92cfbb', 'hue': '160', 'label': '田中琴葉', 'name': 'kotoha'},
{'color': '#9bce92', 'hue': '111', 'label': '島原エレナ', 'name': 'elena'},
{'color': '#58a6dc', 'hue': '205', 'label': '佐竹美奈子', 'name': 'minako'},
{'color': '#454341', 'hue': '30', 'label': '所恵美', 'name': 'megumi'},
{'color': '#5abfb7', 'hue': '175', 'label': '徳川まつり', 'name': 'matsuri'},
{'color': '#ed90ba', 'hue': '333', 'label': '箱崎星梨花', 'name': 'serika'},
{'color': '#eb613f', 'hue': '12', 'label': '野々原茜', 'name': 'akane'},
{'color': '#7e6ca8', 'hue': '258', 'label': '望月杏奈', 'name': 'anna'},
{'color': '#fff03c', 'hue': '55', 'label': 'ロコ', 'name': 'roco'},
{'color': '#c7b83c', 'hue': '54', 'label': '七尾百合子', 'name': 'yuriko'},
{'color': '#7f6575', 'hue': '323', 'label': '高山紗代子', 'name': 'sayoko'},
{'color': '#b54461', 'hue': '345', 'label': '松田亜利沙', 'name': 'arisa'},
{'color': '#e9739b', 'hue': '340', 'label': '高坂海美', 'name': 'umi'},
{'color': '#f7e78e', 'hue': '51', 'label': '中谷育', 'name': 'iku'},
{'color': '#bee3e3', 'hue': '180', 'label': '天空橋朋花', 'name': 'tomoka'},
{'color': '#554171', 'hue': '265', 'label': 'エミリー', 'name': 'emily'},
{'color': '#afa690', 'hue': '43', 'label': '北沢志保', 'name': 'shiho'},
{'color': '#e25a9b', 'hue': '331', 'label': '舞浜歩', 'name': 'ayumu'},
{'color': '#d1342c', 'hue': '3', 'label': '木下ひなた', 'name': 'hinata'},
{'color': '#f5ad3b', 'hue': '37', 'label': '矢吹可奈', 'name': 'kana'},
{'color': '#788bc5', 'hue': '225', 'label': '横山奈緒', 'name': 'nao'},
{'color': '#f19557', 'hue': '24', 'label': '二階堂千鶴', 'name': 'chizuru'},
{'color': '#f1becb', 'hue': '345', 'label': '馬場このみ', 'name': 'konomi'},
{'color': '#ee762e', 'hue': '23', 'label': '大神環', 'name': 'tamaki'},
{'color': '#7278a8', 'hue': '233', 'label': '豊川風花', 'name': 'fuka'},
{'color': '#d7a96b', 'hue': '34', 'label': '宮尾美也', 'name': 'miya'},
{'color': '#eceb70', 'hue': '60', 'label': '福田のり子', 'name': 'noriko'},
{'color': '#99b7dc', 'hue': '213', 'label': '真壁瑞希', 'name': 'mizuki'},
{'color': '#b63b40', 'hue': '358', 'label': '篠宮可憐', 'name': 'karen'},
{'color': '#f19591', 'hue': '3', 'label': '百瀬莉緒', 'name': 'rio'},
{'color': '#aeb49c', 'hue': '75', 'label': '永吉昴', 'name': 'subaru'},
{'color': '#6bb6b0', 'hue': '175', 'label': '北上麗花', 'name': 'reika'},
{'color': '#efb864', 'hue': '36', 'label': '周防桃子', 'name': 'momoko'},
{'color': '#d7385f', 'hue': '345', 'label': 'ジュリア', 'name': 'julia'},
{'color': '#ebe1ff', 'hue': '260', 'label': '白石紬', 'name': 'tsumugi'},
{'color': '#274079', 'hue': '222', 'label': '桜守歌織', 'name': 'kaori'}];

rgb2hsv( [ 255, 128, 64 ] ) ;	// [ 20.104, 0.749, 1 ]

window.onload = () => {
  const video  = document.querySelector("#camera");
  const canvas = document.querySelector("#picture");

  /** カメラ設定 */
  const constraints = {
    audio: false,
    video: {
      width: 200,
      height: 300,
      //facingMode: "user"   // フロントカメラを利用する
       facingMode: { exact: "environment" }  // リアカメラを利用する場合
    }
  };

  /**
   * カメラを<video>と同期
   */
  navigator.mediaDevices.getUserMedia(constraints)
  .then( (stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
      video.play();
    };
  })
  .catch( (err) => {
    console.log(err.name + ": " + err.message);
  });

  //もういちどボタン
  document.querySelector("#again").addEventListener("click", () => {
    document.getElementById('again').style.visibility = 'hidden';
    document.getElementById('shutter').style.display = 'inline';
    document.getElementById('camera').style.display = 'inline';
    document.getElementById('picture').style.display = 'none';
    document.getElementById('result_text').innerText = '';
    document.getElementById('result_img').innerHTML = '';

  });

  /**
   * シャッターボタン
   */
   document.querySelector("#shutter").addEventListener("click", () => {

    document.getElementById('again').style.visibility = 'visible';
    document.getElementById('shutter').style.display = 'none';
    document.getElementById('camera').style.display = 'none';
    document.getElementById('picture').style.display = 'inline';

     const ctx = canvas.getContext("2d");

     video.pause(); // 映像を停止
     /*
     setTimeout( () => {
       video.play();    // 0.5秒後にカメラ再開
     }, 500);
     */

     // canvasに画像を貼り付ける
     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

     //const chara = new Image();
     //chara.src='arisa.png';
     //chara.onload = () => {
     // ctx.drawImage(chara, 0, 0, canvas.width, canvas.height);

     //色を取得
     const img_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
     const data = img_data.data;
     console.log(data);
     let sum_rgb = {
       r: 0,
       g: 0,
       b: 0
     };
     for (let i = 0; i < data.length; i += 4) {
       sum_rgb.r += data[i];
       sum_rgb.g += data[i + 1];
       sum_rgb.b += data[i + 2];
     }
     let rgb = sum_rgb;
     console.log(rgb);
     for (let key in rgb) {
       rgb[key] = rgb[key] / data.length;
     }
     let [h, s, v] = rgb2hsv([rgb.r, rgb.g, rgb.b]);

     console.log([h, s, v]);

     //色相が一番近いアイドルを探す
     //https://qiita.com/Yuki_BB3/items/db0914cccb1a21a96de0
     const returnLatestdata = (req, h) => {
       let hashList = req;
       let tempAgeList = hashList.map(element => {
         return Math.abs(element.hue - h);
       });
       let elmNum = tempAgeList.indexOf(Math.min.apply(null, tempAgeList));
       return hashList[elmNum];
     };

     const found_idol = returnLatestdata(idols, h);

     document.getElementById('result_text').innerText = `あなたが撮影したのは${found_idol['label']}さんですね？`;
     document.getElementById('result_img').innerHTML = `<img src="images/${found_idol['name']}.png" width="300">`;


     // };





   });


};