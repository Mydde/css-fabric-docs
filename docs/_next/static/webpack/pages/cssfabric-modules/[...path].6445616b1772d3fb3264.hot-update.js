self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "./src/components/DemoElements/DemoElement.tsx":
/*!*****************************************************!*\
  !*** ./src/components/DemoElements/DemoElement.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DemoElement; }
/* harmony export */ });
/* harmony import */ var D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\components\\DemoElements\\DemoElement.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function DemoElement(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  var out;

  function DrawIt(props) {
    var childrens = props === null || props === void 0 ? void 0 : props.children;

    switch ('mod') {
      default:
        out = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: 'w-sm-full w-8-min',
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            style: {
              display: 'none'
            },
            className: "pad dsp-none",
            children: [".", moduleAttribute, " .", moduleRule, " .", cssFabricClassName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this), DrawType()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 23
        }, this);
    }

    return out;
  }

  function DrawType() {
    var content;

    switch (moduleAttribute) {
      case "color":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementColor, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 27
        }, this);
        break;

      case "border-color":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementBorderColor, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 27
        }, this);
        break;

      case "background-color":
      case "background-themed":
      case "theme":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementBackgroundColor, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 27
        }, this);
        break;

      case "margin":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementMargin, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 27
        }, this);
        break;

      case "padding":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementPadding, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 27
        }, this);
        break;

      case "border":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementBorder, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 27
        }, this);
        break;

      case "grid":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementGrid, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 27
        }, this);
        break;

      case "scale":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementScale, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 27
        }, this);
        break;

      case "table":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementTable, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 27
        }, this);
        break;

      default:
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: cssFabricClassName + ' h-full',
          children: moduleAttribute
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 27
        }, this);
        break;
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [moduleAttribute, "      ", content]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 16
    }, this);
  }

  return DrawIt(props);
}
_c = DemoElement;

var DemoElementBackgroundColor = function DemoElementBackgroundColor(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: cssFabricClassName + ' w-sm-auto w-8 h-sm-2 h-8 pad-1 overflow-none',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "text-ellipsis",
      children: cssFabricClassName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 10
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 12
  }, _this);
};

_c2 = DemoElementBackgroundColor;

var DemoElementBorderColor = function DemoElementBorderColor(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'border-4 ' + cssFabricClassName + ' h-full w-16 pad',
    children: [".", cssFabricClassName]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 12
  }, _this);
};

_c3 = DemoElementBorderColor;

var DemoElementColor = function DemoElementColor(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: cssFabricClassName + ' h-full pad',
    children: ["this is so ", cssFabricClassName]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 12
  }, _this);
};

_c4 = DemoElementColor;

var DemoElementMargin = function DemoElementMargin(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'w-16 h-2-min',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: cssFabricClassName + ' border',
      children: "\xA0margin\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 12
  }, _this);
};

_c5 = DemoElementMargin;

var DemoElementPadding = function DemoElementPadding(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'w-16 h-4-min pad-1 grid-h grid-align-middle grid-align-center',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: cssFabricClassName + ' border',
      children: "\xA0padding\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 12
  }, _this);
};

_c6 = DemoElementPadding;

var DemoElementBorder = function DemoElementBorder(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'w-16 h-4 pad-1 grid-h grid-align-middle grid-align-center',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: cssFabricClassName + '',
      children: "\xA0border\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 12
  }, _this);
};

_c7 = DemoElementBorder;

var DemoElementScale = function DemoElementScale(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'w-64 pad-1',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: cssFabricClassName + ' border marg pad',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: '',
        children: "\xA0\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 12
  }, _this);
};

_c8 = DemoElementScale;

var DemoElementGrid = function DemoElementGrid(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;

  var multiply = function multiply(factor) {
    return (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(factor)).map(function (x, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'border marg pad w-4 h-2',
        children: ["\xA0", ++i, "\xA0"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 49
      }, _this);
    });
  };

  var def = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'w-64 pad-1',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: 'grid-h ' + cssFabricClassName + " h-8",
      children: multiply(3)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 17
  }, _this);

  var forClassNames = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'grid-h w-64 pad-1 h-16-min',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "w-mid border-r grid-v",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pad",
        children: ".grid-h"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-h ' + cssFabricClassName + " h-8",
        children: multiply(6)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid-v",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pad",
        children: ".grid-v"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-v ' + cssFabricClassName + " h-8",
        children: multiply(3)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 27
  }, _this);

  switch (moduleRule) {
    case "classnames":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: forClassNames
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 20
      }, _this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: def
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 20
      }, _this);
  }
};

_c9 = DemoElementGrid;

var DemoElementTable = function DemoElementTable(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "grid-h grid-wrap relative",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "h-16 w-64",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "h-full grid-v overflow-j relative",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
          className: "border-b-1 pad-tb-4",
          children: ["table : ", cssFabricClassName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "grid-main  overflow-auto marg-t-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
            className: "table tbl-layout  w-full tbl-" + cssFabricClassName,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                children: (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(6)).map(function (name, val) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", {
                      children: "Title"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
              children: (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(30)).map(function (name, val) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                  children: (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(6)).map(function (name, val) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
                        children: val + 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 45
                    }, _this);
                  })
                }, val, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 9
  }, _this);
};

