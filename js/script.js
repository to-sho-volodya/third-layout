$(document).ready(function () {
  $('.slider').slick({

    /*dots: true,
    infinite: true,
    speed: 500,*/
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: true,
    /* cssEase: 'linear'*/
    /* arrows:true,
     dots:true,
     adaptiveHeight:true,

     draggable:false,*/
  });
});

/*$('.feedback-form').on('submit', e => {
  e.preventDefault();
  e.stopPropagation();
  console.log('submit');
});*/


var form = document.querySelector('.feedback-form');
var validateBtn = form.querySelector('.validateBtn');
var name = form.querySelector('name');
var phone = form.querySelector('phone');
var email = form.querySelector('email');
var field = form.querySelectorAll('.field');


form.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();

  var errors = form.querySelectorAll('.error');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (var i = 0; i < field.length; i++) {
    if (!field[i].value) {
      console.log('field is blank', field[i]);
      var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerText = 'Поле обязательно для заполнения';
      form[i].parentElement.insertBefore(error, field[i]);
    }
  }
});


