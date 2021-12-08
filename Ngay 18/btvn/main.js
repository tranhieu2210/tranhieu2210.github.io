function randomColor() {
    let newColor = ""

    let string = 'ABCDEF0123456789'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        newColor += string[index]

    }
    return `#${newColor}`
}
const span =document.querySelector("#hex-value")
const button = document.querySelector('.btn')

button.addEventListener('click', function () {
    span.innerText = randomColor()
    document.body.style.backgroundColor = randomColor()
})

