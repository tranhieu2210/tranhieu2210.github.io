// B1 : tính thể tích hình cầu với tham số truyền vào là bán kính hình cầu 

function sphericalVolume(r) {
    return 4 / 3 * Math.PI * r ** 3
}

console.log(sphericalVolume(3));


// B2 :


function sumTotal(a, b) {
    let sum = 0;
    if (a > b) {
        [a, b] = [b, a]
    }
    for (i = a + 1; i < b; i++) {
        sum += i
    }
    return sum
}

console.log(sumTotal(3, 8));
console.log(sumTotal(3, 3));
console.log(sumTotal(8, 3));

// B3 :

function sumDivisor(a) {
    let sum = 0
    if (a<=0) {
        return "Nhâp lại"
    }
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            sum += i
        }
    }
    return sum
}
 console.log(sumDivisor(6));
 console.log(sumDivisor(7));


// B4 :

function sNT(a) {
    if (a < 2) {
        return false
    }
    for (i = 2; i < a - 1; i++) {
        if (a % i == 0) {
            return false

        }


    }

    return true
}


console.log(sNT(11));
console.log(sNT(9));
console.log(sNT(5));
console.log(sNT(4));


// b5 :

function sumA(a) {
    let sum = 0
    if (a<=0) {
        return "Nhâp lại"
    }
    for (let i = 1; i <= a; i++) {
        if (sNT(i)) {
            sum += i
        }
    }
    return sum
}


console.log(sumA(12));
console.log(sumA(0));



// b6:


function convertH(str) {
   let result = str.toLowerCase().split(' ').map(result => {
       return result[0].toUpperCase() + result.slice(1)
   })
   return result.join(' ')
}

console.log(convertH('HELLO world'));



// b7

function replaceH(str) {
    let result = str.toLowerCase().replaceAll('','-')
    return result
}

console.log(replaceH('HELLO world'));


// // b8

// function deleteH(str) {
//     let result = str.filter(Boolean)
// }

// console.log(deleteH([0,1,""]));


// b9


function symmetricDifference(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            result.push(arr2[i]);
        }
    }
    return result;
}
console.log(symmetricDifference([1, 2, 3], [1, 3, 4, 5, 5]));




const grades = [
    { name: 'Mai Anh', age: 27},
    { name: 'Huy', age: 22},
    { name: 'Thiên', age: 20},
    { name: 'Hiếu', age: 25},
]


function getAge(arr) {
    return arr.sort((a,b) => b.age - a.age)
}


console.log(getAge(grades));





function sortName(arr) {
    return arr.sort((a,b) => a.name.localeCompare(b.name))
}

console.log(sortName(grades));


function startH(arr) {
    return arr.filter(a => a.name.startsWith('H'))
}

console.log(startH(grades));