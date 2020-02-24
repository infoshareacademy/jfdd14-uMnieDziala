const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const heroSection = document.getElementById("hero");
const heroTitle = document.querySelector(".hero__title");

let imageCounter = 1;
const changeHeroImage = function () {
    imageCounter < 3 ? imageCounter++ : imageCounter = 1;
    heroSection.classList = `hero hero--image${imageCounter}`;
};

const changeHeroImageToPrevious = function () {
    imageCounter === 1 ? imageCounter = 3 : imageCounter--;
    heroSection.classList = `hero hero--image${imageCounter}`;
};

let autoImageChanging;

const startAutoImageChanging = function () {
    clearInterval(autoImageChanging);
    autoImageChanging = setInterval(changeHeroImage, 3000);
};

const stopAutoImageChanging = function () {
    clearInterval(autoImageChanging);

};

heroSection.addEventListener('mouseenter', stopAutoImageChanging);
heroSection.addEventListener('mouseleave', startAutoImageChanging);
leftArrow.addEventListener('click', changeHeroImageToPrevious);
rightArrow.addEventListener('click', changeHeroImage);

startAutoImageChanging();