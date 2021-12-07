    const heading = document.getElementById ('heading')

// console.log(heading);

const paras = document.getElementsByTagName ("p")

console.log(paras);
console.log(paras.length);
console.log(paras[0]);


Array.from(paras).map(ele => console.log(ele));


const parasClassName = document.getElementsByClassName("para")

console.log(parasClassName);


const headingSelector = document.querySelector("#heading")

console.log(headingSelector);

const para2 = document.querySelector(".para")

console.log(para2);

const para3 = document.querySelector(".para ~ p")

console.log(para3);


const ul2 = document.querySelector("li ~ ul")

console.log(ul2);

// querry.SelectorAll

const parasSelectorAll = document.querySelectorAll("p")

console.log(parasSelectorAll);

console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);


const ul1 = document.querySelector('.box ul')

console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);



heading.innerHTML = " Xin chào các bạn "
heading.innerHTML = `<span> Đây là Hiếu đẹp trai </span>`

heading.style.color = "red";
heading.style.backgroundColor = "blue";


para2.innerText = " Para2 new content"
para3.textContent = " Para3 new content"



const paraNew = document.createElement("p")
paraNew.innerText = " Xin chào anh Hiếu đẹp trai";
document.body.prepend(paraNew)
console.log(paraNew);


const ul3 = document.querySelector(".box ul");
const newLi= document.createElement("li")
newLi.innerText = " Xin chào anh Hiếu đẹp trai";
ul3.appendChild(newLi)
console.log(ul3);


const find3 = document.querySelector("li:nth-child(3)")
console.log(find3);
ul3.insertBefore(newLi,find3)

const theLink = document.createElement("a")
const box = document.querySelector(".box")
theLink.setAttribute("href", "https://www.google.com/") 
theLink.innerText = " Tìm kiếm";
theLink.target = "_blank"
box.prepend(theLink)

