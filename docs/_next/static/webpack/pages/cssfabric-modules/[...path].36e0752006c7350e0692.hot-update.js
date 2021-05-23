self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/components/Docs/Docs.tsx":
/*!**************************************!*\
  !*** ./src/components/Docs/Docs.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Docs; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\components\\Docs\\Docs.tsx",
    _s = $RefreshSig$();






function Docs(props) {
  _s();

  var _this2 = this;

  var module = props.module;
  var moduleAttributes = cssfabric__WEBPACK_IMPORTED_MODULE_4___default().getModuleDocsAttributes(module);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var query = router.query,
      asPath = router.asPath;

  function tre(part) {
    var _this = this;

    // if object, if array !!!
    // console.log(part)
    var out, levelValues;

    if (part && !Array.isArray(part) && typeof (part === "object")) {
      out = Object.keys(part).map(function (levelKey) {
        var levelValue = part[levelKey]; // console.log({levelKey, levelValue})

        if (Array.isArray(levelValue)) {
          levelValues = levelValue.map(function (x) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "marg-r-4 w-2-min",
              children: x
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 55
            }, _this);
          });
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "pad",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "color-gray-600 dsp-inline marg-r-1 border-b pad",
            children: levelKey
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "grid-h grid-wrap marg-l-4 pad ",
            children: levelValues
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, _this);
      });
    } else {
      switch (_utils_utils__WEBPACK_IMPORTED_MODULE_5__.default.isArrayOfTypes(part)) {
        case "strings":
        case "numbers":
          out = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "grid-h grid-wrap",
            children: part.map(function (x) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "marg-r-4",
                children: x
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 88
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 27
          }, this);
          break;

        case "arrays":
          out = part.map(function (x) {
            return x.join('  ');
          }).map(function (x) {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_5__.htmlUtils.enclose(x);
          });
          break;
      }
    }

    return out;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: [module, " cssfabric documentation"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), Object.keys(moduleAttributes).map(function (moduleAttribute) {
      var moduleAttributeModel = moduleAttributes[moduleAttribute];
      var tag = moduleAttributeModel.tag,
          keys = moduleAttributeModel.keys,
          levels = moduleAttributeModel.levels,
          levelsDeclin = moduleAttributeModel.levelsDeclin,
          levelsLinked = moduleAttributeModel.levelsLinked,
          classNames = moduleAttributeModel.classNames,
          values = moduleAttributeModel.values,
          about = moduleAttributeModel.about;
      var toParse = {
        keys: keys,
        levels: levels,
        levelsDeclin: levelsDeclin,
        levelsLinked: levelsLinked,
        classNames: classNames
      };
      var moduleClassNames = cssfabric__WEBPACK_IMPORTED_MODULE_4___default().getModuleClassNames.getModuleTagClassNames({
        module: module,
        moduleAttribute: moduleAttribute
      });
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pad-b-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "grid-h grid-inline border-b  theme-border-primary align-middle cell-spacing marg-b-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
            children: tag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "txt-400",
            children: moduleAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "color-gray-500 marg-b-2 pad-l-8 ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "dsp-inline pad-all-2",
            children: about
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "cell-spacing grid-main",
          children: Object.keys(toParse).filter(function (x) {
            return toParse === null || toParse === void 0 ? void 0 : toParse[x];
          }).map(function (w) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "marg-b-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "w-8 pad-l-4 border-l-4 txt-900",
                children: [w, ":"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 37
              }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "marg-l-4",
                children: tre(toParse[w])
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 37
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 33
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 24
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

_s(Docs, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = Docs;
function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {
    return D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log({
              context: context
            }); //const res = await fetch(`http://localhost:5000/posts/${context.params.id}`)
            // const data = await res.json()

            return _context.abrupt("return", {
              props: {}
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Docs");

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


/***/ }),

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
            className: "txt-gray-400 pad-tb-2",
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


/***/ }),

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


/***/ }),

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
  var module = props.module;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "menu-xl-h menu-v menu-small shad-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleDemoPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleClassNamesPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Classnames"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.fabricNavigation.getModuleDocsPage(module),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Docs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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


