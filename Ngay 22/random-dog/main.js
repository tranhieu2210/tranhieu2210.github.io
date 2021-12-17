const btn = document.getElementById("btn");
const image = document.getElementById("image");


btn.addEventListener("click", function () {
    getRandomImage()
})

async function getRandomImage() {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}




async function getBreedList() {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")

    renderBreed(res.data.message)
}

function renderBreed(breeds) {
    return Object.keys(breeds)
}