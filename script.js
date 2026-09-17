const sliders = document.querySelectorAll('.division-slider');
sliders.forEach(function(slider){
    const track = slider.querySelector('.division-slider-track');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const totalSlides = track.children.length;
    track.style.width = (totalSlides *100) + "%";
    const images = track.children;
    for (let i = 0; i < images.length; i++){
        images[i].style.flex = (100/totalSlides) + "%";
    }

    let currentSlide = 0;

    function updateSlide(){
        track.style.transform = `translateX(-${currentSlide * (100/totalSlides)}%)`;
    }

    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        currentSlide = currentSlide + 1;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateSlide();
    });

    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        currentSlide = currentSlide - 1;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateSlide();
    });
});
    

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

