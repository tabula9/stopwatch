// function clickButton() {

//   let now = new Date();
//   let seconds = now.getSeconds(); //秒を取得
  
//   if (seconds<10) {
//     seconds = '0' + seconds;
//   }
  
//   let minutes = now.getMinutes();
//   if (minutes>9) {
//     minutes = 9;
//   }
  
//   let milliSeconds = now.getMilliseconds(); //ミリ秒を取得
//   milliSeconds = milliSeconds/100;
//   milliSeconds = Math.trunc(milliSeconds); //実数を整数にする
  
  
//   document.getElementById('timer').innerHTML = minutes + ':' + seconds + ':' + milliSeconds;
  
// }
let start;
let interval;
let kaishi = document.getElementById('kaishi');
let timer = document.getElementById('timer');
let restart = 0;
let now;

function clickButton() {
  start = new Date();
    
  interval = setInterval(goTimer, 10); //指定した間隔ごとに関数を呼び出す
    
  $('#kaishi').prop('disabled',true);
  $('#stop,#reset').prop('disabled',false);
  } 
  
function stopButton() {
  clearInterval(interval);
  restart += now.getTime() - start.getTime();
  $('#stop').prop('disabled',true);
  $('#kaishi').prop('disabled',false);
  }

function resetButton() {
  clearInterval(interval);
  timer.innerHTML ='0:0:0:0';
  restart = 0;
  $('#reset').prop('disabled',true);
  $('#kaishi').prop('disabled',false);
  $('#stop').prop('disabled',true);
}


let goTimer = function() {
  now = new Date();
  
  let time = now.getTime() - start.getTime() + restart;
  //getTimeメソッドは１９７０年からの経過時間を表す
  //現在の経過時間からクリックした時の経過時間を引いて時間の差を求めてる
  let milli = Math.trunc(time%1000/100);
  let seconds = Math.trunc(time/1000);
  let minutes = Math.trunc(seconds/60);
  let hour = Math.trunc(minutes/60);
  
  seconds = seconds - minutes*60;
  minutes = minutes - hour*60;
  
  
  timer.innerHTML =hour + ':' + minutes + ':' + seconds + ':' + milli;
};