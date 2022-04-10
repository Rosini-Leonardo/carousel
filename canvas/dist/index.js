/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/canvas.js":
/*!**********************************!*\
  !*** ./src/components/canvas.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom/elementDOM */ "./src/components/custom/elementDOM.js");


var canvas = (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('canvas');
var canvas_disabled = 'canvas-disabled';
(0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('canvas__btn-open').addEventListener('click', function () {
  // Remove the class, that hide the canvas
  if (canvas.className === canvas_disabled) {
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('canvas').classList.remove(canvas_disabled);
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('canvas').classList.add('canvas-off');
  } // Turn on the canvas


  (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.changeClass)(canvas, 'canvas-off', 'canvas-on');
}); // Close the canvas 

(0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('canvas__btn-close').addEventListener('click', function () {
  (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.changeClass)(canvas, 'canvas-on', 'canvas-off');
});

/***/ }),

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom/elementDOM */ "./src/components/custom/elementDOM.js");
/* harmony import */ var _singleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleCard */ "./src/components/singleCard.js");
/* harmony import */ var _utils_active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/active */ "./src/components/utils/active.js");


 // Container IDs

var first_container = 'container-1';
var second_container = 'container-2';
var third_container = 'container-3';
var fourth_container = 'container-4'; // Inner the cards in the DOM

(0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('carousel').innerHTML = (0,_singleCard__WEBPACK_IMPORTED_MODULE_1__.SingleCard)(); // Click function that switch card

(0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('card__prev').addEventListener('click', function () {
  (0,_utils_active__WEBPACK_IMPORTED_MODULE_2__.active)(first_container, second_container, third_container, fourth_container);
});
(0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('card__next').addEventListener('click', function () {
  (0,_utils_active__WEBPACK_IMPORTED_MODULE_2__.active)(first_container, second_container, third_container, fourth_container);
});

/***/ }),

/***/ "./src/components/custom/elementDOM.js":
/*!*********************************************!*\
  !*** ./src/components/custom/elementDOM.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeClass": () => (/* binding */ changeClass),
/* harmony export */   "getElement": () => (/* binding */ getElement)
/* harmony export */ });
function getElement(el) {
  return document.getElementById(el);
}
; // Change the class

function changeClass(el, className, className2) {
  if (el.className === className) {
    el.classList.remove(className);
    el.classList.add(className2);
  } else if (el.className === className2) {
    el.classList.remove(className2);
    el.classList.add(className);
  } else {
    console.log('error on change class');
  }
}
;

/***/ }),

/***/ "./src/components/singleCard.js":
/*!**************************************!*\
  !*** ./src/components/singleCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleCard": () => (/* binding */ SingleCard),
/* harmony export */   "cards": () => (/* binding */ cards),
/* harmony export */   "first_card": () => (/* binding */ first_card),
/* harmony export */   "fourth_card": () => (/* binding */ fourth_card),
/* harmony export */   "second_card": () => (/* binding */ second_card),
/* harmony export */   "third_card": () => (/* binding */ third_card)
/* harmony export */ });
/* harmony import */ var _static_image_nikita_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/image/nikita.jpg */ "./static/image/nikita.jpg");
/* harmony import */ var _static_image_sara_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/image/sara.jpg */ "./static/image/sara.jpg");
/* harmony import */ var _static_image_mae_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/image/mae.jpg */ "./static/image/mae.jpg");
/* harmony import */ var _static_image_emily_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/image/emily.jpg */ "./static/image/emily.jpg");
// Static files



 // General Classes

var cards = 'carousel-card';
var container = 'cards-fade-on'; // Cards IDs

var first_card = 'card-1';
var second_card = 'card-2';
var third_card = 'card-3';
var fourth_card = 'card-4'; // Container IDs

var first_container = 'container-1';
var second_container = 'container-2';
var third_container = 'container-3';
var fourth_container = 'container-4'; // Button value

var left_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>';
var right_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>';
function SingleCard() {
  return "\n    <button \n    id='card__prev'\n    class=\"button\"\n    >".concat(left_icon, "\n    </button>\n    \n    <button \n    id=\"card__next\"\n    class=\"button\"\n    >").concat(right_icon, "\n    </button>\n\n    <!-- first card -->\n    <div \n    id=").concat(first_container, "\n    class=").concat(container, "\n    >\n        <img\n        id=").concat(first_card, "\n        class=").concat(cards, "\n        src=").concat(_static_image_nikita_jpg__WEBPACK_IMPORTED_MODULE_0__, "\n        alt='img'\n        ></img>\n    </div>\n    \n    <!-- second card -->\n    <div \n    id=").concat(second_container, "\n    >   \n        <img\n        id=").concat(second_card, "\n        class=").concat(cards, "\n        src=").concat(_static_image_sara_jpg__WEBPACK_IMPORTED_MODULE_1__, "\n        alt='img'\n        ></img>\n    </div>\n    \n    <!-- third card -->\n    <div \n    id=").concat(third_container, "\n    >\n        <img\n        id=").concat(third_card, "\n        class=").concat(cards, "\n        src=").concat(_static_image_mae_jpg__WEBPACK_IMPORTED_MODULE_2__, "\n        alt='img'\n        ></img>\n    </div>\n    \n    <!-- fourth card-->\n    <div \n    id=").concat(fourth_container, "\n    >\n        <img\n        id=").concat(fourth_card, "\n        class=").concat(cards, "\n        src=").concat(_static_image_emily_jpg__WEBPACK_IMPORTED_MODULE_3__, "\n        alt='img'\n        ></img>\n    </div>\n    ");
}
;


/***/ }),

/***/ "./src/components/utils/active.js":
/*!****************************************!*\
  !*** ./src/components/utils/active.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "active": () => (/* binding */ active)
/* harmony export */ });
/* harmony import */ var _custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom/elementDOM */ "./src/components/custom/elementDOM.js");

var fade_on = 'cards-fade-on';
var fade_off = 'cards-fade-off';
function active(el, el2, el3, el4) {
  if ((0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el).className === fade_on) {
    // Turn off the first container
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el).classList.remove(fade_on);
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el).classList.add(fade_off); // Turn on the second container

    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el2).classList.add(fade_on);
  } else if ((0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el2).className === fade_on) {
    // Turn off the second container
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el2).classList.remove(fade_on);
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el2).classList.add(fade_off); // Turn on the third container

    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el3).classList.add(fade_on);
  } else if ((0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el3).className === fade_on) {
    // Turn off the third container
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el3).classList.remove(fade_on);
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el3).classList.add(fade_off); // Turn on the fourth container

    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el4).classList.add(fade_on); // Remove first container

    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el).classList.remove(fade_off);
  } else if ((0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el4).className === fade_on) {
    // Load the first el
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el).classList.add(fade_on); // Turn off the fourth container

    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el4).classList.remove(fade_on);
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el4).classList.add(fade_off); // Turn on the fourh container 

    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el2).classList.remove(fade_off);
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el3).classList.remove(fade_off);
    (0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)(el4).classList.remove(fade_off);
  } else {
    console.warn('error on active');
  }
}
;

/***/ }),

/***/ "./src/components/utils/links.js":
/*!***************************************!*\
  !*** ./src/components/utils/links.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom/elementDOM */ "./src/components/custom/elementDOM.js");

var links = [{
  id: 'link-1',
  name: 'Home',
  path: '/'
}, {
  id: 'link-2',
  name: 'About',
  path: '/'
}, {
  id: 'link-3',
  name: 'Contact',
  path: '/'
}];

function linkComponent(el) {
  return "<a\n    id=".concat(el.id, "\n    href=").concat(el.path, "\n    class=\"link-light\"\n    >").concat(el.name, "\n    </a>\n    ");
}

