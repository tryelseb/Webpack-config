/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("//= ../../node_modules/jquery/dist/jquery.js\r\n//= ../../node_modules/foundation-sites/dist/js/foundation.min.js\r\n//= partials/swiper.min.js\r\n\r\n$(document).foundation();\r\n\r\nvar swiper = new Swiper('.swiper-container', {\r\n  slidesPerView: 'auto',\r\n  freeMode: true,\r\n  spaceBetween: 5,\r\n  breakpointsInverse: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n  breakpoints: {\r\n    530: {\r\n      spaceBetween: 30\r\n    }\r\n  }\r\n});\r\n\r\nvar swiper = new Swiper('.swiper2', {\r\n  slidesPerView: 'auto',\r\n  freeMode: true,\r\n  spaceBetween: 24,\r\n  breakpointsInverse: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n  breakpoints: {\r\n    639: {\r\n      spaceBetween: 70\r\n    }\r\n  }\r\n});\r\n\r\nvar swiper = new Swiper('.swiper3', {\r\n  slidesPerView: 'auto',\r\n  freeMode: true,\r\n  spaceBetween: 24,\r\n  centerInsufficientSlides: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n});\r\n\r\nvar swiper = new Swiper('.swiper4', {\r\n  slidesPerView: 'auto',\r\n  spaceBetween: 30,\r\n  slidesOffsetBefore: 0,\r\n  slidesOffsetAfter: 0,\r\n  breakpointsInverse: true,\r\n  centerInsufficientSlides: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n  breakpoints: {\r\n    639: {\r\n      slidesOffsetBefore: 25,\r\n      slidesOffsetAfter: 25,\r\n    }\r\n  }\r\n});\r\n\r\n$(\"#navToggle\").click(function () {\r\n\r\n  $(this).toggleClass(\"active\");\r\n  $(\".overlay\").toggleClass(\"open\");\r\n  $('.main-menu').removeClass(\"decor-menu\");\r\n  $(\"body\").toggleClass(\"locked\");\r\n  $('.main-menu__list li').on('click', function () {\r\n    $('.navBurger').removeClass('active');\r\n    $('#overlay').removeClass('open');\r\n    $('body').removeClass('locked');\r\n    $(\".fixed-menu-color\").css(\"color\", \"\");\r\n  })\r\n});\r\n\r\n$(\".timing-close\").click(function () {\r\n  $(\".wrp-open\").animate({\r\n    display: \"block\",\r\n    opacity: \"show\"\r\n  }, 300)\r\n  $(\"#hide_time\").click(function () {\r\n    event.preventDefault();\r\n    $(\".wrp-open\").animate({\r\n      display: \"none\",\r\n      opacity: \"hide\"\r\n    }, 300)\r\n  });\r\n});\r\n\r\n$(\".filter__link\").click(function () {\r\n  event.preventDefault();\r\n  $(this).toggleClass('activ');\r\n});\r\n\r\n\r\n\r\n// function getCheckedCheckBoxes() {\r\n//   var checkboxes = document.getElementsByClassName('switch-input');\r\n//   var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать \r\n//   for (var index = 0; index < checkboxes.length; index++) {\r\n//      if (checkboxes[index].checked) {\r\n//         checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный\r\n//         alert(checkboxes[index].value); // делайте что нужно - это для наглядности\r\n//      }\r\n//   }\r\n//   return checkboxesChecked; // для использования в нужном месте\r\n// }\r\n// console.log(checkboxesChecked)\r\n\r\nfunction reFormat(num) {\r\n  return ('' + num).replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1 ')\r\n}\r\n\r\n$('.cost__items').click(function (event) {\r\n  event.preventDefault();\r\n  let currentBtn = $(event.currentTarget);\r\n  $('.cost__items').each(function () {\r\n    $(this).find('a').removeClass('activ');\r\n  });\r\n  let rst = +currentBtn[0].dataset.price;\r\n  currentBtn.find('a').addClass('activ');\r\n\r\n  $('.descr-price')[0].innerHTML = reFormat(rst) + '₴';\r\n  \r\n\r\n  let flag = 0;\r\n  $('.switch-input').click(function () {\r\n    let checkBox = +this.value;  \r\n    if (flag == 0){\r\n    $('.descr-price')[0].innerHTML = reFormat(rst + checkBox) + '₴'\r\n        flag =1 ;\r\n    } else {\r\n      $('.descr-price')[0].innerHTML = reFormat(rst) + '₴'\r\n      flag = 0;\r\n    }\r\n  });\r\n\r\n  $('.count-speakers__items').click(function (event) {\r\n    let currentSpeak = $(event.currentTarget);\r\n    $('.count-speakers__items').each(function () {\r\n      $(this).find('label').removeClass('activ');\r\n    });\r\n    let rst1 = +currentSpeak[0].value;\r\n    console.log(\"rst1 \", rst1);\r\n    $('.descr-price')[0].innerHTML = reFormat(rst * rst1) + '₴'\r\n    currentSpeak.find('label').addClass('activ');\r\n  });\r\n  \r\n\r\n  \r\n});\r\n\r\n\r\n\r\n// let order = {\r\n//   price: 0,\r\n//   videoType: rst,\r\n//   speakers: 0,\r\n//   music: 0, // допустим будет 400, значит плюсуем в итоге к цене\r\n//   add: 0\r\n// }\r\n// console.log(order);\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.js"]();
/******/ 	
/******/ })()
;