const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const heroSection = document.getElementById("hero");
const heroTitle = document.querySelector(".hero__title");

let i = 1;
const changeHeroImage = function () {
    heroSection.classList = `hero hero--image${i}`;
    if (i < 3) i++;
    else i = 1;
};

let autoImageChanging;


const startAutoImageChanging = function () {
    clearInterval(autoImageChanging);
    autoImageChanging = setInterval(changeHeroImage, 1000);
};

const stopAutoImageChanging = function () {
    clearInterval(autoImageChanging);

};

heroSection.addEventListener('mouseenter', stopAutoImageChanging);
heroSection.addEventListener('mouseleave', startAutoImageChanging);

startAutoImageChanging();