// Định nghĩa function

function sayHello() {
    console.log("Xin chào các bạn");
}

// Thực thi function
sayHello()

// Định nghĩa function với tham số
function sayHelloWithName(name) {
    console.log(`Xin chào ${name}`);
}

sayHelloWithName("Trần Trung Hiếu");
sayHelloWithName("Hi Hi");

let name = "Trần Trung A";
sayHelloWithName(name);

// Viết fuction in ra message
// "Xin chào -name. Năm nay -age- tuổi"

function info(name,age) {
    console.log(`Xin chào ${name}, Năm nay ${2021-age} tuổi`);
}
info("Hiếu Trần",1997);

// Tính tổng 2 số a và b

function sum(a,b) {
    // let result = a + b;
    // return result

    return a + b
}

//  Thực thi

let data = sum(3,4)
console.log(data);

let data1 = sum(data, 10)
console.log(data1);


// BÀI TẬP

function sayHello() {
    console.log("Xin chào các bạn");
}

function sayHelloWithName2(name2) {
    console.log(`Xin chào ${name2}`);
}

sayHelloWithName2("Trần Trung Hiếu");


function sum(c, d) {
    return c + d
}
console.log(sum(10,20))

function bp(so) {
    return so ** 2
}
console.log(bp(20))

function theki(year) {
    return Math.floor(year/100 +1)
}
console.log(theki(2021))

// Tính chu vi hình tròn 

function chuvi(r) {
    return Math.PI * r ** 2
}

// Tính diện tích hình tròn

function dt(r2) {
    return Math.PI * 2 * r2
}

console.log(`Chu vi : ${chuvi(2)}`)
console.log(`Dien tich : ${dt(3)}`)

// boolean

let a = 5
console.log(Boolean(a));

console.log(Boolean(5>10));
console.log(Boolean(5<10));
console.log(Boolean(0>10));


let hour = 6
if(hour < 10) {
    console.log("Bạn thật đẹp trai");
}

let age = 12
if(age <18 ) {
    console.log("Còn bé");
} else {
    console.log("Lớn rùi");
}


function getAge(age) {
    if(age<18) {
        console.log("Tuổi teen");
    } else if(age >=18 && age <50) {
        console.log("Tuổi trưởng thành");
    } else if(age>50) {
        console.log("Tuổi già");
    }
}

getAge(25)


function check(mark) {
    if(mark <0 || mark >100) {
        console.log("Nhập lại");
    } else if(mark >=85){
        console.log("A");
    } else if(mark >=70 && mark <85) {
        console.log("B");
    } else if(mark >=40 && mark <70) {
        console.log("C");
    } else {
        console.log("D");
    }
}

check(90)
check(101)