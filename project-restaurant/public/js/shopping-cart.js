let promotionCode = {
    H10: 20000,
    B: 20000,
    C: 20000,
    D: 20000,
};


let product = [
    {
        id: 1,
        name: "Burger Tex Supreme",
        image: "/project-restaurant/image/menu-1.png",
        price: 55000,
        quality: 1
    },
    {
        id: 2,
        name: "Pizza Thập Cẩm",
        image: "/project-restaurant/image/menu-2.png",
        price: 140000,
        quality: 1
    },
    {
        id: 3,
        name: "Bánh Cuộn Mexicana",
        image: "/project-restaurant/image/menu-3.jpg",
        price: 60000,
        quality: 1
    },
    {
        id: 4,
        name: "Bánh Mì Thập Cẩm",
        image: "/project-restaurant/image/menu-4.png",
        price: 45000,
        quality: 1
    },
    {
        id: 5,
        name: "Khoai Tây Chiên",
        image: "/project-restaurant/image/menu-5.png",
        price: 50000,
        quality: 1
    }
]



const productElement = document.querySelector(".box-container");
const promotionElement = document.querySelector(".promotion");
const total = document.querySelector('.cart-total .total span')
const subtotal = document.querySelector('.cart-total .subtotal span');
const discount = document.querySelector('.discount');
const discountEle = document.querySelector('.discount span');
const btnPromotion = document.querySelector('.promotion button');
const inputPromotion = document.querySelector('#promo-code');



function renderProduct(arr) {
    // Clear nội dung
    productElement.innerHTML = "";
    let totalPrice = 0;


    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        totalPrice += t.price * t.quality
        productElement.innerHTML += `
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
            <input type="number" name="" value="${t.quality}">
            <br>
            <span> giá : </span>
            <span class="price"> ${t.price.toLocaleString()}đ </span>
        </div>
    </div>
    `

    }
    subtotal.innerText = `${totalPrice.toLocaleString()} `
    total.innerText = `${totalPrice.toLocaleString()} `
}





renderProduct(product)



// Xoá sản phẩm
function deleteProduct(id) {
    // Duyệt mảng product để tìm mảng cần xoá
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product.splice(i, 1)
        }
    }
    renderProduct(product)
}


function checkPromotion() {
    let value = inputPromotion.value;
    if (promotionCode[value]) {
        return promotionCode[value];
    }
    return 0;
}


function updateTotalMoney(arr) {
    let totalPrice = 0;
    let discountMoney = 0;

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        totalPrice += p.quality * p.price;
    }

    let data = checkPromotion();

    if (data) {
        discountMoney = (data );
        discount.classList.remove('hide');
        alert("Áp dụng mã giảm giá thành công");
    } else {
        discount.classList.add('hide');
        alert("Mã giảm giá không tồn tại");
    }

    subtotal.innerText = `${totalPrice} `
    discountEle.innerText = `${discountMoney} `
    total.innerText = `${totalPrice - discountMoney} `
    
}

btnPromotion.addEventListener('click', function () {
    updateTotalMoney(product);
});


