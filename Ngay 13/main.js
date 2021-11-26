//  Array

let arr = []
arr[0] = 1
arr[1] = 'Hello'
arr[2] = true

console.log(arr);

let number = [1, 2, 3, 4, 5]
console.log(number);

console.log(number[0]);
console.log(number[4]);
console.log(number[number.length - 1]);

let number1 = number
// number1[0] = 10

console.log(number1);



// So sasnh
let number2 = [1, 2, 3, 4, 5]
console.log(number2)


// kiểm tra mảng có phải là mảng tăng dần hay k
let arr1 = [1, 4, 3, 5]
let arr2 = [5, 4, 3, 1]

function checkArrASC(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }

    return true
}
console.log(checkArrASC(arr1))
console.log(checkArrASC(arr2))

// kiểm tra mảng có phải là mảng giảm dần hay k


function checkArrAIC(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false
        }
    }

    return true
}
console.log(checkArrAIC(arr1))
console.log(checkArrAIC(arr2))

// kiểm tra mảng có phải mảng số chẵn tăng dần
let arrChan = [2,4,6,8]
let arrKoChan = [1,4,6,8]

function checkArrChan(arr) {
    for(let i = 0;i<arr.length;i++) {
        
    }
}




