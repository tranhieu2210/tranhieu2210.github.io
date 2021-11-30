// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']

function sortStudents(arr) {
    return arr.sort().reverse()
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));





//  Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}
console.log(shuffle([1, 2, 3, 4, 5]));





// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

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
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));




// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]


function union(arr1, arr2) {
    let arr3 = [...new Set([...arr1,...arr2])];
    return arr3

}
 console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
 console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) );




