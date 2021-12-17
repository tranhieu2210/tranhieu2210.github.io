// Hứa : nếi có 50 triệu, sẽ mua Macbook Pro 14 inch
let money = 100

let buyMacbook = function () {
    return new Promise(function (resolve, reject) {
        if (money > 50) {
            resolve("Mua Macbook thôi")
        } else {
            reject("Kiếm thêm tiền đã")
        }
    });
}


// Hứa tiếp
// Mua Macbook xong nếu còn thừa tiền mua thêm con IP 13 Promax 30 củ

let buyIphone = function () {
    return new Promise(function (reslove, reject) {
        if (money - 55 - 30 > 0) {
            reslove("Mua thêm Iphone")
        } else {
            reject("Không đủ tiền rùi")
        }
    })
}


async function buy() {
    try {
        let res = await buyMacbook()
        console.log(res);
        
        let res1 = await buyIphone()
        console.log(res1);

    } catch (error) {
        console.log(error);
    }
    return "Về hưởng thôi"
}

buy().then(res => console.log(res))