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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TopNav; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Evergreenx\\\\Desktop\\\\dev\\\\ts-nextjs-tailwind-starter\\\\src\\\\components\\\\UserInfo\\\\TopNav.tsx\";\n\n\n\nfunction TopNav() {\n  function addDate() {\n    var date = new Date();\n    var day = date.getDay();\n    var year = date.getFullYear();\n    var dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    var shortMonth = date.toLocaleString('en-us', {\n      month: 'short'\n    });\n    var dateString = \"\".concat(dayString[day], \" , \").concat(day, \" \").concat(shortMonth, \" \").concat(year);\n    return dateString;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n    className: \"flex items-center justify-between\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"p-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        children: \"Jaegar Resto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"time\", {\n        children: addDate()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"space-x-10 border-2 border-inputBorder flex items-center px-4 py-3 rounded-lg focus:inputBorder\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaSearch, {\n        className: \"text-xl\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n        type: \"text-sm\",\n        className: \"bg-bgprimary placeholder:text-LightText text-base focus:outline-none\",\n        placeholder: \"Search for food, coffe, etc\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n_c = TopNav;\n\nvar _c;\n\n$RefreshReg$(_c, \"TopNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Ub3BOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTRSxNQUFULEdBQWtCO0FBQy9CLFdBQVNDLE9BQVQsR0FBbUI7QUFDakIsUUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBLFFBQU1DLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxNQUFMLEVBQVo7QUFFQSxRQUFNQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0ssV0FBTCxFQUFiO0FBRUEsUUFBTUMsU0FBUyxHQUFHLENBQ2hCLFFBRGdCLEVBRWhCLFFBRmdCLEVBR2hCLFNBSGdCLEVBSWhCLFdBSmdCLEVBS2hCLFVBTGdCLEVBTWhCLFFBTmdCLEVBT2hCLFVBUGdCLENBQWxCO0FBVUEsUUFBTUMsVUFBVSxHQUFHUCxJQUFJLENBQUNRLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDOUNDLE1BQUFBLEtBQUssRUFBRTtBQUR1QyxLQUE3QixDQUFuQjtBQUdBLFFBQU1DLFVBQVUsYUFBTUosU0FBUyxDQUFDSixHQUFELENBQWYsZ0JBQTBCQSxHQUExQixjQUFpQ0ssVUFBakMsY0FBK0NILElBQS9DLENBQWhCO0FBRUEsV0FBT00sVUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQVEsYUFBUyxFQUFDLG1DQUFsQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxrQkFBT1gsT0FBTztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUssZUFBUyxFQUFDLGlHQUFmO0FBQUEsOEJBQ0UsOERBQUMsb0RBQUQ7QUFBVSxpQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQ0UsWUFBSSxFQUFDLFNBRFA7QUFFRSxpQkFBUyxFQUFDLHNFQUZaO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDtLQTVDdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1RvcE5hdi50c3g/NWYwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcE5hdigpIHtcclxuICBmdW5jdGlvbiBhZGREYXRlKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xyXG5cclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgY29uc3QgZGF5U3RyaW5nID0gW1xyXG4gICAgICAnU3VuZGF5JyxcclxuICAgICAgJ01vbmRheScsXHJcbiAgICAgICdUdWVzZGF5JyxcclxuICAgICAgJ1dlZG5lc2RheScsXHJcbiAgICAgICdUaHVyc2RheScsXHJcbiAgICAgICdGcmlkYXknLFxyXG4gICAgICAnU2F0dXJkYXknLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzaG9ydE1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7XHJcbiAgICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gYCR7ZGF5U3RyaW5nW2RheV19ICwgJHtkYXl9ICR7c2hvcnRNb250aH0gJHt5ZWFyfWA7XHJcblxyXG4gICAgcmV0dXJuIGRhdGVTdHJpbmc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxyXG4gICAgICAgIDxoMj5KYWVnYXIgUmVzdG88L2gyPlxyXG5cclxuICAgICAgICA8dGltZT57YWRkRGF0ZSgpfTwvdGltZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteC0xMCBib3JkZXItMiBib3JkZXItaW5wdXRCb3JkZXIgZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0zIHJvdW5kZWQtbGcgZm9jdXM6aW5wdXRCb3JkZXInPlxyXG4gICAgICAgIDxGYVNlYXJjaCBjbGFzc05hbWU9J3RleHQteGwnIC8+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dC1zbSdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmdwcmltYXJ5IHBsYWNlaG9sZGVyOnRleHQtTGlnaHRUZXh0IHRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciBmb29kLCBjb2ZmZSwgZXRjJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGYVNlYXJjaCIsIlRvcE5hdiIsImFkZERhdGUiLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERheSIsInllYXIiLCJnZXRGdWxsWWVhciIsImRheVN0cmluZyIsInNob3J0TW9udGgiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwiZGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UserInfo/TopNav.tsx\n");

/***/ })

});