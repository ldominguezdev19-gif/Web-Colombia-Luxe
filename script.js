sliders.forEach(function(slider){
    const track = slider.querySelector('.division-sldier-track');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const totalSlides = track.children.lenght;

    let currentSlide = 0;

    function updateSlide(){
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextBtn.addEventListener('click', function(){
        currentSlide = currentSlide + 1;
        if (currentSlide >= totalSlides){
            currentSlide = 0
        }
    }
)
})
    

/*
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

*/

