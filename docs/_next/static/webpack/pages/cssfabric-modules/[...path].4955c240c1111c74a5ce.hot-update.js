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
/* harmony import */ var D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Docs/Docs */ "./src/components/Docs/Docs.tsx");
/* harmony import */ var _components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Docs/DocsClassNames */ "./src/components/Docs/DocsClassNames.tsx");
/* harmony import */ var _components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Docs/DocsDemo */ "./src/components/Docs/DocsDemo.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_components_Headers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Headers */ "./src/components/Headers/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Menu */ "./src/components/Menu.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\pages\\cssfabric-modules\\[...path].tsx",
    _this = undefined,
    _s = $RefreshSig$();













var ModulePath = function ModulePath(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_10___default().useState(),
      _React$useState2 = (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      activeModule = _React$useState2[0],
      setActiveModule = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_10___default().useState(),
      _React$useState4 = (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      activeAction = _React$useState4[0],
      setActiveAction = _React$useState4[1];

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
    tagProperties = cssfabric__WEBPACK_IMPORTED_MODULE_8___default().getModuleMetaData(staticModule); // init(path);
  }

  function init(path) {
    // console.log(router)
    var module = path[0];
    var action = path[1]; // setActiveModule(module);
    // setActiveAction(action);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid-v   h-full content-start overflow-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: [staticModule, " cssfabric"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full w-sm-main theme-bg-primary-light pos-sticky ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.HeaderSiteTitle, {
        title: "cssfabric",
        title_tag: "just.fabric.it",
        description: "Welcome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid-h dsp-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-sm-block",
          children: "sm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-md-block dsp-none ",
          children: "md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-lg-block dsp-none",
          children: "lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xl-block dsp-none",
          children: "xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxl-block dsp-none",
          children: "xxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid-sm-v grid-h  h-full ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: "w-lg-16",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: "pad-all-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "menu-lg-h menu-v",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Css"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this), Object.values(links).map(function (key, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "menu-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: _utils_utils__WEBPACK_IMPORTED_MODULE_12__.fabricNavigation.getModuleDemoPage(key),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "".concat(key)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 41
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 37
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Components"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "grid-main pad-all-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.Header, {
          title: "." + tagProperties.title,
          tag: "fabric.css." + tagProperties.title,
          description: tagProperties.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid-h marg-t-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-t-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_11__.default, {
              module: staticModule
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pad-l-8 grid-main",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.SubHeader, {
                title: staticModule + '.' + staticAction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [staticModule && !staticAction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 67
              }, _this), staticModule && staticAction === 'docs' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 79
              }, _this), staticModule && staticAction === 'classnames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_5__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 34
              }, _this), staticModule && staticAction === 'demo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_6__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 79
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);
};

