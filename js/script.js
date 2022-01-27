$(document).ready(function(){
  $('.slider').slick({
    /*arrows:true,*/
    /*dots: true,
    infinite: true,
    speed: 500,*/
    fade: true,
    autoplay:true,
    autoplaySpeed: 4000,
   /* cssEase: 'linear'*/
   /* arrows:true,
    dots:true,
    adaptiveHeight:true,
    infinite:false,
    draggable:false,*/
  });
});

$('.feedback-form').on('submit', e => {
  e.preventDefault()
  e.stopPropagation()
  console.log('submit')
})


/*
var form = document.querySelector('.feedback-form')
var validateBtn = form.querySelector('.validateBtn')
var name = form.querySelector('name')
var phone = form.querySelector('phone')
var email = form.querySelector('email')
var field = form.querySelectorAll('.field')



form.addEventListener('submit', function (event) {
  event.preventDefault()
  event.stopPropagation()
  console.log('clicked on validate')
})*/
