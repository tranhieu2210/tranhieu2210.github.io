document.addEventListener('mousemove', function (event) {

// xoá hết rồi mới tạo hình mới

    const boxes = document.querySelectorAll('.box')
    Array.from(boxes).map(box => document.body.removeChild(box))

// tạo thẻ div

    const box = document.createElement('div')

// thêm class box cho thẻ div vừa tạo

    box.classList.add('box')

// gán vào DOM

    document.body.appendChild(box)

// cập nhật vị trí

    box.style.top= `${event.offsetY-50}px`
    box.style.left= `${event.offsetX-50}px`
})

// document.addEventListener('mousedown', function () {
//     console.log('mousedown');
// })

// document.addEventListener('mouseup', function () {
//     console.log('mouseup');
// })

// document.addEventListener('mousemove', function () {
//     console.log('mousemove');
// })


