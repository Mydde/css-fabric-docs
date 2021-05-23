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

      case "text":
      case "text-align":
      case "text-shadow":
      case "text-transform":
      case "font-weight":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementText, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 27
        }, this);
        break;

      default:
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: cssFabricClassName + ' h-full',
          children: [moduleAttribute, " ", cssFabricClassName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 27
        }, this);
        break;
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: ["      ", content]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 16
    }, this);
  }

  return DrawIt(props);
}
_c = DemoElement;

var DemoElementText = function DemoElementText(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: cssFabricClassName + ' pad-2 overflow-none scale-w-16 border-b',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "text-ellipsis",
      children: ["here is some ", cssFabricClassName, " text"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "text-ellipsis",
      children: ["here is some ", cssFabricClassName, " text, from cssfabric"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 12
  }, _this);
};

_c2 = DemoElementText;

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
      lineNumber: 111,
      columnNumber: 10
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 12
  }, _this);
};

_c3 = DemoElementBackgroundColor;

var DemoElementBorderColor = function DemoElementBorderColor(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: 'border-4 ' + cssFabricClassName + ' h-full w-16 pad',
    children: [".", cssFabricClassName]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 12
  }, _this);
};

_c4 = DemoElementBorderColor;

var DemoElementColor = function DemoElementColor(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: cssFabricClassName + ' h-full pad',
    children: ["this is so ", cssFabricClassName]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 12
  }, _this);
};

_c5 = DemoElementColor;

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
      lineNumber: 133,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 12
  }, _this);
};

_c6 = DemoElementMargin;

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
      lineNumber: 140,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 12
  }, _this);
};

_c7 = DemoElementPadding;

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
      lineNumber: 148,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 12
  }, _this);
};

_c8 = DemoElementBorder;

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
        lineNumber: 156,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 12
  }, _this);
};

_c9 = DemoElementScale;

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
        lineNumber: 165,
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
      lineNumber: 169,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
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
        lineNumber: 176,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-h ' + cssFabricClassName + " h-8",
        children: multiply(6)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid-v",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pad",
        children: ".grid-v"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-v ' + cssFabricClassName + " h-8",
        children: multiply(3)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 27
  }, _this);

  switch (moduleRule) {
    case "classnames":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: forClassNames
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 20
      }, _this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: def
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 20
      }, _this);
  }
};

_c10 = DemoElementGrid;

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
          lineNumber: 204,
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
                      lineNumber: 211,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
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
                        lineNumber: 221,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 45
                    }, _this);
                  })
                }, val, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 9
  }, _this);
};

