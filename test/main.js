const headerNavItems = document.querySelectorAll(".header-nav-item");

headerNavItems.forEach((item) => {
    item.addEventListener('click', function() {
        document.querySelector(".active").classList.remove("active")
        item.classList.add("active")
    })
})


const menuBar = document.querySelectorAll(".menu-item");

menuBar.forEach((items) => {
    items.addEventListener('click', function() {
        document.querySelector(".active1").classList.remove("active1")
        items.classList.add("active1")
    })
})

