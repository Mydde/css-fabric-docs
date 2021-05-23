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
          lineNumber: 48,
          columnNumber: 27
        }, this);
        break;

      case "border-color":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementBorderColor, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }, this);
        break;

      case "background-color":
      case "background-themed":
      case "theme":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementBackgroundColor, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 27
        }, this);
        break;

      case "margin":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementMargin, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 27
        }, this);
        break;

      case "padding":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementPadding, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 27
        }, this);
        break;

      case "border":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementBorder, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 27
        }, this);
        break;

      case "grid":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementGrid, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 27
        }, this);
        break;

      case "scale":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementScale, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 27
        }, this);
        break;

      case "table":
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DemoElementTable, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
          lineNumber: 81,
          columnNumber: 27
        }, this);
        break;

      default:
        content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: cssFabricClassName + ' h-full',
          children: [moduleAttribute, " ", cssFabricClassName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 27
        }, this);
        break;
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [" ", content]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
    className: ' pad-2 overflow-none scale-w-16',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
      className: 'border-l-4 pad-l theme-border-primary-dark dsp-inline',
      children: [".", cssFabricClassName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: cssFabricClassName + " text-ellipsis",
      children: ["Here is some ", cssFabricClassName, " text"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: cssFabricClassName + " text-ellipsis",
      children: ["This ", cssFabricClassName, " text is from cssfabric a css sass framework"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 12
  }, _this);
};

_c2 = DemoElementText;

