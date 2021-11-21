## Function
### 1. Function là gì
- Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào 
đó.
- Cú pháp định nghĩa function :
```javascript
function functionName(para_1, …, para_n) {
// function code
}
```
 - Thực thi function :
 ```javascript
functionName(para_1, …, para_n)
```
- Đặt tên hàm cũng có quy tắc giống như đặt tên biến

### 2. Function default values - ES6
Cho phép những developers khởi tạo function có những default value nếu như chúng được định nghĩa sai.
Ví dụ:
function sum(a = 10, b =5) {
    return a + b
}
Sum(30) : vì không truyền b nên b lấy giá trị default value = 5 -> a = 30, b = 5
Kết quả = 35


### 3. Phạm vi của biến (scope)
- Scope: được định nghĩa là một vòng đời của một biến, từ khi nó sinh ra và chết đi
- Có 2 loại scope:
  + Global scope
  + Function scope
  + Block scope

Ví dụ :
```javascript
function functionName() {
    b = 5;
    let a = 3;
}
functionName();
console.log(b); // 5
console.log(a); // Uncaught ReferenceError: a is not defined
(nếu khai báo biến mà không dùng let hoặc const thì biết sẽ có dạng global)
```

## Boolean
### 1. Boolean là gì
-  Giá trị của kiểu dữ liệu này chỉ có thể là **true** hoặc **false**.
- Ví dụ :
```javascript
 let a = true;
 let b = false;
 let c = !a;
 let d = !b;
 ```
### 2. Xác định giá trị Boolean 
- Để xác định giá trị **Boolean** cho biến, biểu thức,… ta sử dụng hàm **Boolean()**

### 3. Truthy, Falsy value
- Truthy value là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là **true**. Ngược lại, Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là **false**
> **Lưu ý**
> - **Falsy** có 6 giá trị: false, 0, NaN, ' ', null, undefined
> - Các giá trị còn lại, ngoài các giá trị trên được gọi là **truthy**


## Câu lệnh điều kiện
### 1. Câu lệnh if
- Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.
- Cú pháp :
```javascript
if (điều kiện) {
    // khối lệnh thực thi nếu điều kiện đúng
}
```

- Ví dụ :
```javascript
let number = 7;
if (number > 0) {
  console.log(`${number} là số dương`);
}
```

### 2. Câu lệnh if/else
- Nếu **điều kiện đúng** thì thực hiện câu lệnh trong **if**, ngược lại nếu **điều kiện sai** thì thực hiện câu lệnh trong **else**.
- Cú pháp :

```javascript
if (điều kiện) {
    // khối lệnh thực thi nếu điều kiện đúng
} else {
    // khối lệnh thực thi nếu điều kiện sai
}
```

- Ví dụ :
```javascript
let number = 7;
if (number > 0) {
  console.log(`${number} là số dương`);
} else {
  console.log(`${number} không phải là số dương`);
}
```
### 3. Câu lệnh if/else if/else
- Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai.
- Cú pháp :
```javascript
if (điều kiện 1) {
    // khối lệnh thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // khối lệnh thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // khối lệnh thực thi nếu cả 2 điều kiện 1 và 2 sai
}
```

- Ví dụ :
```javascript
let number = 7;
if (number > 0) {
  console.log(`${number} là số dương`);
} else if (number < 0) {
  console.log(`${number} là số âm`);
} else {
  console.log(`${number} là số 0`);
}
```


