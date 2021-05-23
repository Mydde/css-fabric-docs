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
/* harmony import */ var _components_InnerMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/InnerMenu */ "./src/components/InnerMenu.tsx");
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
        children: [staticModule, " ", staticAction, " cssfabric"]
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
        description: "cssFabric is an alpha cssFabric"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " dsp-none",
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dsp-none dsp-xxxl-block dsp-none",
          children: "xxxl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
      className: "grid-lg-v grid-h  h-full ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: "w-lg-full w-16",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: "pad-all-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "menu-lg-h menu-v",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Css"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
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
                      lineNumber: 91,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 41
                }, _this)
              }, key, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 37
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "Components"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "grid-main pad-all-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.Header, {
          title: "." + tagProperties.title,
          tag: "fabric.css." + tagProperties.title,
          description: tagProperties.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid-xl-v grid-h marg-t-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-t-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InnerMenu__WEBPACK_IMPORTED_MODULE_11__.default, {
              module: staticModule
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pad-l-8 grid-main",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Headers__WEBPACK_IMPORTED_MODULE_9__.SubHeader, {
                title: staticModule + '.' + staticAction
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [staticModule && !staticAction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 67
              }, _this), staticModule && staticAction === 'docs' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_Docs__WEBPACK_IMPORTED_MODULE_4__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 79
              }, _this), staticModule && staticAction === 'classnames' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsClassNames__WEBPACK_IMPORTED_MODULE_5__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 34
              }, _this), staticModule && staticAction === 'demo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Docs_DocsDemo__WEBPACK_IMPORTED_MODULE_6__.default, {
                module: staticModule
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 79
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS50c3giXSwibmFtZXMiOlsiTW9kdWxlUGF0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJhY3RpdmVNb2R1bGUiLCJzZXRBY3RpdmVNb2R1bGUiLCJhY3RpdmVBY3Rpb24iLCJzZXRBY3RpdmVBY3Rpb24iLCJjc3NmYWJyaWNNb2R1bGVMaXN0IiwicGF0aCIsInF1ZXJ5IiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibW9kdWxlVGFnIiwiRHluYW1pY0NvbXBvbmVudCIsInRhZ1Byb3BlcnRpZXMiLCJzdGF0aWNNb2R1bGUiLCJzdGF0aWNBY3Rpb24iLCJjb25mX2Nzc2ZhYnJpYyIsImluaXQiLCJtb2R1bGUiLCJhY3Rpb24iLCJ2YWx1ZXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsImZhYnJpY05hdmlnYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQTZCO0FBQUE7O0FBRTVDLE1BQU1DLE1BQU0sR0FBNEJDLHNEQUFTLEVBQWpEOztBQUY0Qyx3QkFHSkMsc0RBQUEsRUFISTtBQUFBO0FBQUEsTUFHckNDLFlBSHFDO0FBQUEsTUFHdkJDLGVBSHVCOztBQUFBLHlCQUlKRixzREFBQSxFQUpJO0FBQUE7QUFBQSxNQUlyQ0csWUFKcUM7QUFBQSxNQUl2QkMsZUFKdUI7O0FBQUEsTUFNckNDLG1CQU5xQyxHQU1kUixLQU5jLENBTXJDUSxtQkFOcUM7QUFBQSxNQVFyQ0MsSUFScUMsR0FRcEJSLE1BQU0sQ0FBQ1MsS0FSYSxDQVFyQ0QsSUFScUM7QUFTNUMsTUFB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LEVBS0tBLFlBQVksSUFBS0MsWUFBWSxLQUFLLE1BQWxDLGlCQUE2Qyw4REFBQyw4REFBRDtBQUFVLHNCQUFNLEVBQUVEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvRUgsQ0ExR0Q7O0dBQU1sQixVO1VBRXNDRyxrRDs7O0tBRnRDSCxVOztBQW1JTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jc3NmYWJyaWMtbW9kdWxlcy9bLi4ucGF0aF0uZjI1MjI3ZTk1MmU5NmMyMDg0MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSAgICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgICAgICAgICAgIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGR5bmFtaWMgICAgICAgIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IERvY3MgICAgICAgICAgIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzXCI7XHJcbmltcG9ydCBEb2NzQ2xhc3NOYW1lcyBmcm9tIFwiQC9jb21wb25lbnRzL0RvY3MvRG9jc0NsYXNzTmFtZXNcIjtcclxuaW1wb3J0IERvY3NEZW1vICAgICAgIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzRGVtb1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBjb25mX2Nzc2ZhYnJpYyBmcm9tIFwiY3NzZmFicmljXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSGVhZGVyLFxyXG4gICAgSGVhZGVyU2l0ZVRpdGxlLCBTdWJIZWFkZXIsXHJcbn0gICAgICAgICAgICBmcm9tIFwic3JjL2NvbXBvbmVudHMvSGVhZGVyc1wiO1xyXG5pbXBvcnQgUmVhY3QgICAgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5uZXJNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvSW5uZXJNZW51XCI7XHJcblxyXG5pbXBvcnQgdXRpbHMsIHtmYWJyaWNOYXZpZ2F0aW9ufSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElNb2R1bGVQYXRoUHJvcHMge1xyXG4gICAgY3NzZmFicmljTW9kdWxlTGlzdDogUmVjb3JkPHN0cmluZywgYW55PlxyXG59XHJcblxyXG5jb25zdCBNb2R1bGVQYXRoID0gKHByb3BzOiBJTW9kdWxlUGF0aFByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciAgICAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFthY3RpdmVNb2R1bGUsIHNldEFjdGl2ZU1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgICBjb25zdCBbYWN0aXZlQWN0aW9uLCBzZXRBY3RpdmVBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7Y3NzZmFicmljTW9kdWxlTGlzdH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3Qge3BhdGh9ICAgICAgICAgID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgbGlua3M6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoY3NzZmFicmljTW9kdWxlTGlzdClcclxuICAgIFxyXG4gICAgbGV0IG1vZHVsZVRhZztcclxuICAgIGxldCBEeW5hbWljQ29tcG9uZW50O1xyXG4gICAgbGV0IHRhZ1Byb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIFxyXG4gICAgbGV0IHN0YXRpY01vZHVsZTogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgc3RhdGljQWN0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgXHJcbiAgICAgICAgc3RhdGljTW9kdWxlID0gcGF0aFswXTtcclxuICAgICAgICBzdGF0aWNBY3Rpb24gPSBwYXRoWzFdO1xyXG4gICAgXHJcbiAgICAgICAgdGFnUHJvcGVydGllcyA9IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZU1ldGFEYXRhKHN0YXRpY01vZHVsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaW5pdChwYXRoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdChwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlcilcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBwYXRoWzBdO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHBhdGhbMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2V0QWN0aXZlTW9kdWxlKG1vZHVsZSk7XHJcbiAgICAgICAgLy8gc2V0QWN0aXZlQWN0aW9uKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC12ICAgaC1mdWxsIGNvbnRlbnQtc3RhcnQgb3ZlcmZsb3ctYXV0b1wifT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3N0YXRpY01vZHVsZX0ge3N0YXRpY0FjdGlvbn0gY3NzZmFicmljPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LWZ1bGwgdy1zbS1tYWluIHRoZW1lLWJnLXByaW1hcnktbGlnaHQgcG9zLXN0aWNreSBcIn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2l0ZVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJjc3NmYWJyaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlX3RhZz17XCJqdXN0LmZhYnJpYy5pdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcImNzc0ZhYnJpYyBpcyBhbiBhbHBoYSBjc3NGYWJyaWNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCIgZHNwLW5vbmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXNtLWJsb2NrXCJ9PnNtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW1kLWJsb2NrIGRzcC1ub25lIFwifT5tZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1sZy1ibG9jayBkc3Atbm9uZVwifT5sZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC14bC1ibG9jayBkc3Atbm9uZVwifT54bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC14eGwtYmxvY2sgZHNwLW5vbmVcIn0+eHhsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXh4eGwtYmxvY2sgZHNwLW5vbmVcIn0+eHh4bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLWxnLXYgZ3JpZC1oICBoLWZ1bGwgXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17XCJ3LWxnLWZ1bGwgdy0xNlwifT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17XCJwYWQtYWxsLThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wibWVudS1sZy1oIG1lbnUtdlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Dc3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMobGlua3MpLm1hcCgoa2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT17XCJtZW51LWl0ZW1cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtmYWJyaWNOYXZpZ2F0aW9uLmdldE1vZHVsZURlbW9QYWdlKGtleSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7a2V5fWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcG9uZW50czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtcImdyaWQtbWFpbiBwYWQtYWxsLThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCIuXCIgKyB0YWdQcm9wZXJ0aWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9e1wiZmFicmljLmNzcy5cIiArIHRhZ1Byb3BlcnRpZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0YWdQcm9wZXJ0aWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC14bC12IGdyaWQtaCBtYXJnLXQtNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFyZy10LTRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5uZXJNZW51IG1vZHVsZT17c3RhdGljTW9kdWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYWQtbC04IGdyaWQtbWFpblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1YkhlYWRlciB0aXRsZT17c3RhdGljTW9kdWxlICsgJy4nICsgc3RhdGljQWN0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAhc3RhdGljQWN0aW9uICYmIDxEb2NzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2RvY3MnKSAmJiA8RG9jcyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmIChzdGF0aWNBY3Rpb24gPT09ICdjbGFzc25hbWVzJykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY3NDbGFzc05hbWVzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2RlbW8nKSAmJiA8RG9jc0RlbW8gbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbGlua3M6IGFueSAgICAgID0gY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTGlzdCgpXHJcbiAgICBjb25zdCBvdXRQYXRoczogYW55W10gPSBbXTtcclxuICAgIFxyXG4gICAgT2JqZWN0LmtleXMobGlua3MpLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2RvY3MnXX19KTtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2RlbW8nXX19KTtcclxuICAgICAgICBvdXRQYXRocy5wdXNoKHtwYXJhbXM6IHtwYXRoOiBbbGluaywgJ2NsYXNzbmFtZXMnXX19KTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge3BhdGhzOiBvdXRQYXRocywgZmFsbGJhY2s6IGZhbHNlfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY3NzZmFicmljTW9kdWxlTGlzdDogY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTGlzdCgpXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlUGF0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==