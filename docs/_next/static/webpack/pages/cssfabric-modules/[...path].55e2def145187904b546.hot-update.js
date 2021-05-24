self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/components/Docs/DocsDemo.tsx":
/*!******************************************!*\
  !*** ./src/components/Docs/DocsDemo.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DocsDemo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DemoElements_DemoElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DemoElements/DemoElement */ "./src/components/DemoElements/DemoElement.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\components\\Docs\\DocsDemo.tsx";



function DocsDemo(props) {
  var _this3 = this;

  var module = props.module;
  var moduleAttributes = cssfabric__WEBPACK_IMPORTED_MODULE_1___default().getModuleDocsAttributes(module);
  var out;

  function proxyDsp(val, moduleAttribute) {
    var moduleRule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "default";

    if (Array.isArray(val)) {
      return DspArray(val, moduleAttribute, moduleRule);
    } else {
      return dspObject(val, moduleAttribute, moduleRule);
    }
  }

  function DspArray(val, moduleAttribute, moduleRule) {
    var _this = this;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "marg-b-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "marg-b-2 pad-tb",
        children: ["cssfabric.", moduleRule, " : ", moduleAttribute, " classnames for cssfabric"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid-h grid-wrap cell-spacing",
        children: val.map(function (className, y) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DemoElements_DemoElement__WEBPACK_IMPORTED_MODULE_3__.default, {
            moduleAttribute: moduleAttribute,
            moduleRule: moduleRule,
            cssFabricClassName: className,
            children: ["[", moduleAttribute, "] .", className]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 28
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }, this);
  }

  function dspObject(val, moduleAttribute, moduleRule) {
    var _this2 = this;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: Object.keys(val).map(function (moduleRule) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            className: "pad-2 pad-r-8 dsp-block-inline border-b",
            children: moduleRule
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-l-4",
            children: proxyDsp(val[moduleRule], moduleAttribute, moduleRule)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 24
        }, _this2);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pad-8",
      children: Object.keys(moduleAttributes).map(function (moduleAttribute) {
        var moduleDebug = cssfabric__WEBPACK_IMPORTED_MODULE_1___default().getModuleTagDebug({
          module: module,
          moduleAttribute: moduleAttribute
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-sm-full",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "border-l-4 pad-l-4",
            children: ["module ", moduleAttribute]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-l-8 text-gray-400 pad-tb-2",
            children: "- cssfabric expressions list for  css ".concat(moduleAttribute, " rules")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-b-8 marg-l-8",
            children: Object.keys(moduleDebug).map(function (tag) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  className: "",
                  children: ["- ", tag]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: ' marg-l-8',
                  children: proxyDsp(moduleDebug[tag], moduleAttribute)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, _this3)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 40
              }, _this3);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this3)]
        }, moduleAttribute, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 28
        }, _this3);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 12
  }, this);
}
_c = DocsDemo;

var _c;

