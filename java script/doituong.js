// Tao doi tuong

var my = new Object();
// mo ta cho doi tuong
my.Chieucao = "1m60";
my.cannang = "50kg";
my.ten = "Random";
console.log(my.Chieucao);
my.dichoi = function (){
    console.log("di choi Tam Dao");
}

my.codeweb = function(){
    console.log("Ban chinh la Dev");
}
console.log(`Chiều cao của bạn là ${my.cannang}`)
my.dichoi();
my.codeweb();


// cach 2
var laptop = {
    nang: 1,
    hang: "Lenovo",
    khoidong : function(time, password){
        console.log(time + "and" + password);
    },
    cuaai : function() {
        console.log("day la lap top cua : " + this.hang)
    },
    
}