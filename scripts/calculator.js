const slider = document.getElementById('calculator__dialog--input');
const openBtn = document.getElementById('openButton');
const discountPriceParagraph = document.getElementById('calculator__textDiscountPrice');
const normalPriceParagraph = document.getElementById('calculator__textNormalPrice'); //tak
const calculatorWindow = document.getElementById('calculator__dialog'); // tak
const menuBtnExt = document.getElementById('calculator__dialog--buttonExit') // tak
const checkbox = document.getElementById('calculator__dialog--checkbox');
const basePrice = 30;


openBtn.addEventListener('click', openCalculatorWindow);
menuBtnExt.addEventListener('click', closeCalculatorWindow);
checkbox.addEventListener('click', calculatePrice);

function openCalculatorWindow() {
    calculatorWindow.style.display = 'flex';
};

function closeCalculatorWindow() {
    calculatorWindow.style.display = 'none';
};

function checkSliderPosition() {
    let sliderValue = slider.value;
    calculatePrice();
    console.log(sliderValue);
};

function calculatePrice() {
    if (slider.value === '0') {
        normalPriceParagraph.innerText = basePrice;
        discountPriceParagraph.innerText = basePrice;
    } else if (slider.value === '1') {
        normalPriceParagraph.innerText = basePrice * 3;
        discountPriceParagraph.innerText = getDiscountedPrice(3, 0.95);
    } else if (slider.value === '2') {
        normalPriceParagraph.innerText = basePrice * 6;
        discountPriceParagraph.innerText = getDiscountedPrice(6, 0.9);
    } else if (slider.value === '3') {
        normalPriceParagraph.innerText = basePrice * 12;
        discountPriceParagraph.innerText = getDiscountedPrice(12, 0.8);

    }
    console.log(checkbox);
};

function getDiscountedPrice(month, discount) {
    let discountValue = discount;
    if (checkbox.checked === true) {
        discountValue -= 0.05;
    }
    return Math.round(basePrice * month * discountValue); // math. round !!!!!!!!!!!!!!!

}
calculatePrice();