"use strict";
exports.id = 1997;
exports.ids = [1997];
exports.modules = {

/***/ 2405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScript = (url)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const script = document.createElement('iframe');
        script.class = "ku-embed";
        script.allowFullscreen;
        script.src = url;
        script.async = true;
        script.allow = "xr-spatial-tracking; gyroscope; accelerometer";
        script.height = "600";
        script.with = "100%";
        console.log(url);
        const div = document.getElementById("kuula");
        div.appendChild(script);
    }, [
        url
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScript);


/***/ }),

/***/ 1997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_js_custom_hook_useScript_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2405);




const Video4 = ()=>{
    (0,_public_js_custom_hook_useScript_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('https://kuula.co/share/collection/7qg3w?%20logo=1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=0&thumbs=1');
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        console.clear();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-width centered",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "sixteen-by-nine",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                },
                id: "kuula"
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video4);


/***/ })

};
;