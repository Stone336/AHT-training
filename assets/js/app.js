const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    searchToggle = document.querySelector(".searchToggle"),
    sliderbarOpen = document.querySelector(".sliderbarOpen"),
    sliderbarClose = document.querySelector(".sliderbarClose");

    // SEARCH
searchToggle.addEventListener("click" , () =>{
    searchToggle.classList.toggle("active");
});
    // OPEN SLIDER
sliderbarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sliderbarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });
    $('.toggle') .click(function(){
        $('.main-menu').slideToggle('');
    });
});