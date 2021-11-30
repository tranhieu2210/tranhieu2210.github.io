# String method

### String length
- Tính chiều dài của chuỗi
- Cú pháp : <b>string.length</b>

### Slice ()
- array.slice(start, end)
- slice() trả về các phần tử đã chọn trong một mảng, dưới dạng một mảng mới.
- slice() không thay đổi mảng gốc.
- Nếu tham số âm thì nó sẽ đếm từ cuối chuỗi
- Nếu không truyền tham số thứ 2 thì nó sẽ cắt đến cuối chuỗi

### substring()
- string.substring(start, end)
- Giống với <b>slice</b> nhưng không nhận tham số âm

### substr()
- string.substr(start, length)
- Giống với <b>slice</b> nhưng tham số thứ 2 là độ dài chuỗi cần cắt
- Phương pháp này không thay đổi chuỗi ban đầu
- Để trích xuất ký tự từ cuối chuỗi, hãy sử dụng vị trí bắt đầu âm.

### replace()
- string.replace(searchValue, newValue)
- Phương pháp này không thay đổi chuỗi ban đầu.
- Phương pháp tìm kiếm một chuỗi cho một giá trị hoặc một biểu thức thông thường.
- Phương pháp trả về một chuỗi mới với (các) giá trị được thay thế.

### split()
- Dùng để chuyển chuỗi sang mảng
- Cú pháp : <b>string.split(separator, limit)</b>
- Nếu (" ") được sử dụng làm dấu tách, chuỗi được phân chia giữa các từ.

### concat()
- Dùng để nối nhiều chuỗi
- string.concat(string1, string2, ..., stringX)
- Phương pháp này không thay đổi các chuỗi hiện có.

### toUpperCase()
- Phương pháp chuyển đổi một chuỗi thành chữ hoa.
- string.toUpperCase()

### toLowerCase()
- Phương pháp chuyển đổi một chuỗi thành chữ thường.
- string.toLowerCase()

### trim()
- Phương pháp này loại bỏ khoảng trắng từ cả hai mặt của một chuỗi.
- string.trim()

### toString()
- Phương pháp trả về nội dung của một chuỗi.
- Phương pháp này có thể được sử dụng để chuyển đổi một đối tượng chuỗi thành một chuỗi.
- string.toString()

### includes()
- Phương thức trả về nếu một chuỗi chứa một chuỗi được chỉ định. Trả về true hoặc false
- string.includes(searchvalue, start)

### repeat()
- Phương pháp trả về chuỗi với một số bản sao của chuỗi.
- string.repeat(count)





# Array method

### Array length
- Tính độ dài của mảng
- Cú pháp : array.length

### concat()
- Dùng để nối nhiều mảng
- array.concat(array1, array2, ..., arrayX)
- Phương pháp này không thay đổi các mảng hiện có.

### join()
- Phương pháp trả về một mảng dưới dạng chuỗi
- Bất kỳ dấu tách nào cũng có thể được sử dụng. Mặc định là dấu phẩy (,).
- array.join(separator)

### Thêm bớt phần tử vào mảng
- push() : Thêm phần tử vào cuối mảng
- unshift(): Thêm phần tử vào đầu mảng
- pop(): Xóa phần tử ở cuối mảng
- shift(): Xóa phần tử ở đầu mảng
- splice(): Thêm/Xóa phần tử ở vị trí bất kỳ trong mảng
  + array.splice(index, howmany, item1, ....., itemX)
  với : index : Vị trí thêm / bớt mục. Giá trị âm xác định vị trí từ cuối mảng.
        howmany :Không bắt buộc. Số mục cần xóa.
        item1, ....., itemX : Không bắt buộc.Vị trí phần tử mới sẽ được thêm vào.

### forEach()
- Lặp qua 1 mảng
- array.forEach()

### sort()
- Sắp xếp các yếu tố của một mảng.
- Ghi đè lên mảng gốc.
- Sắp xếp các yếu tố dưới dạng chuỗi theo thứ tự bảng chữ cái và tăng dần.
- array.sort()


