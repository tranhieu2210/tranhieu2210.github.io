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
    for(let i=0; i < 10; i++) {
        newString.push(str)
    }
    return newString.join("")
}

console.log(repeatString1('Hieu'))

function repeatString2(str) {
    let newString = []
    for(let i=0; i < 10; i++) {
        newString.push(str)
    }
    return newString.join("-")
}

console.log(repeatString2('Hieu'))

