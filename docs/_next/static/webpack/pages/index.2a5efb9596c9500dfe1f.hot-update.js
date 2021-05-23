self["webpackHotUpdate_N_E"]("pages/index",{

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
                        debugKey = (level === '_') ? debugKey : debugKey + '-' + level;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2Nzc2ZhYnJpYy9saWIvc2NyaXB0cy9jc3NmYWJyaWNDbGFzc05hbWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsb0NBQW9DLG1CQUFPLENBQUMsMERBQWE7QUFDekQ7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1Q0FBdUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE1ZWZiOTU5NmM5NTAwZGZlMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNzc2ZhYnJpY18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Nzc2ZhYnJpY1wiKSk7XHJcbmZ1bmN0aW9uIGxvb3BJdChwcm9wcykge1xyXG4gICAgY29uc3QgeyBtb2R1bGUgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgbW9kdWxlQXR0cmlidXRlcyA9IGNzc2ZhYnJpY18xLmRlZmF1bHQuZ2V0TW9kdWxlRG9jc0F0dHJpYnV0ZXMobW9kdWxlKTtcclxufVxyXG5mdW5jdGlvbiBjc3NmYWJyaWNDbGFzc05hbWVzKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IG1vZHVsZSwgbW9kdWxlQXR0cmlidXRlLCBvdXRwdXRTdHlsZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBtb2R1bGVBdHRyaWJ1dGVzID0gY3NzZmFicmljXzEuZGVmYXVsdC5nZXRNb2R1bGVEb2NzQXR0cmlidXRlcyhtb2R1bGUpO1xyXG4gICAgY29uc3QgZmFicmljQXR0cmlidXRlcyA9IG1vZHVsZUF0dHJpYnV0ZXNbbW9kdWxlQXR0cmlidXRlXTtcclxuICAgIGNvbnN0IG1vZHVsZVRhZyA9IGZhYnJpY0F0dHJpYnV0ZXNbXCJ0YWdcIl07XHJcbiAgICBjb25zdCBtb2R1bGVLZXlzID0gZmFicmljQXR0cmlidXRlc1tcImtleXNcIl0gfHwgdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgbW9kdWxlTGV2ZWxzID0gZmFicmljQXR0cmlidXRlc1tcImxldmVsc1wiXSB8fCB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBtb2R1bGVMZXZlbHNMaW5rZWQgPSBmYWJyaWNBdHRyaWJ1dGVzW1wibGV2ZWxzTGlua2VkXCJdIHx8IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IG1vZHVsZUxldmVsc0V4dGVuZGVkID0gZmFicmljQXR0cmlidXRlc1tcImxldmVsc0RlY2xpblwiXSB8fCB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBtb2R1bGVDbGFzc05hbWVzID0gZmFicmljQXR0cmlidXRlc1tcImNsYXNzTmFtZXNcIl0gfHwgdW5kZWZpbmVkO1xyXG4gICAgbGV0IGZpbmFsT3V0cHV0ID0gW107XHJcbiAgICBsZXQgZmluYWxPdXRwdXREZWJ1ZyA9IHt9O1xyXG4gICAgcmV0dXJuIGRvUGFyc2Uob3V0cHV0U3R5bGUpO1xyXG4gICAgZnVuY3Rpb24gZG9QYXJzZShtb2RlKSB7XHJcbiAgICAgICAgbGV0IGtleUxpc3QsIGxldmVsTGlzdCwgbGV2ZWxMaXN0TGlua2VkLCBsZXZlbExpc3REZWNsaW47XHJcbiAgICAgICAgY29uc3QgZmluYWxPdXQgPSBbXTtcclxuICAgICAgICBjb25zdCBkZWJ1Z091dCA9IHt9O1xyXG4gICAgICAgIGlmIChtb2R1bGVLZXlzICYmIG1vZHVsZUtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGJld2FyZSBvZiBhbnkgW11bXVxyXG4gICAgICAgICAgICBrZXlMaXN0ID0gY29uY2F0ZW5hdGVXaXRoS2V5KG1vZHVsZVRhZywgbW9kdWxlS2V5cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2R1bGVMZXZlbHMgJiYgT2JqZWN0LmtleXMobW9kdWxlTGV2ZWxzKS5sZW5ndGgpIHsgLy8gb2JqZWN0ICEhIVxyXG4gICAgICAgICAgICBsZXZlbExpc3QgPSBPYmplY3Qua2V5cyhtb2R1bGVMZXZlbHMpLm1hcCgobGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBtb2R1bGVMZXZlbHNbbGV2ZWxdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNhdGVuYXRlV2l0aEtleShsZXZlbCwgdmFsKTtcclxuICAgICAgICAgICAgfSkuZmxhdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kdWxlTGV2ZWxzTGlua2VkICYmIE9iamVjdC5rZXlzKG1vZHVsZUxldmVsc0xpbmtlZCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldmVsTGlzdExpbmtlZCA9IE9iamVjdC5rZXlzKG1vZHVsZUxldmVsc0xpbmtlZCkubWFwKChsZXZlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IG1vZHVsZUxldmVsc0xpbmtlZFtsZXZlbF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2F0ZW5hdGVXaXRoS2V5KGxldmVsLCB2YWwpO1xyXG4gICAgICAgICAgICB9KS5mbGF0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2R1bGVMZXZlbHNFeHRlbmRlZCAmJiBPYmplY3Qua2V5cyhtb2R1bGVMZXZlbHNFeHRlbmRlZCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldmVsTGlzdERlY2xpbiA9IE9iamVjdC5rZXlzKG1vZHVsZUxldmVsc0V4dGVuZGVkKS5tYXAoKGxldmVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gbW9kdWxlTGV2ZWxzTGlua2VkW2xldmVsXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25jYXRlbmF0ZVdpdGhLZXkobGV2ZWwsIHZhbCk7XHJcbiAgICAgICAgICAgIH0pLmZsYXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJlZml4IGFsbCBub3cgLCBhbmQgbGlua1xyXG4gICAgICAgIC8vIGNvbG9ycyA6XHJcbiAgICAgICAgaWYgKGtleUxpc3QgJiYgIW1vZHVsZUxldmVscyAmJiAhbW9kdWxlTGV2ZWxzTGlua2VkKSB7XHJcbiAgICAgICAgICAgIC8vIGV4cG9ydFxyXG4gICAgICAgICAgICBmaW5hbE91dC5wdXNoKGtleUxpc3QpO1xyXG4gICAgICAgICAgICByZWdpc3RlckRlYnVnKCdkZWZhdWx0Jywga2V5TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2R1bGVLZXlzICYmIChtb2R1bGVMZXZlbHMgfHwgbW9kdWxlTGV2ZWxzTGlua2VkKSkge1xyXG4gICAgICAgICAgICAvLyBiYXNlXHJcbiAgICAgICAgICAgIGlmIChtb2R1bGVMZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZyA9IGtleUxpc3QubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmUgPSBPYmplY3Qua2V5cyhtb2R1bGVMZXZlbHMpLm1hcCgobGV2ZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IG1vZHVsZUxldmVsc1tsZXZlbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWJ1Z0tleSA9ICh4ICE9PSAnXycgJiYgeC50b1N0cmluZygpLmNoYXJBdCgwKSAhPT0gJ18nKSA/IHggOiBsZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdLZXkgPSAobGV2ZWwgPT09ICdfJykgPyBkZWJ1Z0tleSA6IGRlYnVnS2V5ICsgJy0nICsgbGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyRGVidWcoeCwgY29uY2F0ZW5hdGVXaXRoS2V5KGRlYnVnS2V5LCB2YWwpLCBsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25jYXRlbmF0ZVdpdGhLZXkobGV2ZWwsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZmxhdCg0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uY2F0ZW5hdGVXaXRoS2V5KHgsIHRyZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGlzIGl0IGRlY2xpbmF0ZWQgPyBvbmx5IGNvbG9ycywgc28gbm9wZVxyXG4gICAgICAgICAgICAgICAgLy8gZXhwb3J0XHJcbiAgICAgICAgICAgICAgICBmaW5hbE91dC5wdXNoKHRnLmZsYXQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgbW9kdWxlTGV2ZWxzTGlua2VkIC8vIG9ubHkgY29sb3IgP1xyXG4gICAgICAgICAgICBpZiAobW9kdWxlTGV2ZWxzTGlua2VkKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgbGV0IHl0ID0gT2JqZWN0LnZhbHVlcyhtb2R1bGVLZXlzKS5tYXAobW9kdWxlS2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kdWxlS2V5cy5pbmNsdWRlcyhtb2R1bGVLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlua2VkIGFyZSBoZXJlICEhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyRGVidWcoJ2xpbmtlZCcsIGNvbmNhdGVuYXRlV2l0aEtleShtb2R1bGVUYWcgKyAnLScgKyBtb2R1bGVLZXksIG1vZHVsZUxldmVsc0xpbmtlZFttb2R1bGVLZXldKSwgbW9kdWxlS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goY29uY2F0ZW5hdGVXaXRoS2V5KG1vZHVsZUtleSwgbW9kdWxlTGV2ZWxzTGlua2VkW21vZHVsZUtleV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgaXQgZGVjbGluYXRlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2R1bGVMZXZlbHNFeHRlbmRlZCAmJiBtb2R1bGVMZXZlbHNFeHRlbmRlZFttb2R1bGVLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2gobW9kdWxlTGV2ZWxzTGlua2VkW21vZHVsZUtleV0ubWFwKCh6KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWRkZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRlYnVnKCdkZWNsaW5hdGVkJywgY29uY2F0ZW5hdGVXaXRoS2V5KG1vZHVsZVRhZyArICctJyArIG1vZHVsZUtleSArICctJyArIHosIG1vZHVsZUxldmVsc0V4dGVuZGVkW21vZHVsZUtleV0pLCB6KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uY2F0ZW5hdGVXaXRoS2V5KHosIG1vZHVsZUxldmVsc0V4dGVuZGVkW21vZHVsZUtleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmxhdCgyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxhdHRlbiBmb3IgZ3JvdXAgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0LmZsYXQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuZmxhdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gZXhwb3J0XHJcbiAgICAgICAgICAgICAgICBmaW5hbE91dC5wdXNoKGNvbmNhdGVuYXRlV2l0aEtleShtb2R1bGVUYWcsIHl0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxldmVsTGlzdERlY2xpbikge1xyXG4gICAgICAgICAgICB9IC8vIG9ubHkgY29sb3JzID8gZG9uJ3QgZ28gdGhlcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFrZXlMaXN0ICYmIGxldmVsTGlzdCkge1xyXG4gICAgICAgICAgICAvLyBleHBvcnRcclxuICAgICAgICAgICAgbGV0IGtrayA9IGNvbmNhdGVuYXRlV2l0aEtleShtb2R1bGVUYWcsIGxldmVsTGlzdCk7XHJcbiAgICAgICAgICAgIGZpbmFsT3V0LnB1c2goa2trKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZHVsZUNsYXNzTmFtZXMpIHtcclxuICAgICAgICAgICAgbGV0IGtrID0gcGFyc2VDbGFzc05hbWVzKCk7XHJcbiAgICAgICAgICAgIGxldCBra2sgPSBjb25jYXRlbmF0ZVdpdGhLZXkobW9kdWxlVGFnLCBrayk7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyRGVidWcoJ2NsYXNzbmFtZXMnLCBrayk7XHJcbiAgICAgICAgICAgIC8vIGV4cG9ydFxyXG4gICAgICAgICAgICBmaW5hbE91dC5wdXNoKGtrayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlICYmIG1vZGUgPT09ICdkZWJ1ZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsT3V0cHV0RGVidWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmluYWxPdXQuZmxhdCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckRlYnVnKHRhZywgZGF0YSwgbmVzdGVkVGFnKSB7XHJcbiAgICAgICAgaWYgKG5lc3RlZFRhZykge1xyXG4gICAgICAgICAgICBpZiAoIWZpbmFsT3V0cHV0RGVidWdbdGFnXSlcclxuICAgICAgICAgICAgICAgIGZpbmFsT3V0cHV0RGVidWdbdGFnXSA9IHt9O1xyXG4gICAgICAgICAgICBmaW5hbE91dHB1dERlYnVnW3RhZ11bbmVzdGVkVGFnXSA9IGZpbmFsT3V0cHV0RGVidWdbdGFnXVtuZXN0ZWRUYWddID8gZmluYWxPdXRwdXREZWJ1Z1t0YWddW25lc3RlZFRhZ10uY29uY2F0KGRhdGEpIDogZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbmFsT3V0cHV0RGVidWdbdGFnXSA9IGZpbmFsT3V0cHV0RGVidWdbdGFnXSA/IGZpbmFsT3V0cHV0RGVidWdbdGFnXS5jb25jYXQoZGF0YSkgOiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlQ2xhc3NOYW1lcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobW9kdWxlQ2xhc3NOYW1lcykubWFwKChrbGFzcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uY2F0ZW5hdGVXaXRoS2V5KGtsYXNzLCBtb2R1bGVDbGFzc05hbWVzW2tsYXNzXSk7XHJcbiAgICAgICAgfSkuZmxhdCgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29uY2F0ZW5hdGVXaXRoS2V5KGtleSwgbGV2ZWxMaW5lKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldmVsTGluZS5tYXAoKGxldmVsVGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBba2V5LCBsZXZlbFRhZ10uZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodmFsICE9PSAnXycgJiYgdmFsLnRvU3RyaW5nKCkuY2hhckF0KDApICE9PSAnXycpO1xyXG4gICAgICAgICAgICB9KS5maWx0ZXIoeCA9PiBCb29sZWFuKHgpKS5qb2luKCctJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgZ2V0TW9kdWxlVGFnQ2xhc3NOYW1lczogY3NzZmFicmljQ2xhc3NOYW1lcyxcclxuICAgIGdldE1vZHVsZVRhZ0RlYnVnOiBmdW5jdGlvbiBkb0l0KHByb3BzKSB7XHJcbiAgICAgICAgcHJvcHMub3V0cHV0U3R5bGUgPSAnZGVidWcnO1xyXG4gICAgICAgIHJldHVybiBjc3NmYWJyaWNDbGFzc05hbWVzKHByb3BzKTtcclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==