const aboutUsSection = document.getElementById('about');
const pictures = document.querySelectorAll(".animation__container__inner")

const animatePictures = function(){

    if (window.scrollY + window.innerHeight> aboutUsSection.offsetTop + aboutUsSection.offsetHeight * 2/3) {
        for (let i = 0; i<4; i++) {
            setTimeout(function() {
                pictures[i].classList.add("pictures-animation")
            }, 200*i);
            
        }

        window.removeEventListener("scroll", animatePictures); 
    }
}

window.addEventListener("scroll", animatePictures); 