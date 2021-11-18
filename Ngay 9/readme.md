# KHÁI NIỆM JAVASCRIPT
- JavaScript là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web cũng như phía máy chủ.
- Cùng với HTML và CSS để tạo một trang web hoàn chỉnh


# TÁC DỤNG CỦA JAVASCRIPT
- Sửa đổi nội dung của 1 trang web
- Thay đổi style và vị trí của các thành phần trong trang web
- Phản hồi sự kiện từ người dùng
- Thực hiện và kiểm soát chuyển tiếp các hình động
- Thông báo cho người dùng
- Thao tác dữ liệu đầu vào và xử lý kết quả
- Xác thực dữ liệu của người dùng trước khi gửi nó đến máy chủ
- ...


# BIẾN TRONG JAVASCRIPT
1. KHÁI NIỆM BIẾN TRONG JAVASCRIPT

 `Biến là định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta thực hiện thao tác với dữ liệu`

 `Mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến có các thao 
tác khác nhau với biến.` 



2. KHAI BÁO BIẾN

- Sử dụng từ khoá `let` , `const` để khai báo biến
- Khai báo biến bình thường dùng `let`
 
 ```javascript
 let age = 24;
 let fullName = "Hieu Tran";
//  Lưu ý : các giá trị biến khai báo bằng let đều có thể thay đổi giá trị
age = 22;
fullName = "Hoai Bui";
```
- Khai báo biến là hằng số dùng `const`

```javascript
// Lưu ý : các giá trị biến khai báo bằng const không thể thay đổi giá trị
const PI = 3.14;
PI = 2; 
=> Sẽ xuất hiện lỗi Uncaught TypeError: Assignment to constant variable.
```

3. QUY TẮC ĐẶT TÊN BIẾT

- Chứa các ký tự chữ, số, _ và $
- Ký tự đầu tiên không được là số (nên là chữ)
- Có phân biệt hoa thường
- Không trùng với các từ khóa của Javascript như: for, while, this, let, const, function, ...
- Nên đặt tên theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví dụ trunghieu thì nên đặt là trungHieu

4. KIỂM TRA KIỂU DỮ LIỆU CỦA BIẾN
- Kiểu dữ liệu là một cách phân loại dữ liệu cho trình biên dịch hoặc thông dịch hiểu các lập trình viên muốn sử dụng dữ liệu.
- Một số kiẻu dữ liệu của biến thường gặp : number, string, boolean, null, undefined, object.
- Ví dụ về kiểm tra dữ liệu của biến :
```javascript 
let name = "Hieu";
console.log(typeof name);
Kết quả : string ( String: Một chuỗi có thể chỉ bao gồm một ký tự hoặc nhiều ký tự, dữ liệu sẽ được đặt trong  dấu ” ” or ‘ ‘ , sử dụng phép + để nối các chuỗi lại với nhau )
```

5. NỐI CHUỖI TRONG JAVASCRIPT
- Để nối chuỗi chúng ta sử dụng dấu + để ghép hai chuỗi (hoặc biến) lại với nhau.
- Ví dụ :
```javascript
let firstName = "Trần";
let lastName = "Hiếu";
let fullName = firstName + lastName;
console.log(fullName); => TrầnHiếu
```

6. Template strings – ES6
- Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự ngoặc đơn hoặc ngoặc 
kép.
- Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau: 
`string text ${expression} string text`

7. KIỂU DỮ LIỆU NUMBER
- Khái niệm : các số bất kỳ loại nào: số nguyên hoặc dấu phẩy động.
- Một số “giá trị số đặc biệt” : Infinity và NaN
  + Infinity = ∞ vô cùng
  + NaN là viết tắt  Not And Number nghĩa là không phải số.

- Phép toán trên number 
  +  Phép toán cộng, trừ, nhân, chia, chia lấy dư, …
  + Đối tượng Math trong Javascript

    + Math.min, Math.max : Tìm số nhỏ nhất, lớn nhất trong 1 danh sách số
    + Math.round, Math.ceil, Math.floor : Làm tròn số
    + Math.random() : Random 1 số trong khoảng [0,1]


  







































































































