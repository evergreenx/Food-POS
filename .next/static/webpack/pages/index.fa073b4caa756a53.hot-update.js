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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TopNav; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Evergreenx\\\\Desktop\\\\dev\\\\ts-nextjs-tailwind-starter\\\\src\\\\components\\\\UserInfo\\\\TopNav.tsx\";\n\n\nfunction TopNav() {\n  // function to add date to the top nav\n  function addDate() {\n    var date = new Date();\n    var day = date.getDay();\n    var month = date.getMonth() + 1;\n    var year = date.getFullYear(); // get day of the weeek\n\n    var dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // return dayString[day];\n\n    var dateString = \"\".concat(dayString[day], \" , \").concat(month, \"/\").concat(year);\n    return dateString;\n  } // get day of the week\n\n\n  function getDay() {\n    var date = new Date();\n    var day = date.getDay();\n    var dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    return dayString[day];\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        children: \"Jaegar Resto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"time\", {\n        children: addDate()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"search bar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n_c = TopNav;\n\nvar _c;\n\n$RefreshReg$(_c, \"TopNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Ub3BOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQy9CO0FBQ0EsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQixRQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFiO0FBQ0EsUUFBTUMsR0FBRyxHQUFHRixJQUFJLENBQUNHLE1BQUwsRUFBWjtBQUVBLFFBQU1DLEtBQUssR0FBR0osSUFBSSxDQUFDSyxRQUFMLEtBQWtCLENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHTixJQUFJLENBQUNPLFdBQUwsRUFBYixDQUxpQixDQU1qQjs7QUFFQSxRQUFNQyxTQUFTLEdBQUcsQ0FDaEIsUUFEZ0IsRUFFaEIsUUFGZ0IsRUFHaEIsU0FIZ0IsRUFJaEIsV0FKZ0IsRUFLaEIsVUFMZ0IsRUFNaEIsUUFOZ0IsRUFPaEIsVUFQZ0IsQ0FBbEIsQ0FSaUIsQ0FrQmpCOztBQUNBLFFBQU1DLFVBQVUsYUFBTUQsU0FBUyxDQUFDTixHQUFELENBQWYsZ0JBQTBCRSxLQUExQixjQUFtQ0UsSUFBbkMsQ0FBaEI7QUFFQSxXQUFPRyxVQUFQO0FBQ0QsR0F4QjhCLENBMEIvQjs7O0FBQ0EsV0FBU04sTUFBVCxHQUFrQjtBQUNoQixRQUFNSCxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFiO0FBQ0EsUUFBTUMsR0FBRyxHQUFHRixJQUFJLENBQUNHLE1BQUwsRUFBWjtBQUVBLFFBQU1LLFNBQVMsR0FBRyxDQUNoQixRQURnQixFQUVoQixRQUZnQixFQUdoQixTQUhnQixFQUloQixXQUpnQixFQUtoQixVQUxnQixFQU1oQixRQU5nQixFQU9oQixVQVBnQixDQUFsQjtBQVVBLFdBQU9BLFNBQVMsQ0FBQ04sR0FBRCxDQUFoQjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxrQkFBT0gsT0FBTztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDtLQXZEdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1RvcE5hdi50c3g/NWYwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wTmF2KCkge1xyXG4gIC8vIGZ1bmN0aW9uIHRvIGFkZCBkYXRlIHRvIHRoZSB0b3AgbmF2XHJcbiAgZnVuY3Rpb24gYWRkRGF0ZSgpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcclxuXHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgLy8gZ2V0IGRheSBvZiB0aGUgd2VlZWtcclxuXHJcbiAgICBjb25zdCBkYXlTdHJpbmcgPSBbXHJcbiAgICAgICdTdW5kYXknLFxyXG4gICAgICAnTW9uZGF5JyxcclxuICAgICAgJ1R1ZXNkYXknLFxyXG4gICAgICAnV2VkbmVzZGF5JyxcclxuICAgICAgJ1RodXJzZGF5JyxcclxuICAgICAgJ0ZyaWRheScsXHJcbiAgICAgICdTYXR1cmRheScsXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIHJldHVybiBkYXlTdHJpbmdbZGF5XTtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBgJHtkYXlTdHJpbmdbZGF5XX0gLCAke21vbnRofS8ke3llYXJ9YDtcclxuXHJcbiAgICByZXR1cm4gZGF0ZVN0cmluZztcclxuICB9XHJcblxyXG4gIC8vIGdldCBkYXkgb2YgdGhlIHdlZWtcclxuICBmdW5jdGlvbiBnZXREYXkoKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XHJcblxyXG4gICAgY29uc3QgZGF5U3RyaW5nID0gW1xyXG4gICAgICAnU3VuZGF5JyxcclxuICAgICAgJ01vbmRheScsXHJcbiAgICAgICdUdWVzZGF5JyxcclxuICAgICAgJ1dlZG5lc2RheScsXHJcbiAgICAgICdUaHVyc2RheScsXHJcbiAgICAgICdGcmlkYXknLFxyXG4gICAgICAnU2F0dXJkYXknLFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gZGF5U3RyaW5nW2RheV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+SmFlZ2FyIFJlc3RvPC9oMj5cclxuXHJcbiAgICAgICAgPHRpbWU+e2FkZERhdGUoKX08L3RpbWU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5zZWFyY2ggYmFyPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRvcE5hdiIsImFkZERhdGUiLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERheSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJkYXlTdHJpbmciLCJkYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UserInfo/TopNav.tsx\n");

/***/ })

});