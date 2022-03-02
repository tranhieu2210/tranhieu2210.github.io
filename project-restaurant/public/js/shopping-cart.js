let products = [
    {
        id: 1,
        name: "Burger Tex Supreme",
        image: "image/menu-1.png",
        price: 55000,
        total: 0
    },
    {
        id: 2,
        name: "Pizza Thập Cẩm",
        image: "image/menu-2.png",
        price: 140000,
        total: 0
    },
    {
        id: 3,
        name: "Bánh Cuộn Mexicana",
        image: "image/menu-3.jpg",
        price: 60000,
        total: 0
    },
    {
        id: 4,
        name: "Bánh Mì Thập Cẩm",
        image: "image/menu-4.png",
        price: 45000,
        total: 0
    },
    {
        id: 5,
        name: "Khoai Tây Chiên",
        image: "image/menu-5.png",
        price: 50000,
        total: 0
    },
];

let promotionCode = {
    A: 0.4,
    B: 0.3,
    C: 0.2,
    D: 0.1,
};

const shoppingCartElement = document.querySelector(".products-container");
const promotionElement = document.querySelector(".promotion");
const totalElement = document.querySelector(".cart-total");
const inputQuantityElement = document.querySelector("input");
const plusBtnElement = document.querySelectorAll(".fa-plus-square");



function renderProduct(arr) {
    // Clear nội dung
    shoppingCartElement.innerHTML = "";


    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        shoppingCartElement.innerHTML += `
        <div class="box">
        <div class="remove">
        <span class="close" onclick="deleteProduct(${t.id})">
            <i class="fa fa-times" aria-hidden="true"></i>
        </span>
    </div>
        <img src=${t.image}>
        <div class="content">
            <h3>${t.name}</h3>
            <span> số lượng : </span>
            <input type="number" name="" value="${t.total}" id="">
            <br>
            <span> giá : </span>
            <span class="price"> ${(t.price)} </span>
        </div>
    </div>

//     <div class="cart-total">

//     <h3 class="title"> hoá đơn </h3>

//     <div class="box">

//         <h3 class="subtotal"> tạm tính : <span>${(t.total * t.price)}đ</span> </h3>
//         <h3 class="discount"> giảm giá : <span>0</span> </h3>
//         <h3 class="shipping"> vận chuyển : <span>0</span> </h3>
//         <h3 class="total"> thành tiền : <span>${(t.total * t.price)}đ</span> </h3>
//         <div>
//             <div class="promotion">
//                 <input placeholder="Mã Giảm Giá" type="text" id="promo-code" autocomplete="off" />
//                 <button type="button"></button>
//             </div>
//         </div>

//         <a href="#" class="btn">thanh toán </a>

//     </div>

// </div>
//         `
//     }


}

renderProduct(products)


function deleteProduct(id) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product.splice(i, 1)
        }
    }
    renderProduct(product)
}
}
