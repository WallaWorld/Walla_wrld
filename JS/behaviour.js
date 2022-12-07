// navbar behaviour starts\
var navBar = $('.navbar').find('a'), Items = $('.item').children('.item');

// Switch Tab Handler
// navBar.on('click', function(e) {
//    e.preventDefault();
//    var navbar = $(this).attr('href');
//    //tabs btn
//    navBar.removeClass('open');
//    $(this).addClass('open');
// });


// navbar behaviour ends

// slider behaviour starts
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides =document.querySelectorAll(".slide");
const slideIcons =document.querySelectorAll(".slide-icon");
const numberOfSlides=slides.length;

var slideNumber=0;


// image slider btn
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideNumber++;
    if(slideNumber > (numberOfSlides -1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideNumber--;
    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
})

var repeater =() =>
{
    playSlider= setInterval(function(){
        slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideNumber++;
    if(slideNumber > (numberOfSlides -1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    },4000);
}
repeater();

// stop autoplay on mousehover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});
// start autoplay mouseover removed
    slider.addEventListener("mouseover", () => {
        repeater();
    });

    // slider behaviour ends