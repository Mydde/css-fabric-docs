self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/components/Docs/DocsClassNames.tsx":
/*!************************************************!*\
  !*** ./src/components/Docs/DocsClassNames.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DocsClassNames; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\components\\Docs\\DocsClassNames.tsx";

function DocsClassNames(props) {
  var _this = this;

  var module = props.module;
  var moduleAttributes = cssfabric__WEBPACK_IMPORTED_MODULE_1___default().getModuleDocsAttributes(module); // const moduleAttributes = cssfabric.

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pad-8",
      children: Object.keys(moduleAttributes).map(function (moduleAttribute) {
        var newOut = cssfabric__WEBPACK_IMPORTED_MODULE_1___default().getModuleClassNames.getModuleTagClassNames({
          module: module,
          moduleAttribute: moduleAttribute
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "pad-tb-2",
            children: moduleAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-gray-400 pad-tb-2",
            children: "- cssfabric expressions list for  css ".concat(moduleAttribute, " rules")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-b-8",
            children: newOut.map(function (x, y) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: [".", x]
              }, x + y, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 67
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this)]
        }, moduleAttribute, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, this);
}
_c = DocsClassNames;

var _c;

$RefreshReg$(_c, "DocsClassNames");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jcy9Eb2NzQ2xhc3NOYW1lcy50c3giXSwibmFtZXMiOlsiRG9jc0NsYXNzTmFtZXMiLCJwcm9wcyIsIm1vZHVsZSIsIm1vZHVsZUF0dHJpYnV0ZXMiLCJjc3NmYWJyaWMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibW9kdWxlQXR0cmlidXRlIiwibmV3T3V0IiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRZSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUFnRDtBQUFBOztBQUFBLE1BRXBEQyxNQUZvRCxHQUVsQ0QsS0FGa0MsQ0FFcERDLE1BRm9EO0FBRzNELE1BQU1DLGdCQUFnQixHQUFHQyx3RUFBQSxDQUFrQ0YsTUFBbEMsQ0FBekIsQ0FIMkQsQ0FJM0Q7O0FBR0Esc0JBQU87QUFBQSwyQkFTSDtBQUFLLGVBQVMsRUFBRSxPQUFoQjtBQUFBLGdCQUVRRyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsZ0JBQVosRUFBOEJJLEdBQTlCLENBQWtDLFVBQUNDLGVBQUQsRUFBNkI7QUFDM0QsWUFBTUMsTUFBTSxHQUFHTCwyRkFBQSxDQUFxRDtBQUFDRixnQkFBTSxFQUFOQSxNQUFEO0FBQVNNLHlCQUFlLEVBQWZBO0FBQVQsU0FBckQsQ0FBZjtBQUVBLDRCQUFPO0FBQTJCLG1CQUFTLEVBQUUsR0FBdEM7QUFBQSxrQ0FDSDtBQUFJLHFCQUFTLEVBQUUsVUFBZjtBQUFBLHNCQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERyxlQUVIO0FBQUsscUJBQVMsRUFBRSx3QkFBaEI7QUFBQSxzRUFDOENBLGVBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRyxlQUtIO0FBQUsscUJBQVMsRUFBRSxVQUFoQjtBQUFBLHNCQUNLQyxNQUFNLENBQUNGLEdBQVAsQ0FBVyxVQUFDRyxDQUFELEVBQVlDLENBQVo7QUFBQSxrQ0FBMEI7QUFBSyx5QkFBUyxFQUFFLEVBQWhCO0FBQUEsZ0NBQ0lELENBREo7QUFBQSxpQkFDTEEsQ0FBQyxHQUFHQyxDQURDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTFCO0FBQUEsYUFBWDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEc7QUFBQSxXQUFVSCxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFVSCxPQWJEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQTRCSDtLQW5DdUJSLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3NzZmFicmljLW1vZHVsZXMvWy4uLnBhdGhdLmE5YzQ4NTY5YTYyNTQ0ZmMyYWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzZmFicmljIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuaW1wb3J0IElubmVyTWVudSBmcm9tIFwiQC9jb21wb25lbnRzL0lubmVyTWVudVwiO1xyXG5cclxuaW50ZXJmYWNlIElEb2NzQ2xhc3NOYW1lcyB7XHJcbiAgICBtb2R1bGU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3NDbGFzc05hbWVzKHByb3BzOiBJRG9jc0NsYXNzTmFtZXMpIHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZSx9ICAgICAgICA9IHByb3BzO1xyXG4gICAgY29uc3QgbW9kdWxlQXR0cmlidXRlcyA9IGNzc2ZhYnJpYy5nZXRNb2R1bGVEb2NzQXR0cmlidXRlcyhtb2R1bGUpO1xyXG4gICAgLy8gY29uc3QgbW9kdWxlQXR0cmlidXRlcyA9IGNzc2ZhYnJpYy5cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXYgZ3JpZC1pdGVtcy1lbmQgcGFkLXItOFwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widHh0LTgwMCBib3JkZXItYiBkc3AtaW5saW5lXCJ9PlxyXG4gICAgICAgICAgICAgICAgY3NzZmFicmljIGNsYXNzbmFtZXNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInR4dC1ncmF5LTMwMCBtYXJnLWItNFwifT5cclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlZCBjbGFzc25hbWVzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZC04XCJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVBdHRyaWJ1dGVzKS5tYXAoKG1vZHVsZUF0dHJpYnV0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3T3V0ID0gY3NzZmFicmljLmdldE1vZHVsZUNsYXNzTmFtZXMuZ2V0TW9kdWxlVGFnQ2xhc3NOYW1lcyh7bW9kdWxlLCBtb2R1bGVBdHRyaWJ1dGV9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e21vZHVsZUF0dHJpYnV0ZX0gY2xhc3NOYW1lPXtcIiBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1wicGFkLXRiLTJcIn0+e21vZHVsZUF0dHJpYnV0ZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LWdyYXktNDAwIHBhZC10Yi0yXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AtIGNzc2ZhYnJpYyBleHByZXNzaW9ucyBsaXN0IGZvciAgY3NzICR7bW9kdWxlQXR0cmlidXRlfSBydWxlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLWItOFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdPdXQubWFwKCh4OiBzdHJpbmcsIHk6IG51bWJlcikgPT4gPGRpdiBjbGFzc05hbWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt4ICsgeX0+Lnt4fTwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9