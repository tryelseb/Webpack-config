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

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleNotFoundError: Module not found: Error: Can't resolve '../images/first-screen-bg.jpg' in '/Users/olehsova/Office/webpack_assembly/src/style'\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/Compilation.js:1771:28\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/NormalModuleFactory.js:742:13\\n    at eval (eval at create (/Users/olehsova/Office/webpack_assembly/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:10:1)\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/NormalModuleFactory.js:276:22\\n    at eval (eval at create (/Users/olehsova/Office/webpack_assembly/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/NormalModuleFactory.js:405:22\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/NormalModuleFactory.js:119:11\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/NormalModuleFactory.js:650:24\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/NormalModuleFactory.js:813:8\\n    at /Users/olehsova/Office/webpack_assembly/node_modules/webpack/lib/NormalModuleFactory.js:933:5\");\n\n//# sourceURL=webpack:///./style/main.scss?");

/***/ }),

/***/ "./style/test.css":
/*!************************!*\
  !*** ./style/test.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/test.css?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_test_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/style/test.css */ \"./style/test.css\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/style/main.scss */ \"./style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n//= ../../node_modules/jquery/dist/jquery.js\r\n//= ../../node_modules/foundation-sites/dist/js/foundation.min.js\r\n//= partials/swiper.min.js\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(document).foundation();\r\n\r\nvar swiper = new Swiper('.swiper-container', {\r\n  slidesPerView: 'auto',\r\n  freeMode: true,\r\n  spaceBetween: 5,\r\n  breakpointsInverse: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n  breakpoints: {\r\n    530: {\r\n      spaceBetween: 30\r\n    }\r\n  }\r\n});\r\n\r\nvar swiper = new Swiper('.swiper2', {\r\n  slidesPerView: 'auto',\r\n  freeMode: true,\r\n  spaceBetween: 24,\r\n  breakpointsInverse: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n  breakpoints: {\r\n    639: {\r\n      spaceBetween: 70\r\n    }\r\n  }\r\n});\r\n\r\nvar swiper = new Swiper('.swiper3', {\r\n  slidesPerView: 'auto',\r\n  freeMode: true,\r\n  spaceBetween: 24,\r\n  centerInsufficientSlides: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n});\r\n\r\nvar swiper = new Swiper('.swiper4', {\r\n  slidesPerView: 'auto',\r\n  spaceBetween: 30,\r\n  slidesOffsetBefore: 0,\r\n  slidesOffsetAfter: 0,\r\n  breakpointsInverse: true,\r\n  centerInsufficientSlides: true,\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n  breakpoints: {\r\n    639: {\r\n      slidesOffsetBefore: 25,\r\n      slidesOffsetAfter: 25,\r\n    }\r\n  }\r\n});\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\"#navToggle\").click(function () {\r\n\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass(\"active\");\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".overlay\").toggleClass(\"open\");\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__('.main-menu').removeClass(\"decor-menu\");\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").toggleClass(\"locked\");\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__('.main-menu__list li').on('click', function () {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__('.navBurger').removeClass('active');\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__('#overlay').removeClass('open');\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__('body').removeClass('locked');\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".fixed-menu-color\").css(\"color\", \"\");\r\n  })\r\n});\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".timing-close\").click(function () {\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".wrp-open\").animate({\r\n    display: \"block\",\r\n    opacity: \"show\"\r\n  }, 300)\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"#hide_time\").click(function () {\r\n    event.preventDefault();\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".wrp-open\").animate({\r\n      display: \"none\",\r\n      opacity: \"hide\"\r\n    }, 300)\r\n  });\r\n});\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__(\".filter__link\").click(function () {\r\n  event.preventDefault();\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass('activ');\r\n});\r\n\r\n\r\n\r\n// function getCheckedCheckBoxes() {\r\n//   var checkboxes = document.getElementsByClassName('switch-input');\r\n//   var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать \r\n//   for (var index = 0; index < checkboxes.length; index++) {\r\n//      if (checkboxes[index].checked) {\r\n//         checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный\r\n//         alert(checkboxes[index].value); // делайте что нужно - это для наглядности\r\n//      }\r\n//   }\r\n//   return checkboxesChecked; // для использования в нужном месте\r\n// }\r\n// console.log(checkboxesChecked)\r\n\r\nfunction reFormat(num) {\r\n  return ('' + num).replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1 ')\r\n}\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0__('.cost__items').click(function (event) {\r\n  event.preventDefault();\r\n  let currentBtn = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget);\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__('.cost__items').each(function () {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).find('a').removeClass('activ');\r\n  });\r\n  let rst = +currentBtn[0].dataset.price;\r\n  currentBtn.find('a').addClass('activ');\r\n\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__('.descr-price')[0].innerHTML = reFormat(rst) + '₴';\r\n  \r\n\r\n  let flag = 0;\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__('.switch-input').click(function () {\r\n    let checkBox = +this.value;  \r\n    if (flag == 0){\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__('.descr-price')[0].innerHTML = reFormat(rst + checkBox) + '₴'\r\n        flag =1 ;\r\n    } else {\r\n      jquery__WEBPACK_IMPORTED_MODULE_0__('.descr-price')[0].innerHTML = reFormat(rst) + '₴'\r\n      flag = 0;\r\n    }\r\n  });\r\n\r\n  jquery__WEBPACK_IMPORTED_MODULE_0__('.count-speakers__items').click(function (event) {\r\n    let currentSpeak = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget);\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__('.count-speakers__items').each(function () {\r\n      jquery__WEBPACK_IMPORTED_MODULE_0__(this).find('label').removeClass('activ');\r\n    });\r\n    let rst1 = +currentSpeak[0].value;\r\n    console.log(\"rst1 \", rst1);\r\n    jquery__WEBPACK_IMPORTED_MODULE_0__('.descr-price')[0].innerHTML = reFormat(rst * rst1) + '₴'\r\n    currentSpeak.find('label').addClass('activ');\r\n  });\r\n  \r\n\r\n  \r\n});\r\n\r\n\r\n\r\n// let order = {\r\n//   price: 0,\r\n//   videoType: rst,\r\n//   speakers: 0,\r\n//   music: 0, // допустим будет 400, значит плюсуем в итоге к цене\r\n//   add: 0\r\n// }\r\n// console.log(order);\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;