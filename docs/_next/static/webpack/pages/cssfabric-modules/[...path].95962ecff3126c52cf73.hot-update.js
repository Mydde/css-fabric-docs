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
                className: "w-8 pad-l-4 border-l-4 text-900",
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jcy9Eb2NzLnRzeCJdLCJuYW1lcyI6WyJEb2NzIiwicHJvcHMiLCJtb2R1bGUiLCJtb2R1bGVBdHRyaWJ1dGVzIiwiY3NzZmFicmljIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJhc1BhdGgiLCJ0cmUiLCJwYXJ0Iiwib3V0IiwibGV2ZWxWYWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibGV2ZWxLZXkiLCJsZXZlbFZhbHVlIiwieCIsInV0aWxzIiwiam9pbiIsImh0bWxVdGlscyIsIm1vZHVsZUF0dHJpYnV0ZSIsIm1vZHVsZUF0dHJpYnV0ZU1vZGVsIiwidGFnIiwibGV2ZWxzIiwibGV2ZWxzRGVjbGluIiwibGV2ZWxzTGlua2VkIiwiY2xhc3NOYW1lcyIsInZhbHVlcyIsImFib3V0IiwidG9QYXJzZSIsIm1vZHVsZUNsYXNzTmFtZXMiLCJmaWx0ZXIiLCJ3IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBT2UsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFFaENDLE1BRmdDLEdBRWRELEtBRmMsQ0FFaENDLE1BRmdDO0FBR3ZDLE1BQU1DLGdCQUFnQixHQUFHQyx3RUFBQSxDQUFrQ0YsTUFBbEMsQ0FBekI7QUFFQSxNQUFNRyxNQUFNLEdBQVlDLHNEQUFTLEVBQWpDO0FBTHVDLE1BTWhDQyxLQU5nQyxHQU1mRixNQU5lLENBTWhDRSxLQU5nQztBQUFBLE1BTXpCQyxNQU55QixHQU1mSCxNQU5lLENBTXpCRyxNQU55Qjs7QUFRdkMsV0FBU0MsR0FBVCxDQUFhQyxJQUFiLEVBQXdCO0FBQUE7O0FBRXBCO0FBQ0E7QUFDQSxRQUFJQyxH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QUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFJSTtBQUFLLHlCQUFTLEVBQUUsVUFBaEI7QUFBQSwwQkFDSzNCLEdBQUcsQ0FBQ3dCLE9BQU8sQ0FBQ0csQ0FBRCxDQUFSO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREo7QUFVSCxXQVhBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUEyQkgsS0E3Q0EsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFESDs7R0FwR3VCcEMsSTtVQUtJTSxrRDs7O0tBTEpOLEk7QUFzR2pCLFNBQWVxQyxrQkFBdEI7QUFBQTtBQUFBOzs7NFJBQU8saUJBQWtDQyxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDRixxQkFBTyxFQUFQQTtBQUFELGFBQVosRUFERyxDQUVIO0FBQ0E7O0FBSEcsNkNBS0k7QUFDSHJDLG1CQUFLLEVBQUU7QUFESixhQUxKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3NzZmFicmljLW1vZHVsZXMvWy4uLnBhdGhdLjk1OTYyZWNmZjMxMjZjNTJjZjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGNzc2ZhYnJpYyAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJjc3NmYWJyaWNcIjtcclxuaW1wb3J0IHV0aWxzICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7aHRtbFV0aWxzLCBmYWJyaWNOYXZpZ2F0aW9ufSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgRG9jc0NsYXNzTmFtZXMgICAgICAgICAgICAgICAgZnJvbSAnQC9jb21wb25lbnRzL0RvY3MvRG9jc0NsYXNzTmFtZXMnXHJcbmltcG9ydCBMaW5rICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IElubmVyTWVudSAgIGZyb20gXCJAL2NvbXBvbmVudHMvSW5uZXJNZW51XCI7XHJcblxyXG5pbnRlcmZhY2UgSURvY3Mge1xyXG4gICAgbW9kdWxlOiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jcyhwcm9wczogSURvY3MpIHtcclxuICAgIFxyXG4gICAgY29uc3Qge21vZHVsZX0gICAgICAgICA9IHByb3BzO1xyXG4gICAgY29uc3QgbW9kdWxlQXR0cmlidXRlcyA9IGNzc2ZhYnJpYy5nZXRNb2R1bGVEb2NzQXR0cmlidXRlcyhtb2R1bGUpO1xyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgICAgICAgICAgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtxdWVyeSwgYXNQYXRofSA9IHJvdXRlcjtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdHJlKHBhcnQ6IGFueSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIG9iamVjdCwgaWYgYXJyYXkgISEhXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFydClcclxuICAgICAgICBsZXQgb3V0OiBhbnksXHJcbiAgICAgICAgICAgIGxldmVsVmFsdWVzOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBhcnQgJiYgIUFycmF5LmlzQXJyYXkocGFydCkgJiYgdHlwZW9mIChwYXJ0ID09PSBcIm9iamVjdFwiKSkge1xyXG4gICAgICAgICAgICBvdXQgPSBPYmplY3Qua2V5cyhwYXJ0KS5tYXAoKGxldmVsS2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWxWYWx1ZSA9IHBhcnRbbGV2ZWxLZXldXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7bGV2ZWxLZXksIGxldmVsVmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGV2ZWxWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbFZhbHVlcyA9IGxldmVsVmFsdWUubWFwKHggPT4gPGRpdiBjbGFzc05hbWU9e1wibWFyZy1yLTQgdy0yLW1pblwifT57eH08L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1wicGFkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbG9yLWdyYXktNjAwIGRzcC1pbmxpbmUgbWFyZy1yLTEgYm9yZGVyLWIgcGFkXCJ9PntsZXZlbEtleX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkLWggZ3JpZC13cmFwIG1hcmctbC00IHBhZCBcIn0+e2xldmVsVmFsdWVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoICh1dGlscy5pc0FycmF5T2ZUeXBlcyhwYXJ0KSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ3NcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gPGRpdiBjbGFzc05hbWU9e1wiZ3JpZC1oIGdyaWQtd3JhcFwifT57cGFydC5tYXAoKHg6IHN0cmluZykgPT4gPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibWFyZy1yLTRcIn0+e3h9PC9kaXY+KX08L2Rpdj47XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXJyYXlzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gcGFydC5tYXAoKHg6IHN0cmluZ1tdKSA9PiB4LmpvaW4oJyAgJykpLm1hcCgoeDogYW55KSA9PiBodG1sVXRpbHMuZW5jbG9zZSh4KSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnttb2R1bGV9IGNzc2ZhYnJpYyBkb2N1bWVudGF0aW9uPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXMobW9kdWxlQXR0cmlidXRlcykubWFwKChtb2R1bGVBdHRyaWJ1dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kdWxlQXR0cmlidXRlTW9kZWwgPSBtb2R1bGVBdHRyaWJ1dGVzW21vZHVsZUF0dHJpYnV0ZV1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHt0YWcsIGtleXMsIGxldmVscywgbGV2ZWxzRGVjbGluLCBsZXZlbHNMaW5rZWQsIGNsYXNzTmFtZXMsIHZhbHVlcywgYWJvdXR9ID0gbW9kdWxlQXR0cmlidXRlTW9kZWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9QYXJzZTpSZWNvcmQ8c3RyaW5nLCBhbnk+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVscyxcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbHNEZWNsaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxzTGlua2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBtb2R1bGVDbGFzc05hbWVzID0gY3NzZmFicmljLmdldE1vZHVsZUNsYXNzTmFtZXMuZ2V0TW9kdWxlVGFnQ2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlQXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJwYWQtYi04XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImdyaWQtaCBncmlkLWlubGluZSBib3JkZXItYiAgdGhlbWUtYm9yZGVyLXByaW1hcnkgYWxpZ24tbWlkZGxlIGNlbGwtc3BhY2luZyBtYXJnLWItMVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0YWd9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widHh0LTQwMFwifT57bW9kdWxlQXR0cmlidXRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbG9yLWdyYXktNTAwIG1hcmctYi0yIHBhZC1sLTggXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkc3AtaW5saW5lIHBhZC1hbGwtMlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthYm91dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2VsbC1zcGFjaW5nIGdyaWQtbWFpblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvUGFyc2UpLmZpbHRlcigoeDphbnkpID0+IHRvUGFyc2U/Llt4XSkubWFwKCh3OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFyZy1iLTRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctOCBwYWQtbC00IGJvcmRlci1sLTQgdGV4dC05MDBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d306XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJnLWwtNFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmUodG9QYXJzZVt3XSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKHtjb250ZXh0fSlcclxuICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wb3N0cy8ke2NvbnRleHQucGFyYW1zLmlkfWApXHJcbiAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7fSxcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9