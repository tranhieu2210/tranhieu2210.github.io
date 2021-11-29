// Tìm số lớn nhất trong mảng

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 2, 3, 4, 5, 10]))


// Tìm số nhỏ nhất trong mảng

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([1, 2, 3, 4, 5, 10]))

// Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2


function findReminder(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i] % 2;
        newArray.push(a);
    }
    return newArray;
}
console.log(findReminder([22, 10, 19, 97, 99]));


// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

function repeatString(str) {
    let string = [];
    for (let i = 0; i < 10; i++) {
        string.push(str);
    }
    return string.join("");
}

console.log(repeatString('Hieu'))


// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.


function repeatStringNew(str) {
    let string = [];
    for (let i = 0; i < 10; i++) {
        string.push(str);
    }
    return string.join("-");
}

console.log(repeatStringNew('Hieu'))
