"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/interior",{

/***/ "./src/components/interior/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/interior/index.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_worksCardEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/worksCardEffect */ \"./src/common/worksCardEffect.js\");\n/* harmony import */ var _Video4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Video4 */ \"./src/components/Video4/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ \"./node_modules/photoswipe/dist/photoswipe.css\");\n/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-photoswipe-gallery */ \"./node_modules/react-photoswipe-gallery/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this2 = undefined;\nvar Interior = function() {\n    var _this1 = _this2;\n    var uiElements = [\n        {\n            name: \"custom-button\",\n            ariaLabel: \"Custom button\",\n            order: 9,\n            isButton: true,\n            html: {\n                isCustomSVG: true,\n                inner: '<path d=\"<ICON_PATH>\" id=\"pswp__icn-cstm-btn\"/>',\n                outlineID: \"pswp__icn-cstm-btn\"\n            },\n            appendTo: \"bar\",\n            onInit: function(el, pswpInstance) {\n            },\n            onClick: function(e, el, pswpInstance) {\n            }\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        style: {\n            padding: 100\n        },\n        __source: {\n            fileName: \"/Users/zeriab/Downloads/archi-master/src/components/interior/index.jsx\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__.Gallery, {\n            uiElements: uiElements,\n            __source: {\n                fileName: \"/Users/zeriab/Downloads/archi-master/src/components/interior/index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            },\n            __self: _this2,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"300px 300px 300px\",\n                    gridTemplateRows: \"300px 300px 300px\",\n                    gridGap: 50,\n                    justifyContent: \"center\",\n                    columnGap: 50,\n                    rowGap: 50,\n                    MozColumnGap: 50\n                },\n                __source: {\n                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/interior/index.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                },\n                __self: _this2,\n                children: interior.map(function(image, i) {\n                    var _this = _this1;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                        caption: \"Interior1\",\n                        alt: \"Interior1\",\n                        cropped: true,\n                        original: image.img,\n                        thumbnail: image.img,\n                        width: \"1024\",\n                        height: \"768\",\n                        __source: {\n                            fileName: \"/Users/zeriab/Downloads/archi-master/src/components/interior/index.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        },\n                        __self: _this1,\n                        children: function(param) {\n                            var ref = param.ref, open = param.open;\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                ref: ref,\n                                onClick: open,\n                                src: image.img,\n                                __source: {\n                                    fileName: \"/Users/zeriab/Downloads/archi-master/src/components/interior/index.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 19\n                                },\n                                __self: _this\n                            });\n                        }\n                    }, i));\n                })\n            })\n        })\n    }));\n};\n_c = Interior;\nvar interior = [\n    {\n        img: \"/assets/images/interior/interior1/1.jpeg\",\n        title: \"interior1\"\n    },\n    {\n        img: \"/assets/images/interior/interior1/2.jpeg\",\n        title: \"interior1\"\n    },\n    {\n        img: \"/assets/images/interior/interior1/3.jpeg\",\n        title: \"interior1\"\n    }, \n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interior);\nvar _c;\n$RefreshReg$(_c, \"Interior\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnRlcmlvci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDOEI7QUFDNUI7QUFFQTtBQUNTO0FBRWlCO0FBQ1M7O0FBRWpFLEdBQUssQ0FBQ1EsUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O0lBQ3RCLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUM7UUFDbEIsQ0FBQztZQUNDQyxJQUFJLEVBQUUsQ0FBZTtZQUNyQkMsU0FBUyxFQUFFLENBQWU7WUFDMUJDLEtBQUssRUFBRSxDQUFDO1lBQ1JDLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLElBQUksRUFBRSxDQUFDO2dCQUNMQyxXQUFXLEVBQUUsSUFBSTtnQkFDakJDLEtBQUssRUFBRSxDQUFpRDtnQkFDeERDLFNBQVMsRUFBRSxDQUFvQjtZQUNqQyxDQUFDO1lBQ0RDLFFBQVEsRUFBRSxDQUFLO1lBQ2ZDLE1BQU0sRUFBRSxRQUFRLENBQVBDLEVBQUUsRUFBRUMsWUFBWSxFQUFLLENBQUM7WUFBQSxDQUFDO1lBQ2hDQyxPQUFPLEVBQUUsUUFBUUQsQ0FBUEUsQ0FBQyxFQUFFSCxFQUFFLEVBQUVDLFlBQVksRUFBSyxDQUFDO1lBQUEsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sc0VBQ0hHLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0MsT0FBTyxFQUFFLEdBQUc7UUFBQyxDQUFDOzs7Ozs7O3VGQUN6QnRCLDZEQUFPO1lBQUNLLFVBQVUsRUFBRUEsVUFBVTs7Ozs7OzsyRkFDNUJlLENBQUc7Z0JBQ0ZDLEtBQUssRUFBRSxDQUFDO29CQUNORSxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsbUJBQW1CLEVBQUUsQ0FBbUI7b0JBQ3hDQyxnQkFBZ0IsRUFBRSxDQUFtQjtvQkFDckNDLE9BQU8sRUFBRSxFQUFFO29CQUNYQyxjQUFjLEVBQUUsQ0FBUTtvQkFDeEJDLFNBQVMsRUFBRSxFQUFFO29CQUNiQyxNQUFNLEVBQUUsRUFBRTtvQkFDVkMsWUFBWSxFQUFFLEVBQUU7Z0JBQ2xCLENBQUM7Ozs7Ozs7MEJBRUFDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsQ0FBQyxFQUFLLENBQUM7O29CQUMzQixNQUFNLHNFQUNIaEMsMERBQUk7d0JBRUhrQyxPQUFPLEVBQUMsQ0FBVzt3QkFDbkJDLEdBQUcsRUFBQyxDQUFXO3dCQUNmQyxPQUFPLEVBQUUsSUFBSTt3QkFDYkMsUUFBUSxFQUFFSixLQUFLLENBQUNLLEdBQUc7d0JBQ25CQyxTQUFTLEVBQUVOLEtBQUssQ0FBQ0ssR0FBRzt3QkFDcEJFLEtBQUssRUFBQyxDQUFNO3dCQUNaQyxNQUFNLEVBQUMsQ0FBSzs7Ozs7OztrQ0FFWCxRQUFRQztnQ0FBTEMsR0FBRyxTQUFIQSxHQUFHLEVBQUVELElBQUksU0FBSkEsSUFBSTswQ0FDWCxNQUFNLHdEQUFMSixDQUFHO2dDQUFDSyxHQUFHLEVBQUVBLEdBQUc7Z0NBQUUxQixPQUFPLEVBQUV5QixJQUFJO2dDQUFFRSxHQUFHLEVBQUVYLEtBQUssQ0FBQ0ssR0FBRzs7Ozs7Ozs7O3VCQVZ6Q04sQ0FBQztnQkFjWixDQUFDOzs7O0FBS1gsQ0FBQztLQXZESzdCLFFBQVE7QUF5RGQsR0FBSyxDQUFDMkIsUUFBUSxHQUFHLENBQUM7SUFDaEIsQ0FBQztRQUNDUSxHQUFHLEVBQUUsQ0FBMEM7UUFDL0NPLEtBQUssRUFBRSxDQUFXO0lBQ3BCLENBQUM7SUFDRCxDQUFDO1FBQ0NQLEdBQUcsRUFBRSxDQUEwQztRQUMvQ08sS0FBSyxFQUFFLENBQVc7SUFDcEIsQ0FBQztJQUVELENBQUM7UUFDQ1AsR0FBRyxFQUFFLENBQTBDO1FBQy9DTyxLQUFLLEVBQUUsQ0FBVztJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlMUMsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ludGVyaW9yL2luZGV4LmpzeD85ZDkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB3b3Jrc0NhcmRFZmZlY3QgZnJvbSBcIi4uLy4uL2NvbW1vbi93b3Jrc0NhcmRFZmZlY3RcIjtcbmltcG9ydCBWaWRlbzQgZnJvbSBcIi4uL1ZpZGVvNFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcInBob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmNzc1wiO1xuXG5pbXBvcnQgeyBHYWxsZXJ5LCBJdGVtIH0gZnJvbSBcInJlYWN0LXBob3Rvc3dpcGUtZ2FsbGVyeVwiO1xuaW1wb3J0IHsgVmlld0NvbHVtbiwgVmlld0NvbHVtblNoYXJwIH0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcblxuY29uc3QgSW50ZXJpb3IgPSAoKSA9PiB7XG4gIGNvbnN0IHVpRWxlbWVudHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJjdXN0b20tYnV0dG9uXCIsXG4gICAgICBhcmlhTGFiZWw6IFwiQ3VzdG9tIGJ1dHRvblwiLFxuICAgICAgb3JkZXI6IDksXG4gICAgICBpc0J1dHRvbjogdHJ1ZSxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgaXNDdXN0b21TVkc6IHRydWUsXG4gICAgICAgIGlubmVyOiAnPHBhdGggZD1cIjxJQ09OX1BBVEg+XCIgaWQ9XCJwc3dwX19pY24tY3N0bS1idG5cIi8+JyxcbiAgICAgICAgb3V0bGluZUlEOiBcInBzd3BfX2ljbi1jc3RtLWJ0blwiLFxuICAgICAgfSxcbiAgICAgIGFwcGVuZFRvOiBcImJhclwiLFxuICAgICAgb25Jbml0OiAoZWwsIHBzd3BJbnN0YW5jZSkgPT4ge30sXG4gICAgICBvbkNsaWNrOiAoZSwgZWwsIHBzd3BJbnN0YW5jZSkgPT4ge30sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTAwIH19PlxuICAgICAgPEdhbGxlcnkgdWlFbGVtZW50cz17dWlFbGVtZW50c30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjMwMHB4IDMwMHB4IDMwMHB4XCIsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBcIjMwMHB4IDMwMHB4IDMwMHB4XCIsXG4gICAgICAgICAgICBncmlkR2FwOiA1MCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgY29sdW1uR2FwOiA1MCxcbiAgICAgICAgICAgIHJvd0dhcDogNTAsXG4gICAgICAgICAgICBNb3pDb2x1bW5HYXA6IDUwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aW50ZXJpb3IubWFwKChpbWFnZSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgY2FwdGlvbj1cIkludGVyaW9yMVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiSW50ZXJpb3IxXCJcbiAgICAgICAgICAgICAgICBjcm9wcGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsPXtpbWFnZS5pbWd9XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsPXtpbWFnZS5pbWd9XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDI0XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3NjhcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyh7IHJlZiwgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8aW1nIHJlZj17cmVmfSBvbkNsaWNrPXtvcGVufSBzcmM9e2ltYWdlLmltZ30gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR2FsbGVyeT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGludGVyaW9yID0gW1xuICB7XG4gICAgaW1nOiBcIi9hc3NldHMvaW1hZ2VzL2ludGVyaW9yL2ludGVyaW9yMS8xLmpwZWdcIixcbiAgICB0aXRsZTogXCJpbnRlcmlvcjFcIixcbiAgfSxcbiAge1xuICAgIGltZzogXCIvYXNzZXRzL2ltYWdlcy9pbnRlcmlvci9pbnRlcmlvcjEvMi5qcGVnXCIsXG4gICAgdGl0bGU6IFwiaW50ZXJpb3IxXCIsXG4gIH0sXG5cbiAge1xuICAgIGltZzogXCIvYXNzZXRzL2ltYWdlcy9pbnRlcmlvci9pbnRlcmlvcjEvMy5qcGVnXCIsXG4gICAgdGl0bGU6IFwiaW50ZXJpb3IxXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmlvcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwid29ya3NDYXJkRWZmZWN0IiwiVmlkZW80IiwiUmVhY3QiLCJHYWxsZXJ5IiwiSXRlbSIsIlZpZXdDb2x1bW4iLCJWaWV3Q29sdW1uU2hhcnAiLCJJbnRlcmlvciIsInVpRWxlbWVudHMiLCJuYW1lIiwiYXJpYUxhYmVsIiwib3JkZXIiLCJpc0J1dHRvbiIsImh0bWwiLCJpc0N1c3RvbVNWRyIsImlubmVyIiwib3V0bGluZUlEIiwiYXBwZW5kVG8iLCJvbkluaXQiLCJlbCIsInBzd3BJbnN0YW5jZSIsIm9uQ2xpY2siLCJlIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZEdhcCIsImp1c3RpZnlDb250ZW50IiwiY29sdW1uR2FwIiwicm93R2FwIiwiTW96Q29sdW1uR2FwIiwiaW50ZXJpb3IiLCJtYXAiLCJpIiwiaW1hZ2UiLCJjYXB0aW9uIiwiYWx0IiwiY3JvcHBlZCIsIm9yaWdpbmFsIiwiaW1nIiwidGh1bWJuYWlsIiwid2lkdGgiLCJoZWlnaHQiLCJvcGVuIiwicmVmIiwic3JjIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/interior/index.jsx\n");

/***/ })

});