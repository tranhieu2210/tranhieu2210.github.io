if(typeof(Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}


// Lưu
localStorage.setItem("name", "Trần Hiếu");
localStorage.setItem("age", "25");
localStorage.setItem("status", "True");

localStorage.setItem("Numbers", "[1,2,3,4,5]");


console.log(localStorage.getItem("name"));