$RefreshReg$(_c, "DocsDemo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jcy9Eb2NzRGVtby50c3giXSwibmFtZXMiOlsiRG9jc0RlbW8iLCJwcm9wcyIsIm1vZHVsZSIsIm1vZHVsZUF0dHJpYnV0ZXMiLCJjc3NmYWJyaWMiLCJvdXQiLCJwcm94eURzcCIsInZhbCIsIm1vZHVsZUF0dHJpYnV0ZSIsIm1vZHVsZVJ1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJEc3BBcnJheSIsImRzcE9iamVjdCIsIm1hcCIsImNsYXNzTmFtZSIsInkiLCJPYmplY3QiLCJrZXlzIiwibW9kdWxlRGVidWciLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBMEM7QUFBQTs7QUFBQSxNQUU5Q0MsTUFGOEMsR0FFNUJELEtBRjRCLENBRTlDQyxNQUY4QztBQUdyRCxNQUFNQyxnQkFBZ0IsR0FBR0Msd0VBQUEsQ0FBa0NGLE1BQWxDLENBQXpCO0FBRUEsTUFBSUcsR0FBSjs7QUFFQSxXQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUE0QkMsZUFBNUIsRUFBa0Y7QUFBQSxRQUFoQ0MsVUFBZ0MsdUVBQVgsU0FBVzs7QUFDOUUsUUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEdBQWQsQ0FBSixFQUF3QjtBQUNwQixhQUFPSyxRQUFRLENBQUNMLEdBQUQsRUFBTUMsZUFBTixFQUF1QkMsVUFBdkIsQ0FBZjtBQUNILEtBRkQsTUFFTztBQUNILGFBQU9JLFNBQVMsQ0FBQ04sR0FBRCxFQUFNQyxlQUFOLEVBQXVCQyxVQUF2QixDQUFoQjtBQUNIO0FBQ0o7O0FBRUQsV0FBU0csUUFBVCxDQUFrQkwsR0FBbEIsRUFBOEJDLGVBQTlCLEVBQW9EQyxVQUFwRCxFQUFxRTtBQUFBOztBQUNqRSx3QkFBTztBQUFLLGVBQVMsRUFBRSxVQUFoQjtBQUFBLDhCQUNIO0FBQUcsaUJBQVMsRUFBRSxpQkFB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Li5wYXRoXS41NWUyZGVmMTQ1MTg3OTA0YjU0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzc2ZhYnJpYyAgIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuaW1wb3J0IFJlYWN0ICAgICAgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGVtb0VsZW1lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9EZW1vRWxlbWVudHMvRGVtb0VsZW1lbnRcIjtcclxuaW1wb3J0IElubmVyTWVudSAgIGZyb20gXCJAL2NvbXBvbmVudHMvSW5uZXJNZW51XCI7XHJcblxyXG5pbnRlcmZhY2UgSURvY3NDbGFzc05hbWVzIHtcclxuICAgIG1vZHVsZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jc0RlbW8ocHJvcHM6IElEb2NzQ2xhc3NOYW1lcykge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlLH0gICAgICAgID0gcHJvcHM7XHJcbiAgICBjb25zdCBtb2R1bGVBdHRyaWJ1dGVzID0gY3NzZmFicmljLmdldE1vZHVsZURvY3NBdHRyaWJ1dGVzKG1vZHVsZSk7XHJcbiAgICBcclxuICAgIGxldCBvdXQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHByb3h5RHNwKHZhbDogYW55LCBtb2R1bGVBdHRyaWJ1dGU6IGFueSwgbW9kdWxlUnVsZTogc3RyaW5nID0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEc3BBcnJheSh2YWwsIG1vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZHNwT2JqZWN0KHZhbCwgbW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRHNwQXJyYXkodmFsOiBhbnlbXSwgbW9kdWxlQXR0cmlidXRlOiBhbnksIG1vZHVsZVJ1bGU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLWItMlwifT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcIm1hcmctYi0yIHBhZC10YlwifT5jc3NmYWJyaWMue21vZHVsZVJ1bGV9IDoge21vZHVsZUF0dHJpYnV0ZX0gY2xhc3NuYW1lcyBmb3IgY3NzZmFicmljPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLWggZ3JpZC13cmFwIGNlbGwtc3BhY2luZ1wifT5cclxuICAgICAgICAgICAgICAgIHt2YWwubWFwKChjbGFzc05hbWUsIHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERlbW9FbGVtZW50IG1vZHVsZUF0dHJpYnV0ZT17bW9kdWxlQXR0cmlidXRlfSBtb2R1bGVSdWxlPXttb2R1bGVSdWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzRmFicmljQ2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbe21vZHVsZUF0dHJpYnV0ZX1dIC57Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGVtb0VsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGRzcE9iamVjdCh2YWw6IFJlY29yZDxzdHJpbmcsIGFueT4sIG1vZHVsZUF0dHJpYnV0ZTogYW55LCBtb2R1bGVSdWxlOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge09iamVjdC5rZXlzKHZhbCkubWFwKChtb2R1bGVSdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtcInBhZC0yIHBhZC1yLTggZHNwLWJsb2NrLWlubGluZSBib3JkZXItYlwifT57bW9kdWxlUnVsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctbC00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJveHlEc3AodmFsW21vZHVsZVJ1bGVdLCBtb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXYgZ3JpZC1pdGVtcy1lbmQgcGFkLXItOFwifT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widHh0LTgwMCBib3JkZXItYiBkc3AtaW5saW5lXCJ9PlxyXG4gICAgICAgICBjc3NmYWJyaWMgY2xhc3NuYW1lc1xyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widHh0LWdyYXktMzAwIG1hcmctYi00XCJ9PlxyXG4gICAgICAgICBnZW5lcmF0ZWQgZXhhbXBsZXNcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZC04XCJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVBdHRyaWJ1dGVzKS5tYXAoKG1vZHVsZUF0dHJpYnV0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlRGVidWcgPSBjc3NmYWJyaWMuZ2V0TW9kdWxlVGFnRGVidWcoe21vZHVsZSwgbW9kdWxlQXR0cmlidXRlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXttb2R1bGVBdHRyaWJ1dGV9IGNsYXNzTmFtZT17XCJ3LXNtLWZ1bGxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1wiYm9yZGVyLWwtNCBwYWQtbC00XCJ9Pm1vZHVsZSB7bW9kdWxlQXR0cmlidXRlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwcmU+e0pTT04uc3RyaW5naWZ5KG1vZHVsZURlYnVnLG51bGwsXCJcXHRcIil9PC9wcmU+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctbC04IHRleHQtZ3JheS00MDAgcGFkLXRiLTJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YC0gY3NzZmFicmljIGV4cHJlc3Npb25zIGxpc3QgZm9yICBjc3MgJHttb2R1bGVBdHRyaWJ1dGV9IHJ1bGVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctYi04IG1hcmctbC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKG1vZHVsZURlYnVnKS5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtcIlwifT4tIHt0YWd9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eycgbWFyZy1sLTgnfT57cHJveHlEc3AobW9kdWxlRGVidWdbdGFnXSwgbW9kdWxlQXR0cmlidXRlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp7cHJveHlEc3AobW9kdWxlRGVidWcsIG1vZHVsZUF0dHJpYnV0ZSl9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==