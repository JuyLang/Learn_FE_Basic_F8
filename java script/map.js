// var Rectangles = [
//     { width: 10, heigth: 20},
//     { width: 10, heigth: 40},
//     { width: 15, heigth: 25},
//     { width: 10, heigth: 14},

// ];
// var Dientich = Rectangles.map ( function(x){

//     return x.width*x.heigth
// })
// console.log(Dientich);

// var courser = [
//     {
//         id: 1,
//         name: 'java',
//         coin: 444
//     },
//     {
//         id: 2,
//         name: 'html',
//         coin: 444
//     },
//     {
//         id: 3,
//         name: 'css',
//         coin: 444
//     },
//     {
//         id: 4,
//         name: 'java',
//         coin: 444
//     }
// ]

// function courserHandler(cou){
//     return {
//         id: cou.id,
//         name: 'Helo '+cou.name
//     }
// };
// var newCourser = courser.map(courserHandler);

// console.log(newCourser)


//cach 2

// var newCourser = courser.map(function(cout){
//     return {
//         id: cout.id,
//         name: cout.name + ' co gia la ' + cout.coin,
//     }
// })

// console.log(newCourser);

//ForEach cach su dung, lap qua cac phan tu

// courser.forEach(function(cout , index){
//     console.log(cout.name +':'+ "'" + cout.coin + "'")
// })

//Every tra ve kieu boolean, Kiem tra tat ca
 
// var isFree = courser.every(function(cout){
//     return cout.coin == 0
// })

// console.log(isFree)

//some giong every nhung ma kiem qua tat ca , cai dau khong dung kiem tra cai sau


//Find: giong some nhung ma tra ve gia tri la dieu kien

// var CouFind = courser.find(function(cout){
//     return cout.name == 'java';
// })

// console.log(CouFind)

//fillter : giong find nhung ma lay het gia tri 
// var CouFilter = courser.filter(function(cout){
//     return cout.name == 'java';
// })

// console.log(CouFilter)



//Reduce sử dụng tât cả các thành phần array
var courser = [
    {
        id: 1,
        name: 'java',
        coin: 444
    },
    {
        id: 2,
        name: 'html',
        coin: 444
    },
    {
        id: 3,
        name: 'css',
        coin: 444
    },
    {
        id: 4,
        name: 'java',
        coin: 444
    }
]

//Vi du su dung for tinh tat ca so coin bt
// var tatcaCoin =  0;
// for(var cout of courser){
//     tatcaCoin += cout.coin;
// }
// console.log(tatcaCoin)
// hoac 
// var tatcaCoin = 0;
// for(let i = 0; i<courser.length;i++){
//     tatcaCoin += courser[i].coin;
// }
// console.log(tatcaCoin)








                //bai tap 
//1 forEach
// function getRequestBodyFromValues(formValues) {

//     var result = {};
//     for (var obj of formValues){
//     result[obj.field] = obj.value
//     }
//     return result
// }
// getRequestBodyFromValues([
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ]);

//bai2. every
// function checkPositiveNumbers(numbers) {
//     numbers.every(function(cout){
//         return cout >= 0 ;
//     })
// }

// checkPositiveNumbers([1, -8, 3]);

// bai 3 some

// function hasFreeCourses(courses) {

//     var Isfree = courses.some(function(cout){
//         return cout.vnd == 0;
//     })
//     console.log(Isfree)
// }

// hasFreeCourses(
//     [
//         { name: 'Javascript', vnd: 1000000 },
//         { name: 'PHP', vnd: 990000 },
//         { name: 'HTML, CSS', vnd: 0 }
//     ]
// );

//bai 4 find

function findAMonsterByAttack(monsters) {
    var power = monsters.find(function(cout){
        return cout.attack == 150;
    })
    
    console.log(power)
}

findAMonsterByAttack([
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180
    }
])


// bai tap map
    // chuyển sang boolean
function convertToBoolean(inputs) {
    
    var converBL = inputs.map(function(cout){
            console.log(Boolean(cout))
    })
    console.log(converBL);
}

convertToBoolean([0, 1, 2])

    //X3 số
function run(inputs) {
 var nhan3 = inputs.map(function(cout){
    return cout*3;
 })
    console.log(nhan3);
}
run([4, -8, 0]);

    // convert String to Number

function convertToNumber(inputs) {
        var newArray = inputs.map(function(cout){
            return cout.toString();
        })
        console.log(newArray)
    }

convertToNumber([2, 4, 10])


// reduce: Lap các thành phần trong mảng và tính toàn bộ, gồm một biến các thuộc tính và
// một biến giá trị khởi tạo


//bài 1: tính tổng trong mảng
function sum(numbers) {
    var SumArray = numbers.reduce(function(ingredientAray, valueArray){
        return ingredientAray + valueArray
    }, 0)
    console.log(SumArray)
}

sum([1, 2, function() {}, NaN])