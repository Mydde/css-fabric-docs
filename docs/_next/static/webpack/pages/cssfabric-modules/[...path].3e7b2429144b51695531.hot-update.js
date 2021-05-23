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
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
            children: JSON.stringify(moduleDebug, null, "\t")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this3), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-l-8 txt-gray-400 pad-tb-2",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jcy9Eb2NzRGVtby50c3giXSwibmFtZXMiOlsiRG9jc0RlbW8iLCJwcm9wcyIsIm1vZHVsZSIsIm1vZHVsZUF0dHJpYnV0ZXMiLCJjc3NmYWJyaWMiLCJvdXQiLCJwcm94eURzcCIsInZhbCIsIm1vZHVsZUF0dHJpYnV0ZSIsIm1vZHVsZVJ1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJEc3BBcnJheSIsImRzcE9iamVjdCIsIm1hcCIsImNsYXNzTmFtZSIsInkiLCJPYmplY3QiLCJrZXlzIiwibW9kdWxlRGVidWciLCJKU09OIiwic3RyaW5naWZ5IiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQTBDO0FBQUE7O0FBQUEsTUFFOUNDLE1BRjhDLEdBRTVCRCxLQUY0QixDQUU5Q0MsTUFGOEM7QUFHckQsTUFBTUMsZ0JBQWdCLEdBQUdDLHdFQUFBLENBQWtDRixNQUFsQyxDQUF6QjtBQUVBLE1BQUlHLEdBQUo7O0FBRUEsV0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBNEJDLGVBQTVCLEVBQWtGO0FBQUEsUUFBaENDLFVBQWdDLHVFQUFYLFNBQVc7O0FBQzlFLFFBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSixHQUFkLENBQUosRUFBd0I7QUFDcEIsYUFBT0ssUUFBUSxDQUFDTCxHQUFELEVBQU1DLGVBQU4sRUFBdUJDLFVBQXZCLENBQWY7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPSSxTQUFTLENBQUNOLEdBQUQsRUFBTUMsZUFBTixFQUF1QkMsVUFBdkIsQ0FBaEI7QUFDSDtBQUNKOztBQUVELFdBQVNHLFFBQVQsQ0FBa0JMLEdBQWxCLEVBQThCQyxlQUE5QixFQUFvREMsVUFBcEQsRUFBcUU7QUFBQTs7QUFDakUsd0JBQU87QUFBSyxlQUFTLEVBQUUsVUFBaEI7QUFBQSw4QkFDSDtB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QUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFxQ1M7S0FoRldSLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3NzZmFicmljLW1vZHVsZXMvWy4uLnBhdGhdLjNlN2IyNDI5MTQ0YjUxNjk1NTMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzZmFicmljICAgZnJvbSBcImNzc2ZhYnJpY1wiO1xyXG5pbXBvcnQgUmVhY3QgICAgICAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZW1vRWxlbWVudCBmcm9tIFwiQC9jb21wb25lbnRzL0RlbW9FbGVtZW50cy9EZW1vRWxlbWVudFwiO1xyXG5pbXBvcnQgSW5uZXJNZW51ICAgZnJvbSBcIkAvY29tcG9uZW50cy9Jbm5lck1lbnVcIjtcclxuXHJcbmludGVyZmFjZSBJRG9jc0NsYXNzTmFtZXMge1xyXG4gICAgbW9kdWxlOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NzRGVtbyhwcm9wczogSURvY3NDbGFzc05hbWVzKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHttb2R1bGUsfSAgICAgICAgPSBwcm9wcztcclxuICAgIGNvbnN0IG1vZHVsZUF0dHJpYnV0ZXMgPSBjc3NmYWJyaWMuZ2V0TW9kdWxlRG9jc0F0dHJpYnV0ZXMobW9kdWxlKTtcclxuICAgIFxyXG4gICAgbGV0IG91dDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gcHJveHlEc3AodmFsOiBhbnksIG1vZHVsZUF0dHJpYnV0ZTogYW55LCBtb2R1bGVSdWxlOiBzdHJpbmcgPSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERzcEFycmF5KHZhbCwgbW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkc3BPYmplY3QodmFsLCBtb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBEc3BBcnJheSh2YWw6IGFueVtdLCBtb2R1bGVBdHRyaWJ1dGU6IGFueSwgbW9kdWxlUnVsZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctYi0yXCJ9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wibWFyZy1iLTIgcGFkLXRiXCJ9PmNzc2ZhYnJpYy57bW9kdWxlUnVsZX0gOiB7bW9kdWxlQXR0cmlidXRlfSBjbGFzc25hbWVzIGZvciBjc3NmYWJyaWM8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtaCBncmlkLXdyYXAgY2VsbC1zcGFjaW5nXCJ9PlxyXG4gICAgICAgICAgICAgICAge3ZhbC5tYXAoKGNsYXNzTmFtZSwgeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RGVtb0VsZW1lbnQgbW9kdWxlQXR0cmlidXRlPXttb2R1bGVBdHRyaWJ1dGV9IG1vZHVsZVJ1bGU9e21vZHVsZVJ1bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NGYWJyaWNDbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt7bW9kdWxlQXR0cmlidXRlfV0gLntjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EZW1vRWxlbWVudD5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZHNwT2JqZWN0KHZhbDogUmVjb3JkPHN0cmluZywgYW55PiwgbW9kdWxlQXR0cmlidXRlOiBhbnksIG1vZHVsZVJ1bGU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXModmFsKS5tYXAoKG1vZHVsZVJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e1wicGFkLTIgcGFkLXItOCBkc3AtYmxvY2staW5saW5lIGJvcmRlci1iXCJ9Pnttb2R1bGVSdWxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFyZy1sLTRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm94eURzcCh2YWxbbW9kdWxlUnVsZV0sIG1vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtcImdyaWQtdiBncmlkLWl0ZW1zLWVuZCBwYWQtci04XCJ9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0eHQtODAwIGJvcmRlci1iIGRzcC1pbmxpbmVcIn0+XHJcbiAgICAgICAgIGNzc2ZhYnJpYyBjbGFzc25hbWVzXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0eHQtZ3JheS0zMDAgbWFyZy1iLTRcIn0+XHJcbiAgICAgICAgIGdlbmVyYXRlZCBleGFtcGxlc1xyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFkLThcIn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZUF0dHJpYnV0ZXMpLm1hcCgobW9kdWxlQXR0cmlidXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVEZWJ1ZyA9IGNzc2ZhYnJpYy5nZXRNb2R1bGVUYWdEZWJ1Zyh7bW9kdWxlLCBtb2R1bGVBdHRyaWJ1dGV9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e21vZHVsZUF0dHJpYnV0ZX0gY2xhc3NOYW1lPXtcInctc20tZnVsbFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17XCJib3JkZXItbC00IHBhZC1sLTRcIn0+bW9kdWxlIHttb2R1bGVBdHRyaWJ1dGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkobW9kdWxlRGVidWcsbnVsbCxcIlxcdFwiKX08L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFyZy1sLTggdHh0LWdyYXktNDAwIHBhZC10Yi0yXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AtIGNzc2ZhYnJpYyBleHByZXNzaW9ucyBsaXN0IGZvciAgY3NzICR7bW9kdWxlQXR0cmlidXRlfSBydWxlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLWItOCBtYXJnLWwtOFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhtb2R1bGVEZWJ1ZykubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17XCJcIn0+LSB7dGFnfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnIG1hcmctbC04J30+e3Byb3h5RHNwKG1vZHVsZURlYnVnW3RhZ10sIG1vZHVsZUF0dHJpYnV0ZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qe3Byb3h5RHNwKG1vZHVsZURlYnVnLCBtb2R1bGVBdHRyaWJ1dGUpfSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=