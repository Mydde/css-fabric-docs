self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/pages/cssfabric-modules/[...path].tsx":
/*!***************************************************!*\
  !*** ./src/pages/cssfabric-modules/[...path].tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Docs_Docs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Docs/Docs */ "./src/components/Docs/Docs.tsx");
/* harmony import */ var _components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Docs/DocsClassNames */ "./src/components/Docs/DocsClassNames.tsx");
/* harmony import */ var _components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Docs/DocsDemo */ "./src/components/Docs/DocsDemo.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_components_Headers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/Headers */ "./src/components/Headers/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_InnerMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/InnerMenu */ "./src/components/InnerMenu.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\pages\\cssfabric-modules\\[...path].tsx",
    _this = undefined,
    _s = $RefreshSig$();













var ModulePath = function ModulePath(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var cssfabricModuleList = props.cssfabricModuleList;
  var path = router.query.path;
  var links = Object.keys(cssfabricModuleList);
  var moduleTag;
  var DynamicComponent;
  var tagProperties = {};
  var staticModule = '';
  var staticAction = '';

  if (path) {
    staticModule = path[0];
    staticAction = path[1];
    tagProperties = cssfabric__WEBPACK_IMPORTED_MODULE_7___default().getModuleMetaData(staticModule);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid-v   h-full content-start overflow-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [staticModule, " ", staticAction, " cssfabric"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full w-sm-main theme-bg-primary-light",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.HeaderSiteTitle, {
        title: "cssfabric",
        title_tag: "just.fabric.it",
        description: "cssFabric is an alpha cssFabric"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " dsp-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-sm-block",
          children: "sm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-md-block dsp-none ",
          children: "md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-lg-block dsp-none",
          children: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xl-block dsp-none",
          children: "xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxl-block dsp-none",
          children: "xxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxxl-block dsp-none",
          children: "xxxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid-lg-v grid-h  h-full ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: "w-lg-full w-16",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: "pad-all-8 pad-lg-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "menu-lg-h menu-v",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Css"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this), Object.values(links).map(function (key, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "menu-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: _utils_utils__WEBPACK_IMPORTED_MODULE_11__.fabricNavigation.getModuleDemoPage(key),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "".concat(key)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 41
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 37
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Components"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "grid-main pad-all-4 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.Header, {
          title: "." + tagProperties.title,
          tag: "fabric.css." + tagProperties.title,
          description: tagProperties.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid-xl-v grid-h marg-t-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-t-4 marg-lg-l-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InnerMenu__WEBPACK_IMPORTED_MODULE_10__.default, {
              module: staticModule
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pad-l-8 grid-main",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.SubHeader, {
                title: staticModule + '.' + staticAction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [staticModule && !staticAction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_3__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 67
              }, _this), staticModule && staticAction === 'docs' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_3__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 79
              }, _this), staticModule && staticAction === 'classnames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 34
              }, _this), staticModule && staticAction === 'demo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_5__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 79
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, _this);
};

_s(ModulePath, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = ModulePath;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ModulePath);

var _c;

