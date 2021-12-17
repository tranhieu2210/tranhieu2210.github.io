// Hứa : nếi có 50 triệu, sẽ mua Macbook Pro 14 inch
let money = 100

let buyMacbook = new Promise(function (resolve, reject) {
    if (money > 50) {
        resolve("Mua Macbook thôi")
    } else {
        reject("Kiếm thêm tiền đã")
    }
});

// buyMacbook
// .then(res => {
//     console.log(res);
// })
// .catch(error => {
//     console.log(error);
// })



// Hứa tiếp
// Mua Macbook xong nếu còn thừa tiền mua thêm con IP 13 Promax 30 củ

let buyIphone = new Promise(function (reslove, reject) {
    if (money - 55 - 30 > 0) {
        reslove("Mua thêm Iphone")
    } else {
        reject("Không đủ tiền rùi")
    }
})

// Thực hiện

buyMacbook
    .then(res => {
        console.log(res);
        return buyIphone;
    })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Về nhà");
    })
