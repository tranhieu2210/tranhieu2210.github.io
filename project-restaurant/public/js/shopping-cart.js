let promotionCode = {
    H10: 10,
    B: 20,
    C: 30,
    D: 40,
};


let product = [
    {
        id: 1,
        name: "Sủi Cảo",
        image: "/project-restaurant/public/image/food-1.png",
        price: 100000,
        quality: 1
    },
    {
        id: 2,
        name: "burger tex supreme",
        image: "/project-restaurant/public/image/food-2.png",
        price: 63000,
        quality: 1
    },
    {
        id: 3,
        name: "Seafood Pesto",
        image: "/project-restaurant/public/image/food-3.png",
        price: 199000,
        quality: 1
    },
    {
        id: 4,
        name: "Black Burger",
        image: "/project-restaurant/public/image/food-4.png",
        price: 99000,
        quality: 1
    },
    {
        id: 5,
        name: "Veggie Delight",
        image: "/project-restaurant/public/image/food-5.png",
        price: 199000,
        quality: 1
    },
    {
        id: 6,
        name: "Chicken Supreme",
        image: "/project-restaurant/public/image/food-6.png",
        price: 199000,
        quality: 1
    },
    {
        id: 7,
        name: "Burger Mexicana",
        image: "/project-restaurant/public/image/food-7.png",
        price: 63000,
        quality: 1
    },
    {
        id: 8,
        name: "Chicken Black Pepper",
        image: "/project-restaurant/public/image/food-8.png",
        price: 199000,
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
const xemthemBtn = document.querySelectorAll('.xemthemBtn')
const buyBtns = document.querySelectorAll('.buy')
const cartBtns = document.querySelectorAll('.cart')
const listProducts = JSON.parse(localStorage.getItem('productList')) || []
const boxContainer = document.querySelector('.box-container')
const overlay = document.querySelector('.products-preview')


buyBtns.forEach(item => {
    item.addEventListener('click', function (e) {
        let box = e.target.closest('.preview')
        let boxId = box.getAttribute('data-target')
        let buyPro = product.find(pro => pro.id == boxId)
        listProducts.push(buyPro)
        localStorage.setItem('productList', JSON.stringify(listProducts))
        renderProduct(listProducts)
        box.classList.remove('active')
        overlay.style.display = 'none'
    })
})


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
        <div class="content" >
            <h3>${t.name}</h3>
            <span> số lượng : </span>
            <input onchange="changeTotalProduct(${t.id}, event, ${t.quality})" type="number" name="" value="${t.quality}">
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


renderProduct(listProducts)


// Xoá sản phẩm
function deleteProduct(id) {
    // Duyệt mảng product để tìm mảng cần xoá

    listProducts.forEach((item, index) => {
        if (item.id == id) {
            listProducts.splice(index, 1)
            localStorage.setItem('productList', JSON.stringify(listProducts))
            return
        }
    })
    renderProduct(listProducts)
}



function changeTotalProduct(id, event, quality) {
    if (Number(event.target.value) <= 0) {
        alert("Số lượng sản phẩm tối thiểu là 1")
        event.target.value = quality
        return
    }
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id == id) {
            listProducts[i].quality = Number(event.target.value)
        }
        if (Number(event.target.value) == 0) {
            deleteProduct(id)
        }

    }
    localStorage.setItem('productList', JSON.stringify(listProducts))
    renderProduct(listProducts)
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
        discountMoney = (subtotal * data ) / 100;
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


// click xem thêm

