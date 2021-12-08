// document.addEventListener('keydown', function (event) {
//     if(event.keyCode == 13) {
//         console.log('Bạn rất đẹp trai');
//     } else {
//         console.log('Ấn lại đi');
//     }
// })

// // document.addEventListener('keyup', function () {
// //     console.log('keyup');
// // })

// // document.addEventListener('keypress', function () {
// //     console.log('keypress');
// // })


// sự kiện scroll

const btn = document.getElementById('btn')

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 600) {
        btn.classList.remove('hide')
    } else {
        btn.classList.add('hide')
    }
})


btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior : "smooth"
    })
})