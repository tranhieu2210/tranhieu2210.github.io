// Câu 1. Tạo 1 thẻ p có id="text", có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

// const text = document.querySelector('#text')

text.style.color = '#777'

text.style.fontSize = '2rem'

text.innerHTML  = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'



// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

/* <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul> */

const ul1 = document.querySelector('ul')
const liEle = ul1.querySelectorAll('li')
liEle.forEach(li => li.style.color = 'blue')


// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

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

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

// Remove thẻ <li> 4

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ



const ulElement = document.querySelector('#list')
for (let  i = 8; i<= 10; i++) {
    let li = document.createElement('li')
    li.innerText = `Item ${i}`
    ulElement.appendChild(li)
}


ulElement.firstElementChild.style.color = 'red'


const li3 = ulElement.querySelector(':nth-child(3)')
li3.style.backgroundColor = 'blue'
console.log(li3);


const li4 = ulElement.querySelector(':nth-child(4)')
ulElement.removeChild(li4)


const newLi = document.createElement('li')
newLi.innerText = "Xin chào Hiếu"
console.log(newLi);
li3.insertAdjacentElement("afterend", newLi)
console.log(ulElement);








