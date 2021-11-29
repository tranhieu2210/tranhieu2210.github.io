function timMin(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(timMin([1, 2, 3, 4, 5]));

// Tương đương concat ( cộng chuỗi )
let arr = [1, 2, 3]
let arr1 = [4, 5, 6]

let arr2 = [...arr, ...arr1]
console.log(arr2)


// rest parameter : gom tham số thành mảng
// khong gioi han danh sach tham so truyen vao

function sum(...number) {
    console.log(number)
}

sum(1, 2, 3)
sum(4, 5, 6, 7, 8)



let sum1 = function (a, b) {
    return a + b
}

console.log(sum1(3, 4))


function repeatString(a) {
    newString = ""
    for (let i = 0; i < 10; i++) {
        newString += a
    }
    return newString
}

console.log(repeatString('Hieu'))

function repeatString1(str) {
    let newString = []
    for (let i = 0; i < 10; i++) {
        newString.push(str)
    }
    return newString.join("")
}

console.log(repeatString1('Hieu'))

function repeatString2(str) {
    let newString = []
    for (let i = 0; i < 10; i++) {
        newString.push(str)
    }
    return newString.join("-")
}

console.log(repeatString2('Hieu'))


// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

function checkElementExist(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return true
        }
    }

    return false

}

console.log(checkElementExist([1, 2, 3, 4, 5], 5))
console.log(checkElementExist([1, 2, 3, 4, 5], 6))

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

function getElementGreater(arr, n) {
    let newString = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            newString.push(arr[i])
        }
    }
    return newString
}

console.log(getElementGreater([1, 2, 3, 4, 5], 3))



// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

function randomHexCode() {
    let randomColor = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + randomColor.slice(0, 6);

}
console.log(randomHexCode())
console.log(randomHexCode())
console.log(randomHexCode())
console.log(randomHexCode())
console.log(randomHexCode())
console.log(randomHexCode())

// #746fd5 #dfaa00 #31dc4c #dedbee #2bfc29

// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.


let number = [1, 2, 3, 4, 5, 6];
let total = 0;

// cách tính tổng sử dụng for
for (let i = 0; i < number.length; i++) {
    total += number[i]
}
console.log(total);

// cách tính tổng sử dụng forEach
let total1 = 0;
number.forEach(function(value, index) {
        // console.log(value, index);
        total1 += value
})

console.log(total1);



// for...of
let total3 = 0
for (const value of number) {
    total3 += value
}

console.log(total3);