alert('test thử trang web');

var bong = document.getElementById('bongden');
var mau = ["white", "red", "green", "pink"];
var dem = 0;

function doimau(){
   if(dem > mau.length){
       dem = 0;
   }
    bong.style.backgroundColor = mau[dem];
    dem++;
}
setInterval(doimau, 1000);