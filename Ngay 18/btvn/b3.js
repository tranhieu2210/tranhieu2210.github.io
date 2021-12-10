// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")

const p = document.querySelector('p')
    let longestWord = "abcdefg";
    const words = p.innerText.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            p.innerHTML = p.innerHTML.replace(words[i], `<mark>${words[i]}</mark>`)
        }
    }



// // bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p


const facebook = document.createElement('a')
facebook.href = 'https://www.facebook.com/'
facebook.innerText = 'Facebook'
facebook.target = '_blank'
document.body.appendChild(facebook)


// // bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

const numberOfstring = document.createElement('div')
numberOfstring.innerText = 'Số từ: ' + words.length
document.body.appendChild(numberOfstring)



// Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲

p.innerHTML = p.innerHTML.replaceAll('?', '🤔')
p.innerHTML = p.innerHTML.replaceAll('!', '😲')

console.log(p);








