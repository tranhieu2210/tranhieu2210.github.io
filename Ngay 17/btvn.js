// Câu 1. Tạo 1 thẻ p có id="text", có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

// const text = document.querySelector('#text')

text.style.color = '#777'

text.style.fontSize = '2rem'

text.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'



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
for (let i = 8; i <= 10; i++) {
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



// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)


const add = document.createElement('button')
const input = document.createElement('input')

add.textContent = 'Thêm'
input.type = 'text'
input.placeholder = 'Nhập nội dung'
document.body.prepend(add)
document.body.prepend(input)

function addItem(item) {
    const li = document.createElement('li')
    if (!item.trim()) {
        alert('Nội dung trống')
        return
    }
    li.textContent = item
    ulElement.appendChild(li)
}

add.addEventListener('click', function () {
    addItem(input.value)
    input.value = ''
})



// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

const remove = document.createElement('button')
remove.textContent = 'Xoá'
document.body.insertBefore(remove, text)

function removeLastItem() {
    const liEle = ulElement.querySelectorAll('li')
    if (liEle.length == 0) {
        alert('Danh sách trống')
        return
    }
    const newUl = ulElement.removeChild(liEle[liEle.length - 1])
}

remove.addEventListener('click', function () {
    removeLastItem()
})


// Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show

// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide


const hide = document.createElement('button')
hide.textContent = 'Hide'
ulElement.insertAdjacentElement("beforebegin", hide)







