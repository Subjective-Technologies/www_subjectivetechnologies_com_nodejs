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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scene */ \"./components/Scene.js\");\n// components/GoldenThinkerAnimation.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GoldenThinkerAnimation = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const image360Path = \"images/360/back.jpg\"; // Update with the actual path\n        const objPath = \"3d/anim_goldenthinker.obj\"; // Update with the actual path\n        const myScene = new _Scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"](image360Path, objPath, goldMaterial);\n        myScene.init();\n        // Create a gold material\n        const goldMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial({\n            color: 0xD4AF37,\n            metalness: 1,\n            roughness: 0.3,\n            reflectivity: 1\n        });\n        myScene.addElement(\"/3d/anim_goldenthinker.obj\", {\n            material: goldMaterial,\n            position: {\n                x: 0,\n                y: -2,\n                z: 0\n            },\n            rotation: {\n                x: 0,\n                y: 0,\n                z: 0\n            }\n        });\n        return ()=>{\n            // Clean up when the component unmounts\n            myScene.dispose();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"animation_container\"\n    }, void 0, false, {\n        fileName: \"/workspaces/www_subjectivetechnologies_com_nodejs/components/GoldenThinkerAnimation.js\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, undefined);\n};\n_s(GoldenThinkerAnimation, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = GoldenThinkerAnimation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoldenThinkerAnimation);\nvar _c;\n$RefreshReg$(_c, \"GoldenThinkerAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvbGRlblRoaW5rZXJBbmltYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHVDQUF1Qzs7O0FBQ1U7QUFDbEI7QUFDOEM7QUFDVDtBQUN4QztBQUU1QixNQUFNTyx5QkFBeUI7O0lBQzdCTixnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGVBQWUsdUJBQXVCLDhCQUE4QjtRQUMxRSxNQUFNQyxVQUFVLDZCQUE2Qiw4QkFBOEI7UUFFM0UsTUFBTUMsVUFBVSxJQUFJSiw4Q0FBS0EsQ0FBQ0UsY0FBYUMsU0FBU0U7UUFDaERELFFBQVFFLElBQUk7UUFFVix5QkFBeUI7UUFDM0IsTUFBTUQsZUFBZSxJQUFJUix1REFBMEIsQ0FBQztZQUNsRFcsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLFdBQVc7WUFDWEMsY0FBYztRQUNoQjtRQUVBUCxRQUFRUSxVQUFVLENBQUMsOEJBQThCO1lBQy9DQyxVQUFVUjtZQUNWUyxVQUFVO2dCQUFFQyxHQUFHO2dCQUFHQyxHQUFHLENBQUM7Z0JBQUdDLEdBQUc7WUFBRTtZQUM5QkMsVUFBVTtnQkFBRUgsR0FBRztnQkFBR0MsR0FBRztnQkFBR0MsR0FBRztZQUFFO1FBQy9CO1FBUUEsT0FBTztZQUNMLHVDQUF1QztZQUN2Q2IsUUFBUWUsT0FBTztRQUNqQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDQztRQUFJQyxJQUFHOzs7Ozs7QUFDakI7R0FuQ01wQjtLQUFBQTtBQW9DTiwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR29sZGVuVGhpbmtlckFuaW1hdGlvbi5qcz9iZDU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvR29sZGVuVGhpbmtlckFuaW1hdGlvbi5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlci5qcyc7XG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XG5cbmNvbnN0IEdvbGRlblRoaW5rZXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UzNjBQYXRoID0gJ2ltYWdlcy8zNjAvYmFjay5qcGcnOyAvLyBVcGRhdGUgd2l0aCB0aGUgYWN0dWFsIHBhdGhcbiAgICBjb25zdCBvYmpQYXRoID0gJzNkL2FuaW1fZ29sZGVudGhpbmtlci5vYmonOyAvLyBVcGRhdGUgd2l0aCB0aGUgYWN0dWFsIHBhdGhcbiAgICBcbiAgICBjb25zdCBteVNjZW5lID0gbmV3IFNjZW5lKGltYWdlMzYwUGF0aCxvYmpQYXRoLCBnb2xkTWF0ZXJpYWwpO1xuICAgIG15U2NlbmUuaW5pdCgpO1xuXG4gICAgICAvLyBDcmVhdGUgYSBnb2xkIG1hdGVyaWFsXG4gICAgY29uc3QgZ29sZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaHlzaWNhbE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweEQ0QUYzNywgLy8gR29sZCBjb2xvclxuICAgICAgbWV0YWxuZXNzOiAxLCAvLyBGdWxsIG1ldGFsbmVzcyBtYWtlcyBpdCBsb29rIG1vcmUgbGlrZSBnb2xkXG4gICAgICByb3VnaG5lc3M6IDAuMywgLy8gQWRqdXN0IHRvIG1ha2UgaXQgc2hpbmllciBvciBtb3JlIG1hdHRlXG4gICAgICByZWZsZWN0aXZpdHk6IDEsIC8vIEZ1bGwgcmVmbGVjdGl2aXR5IGZvciBhIG1ldGFsbGljIGxvb2tcbiAgICB9KTtcblxuICAgIG15U2NlbmUuYWRkRWxlbWVudCgnLzNkL2FuaW1fZ29sZGVudGhpbmtlci5vYmonLCB7XG4gICAgICBtYXRlcmlhbDogZ29sZE1hdGVyaWFsLFxuICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogLTIsIHo6IDAgfSxcbiAgICAgIHJvdGF0aW9uOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgICB9KTtcblxuXG5cblxuXG5cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgIG15U2NlbmUuZGlzcG9zZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBpZD1cImFuaW1hdGlvbl9jb250YWluZXJcIj48L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgR29sZGVuVGhpbmtlckFuaW1hdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIk9CSkxvYWRlciIsIlNjZW5lIiwiR29sZGVuVGhpbmtlckFuaW1hdGlvbiIsImltYWdlMzYwUGF0aCIsIm9ialBhdGgiLCJteVNjZW5lIiwiZ29sZE1hdGVyaWFsIiwiaW5pdCIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwiY29sb3IiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJyZWZsZWN0aXZpdHkiLCJhZGRFbGVtZW50IiwibWF0ZXJpYWwiLCJwb3NpdGlvbiIsIngiLCJ5IiwieiIsInJvdGF0aW9uIiwiZGlzcG9zZSIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GoldenThinkerAnimation.js\n"));

/***/ })

});