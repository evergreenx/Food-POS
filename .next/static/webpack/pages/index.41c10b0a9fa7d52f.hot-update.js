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

/***/ "./src/components/UserInfo/TopNav.tsx":
/*!********************************************!*\
  !*** ./src/components/UserInfo/TopNav.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TopNav; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Evergreenx\\\\Desktop\\\\dev\\\\ts-nextjs-tailwind-starter\\\\src\\\\components\\\\UserInfo\\\\TopNav.tsx\";\n\n\nfunction TopNav() {\n  function addDate() {\n    var date = new Date();\n    var day = date.getDay();\n    var year = date.getFullYear();\n    var dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    var shortMonth = date.toLocaleString('en-us', {\n      month: 'short'\n    });\n    var dateString = \"\".concat(dayString[day], \" , \").concat(day, \" \").concat(shortMonth, \" \").concat(year);\n    return dateString;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n    className: \"flex items-center justify-between\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"p-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        children: \"Jaegar Resto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"time\", {\n        children: addDate()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FaSearch, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 1\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n_c = TopNav;\n\nvar _c;\n\n$RefreshReg$(_c, \"TopNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Ub3BOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFHZSxTQUFTQyxNQUFULEdBQWtCO0FBQy9CLFdBQVNDLE9BQVQsR0FBbUI7QUFDakIsUUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBLFFBQU1DLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxNQUFMLEVBQVo7QUFFQSxRQUFNQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0ssV0FBTCxFQUFiO0FBRUEsUUFBTUMsU0FBUyxHQUFHLENBQ2hCLFFBRGdCLEVBRWhCLFFBRmdCLEVBR2hCLFNBSGdCLEVBSWhCLFdBSmdCLEVBS2hCLFVBTGdCLEVBTWhCLFFBTmdCLEVBT2hCLFVBUGdCLENBQWxCO0FBVUEsUUFBTUMsVUFBVSxHQUFHUCxJQUFJLENBQUNRLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDOUNDLE1BQUFBLEtBQUssRUFBRTtBQUR1QyxLQUE3QixDQUFuQjtBQUdBLFFBQU1DLFVBQVUsYUFBTUosU0FBUyxDQUFDSixHQUFELENBQWYsZ0JBQTBCQSxHQUExQixjQUFpQ0ssVUFBakMsY0FBK0NILElBQS9DLENBQWhCO0FBRUEsV0FBT00sVUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQVEsYUFBUyxFQUFDLG1DQUFsQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxrQkFBT1gsT0FBTztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUEsNkJBRU4sOERBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRk07QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7S0F4Q3VCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Ub3BOYXYudHN4PzVmMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZhc2VhcmNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9zZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wTmF2KCkge1xyXG4gIGZ1bmN0aW9uIGFkZERhdGUoKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XHJcblxyXG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICBjb25zdCBkYXlTdHJpbmcgPSBbXHJcbiAgICAgICdTdW5kYXknLFxyXG4gICAgICAnTW9uZGF5JyxcclxuICAgICAgJ1R1ZXNkYXknLFxyXG4gICAgICAnV2VkbmVzZGF5JyxcclxuICAgICAgJ1RodXJzZGF5JyxcclxuICAgICAgJ0ZyaWRheScsXHJcbiAgICAgICdTYXR1cmRheScsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHNob3J0TW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHtcclxuICAgICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBgJHtkYXlTdHJpbmdbZGF5XX0gLCAke2RheX0gJHtzaG9ydE1vbnRofSAke3llYXJ9YDtcclxuXHJcbiAgICByZXR1cm4gZGF0ZVN0cmluZztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJyA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxyXG4gICAgICAgIDxoMj5KYWVnYXIgUmVzdG88L2gyPlxyXG5cclxuICAgICAgICA8dGltZT57YWRkRGF0ZSgpfTwvdGltZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG5cclxuPEZhU2VhcmNoIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVG9wTmF2IiwiYWRkRGF0ZSIsImRhdGUiLCJEYXRlIiwiZGF5IiwiZ2V0RGF5IiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF5U3RyaW5nIiwic2hvcnRNb250aCIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJkYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UserInfo/TopNav.tsx\n");

/***/ })

});