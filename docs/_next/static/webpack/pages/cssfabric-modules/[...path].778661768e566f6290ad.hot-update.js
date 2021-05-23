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
  var module = props.module,
      action = props.action;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "menu-xl-h menu-v menu-small shad-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: action === 'demo' ? 'active' : '',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleDemoPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: action === 'classnames' ? 'active' : '',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleClassNamesPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Classnames"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: action === 'docs' ? 'active' : '',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleDocsPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Docs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5uZXJNZW51LnRzeCJdLCJuYW1lcyI6WyJJbm5lck1lbnUiLCJwcm9wcyIsIm1vZHVsZSIsImFjdGlvbiIsImZhYnJpY05hdmlnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBT0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BRXpCQyxNQUZ5QixHQUVQRCxLQUZPLENBRXpCQyxNQUZ5QjtBQUFBLE1BRWpCQyxNQUZpQixHQUVQRixLQUZPLENBRWpCRSxNQUZpQjtBQUtoQyxzQkFBTztBQUFJLGFBQVMsRUFBRSxvQ0FBZjtBQUFBLDRCQUNIO0FBQUksZUFBUyxFQUFHQSxNQUFNLEtBQUcsTUFBVixHQUFtQixRQUFuQixHQUE0QixFQUEzQztBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFQyw0RUFBQSxDQUFtQ0YsTUFBbkMsQ0FBWjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxlQU1IO0FBQUksZUFBUyxFQUFHQyxNQUFNLEtBQUcsWUFBVixHQUF5QixRQUF6QixHQUFrQyxFQUFqRDtBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFQyxrRkFBQSxDQUF5Q0YsTUFBekMsQ0FBWjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORyxlQVdIO0FBQUksZUFBUyxFQUFHQyxNQUFNLEtBQUcsTUFBVixHQUFtQixRQUFuQixHQUE0QixFQUEzQztBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFQyw0RUFBQSxDQUFtQ0YsTUFBbkMsQ0FBWjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWtCSCxDQXZCRDs7S0FBTUYsUztBQTBCTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jc3NmYWJyaWMtbW9kdWxlcy9bLi4ucGF0aF0uNzc4NjYxNzY4ZTU2NmY2MjkwYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rICAgICAgICAgICAgICAgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge2ZhYnJpY05hdmlnYXRpb259IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSU1lbnUge1xyXG4gICAgbW9kdWxlOiBzdHJpbmcsXHJcbiAgICBhY3Rpb246IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBJbm5lck1lbnUgPSAocHJvcHM6IElNZW51KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHttb2R1bGUsIGFjdGlvbn0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT17XCJtZW51LXhsLWggbWVudS12IG1lbnUtc21hbGwgc2hhZC04XCJ9PlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9eyhhY3Rpb249PT0nZGVtbycpPyAnYWN0aXZlJzonJ30+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlRGVtb1BhZ2UobW9kdWxlKX0+XHJcbiAgICAgICAgICAgICAgICA8YT5EZW1vPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXsoYWN0aW9uPT09J2NsYXNzbmFtZXMnKT8gJ2FjdGl2ZSc6Jyd9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtmYWJyaWNOYXZpZ2F0aW9uLmdldE1vZHVsZUNsYXNzTmFtZXNQYWdlKG1vZHVsZSl9PlxyXG4gICAgICAgICAgICAgICAgPGE+Q2xhc3NuYW1lczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17KGFjdGlvbj09PSdkb2NzJyk/ICdhY3RpdmUnOicnfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZmFicmljTmF2aWdhdGlvbi5nZXRNb2R1bGVEb2NzUGFnZShtb2R1bGUpfT5cclxuICAgICAgICAgICAgICAgIDxhPkRvY3M8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgXHJcbiAgICA8L3VsPlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5uZXJNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=