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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "text-ellipsis",
      children: ["here is some ", cssFabricClassName, " text"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "text-ellipsis",
      children: ["this ", cssFabricClassName, " text is from cssfabric a css sass framework"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVtb0VsZW1lbnRzL0RlbW9FbGVtZW50LnRzeCJdLCJuYW1lcyI6WyJEZW1vRWxlbWVudCIsInByb3BzIiwibW9kdWxlQXR0cmlidXRlIiwibW9kdWxlUnVsZSIsImNzc0ZhYnJpY0NsYXNzTmFtZSIsIm91dCIsIkRyYXdJdCIsImNoaWxkcmVucyIsImNoaWxkcmVuIiwiZGlzcGxheSIsIkRyYXdUeXBlIiwiY29udGVudCIsIkRlbW9FbGVtZW50VGV4dCIsIkRlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yIiwiRGVtb0VsZW1lbnRCb3JkZXJDb2xvciIsIkRlbW9FbGVtZW50Q29sb3IiLCJEZW1vRWxlbWVudE1hcmdpbiIsIkRlbW9FbGVtZW50UGFkZGluZyIsIkRlbW9FbGVtZW50Qm9yZGVyIiwiRGVtb0VsZW1lbnRTY2FsZSIsIkRlbW9FbGVtZW50R3JpZCIsIm11bHRpcGx5IiwiZmFjdG9yIiwiQXJyYXkiLCJtYXAiLCJ4IiwiaSIsImRlZiIsImZvckNsYXNzTmFtZXMiLCJEZW1vRWxlbWVudFRhYmxlIiwibmFtZSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBb0JlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTBDO0FBQUEsTUFFOUNDLGVBRjhDLEdBRUtELEtBRkwsQ0FFOUNDLGVBRjhDO0FBQUEsTUFFN0JDLFVBRjZCLEdBRUtGLEtBRkwsQ0FFN0JFLFVBRjZCO0FBQUEsTUFFakJDLGtCQUZpQixHQUVLSCxLQUZMLENBRWpCRyxrQkFGaUI7QUFJckQsTUFBSUMsR0FBSjs7QUFFQSxXQUFTQyxNQUFULENBQWdCTCxLQUFoQixFQUFrQztBQUU5QixRQUFNTSxTQUFTLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxRQUF6Qjs7QUFFQSxZQUFRLEtBQVI7QUFDSTtBQUNJSCxXQUFHLGdCQUFHO0FBQUssbUJB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QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURlO0FBQUEsaUJBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFVSTtBQUFBLHdCQUNDLG1JQUFJUixLQUFLLENBQUMsRUFBRCxDQUFULEVBQWVDLEdBQWYsQ0FBbUIsVUFBQ00sSUFBRCxFQUFPQyxHQUFQO0FBQUEsb0NBQ2hCO0FBQUEsNEJBQ0ssbUlBQUlSLEtBQUssQ0FBQyxDQUFELENBQVQsRUFBY0MsR0FBZCxDQUFrQixVQUFDTSxJQUFELEVBQU9DLEdBQVA7QUFBQSx3Q0FDZiw4REFBQyx1REFBRDtBQUFBLDZDQUNJO0FBQUEsa0NBQUtBLEdBQUcsR0FBRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURlO0FBQUEsbUJBQWxCO0FBREwsbUJBQVNBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEZ0I7QUFBQSxlQUFuQjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUNILENBckNEOztPQUFNRixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jc3NmYWJyaWMtbW9kdWxlcy9bLi4ucGF0aF0uMDMxYzdjNDI3NTc2NDM3ZmQ2ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3NmYWJyaWMgICAgICAgICAgICAgICBmcm9tIFwiY3NzZmFicmljXCI7XHJcbmltcG9ydCBSZWFjdCAgICAgICAgICAgICAgICAgICBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtKU1hFbGVtZW50Q29uc3RydWN0b3J9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElEZW1vRWxlbWVudCB7XHJcbiAgICBtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICBjc3NGYWJyaWNDbGFzc05hbWU/OiBhbnk7XHJcbiAgICBtb2R1bGVBdHRyaWJ1dGU/OiBhbnk7XHJcbiAgICBtb2R1bGVSdWxlPzogYW55O1xyXG4gICAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRGVtb0VsZW1lbnRHcmlkUHJvcHMge1xyXG4gICAgbW9kdWxlPzogc3RyaW5nO1xyXG4gICAgY3NzRmFicmljQ2xhc3NOYW1lPzogYW55O1xyXG4gICAgbW9kdWxlQXR0cmlidXRlPzogYW55O1xyXG4gICAgbW9kdWxlUnVsZT86IGFueTtcclxuICAgIGNoaWxkcmVuPzogYW55O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0VsZW1lbnQocHJvcHM6IElEZW1vRWxlbWVudCkge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGxldCBvdXQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIERyYXdJdChwcm9wcz86IGFueSk6IGFueSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW5zID0gcHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoJ21vZCcpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG91dCA9IDxkaXYgY2xhc3NOYW1lPXsndy1zbS1mdWxsIHctOC1taW4nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fSBjbGFzc05hbWU9e1wicGFkIGRzcC1ub25lXCJ9Pi57bW9kdWxlQXR0cmlidXRlfSAue21vZHVsZVJ1bGV9IC57Y3NzRmFicmljQ2xhc3NOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtEcmF3VHlwZSgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIERyYXdUeXBlKCkge1xyXG4gICAgICAgIGxldCBjb250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAobW9kdWxlQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb2xvclwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudENvbG9yIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYm9yZGVyLWNvbG9yXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50Qm9yZGVyQ29sb3Igey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYWNrZ3JvdW5kLXRoZW1lZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwidGhlbWVcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRCYWNrZ3JvdW5kQ29sb3Igey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYXJnaW5cIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRNYXJnaW4gey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYWRkaW5nXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50UGFkZGluZyB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJvcmRlclwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEJvcmRlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdyaWRcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRHcmlkIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2NhbGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRTY2FsZSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRhYmxlXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50VGFibGUgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0LWFsaWduXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0LXNoYWRvd1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwidGV4dC10cmFuc2Zvcm1cIjpcclxuICAgICAgICAgICAgY2FzZSBcImZvbnQtd2VpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50VGV4dCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBoLWZ1bGwnfT5cclxuICAgICAgICAgICAgICAgICAgICB7bW9kdWxlQXR0cmlidXRlfSB7Y3NzRmFicmljQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7Lyp7bW9kdWxlQXR0cmlidXRlfSovfSAgICAgIHtjb250ZW50fVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBEcmF3SXQocHJvcHMpO1xyXG59XHJcblxyXG5jb25zdCBEZW1vRWxlbWVudFRleHQgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgcGFkLTIgb3ZlcmZsb3ctbm9uZSBzY2FsZS13LTE2IGJvcmRlci1iJ30+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRleHQtZWxsaXBzaXNcIn0+aGVyZSBpcyBzb21lIHtjc3NGYWJyaWNDbGFzc05hbWV9IHRleHQ8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRleHQtZWxsaXBzaXNcIn0+dGhpcyB7Y3NzRmFicmljQ2xhc3NOYW1lfSB0ZXh0IGlzIGZyb20gY3NzZmFicmljIGEgY3NzIHNhc3MgZnJhbWV3b3JrPC9wPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IERlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIHctc20tYXV0byB3LTggaC1zbS0yIGgtOCBwYWQtMSBvdmVyZmxvdy1ub25lJ30+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtZWxsaXBzaXNcIn0+e2Nzc0ZhYnJpY0NsYXNzTmFtZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBEZW1vRWxlbWVudEJvcmRlckNvbG9yID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsnYm9yZGVyLTQgJysgY3NzRmFicmljQ2xhc3NOYW1lICsgJyBoLWZ1bGwgdy0xNiBwYWQnfT5cclxuICAgICAgIC57Y3NzRmFicmljQ2xhc3NOYW1lfVxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRDb2xvciA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBoLWZ1bGwgcGFkJ30+XHJcbiAgICAgICB0aGlzIGlzIHNvIHtjc3NGYWJyaWNDbGFzc05hbWV9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudE1hcmdpbiA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctMTYgaC0yLW1pbid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGJvcmRlcid9PiZuYnNwO21hcmdpbiZuYnNwOzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRQYWRkaW5nID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy0xNiBoLTQtbWluIHBhZC0xIGdyaWQtaCBncmlkLWFsaWduLW1pZGRsZSBncmlkLWFsaWduLWNlbnRlcid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGJvcmRlcid9PiZuYnNwO3BhZGRpbmcmbmJzcDs8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBEZW1vRWxlbWVudEJvcmRlciA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctMTYgaC00IHBhZC0xIGdyaWQtaCBncmlkLWFsaWduLW1pZGRsZSBncmlkLWFsaWduLWNlbnRlcid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnJ30+Jm5ic3A7Ym9yZGVyJm5ic3A7PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudFNjYWxlICA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctNjQgcGFkLTEnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBib3JkZXIgbWFyZyBwYWQnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eycnfT4mbmJzcDsmbmJzcDs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50R3JpZCAgID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBjb25zdCBtdWx0aXBseSA9IChmYWN0b3I6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkoZmFjdG9yKV0ubWFwKCh4LCBpKSA9PiA8ZGl2IGNsYXNzTmFtZT17J2JvcmRlciBtYXJnIHBhZCB3LTQgaC0yJ30+Jm5ic3A7eysraX0mbmJzcDs8L2Rpdj4pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGRlZiA9IDxkaXYgY2xhc3NOYW1lPXsndy02NCBwYWQtMSd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3JpZC1oICcgKyBjc3NGYWJyaWNDbGFzc05hbWUgKyBcIiBoLThcIn0+XHJcbiAgICAgICAgICAgIHttdWx0aXBseSgzKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBjb25zdCBmb3JDbGFzc05hbWVzID0gPGRpdiBjbGFzc05hbWU9eydncmlkLWggdy02NCBwYWQtMSBoLTE2LW1pbid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctbWlkIGJvcmRlci1yIGdyaWQtdlwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFkXCJ9Pi5ncmlkLWg8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkLW1haW4gZ3JpZC1oICcgKyBjc3NGYWJyaWNDbGFzc05hbWUgKyBcIiBoLThcIn0+XHJcbiAgICAgICAgICAgICAgICB7bXVsdGlwbHkoNil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtdlwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFkXCJ9Pi5ncmlkLXY8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkLW1haW4gZ3JpZC12ICcgKyBjc3NGYWJyaWNDbGFzc05hbWUgKyBcIiBoLThcIn0+XHJcbiAgICAgICAgICAgICAgICB7bXVsdGlwbHkoMyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIHN3aXRjaCAobW9kdWxlUnVsZSkge1xyXG4gICAgICAgIGNhc2UgXCJjbGFzc25hbWVzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2ZvckNsYXNzTmFtZXN9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PntkZWZ9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgIH1cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudFRhYmxlID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtaCBncmlkLXdyYXAgcmVsYXRpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJoLTE2IHctNjRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaC1mdWxsIGdyaWQtdiBvdmVyZmxvdy1qIHJlbGF0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtcImJvcmRlci1iLTEgcGFkLXRiLTRcIn0+dGFibGUgOiB7Y3NzRmFicmljQ2xhc3NOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtbWFpbiAgb3ZlcmZsb3ctYXV0byBtYXJnLXQtNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e1widGFibGUgdGJsLWxheW91dCAgdy1mdWxsIHRibC1cIiArIGNzc0ZhYnJpY0NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg2KV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDMwKV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoNildLm1hcCgobmFtZSwgdmFsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3ZhbCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9