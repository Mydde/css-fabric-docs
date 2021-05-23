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
        className: "w-lg-16",
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
          className: "grid-xl-v grid-h marg-t-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "marg-t-8",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS50c3giXSwibmFtZXMiOlsiTW9kdWxlUGF0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJhY3RpdmVNb2R1bGUiLCJzZXRBY3RpdmVNb2R1bGUiLCJhY3RpdmVBY3Rpb24iLCJzZXRBY3RpdmVBY3Rpb24iLCJjc3NmYWJyaWNNb2R1bGVMaXN0IiwicGF0aCIsInF1ZXJ5IiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibW9kdWxlVGFnIiwiRHluYW1pY0NvbXBvbmVudCIsInRhZ1Byb3BlcnRpZXMiLCJzdGF0aWNNb2R1bGUiLCJzdGF0aWNBY3Rpb24iLCJjb25mX2Nzc2ZhYnJpYyIsImluaXQiLCJtb2R1bGUiLCJhY3Rpb24iLCJ2YWx1ZXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsImZhYnJpY05hdmlnYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQTZCO0FBQUE7O0FBRTVDLE1BQU1DLE1BQU0sR0FBNEJDLHNEQUFTLEVBQWpEOztBQUY0Qyx3QkFHSkMsc0RBQUEsRUFISTtBQUFBO0FBQUEsTUFHckNDLFlBSHFDO0FBQUEsTUFHdkJDLGVBSHVCOztBQUFBLHlCQUlKRixzREFBQSxFQUpJO0FBQUE7QUFBQSxNQUlyQ0csWUFKcUM7QUFBQSxNQUl2QkMsZUFKdUI7O0FBQUEsTUFNckNDLG1CQU5xQyxHQU1kUixLQU5jLENBTXJDUSxtQkFOcUM7QUFBQSxNQVFyQ0MsSUFScUMsR0FRcEJSLE1BQU0sQ0FBQ1MsS0FSYSxDQVFyQ0QsSUFScUM7QUFTNUMsTUFBTUUsS0FBZSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsbUJBQVosQ0FBeEI7QUFFQSxNQUFJTSxTQUFKO0FBQ0EsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxhQUFrQyxHQUFHLEVBQXpDO0FBRUEsTUFBSUMsWUFBb0IsR0FBRyxFQUEzQjtBQUNBLE1BQUlDLFlBQW9CLEdBQUcsRUFBM0I7O0FBR0EsTUFBSVQsSUFBSixFQUFVO0FBRU5RLGdCQUFZLEdBQUdSLElBQUksQ0FBQyxDQUFELENBQW5CO0FBQ0FTLGdCQUFZLEdBQUdULElBQUksQ0FBQyxDQUFELENBQW5CO0FBRUFPLGlCQUFhLEdBQUdHLGtFQUFBLENBQWlDRixZQUFqQyxDQUFoQixDQUxNLENBT047QUFDSDs7QUFFRCxXQUFTRyxJQUFULENBQWNYLElBQWQsRUFBdUM7QUFDbkM7QUFDQSxRQUFNWSxNQUFNLEdBQUdaLElBQUksQ0FBQyxDQUFELENBQW5CO0FBQ0EsUUFBTWEsTUFBTSxHQUFHYixJQUFJLENBQUMsQ0FBRCxDQUFuQixDQUhtQyxDQUtuQztBQUNBO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUUsNkNBQWhCO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBLG1CQUFRUSxZQUFSLE9BQXVCQyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLGVBQVMsRUFBRSxxREFBaEI7QUFBQSw4QkFDSSw4REFBQyxtRUFBRDtBQUNJLGFBQUssRUFBQyxXQURWO0FBRUksaUJBQVMsRUFBRSxnQkFGZjtBQUdJLG1CQUFXLEVBQUU7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFFLFdBQWhCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRSx3QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFLLG1CQUFTLEVBQUUsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFBSyxtQkFBUyxFQUFFLGdDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUssbUJBQVMsRUFBRSxpQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFLLG1CQUFTLEVBQUUsa0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBbUJJO0FBQUssZUFBUyxFQUFFLDJCQUFoQjtBQUFBLDhCQUNJO0FBQU8saUJBQVMsRUFBRSxTQUFsQjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBRSxXQUFoQjtBQUFBLGlDQUNJO0FBQUkscUJBQVMsRUFBRSxrQkFBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUtOLE1BQU0sQ0FBQ1csTUFBUCxDQUFjWixLQUFkLEVBQXFCYSxHQUFyQixDQUF5QixVQUFDQyxHQUFELEVBQWNDLEtBQWQsRUFBZ0M7QUFDdEQsa0NBQ0k7QUFBYyx5QkFBUyxFQUFFLFdBQXpCO0FBQUEsdUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFFQyw2RUFBQSxDQUFtQ0YsR0FBbkMsQ0FBWjtBQUFBLHlDQUNJO0FBQUEsMkNBQ0k7QUFBQSwwQ0FBVUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGlCQUFTQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREo7QUFTSCxhQVZBLENBRkwsZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBb0JJO0FBQVMsaUJBQVMsRUFBRSxxQkFBcEI7QUFBQSxnQ0FDSSw4REFBQywwREFBRDtBQUNJLGVBQUssRUFBRSxNQUFNVCxhQUFhLENBQUNZLEtBRC9CO0FBRUksYUFBRyxFQUFFLGdCQUFnQlosYUFBYSxDQUFDWSxLQUZ2QztBQUdJLHFCQUFXLEVBQUVaLGFBQWEsQ0FBQ2E7QUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JO0FBQUssbUJBQVMsRUFBRSwyQkFBaEI7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUUsVUFBaEI7QUFBQSxtQ0FDSSw4REFBQywyREFBRDtBQUFXLG9CQUFNLEVBQUVaO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBSyxxQkFBUyxFQUFFLG1CQUFoQjtBQUFBLG9DQUNJO0FBQUEscUNBQ0ksOERBQUMsNkRBQUQ7QUFBVyxxQkFBSyxFQUFFQSxZQUFZLEdBQUcsR0FBZixHQUFxQkM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSTtBQUFBLHlCQUNLRCxZQUFZLElBQUksQ0FBQ0MsWUFBakIsaUJBQWlDLDhEQUFDLDBEQUFEO0FBQU0sc0JBQU0sRUFBRUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUR0QyxFQUVLQSxZQUFZLElBQUtDLFlBQVksS0FBSyxNQUFsQyxpQkFBNkMsOERBQUMsMERBQUQ7QUFBTSxzQkFBTSxFQUFFRDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRmxELEVBR0tBLFlBQVksSUFBS0MsWUFBWSxLQUFLLFlBQWxDLGlCQUNBLDhEQUFDLG9FQUFEO0FBQWdCLHNCQUFNLEVBQUVEO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkwsRUFLS0EsWUFBWSxJQUFLQyxZQUFZLEtBQUssTUFBbEMsaUJBQTZDLDhEQUFDLDhEQUFEO0FBQVUsc0JBQU0sRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9FSCxDQTFHRDs7R0FBTWxCLFU7VUFFc0NHLGtEOzs7S0FGdENILFU7O0FBbUlOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS5jMzM0ZWU1MDQ4ZWM4NTVhYzFjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9ICAgIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayAgICAgICAgICAgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZHluYW1pYyAgICAgICAgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgRG9jcyAgICAgICAgICAgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NcIjtcclxuaW1wb3J0IERvY3NDbGFzc05hbWVzIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzQ2xhc3NOYW1lc1wiO1xyXG5pbXBvcnQgRG9jc0RlbW8gICAgICAgZnJvbSBcIkAvY29tcG9uZW50cy9Eb2NzL0RvY3NEZW1vXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGNvbmZfY3NzZmFicmljIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBIZWFkZXIsXHJcbiAgICBIZWFkZXJTaXRlVGl0bGUsIFN1YkhlYWRlcixcclxufSAgICAgICAgICAgIGZyb20gXCJzcmMvY29tcG9uZW50cy9IZWFkZXJzXCI7XHJcbmltcG9ydCBSZWFjdCAgICAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbm5lck1lbnUgZnJvbSBcIkAvY29tcG9uZW50cy9Jbm5lck1lbnVcIjtcclxuXHJcbmltcG9ydCB1dGlscywge2ZhYnJpY05hdmlnYXRpb259IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgSU1vZHVsZVBhdGhQcm9wcyB7XHJcbiAgICBjc3NmYWJyaWNNb2R1bGVMaXN0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbn1cclxuXHJcbmNvbnN0IE1vZHVsZVBhdGggPSAocHJvcHM6IElNb2R1bGVQYXRoUHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyICAgICAgICAgICAgICAgICAgICAgICAgICA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2FjdGl2ZU1vZHVsZSwgc2V0QWN0aXZlTW9kdWxlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKTtcclxuICAgIGNvbnN0IFthY3RpdmVBY3Rpb24sIHNldEFjdGl2ZUFjdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHtjc3NmYWJyaWNNb2R1bGVMaXN0fSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBjb25zdCB7cGF0aH0gICAgICAgICAgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBsaW5rczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhjc3NmYWJyaWNNb2R1bGVMaXN0KVxyXG4gICAgXHJcbiAgICBsZXQgbW9kdWxlVGFnO1xyXG4gICAgbGV0IER5bmFtaWNDb21wb25lbnQ7XHJcbiAgICBsZXQgdGFnUHJvcGVydGllczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG4gICAgXHJcbiAgICBsZXQgc3RhdGljTW9kdWxlOiBzdHJpbmcgPSAnJztcclxuICAgIGxldCBzdGF0aWNBY3Rpb246IHN0cmluZyA9ICcnO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICBcclxuICAgICAgICBzdGF0aWNNb2R1bGUgPSBwYXRoWzBdO1xyXG4gICAgICAgIHN0YXRpY0FjdGlvbiA9IHBhdGhbMV07XHJcbiAgICBcclxuICAgICAgICB0YWdQcm9wZXJ0aWVzID0gY29uZl9jc3NmYWJyaWMuZ2V0TW9kdWxlTWV0YURhdGEoc3RhdGljTW9kdWxlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpbml0KHBhdGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpbml0KHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocm91dGVyKVxyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHBhdGhbMF07XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gcGF0aFsxXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzZXRBY3RpdmVNb2R1bGUobW9kdWxlKTtcclxuICAgICAgICAvLyBzZXRBY3RpdmVBY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXYgICBoLWZ1bGwgY29udGVudC1zdGFydCBvdmVyZmxvdy1hdXRvXCJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57c3RhdGljTW9kdWxlfSB7c3RhdGljQWN0aW9ufSBjc3NmYWJyaWM8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctZnVsbCB3LXNtLW1haW4gdGhlbWUtYmctcHJpbWFyeS1saWdodCBwb3Mtc3RpY2t5IFwifT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaXRlVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImNzc2ZhYnJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVfdGFnPXtcImp1c3QuZmFicmljLml0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiY3NzRmFicmljIGlzIGFuIGFscGhhIGNzc0ZhYnJpY1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIiBkc3Atbm9uZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3Atc20tYmxvY2tcIn0+c208L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3AtbWQtYmxvY2sgZHNwLW5vbmUgXCJ9Pm1kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLWxnLWJsb2NrIGRzcC1ub25lXCJ9PmxnPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXhsLWJsb2NrIGRzcC1ub25lXCJ9PnhsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLW5vbmUgZHNwLXh4bC1ibG9jayBkc3Atbm9uZVwifT54eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteHh4bC1ibG9jayBkc3Atbm9uZVwifT54eHhsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtbGctdiBncmlkLWggIGgtZnVsbCBcIn0+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtcInctbGctMTZcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e1wicGFkLWFsbC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcIm1lbnUtbGctaCBtZW51LXZcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3NzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKGxpbmtzKS5tYXAoKGtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fSBjbGFzc05hbWU9e1wibWVudS1pdGVtXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZmFicmljTmF2aWdhdGlvbi5nZXRNb2R1bGVEZW1vUGFnZShrZXkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake2tleX1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXBvbmVudHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJncmlkLW1haW4gcGFkLWFsbC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiLlwiICsgdGFnUHJvcGVydGllcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnPXtcImZhYnJpYy5jc3MuXCIgKyB0YWdQcm9wZXJ0aWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGFnUHJvcGVydGllcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQteGwtdiBncmlkLWggbWFyZy10LThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctdC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubmVyTWVudSBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFkLWwtOCBncmlkLW1haW5cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkZXIgdGl0bGU9e3N0YXRpY01vZHVsZSArICcuJyArIHN0YXRpY0FjdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgIXN0YXRpY0FjdGlvbiAmJiA8RG9jcyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmIChzdGF0aWNBY3Rpb24gPT09ICdkb2NzJykgJiYgPERvY3MgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnY2xhc3NuYW1lcycpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2NzQ2xhc3NOYW1lcyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmIChzdGF0aWNBY3Rpb24gPT09ICdkZW1vJykgJiYgPERvY3NEZW1vIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGxpbmtzOiBhbnkgICAgICA9IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZUxpc3QoKVxyXG4gICAgY29uc3Qgb3V0UGF0aHM6IGFueVtdID0gW107XHJcbiAgICBcclxuICAgIE9iamVjdC5rZXlzKGxpbmtzKS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgb3V0UGF0aHMucHVzaCh7cGFyYW1zOiB7cGF0aDogW2xpbmssICdkb2NzJ119fSk7XHJcbiAgICAgICAgb3V0UGF0aHMucHVzaCh7cGFyYW1zOiB7cGF0aDogW2xpbmssICdkZW1vJ119fSk7XHJcbiAgICAgICAgb3V0UGF0aHMucHVzaCh7cGFyYW1zOiB7cGF0aDogW2xpbmssICdjbGFzc25hbWVzJ119fSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtwYXRoczogb3V0UGF0aHMsIGZhbGxiYWNrOiBmYWxzZX1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNzc2ZhYnJpY01vZHVsZUxpc3Q6IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZUxpc3QoKVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZVBhdGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=