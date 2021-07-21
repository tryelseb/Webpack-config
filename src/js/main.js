import * as $ from 'jquery'
import '@/style/test.css'
import '@/style/main.scss'
//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/foundation-sites/dist/js/foundation.min.js
//= partials/swiper.min.js

$(document).foundation();

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 5,
  breakpointsInverse: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    530: {
      spaceBetween: 30
    }
  }
});

var swiper = new Swiper('.swiper2', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 24,
  breakpointsInverse: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    639: {
      spaceBetween: 70
    }
  }
});

var swiper = new Swiper('.swiper3', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 24,
  centerInsufficientSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper4', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  breakpointsInverse: true,
  centerInsufficientSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    639: {
      slidesOffsetBefore: 25,
      slidesOffsetAfter: 25,
    }
  }
});

$("#navToggle").click(function () {

  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $('.main-menu').removeClass("decor-menu");
  $("body").toggleClass("locked");
  $('.main-menu__list li').on('click', function () {
    $('.navBurger').removeClass('active');
    $('#overlay').removeClass('open');
    $('body').removeClass('locked');
    $(".fixed-menu-color").css("color", "");
  })
});

$(".timing-close").click(function () {
  $(".wrp-open").animate({
    display: "block",
    opacity: "show"
  }, 300)
  $("#hide_time").click(function () {
    event.preventDefault();
    $(".wrp-open").animate({
      display: "none",
      opacity: "hide"
    }, 300)
  });
});

$(".filter__link").click(function () {
  event.preventDefault();
  $(this).toggleClass('activ');
});



// function getCheckedCheckBoxes() {
//   var checkboxes = document.getElementsByClassName('switch-input');
//   var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
//   for (var index = 0; index < checkboxes.length; index++) {
//      if (checkboxes[index].checked) {
//         checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
//         alert(checkboxes[index].value); // делайте что нужно - это для наглядности
//      }
//   }
//   return checkboxesChecked; // для использования в нужном месте
// }
// console.log(checkboxesChecked)

function reFormat(num) {
  return ('' + num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

$('.cost__items').click(function (event) {
  event.preventDefault();
  let currentBtn = $(event.currentTarget);
  $('.cost__items').each(function () {
    $(this).find('a').removeClass('activ');
  });
  let rst = +currentBtn[0].dataset.price;
  currentBtn.find('a').addClass('activ');

  $('.descr-price')[0].innerHTML = reFormat(rst) + '₴';
  

  let flag = 0;
  $('.switch-input').click(function () {
    let checkBox = +this.value;  
    if (flag == 0){
    $('.descr-price')[0].innerHTML = reFormat(rst + checkBox) + '₴'
        flag =1 ;
    } else {
      $('.descr-price')[0].innerHTML = reFormat(rst) + '₴'
      flag = 0;
    }
  });

  $('.count-speakers__items').click(function (event) {
    let currentSpeak = $(event.currentTarget);
    $('.count-speakers__items').each(function () {
      $(this).find('label').removeClass('activ');
    });
    let rst1 = +currentSpeak[0].value;
    console.log("rst1 ", rst1);
    $('.descr-price')[0].innerHTML = reFormat(rst * rst1) + '₴'
    currentSpeak.find('label').addClass('activ');
  });
  

  
});



// let order = {
//   price: 0,
//   videoType: rst,
//   speakers: 0,
//   music: 0, // допустим будет 400, значит плюсуем в итоге к цене
//   add: 0
// }
// console.log(order);