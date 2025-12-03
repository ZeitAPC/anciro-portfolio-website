const icedCoffeePics = [
    "image/icedCoffee1.jpg",
    "image/icedCoffee2.jpg",
    "image/icedCoffee3.jpg"
];
const changeImg = document.getElementById("icedCoffeePic");
let i = 0;

function changeImage() {
    i = (i + 1) % icedCoffeePics.length;
    changeImg.src = icedCoffeePics[i];
}
setInterval(changeImage, 3000);
