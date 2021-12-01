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

// Viết function tính thứ hạng trung bình của cả lớp


function caculateAvgClass(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].grade

    }
    return total / arr.length
}


console.log(caculateAvgClass(grades));



// Viết function tính thứ hạng trung bình của nam trong lớp

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



// Viết function tính thứ hạng trung bình của Nữ trong lớp


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


// Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

function maxMale(arr) {
    let maleArr = arr.filter(student => student.sex === 'M')
    let newArr = maleArr.sort((a, b) => a.grade - b.grade)
    return newArr.filter(student => student.grade === newArr[newArr.length - 1].grade)
}

console.log(maxMale(grades));


// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp


function maxFemale(arr) {
    let femaleArr = arr.filter(student => student.sex === 'F')
    let newArr = femaleArr.sort((a, b) => a.grade - b.grade)
    return newArr.filter(student => student.grade === newArr[newArr.length - 1].grade)
}

console.log(maxFemale(grades));



// Viết function thứ hạng cao nhất của cả lớp


function maxOfClass(arr) {
    let newArr = arr.sort((a, b) => a.grade - b.grade)
    return newArr.filter(student => student.grade === newArr[newArr.length - 1].grade)
}

console.log(maxOfClass(grades));


// Viết function thứ hạng thấp nhất của cả lớp


function minOfClass(arr) {
    let newArr = arr.sort((a, b) => a.grade - b.grade)
    return newArr.filter(student => student.grade === newArr[0].grade)
}

console.log(minOfClass(grades));



// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp


function ListFemale(arr) {
    let ListFemale = []

    for (const element of arr) {
        if (element.sex === 'F') {
            ListFemale.push(element)
        }
    }
    return ListFemale
}

console.log(ListFemale(grades));


// function ListFemaleTryIt(arr) {
//     newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].sex === 'F') {
//             newArr.push(arr[i])
//         }

//     }
//     return newArr
// }

// console.log(ListFemaleTryIt(grades));



// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái


function Name(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name))
}

console.log(Name(grades));




// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần


function sortGrade(arr) {
    return arr.sort((a, b) => b.grade - a.grade)
}

console.log(sortGrade(grades));


// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp


function topFive(arr) {
    const sortList = arr.sort((a, b) => b.grade - a.grade)
    return sortList.slice(0, 5)
}

console.log(topFive(grades));   


// Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"


function startWithJ(arr) {
    return arr.filter(student => student.name.startsWith('J'))
}

console.log(startWithJ(grades));

