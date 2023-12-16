"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_GoldenThinkerAnimation_js",{

/***/ "./components/GoldenThinkerAnimation.js":
/*!**********************************************!*\
  !*** ./components/GoldenThinkerAnimation.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scene */ \"./components/Scene.js\");\n// components/GoldenThinkerAnimation.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GoldenThinkerAnimation = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const image360Path = \"images/360/back.jpg\"; // Update with the actual path\n        const objPath = \"3d/anim_goldenthinker.obj\"; // Update with the actual path\n        const myScene = new _Scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"](image360Path, objPath, goldMaterial);\n        myScene.init();\n        myScene.addElement(\"/3d/anim_goldenthinker.obj\", {\n            material: goldMaterial,\n            position: {\n                x: 0,\n                y: -2,\n                z: 0\n            },\n            rotation: {\n                x: 0,\n                y: 0,\n                z: 0\n            }\n        });\n        return ()=>{\n            // Clean up when the component unmounts\n            myScene.dispose();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"animation_container\"\n    }, void 0, false, {\n        fileName: \"/workspaces/www_subjectivetechnologies_com_nodejs/components/GoldenThinkerAnimation.js\",\n        lineNumber: 36,\n        columnNumber: 10\n    }, undefined);\n};\n_s(GoldenThinkerAnimation, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = GoldenThinkerAnimation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoldenThinkerAnimation);\nvar _c;\n$RefreshReg$(_c, \"GoldenThinkerAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvbGRlblRoaW5rZXJBbmltYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdUNBQXVDOzs7QUFDVTtBQUNsQjtBQUM4QztBQUNUO0FBQ3hDO0FBRTVCLE1BQU1PLHlCQUF5Qjs7SUFDN0JOLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sZUFBZSx1QkFBdUIsOEJBQThCO1FBQzFFLE1BQU1DLFVBQVUsNkJBQTZCLDhCQUE4QjtRQUUzRSxNQUFNQyxVQUFVLElBQUlKLDhDQUFLQSxDQUFDRSxjQUFhQyxTQUFTRTtRQUNoREQsUUFBUUUsSUFBSTtRQUlaRixRQUFRRyxVQUFVLENBQUMsOEJBQThCO1lBQy9DQyxVQUFVSDtZQUNWSSxVQUFVO2dCQUFFQyxHQUFHO2dCQUFHQyxHQUFHLENBQUM7Z0JBQUdDLEdBQUc7WUFBRTtZQUM5QkMsVUFBVTtnQkFBRUgsR0FBRztnQkFBR0MsR0FBRztnQkFBR0MsR0FBRztZQUFFO1FBQy9CO1FBUUEsT0FBTztZQUNMLHVDQUF1QztZQUN2Q1IsUUFBUVUsT0FBTztRQUNqQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDQztRQUFJQyxJQUFHOzs7Ozs7QUFDakI7R0E3Qk1mO0tBQUFBO0FBOEJOLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb2xkZW5UaGlua2VyQW5pbWF0aW9uLmpzP2JkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Hb2xkZW5UaGlua2VyQW5pbWF0aW9uLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xuaW1wb3J0IHsgT0JKTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvT0JKTG9hZGVyLmpzJztcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcblxuY29uc3QgR29sZGVuVGhpbmtlckFuaW1hdGlvbiA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbWFnZTM2MFBhdGggPSAnaW1hZ2VzLzM2MC9iYWNrLmpwZyc7IC8vIFVwZGF0ZSB3aXRoIHRoZSBhY3R1YWwgcGF0aFxuICAgIGNvbnN0IG9ialBhdGggPSAnM2QvYW5pbV9nb2xkZW50aGlua2VyLm9iaic7IC8vIFVwZGF0ZSB3aXRoIHRoZSBhY3R1YWwgcGF0aFxuICAgIFxuICAgIGNvbnN0IG15U2NlbmUgPSBuZXcgU2NlbmUoaW1hZ2UzNjBQYXRoLG9ialBhdGgsIGdvbGRNYXRlcmlhbCk7XG4gICAgbXlTY2VuZS5pbml0KCk7XG5cblxuXG4gICAgbXlTY2VuZS5hZGRFbGVtZW50KCcvM2QvYW5pbV9nb2xkZW50aGlua2VyLm9iaicsIHtcbiAgICAgIG1hdGVyaWFsOiBnb2xkTWF0ZXJpYWwsXG4gICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAtMiwgejogMCB9LFxuICAgICAgcm90YXRpb246IHsgeDogMCwgeTogMCwgejogMCB9LFxuICAgIH0pO1xuXG5cblxuXG5cblxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xuICAgICAgbXlTY2VuZS5kaXNwb3NlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGlkPVwiYW5pbWF0aW9uX2NvbnRhaW5lclwiPjwvZGl2Pjtcbn07XG5leHBvcnQgZGVmYXVsdCBHb2xkZW5UaGlua2VyQW5pbWF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiT0JKTG9hZGVyIiwiU2NlbmUiLCJHb2xkZW5UaGlua2VyQW5pbWF0aW9uIiwiaW1hZ2UzNjBQYXRoIiwib2JqUGF0aCIsIm15U2NlbmUiLCJnb2xkTWF0ZXJpYWwiLCJpbml0IiwiYWRkRWxlbWVudCIsIm1hdGVyaWFsIiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJyb3RhdGlvbiIsImRpc3Bvc2UiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoldenThinkerAnimation.js\n"));

/***/ })

});