_s(ModulePath, "414osCIAfY2EIUtH73XFe/8YBHc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS50c3giXSwibmFtZXMiOlsiTW9kdWxlUGF0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJhY3RpdmVNb2R1bGUiLCJzZXRBY3RpdmVNb2R1bGUiLCJhY3RpdmVBY3Rpb24iLCJzZXRBY3RpdmVBY3Rpb24iLCJjc3NmYWJyaWNNb2R1bGVMaXN0IiwicGF0aCIsInF1ZXJ5IiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibW9kdWxlVGFnIiwiRHluYW1pY0NvbXBvbmVudCIsInRhZ1Byb3BlcnRpZXMiLCJzdGF0aWNNb2R1bGUiLCJzdGF0aWNBY3Rpb24iLCJjb25mX2Nzc2ZhYnJpYyIsImluaXQiLCJtb2R1bGUiLCJhY3Rpb24iLCJ2YWx1ZXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsImZhYnJpY05hdmlnYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQTZCO0FBQUE7O0FBRTVDLE1BQU1DLE1BQU0sR0FBNEJDLHNEQUFTLEVBQWpEOztBQUY0Qyx3QkFHSkMsc0RBQUEsRUFISTtBQUFBO0FBQUEsTUFHckNDLFlBSHFDO0FBQUEsTUFHdkJDLGVBSHVCOztBQUFBLHlCQUlKRixzREFBQSxFQUpJO0FBQUE7QUFBQSxNQUlyQ0csWUFKcUM7QUFBQSxNQUl2QkMsZUFKdUI7O0FBQUEsTUFNckNDLG1CQU5xQyxHQU1kUixLQU5jLENBTXJDUSxtQkFOcUM7QUFBQSxNQVFyQ0MsSUFScUMsR0FRcEJSLE1BQU0sQ0FBQ1MsS0FSYSxDQVFyQ0QsSUFScUM7QUFTNUMsTUFB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QUE7QUFBQTtBQUFBO0FBQUEsdUJBTGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtRUgsQ0F6R0Q7O0dBQU1sQixVO1VBRXNDRyxrRDs7O0tBRnRDSCxVOztBQWtJTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jc3NmYWJyaWMtbW9kdWxlcy9bLi4ucGF0aF0uNDk1NWMyNDBjMTExMWM3NGE1Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSAgICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgICAgICAgICAgIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGR5bmFtaWMgICAgICAgIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IERvY3MgICAgICAgICAgIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzXCI7XHJcbmltcG9ydCBEb2NzQ2xhc3NOYW1lcyBmcm9tIFwiQC9jb21wb25lbnRzL0RvY3MvRG9jc0NsYXNzTmFtZXNcIjtcclxuaW1wb3J0IERvY3NEZW1vICAgICAgIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzRGVtb1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBjb25mX2Nzc2ZhYnJpYyBmcm9tIFwiY3NzZmFicmljXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSGVhZGVyLFxyXG4gICAgSGVhZGVyU2l0ZVRpdGxlLCBTdWJIZWFkZXIsXHJcbn0gICAgICAgICAgICBmcm9tIFwic3JjL2NvbXBvbmVudHMvSGVhZGVyc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZW51ICBmcm9tIFwiQC9jb21wb25lbnRzL01lbnVcIjtcclxuXHJcbmltcG9ydCB1dGlscywge2ZhYnJpY05hdmlnYXRpb259IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSU1vZHVsZVBhdGhQcm9wcyB7XHJcbiAgICBjc3NmYWJyaWNNb2R1bGVMaXN0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbn1cclxuXHJcbmNvbnN0IE1vZHVsZVBhdGggPSAocHJvcHM6IElNb2R1bGVQYXRoUHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyICAgICAgICAgICAgICAgICAgICAgICAgICA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2FjdGl2ZU1vZHVsZSwgc2V0QWN0aXZlTW9kdWxlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKTtcclxuICAgIGNvbnN0IFthY3RpdmVBY3Rpb24sIHNldEFjdGl2ZUFjdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHtjc3NmYWJyaWNNb2R1bGVMaXN0fSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBjb25zdCB7cGF0aH0gICAgICAgICAgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBsaW5rczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhjc3NmYWJyaWNNb2R1bGVMaXN0KVxyXG4gICAgXHJcbiAgICBsZXQgbW9kdWxlVGFnO1xyXG4gICAgbGV0IER5bmFtaWNDb21wb25lbnQ7XHJcbiAgICBsZXQgdGFnUHJvcGVydGllczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG4gICAgXHJcbiAgICBsZXQgc3RhdGljTW9kdWxlOiBzdHJpbmcgPSAnJztcclxuICAgIGxldCBzdGF0aWNBY3Rpb246IHN0cmluZyA9ICcnO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICBcclxuICAgICAgICBzdGF0aWNNb2R1bGUgPSBwYXRoWzBdO1xyXG4gICAgICAgIHN0YXRpY0FjdGlvbiA9IHBhdGhbMV07XHJcbiAgICBcclxuICAgICAgICB0YWdQcm9wZXJ0aWVzID0gY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTWV0YURhdGEoc3RhdGljTW9kdWxlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpbml0KHBhdGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0KHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocm91dGVyKVxyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHBhdGhbMF07XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gcGF0aFsxXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzZXRBY3RpdmVNb2R1bGUobW9kdWxlKTtcclxuICAgICAgICAvLyBzZXRBY3RpdmVBY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXYgICBoLWZ1bGwgY29udGVudC1zdGFydCBvdmVyZmxvdy1hdXRvXCJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57c3RhdGljTW9kdWxlfSBjc3NmYWJyaWM8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctZnVsbCB3LXNtLW1haW4gdGhlbWUtYmctcHJpbWFyeS1saWdodCBwb3Mtc3RpY2t5IFwifT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaXRlVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImNzc2ZhYnJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVfdGFnPXtcImp1c3QuZmFicmljLml0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiV2VsY29tZVwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtaCBkc3Atbm9uZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3Atc20tYmxvY2tcIn0+c208L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3AtbWQtYmxvY2sgZHNwLW5vbmUgXCJ9Pm1kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLWxnLWJsb2NrIGRzcC1ub25lXCJ9PmxnPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXhsLWJsb2NrIGRzcC1ub25lXCJ9PnhsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXh4bC1ibG9jayBkc3Atbm9uZVwifT54eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1zbS12IGdyaWQtaCAgaC1mdWxsIFwifT5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e1widy1sZy0xNlwifT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17XCJwYWQtYWxsLThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wibWVudS1sZy1oIG1lbnUtdlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Dc3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMobGlua3MpLm1hcCgoa2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT17XCJtZW51LWl0ZW1cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtmYWJyaWNOYXZpZ2F0aW9uLmdldE1vZHVsZURlbW9QYWdlKGtleSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7a2V5fWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcG9uZW50czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtcImdyaWQtbWFpbiBwYWQtYWxsLThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCIuXCIgKyB0YWdQcm9wZXJ0aWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9e1wiZmFicmljLmNzcy5cIiArIHRhZ1Byb3BlcnRpZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0YWdQcm9wZXJ0aWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIG1hcmctdC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLXQtOFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IG1vZHVsZT17c3RhdGljTW9kdWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYWQtbC04IGdyaWQtbWFpblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1YkhlYWRlciB0aXRsZT17c3RhdGljTW9kdWxlICsgJy4nICsgc3RhdGljQWN0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAhc3RhdGljQWN0aW9uICYmIDxEb2NzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2RvY3MnKSAmJiA8RG9jcyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmIChzdGF0aWNBY3Rpb24gPT09ICdjbGFzc25hbWVzJykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY3NDbGFzc05hbWVzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2RlbW8nKSAmJiA8RG9jc0RlbW8gbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbGlua3M6IGFueSAgICAgID0gY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTGlzdCgpXHJcbiAgICBjb25zdCBvdXRQYXRoczogYW55W10gPSBbXTtcclxuICAgIFxyXG4gICAgT2JqZWN0LmtleXMobGlua3MpLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2RvY3MnXX19KTtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2RlbW8nXX19KTtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2NsYXNzbmFtZXMnXX19KTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge3BhdGhzOiBvdXRQYXRocywgZmFsbGJhY2s6IGZhbHNlfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY3NzZmFicmljTW9kdWxlTGlzdDogY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTGlzdCgpXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlUGF0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==