(0,_custom_elementDOM__WEBPACK_IMPORTED_MODULE_0__.getElement)('link-container').innerHTML = links.map(function (el) {
  return linkComponent(el);
}).join('');

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/css/components/button.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/css/components/button.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*------------|\ndefault button|\n-------------*/\n\n.button,\n.button-dark{\n    outline: none;\n    padding: 0.7rem;\n    border-radius: 5px;\n    border: 0;\n    background-color: transparent;\n}\n\n.button{\n    color: black;\n}\n\n.button-dark{\n    color: white;\n}\n\n/*-----------|\ncanvas button|\n------------*/\n\n#canvas__btn-open{\n    padding: 0;\n    \n    transform: translate(-50%,-50%);\n    position: absolute;\n    right: 5%;\n    top: 50%;\n}\n\n#menu-bars{\n    /* fallback svg dimension */\n    width: 30px;\n    height: 30px;\n}\n\n#canvas__btn-close{    \n    font-size: larger;\n    border-radius: 100%;\n    position:relative;\n}\n\n#canvas__close-icon{\n    color: white;\n    font-size:larger;\n}\n\n/*-------------|\ncarousel button|\n--------------*/\n\n#card__prev,\n#card__next{\n    background-color: white;\n    border-radius: 50px;\n    z-index: 100;\n    height: 45px;   \n    width: 45px;\n    \n    position: absolute;\n    top: 50%;\n}\n\n#card__prev{\n    transform: translate(-50%,-50%);\n    left: 10%;\n}\n\n#card__next{\n    transform: translate(50%,-50%);\n    right: 10%;\n}\n\n/*--------------|\nanimation button|\n---------------*/\n\n#menu-bars:hover{\n    transition: 0.6s ease-out;\n    transform: rotate(90deg);\n}\n\n#card__prev:hover,\n#card__next:hover{\n    background-color: var(--beige);\n    opacity: 1;\n}", "",{"version":3,"sources":["webpack://./static/css/components/button.css"],"names":[],"mappings":"AAAA;;cAEc;;AAEd;;IAEI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;aAEa;;AAEb;IACI,UAAU;;IAEV,+BAA+B;IAC/B,kBAAkB;IAClB,SAAS;IACT,QAAQ;AACZ;;AAEA;IACI,2BAA2B;IAC3B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;eAEe;;AAEf;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,WAAW;;IAEX,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,UAAU;AACd;;AAEA;;gBAEgB;;AAEhB;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;;IAEI,8BAA8B;IAC9B,UAAU;AACd","sourcesContent":["/*------------|\ndefault button|\n-------------*/\n\n.button,\n.button-dark{\n    outline: none;\n    padding: 0.7rem;\n    border-radius: 5px;\n    border: 0;\n    background-color: transparent;\n}\n\n.button{\n    color: black;\n}\n\n.button-dark{\n    color: white;\n}\n\n/*-----------|\ncanvas button|\n------------*/\n\n#canvas__btn-open{\n    padding: 0;\n    \n    transform: translate(-50%,-50%);\n    position: absolute;\n    right: 5%;\n    top: 50%;\n}\n\n#menu-bars{\n    /* fallback svg dimension */\n    width: 30px;\n    height: 30px;\n}\n\n#canvas__btn-close{    \n    font-size: larger;\n    border-radius: 100%;\n    position:relative;\n}\n\n#canvas__close-icon{\n    color: white;\n    font-size:larger;\n}\n\n/*-------------|\ncarousel button|\n--------------*/\n\n#card__prev,\n#card__next{\n    background-color: white;\n    border-radius: 50px;\n    z-index: 100;\n    height: 45px;   \n    width: 45px;\n    \n    position: absolute;\n    top: 50%;\n}\n\n#card__prev{\n    transform: translate(-50%,-50%);\n    left: 10%;\n}\n\n#card__next{\n    transform: translate(50%,-50%);\n    right: 10%;\n}\n\n/*--------------|\nanimation button|\n---------------*/\n\n#menu-bars:hover{\n    transition: 0.6s ease-out;\n    transform: rotate(90deg);\n}\n\n#card__prev:hover,\n#card__next:hover{\n    background-color: var(--beige);\n    opacity: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/css/components/carousel.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/css/components/carousel.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* width and height in media.css */\n/* links style in media.css */\n\n#carousel{    \n    display: inline-flex;\n    color: transparent;\n    overflow: hidden;\n    \n    transform: translate(-50%,-50%);\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}\n\n#card-1,\n#card-2,\n#card-3,\n#card-4{\n    /* cards fallback whereas it's loading */\n    background-color: var(--black-o);\n    z-index: -100;\n}\n\n/*-------------|\nCards animation|\n--------------*/\n\n.cards-fade-on{\n    transition: 0.5s ease;\n    opacity: 0;\n    \n    position: fixed;\n    margin: auto;\n}\n\n.cards-fade-off{\n    transform: translateX(-100%);\n    position: fixed;\n    margin: auto;\n}", "",{"version":3,"sources":["webpack://./static/css/components/carousel.css"],"names":[],"mappings":"AAAA,kCAAkC;AAClC,6BAA6B;;AAE7B;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;;IAEhB,+BAA+B;IAC/B,kBAAkB;IAClB,SAAS;IACT,QAAQ;AACZ;;AAEA;;;;IAII,wCAAwC;IACxC,gCAAgC;IAChC,aAAa;AACjB;;AAEA;;eAEe;;AAEf;IACI,qBAAqB;IACrB,UAAU;;IAEV,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,YAAY;AAChB","sourcesContent":["/* width and height in media.css */\n/* links style in media.css */\n\n#carousel{    \n    display: inline-flex;\n    color: transparent;\n    overflow: hidden;\n    \n    transform: translate(-50%,-50%);\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}\n\n#card-1,\n#card-2,\n#card-3,\n#card-4{\n    /* cards fallback whereas it's loading */\n    background-color: var(--black-o);\n    z-index: -100;\n}\n\n/*-------------|\nCards animation|\n--------------*/\n\n.cards-fade-on{\n    transition: 0.5s ease;\n    opacity: 0;\n    \n    position: fixed;\n    margin: auto;\n}\n\n.cards-fade-off{\n    transform: translateX(-100%);\n    position: fixed;\n    margin: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/css/components/navbar.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/css/components/navbar.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*----|\nnavbar|\n-----*/\n\n.navbar{\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    right: 0%;\n\n    width: 100vw;\n    background-color: var(--beige);\n}\n\n#nav-brand{\n    content: '';\n}\n\n/*----|\ncanvas|\n-----*/\n\n#canvas{\n    background-color: black;\n    color: white;\n    padding: 1.5rem;\n    z-index: 400;\n    height: 100vh;\n    width: 100vw;\n    \n    position: absolute;\n    bottom: 0;\n    left: 0;\n    top: 0;\n}\n\n\n.canvas-body{\n    transform: translate(-50%,-50%);\n    position: absolute;\n    left: 30%;\n    top: 45%;\n    \n    font-size: 2rem;\n}\n\n/* CANVAS MODE */\n.canvas-disabled{\n    transform: translateX(-100%);\n}\n\n.canvas-off{\n    opacity: 0;\n    transition: 2s ease-out;\n    transform: translateX(-210%);\n}\n\n.canvas-on{\n    transition: 1.5s ease-out;\n    transform: translateX(0%);\n}\n\n/*----------|\ncanvas links|\n-----------*/\n\n#link-container>*{\n    display: block;\n}\n\n/* effects in media.css */", "",{"version":3,"sources":["webpack://./static/css/components/navbar.css"],"names":[],"mappings":"AAAA;;MAEM;;AAEN;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,SAAS;;IAET,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA;;MAEM;;AAEN;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,aAAa;IACb,YAAY;;IAEZ,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,MAAM;AACV;;;AAGA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,SAAS;IACT,QAAQ;;IAER,eAAe;AACnB;;AAEA,gBAAgB;AAChB;IACI,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;;YAEY;;AAEZ;IACI,cAAc;AAClB;;AAEA,yBAAyB","sourcesContent":["/*----|\nnavbar|\n-----*/\n\n.navbar{\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    right: 0%;\n\n    width: 100vw;\n    background-color: var(--beige);\n}\n\n#nav-brand{\n    content: '';\n}\n\n/*----|\ncanvas|\n-----*/\n\n#canvas{\n    background-color: black;\n    color: white;\n    padding: 1.5rem;\n    z-index: 400;\n    height: 100vh;\n    width: 100vw;\n    \n    position: absolute;\n    bottom: 0;\n    left: 0;\n    top: 0;\n}\n\n\n.canvas-body{\n    transform: translate(-50%,-50%);\n    position: absolute;\n    left: 30%;\n    top: 45%;\n    \n    font-size: 2rem;\n}\n\n/* CANVAS MODE */\n.canvas-disabled{\n    transform: translateX(-100%);\n}\n\n.canvas-off{\n    opacity: 0;\n    transition: 2s ease-out;\n    transform: translateX(-210%);\n}\n\n.canvas-on{\n    transition: 1.5s ease-out;\n    transform: translateX(0%);\n}\n\n/*----------|\ncanvas links|\n-----------*/\n\n#link-container>*{\n    display: block;\n}\n\n/* effects in media.css */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/css/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/css/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/carousel.css */ "./node_modules/css-loader/dist/cjs.js!./static/css/components/carousel.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/navbar.css */ "./node_modules/css-loader/dist/cjs.js!./static/css/components/navbar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/button.css */ "./node_modules/css-loader/dist/cjs.js!./static/css/components/button.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./media.css */ "./node_modules/css-loader/dist/cjs.js!./static/css/media.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_carousel_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_navbar_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_button_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --black:rgb(12, 12, 12);\n    --white:rgb(255, 255, 255);\n    --beige:rgba(245, 245, 220, 0.74);\n    --black-o:rgba(36, 35, 35, 0.672);\n    --font:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n*{\n    font-family:var(--font);\n    font-size:large;\n    text-decoration: none;\n}\n\nhtml,body{\n    width: 100vw;\n    height: 100vh;\n    scroll-behavior: smooth;\n    overflow: hidden;\n}\n\n/*----|\nmargin|\n-----*/\n\n.ms-2{\n    margin-left: 2rem;\n}\n\n/*-----------|\ndefault links|\n------------*/\n\n.link-light{\n    color: var(--white);\n}\n\n.link-dark{\n    color: var(--black);\n}", "",{"version":3,"sources":["webpack://./static/css/index.css"],"names":[],"mappings":"AAKA;IACI,uBAAuB;IACvB,0BAA0B;IAC1B,iCAAiC;IACjC,iCAAiC;IACjC,kIAAkI;AACtI;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;;MAEM;;AAEN;IACI,iBAAiB;AACrB;;AAEA;;aAEa;;AAEb;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["@import './components/carousel.css';\n@import './components/navbar.css';\n@import './components/button.css';\n@import './media.css';\n\n:root{\n    --black:rgb(12, 12, 12);\n    --white:rgb(255, 255, 255);\n    --beige:rgba(245, 245, 220, 0.74);\n    --black-o:rgba(36, 35, 35, 0.672);\n    --font:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n*{\n    font-family:var(--font);\n    font-size:large;\n    text-decoration: none;\n}\n\nhtml,body{\n    width: 100vw;\n    height: 100vh;\n    scroll-behavior: smooth;\n    overflow: hidden;\n}\n\n/*----|\nmargin|\n-----*/\n\n.ms-2{\n    margin-left: 2rem;\n}\n\n/*-----------|\ndefault links|\n------------*/\n\n.link-light{\n    color: var(--white);\n}\n\n.link-dark{\n    color: var(--black);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/css/media.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/css/media.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*------|\nfullsize|\n-------*/\n\n@media screen and (min-width:991px){\n    /*--navbar--*/\n    #link-1,\n    #link-2,\n    #link-3{\n        font-size: 3rem!important;\n        margin-bottom: 4rem;\n        border-bottom: 1px solid transparent;\n    }\n    #link-1:hover,\n    #link-2:hover,\n    #link-3:hover{\n        transition: 0.5s ease-out;\n        max-width: fit-content;\n        border-bottom: 1px solid white;\n    }\n    #canvas__btn-close{ \n        position: relative!important;   \n        top: 0%;\n        left: 350%;\n    }\n    /*--carousel--*/\n    #carousel,\n    #card-1,\n    #card-2,\n    #card-3,\n    #card-4{\n        background-size: 550px 550px;\n        border-radius: 10px;\n        height: 550px;\n        width: 550px;\n    }\n} \n\n/*----|\nmobile|\n-----*/\n\n@media screen and (max-width:991px){\n    /*--navbar--*/\n    #link-1,\n    #link-2,\n    #link-3{\n        font-size: 2rem!important;\n        margin-bottom: 4rem;\n    }\n    #canvas__btn-close{    \n        top: 0%;\n        left: 215%;\n    }\n    /*--carousel--*/\n    #carousel,\n    #card-1,\n    #card-2,\n    #card-3,\n    #card-4{\n        background-size: 400px 400px;\n        border-radius: 10px;\n        width: 400px;\n        height: 400px;\n    }\n} ", "",{"version":3,"sources":["webpack://./static/css/media.css"],"names":[],"mappings":"AAAA;;QAEQ;;AAER;IACI,aAAa;IACb;;;QAGI,yBAAyB;QACzB,mBAAmB;QACnB,oCAAoC;IACxC;IACA;;;QAGI,yBAAyB;QACzB,sBAAsB;QACtB,8BAA8B;IAClC;IACA;QACI,4BAA4B;QAC5B,OAAO;QACP,UAAU;IACd;IACA,eAAe;IACf;;;;;QAKI,4BAA4B;QAC5B,mBAAmB;QACnB,aAAa;QACb,YAAY;IAChB;AACJ;;AAEA;;MAEM;;AAEN;IACI,aAAa;IACb;;;QAGI,yBAAyB;QACzB,mBAAmB;IACvB;IACA;QACI,OAAO;QACP,UAAU;IACd;IACA,eAAe;IACf;;;;;QAKI,4BAA4B;QAC5B,mBAAmB;QACnB,YAAY;QACZ,aAAa;IACjB;AACJ","sourcesContent":["/*------|\nfullsize|\n-------*/\n\n@media screen and (min-width:991px){\n    /*--navbar--*/\n    #link-1,\n    #link-2,\n    #link-3{\n        font-size: 3rem!important;\n        margin-bottom: 4rem;\n        border-bottom: 1px solid transparent;\n    }\n    #link-1:hover,\n    #link-2:hover,\n    #link-3:hover{\n        transition: 0.5s ease-out;\n        max-width: fit-content;\n        border-bottom: 1px solid white;\n    }\n    #canvas__btn-close{ \n        position: relative!important;   \n        top: 0%;\n        left: 350%;\n    }\n    /*--carousel--*/\n    #carousel,\n    #card-1,\n    #card-2,\n    #card-3,\n    #card-4{\n        background-size: 550px 550px;\n        border-radius: 10px;\n        height: 550px;\n        width: 550px;\n    }\n} \n\n/*----|\nmobile|\n-----*/\n\n@media screen and (max-width:991px){\n    /*--navbar--*/\n    #link-1,\n    #link-2,\n    #link-3{\n        font-size: 2rem!important;\n        margin-bottom: 4rem;\n    }\n    #canvas__btn-close{    \n        top: 0%;\n        left: 215%;\n    }\n    /*--carousel--*/\n    #carousel,\n    #card-1,\n    #card-2,\n    #card-3,\n    #card-4{\n        background-size: 400px 400px;\n        border-radius: 10px;\n        width: 400px;\n        height: 400px;\n    }\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./static/css/index.css":
/*!******************************!*\
  !*** ./static/css/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./static/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./static/image/emily.jpg":
/*!********************************!*\
  !*** ./static/image/emily.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0403c4f70c49f45ca142.jpg";

/***/ }),

