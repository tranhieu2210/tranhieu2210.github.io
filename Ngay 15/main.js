function modulo2(arr) {
    return arr.map(e => e % 2)
}

console.log(modulo2([1, 2, 3, 4, 5, 6]));


function oddNumber(arr) {
    const result = arr.map(e => e % 2 == 1)
    return result
}

console.log(oddNumber([4, 2, 7, 5, 9]));


// filter : tìm giá trị thoả mãn trả về dưới dạng chuỗi

function oddNumber1(arr) {
    const result = arr.filter(e => e % 2 == 1)
    return result
}

console.log(oddNumber1([4, 2, 7, 5, 9]));


// find : tìm giá trị đầu tiên thoả mãn trả về dưới dạng giá trị

function getNumberGreater5(arr) {
    return arr.find(e => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));



// findindex : tìm vị trí số lớn hơn 5 đầu tiên

function getIndexNumberGreater5(arr) {
    return arr.findIndex(e => e > 5);
}

console.log(getIndexNumberGreater5([1, 2, 3, 4, 5, 6, 7]));


// some : chỉ cần 1 phần tử thoả mãn trả về true, nếu k phần tử nào thoả mãn thì trả false

function getNumberGreater1(arr) {
    return arr.some(e => e > 1);
}

console.log(getNumberGreater1([1, 2, -3, -4]));
console.log(getNumberGreater1([1, 0, -3, -4]));


// every : tất cả phần tử thoả mãn => true, chỉ 1 phần tử k thoả mãn => false

function getNumberGreater10(arr) {
    return arr.every(e => e > 10);
}

console.log(getNumberGreater10([11, 12, 13, 14]));
console.log(getNumberGreater10([10, 11, 12, 13]));


// reduce : 

function getTolalNumber(arr) {
    let sum = arr.reduce(function (total, elem) {
        return total + elem;
    }, 0);
    return sum
}

console.log(getTolalNumber([1, 2, 3, 4]));


// function printArray(arr) {
//     arr.forEach(print);
// }

// function print(element) {
//     console.log(element);       
// }

// printArray([1,3,5])




//  OBJECT

let emptyObject = {}

let student = {
    name: "Trần Hiếu",
    age: 25,
    year: 1997,
    address: "Hoà Bình",
    sex: "male",

    study() {
        console.log("Chơi game");
    },

    eat(nameFood) {
        console.log("Đang ăn $(namefood)");
    },
    talk(name) {
        console.log(`Nói chuyện với $(name)`);
    },
    getinfo() {
        console.log(`${this.name} quê ở ${this.address}`);
    }


}

console.log(student.age);
console.log(student.name);
student.study()
student.getinfo()

const grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

// 1. Viết function tính thứ hạng trung bình của cả lớp
// 2. Viết function tính thứ hạng trung bình của nam trong lớp
// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// 6. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// 7. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// 8. Viết function thứ hạng cao nhất của cả lớp
// 9. Viết function thứ hạng thấp nhất của cả lớp
// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"
// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

function caculateAvgClass(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].grade

    }
    return total / arr.length
}


console.log(caculateAvgClass(grades));


function caculateAvgM(arr) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex === 'M') {
            total += arr[i].grade
            ++count
        }

    }
    return total / count
}

console.log(caculateAvgM(grades));



function caculateAvgF(arr) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex === 'F') {
            total += arr[i].grade
            ++count
        }

    }
    return total / count
}

console.log(caculateAvgF(grades));

function maxMale(arr) {
    let maleArr = arr.filter(student => student.sex == 'M');
    let newString = maleArr.sort((a,b) => a.grade - b.grade);
    return newString.filter(s)

}