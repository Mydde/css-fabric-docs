self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/components/InnerMenu.tsx":
/*!**************************************!*\
  !*** ./src/components/InnerMenu.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\components\\InnerMenu.tsx",
    _this = undefined;




var InnerMenu = function InnerMenu(props) {
  var module = props.module;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "menu-xl-h menu-v menu-small shad-8",
    children: [staticAction, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleDemoPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleClassNamesPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Classnames"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleDocsPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Docs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, _this);
};

_c = InnerMenu;
/* harmony default export */ __webpack_exports__["default"] = (InnerMenu);

var _c;

$RefreshReg$(_c, "InnerMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5uZXJNZW51LnRzeCJdLCJuYW1lcyI6WyJJbm5lck1lbnUiLCJwcm9wcyIsIm1vZHVsZSIsInN0YXRpY0FjdGlvbiIsImZhYnJpY05hdmlnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBT0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BRXpCQyxNQUZ5QixHQUVmRCxLQUZlLENBRXpCQyxNQUZ5QjtBQUtoQyxzQkFBTztBQUFJLGFBQVMsRUFBRSxvQ0FBZjtBQUFBLGVBQ0ZDLFlBREUsZUFFSDtBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFQyw0RUFBQSxDQUFtQ0YsTUFBbkMsQ0FBWjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRyxlQU9IO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUVFLGtGQUFBLENBQXlDRixNQUF6QyxDQUFaO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBHLGVBWUg7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUUsNEVBQUEsQ0FBbUNGLE1BQW5DLENBQVo7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFtQkgsQ0F4QkQ7O0tBQU1GLFM7QUEyQk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3NzZmFicmljLW1vZHVsZXMvWy4uLnBhdGhdLmMwODYxNWUxYjcwMTAyZTA3NTkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayAgICAgICAgICAgICAgIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtmYWJyaWNOYXZpZ2F0aW9ufSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElNZW51IHtcclxuICAgIG1vZHVsZTogc3RyaW5nLFxyXG4gICAgYWN0aW9uOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgSW5uZXJNZW51ID0gKHByb3BzOiBJTWVudSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPXtcIm1lbnUteGwtaCBtZW51LXYgbWVudS1zbWFsbCBzaGFkLThcIn0+XHJcbiAgICAgICAge3N0YXRpY0FjdGlvbn1cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlRGVtb1BhZ2UobW9kdWxlKX0+XHJcbiAgICAgICAgICAgICAgICA8YT5EZW1vPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlQ2xhc3NOYW1lc1BhZ2UobW9kdWxlKX0+XHJcbiAgICAgICAgICAgICAgICA8YT5DbGFzc25hbWVzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlRG9jc1BhZ2UobW9kdWxlKX0+XHJcbiAgICAgICAgICAgICAgICA8YT5Eb2NzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgIFxyXG4gICAgPC91bD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElubmVyTWVudTsiXSwic291cmNlUm9vdCI6IiJ9