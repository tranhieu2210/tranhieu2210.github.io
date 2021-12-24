const btn = document.querySelector('.hamburger-icon span');
const menuEle = document.querySelector('.menu')
const navEle = document.querySelector("nav")

// btn.addEventListener('click', function () {
//     menuEle.classList.toggle("show")
// })

let iShow = false
btn.addEventListener('click', function () {
    const height = navEle.clientHeight;

    iShow = !iShow
    iShow ? menuEle.style.height = `${height}px` : menuEle.style.height = "0px"
})