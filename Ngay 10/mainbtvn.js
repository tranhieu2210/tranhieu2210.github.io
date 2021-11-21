// Bài 1

function checkMark(mark) {
    if (mark < 0 || mark > 100) {
        console.log('Nhập số từ 0 đến 100, mời nhập lại !!');
    } else if (mark >= 85) {
       console.log('A');
   } else if (mark >= 70 && mark < 85) {
       console.log('B');
   } else if (mark >= 40 && mark < 70) {
       console.log('C');
   } else {
       console.log('D');
   }  
}

checkMark(120)
checkMark(72)
checkMark(43)
checkMark(97)

// Bài 2

function sosanh(a, b) {
    if (a === b) {
        console.log('Hai số bằng nhau. Nhập lại !!');
    } else if (a > b) {
        console.log(`${a} là số lớn hơn`);
    } else {
        console.log(`${b} là số lớn hơn`);
    }
}   
sosanh(10, 10)

// Bài 3

function kiemtra(num) {
    if (num > 0) {
        console.log(`${num} là số dương`);
    } else if (num === 0) {
        console.log(`Số 0`);
    } else {
        console.log(`${num} là số âm`);
    }
}
kiemtra(0)
kiemtra(30)
kiemtra(-2)

// Bài 4
function chanle(num) {
    if (num % 2 === 0) {
        console.log(`${num} là số chẵn`);
    } else {
        console.log(`${num} là số lẻ`);
    }
}

chanle(7)
chanle(22)

// Bài 5

function chiahet(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} chia hết cho cả 3 và 5`);
    } else {
        console.log(`${num} không chia hết cho cả 3 và 5`);
    }
}

chiahet(30)
chiahet(20)

// Bài 6

function tongbaso(a, b, c) {
    if (a + b === c) {
        console.log(`${a} + ${b} = ${c} OK`);
    } else {
        console.log(`${a} + ${b} = ${c} Not OK`);
    }
}

tongbaso(22 , 10, 97)
tongbaso(22 , 10, 32)