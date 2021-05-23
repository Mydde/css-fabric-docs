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
    tagProperties = cssfabric__WEBPACK_IMPORTED_MODULE_7___default().getModuleMetaData(staticModule); // init(path);
  }

  function init(path) {
    // console.log(router)
    var module = path[0];
    var action = path[1]; // setActiveModule(module);
    // setActiveAction(action);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid-v   h-full content-start overflow-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [staticModule, " ", staticAction, " cssfabric"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full w-sm-main theme-bg-primary-light",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.HeaderSiteTitle, {
        title: "cssfabric",
        title_tag: "just.fabric.it",
        description: "cssFabric is an alpha cssFabric"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " dsp-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-sm-block",
          children: "sm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-md-block dsp-none ",
          children: "md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-lg-block dsp-none",
          children: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xl-block dsp-none",
          children: "xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxl-block dsp-none",
          children: "xxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxxl-block dsp-none",
          children: "xxxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
              lineNumber: 83,
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
                      lineNumber: 89,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 41
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 37
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Components"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "grid-main pad-all-4 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.Header, {
          title: "." + tagProperties.title,
          tag: "fabric.css." + tagProperties.title,
          description: tagProperties.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid-xl-v grid-h marg-t-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-t-4 marg-lg-l-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InnerMenu__WEBPACK_IMPORTED_MODULE_10__.default, {
              module: staticModule
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pad-l-8 grid-main",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_8__.SubHeader, {
                title: staticModule + '.' + staticAction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [staticModule && !staticAction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_3__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 67
              }, _this), staticModule && staticAction === 'docs' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_3__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 79
              }, _this), staticModule && staticAction === 'classnames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 34
              }, _this), staticModule && staticAction === 'demo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_5__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 79
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS50c3giXSwibmFtZXMiOlsiTW9kdWxlUGF0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY3NzZmFicmljTW9kdWxlTGlzdCIsInBhdGgiLCJxdWVyeSIsImxpbmtzIiwiT2JqZWN0Iiwia2V5cyIsIm1vZHVsZVRhZyIsIkR5bmFtaWNDb21wb25lbnQiLCJ0YWdQcm9wZXJ0aWVzIiwic3RhdGljTW9kdWxlIiwic3RhdGljQWN0aW9uIiwiY29uZl9jc3NmYWJyaWMiLCJpbml0IiwibW9kdWxlIiwiYWN0aW9uIiwidmFsdWVzIiwibWFwIiwia2V5IiwiaW5kZXgiLCJmYWJyaWNOYXZpZ2F0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBNkI7QUFBQTs7QUFFNUMsTUFBTUMsTUFBTSxHQUE0QkMsc0RBQVMsRUFBakQ7QUFGNEMsTUFJckNDLG1CQUpxQyxHQUlkSCxLQUpjLENBSXJDRyxtQkFKcUM7QUFBQSxNQU1yQ0MsSUFOcUMsR0FNcEJILE1BQU0sQ0FBQ0ksS0FOYSxDQU1yQ0QsSUFOcUM7QUFPNUMsTUFBTUUsS0FBZSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsbUJBQVosQ0FBeEI7QUFFQSxNQUFJTSxTQUFKO0FBQ0EsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxhQUFrQyxHQUFHLEVBQXpDO0FBRUEsTUFBSUMsWUFBb0IsR0FBRyxFQUEzQjtBQUNBLE1BQUlDLFlBQW9CLEdBQUcsRUFBM0I7O0FBR0EsTUFBSVQsSUFBSixFQUFVO0FBRU5RLGdCQUFZLEdBQUdSLElB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O0FBQUE7QUFBQTtBQUFBLGVBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9FSCxDQXhHRDs7R0FBTWIsVTtVQUVzQ0csa0Q7OztLQUZ0Q0gsVTs7QUF1SU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3NzZmFicmljLW1vZHVsZXMvWy4uLnBhdGhdLjk2MWE0MmQ0ZmFkMGE4MDM4MjcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gICAgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rICAgICAgICAgICBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBkeW5hbWljICAgICAgICBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBEb2NzICAgICAgICAgICBmcm9tIFwiQC9jb21wb25lbnRzL0RvY3MvRG9jc1wiO1xyXG5pbXBvcnQgRG9jc0NsYXNzTmFtZXMgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NDbGFzc05hbWVzXCI7XHJcbmltcG9ydCBEb2NzRGVtbyAgICAgICBmcm9tIFwiQC9jb21wb25lbnRzL0RvY3MvRG9jc0RlbW9cIjtcclxuaW1wb3J0IEhlYWQgICAgICAgICAgIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGNvbmZfY3NzZmFicmljIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBIZWFkZXIsXHJcbiAgICBIZWFkZXJTaXRlVGl0bGUsIFN1YkhlYWRlcixcclxufSAgICAgICAgICAgICAgICBmcm9tIFwic3JjL2NvbXBvbmVudHMvSGVhZGVyc1wiO1xyXG5pbXBvcnQgUmVhY3QgICAgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5uZXJNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvSW5uZXJNZW51XCI7XHJcblxyXG5pbXBvcnQgdXRpbHMsIHtmYWJyaWNOYXZpZ2F0aW9ufSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElNb2R1bGVQYXRoUHJvcHMge1xyXG4gICAgY3NzZmFicmljTW9kdWxlTGlzdDogUmVjb3JkPHN0cmluZywgYW55PlxyXG59XHJcblxyXG5jb25zdCBNb2R1bGVQYXRoID0gKHByb3BzOiBJTW9kdWxlUGF0aFByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciAgICAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VSb3V0ZXIoKTsgXHJcbiAgICBcclxuICAgIGNvbnN0IHtjc3NmYWJyaWNNb2R1bGVMaXN0fSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBjb25zdCB7cGF0aH0gICAgICAgICAgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBsaW5rczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhjc3NmYWJyaWNNb2R1bGVMaXN0KVxyXG4gICAgXHJcbiAgICBsZXQgbW9kdWxlVGFnO1xyXG4gICAgbGV0IER5bmFtaWNDb21wb25lbnQ7XHJcbiAgICBsZXQgdGFnUHJvcGVydGllczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG4gICAgXHJcbiAgICBsZXQgc3RhdGljTW9kdWxlOiBzdHJpbmcgPSAnJztcclxuICAgIGxldCBzdGF0aWNBY3Rpb246IHN0cmluZyA9ICcnO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RhdGljTW9kdWxlID0gcGF0aFswXTtcclxuICAgICAgICBzdGF0aWNBY3Rpb24gPSBwYXRoWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhZ1Byb3BlcnRpZXMgPSBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVNZXRhRGF0YShzdGF0aWNNb2R1bGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGluaXQocGF0aCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGluaXQocGF0aDogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gcGF0aFswXTtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBwYXRoWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldEFjdGl2ZU1vZHVsZShtb2R1bGUpO1xyXG4gICAgICAgIC8vIHNldEFjdGl2ZUFjdGlvbihhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtdiAgIGgtZnVsbCBjb250ZW50LXN0YXJ0IG92ZXJmbG93LWF1dG9cIn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntzdGF0aWNNb2R1bGV9IHtzdGF0aWNBY3Rpb259IGNzc2ZhYnJpYzwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widy1mdWxsIHctc20tbWFpbiB0aGVtZS1iZy1wcmltYXJ5LWxpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclNpdGVUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiY3NzZmFicmljXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZV90YWc9e1wianVzdC5mYWJyaWMuaXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJjc3NGYWJyaWMgaXMgYW4gYWxwaGEgY3NzRmFicmljXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiIGRzcC1ub25lXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC1zbS1ibG9ja1wifT5zbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1tZC1ibG9jayBkc3Atbm9uZSBcIn0+bWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3AtbGctYmxvY2sgZHNwLW5vbmVcIn0+bGc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteGwtYmxvY2sgZHNwLW5vbmVcIn0+eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteHhsLWJsb2NrIGRzcC1ub25lXCJ9Pnh4bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC14eHhsLWJsb2NrIGRzcC1ub25lXCJ9Pnh4eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1sZy12IGdyaWQtaCAgaC1mdWxsIFwifT5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e1widy1sZy1mdWxsIHctMTZcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e1wicGFkLWFsbC04IHBhZC1sZy0yXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcIm1lbnUtbGctaCBtZW51LXZcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3NzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKGxpbmtzKS5tYXAoKGtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9e1wibWVudS1pdGVtXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZmFicmljTmF2aWdhdGlvbi5nZXRNb2R1bGVEZW1vUGFnZShrZXkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake2tleX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXBvbmVudHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJncmlkLW1haW4gcGFkLWFsbC00IFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIi5cIiArIHRhZ1Byb3BlcnRpZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz17XCJmYWJyaWMuY3NzLlwiICsgdGFnUHJvcGVydGllcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RhZ1Byb3BlcnRpZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXhsLXYgZ3JpZC1oIG1hcmctdC00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLXQtNCBtYXJnLWxnLWwtOFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lck1lbnUgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZC1sLTggZ3JpZC1tYWluXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGVyIHRpdGxlPXtzdGF0aWNNb2R1bGUgKyAnLicgKyBzdGF0aWNBY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmICFzdGF0aWNBY3Rpb24gJiYgPERvY3MgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZG9jcycpICYmIDxEb2NzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2NsYXNzbmFtZXMnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jc0NsYXNzTmFtZXMgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZGVtbycpICYmIDxEb2NzRGVtbyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBsaW5rczogYW55ICAgICAgPSBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KClcclxuICAgIGNvbnN0IG91dFBhdGhzOiBhbnlbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBcclxuICAgIE9iamVjdC5rZXlzKGxpbmtzKS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgaWYgKGxpbmtzW2xpbmtdPy5fZG9jcz8uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2RvY3MnXX19KTtcclxuICAgICAgICAgICAgb3V0UGF0aHMucHVzaCh7cGFyYW1zOiB7cGF0aDogW2xpbmssICdkZW1vJ119fSk7XHJcbiAgICAgICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnY2xhc3NuYW1lcyddfX0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGluaywgbGlua3NbbGlua10/Ll9kb2NzPy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtwYXRoczogb3V0UGF0aHMsIGZhbGxiYWNrOiBmYWxzZX1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNzc2ZhYnJpY01vZHVsZUxpc3Q6IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZUxpc3QoKVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVBhdGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=