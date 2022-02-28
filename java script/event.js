var bongden = document.getElementById("bongden");

var mau = ["blue", "red", "pink"];
var dem = 0;

function doimau(){
    if(dem>mau.length){
        dem = 0;
    }
    bongden.style.backgroundColor = mau[dem];
    dem++;
}

var time = setInterval(doimau, 900);

bongden.onmouseover = function(){
    clearInterval(time)
}