var DemoElementBackgroundColor = function DemoElementBackgroundColor(props) {
  var moduleAttribute = props.moduleAttribute,
      moduleRule = props.moduleRule,
      cssFabricClassName = props.cssFabricClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: cssFabricClassName + ' w-sm-auto w-8 h-sm-2 h-8 pad-1 overflow-none border',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "text-ellipsis",
      children: cssFabricClassName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
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
    lineNumber: 121,
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
    lineNumber: 128,
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
      lineNumber: 136,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
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
      className: cssFabricClassName + ' border ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: ' pad-lr-4 border ',
        children: ["\xA0", moduleRule, "\xA0"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 142,
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
      lineNumber: 153,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
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
        lineNumber: 161,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 159,
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
        lineNumber: 170,
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
      lineNumber: 174,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
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
        lineNumber: 181,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-h ' + cssFabricClassName + " h-8",
        children: multiply(6)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid-v",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pad",
        children: ".grid-v"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-v ' + cssFabricClassName + " h-8",
        children: multiply(3)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 27
  }, _this);

  switch (moduleRule) {
    case "classnames":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: forClassNames
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 20
      }, _this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: def
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
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
          lineNumber: 209,
          columnNumber: 21
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
                      lineNumber: 216,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 37
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", {
              children: (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(30)).map(function (name, val) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", {
                  children: (0,D_boulot_app_node_cssfabric_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(6)).map(function (name, val) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", {
                        children: val + 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 226,
                        columnNumber: 45
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 41
                    }, _this);
                  })
                }, val, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 33
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 206,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVtb0VsZW1lbnRzL0RlbW9FbGVtZW50LnRzeCJdLCJuYW1lcyI6WyJEZW1vRWxlbWVudCIsInByb3BzIiwibW9kdWxlQXR0cmlidXRlIiwibW9kdWxlUnVsZSIsImNzc0ZhYnJpY0NsYXNzTmFtZSIsIm91dCIsIkRyYXdJdCIsImNoaWxkcmVucyIsImNoaWxkcmVuIiwiZGlzcGxheSIsIkRyYXdUeXBlIiwiY29udGVudCIsIkRlbW9FbGVtZW50VGV4dCIsIkRlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yIiwiRGVtb0VsZW1lbnRCb3JkZXJDb2xvciIsIkRlbW9FbGVtZW50Q29sb3IiLCJEZW1vRWxlbWVudE1hcmdpbiIsIkRlbW9FbGVtZW50UGFkZGluZyIsIkRlbW9FbGVtZW50Qm9yZGVyIiwiRGVtb0VsZW1lbnRTY2FsZSIsIkRlbW9FbGVtZW50R3JpZCIsIm11bHRpcGx5IiwiZmFjdG9yIiwiQXJyYXkiLCJtYXAiLCJ4IiwiaSIsImRlZiIsImZvckNsYXNzTmFtZXMiLCJEZW1vRWxlbWVudFRhYmxlIiwibmFtZSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBb0JlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTBDO0FBQUEsTUFFOUNDLGVBRjhDLEdBRUtELEtBRkwsQ0FFOUNDLGVBRjhDO0FBQUEsTUFFN0JDLFVBRjZCLEdBRUtGLEtBRkwsQ0FFN0JFLFVBRjZCO0FBQUEsTUFFakJDLGtCQUZpQixHQUVLSCxLQUZMLENBRWpCRyxrQkFGaUI7QUFJckQsTUFBSUMsR0FBSjs7QUFFQSxXQUFTQyxNQUFULENBQWdCTCxLQUFoQixFQUFrQztBQUU5QixRQUFNTSxTQUFTLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxRQUF6Qjs7QUFFQSxZQUFRLEtBQVI7QUFDSTtBQUNJSCxXQUFHLGdCQUFHO0FBQUssbUJB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LGtDQUFrQ0Esa0JBQXBEO0FBQUEsb0NBQ0k7QUFBQSxxQ0FDQTtBQUFBLDBCQUNLLG1JQUFJbUIsS0FBSyxDQUFDLENBQUQsQ0FBVCxFQUFjQyxHQUFkLENBQWtCLFVBQUNNLElBQUQsRUFBT0MsR0FBUDtBQUFBLHNDQUNmLDhEQUFDLHVEQUFEO0FBQUEsMkNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURlO0FBQUEsaUJBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFVSTtBQUFBLHdCQUNDLG1JQUFJUixLQUFLLENBQUMsRUFBRCxDQUFULEVBQWVDLEdBQWYsQ0FBbUIsVUFBQ00sSUFBRCxFQUFPQyxHQUFQO0FBQUEsb0NBQ2hCO0FBQUEsNEJBQ0ssbUlBQUlSLEtBQUssQ0FBQyxDQUFELENBQVQsRUFBY0MsR0FBZCxDQUFrQixVQUFDTSxJQUFELEVBQU9DLEdBQVA7QUFBQSx3Q0FDZiw4REFBQyx1REFBRDtBQUFBLDZDQUNJO0FBQUEsa0NBQUtBLEdBQUcsR0FBRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURlO0FBQUEsbUJBQWxCO0FBREwsbUJBQVNBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEZ0I7QUFBQSxlQUFuQjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUNILENBckNEOztPQUFNRixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jc3NmYWJyaWMtbW9kdWxlcy9bLi4ucGF0aF0uMTA2NWNjYmI5NWZiNjA2MTBhNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3NmYWJyaWMgICAgICAgICAgICAgICBmcm9tIFwiY3NzZmFicmljXCI7XHJcbmltcG9ydCBSZWFjdCAgICAgICAgICAgICAgICAgICBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtKU1hFbGVtZW50Q29uc3RydWN0b3J9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElEZW1vRWxlbWVudCB7XHJcbiAgICBtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICBjc3NGYWJyaWNDbGFzc05hbWU/OiBhbnk7XHJcbiAgICBtb2R1bGVBdHRyaWJ1dGU/OiBhbnk7XHJcbiAgICBtb2R1bGVSdWxlPzogYW55O1xyXG4gICAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRGVtb0VsZW1lbnRHcmlkUHJvcHMge1xyXG4gICAgbW9kdWxlPzogc3RyaW5nO1xyXG4gICAgY3NzRmFicmljQ2xhc3NOYW1lPzogYW55O1xyXG4gICAgbW9kdWxlQXR0cmlidXRlPzogYW55O1xyXG4gICAgbW9kdWxlUnVsZT86IGFueTtcclxuICAgIGNoaWxkcmVuPzogYW55O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0VsZW1lbnQocHJvcHM6IElEZW1vRWxlbWVudCkge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGxldCBvdXQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIERyYXdJdChwcm9wcz86IGFueSk6IGFueSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW5zID0gcHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoJ21vZCcpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG91dCA9IDxkaXYgY2xhc3NOYW1lPXsndy1zbS1mdWxsIHctOC1taW4nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJwYWQgZHNwLW5vbmVcIn0+Lnttb2R1bGVBdHRyaWJ1dGV9IC57bW9kdWxlUnVsZX0gLntjc3NGYWJyaWNDbGFzc05hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge0RyYXdUeXBlKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRHJhd1R5cGUoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChtb2R1bGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNvbG9yXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50Q29sb3Igey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJib3JkZXItY29sb3JcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRCb3JkZXJDb2xvciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhY2tncm91bmQtY29sb3JcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhY2tncm91bmQtdGhlbWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aGVtZVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEJhY2tncm91bmRDb2xvciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hcmdpblwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudE1hcmdpbiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhZGRpbmdcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRQYWRkaW5nIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYm9yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50Qm9yZGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ3JpZFwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEdyaWQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FsZVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudFNjYWxlIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGFibGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRUYWJsZSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInRleHQtYWxpZ25cIjpcclxuICAgICAgICAgICAgY2FzZSBcInRleHQtc2hhZG93XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0LXRyYW5zZm9ybVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZm9udC13ZWlnaHRcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRUZXh0IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGgtZnVsbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttb2R1bGVBdHRyaWJ1dGV9IHtjc3NGYWJyaWNDbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHsvKnttb2R1bGVBdHRyaWJ1dGV9Ki99IHtjb250ZW50fVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBEcmF3SXQocHJvcHMpO1xyXG59XHJcblxyXG5jb25zdCBEZW1vRWxlbWVudFRleHQgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eycgcGFkLTIgb3ZlcmZsb3ctbm9uZSBzY2FsZS13LTE2J30+XHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT17J2JvcmRlci1sLTQgcGFkLWwgdGhlbWUtYm9yZGVyLXByaW1hcnktZGFyayBkc3AtaW5saW5lJ30+Lntjc3NGYWJyaWNDbGFzc05hbWV9PC9oNj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArIFwiIHRleHQtZWxsaXBzaXNcIn0+SGVyZSBpcyBzb21lIHtjc3NGYWJyaWNDbGFzc05hbWV9IHRleHQ8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyBcIiB0ZXh0LWVsbGlwc2lzXCJ9PlRoaXMge2Nzc0ZhYnJpY0NsYXNzTmFtZX0gdGV4dCBpcyBmcm9tIGNzc2ZhYnJpYyBhIGNzcyBzYXNzXHJcbiAgICAgICAgICAgIGZyYW1ld29yazwvcD5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBEZW1vRWxlbWVudEJhY2tncm91bmRDb2xvciA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyB3LXNtLWF1dG8gdy04IGgtc20tMiBoLTggcGFkLTEgb3ZlcmZsb3ctbm9uZSBib3JkZXInfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LWVsbGlwc2lzXCJ9Pntjc3NGYWJyaWNDbGFzc05hbWV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgRGVtb0VsZW1lbnRCb3JkZXJDb2xvciA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J2JvcmRlci00ICcgKyBjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGgtZnVsbCB3LTE2IHBhZCd9PlxyXG4gICAgICAgIC57Y3NzRmFicmljQ2xhc3NOYW1lfVxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRDb2xvciAgICAgICA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBoLWZ1bGwgcGFkJ30+XHJcbiAgICAgICAgdGhpcyBpcyBzbyB7Y3NzRmFicmljQ2xhc3NOYW1lfVxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRNYXJnaW4gICAgICA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctMTYgaC0yLW1pbid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGJvcmRlcid9PiZuYnNwO21hcmdpbiZuYnNwOzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRQYWRkaW5nICAgICA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctMTYgaC00LW1pbiBwYWQtMSBncmlkLWggZ3JpZC1hbGlnbi1taWRkbGUgZ3JpZC1hbGlnbi1jZW50ZXInfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBib3JkZXIgJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgICAgJyBwYWQtbHItNCBib3JkZXIgJ30+Jm5ic3A7e21vZHVsZVJ1bGV9Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgRGVtb0VsZW1lbnRCb3JkZXIgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyd3LTE2IGgtNCBwYWQtMSBncmlkLWggZ3JpZC1hbGlnbi1taWRkbGUgZ3JpZC1hbGlnbi1jZW50ZXInfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyd9PiZuYnNwO2JvcmRlciZuYnNwOzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRTY2FsZSAgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyd3LTY0IHBhZC0xJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0ZhYnJpY0NsYXNzTmFtZSArICcgYm9yZGVyIG1hcmcgcGFkJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnJ30+Jm5ic3A7Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudEdyaWQgICA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3QgbXVsdGlwbHkgPSAoZmFjdG9yOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gWy4uLkFycmF5KGZhY3RvcildLm1hcCgoeCwgaSkgPT4gPGRpdiBjbGFzc05hbWU9eydib3JkZXIgbWFyZyBwYWQgdy00IGgtMid9PiZuYnNwO3srK2l9Jm5ic3A7PC9kaXY+KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBkZWYgPSA8ZGl2IGNsYXNzTmFtZT17J3ctNjQgcGFkLTEnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWQtaCAnICsgY3NzRmFicmljQ2xhc3NOYW1lICsgXCIgaC04XCJ9PlxyXG4gICAgICAgICAgICB7bXVsdGlwbHkoMyl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgY29uc3QgZm9yQ2xhc3NOYW1lcyA9IDxkaXYgY2xhc3NOYW1lPXsnZ3JpZC1oIHctNjQgcGFkLTEgaC0xNi1taW4nfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ3LW1pZCBib3JkZXItciBncmlkLXZcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZFwifT4uZ3JpZC1oPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3JpZC1tYWluIGdyaWQtaCAnICsgY3NzRmFicmljQ2xhc3NOYW1lICsgXCIgaC04XCJ9PlxyXG4gICAgICAgICAgICAgICAge211bHRpcGx5KDYpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLXZcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBhZFwifT4uZ3JpZC12PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3JpZC1tYWluIGdyaWQtdiAnICsgY3NzRmFicmljQ2xhc3NOYW1lICsgXCIgaC04XCJ9PlxyXG4gICAgICAgICAgICAgICAge211bHRpcGx5KDMpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBzd2l0Y2ggKG1vZHVsZVJ1bGUpIHtcclxuICAgICAgICBjYXNlIFwiY2xhc3NuYW1lc1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50Pntmb3JDbGFzc05hbWVzfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57ZGVmfTwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICB9XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRUYWJsZSAgPSAocHJvcHM6IElEZW1vRWxlbWVudEdyaWRQcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIGdyaWQtd3JhcCByZWxhdGl2ZVwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaC0xNiB3LTY0XCJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaC1mdWxsIGdyaWQtdiBvdmVyZmxvdy1qIHJlbGF0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e1wiYm9yZGVyLWItMSBwYWQtdGItNFwifT50YWJsZSA6IHtjc3NGYWJyaWNDbGFzc05hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLW1haW4gIG92ZXJmbG93LWF1dG8gbWFyZy10LTRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e1widGFibGUgdGJsLWxheW91dCAgdy1mdWxsIHRibC1cIiArIGNzc0ZhYnJpY0NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg2KV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSgzMCldLm1hcCgobmFtZSwgdmFsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg2KV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3ZhbCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9