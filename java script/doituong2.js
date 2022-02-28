
var laptop = function (PNang, PHang){
    this.ttNang = PNang;
    this.ttHang = PHang;// cho this tat ca thuoc tinh hang o laptop bang thuoc tinh Phang o laptop 2
    this.khoidong = function(time, password){
        console.log(time +  "and"  + password);
    }
    this.ai = function() {
        console.log("day la lap top cua : " + this.ttHang);
    }
}

var laptop1 = new laptop(10, "Apple")
laptop1.khoidong(2, 5);
var laptop2 = new laptop(2, "Dell");
laptop2.ai()


const Khuongduy =  {
    chieucao :100,
    cannang :55,
    hoTen : 'Lăng Khương Duy',
    diHoc : function(time, phuongtien){
        console.log(`${this.hoTen} đi học lúc ${time} bằng xe ${phuongtien}`)
    }
}

console.log(Khuongduy.cannang)

Khuongduy.diHoc(10,'xe đạp');