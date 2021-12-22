
// // jquerry
// $(document).ready(function(){
//     $("#btn").click(function(){
//       $(".para").toggle();
//     });
//   });


// // javascript

// // window.onload = function() {{
// //     const btn = document.querySelector("#btn");
// //     const para = document.querySelector(".para");

// //     btn.addEventListener('click', function() {
// //         para.style.display = "none"
// //     })
// // }}


// Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//    <li>Item 5</li>
//    <li>Item 6</li>
//    <li>Item 7</li>
// </ul>

// Sử dụng javascript để thực hiện những công việc sau

// 1. Thêm 3 thẻ `<li>` có nội dung **Item 8**, **Item 9**, **Item 10** vào cuối danh sách

for (let i = 8; i < 11; i++) {
    $("#list").append(`<li>Item ${i}</li>`);
}

// 2. Sửa nội dung cho thẻ `<li> 1` thành màu đỏ (color)

$("ul li:first").css({
    "color": "red"
})

// 3. Sửa background cho thẻ `<li> 3` thành màu xanh (background-color)

$("ul li:nth-child(3)").css({
    "background-color": "blue"
})

// 4. Remove thẻ `<li> 4`

$("ul li:nth-child(4)").remove();

// 5. Thêm thẻ `<li>` mới thay thế cho thẻ `<li> 4` bị xóa ở bước trước, thẻ `<li>` mới có nội dung bất kỳ

$("ul li:nth-child(3)").after(`<li> Hello Friend ! </li>`);

// 6. Thêm 1 nút `add` + 1 ô `input` để nhập text (tạo bằng Javascript).

$("ul").prepend(`<button id="hihi">Add</button>`);
$("ul").prepend(`<input type="text" placeholder="Mời nhập">`);

// - Mỗi khi bấm nút vào nút `add` thêm 1 thẻ `li` có nội dung là nội dung trong ô input vào cuối danh sách ul
// - Trường hợp không có nội dung trong ô input mà bấm `add` thì cảnh báo (sử dụng alert)

$("#hihi").click(function () {
    let inputValue = $('input').val();
    if (inputValue == '') {
        alert('Không được để trống');
        return
    }
    $("ul").append(`<li>${inputValue}`)
});



// 7. Thêm 1 nút `remove` (tạo bằng Javascript). Chức năng để xóa `thẻ li cuối cùng` của danh sách ul

$("#hihi").after(`<button id="haha">Remove</button>`);
$('#haha').click(function () { 
    $('ul li').last().remove()
    
});

// 8. Thêm 1 nút `Hide` trên đầu của danh sách ul
// - Khi bấm vào `Hide` thì ul sẽ `ẩn`. Đồng thời label của nút `Hide` => `Show`

// - Và ngược lại, khi bấm vào `Show` thì ul sẽ hiện. Đồng thời label của nút `Show` => `Hide`

$("#haha").after(`<button id="hoho">Hide</button>`);
$("#hoho").toggle(function(){
    $("ul li").hide();
    $("#hoho").html("Show")
  });