/***/ "./static/image/mae.jpg":
/*!******************************!*\
  !*** ./static/image/mae.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19a94ab6faed19dcac0e.jpg";

/***/ }),

/***/ "./static/image/nikita.jpg":
/*!*********************************!*\
  !*** ./static/image/nikita.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8014b6e4f031b342ee73.jpg";

/***/ }),

/***/ "./static/image/sara.jpg":
/*!*******************************!*\
  !*** ./static/image/sara.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "083f57054596b05ff639.jpg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/utils/links */ "./src/components/utils/links.js");
/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/css/index.css */ "./static/css/index.css");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carousel */ "./src/components/carousel.js");
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/canvas */ "./src/components/canvas.js");
// Path
 // Static css

 // Components 



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtDQUVBOztDQUVBOztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzLmpzIiwid2VicGFjazovL2NhbnZhcy8uL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2NhbnZhcy8uL3NyYy9jb21wb25lbnRzL2N1c3RvbS9lbGVtZW50RE9NLmpzIiwid2VicGFjazovL2NhbnZhcy8uL3NyYy9jb21wb25lbnRzL3NpbmdsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvYWN0aXZlLmpzIiwid2VicGFjazovL2NhbnZhcy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL2xpbmtzLmpzIiwid2VicGFjazovL2NhbnZhcy8uL3N0YXRpYy9jc3MvY29tcG9uZW50cy9idXR0b24uY3NzIiwid2VicGFjazovL2NhbnZhcy8uL3N0YXRpYy9jc3MvY29tcG9uZW50cy9jYXJvdXNlbC5jc3MiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vc3RhdGljL2Nzcy9jb21wb25lbnRzL25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vc3RhdGljL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vc3RhdGljL2Nzcy9tZWRpYS5jc3MiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9zdGF0aWMvY3NzL2luZGV4LmNzcz9jMmU3Iiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhbnZhcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYW52YXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FudmFzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYW52YXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRFbGVtZW50fSBmcm9tIFwiLi9jdXN0b20vZWxlbWVudERPTVwiO1xuaW1wb3J0IHtjaGFuZ2VDbGFzc30gZnJvbSAnLi9jdXN0b20vZWxlbWVudERPTSc7XG5cbmxldCBjYW52YXMgPSBnZXRFbGVtZW50KCdjYW52YXMnKTtcbmxldCBjYW52YXNfZGlzYWJsZWQgPSAnY2FudmFzLWRpc2FibGVkJztcblxuZ2V0RWxlbWVudCgnY2FudmFzX19idG4tb3BlbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MsIHRoYXQgaGlkZSB0aGUgY2FudmFzXG4gICAgaWYoY2FudmFzLmNsYXNzTmFtZSA9PT0gY2FudmFzX2Rpc2FibGVkKXtcbiAgICAgICAgZ2V0RWxlbWVudCgnY2FudmFzJykuY2xhc3NMaXN0LnJlbW92ZShjYW52YXNfZGlzYWJsZWQpO1xuICAgICAgICBnZXRFbGVtZW50KCdjYW52YXMnKS5jbGFzc0xpc3QuYWRkKCdjYW52YXMtb2ZmJyk7XG4gICAgfVxuICAgIC8vIFR1cm4gb24gdGhlIGNhbnZhc1xuICAgIGNoYW5nZUNsYXNzKGNhbnZhcywnY2FudmFzLW9mZicsJ2NhbnZhcy1vbicpO1xufSk7XG5cbi8vIENsb3NlIHRoZSBjYW52YXMgXG5nZXRFbGVtZW50KCdjYW52YXNfX2J0bi1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNoYW5nZUNsYXNzKGNhbnZhcywnY2FudmFzLW9uJywnY2FudmFzLW9mZicpO1xufSk7IiwiaW1wb3J0IHsgZ2V0RWxlbWVudCB9IGZyb20gXCIuL2N1c3RvbS9lbGVtZW50RE9NXCI7XG5pbXBvcnQgeyBTaW5nbGVDYXJkIH0gZnJvbSBcIi4vc2luZ2xlQ2FyZFwiO1xuaW1wb3J0IHsgXG4gICAgYWN0aXZlLFxufSBmcm9tICcuL3V0aWxzL2FjdGl2ZSc7XG5cbi8vIENvbnRhaW5lciBJRHNcbmNvbnN0IGZpcnN0X2NvbnRhaW5lciAgPSAnY29udGFpbmVyLTEnO1xuY29uc3Qgc2Vjb25kX2NvbnRhaW5lciA9ICdjb250YWluZXItMic7XG5jb25zdCB0aGlyZF9jb250YWluZXIgPSAnY29udGFpbmVyLTMnO1xuY29uc3QgZm91cnRoX2NvbnRhaW5lciA9ICdjb250YWluZXItNCc7XG5cbi8vIElubmVyIHRoZSBjYXJkcyBpbiB0aGUgRE9NXG5nZXRFbGVtZW50KCdjYXJvdXNlbCcpLmlubmVySFRNTCA9IFNpbmdsZUNhcmQoKTtcblxuLy8gQ2xpY2sgZnVuY3Rpb24gdGhhdCBzd2l0Y2ggY2FyZFxuZ2V0RWxlbWVudCgnY2FyZF9fcHJldicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGFjdGl2ZShcbiAgICAgICAgZmlyc3RfY29udGFpbmVyLFxuICAgICAgICBzZWNvbmRfY29udGFpbmVyLFxuICAgICAgICB0aGlyZF9jb250YWluZXIsXG4gICAgICAgIGZvdXJ0aF9jb250YWluZXIsXG4gICAgKTtcbn0pO1xuXG5nZXRFbGVtZW50KCdjYXJkX19uZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgYWN0aXZlKFxuICAgICAgICBmaXJzdF9jb250YWluZXIsXG4gICAgICAgIHNlY29uZF9jb250YWluZXIsXG4gICAgICAgIHRoaXJkX2NvbnRhaW5lcixcbiAgICAgICAgZm91cnRoX2NvbnRhaW5lcixcbiAgICApO1xufSk7IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoZWwpe1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbCk7XG59O1xuXG4vLyBDaGFuZ2UgdGhlIGNsYXNzXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ2xhc3MoZWwsY2xhc3NOYW1lLGNsYXNzTmFtZTIpe1xuICAgIGlmKGVsLmNsYXNzTmFtZSA9PT0gY2xhc3NOYW1lKXtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZTIpO1xuICAgIH1lbHNlIGlmKGVsLmNsYXNzTmFtZSA9PT0gY2xhc3NOYW1lMil7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lMik7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG9uIGNoYW5nZSBjbGFzcycpO1xuICAgIH1cbn07IiwiLy8gU3RhdGljIGZpbGVzXG5pbXBvcnQgaW1hZ2UxIGZyb20gICcuLi8uLi9zdGF0aWMvaW1hZ2UvbmlraXRhLmpwZyc7XG5pbXBvcnQgaW1hZ2UyIGZyb20gJy4uLy4uL3N0YXRpYy9pbWFnZS9zYXJhLmpwZyc7XG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uLy4uL3N0YXRpYy9pbWFnZS9tYWUuanBnJztcbmltcG9ydCBpbWFnZTQgZnJvbSAgJy4uLy4uL3N0YXRpYy9pbWFnZS9lbWlseS5qcGcnO1xuXG4vLyBHZW5lcmFsIENsYXNzZXNcbmNvbnN0IGNhcmRzID0gJ2Nhcm91c2VsLWNhcmQnO1xuY29uc3QgY29udGFpbmVyID0gJ2NhcmRzLWZhZGUtb24nO1xuLy8gQ2FyZHMgSURzXG5jb25zdCBmaXJzdF9jYXJkICA9ICdjYXJkLTEnO1xuY29uc3Qgc2Vjb25kX2NhcmQgPSAnY2FyZC0yJztcbmNvbnN0IHRoaXJkX2NhcmQgID0gJ2NhcmQtMyc7XG5jb25zdCBmb3VydGhfY2FyZCA9ICdjYXJkLTQnO1xuLy8gQ29udGFpbmVyIElEc1xuY29uc3QgZmlyc3RfY29udGFpbmVyICA9ICdjb250YWluZXItMSc7XG5jb25zdCBzZWNvbmRfY29udGFpbmVyID0gJ2NvbnRhaW5lci0yJztcbmNvbnN0IHRoaXJkX2NvbnRhaW5lciA9ICdjb250YWluZXItMyc7XG5jb25zdCBmb3VydGhfY29udGFpbmVyID0gJ2NvbnRhaW5lci00Jztcbi8vIEJ1dHRvbiB2YWx1ZVxuY29uc3QgbGVmdF9pY29uID0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjEuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMiBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00NDcuMSAyNTZDNDQ3LjEgMjczLjcgNDMzLjcgMjg4IDQxNiAyODhIMTA5LjNsMTA1LjQgMTA1LjRjMTIuNSAxMi41IDEyLjUgMzIuNzUgMCA0NS4yNUMyMDguNCA0NDQuOSAyMDAuMiA0NDggMTkyIDQ0OHMtMTYuMzgtMy4xMjUtMjIuNjItOS4zNzVsLTE2MC0xNjBjLTEyLjUtMTIuNS0xMi41LTMyLjc1IDAtNDUuMjVsMTYwLTE2MGMxMi41LTEyLjUgMzIuNzUtMTIuNSA0NS4yNSAwczEyLjUgMzIuNzUgMCA0NS4yNUwxMDkuMyAyMjRINDE2QzQzMy43IDIyNCA0NDcuMSAyMzguMyA0NDcuMSAyNTZ6XCIvPjwvc3ZnPic7XG5jb25zdCByaWdodF9pY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi4xLjEgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjIgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNDM4LjYgMjc4LjZsLTE2MCAxNjBDMjcyLjQgNDQ0LjkgMjY0LjIgNDQ4IDI1NiA0NDhzLTE2LjM4LTMuMTI1LTIyLjYyLTkuMzc1Yy0xMi41LTEyLjUtMTIuNS0zMi43NSAwLTQ1LjI1TDMzOC44IDI4OEgzMkMxNC4zMyAyODggLjAwMTYgMjczLjcgLjAwMTYgMjU2UzE0LjMzIDIyNCAzMiAyMjRoMzA2LjhsLTEwNS40LTEwNS40Yy0xMi41LTEyLjUtMTIuNS0zMi43NSAwLTQ1LjI1czMyLjc1LTEyLjUgNDUuMjUgMGwxNjAgMTYwQzQ1MS4xIDI0NS45IDQ1MS4xIDI2Ni4xIDQzOC42IDI3OC42elwiLz48L3N2Zz4nO1xuXG5leHBvcnQgZnVuY3Rpb24gU2luZ2xlQ2FyZCgpe1xuICAgIHJldHVybmBcbiAgICA8YnV0dG9uIFxuICAgIGlkPSdjYXJkX19wcmV2J1xuICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICA+JHtsZWZ0X2ljb259XG4gICAgPC9idXR0b24+XG4gICAgXG4gICAgPGJ1dHRvbiBcbiAgICBpZD1cImNhcmRfX25leHRcIlxuICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICA+JHtyaWdodF9pY29ufVxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBmaXJzdCBjYXJkIC0tPlxuICAgIDxkaXYgXG4gICAgaWQ9JHtmaXJzdF9jb250YWluZXJ9XG4gICAgY2xhc3M9JHtjb250YWluZXJ9XG4gICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgIGlkPSR7Zmlyc3RfY2FyZH1cbiAgICAgICAgY2xhc3M9JHtjYXJkc31cbiAgICAgICAgc3JjPSR7aW1hZ2UxfVxuICAgICAgICBhbHQ9J2ltZydcbiAgICAgICAgPjwvaW1nPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gc2Vjb25kIGNhcmQgLS0+XG4gICAgPGRpdiBcbiAgICBpZD0ke3NlY29uZF9jb250YWluZXJ9XG4gICAgPiAgIFxuICAgICAgICA8aW1nXG4gICAgICAgIGlkPSR7c2Vjb25kX2NhcmR9XG4gICAgICAgIGNsYXNzPSR7Y2FyZHN9XG4gICAgICAgIHNyYz0ke2ltYWdlMn1cbiAgICAgICAgYWx0PSdpbWcnXG4gICAgICAgID48L2ltZz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIHRoaXJkIGNhcmQgLS0+XG4gICAgPGRpdiBcbiAgICBpZD0ke3RoaXJkX2NvbnRhaW5lcn1cbiAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgaWQ9JHt0aGlyZF9jYXJkfVxuICAgICAgICBjbGFzcz0ke2NhcmRzfVxuICAgICAgICBzcmM9JHtpbWFnZTN9XG4gICAgICAgIGFsdD0naW1nJ1xuICAgICAgICA+PC9pbWc+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBmb3VydGggY2FyZC0tPlxuICAgIDxkaXYgXG4gICAgaWQ9JHtmb3VydGhfY29udGFpbmVyfVxuICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICBpZD0ke2ZvdXJ0aF9jYXJkfVxuICAgICAgICBjbGFzcz0ke2NhcmRzfVxuICAgICAgICBzcmM9JHtpbWFnZTR9XG4gICAgICAgIGFsdD0naW1nJ1xuICAgICAgICA+PC9pbWc+XG4gICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmV4cG9ydHtcbiAgICBjYXJkcyxcbiAgICBmaXJzdF9jYXJkLFxuICAgIHNlY29uZF9jYXJkLFxuICAgIHRoaXJkX2NhcmQsXG4gICAgZm91cnRoX2NhcmRcbn07IiwiaW1wb3J0IHsgZ2V0RWxlbWVudCB9IGZyb20gJy4uL2N1c3RvbS9lbGVtZW50RE9NJztcblxubGV0IGZhZGVfb24gPSAnY2FyZHMtZmFkZS1vbic7XG5sZXQgZmFkZV9vZmYgPSAnY2FyZHMtZmFkZS1vZmYnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlKGVsLGVsMixlbDMsZWw0LCl7XG4gICAgaWYoIGdldEVsZW1lbnQoZWwpLmNsYXNzTmFtZSA9PT0gZmFkZV9vbiApe1xuICAgICAgICAvLyBUdXJuIG9mZiB0aGUgZmlyc3QgY29udGFpbmVyXG4gICAgICAgIGdldEVsZW1lbnQoZWwpLmNsYXNzTGlzdC5yZW1vdmUoZmFkZV9vbik7XG4gICAgICAgIGdldEVsZW1lbnQoZWwpLmNsYXNzTGlzdC5hZGQoZmFkZV9vZmYpO1xuICAgICAgICAvLyBUdXJuIG9uIHRoZSBzZWNvbmQgY29udGFpbmVyXG4gICAgICAgIGdldEVsZW1lbnQoZWwyKS5jbGFzc0xpc3QuYWRkKGZhZGVfb24pO1xuICAgIH1lbHNlIGlmKGdldEVsZW1lbnQoZWwyKS5jbGFzc05hbWUgPT09IGZhZGVfb24pe1xuICAgICAgICAvLyBUdXJuIG9mZiB0aGUgc2Vjb25kIGNvbnRhaW5lclxuICAgICAgICBnZXRFbGVtZW50KGVsMikuY2xhc3NMaXN0LnJlbW92ZShmYWRlX29uKTtcbiAgICAgICAgZ2V0RWxlbWVudChlbDIpLmNsYXNzTGlzdC5hZGQoZmFkZV9vZmYpO1xuICAgICAgICAvLyBUdXJuIG9uIHRoZSB0aGlyZCBjb250YWluZXJcbiAgICAgICAgZ2V0RWxlbWVudChlbDMpLmNsYXNzTGlzdC5hZGQoZmFkZV9vbik7XG4gICAgfWVsc2UgaWYoZ2V0RWxlbWVudChlbDMpLmNsYXNzTmFtZSA9PT0gZmFkZV9vbil7XG4gICAgICAgIC8vIFR1cm4gb2ZmIHRoZSB0aGlyZCBjb250YWluZXJcbiAgICAgICAgZ2V0RWxlbWVudChlbDMpLmNsYXNzTGlzdC5yZW1vdmUoZmFkZV9vbik7XG4gICAgICAgIGdldEVsZW1lbnQoZWwzKS5jbGFzc0xpc3QuYWRkKGZhZGVfb2ZmKTtcbiAgICAgICAgLy8gVHVybiBvbiB0aGUgZm91cnRoIGNvbnRhaW5lclxuICAgICAgICBnZXRFbGVtZW50KGVsNCkuY2xhc3NMaXN0LmFkZChmYWRlX29uKTtcbiAgICAgICAgLy8gUmVtb3ZlIGZpcnN0IGNvbnRhaW5lclxuICAgICAgICBnZXRFbGVtZW50KGVsKS5jbGFzc0xpc3QucmVtb3ZlKGZhZGVfb2ZmKTtcbiAgICB9ZWxzZSBpZihnZXRFbGVtZW50KGVsNCkuY2xhc3NOYW1lID09PSBmYWRlX29uKXtcbiAgICAgICAgLy8gTG9hZCB0aGUgZmlyc3QgZWxcbiAgICAgICAgZ2V0RWxlbWVudChlbCkuY2xhc3NMaXN0LmFkZChmYWRlX29uKTtcbiAgICAgICAgLy8gVHVybiBvZmYgdGhlIGZvdXJ0aCBjb250YWluZXJcbiAgICAgICAgZ2V0RWxlbWVudChlbDQpLmNsYXNzTGlzdC5yZW1vdmUoZmFkZV9vbik7XG4gICAgICAgIGdldEVsZW1lbnQoZWw0KS5jbGFzc0xpc3QuYWRkKGZhZGVfb2ZmKTtcbiAgICAgICAgLy8gVHVybiBvbiB0aGUgZm91cmggY29udGFpbmVyIFxuICAgICAgICBnZXRFbGVtZW50KGVsMikuY2xhc3NMaXN0LnJlbW92ZShmYWRlX29mZik7XG4gICAgICAgIGdldEVsZW1lbnQoZWwzKS5jbGFzc0xpc3QucmVtb3ZlKGZhZGVfb2ZmKTtcbiAgICAgICAgZ2V0RWxlbWVudChlbDQpLmNsYXNzTGlzdC5yZW1vdmUoZmFkZV9vZmYpO1xuXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUud2FybignZXJyb3Igb24gYWN0aXZlJyk7XG4gICAgfVxufTsiLCJpbXBvcnQge2dldEVsZW1lbnR9IGZyb20gJy4uL2N1c3RvbS9lbGVtZW50RE9NJztcblxuY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgICBpZDonbGluay0xJyxcbiAgICAgICAgbmFtZTonSG9tZScsXG4gICAgICAgIHBhdGg6Jy8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDonbGluay0yJyxcbiAgICAgICAgbmFtZTonQWJvdXQnLFxuICAgICAgICBwYXRoOicvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6J2xpbmstMycsXG4gICAgICAgIG5hbWU6J0NvbnRhY3QnLFxuICAgICAgICBwYXRoOicvJyxcbiAgICB9XG5dO1xuXG5mdW5jdGlvbiBsaW5rQ29tcG9uZW50KGVsKSB7XG4gICAgcmV0dXJuIGA8YVxuICAgIGlkPSR7ZWwuaWR9XG4gICAgaHJlZj0ke2VsLnBhdGh9XG4gICAgY2xhc3M9XCJsaW5rLWxpZ2h0XCJcbiAgICA+JHtlbC5uYW1lfVxuICAgIDwvYT5cbiAgICBgO1xufVxuXG5nZXRFbGVtZW50KCdsaW5rLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IGxpbmtzLm1hcCgoZWwpPT5cbmxpbmtDb21wb25lbnQoZWwpXG4pLmpvaW4oJycpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tLS0tLS0tLS18XFxuZGVmYXVsdCBidXR0b258XFxuLS0tLS0tLS0tLS0tLSovXFxuXFxuLmJ1dHRvbixcXG4uYnV0dG9uLWRhcmt7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuN3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYnV0dG9ue1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5idXR0b24tZGFya3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tfFxcbmNhbnZhcyBidXR0b258XFxuLS0tLS0tLS0tLS0tKi9cXG5cXG4jY2FudmFzX19idG4tb3BlbntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDUlO1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuI21lbnUtYmFyc3tcXG4gICAgLyogZmFsbGJhY2sgc3ZnIGRpbWVuc2lvbiAqL1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jY2FudmFzX19idG4tY2xvc2V7ICAgIFxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbiNjYW52YXNfX2Nsb3NlLWljb257XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOmxhcmdlcjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tfFxcbmNhcm91c2VsIGJ1dHRvbnxcXG4tLS0tLS0tLS0tLS0tLSovXFxuXFxuI2NhcmRfX3ByZXYsXFxuI2NhcmRfX25leHR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGhlaWdodDogNDVweDsgICBcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbn1cXG5cXG4jY2FyZF9fcHJldntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgbGVmdDogMTAlO1xcbn1cXG5cXG4jY2FyZF9fbmV4dHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLC01MCUpO1xcbiAgICByaWdodDogMTAlO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tfFxcbmFuaW1hdGlvbiBidXR0b258XFxuLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4jbWVudS1iYXJzOmhvdmVye1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiNjYXJkX19wcmV2OmhvdmVyLFxcbiNjYXJkX19uZXh0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0YXRpYy9jc3MvY29tcG9uZW50cy9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztjQUVjOztBQUVkOztJQUVJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7YUFFYTs7QUFFYjtJQUNJLFVBQVU7O0lBRVYsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBOztlQUVlOztBQUVmOztJQUVJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTs7Z0JBRWdCOztBQUVoQjtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tLS0tLS0tLS0tLXxcXG5kZWZhdWx0IGJ1dHRvbnxcXG4tLS0tLS0tLS0tLS0tKi9cXG5cXG4uYnV0dG9uLFxcbi5idXR0b24tZGFya3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5idXR0b257XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ1dHRvbi1kYXJre1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qLS0tLS0tLS0tLS18XFxuY2FudmFzIGJ1dHRvbnxcXG4tLS0tLS0tLS0tLS0qL1xcblxcbiNjYW52YXNfX2J0bi1vcGVue1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNSU7XFxuICAgIHRvcDogNTAlO1xcbn1cXG5cXG4jbWVudS1iYXJze1xcbiAgICAvKiBmYWxsYmFjayBzdmcgZGltZW5zaW9uICovXFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbiNjYW52YXNfX2J0bi1jbG9zZXsgICAgXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuI2NhbnZhc19fY2xvc2UtaWNvbntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6bGFyZ2VyO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS18XFxuY2Fyb3VzZWwgYnV0dG9ufFxcbi0tLS0tLS0tLS0tLS0tKi9cXG5cXG4jY2FyZF9fcHJldixcXG4jY2FyZF9fbmV4dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgaGVpZ2h0OiA0NXB4OyAgIFxcbiAgICB3aWR0aDogNDVweDtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxufVxcblxcbiNjYXJkX19wcmV2e1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBsZWZ0OiAxMCU7XFxufVxcblxcbiNjYXJkX19uZXh0e1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsLTUwJSk7XFxuICAgIHJpZ2h0OiAxMCU7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS18XFxuYW5pbWF0aW9uIGJ1dHRvbnxcXG4tLS0tLS0tLS0tLS0tLS0qL1xcblxcbiNtZW51LWJhcnM6aG92ZXJ7XFxuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI2NhcmRfX3ByZXY6aG92ZXIsXFxuI2NhcmRfX25leHQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlaWdlKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogd2lkdGggYW5kIGhlaWdodCBpbiBtZWRpYS5jc3MgKi9cXG4vKiBsaW5rcyBzdHlsZSBpbiBtZWRpYS5jc3MgKi9cXG5cXG4jY2Fyb3VzZWx7ICAgIFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbn1cXG5cXG4jY2FyZC0xLFxcbiNjYXJkLTIsXFxuI2NhcmQtMyxcXG4jY2FyZC00e1xcbiAgICAvKiBjYXJkcyBmYWxsYmFjayB3aGVyZWFzIGl0J3MgbG9hZGluZyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1vKTtcXG4gICAgei1pbmRleDogLTEwMDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tfFxcbkNhcmRzIGFuaW1hdGlvbnxcXG4tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNhcmRzLWZhZGUtb257XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FyZHMtZmFkZS1vZmZ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdGF0aWMvY3NzL2NvbXBvbmVudHMvY2Fyb3VzZWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtDQUFrQztBQUNsQyw2QkFBNkI7O0FBRTdCO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTs7OztJQUlJLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjs7QUFFQTs7ZUFFZTs7QUFFZjtJQUNJLHFCQUFxQjtJQUNyQixVQUFVOztJQUVWLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHdpZHRoIGFuZCBoZWlnaHQgaW4gbWVkaWEuY3NzICovXFxuLyogbGlua3Mgc3R5bGUgaW4gbWVkaWEuY3NzICovXFxuXFxuI2Nhcm91c2VseyAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuI2NhcmQtMSxcXG4jY2FyZC0yLFxcbiNjYXJkLTMsXFxuI2NhcmQtNHtcXG4gICAgLyogY2FyZHMgZmFsbGJhY2sgd2hlcmVhcyBpdCdzIGxvYWRpbmcgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stbyk7XFxuICAgIHotaW5kZXg6IC0xMDA7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLXxcXG5DYXJkcyBhbmltYXRpb258XFxuLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5jYXJkcy1mYWRlLW9ue1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhcmRzLWZhZGUtb2Zme1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tfFxcbm5hdmJhcnxcXG4tLS0tLSovXFxuXFxuLm5hdmJhcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgcmlnaHQ6IDAlO1xcblxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlaWdlKTtcXG59XFxuXFxuI25hdi1icmFuZHtcXG4gICAgY29udGVudDogJyc7XFxufVxcblxcbi8qLS0tLXxcXG5jYW52YXN8XFxuLS0tLS0qL1xcblxcbiNjYW52YXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgei1pbmRleDogNDAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5cXG4uY2FudmFzLWJvZHl7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogQ0FOVkFTIE1PREUgKi9cXG4uY2FudmFzLWRpc2FibGVke1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4uY2FudmFzLW9mZntcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjEwJSk7XFxufVxcblxcbi5jYW52YXMtb257XFxuICAgIHRyYW5zaXRpb246IDEuNXMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcblxcbi8qLS0tLS0tLS0tLXxcXG5jYW52YXMgbGlua3N8XFxuLS0tLS0tLS0tLS0qL1xcblxcbiNsaW5rLWNvbnRhaW5lcj4qe1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogZWZmZWN0cyBpbiBtZWRpYS5jc3MgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdGF0aWMvY3NzL2NvbXBvbmVudHMvbmF2YmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7TUFFTTs7QUFFTjtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7O0lBRVQsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7TUFFTTs7QUFFTjtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxNQUFNO0FBQ1Y7OztBQUdBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTs7SUFFUixlQUFlO0FBQ25COztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7WUFFWTs7QUFFWjtJQUNJLGNBQWM7QUFDbEI7O0FBRUEseUJBQXlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLXxcXG5uYXZiYXJ8XFxuLS0tLS0qL1xcblxcbi5uYXZiYXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICAgIHJpZ2h0OiAwJTtcXG5cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxufVxcblxcbiNuYXYtYnJhbmR7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKi0tLS18XFxuY2FudmFzfFxcbi0tLS0tKi9cXG5cXG4jY2FudmFze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIHotaW5kZXg6IDQwMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuXFxuLmNhbnZhcy1ib2R5e1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgdG9wOiA0NSU7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIENBTlZBUyBNT0RFICovXFxuLmNhbnZhcy1kaXNhYmxlZHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLmNhbnZhcy1vZmZ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDJzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIxMCUpO1xcbn1cXG5cXG4uY2FudmFzLW9ue1xcbiAgICB0cmFuc2l0aW9uOiAxLjVzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS18XFxuY2FudmFzIGxpbmtzfFxcbi0tLS0tLS0tLS0tKi9cXG5cXG4jbGluay1jb250YWluZXI+KntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGVmZmVjdHMgaW4gbWVkaWEuY3NzICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvY2Fyb3VzZWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy9idXR0b24uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVkaWEuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1ibGFjazpyZ2IoMTIsIDEyLCAxMik7XFxuICAgIC0td2hpdGU6cmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLWJlaWdlOnJnYmEoMjQ1LCAyNDUsIDIyMCwgMC43NCk7XFxuICAgIC0tYmxhY2stbzpyZ2JhKDM2LCAzNSwgMzUsIDAuNjcyKTtcXG4gICAgLS1mb250Oi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKntcXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZm9udCk7XFxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qLS0tLXxcXG5tYXJnaW58XFxuLS0tLS0qL1xcblxcbi5tcy0ye1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLXxcXG5kZWZhdWx0IGxpbmtzfFxcbi0tLS0tLS0tLS0tLSovXFxuXFxuLmxpbmstbGlnaHR7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5saW5rLWRhcmt7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0YXRpYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGtJQUFrSTtBQUN0STs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztNQUVNOztBQUVOO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOzthQUVhOztBQUViO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vY29tcG9uZW50cy9jYXJvdXNlbC5jc3MnO1xcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9uYXZiYXIuY3NzJztcXG5AaW1wb3J0ICcuL2NvbXBvbmVudHMvYnV0dG9uLmNzcyc7XFxuQGltcG9ydCAnLi9tZWRpYS5jc3MnO1xcblxcbjpyb290e1xcbiAgICAtLWJsYWNrOnJnYigxMiwgMTIsIDEyKTtcXG4gICAgLS13aGl0ZTpyZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tYmVpZ2U6cmdiYSgyNDUsIDI0NSwgMjIwLCAwLjc0KTtcXG4gICAgLS1ibGFjay1vOnJnYmEoMzYsIDM1LCAzNSwgMC42NzIpO1xcbiAgICAtLWZvbnQ6LWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qe1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250KTtcXG4gICAgZm9udC1zaXplOmxhcmdlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmh0bWwsYm9keXtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyotLS0tfFxcbm1hcmdpbnxcXG4tLS0tLSovXFxuXFxuLm1zLTJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tfFxcbmRlZmF1bHQgbGlua3N8XFxuLS0tLS0tLS0tLS0tKi9cXG5cXG4ubGluay1saWdodHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmxpbmstZGFya3tcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tLS18XFxuZnVsbHNpemV8XFxuLS0tLS0tLSovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweCl7XFxuICAgIC8qLS1uYXZiYXItLSovXFxuICAgICNsaW5rLTEsXFxuICAgICNsaW5rLTIsXFxuICAgICNsaW5rLTN7XFxuICAgICAgICBmb250LXNpemU6IDNyZW0haW1wb3J0YW50O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcbiAgICAjbGluay0xOmhvdmVyLFxcbiAgICAjbGluay0yOmhvdmVyLFxcbiAgICAjbGluay0zOmhvdmVye1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcXG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIH1cXG4gICAgI2NhbnZhc19fYnRuLWNsb3NleyBcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSFpbXBvcnRhbnQ7ICAgXFxuICAgICAgICB0b3A6IDAlO1xcbiAgICAgICAgbGVmdDogMzUwJTtcXG4gICAgfVxcbiAgICAvKi0tY2Fyb3VzZWwtLSovXFxuICAgICNjYXJvdXNlbCxcXG4gICAgI2NhcmQtMSxcXG4gICAgI2NhcmQtMixcXG4gICAgI2NhcmQtMyxcXG4gICAgI2NhcmQtNHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTUwcHggNTUwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIHdpZHRoOiA1NTBweDtcXG4gICAgfVxcbn0gXFxuXFxuLyotLS0tfFxcbm1vYmlsZXxcXG4tLS0tLSovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XFxuICAgIC8qLS1uYXZiYXItLSovXFxuICAgICNsaW5rLTEsXFxuICAgICNsaW5rLTIsXFxuICAgICNsaW5rLTN7XFxuICAgICAgICBmb250LXNpemU6IDJyZW0haW1wb3J0YW50O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgfVxcbiAgICAjY2FudmFzX19idG4tY2xvc2V7ICAgIFxcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgICAgIGxlZnQ6IDIxNSU7XFxuICAgIH1cXG4gICAgLyotLWNhcm91c2VsLS0qL1xcbiAgICAjY2Fyb3VzZWwsXFxuICAgICNjYXJkLTEsXFxuICAgICNjYXJkLTIsXFxuICAgICNjYXJkLTMsXFxuICAgICNjYXJkLTR7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDQwMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICAgIGhlaWdodDogNDAwcHg7XFxuICAgIH1cXG59IFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0YXRpYy9jc3MvbWVkaWEuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztRQUVROztBQUVSO0lBQ0ksYUFBYTtJQUNiOzs7UUFHSSx5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLG9DQUFvQztJQUN4QztJQUNBOzs7UUFHSSx5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLE9BQU87UUFDUCxVQUFVO0lBQ2Q7SUFDQSxlQUFlO0lBQ2Y7Ozs7O1FBS0ksNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsWUFBWTtJQUNoQjtBQUNKOztBQUVBOztNQUVNOztBQUVOO0lBQ0ksYUFBYTtJQUNiOzs7UUFHSSx5QkFBeUI7UUFDekIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxPQUFPO1FBQ1AsVUFBVTtJQUNkO0lBQ0EsZUFBZTtJQUNmOzs7OztRQUtJLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tLS0tLXxcXG5mdWxsc2l6ZXxcXG4tLS0tLS0tKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KXtcXG4gICAgLyotLW5hdmJhci0tKi9cXG4gICAgI2xpbmstMSxcXG4gICAgI2xpbmstMixcXG4gICAgI2xpbmstM3tcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbSFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgICNsaW5rLTE6aG92ZXIsXFxuICAgICNsaW5rLTI6aG92ZXIsXFxuICAgICNsaW5rLTM6aG92ZXJ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgfVxcbiAgICAjY2FudmFzX19idG4tY2xvc2V7IFxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlIWltcG9ydGFudDsgICBcXG4gICAgICAgIHRvcDogMCU7XFxuICAgICAgICBsZWZ0OiAzNTAlO1xcbiAgICB9XFxuICAgIC8qLS1jYXJvdXNlbC0tKi9cXG4gICAgI2Nhcm91c2VsLFxcbiAgICAjY2FyZC0xLFxcbiAgICAjY2FyZC0yLFxcbiAgICAjY2FyZC0zLFxcbiAgICAjY2FyZC00e1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1NTBweCA1NTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xcbiAgICB9XFxufSBcXG5cXG4vKi0tLS18XFxubW9iaWxlfFxcbi0tLS0tKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcXG4gICAgLyotLW5hdmJhci0tKi9cXG4gICAgI2xpbmstMSxcXG4gICAgI2xpbmstMixcXG4gICAgI2xpbmstM3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbSFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbiAgICB9XFxuICAgICNjYW52YXNfX2J0bi1jbG9zZXsgICAgXFxuICAgICAgICB0b3A6IDAlO1xcbiAgICAgICAgbGVmdDogMjE1JTtcXG4gICAgfVxcbiAgICAvKi0tY2Fyb3VzZWwtLSovXFxuICAgICNjYXJvdXNlbCxcXG4gICAgI2NhcmQtMSxcXG4gICAgI2NhcmQtMixcXG4gICAgI2NhcmQtMyxcXG4gICAgI2NhcmQtNHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHggNDAwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgfVxcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIFBhdGhcbmltcG9ydCAnLi9jb21wb25lbnRzL3V0aWxzL2xpbmtzJztcbi8vIFN0YXRpYyBjc3NcbmltcG9ydCAnLi4vc3RhdGljL2Nzcy9pbmRleC5jc3MnO1xuLy8gQ29tcG9uZW50cyBcbmltcG9ydCAnLi9jb21wb25lbnRzL2Nhcm91c2VsJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2NhbnZhcyc7Il0sIm5hbWVzIjpbImdldEVsZW1lbnQiLCJjaGFuZ2VDbGFzcyIsImNhbnZhcyIsImNhbnZhc19kaXNhYmxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJTaW5nbGVDYXJkIiwiYWN0aXZlIiwiZmlyc3RfY29udGFpbmVyIiwic2Vjb25kX2NvbnRhaW5lciIsInRoaXJkX2NvbnRhaW5lciIsImZvdXJ0aF9jb250YWluZXIiLCJpbm5lckhUTUwiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc05hbWUyIiwiY29uc29sZSIsImxvZyIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsImltYWdlNCIsImNhcmRzIiwiY29udGFpbmVyIiwiZmlyc3RfY2FyZCIsInNlY29uZF9jYXJkIiwidGhpcmRfY2FyZCIsImZvdXJ0aF9jYXJkIiwibGVmdF9pY29uIiwicmlnaHRfaWNvbiIsImZhZGVfb24iLCJmYWRlX29mZiIsImVsMiIsImVsMyIsImVsNCIsIndhcm4iLCJsaW5rcyIsImlkIiwibmFtZSIsInBhdGgiLCJsaW5rQ29tcG9uZW50IiwibWFwIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=