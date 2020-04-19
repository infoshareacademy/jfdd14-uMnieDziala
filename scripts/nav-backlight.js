(function() {

    const sectionsEl = document.querySelectorAll(".content section.menu");
    const sections = {};

    sectionsEl.forEach(function(element) {
        sections[element.id] = element.offsetTop;
    });

    window.addEventListener("scroll", function() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i in sections) {
            if (sections[i] <= scrollPosition + 150) {
                document.querySelector('.active').classList.remove("active");
                document.querySelector('a[href*=' + i + ']').classList.add('active');
                if (i === "hero") {
                    document.querySelector('a[href*=top]').classList.add('active');
                } else {
                    document.querySelector('a[href*=top]').classList.remove('active');
                }
            }
        }
    });
})();