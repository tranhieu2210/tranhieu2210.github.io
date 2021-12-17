// Mockup dnah sách sản phẩm


let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
};

let product = [
    {
        id: 1,
        name: 'Áo thể thao nam Quick Dry Cool247',
        description: 'Áo thể thao mát lạnh mùa hè',
        price: 199000,
        quality: 2,
        image: './img/1.jpg'
    },

    {
        id: 2,
        name: 'Áo Tank Top thể thao nam Dri-Breathe thoáng mát tối đa',
        description: 'Chiếc áo thể thao cho mọi hoạt động thoải mái hết sức',
        price: 189000,
        quality: 1,
        image: './img/2.jpg'
    },

    {
        id: 3,
        name: 'Áo Polo thể thao nam ProMax',
        description: 'Áo Polo thể thao nam Promax-S1 chiếc áo polo được thiết kế dành riêng cho bạn.',
        price: 239000,
        quality: 2,
        image: "./img/3.jpeg"
    }
]

// Render danh sách sản phẩm ra ngoài giao diện

const productElement = document.querySelector('.products')
const count = document.querySelector('.count')
const optionContainer = document.querySelector('.option-container')
const subtotal = document.querySelector('.subtotal span')
const vat = document.querySelector('.vat span')
const total = document.querySelector('.total span')
const discount = document.querySelector('.discount');
const discountEle = document.querySelector('.discount span');
const btnPromotion = document.querySelector('.promotion button');
const inputPromotion = document.querySelector('#promo-code');


function renderProduct(arr) {
    // Clear nội dung
    productElement.innerHTML = "";
    let totalPrice = 0;

    // Kiểm tra mảng rỗng
    // Cập nhật số lượng sản phẩm
    if (arr.length == 0) {
        productElement.innerHTML = `<p>Không có sản phẩm nào trong giỏ hàng</p>`
        count.innerText = `${arr.length} items in the bag`
        optionContainer.innerText = ""
        return
    }
    count.innerText = `${arr.length} items in the bag`

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        totalPrice += t.price * t.quality
        productElement.innerHTML += `
        <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src=${t.image} alt=>
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${t.name}</a></div>
                            <div class="description">
                                ${t.description}
                            </div>
                            <div class="price">${t.price} VND</div>
                        </div>
                    </div>
    
                    <div class="col right">
                        <div class="quantity"
                        onchange="changeTotalProduct(${t.id}, event)">
                            <input type="number" class="quantity" value=${t.quality}>
                        </div>
    
                        <div class="remove">
                            <span class="close" onclick="deleteProduct(${t.id})">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
        `
    }
    subtotal.innerText = `${totalPrice} VNĐ`
    vat.innerText = `${totalPrice * 0.1} VNĐ`
    total.innerText = `${totalPrice * 1.1} VNĐ`
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


// Thay đổi số lượng sản phẩm
function changeTotalProduct(id, event) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product[i].quality = Number(event.target.value)
        }
        if (Number(event.target.value) == 0) {
            deleteProduct(id)
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
        discountMoney = (totalPrice * data) / 100;
        discount.classList.remove('hide');
        alert("Áp dụng mã giảm giá thành công");
    } else {
        discount.classList.add('hide');
        alert("Mã giảm giá không tồn tại");
    }

    subtotal.innerText = `${totalPrice} VNĐ`
    vat.innerText = `${totalPrice * 0.1} VNĐ`
    discountEle.innerText = `${discountMoney} VNĐ`
    total.innerText = `${totalPrice * 1.1 - discountMoney} VNĐ`
    
}

btnPromotion.addEventListener('click', function () {
    updateTotalMoney(product);
});