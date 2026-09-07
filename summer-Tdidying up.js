let point = 0;
let time = 30;
let best = 0;
let correct = 1;

const items = ["エビ", "浮き輪", "スイカ", "ひまわり", "貝殻"];

const timeDisplay = document.getElementById('time');
const counterDisplay = document.getElementById('point');
const bestDisplay = document.getElementById('best');
counterDisplay.textContent = "今回のスコア：" + point + "ポイント"; 
bestDisplay.textContent = "最高スコア：" + best + "ポイント"; 
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));


function gametime() { //タイマーの処理
    time--;   
    timeDisplay.textContent ="残り" + time + "秒"; 
    if (0 >= time) {
    stoptime();
    }
}

function stoptime() { //ゲーム終了した時の処理
     clearInterval( PassageID );  
     timeDisplay.textContent = "終了！";  
     counterDisplay.textContent = "今回のスコア：" + point + "ポイント"; 
     if (point >= best) {
      best = point;
       bestDisplay.textContent = "最高スコア：" + best + "ポイント"; 
     }

   document.getElementById("button").disabled = false; 
   choices.forEach(btn => btn.disabled = true);
}
  
async function stay() {//ゲームが始まるまでの猶予を作る処理
  timeDisplay.textContent = "よーい..."; 
  point = 0;//ポイントの初期化
  counterDisplay.textContent = "今回のスコア：" + point + "ポイント"; 
  document.getElementById("button").disabled = true; 
  await sleep(2000);
  start();
}

  function gametime() { //タイマーの処理
    time--;   
    timeDisplay.textContent ="残り" + time + "秒"; 
    if (0 >= time) {
    stoptime();
    }
}

function start() { //ゲームスタートした時の処理
   time = 30;   
   timeDisplay.textContent = "スタート！"; 
   PassageID = setInterval('gametime()',1000);   
     document.getElementById("button").disabled = true; 
    choices.forEach(btn => btn.disabled = false);
   itemschange() //お片付けする対象を変更
   
}

function itemschange() { //片付ける物の変更  
 const index = Math.floor(Math.random() * 5);
  subject.textContent = items[index];
  correct = index;
}

function givepoint(event) { //ポイント獲得or没収の処理
  if (boxa == event.currentTarget && correct === 0) {
  point++;
} else if (boxb == event.currentTarget && correct === 1) {
  point++;
} else if (boxc == event.currentTarget && correct === 2) {
  point++;
} else if (boxd == event.currentTarget && correct === 3) {
  point++;
} else if (boxe == event.currentTarget && correct === 4) {
  point++;
}else if(point >= 1) {
  point--;
}

  counterDisplay.textContent = "現在" + point + "ポイント"; 
  itemschange() //お片付けする対象を変更
}

const button = document.getElementById("button");
const boxa = document.getElementById("boxa");
const boxb = document.getElementById("boxb");
const boxc = document.getElementById("boxc");
const boxd = document.getElementById("boxd");
const boxe = document.getElementById("boxe");
const choices = document.querySelectorAll(".choices");
choices.forEach(btn => btn.disabled = true);


button.addEventListener("click",stay);
boxa.addEventListener("click",givepoint);
boxb.addEventListener("click",givepoint);
boxc.addEventListener("click",givepoint);
boxd.addEventListener("click",givepoint);
boxe.addEventListener("click",givepoint);