_c10 = DemoElementTable;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "DemoElement");
$RefreshReg$(_c2, "DemoElementBackgroundColor");
$RefreshReg$(_c3, "DemoElementBorderColor");
$RefreshReg$(_c4, "DemoElementColor");
$RefreshReg$(_c5, "DemoElementMargin");
$RefreshReg$(_c6, "DemoElementPadding");
$RefreshReg$(_c7, "DemoElementBorder");
$RefreshReg$(_c8, "DemoElementScale");
$RefreshReg$(_c9, "DemoElementGrid");
$RefreshReg$(_c10, "DemoElementTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVtb0VsZW1lbnRzL0RlbW9FbGVtZW50LnRzeCJdLCJuYW1lcyI6WyJEZW1vRWxlbWVudCIsInByb3BzIiwibW9kdWxlQXR0cmlidXRlIiwibW9kdWxlUnVsZSIsImNzc0ZhYnJpY0NsYXNzTmFtZSIsIm91dCIsIkRyYXdJdCIsImNoaWxkcmVucyIsImNoaWxkcmVuIiwiZGlzcGxheSIsIkRyYXdUeXBlIiwiY29udGVudCIsIkRlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yIiwiRGVtb0VsZW1lbnRCb3JkZXJDb2xvciIsIkRlbW9FbGVtZW50Q29sb3IiLCJEZW1vRWxlbWVudE1hcmdpbiIsIkRlbW9FbGVtZW50UGFkZGluZyIsIkRlbW9FbGVtZW50Qm9yZGVyIiwiRGVtb0VsZW1lbnRTY2FsZSIsIkRlbW9FbGVtZW50R3JpZCIsIm11bHRpcGx5IiwiZmFjdG9yIiwiQXJyYXkiLCJtYXAiLCJ4IiwiaSIsImRlZiIsImZvckNsYXNzTmFtZXMiLCJEZW1vRWxlbWVudFRhYmxlIiwibmFtZSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBb0JlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTBDO0FBQUEsTUFFOUNDLGVBRjhDLEdBRUtELEtBRkwsQ0FFOUNDLGVBRjhDO0FBQUEsTUFFN0JDLFVBRjZCLEdBRUtGLEtBRkwsQ0FFN0JFLFVBRjZCO0FBQUEsTUFFakJDLGtCQUZpQixHQUVLSCxLQUZMLENBRWpCRyxrQkFGaUI7QUFJckQsTUFBSUMsR0FBSjs7QUFFQSxXQUFTQyxNQUFULENBQWdCTCxLQUFoQixFQUFrQztBQUU5QixRQUFNTSxTQUFTLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxRQUF6Qjs7QUFFQSxZQUFRLEtBQVI7QUFDSTtBQUNJSCxXQUFHLGdCQUFHO0FBQUssbUJBQVMsRUFBRSxtQkFBaEI7QUFB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QUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0FyQ0Q7O09BQU1GLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS42NDQ1NjE2YjE3NzJkM2ZiMzI2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzc2ZhYnJpYyAgICAgICAgICAgICAgIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuaW1wb3J0IFJlYWN0ICAgICAgICAgICAgICAgICAgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0pTWEVsZW1lbnRDb25zdHJ1Y3Rvcn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSURlbW9FbGVtZW50IHtcclxuICAgIG1vZHVsZT86IHN0cmluZztcclxuICAgIGNzc0ZhYnJpY0NsYXNzTmFtZT86IGFueTtcclxuICAgIG1vZHVsZUF0dHJpYnV0ZT86IGFueTtcclxuICAgIG1vZHVsZVJ1bGU/OiBhbnk7XHJcbiAgICBjaGlsZHJlbj86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElEZW1vRWxlbWVudEdyaWRQcm9wcyB7XHJcbiAgICBtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICBjc3NGYWJyaWNDbGFzc05hbWU/OiBhbnk7XHJcbiAgICBtb2R1bGVBdHRyaWJ1dGU/OiBhbnk7XHJcbiAgICBtb2R1bGVSdWxlPzogYW55O1xyXG4gICAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vRWxlbWVudChwcm9wczogSURlbW9FbGVtZW50KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgbGV0IG91dDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRHJhd0l0KHByb3BzPzogYW55KTogYW55IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGlsZHJlbnMgPSBwcm9wcz8uY2hpbGRyZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICgnbW9kJykge1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgb3V0ID0gPGRpdiBjbGFzc05hbWU9eyd3LXNtLWZ1bGwgdy04LW1pbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IGNsYXNzTmFtZT17XCJwYWQgZHNwLW5vbmVcIn0+Lnttb2R1bGVBdHRyaWJ1dGV9IC57bW9kdWxlUnVsZX0gLntjc3NGYWJyaWNDbGFzc05hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge0RyYXdUeXBlKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRHJhd1R5cGUoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChtb2R1bGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNvbG9yXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50Q29sb3Igey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJib3JkZXItY29sb3JcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRCb3JkZXJDb2xvciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhY2tncm91bmQtY29sb3JcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhY2tncm91bmQtdGhlbWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aGVtZVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEJhY2tncm91bmRDb2xvciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hcmdpblwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudE1hcmdpbiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhZGRpbmdcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRQYWRkaW5nIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYm9yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50Qm9yZGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ3JpZFwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEdyaWQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FsZVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudFNjYWxlIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGFibGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRUYWJsZSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBoLWZ1bGwnfT5cclxuICAgICAgICAgICAgICAgICAgICB7bW9kdWxlQXR0cmlidXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7bW9kdWxlQXR0cmlidXRlfSAgICAgIHtjb250ZW50fVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBEcmF3SXQocHJvcHMpO1xyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIHctc20tYXV0byB3LTggaC1zbS0yIGgtOCBwYWQtMSBvdmVyZmxvdy1ub25lJ30+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtZWxsaXBzaXNcIn0+e2Nzc0ZhYnJpY0NsYXNzTmFtZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50Qm9yZGVyQ29sb3IgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eydib3JkZXItNCAnKyBjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGgtZnVsbCB3LTE2IHBhZCd9PlxyXG4gICAgICAgLntjc3NGYWJyaWNDbGFzc05hbWV9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudENvbG9yID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGgtZnVsbCBwYWQnfT5cclxuICAgICAgIHRoaXMgaXMgc28ge2Nzc0ZhYnJpY0NsYXNzTmFtZX1cclxuICAgIDwvZGl2PlxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50TWFyZ2luID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy0xNiBoLTItbWluJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgYm9yZGVyJ30+Jm5ic3A7bWFyZ2luJm5ic3A7PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudFBhZGRpbmcgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyd3LTE2IGgtNC1taW4gcGFkLTEgZ3JpZC1oIGdyaWQtYWxpZ24tbWlkZGxlIGdyaWQtYWxpZ24tY2VudGVyJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgYm9yZGVyJ30+Jm5ic3A7cGFkZGluZyZuYnNwOzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IERlbW9FbGVtZW50Qm9yZGVyID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy0xNiBoLTQgcGFkLTEgZ3JpZC1oIGdyaWQtYWxpZ24tbWlkZGxlIGdyaWQtYWxpZ24tY2VudGVyJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcnfT4mbmJzcDtib3JkZXImbmJzcDs8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50U2NhbGUgID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy02NCBwYWQtMSd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGJvcmRlciBtYXJnIHBhZCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jyd9PiZuYnNwOyZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRHcmlkICAgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGNvbnN0IG11bHRpcGx5ID0gKGZhY3RvcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5BcnJheShmYWN0b3IpXS5tYXAoKHgsIGkpID0+IDxkaXYgY2xhc3NOYW1lPXsnYm9yZGVyIG1hcmcgcGFkIHctNCBoLTInfT4mbmJzcDt7KytpfSZuYnNwOzwvZGl2PilcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGVmID0gPGRpdiBjbGFzc05hbWU9eyd3LTY0IHBhZC0xJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkLWggJyArIGNzc0ZhYnJpY0NsYXNzTmFtZSArIFwiIGgtOFwifT5cclxuICAgICAgICAgICAge211bHRpcGx5KDMpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIGNvbnN0IGZvckNsYXNzTmFtZXMgPSA8ZGl2IGNsYXNzTmFtZT17J2dyaWQtaCB3LTY0IHBhZC0xIGgtMTYtbWluJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widy1taWQgYm9yZGVyLXIgZ3JpZC12XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYWRcIn0+LmdyaWQtaDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWQtbWFpbiBncmlkLWggJyArIGNzc0ZhYnJpY0NsYXNzTmFtZSArIFwiIGgtOFwifT5cclxuICAgICAgICAgICAgICAgIHttdWx0aXBseSg2KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC12XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYWRcIn0+LmdyaWQtdjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWQtbWFpbiBncmlkLXYgJyArIGNzc0ZhYnJpY0NsYXNzTmFtZSArIFwiIGgtOFwifT5cclxuICAgICAgICAgICAgICAgIHttdWx0aXBseSgzKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgc3dpdGNoIChtb2R1bGVSdWxlKSB7XHJcbiAgICAgICAgY2FzZSBcImNsYXNzbmFtZXNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Zm9yQ2xhc3NOYW1lc308L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2RlZn08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgfVxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50VGFibGUgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIGdyaWQtd3JhcCByZWxhdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImgtMTYgdy02NFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJoLWZ1bGwgZ3JpZC12IG92ZXJmbG93LWogcmVsYXRpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e1wiYm9yZGVyLWItMSBwYWQtdGItNFwifT50YWJsZSA6IHtjc3NGYWJyaWNDbGFzc05hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1tYWluICBvdmVyZmxvdy1hdXRvIG1hcmctdC00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17XCJ0YWJsZSB0YmwtbGF5b3V0ICB3LWZ1bGwgdGJsLVwiICsgY3NzRmFicmljQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDYpXS5tYXAoKG5hbWUsIHZhbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoMzApXS5tYXAoKG5hbWUsIHZhbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt2YWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg2KV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dmFsICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=