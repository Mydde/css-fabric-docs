self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/utils.tsx":
/*!*****************************!*\
  !*** ./src/utils/utils.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlUtils": function() { return /* binding */ htmlUtils; },
/* harmony export */   "fabricNavigation": function() { return /* binding */ fabricNavigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cssfabric */ "../cssfabric/lib/index.js");
/* harmony import */ var cssfabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cssfabric__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\boulot\\app-node\\cssfabric-docs\\src\\utils\\utils.tsx",
    _this = undefined;


var utils = {
  isArrayOfTypes: function isArrayOfTypes(arr) {
    var ret = '';

    if (!Array.isArray(arr)) {
      return false;
    }

    if (arr.every(function (x) {
      return Array.isArray(x);
    })) ret = 'arrays';
    if (arr.every(function (x) {
      return typeof x === 'number' || typeof x === 'string';
    })) ret = 'strings';
    if (arr.every(function (x) {
      return typeof x === 'string';
    })) ret = 'strings';
    if (arr.every(function (x) {
      return typeof x === 'number';
    })) ret = 'numbers';
    if (arr.every(function (x) {
      return typeof x === 'object' && !Array.isArray(x);
    })) ret = 'objects';
    return ret;
  },
  isObjectOfTypes: function isObjectOfTypes(arr) {
    if (Array.isArray(arr)) {
      return false;
    }

    var ret = '';
    var arrValues = Object.values(arr);
    if (arrValues.every(function (x) {
      return typeof x === 'number' || typeof x === 'string';
    })) ret = 'strings';
    if (arrValues.every(function (x) {
      return Array.isArray(x);
    })) ret = 'arrays';
    if (arrValues.every(function (x) {
      return typeof x === 'string';
    })) ret = 'strings';
    if (arrValues.every(function (x) {
      return typeof x === 'number';
    })) ret = 'numbers';
    if (arrValues.every(function (x) {
      return typeof x === 'object' && !Array.isArray(x);
    })) ret = 'objects';
    return ret;
  }
};
var htmlUtils = {
  enclose: function enclose(content) {
    var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "cell-spacing cell-padding",
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, _this);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (utils);
var urlModule = 'cssfabric-modules';
var pageDocsName = 'docs';
var pageDemoName = 'demo';
var pageDemoClassName = 'classnames';
var fabricNavigation = {
  getHomePages: function getHomePages() {
    return "/".concat(urlModule);
  },
  getModuleDocsPage: function getModuleDocsPage(module) {
    return "/".concat(urlModule, "/").concat(module, "/").concat(pageDocsName);
  },
  getModuleClassNamesPage: function getModuleClassNamesPage(module) {
    return "/".concat(urlModule, "/").concat(module, "/").concat(pageDemoClassName);
  },
  getModuleDemoPage: function getModuleDemoPage(module) {
    return "/".concat(urlModule, "/").concat(module, "/").concat(pageDemoName);
  },
  getActiveLinks: function getActiveLinks() {
    var links = Object.keys(cssfabric__WEBPACK_IMPORTED_MODULE_1___default().getModuleList()).filter(function (link) {
      var _links$link, _links$link$_docs;

      return links === null || links === void 0 ? void 0 : (_links$link = links[link]) === null || _links$link === void 0 ? void 0 : (_links$link$_docs = _links$link._docs) === null || _links$link$_docs === void 0 ? void 0 : _links$link$_docs.attributes;
    });
    return links;
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3V0aWxzLnRzeCJdLCJuYW1lcyI6WyJ1dGlscyIsImlzQXJyYXlPZlR5cGVzIiwiYXJyIiwicmV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJ4IiwiaXNPYmplY3RPZlR5cGVzIiwiYXJyVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiaHRtbFV0aWxzIiwiZW5jbG9zZSIsImNvbnRlbnQiLCJ0YWciLCJ1cmxNb2R1bGUiLCJwYWdlRG9jc05hbWUiLCJwYWdlRGVtb05hbWUiLCJwYWdlRGVtb0NsYXNzTmFtZSIsImZhYnJpY05hdmlnYXRpb24iLCJnZXRIb21lUGFnZXMiLCJnZXRNb2R1bGVEb2NzUGFnZSIsIm1vZHVsZSIsImdldE1vZHVsZUNsYXNzTmFtZXNQYWdlIiwiZ2V0TW9kdWxlRGVtb1BhZ2UiLCJnZXRBY3RpdmVMaW5rcyIsImxpbmtzIiwia2V5cyIsImNvbmZfY3NzZmFicmljIiwiZmlsdGVyIiwibGluayIsIl9kb2NzIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQSxLQUFLLEdBQUc7QUFFVkMsZ0JBQWMsRUFBRSx3QkFBQ0MsR0FBRCxFQUFtQjtBQUMvQixRQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFFQSxRQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxHQUFkLENBQUwsRUFBeUI7QUFDckIsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsUUFBSUEsR0FBRyxDQUFDSSxLQUFKLENBQVUsVUFBQUMsQ0FBQztBQUFBLGFBQUlILEtBQUssQ0FBQ0MsT0FBTixDQUFjRSxDQUFkLENBQUo7QUFBQSxLQUFYLENBQUosRUFBc0NKLEdBQUcsR0FBRyxRQUFOO0FBQ3RDLFFBQUlELEdBQUcsQ0FBQ0ksS0FBSixDQUFVLFVBQUFDLENBQUM7QUFBQSxhQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFiLElBQXlCLE9BQU9BLENBQVAs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bEM7QUFDSCxHQU4yQjtBQU81Qk8seUJBQXVCLEVBQUUsaUNBQUNELE1BQUQsRUFBb0I7QUFDekMsc0JBQVdQLFNBQVgsY0FBd0JPLE1BQXhCLGNBQWtDSixpQkFBbEM7QUFDSCxHQVQyQjtBQVU1Qk0sbUJBQWlCLEVBQVEsMkJBQUNGLE1BQUQsRUFBb0I7QUFDekMsc0JBQVdQLFNBQVgsY0FBd0JPLE1BQXhCLGNBQWtDTCxZQUFsQztBQUNILEdBWjJCO0FBYTVCUSxnQkFBYyxFQUFXLDBCQUFNO0FBQzNCLFFBQU1DLEtBQVUsR0FBR2pCLE1BQU0sQ0FBQ2tCLElBQVAsQ0FBWUMsOERBQUEsRUFBWixFQUE0Q0MsTUFBNUMsQ0FBbUQsVUFBQ0MsSUFBRDtBQUFBOztBQUFBLGFBQWtCSixLQUFsQixhQUFrQkEsS0FBbEIsc0NBQWtCQSxLQUFLLENBQUdJLElBQUgsQ0FBdkIscUVBQWtCLFlBQWVDLEtBQWpDLHNEQUFrQixrQkFBc0JDLFVBQXhDO0FBQUEsS0FBbkQsQ0FBbkI7QUFFQSxXQUFPTixLQUFQO0FBQ0g7QUFqQjJCLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkM2Y2YmIwMDJlZTA0MTk5M2MzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZl9jc3NmYWJyaWMgZnJvbSBcImNzc2ZhYnJpY1wiO1xyXG5cclxuXHJcbmNvbnN0IHV0aWxzID0ge1xyXG4gICAgXHJcbiAgICBpc0FycmF5T2ZUeXBlczogKGFycjogYW55KTogYW55ID0+IHtcclxuICAgICAgICBsZXQgcmV0ID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmV2ZXJ5KHggPT4gQXJyYXkuaXNBcnJheSh4KSkpIHJldCA9ICdhcnJheXMnXHJcbiAgICAgICAgaWYgKGFyci5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgeCA9PT0gJ3N0cmluZycpKSByZXQgPSAnc3RyaW5ncydcclxuICAgICAgICBpZiAoYXJyLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdzdHJpbmcnKSkgcmV0ID0gJ3N0cmluZ3MnXHJcbiAgICAgICAgaWYgKGFyci5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnbnVtYmVyJykpIHJldCA9ICdudW1iZXJzJ1xyXG4gICAgICAgIGlmIChhcnIuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoeCkpKSByZXQgPSAnb2JqZWN0cydcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgaXNPYmplY3RPZlR5cGVzOiAoYXJyOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJldCAgICAgICA9ICcnO1xyXG4gICAgICAgIGxldCBhcnJWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGFycik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFyclZhbHVlcy5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgeCA9PT0gJ3N0cmluZycpKSByZXQgPSAnc3RyaW5ncydcclxuICAgICAgICBpZiAoYXJyVmFsdWVzLmV2ZXJ5KHggPT4gQXJyYXkuaXNBcnJheSh4KSkpIHJldCA9ICdhcnJheXMnXHJcbiAgICAgICAgaWYgKGFyclZhbHVlcy5ldmVyeSh4ID0+IHR5cGVvZiB4ID09PSAnc3RyaW5nJykpIHJldCA9ICdzdHJpbmdzJ1xyXG4gICAgICAgIGlmIChhcnJWYWx1ZXMuZXZlcnkoeCA9PiB0eXBlb2YgeCA9PT0gJ251bWJlcicpKSByZXQgPSAnbnVtYmVycydcclxuICAgICAgICBpZiAoYXJyVmFsdWVzLmV2ZXJ5KHggPT4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHgpKSkgcmV0ID0gJ29iamVjdHMnXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGh0bWxVdGlscyA9IHtcclxuICAgIGVuY2xvc2U6IChjb250ZW50OiBhbnksIHRhZzogc3RyaW5nID0gJ2RpdicpID0+IHtcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtcImNlbGwtc3BhY2luZyBjZWxsLXBhZGRpbmdcIn0+e2NvbnRlbnR9PC9kaXY+KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xyXG5cclxuXHJcbmNvbnN0IHVybE1vZHVsZSAgICAgICAgID0gJ2Nzc2ZhYnJpYy1tb2R1bGVzJztcclxuY29uc3QgcGFnZURvY3NOYW1lICAgICAgPSAnZG9jcyc7XHJcbmNvbnN0IHBhZ2VEZW1vTmFtZSAgICAgID0gJ2RlbW8nO1xyXG5jb25zdCBwYWdlRGVtb0NsYXNzTmFtZSA9ICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBmYWJyaWNOYXZpZ2F0aW9uID0ge1xyXG4gICAgZ2V0SG9tZVBhZ2VzOiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYC8ke3VybE1vZHVsZX1gO1xyXG4gICAgfSxcclxuICAgIGdldE1vZHVsZURvY3NQYWdlOiAgICAgICAobW9kdWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gYC8ke3VybE1vZHVsZX0vJHttb2R1bGV9LyR7cGFnZURvY3NOYW1lfWA7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9kdWxlQ2xhc3NOYW1lc1BhZ2U6IChtb2R1bGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBgLyR7dXJsTW9kdWxlfS8ke21vZHVsZX0vJHtwYWdlRGVtb0NsYXNzTmFtZX1gO1xyXG4gICAgfSxcclxuICAgIGdldE1vZHVsZURlbW9QYWdlOiAgICAgICAobW9kdWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gYC8ke3VybE1vZHVsZX0vJHttb2R1bGV9LyR7cGFnZURlbW9OYW1lfWA7XHJcbiAgICB9LFxyXG4gICAgZ2V0QWN0aXZlTGlua3M6ICAgICAgICAgICgpID0+IHsgXHJcbiAgICAgICAgY29uc3QgbGlua3M6IGFueSA9IE9iamVjdC5rZXlzKGNvbmZfY3NzZmFicmljLmdldE1vZHVsZUxpc3QoKSkuZmlsdGVyKChsaW5rOiBzdHJpbmcpID0+IGxpbmtzPy5bbGlua10/Ll9kb2NzPy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbGlua3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=