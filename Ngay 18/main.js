const heading = document.getElementById("heading")
console.log(heading);
console.log(heading.classList.length);
console.log(heading.classList[0]);


// Thêm class
heading.classList.add("text-big", "text-center", "text-hide")

// Xoá class
heading.classList.remove("text-big", "text-center")

// contain : kiểm tra 1 class có tồn tại trong phần tử hay không, trả về true/false
console.log(heading.classList.contains("text-big"));
console.log(heading.classList.contains("text-red"));

// toggle : kiểm tra 1 class có tồn tại trong phần tử hay không
// Nếu có => xoá đi
// Nếu không => thêm vào


// setInterval : Thực hiện lặp đi lặp lại 1 công việc sau 1 khoảng thời gian được chỉ định ( tính bằng ms)
// let count = 0
// let interval = setInterval(function () {
//     heading.classList.toggle("text-red")
//     count++

//     if (count == 10)
//         clearInterval(interval)
// }, 1000)
// // 1000ms = 1s


let time = 10
let interval = setInterval(function() {
    time--
    document.querySelector("#time span").innerText = time;

    if(time == 0) {
        clearInterval(interval)
        heading.classList.remove("text-hide")
        document.querySelector("#time").classList.add("text-hide")
    }
}, 1000)

