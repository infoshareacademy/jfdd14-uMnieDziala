/*// Get the container element
let navContainer = document.getElementsByClassName(".header__nav");

let nav_button = document.querySelector(".header__button");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < nav_button.length; i++) {
  nav_button[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
*/


(function() {

  const sectionsEl = document.querySelectorAll("section");
  const sections = {};
  
  sectionsEl.forEach(function(element) {
    sections[element.id] = element.offsetTop;
  });

  window.addEventListener("scroll" ,function() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').classList.remove("active");
        document.querySelector('a[href*=' + i + ']').classList.add('active');      
      }
    }
  });
})();

