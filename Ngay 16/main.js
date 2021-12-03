// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

let numbers = [2, 1, 4, 3, 4]

function max2Numbers(arr) {
    let sortArr = arr.sort((a, b) => a - b)
    let max = sortArr[sortArr.length - 1]

    let newArr = sortArr.filter(number => number < max)
    return newArr[newArr.length - 1]
}
console.log(max2Numbers(numbers));



// cách làm : dùng sort để sắp xếp các số theo thứ tự tăng dần, sau đó lọc các phần tử nhỏ hơn max, trả kết quả phần tử cuối của mảng đã lọc



// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

function getStringHasMaxLength(arr) {
    let length = arr.map(string => string.length)
    let sortLength = length.sort((a,b) => a-b)
    let maxLength = sortLength[sortLength.length - 1]
    return arr.filter(string => string.length == maxLength)
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));

// cách làm : đầu tiên chuyển các chuỗi về thành độ dài, rồi sắp xếp theo thứ tự từ nhỏ đến lớn, sau đó lọc ra giá trị lớn nhất rồi trả về mảng mới có giá trị = maxLength





// Bài 6 :


users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// // Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true

function findX(arr) {
    const result = arr.filter(e => e.age > 25 && e.isStatus === true);
    return result
}

console.log(findX(users));

// cách làm : dùng filter lọc ra các giá trị có age > 25 và isStatus là true

// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

function findY(arr) {
    return arr.sort((a, b) => a.age - b.age)
}

console.log(findY(users));

// cách làm : dùng sort để sắp xếp age theo thứ tự


// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

function similarity(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            result.push(arr1[i]);
        }
    }
    return result;
}
console.log(similarity([1, 2, 3], [1, 2, 4]));

// cách làm : dùng indexof để tìm giá trị trong mảng 1 có xuất hiện trong mảng 2 rồi push vào mảng mới



// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó


function getRandomElement(arr) {
    let result = Math.floor(Math.random() * arr.length)
    return arr[result]
}
console.log(getRandomElement([3, 7, 9, 11]));

// cách làm : random số với giá trị từ 0 đến độ dài mảng rồi trả về kết quả



// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng "giờ:phút:giây"
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.


function convertToSecond(time) {
      let hour = Math.floor(time / 3600)
      let minute = Math.floor((time-hour) / 60)
      let second = time - hour * 3600 - minute * 60
      return `${hour}:${minute}:${second}`
}

console.log(convertToSecond(2210));

function getResult(time, x) {
    let newResult = time.split(':')
    let sumSec = newResult[0] * 3600 + newResult[1] * 60 + newResult[2] * 1 + x
    return convertToSecond(sumSec)
}

console.log(getResult("0:46:50", 7));


// cách làm : đổi thời gian từ giờ sang giây, rồi cộng với số giây sau thời điểm time, rồi quy đổi ngược lại thành dạng giờ

