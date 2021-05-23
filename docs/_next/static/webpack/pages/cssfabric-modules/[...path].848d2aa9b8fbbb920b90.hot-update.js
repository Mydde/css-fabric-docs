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
    className: ' pad-2 overflow-none scale-w-16',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
      className: 'border-b',
      children: ["- ", cssFabricClassName]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: cssFabricClassName + " text-ellipsis",
      children: ["Here is some ", cssFabricClassName, " text"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: cssFabricClassName + " text-ellipsis",
      children: ["This ", cssFabricClassName, " text is from cssfabric a css sass framework"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 112,
      columnNumber: 10
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 111,
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
    lineNumber: 119,
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
    lineNumber: 126,
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
      lineNumber: 134,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
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
      lineNumber: 141,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 140,
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
      lineNumber: 149,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
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
        lineNumber: 157,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
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
        lineNumber: 166,
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
      lineNumber: 170,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 169,
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
        lineNumber: 177,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-h ' + cssFabricClassName + " h-8",
        children: multiply(6)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid-v",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pad",
        children: ".grid-v"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: 'grid-main grid-v ' + cssFabricClassName + " h-8",
        children: multiply(3)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 27
  }, _this);

  switch (moduleRule) {
    case "classnames":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: forClassNames
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 20
      }, _this);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: def
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
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
          lineNumber: 205,
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
                      lineNumber: 212,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
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
                        lineNumber: 222,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 45
                    }, _this);
                  })
                }, val, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVtb0VsZW1lbnRzL0RlbW9FbGVtZW50LnRzeCJdLCJuYW1lcyI6WyJEZW1vRWxlbWVudCIsInByb3BzIiwibW9kdWxlQXR0cmlidXRlIiwibW9kdWxlUnVsZSIsImNzc0ZhYnJpY0NsYXNzTmFtZSIsIm91dCIsIkRyYXdJdCIsImNoaWxkcmVucyIsImNoaWxkcmVuIiwiZGlzcGxheSIsIkRyYXdUeXBlIiwiY29udGVudCIsIkRlbW9FbGVtZW50VGV4dCIsIkRlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yIiwiRGVtb0VsZW1lbnRCb3JkZXJDb2xvciIsIkRlbW9FbGVtZW50Q29sb3IiLCJEZW1vRWxlbWVudE1hcmdpbiIsIkRlbW9FbGVtZW50UGFkZGluZyIsIkRlbW9FbGVtZW50Qm9yZGVyIiwiRGVtb0VsZW1lbnRTY2FsZSIsIkRlbW9FbGVtZW50R3JpZCIsIm11bHRpcGx5IiwiZmFjdG9yIiwiQXJyYXkiLCJtYXAiLCJ4IiwiaSIsImRlZiIsImZvckNsYXNzTmFtZXMiLCJEZW1vRWxlbWVudFRhYmxlIiwibmFtZSIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBb0JlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTBDO0FBQUEsTUFFOUNDLGVBRjhDLEdBRUtELEtBRkwsQ0FFOUNDLGVBRjhDO0FBQUEsTUFFN0JDLFVBRjZCLEdBRUtGLEtBRkwsQ0FFN0JFLFVBRjZCO0FBQUEsTUFFakJDLGtCQUZpQixHQUVLSCxLQUZMLENBRWpCRyxrQkFGaUI7QUFJckQsTUFBSUMsR0FBSjs7QUFFQSxXQUFTQyxNQUFULENBQWdCTCxLQUFoQixFQUFrQztBQUU5QixRQUFNTSxTQUFTLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxRQUF6Qjs7QUFFQSxZQUFRLEtBQVI7QUFDSTtBQUNJSCxXQUFHLGdCQUFHO0FBQUssbUJBQVMsRUFBRSxtQkFBaEI7QUFBQSxrQ0FDRjtBQUFLLGlCQUFLLEVBQUU7QUFBQ0kscUJBQU8sRUFBQztBQUFULGFBQVo7QUFBOEIscUJBQVMsRUFBRSxjQUF6QztBQUFBLDRCQUEyRFAsZUFBM0QsUUFBOEVDLFVBQTlFLFFBQTRGQyxrQkFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURFLEVBRURNLFFBQVEsRUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQU47QUFGUjs7QUFPQSxXQUFPTCxHQUFQO0FBQ0g7O0FBRUQsV0FBU0ssUUFBVCxHQUFvQjtBQUNoQixRQUFJQyxPQUFKOztBQUVBLFlBQVFULGVBQVI7QUFDSSxXQUFLLE9BQUw7QUFDSVMsZUFBTyxnQkFBRyw4REFBQyxnQkFBRCxvQkFBc0JWLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVY7QUFDQTs7QUFDSixXQUFLLGNBQUw7QUFDSVUsZUFBTyxnQkFBRyw4REFBQyxzQkFBRCxvQkFBNEJWLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVY7QUFDQTs7QUFDSixXQUFLLGtCQUFMO0FBQ0EsV0FBSyxtQkFBTDtBQUNBLFdBQUssT0FBTDtBQUNJVSxlQUFPLGdCQUFHLDhEQUFDLDBCQUFELG9CQUFnQ1YsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVjtBQUNBOztBQUNKLFdBQUssUUFBTDtBQUNJVSxlQUFPLGdCQUFHLDhEQUFDLGlCQUFELG9CQUF1QlYsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVjtBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJVSxlQUFPLGdCQUFHLDhEQUFDLGtCQUFELG9CQUF3QlYsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVjtBQUNBOztBQUNKLFdBQUssUUFBTDtBQUNJVSxlQUFPLGdCQUFHLDhEQUFDLGlCQUFELG9CQUF1QlYsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVjtBQUNBOztBQUNKLFdBQUssTUFBTDtBQUNJVSxlQUFPLGdCQUFHLDhEQUFDLGVBQUQsb0JBQXFCVixLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFWO0FBQ0E7O0FBQ0osV0FBSyxPQUFMO0FBQ0lVLGVBQU8sZ0JBQUcsOERBQUMsZ0JBQUQsb0JBQXNCVixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFWO0FBQ0E7O0FBQ0osV0FBSyxPQUFMO0FBQ0lVLGVBQU8sZ0JBQUcsOERBQUMsZ0JBQUQsb0JBQXNCVixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFWO0FBQ0E7O0FBQ0osV0FBSyxNQUFMO0FBQ0EsV0FBSyxZQUFMO0FBQ0EsV0FBSyxhQUFMO0FBQ0EsV0FBSyxnQkFBTDtBQUNBLFdBQUssYUFBTDtBQUNJVSxlQUFPLGdCQUFHLDhEQUFDLGVBQUQsb0JBQXFCVixLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFWO0FBQ0E7O0FBQ0o7QUFDSVUsZUFBTyxnQkFBRztBQUFLLG1CQUFTLEVBQUVQLGtCQUFrQixHQUFHLFNBQXJDO0FBQUEscUJBQ0xGLGVBREssT0FDYUUsa0JBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFWO0FBSUE7QUExQ1I7O0FBNkNBLHdCQUFPLDhEQUFDLHVEQUFEO0FBQUEsMkJBQzJCTyxPQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUdIOztBQUVELFNBQU9MLE1BQU0sQ0FBQ0wsS0FBRCxDQUFiO0FBQ0g7S0ExRXVCRCxXOztBQTRFeEIsSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDWCxLQUFELEVBQWtDO0FBQUEsTUFDL0NDLGVBRCtDLEdBQ0lELEtBREosQ0FDL0NDLGVBRCtDO0FBQUEsTUFDOUJDLFVBRDhCLEdBQ0lGLEtBREosQ0FDOUJFLFVBRDhCO0FBQUEsTUFDbEJDLGtCQURrQixHQUNJSCxLQURKLENBQ2xCRyxrQkFEa0I7QUFHdEQsc0JBQU87QUFBSyxhQUFTLEVBQUcsaUNBQWpCO0FBQUEsNEJBQ0g7QUFBSSxlQUFTLEVBQUUsVUFBZjtBQUFBLHVCQUE4QkEsa0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLGVBRUg7QUFBRyxlQUFTLEVBQUVBLGtCQUFrQixHQUFFLGdCQUFsQztBQUFBLGtDQUFrRUEsa0JBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZHLGVBR0g7QUFBRyxlQUFTLEVBQUVBLGtCQUFrQixHQUFFLGdCQUFsQztBQUFBLDBCQUEwREEsa0JBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBS0gsQ0FSRDs7TUFBTVEsZTs7QUFVTixJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNaLEtBQUQsRUFBa0M7QUFBQSxNQUMxREMsZUFEMEQsR0FDUEQsS0FETyxDQUMxREMsZUFEMEQ7QUFBQSxNQUN6Q0MsVUFEeUMsR0FDUEYsS0FETyxDQUN6Q0UsVUFEeUM7QUFBQSxNQUM3QkMsa0JBRDZCLEdBQ1BILEtBRE8sQ0FDN0JHLGtCQUQ2QjtBQUdqRSxzQkFBTztBQUFLLGFBQVMsRUFBRUEsa0JBQWtCLEdBQUcsK0NBQXJDO0FBQUEsMkJBQ0Y7QUFBSyxlQUFTLEVBQUUsZUFBaEI7QUFBQSxnQkFBa0NBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHSCxDQU5EOztNQUFNUywwQjs7QUFRTixJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNiLEtBQUQsRUFBa0M7QUFBQSxNQUN0REMsZUFEc0QsR0FDSEQsS0FERyxDQUN0REMsZUFEc0Q7QUFBQSxNQUNyQ0MsVUFEcUMsR0FDSEYsS0FERyxDQUNyQ0UsVUFEcUM7QUFBQSxNQUN6QkMsa0JBRHlCLEdBQ0hILEtBREcsQ0FDekJHLGtCQUR5QjtBQUc3RCxzQkFBTztBQUFLLGFBQVMsRUFBRSxjQUFhQSxrQkFBYixHQUFrQyxrQkFBbEQ7QUFBQSxvQkFDRkEsa0JBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHSCxDQU5EOztNQUFNVSxzQjs7QUFPTixJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNkLEtBQUQsRUFBa0M7QUFBQSxNQUNoREMsZUFEZ0QsR0FDR0QsS0FESCxDQUNoREMsZUFEZ0Q7QUFBQSxNQUMvQkMsVUFEK0IsR0FDR0YsS0FESCxDQUMvQkUsVUFEK0I7QUFBQSxNQUNuQkMsa0JBRG1CLEdBQ0dILEtBREgsQ0FDbkJHLGtCQURtQjtBQUd2RCxzQkFBTztBQUFLLGFBQVMsRUFBRUEsa0JBQWtCLEdBQUcsYUFBckM7QUFBQSw4QkFDUUEsa0JBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHSCxDQU5EOztNQUFNVyxnQjs7QUFPTixJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNmLEtBQUQsRUFBa0M7QUFBQSxNQUNqREMsZUFEaUQsR0FDRUQsS0FERixDQUNqREMsZUFEaUQ7QUFBQSxNQUNoQ0MsVUFEZ0MsR0FDRUYsS0FERixDQUNoQ0UsVUFEZ0M7QUFBQSxNQUNwQkMsa0JBRG9CLEdBQ0VILEtBREYsQ0FDcEJHLGtCQURvQjtBQUd4RCxzQkFBTztBQUFLLGFBQVMsRUFBRSxjQUFoQjtBQUFBLDJCQUNIO0FBQUssZUFBUyxFQUFFQSxrQkFBa0IsR0FBRyxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdILENBTkQ7O01BQU1ZLGlCOztBQU9OLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2hCLEtBQUQsRUFBa0M7QUFBQSxNQUNsREMsZUFEa0QsR0FDQ0QsS0FERCxDQUNsREMsZUFEa0Q7QUFBQSxNQUNqQ0MsVUFEaUMsR0FDQ0YsS0FERCxDQUNqQ0UsVUFEaUM7QUFBQSxNQUNyQkMsa0JBRHFCLEdBQ0NILEtBREQsQ0FDckJHLGtCQURxQjtBQUd6RCxzQkFBTztBQUFLLGFBQVMsRUFBRSwrREFBaEI7QUFBQSwyQkFDSDtBQUFLLGVBQVMsRUFBRUEsa0JBQWtCLEdBQUcsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHSCxDQU5EOztNQUFNYSxrQjs7QUFRTixJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNqQixLQUFELEVBQWtDO0FBQUEsTUFDakRDLGVBRGlELEdBQ0VELEtBREYsQ0FDakRDLGVBRGlEO0FBQUEsTUFDaENDLFVBRGdDLEdBQ0VGLEtBREYsQ0FDaENFLFVBRGdDO0FBQUEsTUFDcEJDLGtCQURvQixHQUNFSCxLQURGLENBQ3BCRyxrQkFEb0I7QUFHeEQsc0JBQU87QUFBSyxhQUFTLEVBQUUsMkRBQWhCO0FBQUEsMkJBQ0g7QUFBSyxlQUFTLEVBQUVBLGtCQUFrQixHQUFHLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0gsQ0FORDs7TUFBTWMsaUI7O0FBT04sSUFBTUMsZ0JBQWdCLEdBQUksU0FBcEJBLGdCQUFvQixDQUFDbEIsS0FBRCxFQUFrQztBQUFBLE1BQ2pEQyxlQURpRCxHQUNFRCxLQURGLENBQ2pEQyxlQURpRDtBQUFBLE1BQ2hDQyxVQURnQyxHQUNFRixLQURGLENBQ2hDRSxVQURnQztBQUFBLE1BQ3BCQyxrQkFEb0IsR0FDRUgsS0FERixDQUNwQkcsa0JBRG9CO0FBR3hELHNCQUFPO0FBQUssYUFBUyxFQUFFLFlBQWhCO0FBQUEsMkJBQ0g7QUFBSyxlQUFTLEVBQUVBLGtCQUFrQixHQUFHLGtCQUFyQztBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFLSCxDQVJEOztNQUFNZSxnQjs7QUFTTixJQUFNQyxlQUFlLEdBQUssU0FBcEJBLGVBQW9CLENBQUNuQixLQUFELEVBQWtDO0FBQUEsTUFFakRDLGVBRmlELEdBRUVELEtBRkYsQ0FFakRDLGVBRmlEO0FBQUEsTUFFaENDLFVBRmdDLEdBRUVGLEtBRkYsQ0FFaENFLFVBRmdDO0FBQUEsTUFFcEJDLGtCQUZvQixHQUVFSCxLQUZGLENBRXBCRyxrQkFGb0I7O0FBSXhELE1BQU1pQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQW9CO0FBQ2pDLFdBQU8sbUlBQUlDLEtBQUssQ0FBQ0QsTUFBRCxDQUFULEVBQW1CRSxHQUFuQixDQUF1QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSwwQkFBVTtBQUFLLGlCQUFTLEVBQUUseUJBQWhCO0FBQUEsMkJBQWtELEVBQUVBLENBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFWO0FBQUEsS0FBdkIsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsR0FBRyxnQkFBRztBQUFLLGFBQVMsRUFBRSxZQUFoQjtBQUFBLDJCQUNSO0FBQUssZUFBUyxFQUFFLFlBQVl2QixrQkFBWixHQUFpQyxNQUFqRDtBQUFBLGdCQUNLaUIsUUFBUSxDQUFDLENBQUQ7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFaOztBQU1BLE1BQU1PLGFBQWEsZ0JBQUc7QUFBSyxhQUFTLEVBQUUsNEJBQWhCO0FBQUEsNEJBQ2xCO0FBQUssZUFBUyxFQUFFLHVCQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFLHNCQUFzQnhCLGtCQUF0QixHQUEyQyxNQUEzRDtBQUFBLGtCQUNLaUIsUUFBUSxDQUFDLENBQUQ7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGtCLGVBT2xCO0FBQUssZUFBUyxFQUFFLFFBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLGlCQUFTLEVBQUUsc0JBQXNCakIsa0JBQXRCLEdBQTJDLE1BQTNEO0FBQUEsa0JBQ0tpQixRQUFRLENBQUMsQ0FBRDtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRCOztBQWVBLFVBQVFsQixVQUFSO0FBQ0ksU0FBSyxZQUFMO0FBQ0ksMEJBQU8sOERBQUMsdURBQUQ7QUFBQSxrQkFBaUJ5QjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0o7QUFDSSwwQkFBTyw4REFBQyx1REFBRDtBQUFBLGtCQUFpQkQ7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBSlI7QUFNSCxDQW5DRDs7T0FBTVAsZTs7QUFvQ04sSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDNUIsS0FBRCxFQUFrQztBQUFBLE1BRWhEQyxlQUZnRCxHQUVHRCxLQUZILENBRWhEQyxlQUZnRDtBQUFBLE1BRS9CQyxVQUYrQixHQUVHRixLQUZILENBRS9CRSxVQUYrQjtBQUFBLE1BRW5CQyxrQkFGbUIsR0FFR0gsS0FGSCxDQUVuQkcsa0JBRm1CO0FBSXZELHNCQUNJO0FBQUssYUFBUyxFQUFFLDJCQUFoQjtBQUFBLDJCQUNRO0FBQUssZUFBUyxFQUFFLFdBQWhCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFLG1DQUFoQjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBRSxxQkFBZjtBQUFBLGlDQUErQ0Esa0JBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRSxtQ0FBaEI7QUFBQSxpQ0FDSTtBQUFPLHFCQUFTLEVBQUUsa0NBQWtDQSxrQkFBcEQ7QUFBQSxvQ0FDSTtBQUFBLHFDQUNBO0FBQUEsMEJBQ0ssbUlBQUltQixLQUFLLENBQUMsQ0FBRCxDQUFULEVBQWNDLEdBQWQsQ0FBa0IsVUFBQ00sSUFBRCxFQUFPQyxHQUFQO0FBQUEsc0NBQ2YsOERBQUMsdURBQUQ7QUFBQSwyQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRGU7QUFBQSxpQkFBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQVVJO0FBQUEsd0JBQ0MsbUlBQUlSLEtBQUssQ0FBQyxFQUFELENBQVQsRUFBZUMsR0FBZixDQUFtQixVQUFDTSxJQUFELEVBQU9DLEdBQVA7QUFBQSxvQ0FDaEI7QUFBQSw0QkFDSyxtSUFBSVIsS0FBSyxDQUFDLENBQUQsQ0FBVCxFQUFjQyxHQUFkLENBQWtCLFVBQUNNLElBQUQsRUFBT0MsR0FBUDtBQUFBLHdDQUNmLDhEQUFDLHVEQUFEO0FBQUEsNkNBQ0k7QUFBQSxrQ0FBS0EsR0FBRyxHQUFHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRGU7QUFBQSxtQkFBbEI7QUFETCxtQkFBU0EsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURnQjtBQUFBLGVBQW5CO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0FyQ0Q7O09BQU1GLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS44NDhkMmFhOWI4ZmJiYjkyMGI5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzc2ZhYnJpYyAgICAgICAgICAgICAgIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuaW1wb3J0IFJlYWN0ICAgICAgICAgICAgICAgICAgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0pTWEVsZW1lbnRDb25zdHJ1Y3Rvcn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSURlbW9FbGVtZW50IHtcclxuICAgIG1vZHVsZT86IHN0cmluZztcclxuICAgIGNzc0ZhYnJpY0NsYXNzTmFtZT86IGFueTtcclxuICAgIG1vZHVsZUF0dHJpYnV0ZT86IGFueTtcclxuICAgIG1vZHVsZVJ1bGU/OiBhbnk7XHJcbiAgICBjaGlsZHJlbj86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElEZW1vRWxlbWVudEdyaWRQcm9wcyB7XHJcbiAgICBtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICBjc3NGYWJyaWNDbGFzc05hbWU/OiBhbnk7XHJcbiAgICBtb2R1bGVBdHRyaWJ1dGU/OiBhbnk7XHJcbiAgICBtb2R1bGVSdWxlPzogYW55O1xyXG4gICAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vRWxlbWVudChwcm9wczogSURlbW9FbGVtZW50KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgbGV0IG91dDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRHJhd0l0KHByb3BzPzogYW55KTogYW55IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGlsZHJlbnMgPSBwcm9wcz8uY2hpbGRyZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICgnbW9kJykge1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgb3V0ID0gPGRpdiBjbGFzc05hbWU9eyd3LXNtLWZ1bGwgdy04LW1pbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IGNsYXNzTmFtZT17XCJwYWQgZHNwLW5vbmVcIn0+Lnttb2R1bGVBdHRyaWJ1dGV9IC57bW9kdWxlUnVsZX0gLntjc3NGYWJyaWNDbGFzc05hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge0RyYXdUeXBlKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRHJhd1R5cGUoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChtb2R1bGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNvbG9yXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50Q29sb3Igey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJib3JkZXItY29sb3JcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRCb3JkZXJDb2xvciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhY2tncm91bmQtY29sb3JcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhY2tncm91bmQtdGhlbWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aGVtZVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEJhY2tncm91bmRDb2xvciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hcmdpblwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudE1hcmdpbiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhZGRpbmdcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRQYWRkaW5nIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYm9yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPERlbW9FbGVtZW50Qm9yZGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ3JpZFwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudEdyaWQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FsZVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxEZW1vRWxlbWVudFNjYWxlIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGFibGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRUYWJsZSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInRleHQtYWxpZ25cIjpcclxuICAgICAgICAgICAgY2FzZSBcInRleHQtc2hhZG93XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0LXRyYW5zZm9ybVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZm9udC13ZWlnaHRcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RGVtb0VsZW1lbnRUZXh0IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGgtZnVsbCd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttb2R1bGVBdHRyaWJ1dGV9IHtjc3NGYWJyaWNDbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHsvKnttb2R1bGVBdHRyaWJ1dGV9Ki99ICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIERyYXdJdChwcm9wcyk7XHJcbn1cclxuXHJcbmNvbnN0IERlbW9FbGVtZW50VGV4dCA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17ICcgcGFkLTIgb3ZlcmZsb3ctbm9uZSBzY2FsZS13LTE2J30+XHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT17J2JvcmRlci1iJ30+LSB7Y3NzRmFicmljQ2xhc3NOYW1lfTwvaDY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgK1wiIHRleHQtZWxsaXBzaXNcIn0+SGVyZSBpcyBzb21lIHtjc3NGYWJyaWNDbGFzc05hbWV9IHRleHQ8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgK1wiIHRleHQtZWxsaXBzaXNcIn0+VGhpcyB7Y3NzRmFicmljQ2xhc3NOYW1lfSB0ZXh0IGlzIGZyb20gY3NzZmFicmljIGEgY3NzIHNhc3MgZnJhbWV3b3JrPC9wPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IERlbW9FbGVtZW50QmFja2dyb3VuZENvbG9yID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIHctc20tYXV0byB3LTggaC1zbS0yIGgtOCBwYWQtMSBvdmVyZmxvdy1ub25lJ30+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtZWxsaXBzaXNcIn0+e2Nzc0ZhYnJpY0NsYXNzTmFtZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBEZW1vRWxlbWVudEJvcmRlckNvbG9yID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsnYm9yZGVyLTQgJysgY3NzRmFicmljQ2xhc3NOYW1lICsgJyBoLWZ1bGwgdy0xNiBwYWQnfT5cclxuICAgICAgIC57Y3NzRmFicmljQ2xhc3NOYW1lfVxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRDb2xvciA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBoLWZ1bGwgcGFkJ30+XHJcbiAgICAgICB0aGlzIGlzIHNvIHtjc3NGYWJyaWNDbGFzc05hbWV9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudE1hcmdpbiA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctMTYgaC0yLW1pbid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGJvcmRlcid9PiZuYnNwO21hcmdpbiZuYnNwOzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuY29uc3QgRGVtb0VsZW1lbnRQYWRkaW5nID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHttb2R1bGVBdHRyaWJ1dGUsIG1vZHVsZVJ1bGUsIGNzc0ZhYnJpY0NsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsndy0xNiBoLTQtbWluIHBhZC0xIGdyaWQtaCBncmlkLWFsaWduLW1pZGRsZSBncmlkLWFsaWduLWNlbnRlcid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnIGJvcmRlcid9PiZuYnNwO3BhZGRpbmcmbmJzcDs8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBEZW1vRWxlbWVudEJvcmRlciA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctMTYgaC00IHBhZC0xIGdyaWQtaCBncmlkLWFsaWduLW1pZGRsZSBncmlkLWFsaWduLWNlbnRlcid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NGYWJyaWNDbGFzc05hbWUgKyAnJ30+Jm5ic3A7Ym9yZGVyJm5ic3A7PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudFNjYWxlICA9IChwcm9wczogSURlbW9FbGVtZW50R3JpZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bW9kdWxlQXR0cmlidXRlLCBtb2R1bGVSdWxlLCBjc3NGYWJyaWNDbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17J3ctNjQgcGFkLTEnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzRmFicmljQ2xhc3NOYW1lICsgJyBib3JkZXIgbWFyZyBwYWQnfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eycnfT4mbmJzcDsmbmJzcDs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcbmNvbnN0IERlbW9FbGVtZW50R3JpZCAgID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBjb25zdCBtdWx0aXBseSA9IChmYWN0b3I6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkoZmFjdG9yKV0ubWFwKCh4LCBpKSA9PiA8ZGl2IGNsYXNzTmFtZT17J2JvcmRlciBtYXJnIHBhZCB3LTQgaC0yJ30+Jm5ic3A7eysraX0mbmJzcDs8L2Rpdj4pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGRlZiA9IDxkaXYgY2xhc3NOYW1lPXsndy02NCBwYWQtMSd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3JpZC1oICcgKyBjc3NGYWJyaWNDbGFzc05hbWUgKyBcIiBoLThcIn0+XHJcbiAgICAgICAgICAgIHttdWx0aXBseSgzKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBjb25zdCBmb3JDbGFzc05hbWVzID0gPGRpdiBjbGFzc05hbWU9eydncmlkLWggdy02NCBwYWQtMSBoLTE2LW1pbid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctbWlkIGJvcmRlci1yIGdyaWQtdlwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFkXCJ9Pi5ncmlkLWg8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkLW1haW4gZ3JpZC1oICcgKyBjc3NGYWJyaWNDbGFzc05hbWUgKyBcIiBoLThcIn0+XHJcbiAgICAgICAgICAgICAgICB7bXVsdGlwbHkoNil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtdlwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFkXCJ9Pi5ncmlkLXY8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydncmlkLW1haW4gZ3JpZC12ICcgKyBjc3NGYWJyaWNDbGFzc05hbWUgKyBcIiBoLThcIn0+XHJcbiAgICAgICAgICAgICAgICB7bXVsdGlwbHkoMyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIHN3aXRjaCAobW9kdWxlUnVsZSkge1xyXG4gICAgICAgIGNhc2UgXCJjbGFzc25hbWVzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2ZvckNsYXNzTmFtZXN9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PntkZWZ9PC9SZWFjdC5GcmFnbWVudD5cclxuICAgIH1cclxufVxyXG5jb25zdCBEZW1vRWxlbWVudFRhYmxlID0gKHByb3BzOiBJRGVtb0VsZW1lbnRHcmlkUHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZUF0dHJpYnV0ZSwgbW9kdWxlUnVsZSwgY3NzRmFicmljQ2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtaCBncmlkLXdyYXAgcmVsYXRpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJoLTE2IHctNjRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaC1mdWxsIGdyaWQtdiBvdmVyZmxvdy1qIHJlbGF0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtcImJvcmRlci1iLTEgcGFkLXRiLTRcIn0+dGFibGUgOiB7Y3NzRmFicmljQ2xhc3NOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyaWQtbWFpbiAgb3ZlcmZsb3ctYXV0byBtYXJnLXQtNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e1widGFibGUgdGJsLWxheW91dCAgdy1mdWxsIHRibC1cIiArIGNzc0ZhYnJpY0NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg2KV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDMwKV0ubWFwKChuYW1lLCB2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoNildLm1hcCgobmFtZSwgdmFsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3ZhbCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9