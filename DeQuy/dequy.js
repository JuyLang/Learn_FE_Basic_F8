//1. Xác Định Điểm Dừng
//2. Logic => tạo ra điểm dừng

// ví dụ 1 chạy vòng lặp đếm từ 10->1
// function countdown(Num){
//     if(Num > 0 ){
//         console.log(Num)
//         countdown(Num-1) 
//     }
//     return Num;
// }
// countdown(10)

// ví dự; tính giai thừa của 5

function giaithua(Count){
    if(Count == 1){
        return 1;
    }
    return Count * giaithua(Count-1)
}
console.log(giaithua(21))