"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Intro4/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Intro4/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/Intro-with-horizontal.json */ \"./src/data/Intro-with-horizontal.json\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Split */ \"./src/components/Split/index.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/removeSlashFromPagination */ \"./src/common/removeSlashFromPagination.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nswiper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use([\n    swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation,\n    swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination,\n    swiper__WEBPACK_IMPORTED_MODULE_6__.Parallax\n]);\nvar Intro4 = function() {\n    var _this1 = _this;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(true), 2), load = ref[0], setLoad = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setTimeout(function() {\n            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n        }, 1000);\n        setTimeout(function() {\n            setLoad(false);\n        });\n    }, []);\n    var navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        className: \"slider slider-mov\",\n        __source: {\n            fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"swiper-container parallax-slider\",\n            __source: {\n                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                !load ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    speed: 1000,\n                    parallax: true,\n                    navigation: {\n                        prevEl: navigationPrevRef.current,\n                        nextEl: navigationNextRef.current\n                    },\n                    pagination: {\n                        type: \"progressbar\",\n                        clickable: true,\n                        el: paginationRef.current\n                    },\n                    onBeforeInit: function(swiper) {\n                        swiper.params.navigation.prevEl = navigationPrevRef.current;\n                        swiper.params.navigation.nextEl = navigationNextRef.current;\n                        swiper.params.pagination.el = paginationRef.current;\n                    },\n                    onSwiper: function(swiper) {\n                        setTimeout(function() {\n                            for(var i = 0; i < swiper.slides.length; i++){\n                                swiper.slides[i].childNodes[0].setAttribute(\"data-swiper-parallax\");\n                            }\n                            swiper.params.navigation.prevEl = navigationPrevRef.current;\n                            swiper.params.navigation.nextEl = navigationNextRef.current;\n                            swiper.params.pagination.el = paginationRef.current;\n                            swiper.navigation.destroy();\n                            swiper.navigation.init();\n                            swiper.navigation.update();\n                            swiper.pagination.destroy();\n                            swiper.pagination.init();\n                            swiper.pagination.update();\n                        });\n                    },\n                    className: \"swiper-wrapper\",\n                    slidesPerView: 1,\n                    __source: {\n                        fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__.map(function(slide) {\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"swiper-slide\",\n                            __source: {\n                                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"bg-img valign\",\n                                style: {\n                                    backgroundImage: \"url(\".concat(slide.image, \")\")\n                                },\n                                \"data-overlay-dark\": \"5\",\n                                __source: {\n                                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"container\",\n                                    __source: {\n                                        fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"row\",\n                                        __source: {\n                                            fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 21\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"col-lg-10\",\n                                            __source: {\n                                                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 23\n                                            },\n                                            __self: _this1,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                                className: \"caption hmone\",\n                                                __source: {\n                                                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 25\n                                                },\n                                                __self: _this1,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Split__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        __source: {\n                                                            fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 27\n                                                        },\n                                                        __self: _this1,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                                            \"data-splitting\": true,\n                                                            className: \"words chars splitting\",\n                                                            __source: {\n                                                                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                                lineNumber: 89,\n                                                                columnNumber: 29\n                                                            },\n                                                            __self: _this1,\n                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                                href: \"#\",\n                                                                __source: {\n                                                                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                                    lineNumber: 93,\n                                                                    columnNumber: 31\n                                                                },\n                                                                __self: _this1,\n                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                                                    __source: {\n                                                                        fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                                        lineNumber: 94,\n                                                                        columnNumber: 33\n                                                                    },\n                                                                    __self: _this1,\n                                                                    children: [\n                                                                        slide.title.first,\n                                                                        \" \",\n                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                                                            __source: {\n                                                                                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                                                lineNumber: 95,\n                                                                                columnNumber: 55\n                                                                            },\n                                                                            __self: _this1\n                                                                        }),\n                                                                        slide.title.second\n                                                                    ]\n                                                                })\n                                                            })\n                                                        })\n                                                    }),\n                                                    (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                                        className: \"mt-10\",\n                                                        __source: {\n                                                            fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 29\n                                                        },\n                                                        __self: _this1,\n                                                        children: [\n                                                            slide.content.first,\n                                                            \" \",\n                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                                                __source: {\n                                                                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                                                    lineNumber: 103,\n                                                                    columnNumber: 53\n                                                                },\n                                                                __self: _this1\n                                                            }),\n                                                            slide.content.second\n                                                        ]\n                                                    })\n                                                ]\n                                            })\n                                        })\n                                    })\n                                })\n                            })\n                        }, slide.id));\n                    })\n                }) : null,\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"setone top\",\n                    __source: {\n                        fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"swiper-button-next swiper-nav-ctrl next-ctrl\",\n                            ref: navigationNextRef,\n                            __source: {\n                                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                className: \"fas fa-chevron-right\",\n                                __source: {\n                                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"swiper-button-prev swiper-nav-ctrl prev-ctrl\",\n                            ref: navigationPrevRef,\n                            __source: {\n                                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                className: \"fas fa-chevron-left\",\n                                __source: {\n                                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/Intro4/index.jsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s1(Intro4, \"YbbpLk4SWaLFZ9AtkCChqgzqMUo=\");\n_c = Intro4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro4);\nvar _c;\n$RefreshReg$(_c, \"Intro4\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnRybzQvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBOEMsNkNBQ3JCO0FBQ29DO0FBQ1g7QUFDdEI7QUFDQTtBQUN5QztBQUVsRDtBQUNXO0FBQ0E7QUFDZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUVNLGtEQUFjLENBQUMsQ0FBQ0M7SUFBQUEsOENBQVU7SUFBRUMsOENBQVU7SUFBRUMsNENBQVE7QUFBQSxDQUFDO0FBRWpELEdBQUssQ0FBQ0csTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFDcEIsR0FBSyxDQUFtQlosR0FBb0Isa0JBQXBCQSxxREFBYyxDQUFDLElBQUksT0FBcENjLElBQUksR0FBYWQsR0FBb0IsS0FBL0JlLE9BQU8sR0FBSWYsR0FBb0I7SUFDNUNBLHNEQUFlLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDckJpQixVQUFVLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDaEJQLDhFQUF5QjtRQUMzQixDQUFDLEVBQUUsSUFBSTtRQUNQTyxVQUFVLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDaEJGLE9BQU8sQ0FBQyxLQUFLO1FBQ2YsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNHLGlCQUFpQixHQUFHbEIsbURBQVksQ0FBQyxJQUFJO0lBQzNDLEdBQUssQ0FBQ29CLGlCQUFpQixHQUFHcEIsbURBQVksQ0FBQyxJQUFJO0lBQzNDLEdBQUssQ0FBQ3FCLGFBQWEsR0FBR3JCLG1EQUFZLENBQUMsSUFBSTtJQUV2QyxNQUFNLHNFQUNIc0IsQ0FBTTtRQUFDQyxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7d0ZBQ2xDQyxDQUFHO1lBQUNELFNBQVMsRUFBQyxDQUFrQzs7Ozs7Ozs7aUJBQzdDVCxJQUFJLHdFQUNIWixnREFBTTtvQkFDTHVCLEtBQUssRUFBRSxJQUFJO29CQUNYQyxRQUFRLEVBQUUsSUFBSTtvQkFD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Ozs7O3dFQUNDUixLQUFLLENBQUNTLEtBQUssQ0FBQ0MsS0FBSzt3RUFBQyxDQUFDOzZJQUFDQyxDQUFFOzs7Ozs7Ozt3RUFDdEJYLEtBQUssQ0FBQ1MsS0FBSyxDQUFDRyxNQUFNOzs7Ozs7cURBSzFCWixLQUFLLGFBQUxBLEtBQUssS0FBTEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxLQUFLLENBQUVhLE9BQU8sMkVBQ1pDLENBQUM7d0RBQUN4QyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7NERBQ2pCMEIsS0FBSyxDQUFDYSxPQUFPLENBQUNILEtBQUs7NERBQUMsQ0FBQztpSUFBQ0MsQ0FBRTs7Ozs7Ozs7NERBQ3hCWCxLQUFLLENBQUNhLE9BQU8sQ0FBQ0QsTUFBTTs7Ozs7Ozs7OzJCQTFCbkJaLEtBQUssQ0FBQ2UsRUFBRTs7cUJBcUM1QixJQUFJO3NGQUVQeEMsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7OzZGQUN4QkMsQ0FBRzs0QkFDRkQsU0FBUyxFQUFDLENBQThDOzRCQUN4RDBDLEdBQUcsRUFBRTdDLGlCQUFpQjs7Ozs7OzsyR0FFckJtQixDQUFDO2dDQUFDaEIsU0FBUyxFQUFDLENBQXNCOzs7Ozs7Ozs7NkZBRXBDQyxDQUFHOzRCQUNGRCxTQUFTLEVBQUMsQ0FBOEM7NEJBQ3hEMEMsR0FBRyxFQUFFL0MsaUJBQWlCOzs7Ozs7OzJHQUVyQnFCLENBQUM7Z0NBQUNoQixTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7Ozs7Ozs7O0FBTTlDLENBQUM7SUF0SEtYLE1BQU07S0FBTkEsTUFBTTtBQXdIWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ludHJvNC9pbmRleC5qc3g/Njg1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGludHJvRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9JbnRyby13aXRoLWhvcml6b250YWwuanNvblwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgU3BsaXQgZnJvbSBcIi4uL1NwbGl0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXggfSBmcm9tIFwic3dpcGVyXCI7XHJcblxyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHJlbW92ZVNsYXNoRnJvbVBhZ2luYXRpb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9yZW1vdmVTbGFzaEZyb21QYWdpbmF0aW9uXCI7XHJcblxyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXhdKTtcclxuXHJcbmNvbnN0IEludHJvNCA9ICgpID0+IHtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlbW92ZVNsYXNoRnJvbVBhZ2luYXRpb24oKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0aW9uUHJldlJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBuYXZpZ2F0aW9uTmV4dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBwYWdpbmF0aW9uUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzbGlkZXIgc2xpZGVyLW1vdlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1jb250YWluZXIgcGFyYWxsYXgtc2xpZGVyXCI+XHJcbiAgICAgICAgeyFsb2FkID8gKFxyXG4gICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBzcGVlZD17MTAwMH1cclxuICAgICAgICAgICAgcGFyYWxsYXg9e3RydWV9XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb249e3tcclxuICAgICAgICAgICAgICBwcmV2RWw6IG5hdmlnYXRpb25QcmV2UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgbmV4dEVsOiBuYXZpZ2F0aW9uTmV4dFJlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwcm9ncmVzc2JhclwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBlbDogcGFnaW5hdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkJlZm9yZUluaXQ9eyhzd2lwZXIpID0+IHtcclxuICAgICAgICAgICAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ucHJldkVsID0gbmF2aWdhdGlvblByZXZSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubmV4dEVsID0gbmF2aWdhdGlvbk5leHRSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgPSBwYWdpbmF0aW9uUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uU3dpcGVyPXsoc3dpcGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlc1tpXS5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtc3dpcGVyLXBhcmFsbGF4XCJcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ucHJldkVsID0gbmF2aWdhdGlvblByZXZSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5uZXh0RWwgPSBuYXZpZ2F0aW9uTmV4dFJlZi5jdXJyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbCA9IHBhZ2luYXRpb25SZWYuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2lwZXIubmF2aWdhdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIubmF2aWdhdGlvbi5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW50cm9EYXRhLm1hcCgoc2xpZGUpID0+IChcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtzbGlkZS5pZH0gY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZyB2YWxpZ25cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzbGlkZS5pbWFnZX0pYCB9fVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW92ZXJsYXktZGFyaz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb24gaG1vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BsaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGxpdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid29yZHMgY2hhcnMgc3BsaXR0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZS50aXRsZS5maXJzdH0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUudGl0bGUuc2Vjb25kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwbGl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZT8uY29udGVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuY29udGVudC5maXJzdH0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZS5jb250ZW50LnNlY29uZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0b25lIHRvcFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHQgc3dpcGVyLW5hdi1jdHJsIG5leHQtY3RybFwiXHJcbiAgICAgICAgICAgIHJlZj17bmF2aWdhdGlvbk5leHRSZWZ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldiBzd2lwZXItbmF2LWN0cmwgcHJldi1jdHJsXCJcclxuICAgICAgICAgICAgcmVmPXtuYXZpZ2F0aW9uUHJldlJlZn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybzQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImludHJvRGF0YSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiU3BsaXQiLCJMaW5rIiwiU3dpcGVyQ29yZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiUGFyYWxsYXgiLCJyZW1vdmVTbGFzaEZyb21QYWdpbmF0aW9uIiwidXNlIiwiSW50cm80IiwidXNlU3RhdGUiLCJsb2FkIiwic2V0TG9hZCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJuYXZpZ2F0aW9uUHJldlJlZiIsInVzZVJlZiIsIm5hdmlnYXRpb25OZXh0UmVmIiwicGFnaW5hdGlvblJlZiIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsInNwZWVkIiwicGFyYWxsYXgiLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwiY3VycmVudCIsIm5leHRFbCIsInBhZ2luYXRpb24iLCJ0eXBlIiwiY2xpY2thYmxlIiwiZWwiLCJvbkJlZm9yZUluaXQiLCJzd2lwZXIiLCJwYXJhbXMiLCJvblN3aXBlciIsImkiLCJzbGlkZXMiLCJsZW5ndGgiLCJjaGlsZE5vZGVzIiwic2V0QXR0cmlidXRlIiwiZGVzdHJveSIsImluaXQiLCJ1cGRhdGUiLCJzbGlkZXNQZXJWaWV3IiwibWFwIiwic2xpZGUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwiZGF0YS1vdmVybGF5LWRhcmsiLCJoMSIsImRhdGEtc3BsaXR0aW5nIiwiaHJlZiIsImEiLCJ0aXRsZSIsImZpcnN0IiwiYnIiLCJzZWNvbmQiLCJjb250ZW50IiwicCIsImlkIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Intro4/index.jsx\n");

/***/ })

});