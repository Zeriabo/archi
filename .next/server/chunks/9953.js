"use strict";
exports.id = 9953;
exports.ids = [9953];
exports.modules = {

/***/ 9953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _Video4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__]);
react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Plans = ()=>{
    const uiElements = [
        {
            name: 'custom-button',
            ariaLabel: 'Custom button',
            order: 9,
            isButton: true,
            html: {
                isCustomSVG: true,
                inner: '<path d="<ICON_PATH>" id="pswp__icn-cstm-btn"/>',
                outlineID: 'pswp__icn-cstm-btn'
            },
            appendTo: 'bar',
            onInit: (el, pswpInstance)=>{
            // do something on UI element's init event
            },
            onClick: (e, el, pswpInstance)=>{
            // do something on UI element's click event
            }
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Plans"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Gallery, {
                uiElements: uiElements,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '240px 171px 171px',
                        gridTemplateRows: '114px 114px',
                        gridGap: 12,
                        justifyContent: 'center',
                        columnGap: 10
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Plans: "
                        }),
                        itemData.map((image, i)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Item, {
                                caption: "Interior5",
                                alt: "Interior5",
                                cropped: true,
                                original: image.img,
                                thumbnail: image.img,
                                width: "1024",
                                height: "768",
                                children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        ref: ref,
                                        onClick: open,
                                        src: image.img
                                    })
                            }, i));
                        })
                    ]
                })
            })
        ]
    }));
};
const itemData = [
    {
        img: '/assets/images/plans/1.jpeg',
        title: 'plans'
    },
    {
        img: '/assets/images/plans/2.jpeg',
        title: 'plans'
    },
    {
    },
    {
        img: '/assets/images/plans/3.jpeg',
        title: 'plans'
    },
    {
        img: '/assets/images/plans/4.jpeg',
        title: 'plans'
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plans);

});

/***/ })

};
;