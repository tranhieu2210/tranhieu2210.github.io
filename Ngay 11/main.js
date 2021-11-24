//  Switch Case
let money = 30000

switch (money) {
    case 12000:
    case 20000:
    case 30000: {
        console.log("Cafe sữa");
        break
    }
    case 10000: {
        console.log("Cafe đá");
        break
    }
    case 8000: {
        console.log("Sting dâu");
        break
    }
    case 2000: {
        console.log("Trà đá");
        break
    }
    default: {
        console.log("Không có đồ uống nào phù hợp");
        break
    }
}

// Bài 1
function checkday(day) {
    switch (day) {
        case 0: {
            console.log("Chủ nhật");
            break
        }
        case 1: {
            console.log("Thứ 2");
            break
        }
        case 2: {
            console.log("Thứ 3");
            break
        }
        case 3: {
            console.log("Thứ 4");
            break
        }
        case 4: {
            console.log("Thứ 5");
            break
        }
        case 5: {
            console.log("Thứ 6");
            break
        }
        case 6: {
            console.log("Thứ 7");
            break
        }
        default: {
            console.log("Nhập lại");
            break
        }
    }
}

checkday(2)
checkday(3)
checkday(4)
checkday(5)
checkday(10)
checkday(0)

// Bài 2
function checkMonth(month) {
    switch (month) {
        case 1:
        case 2:
        case 3: {
            console.log("Mùa xuân");
            break
        }
        case 4:
        case 5:
        case 6: {
            console.log("Mùa hạ");
            break
        }
        case 7:
        case 8:
        case 9: {
            console.log("Mùa thu");
            break
        }
        case 10:
        case 11:
        case 12: {
            console.log("Mùa đông");
            break
        }
        default: {
            console.log("Nhập lại");
            break
        }
    }
}

checkMonth(2)
checkMonth(9)
checkMonth(10)
checkMonth(13)




// For
// Thực hiện công việv thức dậy lúc 5:00 trong 30 ngày

// for(let day = 1; day <= 30; day = day + 1) {
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// // Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lẻ

// for (let day = 1; day <= 30; day = day + 1) {
//     if (day % 2 == 1) {
//         console.log(`Ngày ${day} thức dậy lúc 5:00`);
//     }
// }

// for (let day = 1; day <= 30; day = day + 2) {
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

//  Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày, cách 7 ngày nghỉ 1 lần


// for (let day = 1; day <= 30; day = day + 1) {
//         if (day % 7 == 0) {
//           console.log("Nghỉ");
//           continue
//          }

//          console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

//  Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày, Đến ngày số 20 chán quá nên nghỉ

// for (let day = 1; day <= 30; day = day + 1) {
//              if (day == 20) {
//                console.log("Chán quá, nghỉ thôi");
//               break
//               }

//               console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }


// Tiết kiệm tiền

// // Trước khi bắt đầu thì số tiền trong ví = 0

// let totalMoney = 0 

// //  Thực hiện tiết kiệm trong 10 ngày, mỗi ngày 100.000

// for(let day = 1; day <= 10; day ++) {
//     totalMoney = totalMoney + 100000
// }

// console.log(totalMoney);



// let totalMoney = 0
// for (let day = 1; day <= 10; day ++) {
//     if (day == 8) {
//         console.log("Hết tiền");
//         break
//     }
//     if (day %2 == 0) {
//         totalMoney += 200000
//     }
//     else {
//         totalMoney += 100000
//     }
// }

// console.log(totalMoney);


// Tính tổng số lẻ từ 1-100

function tongsole() {
    let total = 0
    for (let num = 1; num <= 100; num = num + 2) {
        total = total + num
    }
    console.log(total);
    return total
}

tongsole()

//  Tính tổng các số chia hết cho 3 và 5 trong khoảng 0-100

function tongso() {
    let tong = 0
    for (let number = 1; number <= 100; number += 1) {
        if (number % 15 == 0) {
            tong = tong + number
        }

    }
    console.log(tong);
    return tong
}

tongso()


// //  Chạy vòng lặp từ 0 -> 20
// - Nếu là số chẵn thì in ra : “0 là số chẵn”
// - Nếu là số lẻ thì in ra : “1 là số lẻ” -..


function hienthi() {
    for (let i = 0; i < 21; i++) {
        if (i % 2 == 0) {
            console.log(`${i} là số chẵn`);
        } else {
            console.log(`${i} là số lẻ`)
        }
    }
}

hienthi()




// // Bài 1. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.

// Bài 2. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

// Bài 3. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'


// Bài 1

function saochep(a) {
    let tongsaochep = ""
    for (let i = 1; i < 11; i++) {
        tongsaochep += a
    }
    return tongsaochep
}

console.log(saochep(`Hieu`))


// Bài 2


function saochep1(b) {
    let tongsaochep1 = ""
    for (let i = 1; i < 10 + 1; i++) {
        if (i == 10) {
            tongsaochep1 = tongsaochep1 + b;
            break
        }
        tongsaochep1 = tongsaochep1 + b + "-"
    }
    return tongsaochep1
}

console.log(saochep1(`Hieu`))

// Bài 3
function saochepnhieulan(c, number) {
    let saochepnlan = ""
    for (let i = 1; i < number + 1; i++) {
        if (i == number) {
            saochepnlan = saochepnlan + c;
            break
        }
        saochepnlan = saochepnlan + c + "-"
    }
    return saochepnlan
}

console.log(saochepnhieulan('Hieu', 5))



