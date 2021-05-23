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

  console.log(cssfabric__WEBPACK_IMPORTED_MODULE_7___default().getActiveLinks());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid-v   h-full content-start overflow-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [staticModule, " ", staticAction, " cssfabric"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full w-sm-main theme-bg-primary-light",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.HeaderSiteTitle, {
        title: "cssfabric",
        title_tag: "just.fabric.it",
        description: "cssFabric is an alpha cssFabric"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " dsp-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-sm-block",
          children: "sm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-md-block dsp-none ",
          children: "md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-lg-block dsp-none",
          children: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xl-block dsp-none",
          children: "xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxl-block dsp-none",
          children: "xxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxxl-block dsp-none",
          children: "xxxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
              lineNumber: 75,
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
                      lineNumber: 81,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 41
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 37
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Components"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "grid-main pad-all-4 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.Header, {
          title: "." + tagProperties.title,
          tag: "fabric.css." + tagProperties.title,
          description: tagProperties.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid-xl-v grid-h marg-t-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-t-4 marg-lg-l-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InnerMenu__WEBPACK_IMPORTED_MODULE_10__.default, {
              module: staticModule
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pad-l-8 grid-main",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.SubHeader, {
                title: staticModule + '.' + staticAction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [staticModule && !staticAction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_3__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 67
              }, _this), staticModule && staticAction === 'docs' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_3__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 79
              }, _this), staticModule && staticAction === 'classnames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 34
              }, _this), staticModule && staticAction === 'demo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_5__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 79
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS50c3giXSwibmFtZXMiOlsiTW9kdWxlUGF0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY3NzZmFicmljTW9kdWxlTGlzdCIsInBhdGgiLCJxdWVyeSIsImxpbmtzIiwiT2JqZWN0Iiwia2V5cyIsIm1vZHVsZVRhZyIsIkR5bmFtaWNDb21wb25lbnQiLCJ0YWdQcm9wZXJ0aWVzIiwic3RhdGljTW9kdWxlIiwic3RhdGljQWN0aW9uIiwiY29uZl9jc3NmYWJyaWMiLCJjb25zb2xlIiwibG9nIiwidmFsdWVzIiwibWFwIiwia2V5IiwiaW5kZXgiLCJmYWJyaWNOYXZpZ2F0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBNkI7QUFBQTs7QUFFNUMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUY0QyxNQUlyQ0MsbUJBSnFDLEdBSWRILEtBSmMsQ0FJckNHLG1CQUpxQztBQUFBLE1BTXJDQyxJQU5xQyxHQU1wQkgsTUFBTSxDQUFDSSxLQU5hLENBTXJDRCxJQU5xQztBQU81QyxNQUFNRSxLQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxtQkFBWixDQUF4QjtBQUVBLE1BQUlNLFNBQUo7QUFDQSxNQUFJQyxnQkFBSjtBQUNBLE1BQUlDLGFBQWtDLEdBQUcsRUFBekM7QUFFQSxNQUFJQyxZQUFvQixHQUFHLEVBQTNCO0FBQ0EsTUFBSUMsWUFBb0IsR0FBRyxFQUEzQjs7QUFHQSxNQUFJVCxJQUFKLEVBQVU7QUFFTlEsZ0JBQVksR0FBR1IsSUFBSSxDQUFDLENB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LCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS4wNzJjZDQ3ZTI1MjUzMTNiNTlmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9ICAgIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayAgICAgICAgICAgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZHluYW1pYyAgICAgICAgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgRG9jcyAgICAgICAgICAgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NcIjtcclxuaW1wb3J0IERvY3NDbGFzc05hbWVzIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzQ2xhc3NOYW1lc1wiO1xyXG5pbXBvcnQgRG9jc0RlbW8gICAgICAgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NEZW1vXCI7XHJcbmltcG9ydCBIZWFkICAgICAgICAgICBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBjb25mX2Nzc2ZhYnJpYyBmcm9tIFwiY3NzZmFicmljXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSGVhZGVyLFxyXG4gICAgSGVhZGVyU2l0ZVRpdGxlLCBTdWJIZWFkZXIsXHJcbn0gICAgICAgICAgICAgICAgZnJvbSBcInNyYy9jb21wb25lbnRzL0hlYWRlcnNcIjtcclxuaW1wb3J0IFJlYWN0ICAgICBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElubmVyTWVudSBmcm9tIFwiQC9jb21wb25lbnRzL0lubmVyTWVudVwiO1xyXG5cclxuaW1wb3J0IHV0aWxzLCB7ZmFicmljTmF2aWdhdGlvbn0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBJTW9kdWxlUGF0aFByb3BzIHtcclxuICAgIGNzc2ZhYnJpY01vZHVsZUxpc3Q6IFJlY29yZDxzdHJpbmcsIGFueT5cclxufVxyXG5cclxuY29uc3QgTW9kdWxlUGF0aCA9IChwcm9wczogSU1vZHVsZVBhdGhQcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgY29uc3Qge2Nzc2ZhYnJpY01vZHVsZUxpc3R9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGNvbnN0IHtwYXRofSAgICAgICAgICA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IGxpbmtzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGNzc2ZhYnJpY01vZHVsZUxpc3QpXHJcbiAgICBcclxuICAgIGxldCBtb2R1bGVUYWc7XHJcbiAgICBsZXQgRHluYW1pY0NvbXBvbmVudDtcclxuICAgIGxldCB0YWdQcm9wZXJ0aWVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICBcclxuICAgIGxldCBzdGF0aWNNb2R1bGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IHN0YXRpY0FjdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgICBcclxuICAgICAgICBzdGF0aWNNb2R1bGUgPSBwYXRoWzBdO1xyXG4gICAgICAgIHN0YXRpY0FjdGlvbiA9IHBhdGhbMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFnUHJvcGVydGllcyA9IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZU1ldGFEYXRhKHN0YXRpY01vZHVsZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGNvbmZfY3NzZmFicmljLmdldEFjdGl2ZUxpbmtzKCkpXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC12ICAgaC1mdWxsIGNvbnRlbnQtc3RhcnQgb3ZlcmZsb3ctYXV0b1wifT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3N0YXRpY01vZHVsZX0ge3N0YXRpY0FjdGlvbn0gY3NzZmFicmljPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LWZ1bGwgdy1zbS1tYWluIHRoZW1lLWJnLXByaW1hcnktbGlnaHRcIn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2l0ZVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJjc3NmYWJyaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlX3RhZz17XCJqdXN0LmZhYnJpYy5pdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcImNzc0ZhYnJpYyBpcyBhbiBhbHBoYSBjc3NGYWJyaWNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCIgZHNwLW5vbmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXNtLWJsb2NrXCJ9PnNtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW1kLWJsb2NrIGRzcC1ub25lIFwifT5tZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1sZy1ibG9jayBkc3Atbm9uZVwifT5sZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC14bC1ibG9jayBkc3Atbm9uZVwifT54bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC14eGwtYmxvY2sgZHNwLW5vbmVcIn0+eHhsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXh4eGwtYmxvY2sgZHNwLW5vbmVcIn0+eHh4bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLWxnLXYgZ3JpZC1oICBoLWZ1bGwgXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17XCJ3LWxnLWZ1bGwgdy0xNlwifT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17XCJwYWQtYWxsLTggcGFkLWxnLTJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wibWVudS1sZy1oIG1lbnUtdlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Dc3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMobGlua3MpLm1hcCgoa2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT17XCJtZW51LWl0ZW1cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtmYWJyaWNOYXZpZ2F0aW9uLmdldE1vZHVsZURlbW9QYWdlKGtleSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7a2V5fWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcG9uZW50czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtcImdyaWQtbWFpbiBwYWQtYWxsLTQgXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiLlwiICsgdGFnUHJvcGVydGllcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnPXtcImZhYnJpYy5jc3MuXCIgKyB0YWdQcm9wZXJ0aWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGFnUHJvcGVydGllcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQteGwtdiBncmlkLWggbWFyZy10LTRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctdC00IG1hcmctbGctbC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyTWVudSBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFkLWwtOCBncmlkLW1haW5cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkZXIgdGl0bGU9e3N0YXRpY01vZHVsZSArICcuJyArIHN0YXRpY0FjdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgIXN0YXRpY0FjdGlvbiAmJiA8RG9jcyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmIChzdGF0aWNBY3Rpb24gPT09ICdkb2NzJykgJiYgPERvY3MgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnY2xhc3NuYW1lcycpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2NzQ2xhc3NOYW1lcyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmIChzdGF0aWNBY3Rpb24gPT09ICdkZW1vJykgJiYgPERvY3NEZW1vIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGxpbmtzOiBhbnkgICAgICA9IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZUxpc3QoKS8vIC5maWx0ZXIoKGxpbms6IHN0cmluZykgPT4gbGlua3NbbGlua10/Ll9kb2NzPy5hdHRyaWJ1dGVzKVxyXG4gICAgY29uc3Qgb3V0UGF0aHM6IGFueVtdID0gW107XHJcbiAgICBcclxuICAgIFxyXG4gICAgT2JqZWN0LmtleXMobGlua3MpLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnZG9jcyddfX0pO1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnZGVtbyddfX0pO1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnY2xhc3NuYW1lcyddfX0pO1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7cGF0aHM6IG91dFBhdGhzLCBmYWxsYmFjazogZmFsc2V9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjc3NmYWJyaWNNb2R1bGVMaXN0OiBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KClcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVQYXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9