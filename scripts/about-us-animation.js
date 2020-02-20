const aboutUsSection = document.getElementById('about');
const pictures = document.querySelectorAll(".animation__container__inner")

const animatePictures = function(){
    for (let i = 0; i<4; i++)
    pictures[i].classList.add("pictures-animation")
}

aboutUsSection.addEventListener("scroll", animatePictures()); 