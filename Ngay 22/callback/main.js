// // Lập trình đòng bộ


// // Có 2 công việc : cv1, cv2

// // Thực hiện : 3s

// function funcA() {
//     console.log("one");
// }

// // Thực hiện : 4s
// function funcB() {
//     console.log("two");
// }

// // // Tổng thời gian thực hiện : 7s
// // funcA()
// // funcB()


// // Lập trình bất đồng bộ

// function funcC() {
//     setTimeout(function () {
//         console.log("three");
//     }, 3000)
// }

// function funcD() {
//     setTimeout(function () {
//         console.log("four");
//     }, 5000)
// }

// funcD()
// funcC()
// funcB()


// Để xử lý lập trình bất đồng bộ :
// 1. Callback function
// 2. Promise 
// 3. Async await 

// == 1. Callback function ==
// funcA, funcB

// function funcA(funcB) {
//     ...
//     funcB()
// }


//  Mổ tả về hoạt động hàng ngày
// 1. làm bài tập (3s)
// 2. đá bóng (4s)
// 3. nấu cơm (5s)

function doTask1(name, callback) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback()
    }, 3000)
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback()
    }, 4000)
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback()
    }, 5000)
}

function finish() {
    console.log("Kết thúc công việc");
}

doTask1("làm bài tập", function () {
    doTask2("đá bóng", function () {
        doTask3("nấu cơm", finish)
    })
})

// doTask1("Làm bài tập", function () {
//     console.log("Làm bài tập xong");
// })

// doTask2("Đá bóng", function () {
//     console.log("Đá bóng xong");
// })

// doTask3("Nấu cơm", function () {
//     console.log("Nấu cơm xong");
// })



