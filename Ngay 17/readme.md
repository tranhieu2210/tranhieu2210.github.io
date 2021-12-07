# Javascipt DOM

## 1. Định nghĩa
- DOM (Document Object Model) là một chuẩn được định nghĩa bởi W3C, được dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML hay XML bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…
- DOM được tạo ra bởi trình duyệt khi trang web được tải
- DOM được tổ chức theo dạng cây (DOM tree), mỗi thành phần trên cây gọi là một node
  + Document node
  + Element node
  + Text node

- Với Javascript, chúng ta có thể thao tác với DOM để:
  + Thay đổi phần tử HTML
  + Thay đổi thuộc tính của phần tử HTML
  + Thay đổi style CSS
  + Xóa phần tử và thuộc tính hiện có
  + Tạo phần tử và thuộc tính mới
  + Phản ứng với các sự kiện
  + Tạo sự kiện mới
  + …


## 2. Truy cập vào các phần tử của DOM
- Chúng ta có các phương thức sau để có thể truy cập vào các phần tử trong DOM
  + document.getElementById: Truy cập thông qua ID
  + document.getElementsByTagName: Truy cập thông qua Tag , trả về 1 mảng các phần tử
  + document.getElementsByClassName: Truy cập thông qua tên Class , trả về 1 mảng các phần tử
  + document.querySelector: Truy cập thông qua CSS Selector, trả về phần tử đầu tiên tìm thấy
  + document.querySelectorAll: Truy cập thông qua CSS Selector, trả về 1 mảng các phần tử

## 3. Quan hệ giữa các phần tử
- Thuộc tính quan hệ:
  + parentNode: Nút cha
  + childNodes: Các nút con
  + firstChild: Nút con đầu tiên
  + lastChild: Nút con cuối cùng
  + nextSibling: Nút anh em liền kề sau
  + previousSibling: Nút anh em liền kề trước

## 4. Thao tác với các phần tử DOM
- Get/set nội dung phần tử DOM
  +  innerHTML()
  +  innerText()
  +  textContent()

- Tạo phần tử
  + document.createElement([tag_name])

- Thêm phần tử
  + parentNode.appendChild(newNode)
  + parentNode.prepend(newNode)
  + parentNode.insertBefore(newNode, referNode)
  + targetElement.insertAdjacentHTML(position, text);
  + targetElement.insertAdjacentElement(position, element);
  + targetElement.insertAdjacentText(position, text);

- Xóa phần tử
  + parentNode.removeChild(childNode);

- Thay thế phần tử
  + parentNode.replaceChild(newNode, oldNode);

- Sao chép phần tử
  + node.cloneNode(deep)

- Thay đổi CSS
  + element.style.property = value

 





