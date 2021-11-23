// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

function saochep(a) {
    let tongsaochep = ""
    for (let i = 1; i < 11; i++) {
        tongsaochep += a
    }
    return tongsaochep
}

console.log(saochep('Hieu'))


// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

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

console.log(saochep1('Hieu'))

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

function saochepnhieulan(c, number) {
    let saochepnlan = ""
    if (number <= 1) {
        console.log('Nhập number > 1')
        return
    }
    for (let i = 1; i <= number + 1; i++) {
        if (i == number) {
            saochepnlan = saochepnlan + c;
            break
        }
        saochepnlan = saochepnlan + c + "-"
    }
    return saochepnlan
}

console.log(saochepnhieulan('Hieu', 5))

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function tongso() {
    let tong = 0
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            tong += i
        }

    }
    console.log(tong);
    return tong
}

tongso()


// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function thetichhinhcau(r) {
    return ((4 / 3) * Math.PI * Math.pow(r, 3));
}
console.log(thetichhinhcau(3))

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function hardSum3(a, b) {
    let hardSum4 = 0
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            hardSum4 += i
        }
    } else
        for (let i = b + 1; i < a; i++) {
            hardSum4 += i
        }

    console.log(hardSum4);
}

hardSum3(8, 4)
hardSum3(4, 8)


// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function checksnt(num) {
    if(num < 2) return false;
    if(num == 2) return true;
    for(let i = 2; i < num; i++) {
      if(num % i == 0) return false;
    }
    return true;
}

console.log(checksnt(9))
console.log(checksnt(2))
console.log(checksnt(5))
console.log(checksnt(6))
console.log(checksnt(17))


// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function tinhtong(so) {
    let tong = 0
    if (so <= 1) {
        console.log('Phải nhập số nguyên dương lớn hơn 1')
        return
    }
    for(let i = 2; i <= so; i++ ) {
        if (checksnt(i)) {
            tong += i
        }
    }    return tong
}

console.log(tinhtong(7))
console.log(tinhtong(1))
console.log(tinhtong(2))


// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function tongUoc(num) {
    let tong = 0
    if (num < 0) {
        console.log('Phải nhập số nguyên dương')
        return
    }
    for (let i = 1; i<=num; i++) {
        if (num % i == 0) {
            tong += i
        }
    }
    return tong
}

console.log(tongUoc(11))
console.log(tongUoc(12))
console.log(tongUoc(15))