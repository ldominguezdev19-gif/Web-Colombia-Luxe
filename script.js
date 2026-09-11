const track = document.querySelector('.slider-track')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let currentSlide = 0;

function updateSlide(){
    track.style.transform = `translateX(-${currentSlide*100}%)`;
}

nextBtn.addEventListener('click', function(){
    currentSlide = currentSlide + 1;
    if (currentSlide > 2){
        currentSlide = 0;
    }
    updateSlide();
});

prevBtn.addEventListener('click', function(){
    currentSlide = currentSlide - 1;
    if (currentSlide > 0){
        currentSlide = 2;
    }
    updateSlide();
});