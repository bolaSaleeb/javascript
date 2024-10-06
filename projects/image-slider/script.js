const slides = document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;


// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
    // intervalId = setInterval(nextSlide,1000);
    }
    // console.log(intervalId);
}

function showSlide(index){
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex--;
    slideIndex+=6;
    slideIndex%=6;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    slideIndex%=6;
    showSlide(slideIndex);
}

