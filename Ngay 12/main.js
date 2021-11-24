// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó.Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120


function giaithua(n) {
    let result = 1
    if (n < 2) {
        return result
    }
    if (n >= 2)
        for (let i = 1; i <= n; i++) {
            result *= i

        }
    return result
}

console.log(giaithua(3))
console.log(giaithua(4))
console.log(giaithua(1))

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó.Ví dụ: reverseString('hello') => olleh

function daonguoc(n) {
    let dodaichuoi = n.length
    let result = ""
    for (let i = dodaichuoi - 1; i >= 0; i--) {
        result += n[i]
    }
    return result
}

console.log(daonguoc('ahihi'))

//  Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là "Xin chào", tương ứng với mã quốc gia được truyền vào.Ví dụ: translate('VN') => "Xin chào"
// translate('EN') => "Hello"c

function translate(abc) {
    switch (abc) {
        case 'VN':
            console.log('Xinchao')
            break
        case 'EN':
            console.log('Hello')
            break
        case 'JP':
            console.log('konnichiwa')
            break
        case 'GER':
            console.log('Hallo')
            break
    }
}
translate('JP')
translate('GER')

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.
// Ví dụ : subString("xinchaocacbandenvoiTechmaster") => "xinchaocac..."


function chuoi(string) {
    let chuoimoi = ""
    let dodaichuoi = string.length
    if (dodaichuoi < 15) {
        console.log('Nhập chuỗi lớn hơn 15 kí tự')
        return
    } else
        chuoimoi = string.substr(0, 10) + '...'
    return chuoimoi

}
console.log(chuoi('0123456789101112131415'))

// Bài 5: viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.

function inmau(num) {
    let inmaumoi = ""
    if (num < 1)
        console.log('Nhập số lớn hơn 1');
    for (let i = 1; i < num; i++ ) {
        if (num % 2 == 0) {
            document.write(`<pre  style="color: red;"> ${num}>`)
    } else document.write(`<pre  style="color: blue;"> ${num}>`)
}
}




