// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

function checkString(string, searchString) {
    if (string.indexOf(searchString) > -1) {
        return true
    }
    return false
}

console.log(checkString('tranhieu2210', 'hello'));
console.log(checkString('tranhieu2210', 'hieu'));


// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên


function shortString(string) {
    let newString = ""
    if (string.length > 8) {
        newString = string.slice(0, 8) + '...'
    } else {
        newString = string
    }
    return newString
} 

console.log(shortString('tranhieu2210'));
console.log(shortString('1234567'));


// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

function convert(string) {
    let newString = string.replace(/\s/g, '_')

    return newString.toLowerCase()
}

console.log(convert('Xin Chào Các BẠN'))


// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

function iNums(number) {
    let convertiNums = number.toString().split('')

    let newNumber = convertiNums.sort()
    if (newNumber[0] === '0') {
        for (let i = 1; i < newNumber.length; i++) {
            if (newNumber[i] !== '0') {
                [newNumber[0], newNumber[i]] = [newNumber[i], newNumber[0]]
                break;
            }
        }
    }
    return Number(newNumber.join(''))
}

console.log(iNums(22101997))



// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng,không phân biệt hoa thường), kết quả trả về true hoặc false.


function checkString(string) {
    let newString = ''
    let stringWithNoSpace = string.replace(/\s/g, '').toLowerCase()
    for (let i = 0; i < stringWithNoSpace.length; i++) {
        newString += stringWithNoSpace[i]
    }
    if (stringWithNoSpace === newString) {
        return true
    }
    return false
}

console.log(checkString('Race car'));