/***/ }),

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
          className: "grid-h marg-t-8",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jcy9Eb2NzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jcy9Eb2NzQ2xhc3NOYW1lcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RvY3MvRG9jc0RlbW8udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Jbm5lck1lbnUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY3NzZmFicmljLW1vZHVsZXMvWy4uLnBhdGhdLnRzeCJdLCJuYW1lcyI6WyJEb2NzIiwicHJvcHMiLCJtb2R1bGUiLCJtb2R1bGVBdHRyaWJ1dGVzIiwiY3NzZmFicmljIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJhc1BhdGgiLCJ0cmUiLCJwYXJ0Iiwib3V0IiwibGV2ZWxWYWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibGV2ZWxLZXkiLCJsZXZlbFZhbHVlIiwieCIsInV0aWxzIiwiam9pbiIsImh0bWxVdGlscyIsIm1vZHVsZUF0dHJpYnV0ZSIsIm1vZHVsZUF0dHJpYnV0ZU1vZGVsIiwidGFnIiwibGV2ZWxzIiwibGV2ZWxzRGVjbGluIiwibGV2ZWxzTGlua2VkIiwiY2xhc3NOYW1lcyIsInZhbHVlcyIsImFib3V0IiwidG9QYXJzZSIsIm1vZHVsZUNsYXNzTmFtZXMiLCJmaWx0ZXIiLCJ3IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJEb2NzQ2xhc3NOYW1lcyIsIm5ld091dCIsInkiLCJEb2NzRGVtbyIsInByb3h5RHNwIiwidmFsIiwibW9kdWxlUnVsZSIsIkRzcEFycmF5IiwiZHNwT2JqZWN0IiwiY2xhc3NOYW1lIiwibW9kdWxlRGVidWciLCJJbm5lck1lbnUiLCJmYWJyaWNOYXZpZ2F0aW9uIiwiTW9kdWxlUGF0aCIsIlJlYWN0IiwiYWN0aXZlTW9kdWxlIiwic2V0QWN0aXZlTW9kdWxlIiwiYWN0aXZlQWN0aW9uIiwic2V0QWN0aXZlQWN0aW9uIiwiY3NzZmFicmljTW9kdWxlTGlzdCIsInBhdGgiLCJsaW5rcyIsIm1vZHVsZVRhZyIsIkR5bmFtaWNDb21wb25lbnQiLCJ0YWdQcm9wZXJ0aWVzIiwic3RhdGljTW9kdWxlIiwic3RhdGljQWN0aW9uIiwiY29uZl9jc3NmYWJyaWMiLCJpbml0IiwiYWN0aW9uIiwia2V5IiwiaW5kZXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU9lLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BRWhDQyxNQUZnQyxHQUVkRCxLQUZjLENBRWhDQyxNQUZnQztBQUd2QyxNQUFNQyxnQkFBZ0IsR0FBR0Msd0VBQUEsQ0FBa0NGLE1BQWxDLENBQXpCO0FBRUEsTUFBTUcsTUFBTSxHQUFZQyxzREFBUyxFQUFqQztBQUx1QyxNQU1oQ0MsS0FOZ0MsR0FNZkYsTUFOZSxDQU1oQ0UsS0FOZ0M7QUFBQSxNQU16QkMsTUFOeUIsR0FNZkgsTUFOZSxDQU16QkcsTUFOeUI7O0FBUXZDLFdBQVNDLEdBQVQsQ0FBYUMsSUFBYixFQUF3QjtBQUFBOztBQUVwQjtBQUNBO0FBQ0EsUUFBSUMsR0FBSixFQUNJQyxXQURKOztBQUdBLFFBQUlGLElBQUksSUFBSSxDQUFDRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osSUFBZCxDQUFULElBQWdDLFFBQVFBLElBQUksS0FBSyxRQUFqQixDQUFwQyxFQUFnRTtBQUM1REMsU0FBRyxHQUFHSSxNQUFNLENBQUNDLElBQVAsQ0FBWU4sSUFBWixFQUFrQk8sR0FBbEIsQ0FBc0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RDLFlBQUlDLFVBQVUsR0FBR1QsSUFBSSxDQUFDUSxRQUFELENBQXJCLENBRHNDLENBRXRDOztBQUNBLFlB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YnJpYy1tb2R1bGVzL1suLi5wYXRoXS4zNmUwNzUyMDA2YzczNTBlMDY5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBjc3NmYWJyaWMgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiY3NzZmFicmljXCI7XHJcbmltcG9ydCB1dGlscyAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQge2h0bWxVdGlscywgZmFicmljTmF2aWdhdGlvbn0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IERvY3NDbGFzc05hbWVzICAgICAgICAgICAgICAgIGZyb20gJ0AvY29tcG9uZW50cy9Eb2NzL0RvY3NDbGFzc05hbWVzJ1xyXG5pbXBvcnQgTGluayAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBJbm5lck1lbnUgICBmcm9tIFwiQC9jb21wb25lbnRzL0lubmVyTWVudVwiO1xyXG5cclxuaW50ZXJmYWNlIElEb2NzIHtcclxuICAgIG1vZHVsZTogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3MocHJvcHM6IElEb2NzKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHttb2R1bGV9ICAgICAgICAgPSBwcm9wcztcclxuICAgIGNvbnN0IG1vZHVsZUF0dHJpYnV0ZXMgPSBjc3NmYWJyaWMuZ2V0TW9kdWxlRG9jc0F0dHJpYnV0ZXMobW9kdWxlKTtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyICAgICAgICAgID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cXVlcnksIGFzUGF0aH0gPSByb3V0ZXI7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHRyZShwYXJ0OiBhbnkpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiBvYmplY3QsIGlmIGFycmF5ICEhIVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnQpXHJcbiAgICAgICAgbGV0IG91dDogYW55LFxyXG4gICAgICAgICAgICBsZXZlbFZhbHVlczogYW55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwYXJ0ICYmICFBcnJheS5pc0FycmF5KHBhcnQpICYmIHR5cGVvZiAocGFydCA9PT0gXCJvYmplY3RcIikpIHtcclxuICAgICAgICAgICAgb3V0ID0gT2JqZWN0LmtleXMocGFydCkubWFwKChsZXZlbEtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxldmVsVmFsdWUgPSBwYXJ0W2xldmVsS2V5XVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe2xldmVsS2V5LCBsZXZlbFZhbHVlfSlcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxldmVsVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxWYWx1ZXMgPSBsZXZlbFZhbHVlLm1hcCh4ID0+IDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctci00IHctMi1taW5cIn0+e3h9PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtcInBhZFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb2xvci1ncmF5LTYwMCBkc3AtaW5saW5lIG1hcmctci0xIGJvcmRlci1iIHBhZFwifT57bGV2ZWxLZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIGdyaWQtd3JhcCBtYXJnLWwtNCBwYWQgXCJ9PntsZXZlbFZhbHVlc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCAodXRpbHMuaXNBcnJheU9mVHlwZXMocGFydCkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdzXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIG91dCA9IDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtaCBncmlkLXdyYXBcIn0+e3BhcnQubWFwKCh4OiBzdHJpbmcpID0+IDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIm1hcmctci00XCJ9Pnt4fTwvZGl2Pil9PC9kaXY+O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFycmF5c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIG91dCA9IHBhcnQubWFwKCh4OiBzdHJpbmdbXSkgPT4geC5qb2luKCcgICcpKS5tYXAoKHg6IGFueSkgPT4gaHRtbFV0aWxzLmVuY2xvc2UoeCkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57bW9kdWxlfSBjc3NmYWJyaWMgZG9jdW1lbnRhdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAge09iamVjdC5rZXlzKG1vZHVsZUF0dHJpYnV0ZXMpLm1hcCgobW9kdWxlQXR0cmlidXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IG1vZHVsZUF0dHJpYnV0ZU1vZGVsID0gbW9kdWxlQXR0cmlidXRlc1ttb2R1bGVBdHRyaWJ1dGVdXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB7dGFnLCBrZXlzLCBsZXZlbHMsIGxldmVsc0RlY2xpbiwgbGV2ZWxzTGlua2VkLCBjbGFzc05hbWVzLCB2YWx1ZXMsIGFib3V0fSA9IG1vZHVsZUF0dHJpYnV0ZU1vZGVsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvUGFyc2U6UmVjb3JkPHN0cmluZywgYW55PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cyxcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxzRGVjbGluLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsc0xpbmtlZCxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kdWxlQ2xhc3NOYW1lcyA9IGNzc2ZhYnJpYy5nZXRNb2R1bGVDbGFzc05hbWVzLmdldE1vZHVsZVRhZ0NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wicGFkLWItOFwifT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJncmlkLWggZ3JpZC1pbmxpbmUgYm9yZGVyLWIgIHRoZW1lLWJvcmRlci1wcmltYXJ5IGFsaWduLW1pZGRsZSBjZWxsLXNwYWNpbmcgbWFyZy1iLTFcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGFnfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInR4dC00MDBcIn0+e21vZHVsZUF0dHJpYnV0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb2xvci1ncmF5LTUwMCBtYXJnLWItMiBwYWQtbC04IFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHNwLWlubGluZSBwYWQtYWxsLTJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWJvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNlbGwtc3BhY2luZyBncmlkLW1haW5cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0b1BhcnNlKS5maWx0ZXIoKHg6YW55KSA9PiB0b1BhcnNlPy5beF0pLm1hcCgodzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctYi00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LTggcGFkLWwtNCBib3JkZXItbC00IHR4dC05MDBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d306XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLWwtNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmUodG9QYXJzZVt3XSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKHtjb250ZXh0fSlcclxuICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wb3N0cy8ke2NvbnRleHQucGFyYW1zLmlkfWApXHJcbiAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7fSxcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgY3NzZmFicmljIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuaW1wb3J0IElubmVyTWVudSBmcm9tIFwiQC9jb21wb25lbnRzL0lubmVyTWVudVwiO1xyXG5cclxuaW50ZXJmYWNlIElEb2NzQ2xhc3NOYW1lcyB7XHJcbiAgICBtb2R1bGU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3NDbGFzc05hbWVzKHByb3BzOiBJRG9jc0NsYXNzTmFtZXMpIHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZSx9ICAgICAgICA9IHByb3BzO1xyXG4gICAgY29uc3QgbW9kdWxlQXR0cmlidXRlcyA9IGNzc2ZhYnJpYy5nZXRNb2R1bGVEb2NzQXR0cmlidXRlcyhtb2R1bGUpO1xyXG4gICAgLy8gY29uc3QgbW9kdWxlQXR0cmlidXRlcyA9IGNzc2ZhYnJpYy5cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXYgZ3JpZC1pdGVtcy1lbmQgcGFkLXItOFwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widHh0LTgwMCBib3JkZXItYiBkc3AtaW5saW5lXCJ9PlxyXG4gICAgICAgICAgICAgICAgY3NzZmFicmljIGNsYXNzbmFtZXNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInR4dC1ncmF5LTMwMCBtYXJnLWItNFwifT5cclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlZCBjbGFzc25hbWVzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZC04XCJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVBdHRyaWJ1dGVzKS5tYXAoKG1vZHVsZUF0dHJpYnV0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3T3V0ID0gY3NzZmFicmljLmdldE1vZHVsZUNsYXNzTmFtZXMuZ2V0TW9kdWxlVGFnQ2xhc3NOYW1lcyh7bW9kdWxlLCBtb2R1bGVBdHRyaWJ1dGV9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e21vZHVsZUF0dHJpYnV0ZX0gY2xhc3NOYW1lPXtcIiBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e1wicGFkLXRiLTJcIn0+e21vZHVsZUF0dHJpYnV0ZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0eHQtZ3JheS00MDAgcGFkLXRiLTJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YC0gY3NzZmFicmljIGV4cHJlc3Npb25zIGxpc3QgZm9yICBjc3MgJHttb2R1bGVBdHRyaWJ1dGV9IHJ1bGVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctYi04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld091dC5tYXAoKHg6IHN0cmluZywgeTogbnVtYmVyKSA9PiA8ZGl2IGNsYXNzTmFtZT17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ggKyB5fT4ue3h9PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufSIsImltcG9ydCBjc3NmYWJyaWMgICBmcm9tIFwiY3NzZmFicmljXCI7XHJcbmltcG9ydCBSZWFjdCAgICAgICBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERlbW9FbGVtZW50IGZyb20gXCJAL2NvbXBvbmVudHMvRGVtb0VsZW1lbnRzL0RlbW9FbGVtZW50XCI7XHJcbmltcG9ydCBJbm5lck1lbnUgICBmcm9tIFwiQC9jb21wb25lbnRzL0lubmVyTWVudVwiO1xyXG5cclxuaW50ZXJmYWNlIElEb2NzQ2xhc3NOYW1lcyB7XHJcbiAgICBtb2R1bGU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3NEZW1vKHByb3BzOiBJRG9jc0NsYXNzTmFtZXMpIHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZSx9ICAgICAgICA9IHByb3BzO1xyXG4gICAgY29uc3QgbW9kdWxlQXR0cmlidXRlcyA9IGNzc2ZhYnJpYy5nZXRNb2R1bGVEb2NzQXR0cmlidXRlcyhtb2R1bGUpO1xyXG4gICAgXHJcbiAgICBsZXQgb3V0O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBwcm94eURzcCh2YWw6IGFueSwgbW9kdWxlQXR0cmlidXRlOiBhbnksIG1vZHVsZVJ1bGU6IHN0cmluZyA9IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRHNwQXJyYXkodmFsLCBtb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRzcE9iamVjdCh2YWwsIG1vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIERzcEFycmF5KHZhbDogYW55W10sIG1vZHVsZUF0dHJpYnV0ZTogYW55LCBtb2R1bGVSdWxlOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wibWFyZy1iLTJcIn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJtYXJnLWItMiBwYWQtdGJcIn0+Y3NzZmFicmljLnttb2R1bGVSdWxlfSA6IHttb2R1bGVBdHRyaWJ1dGV9IGNsYXNzbmFtZXMgZm9yIGNzc2ZhYnJpYzwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIGdyaWQtd3JhcCBjZWxsLXNwYWNpbmdcIn0+XHJcbiAgICAgICAgICAgICAgICB7dmFsLm1hcCgoY2xhc3NOYW1lLCB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxEZW1vRWxlbWVudCBtb2R1bGVBdHRyaWJ1dGU9e21vZHVsZUF0dHJpYnV0ZX0gbW9kdWxlUnVsZT17bW9kdWxlUnVsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0ZhYnJpY0NsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ttb2R1bGVBdHRyaWJ1dGV9XSAue2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RlbW9FbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBkc3BPYmplY3QodmFsOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBtb2R1bGVBdHRyaWJ1dGU6IGFueSwgbW9kdWxlUnVsZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh2YWwpLm1hcCgobW9kdWxlUnVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17XCJwYWQtMiBwYWQtci04IGRzcC1ibG9jay1pbmxpbmUgYm9yZGVyLWJcIn0+e21vZHVsZVJ1bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLWwtNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3h5RHNwKHZhbFttb2R1bGVSdWxlXSwgbW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC12IGdyaWQtaXRlbXMtZW5kIHBhZC1yLThcIn0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInR4dC04MDAgYm9yZGVyLWIgZHNwLWlubGluZVwifT5cclxuICAgICAgICAgY3NzZmFicmljIGNsYXNzbmFtZXNcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInR4dC1ncmF5LTMwMCBtYXJnLWItNFwifT5cclxuICAgICAgICAgZ2VuZXJhdGVkIGV4YW1wbGVzXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYWQtOFwifT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlQXR0cmlidXRlcykubWFwKChtb2R1bGVBdHRyaWJ1dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZURlYnVnID0gY3NzZmFicmljLmdldE1vZHVsZVRhZ0RlYnVnKHttb2R1bGUsIG1vZHVsZUF0dHJpYnV0ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17bW9kdWxlQXR0cmlidXRlfSBjbGFzc05hbWU9e1widy1zbS1mdWxsXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtcImJvcmRlci1sLTQgcGFkLWwtNFwifT5tb2R1bGUge21vZHVsZUF0dHJpYnV0ZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cHJlPntKU09OLnN0cmluZ2lmeShtb2R1bGVEZWJ1ZyxudWxsLFwiXFx0XCIpfTwvcHJlPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLWwtOCB0eHQtZ3JheS00MDAgcGFkLXRiLTJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YC0gY3NzZmFicmljIGV4cHJlc3Npb25zIGxpc3QgZm9yICBjc3MgJHttb2R1bGVBdHRyaWJ1dGV9IHJ1bGVzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcmctYi04IG1hcmctbC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKG1vZHVsZURlYnVnKS5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtcIlwifT4tIHt0YWd9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eycgbWFyZy1sLTgnfT57cHJveHlEc3AobW9kdWxlRGVidWdbdGFnXSwgbW9kdWxlQXR0cmlidXRlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp7cHJveHlEc3AobW9kdWxlRGVidWcsIG1vZHVsZUF0dHJpYnV0ZSl9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuIiwiaW1wb3J0IExpbmsgICAgICAgICAgICAgICBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7ZmFicmljTmF2aWdhdGlvbn0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBJTWVudSB7XHJcbiAgICBtb2R1bGU6IGFueVxyXG59XHJcblxyXG5jb25zdCBJbm5lck1lbnUgPSAocHJvcHM6IElNZW51KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHttb2R1bGV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9e1wibWVudS14bC1oIG1lbnUtdiBtZW51LXNtYWxsIHNoYWQtOFwifT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlRGVtb1BhZ2UobW9kdWxlKX0+XHJcbiAgICAgICAgICAgICAgICA8YT5EZW1vPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlQ2xhc3NOYW1lc1BhZ2UobW9kdWxlKX0+XHJcbiAgICAgICAgICAgICAgICA8YT5DbGFzc25hbWVzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2ZhYnJpY05hdmlnYXRpb24uZ2V0TW9kdWxlRG9jc1BhZ2UobW9kdWxlKX0+XHJcbiAgICAgICAgICAgICAgICA8YT5Eb2NzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgIFxyXG4gICAgPC91bD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5uZXJNZW51OyIsImltcG9ydCB7dXNlUm91dGVyfSAgICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgICAgICAgICAgIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGR5bmFtaWMgICAgICAgIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IERvY3MgICAgICAgICAgIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzXCI7XHJcbmltcG9ydCBEb2NzQ2xhc3NOYW1lcyBmcm9tIFwiQC9jb21wb25lbnRzL0RvY3MvRG9jc0NsYXNzTmFtZXNcIjtcclxuaW1wb3J0IERvY3NEZW1vICAgICAgIGZyb20gXCJAL2NvbXBvbmVudHMvRG9jcy9Eb2NzRGVtb1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBjb25mX2Nzc2ZhYnJpYyBmcm9tIFwiY3NzZmFicmljXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgSGVhZGVyLFxyXG4gICAgSGVhZGVyU2l0ZVRpdGxlLCBTdWJIZWFkZXIsXHJcbn0gICAgICAgICAgICBmcm9tIFwic3JjL2NvbXBvbmVudHMvSGVhZGVyc1wiO1xyXG5pbXBvcnQgUmVhY3QgICAgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5uZXJNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvSW5uZXJNZW51XCI7XHJcblxyXG5pbXBvcnQgdXRpbHMsIHtmYWJyaWNOYXZpZ2F0aW9ufSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIElNb2R1bGVQYXRoUHJvcHMge1xyXG4gICAgY3NzZmFicmljTW9kdWxlTGlzdDogUmVjb3JkPHN0cmluZywgYW55PlxyXG59XHJcblxyXG5jb25zdCBNb2R1bGVQYXRoID0gKHByb3BzOiBJTW9kdWxlUGF0aFByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciAgICAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFthY3RpdmVNb2R1bGUsIHNldEFjdGl2ZU1vZHVsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgICBjb25zdCBbYWN0aXZlQWN0aW9uLCBzZXRBY3RpdmVBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7Y3NzZmFicmljTW9kdWxlTGlzdH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3Qge3BhdGh9ICAgICAgICAgID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgbGlua3M6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoY3NzZmFicmljTW9kdWxlTGlzdClcclxuICAgIFxyXG4gICAgbGV0IG1vZHVsZVRhZztcclxuICAgIGxldCBEeW5hbWljQ29tcG9uZW50O1xyXG4gICAgbGV0IHRhZ1Byb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIFxyXG4gICAgbGV0IHN0YXRpY01vZHVsZTogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgc3RhdGljQWN0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgXHJcbiAgICAgICAgc3RhdGljTW9kdWxlID0gcGF0aFswXTtcclxuICAgICAgICBzdGF0aWNBY3Rpb24gPSBwYXRoWzFdO1xyXG4gICAgXHJcbiAgICAgICAgdGFnUHJvcGVydGllcyA9IGNvbmZfY3NzZmFicmljLmdldE1vZHVsZU1ldGFEYXRhKHN0YXRpY01vZHVsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaW5pdChwYXRoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdChwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlcilcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBwYXRoWzBdO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHBhdGhbMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2V0QWN0aXZlTW9kdWxlKG1vZHVsZSk7XHJcbiAgICAgICAgLy8gc2V0QWN0aXZlQWN0aW9uKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC12ICAgaC1mdWxsIGNvbnRlbnQtc3RhcnQgb3ZlcmZsb3ctYXV0b1wifT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3N0YXRpY01vZHVsZX0ge3N0YXRpY0FjdGlvbn0gY3NzZmFicmljPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LWZ1bGwgdy1zbS1tYWluIHRoZW1lLWJnLXByaW1hcnktbGlnaHQgcG9zLXN0aWNreSBcIn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2l0ZVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJjc3NmYWJyaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlX3RhZz17XCJqdXN0LmZhYnJpYy5pdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIldlbGNvbWVcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLWggZHNwLW5vbmVcIn0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC1zbS1ibG9ja1wifT5zbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1tZC1ibG9jayBkc3Atbm9uZSBcIn0+bWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3AtbGctYmxvY2sgZHNwLW5vbmVcIn0+bGc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteGwtYmxvY2sgZHNwLW5vbmVcIn0+eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3Atbm9uZSBkc3AteHhsLWJsb2NrIGRzcC1ub25lXCJ9Pnh4bDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRzcC1ub25lIGRzcC14eHhsLWJsb2NrIGRzcC1ub25lXCJ9Pnh4eGw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1zbS12IGdyaWQtaCAgaC1mdWxsIFwifT5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e1widy1sZy0xNlwifT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17XCJwYWQtYWxsLThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wibWVudS1sZy1oIG1lbnUtdlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Dc3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMobGlua3MpLm1hcCgoa2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9IGNsYXNzTmFtZT17XCJtZW51LWl0ZW1cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtmYWJyaWNOYXZpZ2F0aW9uLmdldE1vZHVsZURlbW9QYWdlKGtleSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YCR7a2V5fWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcG9uZW50czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtcImdyaWQtbWFpbiBwYWQtYWxsLThcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCIuXCIgKyB0YWdQcm9wZXJ0aWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9e1wiZmFicmljLmNzcy5cIiArIHRhZ1Byb3BlcnRpZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0YWdQcm9wZXJ0aWVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIG1hcmctdC04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLXQtOFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbm5lck1lbnUgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZC1sLTggZ3JpZC1tYWluXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGVyIHRpdGxlPXtzdGF0aWNNb2R1bGUgKyAnLicgKyBzdGF0aWNBY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGljTW9kdWxlICYmICFzdGF0aWNBY3Rpb24gJiYgPERvY3MgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZG9jcycpICYmIDxEb2NzIG1vZHVsZT17c3RhdGljTW9kdWxlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0aWNNb2R1bGUgJiYgKHN0YXRpY0FjdGlvbiA9PT0gJ2NsYXNzbmFtZXMnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jc0NsYXNzTmFtZXMgbW9kdWxlPXtzdGF0aWNNb2R1bGV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRpY01vZHVsZSAmJiAoc3RhdGljQWN0aW9uID09PSAnZGVtbycpICYmIDxEb2NzRGVtbyBtb2R1bGU9e3N0YXRpY01vZHVsZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBsaW5rczogYW55ICAgICAgPSBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KClcclxuICAgIGNvbnN0IG91dFBhdGhzOiBhbnlbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBPYmplY3Qua2V5cyhsaW5rcykuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnZG9jcyddfX0pO1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnZGVtbyddfX0pO1xyXG4gICAgICAgIG91dFBhdGhzLnB1c2goe3BhcmFtczoge3BhdGg6IFtsaW5rLCAnY2xhc3NuYW1lcyddfX0pO1xyXG4gICAgfSlcclxuICAgIHJldHVybiB7cGF0aHM6IG91dFBhdGhzLCBmYWxsYmFjazogZmFsc2V9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjc3NmYWJyaWNNb2R1bGVMaXN0OiBjb25mX2Nzc2ZhYnJpYy5nZXRNb2R1bGVMaXN0KClcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVQYXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9