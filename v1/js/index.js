const icedCoffeePics = [
    "image/icedCoffee1.jpg",
    "image/icedCoffee2.jpg",
    "image/icedCoffee3.jpg"
];

const changeImg = document.getElementById("icedCoffeePic");

const icedCoffeeImgLoop = async () => {
    let i = 0;

    while (true) {
        changeImg.src = icedCoffeePics[i];
        i = (i + 1) % icedCoffeePics.length;

        await new Promise(res => setTimeout(res, 3000));
    }
};

icedCoffeeImgLoop();
