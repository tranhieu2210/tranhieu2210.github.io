// Cau 1 :
const addFuture = document.querySelector('.list-unstyled')
const li = document.createElement('li')
li.textContent = "24/7 Phone support"
addFuture.appendChild(li)




// Cau 2 :
const row = document.querySelector('.row')
row.style.flexDirection = 'row-reverse'


// Cau 3 :
const change = document.querySelector('#pro-plan button')
change.textContent = 'Buy Now'
change.style.backgroundColor = '#82DACA'
change.style.color = '#fff'


// Cau 4 :
const changeProStorage = document.querySelector('#pro-plan .storage-amount')
const changeBasicStorage = document.querySelector('#basic-plan .storage-amount')

changeProStorage.textContent = "25"
changeBasicStorage.textContent = "3"



const snow = document.querySelector('#pro-plan .my-0')
snow.style.background = "img"