$RefreshReg$(_c, "ModulePath");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS50c3giXSwibmFtZXMiOlsiTW9kdWxlUGF0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY3NzZmFicmljTW9kdWxlTGlzdCIsInBhdGgiLCJxdWVyeSIsImxpbmtzIiwiT2JqZWN0Iiwia2V5cyIsIm1vZHVsZVRhZyIsIkR5bmFtaWNDb21wb25lbnQiLCJ0YWdQcm9wZXJ0aWVzIiwic3RhdGljTW9kdWxlIiwic3RhdGljQWN0aW9uIiwiY29uZl9jc3NmYWJyaWMiLCJ2YWx1ZXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsImZhYnJpY05hdmlnYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUE2QjtBQUFBOztBQUU1QyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRjRDLE1BSXJDQyxtQkFKcUMsR0FJZEgsS0FKYyxDQUlyQ0csbUJBSnFDO0FBQUEsTUFNckNDLElBTnFDLEdBTXBCSCxNQUFNLENBQUNJLEtBTmEsQ0FNckNELElBTnFDO0FBTzVDLE1BQU1FLEtBQWUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlMLG1CQUFaLENBQXhCO0FBRUEsTUFBSU0sU0FBSjtBQUNBLE1BQUlDLGdCQUFKO0FBQ0EsTUFBSUMsYUFBa0MsR0FBRyxFQUF6QztBQUVBLE1BQUlDLFlBQW9CLEdBQUcsRUFBM0I7QUFDQSxNQUFJQyxZQUFvQixHQUFHLEVBQTNCOztBQUdBLE1BQUlULElBQUosRUFBVTtBQUVOUSxnQkFBWSxHQUFHUixJQUFJLENBQUMsQ0FBRCxDQUFuQjtBQUNBUyxn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ZHVsZXMvWy4uLnBhdGhdLmNjMDk5M2Q1MDMyNzk0NTEzMzQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gICAgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rICAgICAgICAgICBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBkeW5hbWljICAgICAgICBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBEb2NzICAgICAgICAgICBmcm9tIFwiQC9jb21wb25lbnRzL0RvY3MvRG9jc1wiO1xyXG5pbXBvcnQgRG9jc0NsYXNzTmFtZXMgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NDbGFzc05hbWVzXCI7XHJcbmltcG9ydCBEb2NzRGVtbyAgICAgICBmcm9tIFwiQC9jb21wb25lbnRzL0RvY3MvRG9jc0RlbW9cIjtcclxuaW1wb3J0IEhlYWQgICAgICAgICAgIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGNvbmZfY3NzZmFicmljIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBIZWFkZXIsXHJcbiAgICBIZWFkZXJTaXRlVGl0bGUsIFN1YkhlYWRlcixcclxufSAgICAgICAgICAgICAgICBmcm9tIFwic3JjL2NvbXBvbmVudHMvSGVhZGVyc1wiO1xyXG5pbXBvcnQgUmVhY3QgICAgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5uZXJNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvSW5uZXJNZW51XCI7XHJcblxyXG5pbXBvcnQgdXRpbHMsIHtmYWJyaWNOYXZpZ2F0aW9ufSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElNb2R1bGVQYXRoUHJvcHMge1xyXG4gICAgY3NzZmFicmljTW9kdWxlTGlzdDogUmVjb3JkPHN0cmluZywgYW55PlxyXG59XHJcblxyXG5jb25zdCBNb2R1bGVQYXRoID0gKHByb3BzOiBJTW9kdWxlUGF0aFByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7Y3NzZmFicmljTW9kdWxlTGlzdH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3Qge3BhdGh9ICAgICAgICAgID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgbGlua3M6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoY3NzZmFicmljTW9kdWxlTGlzdClcclxuICAgIFxyXG4gICAgbGV0IG1vZHVsZVRhZztcclxuICAgIGxldCBEeW5hbWljQ29tcG9uZW50O1xyXG4gICAgbGV0IHRhZ1Byb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIFxyXG4gICAgbGV0IHN0YXRpY01vZHVsZTogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgc3RhdGljQWN0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN0YXRpY01vZHVsZSA9IHBhdGhbMF07XHJcbiAgICAgICAgc3RhdGljQWN0aW9uID0gcGF0aFsxXTtcclxuICAgICAgICBcclxuICAgICAgICB0YWdQcm9wZXJ0aWVzID0gY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTWV0YURhdGEoc3RhdGljTW9kdWxlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtdiAgIGgtZnVsbCBjb250ZW50LXN0YXJ0IG92ZXJmbG93LWF1dG9cIn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntzdGF0aWNNb2R1bGV9IHtzdGF0aWNBY3Rpb259IGNzc2ZhYnJpYzwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widy1mdWxsIHctc20tbWFpbiB0aGVtZS1iZy1wcmltYXJ5LWxpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclNpdGVUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiY3NzZmFicmljXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZV90YWc9e1wianVzdC5mYWJyaWMuaXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJjc3NGYWJyaWMgaXMgYW4gYWxwaGEgY3NzRmFicmljXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiIGRzcC1ub25lXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC1zbS1ibG9ja1wifT5zbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1tZC1ibG9jayBkc3Atbm9uZSBcIn0+bWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3AtbGctYmxvY2sgZHNwLW5vbmVcIn0+bGc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteGwtYmxvY2sgZHNwLW5vbmVcIn0+eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteHhsLWJsb2NrIGRzcC1ub25lXCJ9Pnh4bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC14eHhsLWJsb2NrIGRzcC1ub25lXCJ9Pnh4eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1sZy12IGdyaWQtaCAgaC1mdWxsIFwifT5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e1widy1sZy1mdWxsIHctMTZcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e1wicGFkLWFsbC04IHBhZC1sZy0yXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcIm1lbnUtbGctaCBtZW51LXZcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3NzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKGxpbmtzKS5tYXAoKGtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9e1wibWVudS1pdGVtXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZmFicmljTmF2aWdhdGlvbi5nZXRNb2R1bGVEZW1vUGFnZShrZXkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake2tleX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXBvbmVudHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJncmlkLW1haW4gcGFkLWFsbC00IFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIi5cIiArIHRhZ1Byb3BlcnRpZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz17XCJmYWJyaWMuY3NzLlwiICsgdGFnUHJvcGVydGllcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RhZ1Byb3BlcnRpZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXhsLXYgZ3JpZC1oIG1hcmctdC00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLXQtNCBtYXJnLWxnLWwtOFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lck1lbnUgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZC1sLTggZ3JpZC1tYWluXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGVyIHRpdGxlPXtzdGF0aWNNb2R1bGUgKyAnLicgKyBzdGF0aWNBY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmICFzdGF0aWNBY3Rpb24gJiYgPERvY3MgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZG9jcycpICYmIDxEb2NzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2NsYXNzbmFtZXMnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jc0NsYXNzTmFtZXMgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZGVtbycpICYmIDxEb2NzRGVtbyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBsaW5rczogYW55ICAgICAgPSBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KCkvLyAuZmlsdGVyKChsaW5rOiBzdHJpbmcpID0+IGxpbmtzW2xpbmtdPy5fZG9jcz8uYXR0cmlidXRlcylcclxuICAgIGNvbnN0IG91dFBhdGhzOiBhbnlbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBcclxuICAgIE9iamVjdC5rZXlzKGxpbmtzKS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2RvY3MnXX19KTtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2RlbW8nXX19KTtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2NsYXNzbmFtZXMnXX19KTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge3BhdGhzOiBvdXRQYXRocywgZmFsbGJhY2s6IGZhbHNlfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY3NzZmFicmljTW9kdWxlTGlzdDogY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTGlzdCgpXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlUGF0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==