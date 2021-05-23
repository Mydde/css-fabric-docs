self["webpackHotUpdate_N_E"]("pages/cssfabric-modules/[...path]",{

/***/ "../cssfabric/lib/scripts/cssfabricClassNames.js":
/*!*******************************************************!*\
  !*** ../cssfabric/lib/scripts/cssfabricClassNames.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cssfabric_1 = __importDefault(__webpack_require__(/*! ./cssfabric */ "../cssfabric/lib/scripts/cssfabric.js"));
function loopIt(props) {
    const { module } = props;
    const moduleAttributes = cssfabric_1.default.getModuleDocsAttributes(module);
}
function cssfabricClassNames(props) {
    const { module, moduleAttribute, outputStyle } = props;
    const moduleAttributes = cssfabric_1.default.getModuleDocsAttributes(module);
    const fabricAttributes = moduleAttributes[moduleAttribute];
    const moduleTag = fabricAttributes["tag"];
    const moduleKeys = fabricAttributes["keys"] || undefined;
    const moduleLevels = fabricAttributes["levels"] || undefined;
    const moduleLevelsLinked = fabricAttributes["levelsLinked"] || undefined;
    const moduleLevelsExtended = fabricAttributes["levelsDeclin"] || undefined;
    const moduleClassNames = fabricAttributes["classNames"] || undefined;
    let finalOutput = [];
    let finalOutputDebug = {};
    return doParse(outputStyle);
    function doParse(mode) {
        let keyList, levelList, levelListLinked, levelListDeclin;
        const finalOut = [];
        const debugOut = {};
        if (moduleKeys && moduleKeys.length) {
            // beware of any [][]
            keyList = concatenateWithKey(moduleTag, moduleKeys);
        }
        if (moduleLevels && Object.keys(moduleLevels).length) { // object !!!
            levelList = Object.keys(moduleLevels).map((level) => {
                let val = moduleLevels[level];
                return concatenateWithKey(level, val);
            }).flat();
        }
        if (moduleLevelsLinked && Object.keys(moduleLevelsLinked).length) {
            levelListLinked = Object.keys(moduleLevelsLinked).map((level) => {
                let val = moduleLevelsLinked[level];
                return concatenateWithKey(level, val);
            }).flat();
        }
        if (moduleLevelsExtended && Object.keys(moduleLevelsExtended).length) {
            levelListDeclin = Object.keys(moduleLevelsExtended).map((level) => {
                let val = moduleLevelsLinked[level];
                return concatenateWithKey(level, val);
            }).flat();
        }
        // prefix all now , and link
        // colors :
        if (keyList && !moduleLevels && !moduleLevelsLinked) {
            // export
            finalOut.push(keyList);
            registerDebug('default', keyList);
        }
        if (moduleKeys && (moduleLevels || moduleLevelsLinked)) {
            // base
            if (moduleLevels) {
                let tg = keyList.map(x => {
                    let tre = Object.keys(moduleLevels).map((level) => {
                        let val = moduleLevels[level];
                        let debugKey = (x !== '_' && x.toString().charAt(0) !== '_') ? x : level;
                        registerDebug(x, concatenateWithKey(debugKey, val), level);
                        return concatenateWithKey(level, val);
                    }).flat(4);
                    return concatenateWithKey(x, tre);
                });
                // is it declinated ? only colors, so nope
                // export
                finalOut.push(tg.flat());
            }
            // if moduleLevelsLinked // only color ?
            if (moduleLevelsLinked) {
                //
                let yt = Object.values(moduleKeys).map(moduleKey => {
                    if (moduleKeys.includes(moduleKey)) {
                        let out = [];
                        // linked are here !!
                        registerDebug('linked', concatenateWithKey(moduleTag + '-' + moduleKey, moduleLevelsLinked[moduleKey]), moduleKey);
                        out.push(concatenateWithKey(moduleKey, moduleLevelsLinked[moduleKey]));
                        // is it declinated ?
                        if (moduleLevelsExtended && moduleLevelsExtended[moduleKey]) {
                            //
                            out.push(moduleLevelsLinked[moduleKey].map((z) => {
                                // iddem
                                registerDebug('declinated', concatenateWithKey(moduleTag + '-' + moduleKey + '-' + z, moduleLevelsExtended[moduleKey]), z);
                                return concatenateWithKey(z, moduleLevelsExtended[moduleKey]);
                            }).flat(2));
                        }
                        // flatten for group here
                        return out.flat(2);
                    }
                }).flat();
                // export
                finalOut.push(concatenateWithKey(moduleTag, yt));
            }
            if (levelListDeclin) {
            } // only colors ? don't go there
        }
        if (!keyList && levelList) {
            // export
            let kkk = concatenateWithKey(moduleTag, levelList);
            finalOut.push(kkk);
        }
        if (moduleClassNames) {
            let kk = parseClassNames();
            let kkk = concatenateWithKey(moduleTag, kk);
            registerDebug('classnames', kk);
            // export
            finalOut.push(kkk);
        }
        if (mode && mode === 'debug') {
            return finalOutputDebug;
        }
        else {
            return finalOut.flat(2);
        }
    }
    function registerDebug(tag, data, nestedTag) {
        if (nestedTag) {
            if (!finalOutputDebug[tag])
                finalOutputDebug[tag] = {};
            finalOutputDebug[tag][nestedTag] = finalOutputDebug[tag][nestedTag] ? finalOutputDebug[tag][nestedTag].concat(data) : data;
        }
        else {
            finalOutputDebug[tag] = finalOutputDebug[tag] ? finalOutputDebug[tag].concat(data) : data;
        }
    }
    function parseClassNames() {
        return Object.keys(moduleClassNames).map((klass) => {
            return concatenateWithKey(klass, moduleClassNames[klass]);
        }).flat();
    }
    function concatenateWithKey(key, levelLine) {
        return levelLine.map((levelTag) => {
            return [key, levelTag].filter((val) => {
                return (val !== '_' && val.toString().charAt(0) !== '_');
            }).filter(x => Boolean(x)).join('-');
        });
    }
}
exports.default = {
    getModuleTagClassNames: cssfabricClassNames,
    getModuleTagDebug: function doIt(props) {
        props.outputStyle = 'debug';
        return cssfabricClassNames(props);
    }
};


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2Nzc2ZhYnJpYy9saWIvc2NyaXB0cy9jc3NmYWJyaWNDbGFzc05hbWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsb0NBQW9DLG1CQUFPLENBQUMsMERBQWE7QUFDekQ7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1Q0FBdUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nzc2ZhYnJpYy1tb2R1bGVzL1suLi5wYXRoXS4wNDJmNjdhYWY0NGE2YzAyNjU2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY3NzZmFicmljXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY3NzZmFicmljXCIpKTtcclxuZnVuY3Rpb24gbG9vcEl0KHByb3BzKSB7XHJcbiAgICBjb25zdCB7IG1vZHVsZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBtb2R1bGVBdHRyaWJ1dGVzID0gY3NzZmFicmljXzEuZGVmYXVsdC5nZXRNb2R1bGVEb2NzQXR0cmlidXRlcyhtb2R1bGUpO1xyXG59XHJcbmZ1bmN0aW9uIGNzc2ZhYnJpY0NsYXNzTmFtZXMocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgbW9kdWxlLCBtb2R1bGVBdHRyaWJ1dGUsIG91dHB1dFN0eWxlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IG1vZHVsZUF0dHJpYnV0ZXMgPSBjc3NmYWJyaWNfMS5kZWZhdWx0LmdldE1vZHVsZURvY3NBdHRyaWJ1dGVzKG1vZHVsZSk7XHJcbiAgICBjb25zdCBmYWJyaWNBdHRyaWJ1dGVzID0gbW9kdWxlQXR0cmlidXRlc1ttb2R1bGVBdHRyaWJ1dGVdO1xyXG4gICAgY29uc3QgbW9kdWxlVGFnID0gZmFicmljQXR0cmlidXRlc1tcInRhZ1wiXTtcclxuICAgIGNvbnN0IG1vZHVsZUtleXMgPSBmYWJyaWNBdHRyaWJ1dGVzW1wia2V5c1wiXSB8fCB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBtb2R1bGVMZXZlbHMgPSBmYWJyaWNBdHRyaWJ1dGVzW1wibGV2ZWxzXCJdIHx8IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IG1vZHVsZUxldmVsc0xpbmtlZCA9IGZhYnJpY0F0dHJpYnV0ZXNbXCJsZXZlbHNMaW5rZWRcIl0gfHwgdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgbW9kdWxlTGV2ZWxzRXh0ZW5kZWQgPSBmYWJyaWNBdHRyaWJ1dGVzW1wibGV2ZWxzRGVjbGluXCJdIHx8IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IG1vZHVsZUNsYXNzTmFtZXMgPSBmYWJyaWNBdHRyaWJ1dGVzW1wiY2xhc3NOYW1lc1wiXSB8fCB1bmRlZmluZWQ7XHJcbiAgICBsZXQgZmluYWxPdXRwdXQgPSBbXTtcclxuICAgIGxldCBmaW5hbE91dHB1dERlYnVnID0ge307XHJcbiAgICByZXR1cm4gZG9QYXJzZShvdXRwdXRTdHlsZSk7XHJcbiAgICBmdW5jdGlvbiBkb1BhcnNlKG1vZGUpIHtcclxuICAgICAgICBsZXQga2V5TGlzdCwgbGV2ZWxMaXN0LCBsZXZlbExpc3RMaW5rZWQsIGxldmVsTGlzdERlY2xpbjtcclxuICAgICAgICBjb25zdCBmaW5hbE91dCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnT3V0ID0ge307XHJcbiAgICAgICAgaWYgKG1vZHVsZUtleXMgJiYgbW9kdWxlS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gYmV3YXJlIG9mIGFueSBbXVtdXHJcbiAgICAgICAgICAgIGtleUxpc3QgPSBjb25jYXRlbmF0ZVdpdGhLZXkobW9kdWxlVGFnLCBtb2R1bGVLZXlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZHVsZUxldmVscyAmJiBPYmplY3Qua2V5cyhtb2R1bGVMZXZlbHMpLmxlbmd0aCkgeyAvLyBvYmplY3QgISEhXHJcbiAgICAgICAgICAgIGxldmVsTGlzdCA9IE9iamVjdC5rZXlzKG1vZHVsZUxldmVscykubWFwKChsZXZlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IG1vZHVsZUxldmVsc1tsZXZlbF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2F0ZW5hdGVXaXRoS2V5KGxldmVsLCB2YWwpO1xyXG4gICAgICAgICAgICB9KS5mbGF0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2R1bGVMZXZlbHNMaW5rZWQgJiYgT2JqZWN0LmtleXMobW9kdWxlTGV2ZWxzTGlua2VkKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV2ZWxMaXN0TGlua2VkID0gT2JqZWN0LmtleXMobW9kdWxlTGV2ZWxzTGlua2VkKS5tYXAoKGxldmVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gbW9kdWxlTGV2ZWxzTGlua2VkW2xldmVsXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25jYXRlbmF0ZVdpdGhLZXkobGV2ZWwsIHZhbCk7XHJcbiAgICAgICAgICAgIH0pLmZsYXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZHVsZUxldmVsc0V4dGVuZGVkICYmIE9iamVjdC5rZXlzKG1vZHVsZUxldmVsc0V4dGVuZGVkKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV2ZWxMaXN0RGVjbGluID0gT2JqZWN0LmtleXMobW9kdWxlTGV2ZWxzRXh0ZW5kZWQpLm1hcCgobGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBtb2R1bGVMZXZlbHNMaW5rZWRbbGV2ZWxdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNhdGVuYXRlV2l0aEtleShsZXZlbCwgdmFsKTtcclxuICAgICAgICAgICAgfSkuZmxhdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwcmVmaXggYWxsIG5vdyAsIGFuZCBsaW5rXHJcbiAgICAgICAgLy8gY29sb3JzIDpcclxuICAgICAgICBpZiAoa2V5TGlzdCAmJiAhbW9kdWxlTGV2ZWxzICYmICFtb2R1bGVMZXZlbHNMaW5rZWQpIHtcclxuICAgICAgICAgICAgLy8gZXhwb3J0XHJcbiAgICAgICAgICAgIGZpbmFsT3V0LnB1c2goa2V5TGlzdCk7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyRGVidWcoJ2RlZmF1bHQnLCBrZXlMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZHVsZUtleXMgJiYgKG1vZHVsZUxldmVscyB8fCBtb2R1bGVMZXZlbHNMaW5rZWQpKSB7XHJcbiAgICAgICAgICAgIC8vIGJhc2VcclxuICAgICAgICAgICAgaWYgKG1vZHVsZUxldmVscykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRnID0ga2V5TGlzdC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyZSA9IE9iamVjdC5rZXlzKG1vZHVsZUxldmVscykubWFwKChsZXZlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gbW9kdWxlTGV2ZWxzW2xldmVsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlYnVnS2V5ID0gKHggIT09ICdfJyAmJiB4LnRvU3RyaW5nKCkuY2hhckF0KDApICE9PSAnXycpID8geCA6IGxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRlYnVnKHgsIGNvbmNhdGVuYXRlV2l0aEtleShkZWJ1Z0tleSwgdmFsKSwgbGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uY2F0ZW5hdGVXaXRoS2V5KGxldmVsLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmZsYXQoNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNhdGVuYXRlV2l0aEtleSh4LCB0cmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpcyBpdCBkZWNsaW5hdGVkID8gb25seSBjb2xvcnMsIHNvIG5vcGVcclxuICAgICAgICAgICAgICAgIC8vIGV4cG9ydFxyXG4gICAgICAgICAgICAgICAgZmluYWxPdXQucHVzaCh0Zy5mbGF0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIG1vZHVsZUxldmVsc0xpbmtlZCAvLyBvbmx5IGNvbG9yID9cclxuICAgICAgICAgICAgaWYgKG1vZHVsZUxldmVsc0xpbmtlZCkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGxldCB5dCA9IE9iamVjdC52YWx1ZXMobW9kdWxlS2V5cykubWFwKG1vZHVsZUtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZHVsZUtleXMuaW5jbHVkZXMobW9kdWxlS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpbmtlZCBhcmUgaGVyZSAhIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRlYnVnKCdsaW5rZWQnLCBjb25jYXRlbmF0ZVdpdGhLZXkobW9kdWxlVGFnICsgJy0nICsgbW9kdWxlS2V5LCBtb2R1bGVMZXZlbHNMaW5rZWRbbW9kdWxlS2V5XSksIG1vZHVsZUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGNvbmNhdGVuYXRlV2l0aEtleShtb2R1bGVLZXksIG1vZHVsZUxldmVsc0xpbmtlZFttb2R1bGVLZXldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIGl0IGRlY2xpbmF0ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kdWxlTGV2ZWxzRXh0ZW5kZWQgJiYgbW9kdWxlTGV2ZWxzRXh0ZW5kZWRbbW9kdWxlS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKG1vZHVsZUxldmVsc0xpbmtlZFttb2R1bGVLZXldLm1hcCgoeikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlkZGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJEZWJ1ZygnZGVjbGluYXRlZCcsIGNvbmNhdGVuYXRlV2l0aEtleShtb2R1bGVUYWcgKyAnLScgKyBtb2R1bGVLZXkgKyAnLScgKyB6LCBtb2R1bGVMZXZlbHNFeHRlbmRlZFttb2R1bGVLZXldKSwgeik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNhdGVuYXRlV2l0aEtleSh6LCBtb2R1bGVMZXZlbHNFeHRlbmRlZFttb2R1bGVLZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZsYXQoMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZsYXR0ZW4gZm9yIGdyb3VwIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dC5mbGF0KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmZsYXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGV4cG9ydFxyXG4gICAgICAgICAgICAgICAgZmluYWxPdXQucHVzaChjb25jYXRlbmF0ZVdpdGhLZXkobW9kdWxlVGFnLCB5dCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsZXZlbExpc3REZWNsaW4pIHtcclxuICAgICAgICAgICAgfSAvLyBvbmx5IGNvbG9ycyA/IGRvbid0IGdvIHRoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgha2V5TGlzdCAmJiBsZXZlbExpc3QpIHtcclxuICAgICAgICAgICAgLy8gZXhwb3J0XHJcbiAgICAgICAgICAgIGxldCBra2sgPSBjb25jYXRlbmF0ZVdpdGhLZXkobW9kdWxlVGFnLCBsZXZlbExpc3QpO1xyXG4gICAgICAgICAgICBmaW5hbE91dC5wdXNoKGtrayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2R1bGVDbGFzc05hbWVzKSB7XHJcbiAgICAgICAgICAgIGxldCBrayA9IHBhcnNlQ2xhc3NOYW1lcygpO1xyXG4gICAgICAgICAgICBsZXQga2trID0gY29uY2F0ZW5hdGVXaXRoS2V5KG1vZHVsZVRhZywga2spO1xyXG4gICAgICAgICAgICByZWdpc3RlckRlYnVnKCdjbGFzc25hbWVzJywga2spO1xyXG4gICAgICAgICAgICAvLyBleHBvcnRcclxuICAgICAgICAgICAgZmluYWxPdXQucHVzaChra2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSAmJiBtb2RlID09PSAnZGVidWcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaW5hbE91dHB1dERlYnVnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsT3V0LmZsYXQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJEZWJ1Zyh0YWcsIGRhdGEsIG5lc3RlZFRhZykge1xyXG4gICAgICAgIGlmIChuZXN0ZWRUYWcpIHtcclxuICAgICAgICAgICAgaWYgKCFmaW5hbE91dHB1dERlYnVnW3RhZ10pXHJcbiAgICAgICAgICAgICAgICBmaW5hbE91dHB1dERlYnVnW3RhZ10gPSB7fTtcclxuICAgICAgICAgICAgZmluYWxPdXRwdXREZWJ1Z1t0YWddW25lc3RlZFRhZ10gPSBmaW5hbE91dHB1dERlYnVnW3RhZ11bbmVzdGVkVGFnXSA/IGZpbmFsT3V0cHV0RGVidWdbdGFnXVtuZXN0ZWRUYWddLmNvbmNhdChkYXRhKSA6IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaW5hbE91dHB1dERlYnVnW3RhZ10gPSBmaW5hbE91dHB1dERlYnVnW3RhZ10gPyBmaW5hbE91dHB1dERlYnVnW3RhZ10uY29uY2F0KGRhdGEpIDogZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUNsYXNzTmFtZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1vZHVsZUNsYXNzTmFtZXMpLm1hcCgoa2xhc3MpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmNhdGVuYXRlV2l0aEtleShrbGFzcywgbW9kdWxlQ2xhc3NOYW1lc1trbGFzc10pO1xyXG4gICAgICAgIH0pLmZsYXQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbmNhdGVuYXRlV2l0aEtleShrZXksIGxldmVsTGluZSkge1xyXG4gICAgICAgIHJldHVybiBsZXZlbExpbmUubWFwKChsZXZlbFRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW2tleSwgbGV2ZWxUYWddLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCAhPT0gJ18nICYmIHZhbC50b1N0cmluZygpLmNoYXJBdCgwKSAhPT0gJ18nKTtcclxuICAgICAgICAgICAgfSkuZmlsdGVyKHggPT4gQm9vbGVhbih4KSkuam9pbignLScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIGdldE1vZHVsZVRhZ0NsYXNzTmFtZXM6IGNzc2ZhYnJpY0NsYXNzTmFtZXMsXHJcbiAgICBnZXRNb2R1bGVUYWdEZWJ1ZzogZnVuY3Rpb24gZG9JdChwcm9wcykge1xyXG4gICAgICAgIHByb3BzLm91dHB1dFN0eWxlID0gJ2RlYnVnJztcclxuICAgICAgICByZXR1cm4gY3NzZmFicmljQ2xhc3NOYW1lcyhwcm9wcyk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=