_c11 = DemoElementTable;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "DemoElement");
$RefreshReg$(_c2, "DemoElementText");
$RefreshReg$(_c3, "DemoElementBackgroundColor");
$RefreshReg$(_c4, "DemoElementBorderColor");
$RefreshReg$(_c5, "DemoElementColor");
$RefreshReg$(_c6, "DemoElementMargin");
$RefreshReg$(_c7, "DemoElementPadding");
$RefreshReg$(_c8, "DemoElementBorder");
$RefreshReg$(_c9, "DemoElementScale");
$RefreshReg$(_c10, "DemoElementGrid");
$RefreshReg$(_c11, "DemoElementTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVtb0VsZW1lbnRzL0RlbW9FbGVtZW50LnRzeCJdLCJuYW1lcyI6WyJEZW1vRWxlbWVudCIsInByb3BzIiwibW9kdWxlQXR0cmlidXRlIiwibW9kdWxlUnVsZSIsImNzc0ZhYnJpY0NsYXNzTmFtZSIsIm91dCIsIkRyYXdJdCIsImNoaWxkcmVucyIsImNoaWxkcmVuIiwiZGlzcGxheSIsIkRyYXdUeXBlIiwiY29udGVudCIsIkRlbW9FbGVtZW50VGV4dCIsIkRlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yIiwiRGVtb0VsZW1lbnRCb3JkZXJDb2xvciIsIkRlbW9FbGVtZW50Q29sb3IiLCJEZW1vRWxlbWVudE1hcmdpbiIsIkRlbW9FbGVtZW50UGFkZGluZyIsIkRlbW9FbGVtZW50Qm9yZGVyIiwiRGVtb0VsZW1lbnRTY2FsZSIsIkRlbW9FbGVtZW50R3JpZCIsIm11bHRpcGx5IiwiZmFjdG9yIiwiQXJyYXkiLCJtYXAiLCJ4IiwiaSIsImRlZiIsImZvckNsYXNzTmFtZXMiLCJEZW1vRWxlbWVudFRhYmxlIiwibmFtZSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBb0JlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTBDO0FBQUEsTUFFOUNDLGVBRjhDLEdBRUtELEtBRkwsQ0FFOUNDLGVBRjhDO0FBQUEsTUFFN0JDLFVBRjZCLEdBRUtGLEtBRkwsQ0FFN0JFLFVBRjZCO0FBQUEsTUFFakJDLGtCQUZpQixHQUVLSCxLQUZMLENBRWpCRyxrQkFGaUI7QUFJckQsTUFBSUMsR0FBSjs7QUFFQSxXQUFTQyxNQUFULENBQWdCTCxLQUFoQixFQUFrQztBQUU5QixRQUFNTSxTQUFTLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxRQUF6Qjs7QUFFQSxZQUFRLEtBQVI7QUFDSTtBQUNJSCxXQUFHLGdCQUFHO0FBQUssbUJB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O0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEZTtBQUFBLGlCQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBVUk7QUFBQSx3QkFDQyxtSUFBSVIsS0FBSyxDQUFDLEVBQUQsQ0FBVCxFQUFlQyxHQUFmLENBQW1CLFVBQUNNLElBQUQsRUFBT0MsR0FBUDtBQUFBLG9DQUNoQjtBQUFBLDRCQUNLLG1JQUFJUixLQUFLLENBQUMsQ0FBRCxDQUFULEVBQWNDLEdBQWQsQ0FBa0IsVUFBQ00sSUFBRCxFQUFPQyxHQUFQO0FBQUEsd0NBQ2YsOERBQUMsdURBQUQ7QUFBQSw2Q0FDSTtBQUFBLGtDQUFLQSxHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEZTtBQUFBLG1CQUFsQjtBQURMLG1CQUFTQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGdCO0FBQUEsZUFBbkI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlDSCxDQXJDRDs7T0FBTUYsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3NzZmFicmljLW1vZHVsZXMvWy4uLnBhdGhdLjM3YzNmODYwMGUyZDUyMTRiNWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzZmFicmljICAgICAgICAgICAgICAgZnJvbSBcImNzc2ZhYnJpY1wiO1xyXG5pbXBvcnQgUmVhY3QgICAgICAgICAgICAgICAgICAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SlNYRWxlbWVudENvbnN0cnVjdG9yfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBJRGVtb0VsZW1lbnQge1xyXG4gICAgbW9kdWxlPzogc3RyaW5nO1xyXG4gICAgY3NzRmFicmljQ2xhc3NOYW1lPzogYW55O1xyXG4gICAgbW9kdWxlQXR0cmlidXRlPzogYW55O1xyXG4gICAgbW9kdWxlUnVsZT86IGFueTtcclxuICAgIGNoaWxkcmVuPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSURlbW9FbGVtZW50R3JpZFByb3BzIHtcclxuICAgIG1vZHVsZT86IHN0cmluZztcclxuICAgIGNzc0ZhYnJpY0NsYXNzTmFtZT86IGFueTtcclxuICAgIG1vZHVsZUF0dHJpYnV0ZT86IGFueTtcclxuICAgIG1vZHVsZVJ1bGU/OiBhbnk7XHJcbiAgICBjaGlsZHJlbj86IGFueTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9FbGVtZW50KHByb3BzOiBJRGVtb0VsZW1lbnQpIHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBsZXQgb3V0O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBEcmF3SXQocHJvcHM/OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVucyA9IHByb3BzPy5jaGlsZHJlbjtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKCdtb2QnKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBvdXQgPSA8ZGl2IGNsYXNzTmFtZT17J3ctc20tZnVsbCB3LTgtbWluJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gY2xhc3NOYW1lPXtcInBhZCBkc3Atbm9uZVwifT4ue21vZHVsZUF0dHJpYnV0ZX0gLnttb2R1bGVSdWxlfSAue2Nzc0ZhYnJpY0NsYXNzTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7RHJhd1R5cGUoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBEcmF3VHlwZSgpIHtcclxuICAgICAgICBsZXQgY29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKG1vZHVsZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY29sb3JcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRDb2xvciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJvcmRlci1jb2xvclwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEJvcmRlckNvbG9yIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFja2dyb3VuZC1jb2xvclwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFja2dyb3VuZC10aGVtZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInRoZW1lXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFyZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50TWFyZ2luIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGFkZGluZ1wiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudFBhZGRpbmcgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJib3JkZXJcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRCb3JkZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJncmlkXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50R3JpZCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50U2NhbGUgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YWJsZVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudFRhYmxlIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwidGV4dC1hbGlnblwiOlxyXG4gICAgICAgICAgICBjYXNlIFwidGV4dC1zaGFkb3dcIjpcclxuICAgICAgICAgICAgY2FzZSBcInRleHQtdHJhbnNmb3JtXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmb250LXdlaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudFRleHQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgaC1mdWxsJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge21vZHVsZUF0dHJpYnV0ZX0ge2Nzc0ZhYnJpY0NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgey8qe21vZHVsZUF0dHJpYnV0ZX0qL30gICAgICB7Y29udGVudH1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gRHJhd0l0KHByb3BzKTtcclxufVxyXG5cclxuY29uc3QgRGVtb0VsZW1lbnRUZXh0ID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIHBhZC0yIG92ZXJmbG93LW5vbmUgc2NhbGUtdy0xNiBib3JkZXItYid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtZWxsaXBzaXNcIn0+aGVyZSBpcyBzb21lIHtjc3NGYWJyaWNDbGFzc05hbWV9IHRleHQ8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e1widGV4dC1lbGxpcHNpc1wifT5oZXJlIGlzIHNvbWUge2Nzc0ZhYnJpY0NsYXNzTmFtZX0gdGV4dCwgZnJvbSBjc3NmYWJyaWM8L3A+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgRGVtb0VsZW1lbnRCYWNrZ3JvdW5kQ29sb3IgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgdy1zbS1hdXRvIHctOCBoLXNtLTIgaC04IHBhZC0xIG92ZXJmbG93LW5vbmUnfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widGV4dC1lbGxpcHNpc1wifT57Y3NzRmFicmljQ2xhc3NOYW1lfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IERlbW9FbGVtZW50Qm9yZGVyQ29sb3IgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eydib3JkZXItNCAnKyBjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGgtZnVsbCB3LTE2IHBhZCd9PlxyXG4gICAgICAgLntjc3NGYWJyaWNDbGFzc05hbWV9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudENvbG9yID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGgtZnVsbCBwYWQnfT5cclxuICAgICAgIHRoaXMgaXMgc28ge2Nzc0ZhYnJpY0NsYXNzTmFtZX1cclxuICAgIDwvZGl2PlxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50TWFyZ2luID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy0xNiBoLTItbWluJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgYm9yZGVyJ30+Jm5ic3A7bWFyZ2luJm5ic3A7PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudFBhZGRpbmcgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyd3LTE2IGgtNC1taW4gcGFkLTEgZ3JpZC1oIGdyaWQtYWxpZ24tbWlkZGxlIGdyaWQtYWxpZ24tY2VudGVyJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgYm9yZGVyJ30+Jm5ic3A7cGFkZGluZyZuYnNwOzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IERlbW9FbGVtZW50Qm9yZGVyID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy0xNiBoLTQgcGFkLTEgZ3JpZC1oIGdyaWQtYWxpZ24tbWlkZGxlIGdyaWQtYWxpZ24tY2VudGVyJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcnfT4mbmJzcDtib3JkZXImbmJzcDs8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50U2NhbGUgID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy02NCBwYWQtMSd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGJvcmRlciBtYXJnIHBhZCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jyd9PiZuYnNwOyZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRHcmlkICAgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGNvbnN0IG11bHRpcGx5ID0gKGZhY3RvcjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5BcnJheShmYWN0b3IpXS5tYXAoKHgsIGkpID0+IDxkaXYgY2xhc3NOYW1lPXsnYm9yZGVyIG1hcmcgcGFkIHctNCBoLTInfT4mbmJzcDt7KytpfSZuYnNwOzwvZGl2PilcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGVmID0gPGRpdiBjbGFzc05hbWU9eyd3LTY0IHBhZC0xJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkLWggJyArIGNzc0ZhYnJpY0NsYXNzTmFtZSArIFwiIGgtOFwifT5cclxuICAgICAgICAgICAge211bHRpcGx5KDMpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIGNvbnN0IGZvckNsYXNzTmFtZXMgPSA8ZGl2IGNsYXNzTmFtZT17J2dyaWQtaCB3LTY0IHBhZC0xIGgtMTYtbWluJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widy1taWQgYm9yZGVyLXIgZ3JpZC12XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYWRcIn0+LmdyaWQtaDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWQtbWFpbiBncmlkLWggJyArIGNzc0ZhYnJpY0NsYXNzTmFtZSArIFwiIGgtOFwifT5cclxuICAgICAgICAgICAgICAgIHttdWx0aXBseSg2KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC12XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYWRcIn0+LmdyaWQtdjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWQtbWFpbiBncmlkLXYgJyArIGNzc0ZhYnJpY0NsYXNzTmFtZSArIFwiIGgtOFwifT5cclxuICAgICAgICAgICAgICAgIHttdWx0aXBseSgzKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgc3dpdGNoIChtb2R1bGVSdWxlKSB7XHJcbiAgICAgICAgY2FzZSBcImNsYXNzbmFtZXNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Zm9yQ2xhc3NOYW1lc308L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2RlZn08L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgfVxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50VGFibGUgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIGdyaWQtd3JhcCByZWxhdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImgtMTYgdy02NFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJoLWZ1bGwgZ3JpZC12IG92ZXJmbG93LWogcmVsYXRpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e1wiYm9yZGVyLWItMSBwYWQtdGItNFwifT50YWJsZSA6IHtjc3NGYWJyaWNDbGFzc05hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1tYWluICBvdmVyZmxvdy1hdXRvIG1hcmctdC00XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17XCJ0YWJsZSB0YmwtbGF5b3V0ICB3LWZ1bGwgdGJsLVwiICsgY3NzRmFicmljQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDYpXS5tYXAoKG5hbWUsIHZhbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoMzApXS5tYXAoKG5hbWUsIHZhbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt2YWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg2KV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dmFsICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=