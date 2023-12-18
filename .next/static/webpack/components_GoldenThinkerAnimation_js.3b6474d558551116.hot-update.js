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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scene */ \"./components/Scene.js\");\n// components/GoldenThinkerAnimation.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GoldenThinkerAnimation = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //const image360Path = 'images/360/back.jpg'; // Update with the actual path\n        const image360Path = \"images/360/background_black_4096x2048_360.png\";\n        const objPath = \"3d/anim_goldenthinker.obj\"; // Update with the actual path\n        //const objPath = '3d/anim_menu.obj';\n        // Create a gold material\n        const goldMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial({\n            color: 0xD4AF37,\n            metalness: 1.5,\n            roughness: 0.3,\n            reflectivity: 1\n        });\n        function createBloomMaterial(originalMaterial) {\n            let bloomStrength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1.5, bloomRadius = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.2, bloomThreshold = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.8;\n            const bloomMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.ShaderMaterial({\n                uniforms: {\n                    baseTexture: {\n                        value: null\n                    },\n                    bloomTexture: {\n                        value: null\n                    }\n                },\n                vertexShader: \"\\n        varying vec2 vUv;\\n        void main() {\\n          vUv = uv;\\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n        }\\n      \",\n                fragmentShader: \"\\n        uniform sampler2D baseTexture;\\n        uniform sampler2D bloomTexture;\\n        varying vec2 vUv;\\n        \\n        void main() {\\n          vec4 baseColor = texture2D(baseTexture, vUv);\\n          vec4 bloomColor = texture2D(bloomTexture, vUv);\\n          \\n          gl_FragColor = baseColor + bloomColor * \".concat(bloomStrength, \";\\n        }\\n      \")\n            });\n            bloomMaterial.uniforms.baseTexture.value = originalMaterial.map;\n            bloomMaterial.uniforms.bloomTexture.value = originalMaterial.map; // You can replace this with your own bloom texture if needed.\n            const bloomPass = new UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(window.innerWidth, window.innerHeight), bloomStrength, bloomRadius, bloomThreshold);\n            return new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(originalMaterial, bloomMaterial);\n        }\n        const myScene = new _Scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"](image360Path, objPath, goldMaterial);\n        /* \n     myScene.addElement(objPath, {\n       material: goldMaterial,\n       position: { x: 0, y: -2, z: 0 },\n       rotation: { x: 0, y: 0, z: 0 },\n     }); */ return ()=>{\n        // Clean up when the component unmounts\n        //myScene.dispose();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"animation_container\"\n    }, void 0, false, {\n        fileName: \"/workspaces/www_subjectivetechnologies_com_nodejs/components/GoldenThinkerAnimation.js\",\n        lineNumber: 88,\n        columnNumber: 10\n    }, undefined);\n};\n_s(GoldenThinkerAnimation, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = GoldenThinkerAnimation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoldenThinkerAnimation);\nvar _c;\n$RefreshReg$(_c, \"GoldenThinkerAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvbGRlblRoaW5rZXJBbmltYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHVDQUF1Qzs7O0FBQ1U7QUFDbEI7QUFDOEM7QUFDVDtBQUN4QztBQUU1QixNQUFNTyx5QkFBeUI7O0lBQzdCTixnREFBU0EsQ0FBQztRQUNULDRFQUE0RTtRQUM1RSxNQUFNTyxlQUFlO1FBQ3JCLE1BQU1DLFVBQVUsNkJBQTZCLDhCQUE4QjtRQUUxRSxxQ0FBcUM7UUFDckMseUJBQXlCO1FBQ3pCLE1BQU1DLGVBQWUsSUFBSVAsdURBQTBCLENBQUM7WUFDbERTLE9BQU87WUFDUEMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLGNBQWM7UUFDaEI7UUFJRixTQUFTQyxvQkFBb0JDLGdCQUFnQjtnQkFBRUMsZ0JBQUFBLGlFQUFnQixLQUFLQyxjQUFBQSxpRUFBYyxLQUFLQyxpQkFBQUEsaUVBQWlCO1lBQ3RHLE1BQU1DLGdCQUFnQixJQUFJbEIsaURBQW9CLENBQUM7Z0JBQzdDb0IsVUFBVTtvQkFDUkMsYUFBYTt3QkFBRUMsT0FBTztvQkFBSztvQkFDM0JDLGNBQWM7d0JBQUVELE9BQU87b0JBQUs7Z0JBQzlCO2dCQUNBRSxjQUFlO2dCQU9mQyxnQkFBZ0Isb1VBUzRDLE9BQWRWLGVBQWM7WUFHOUQ7WUFFQUcsY0FBY0UsUUFBUSxDQUFDQyxXQUFXLENBQUNDLEtBQUssR0FBR1IsaUJBQWlCWSxHQUFHO1lBQy9EUixjQUFjRSxRQUFRLENBQUNHLFlBQVksQ0FBQ0QsS0FBSyxHQUFHUixpQkFBaUJZLEdBQUcsRUFBRSw4REFBOEQ7WUFFaEksTUFBTUMsWUFBWSxJQUFJQyxnQkFBZ0IsSUFBSTVCLDBDQUFhLENBQUM4QixPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVcsR0FBR2pCLGVBQWVDLGFBQWFDO1lBRTVILE9BQU8sSUFBSWpCLHVDQUFVLENBQUNjLGtCQUFrQkk7UUFDMUM7UUFPRSxNQUFNZ0IsVUFBVSxJQUFJL0IsOENBQUtBLENBQUNFLGNBQWFDLFNBQVNDO1FBSXBEOzs7OztTQUtTLEdBUUwsT0FBTztRQUNMLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDdEI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQzRCO1FBQUlDLElBQUc7Ozs7OztBQUNqQjtHQWpGTWhDO0tBQUFBO0FBa0ZOLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb2xkZW5UaGlua2VyQW5pbWF0aW9uLmpzP2JkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Hb2xkZW5UaGlua2VyQW5pbWF0aW9uLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xuaW1wb3J0IHsgT0JKTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvT0JKTG9hZGVyLmpzJztcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcblxuY29uc3QgR29sZGVuVGhpbmtlckFuaW1hdGlvbiA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIC8vY29uc3QgaW1hZ2UzNjBQYXRoID0gJ2ltYWdlcy8zNjAvYmFjay5qcGcnOyAvLyBVcGRhdGUgd2l0aCB0aGUgYWN0dWFsIHBhdGhcbiAgIGNvbnN0IGltYWdlMzYwUGF0aCA9ICdpbWFnZXMvMzYwL2JhY2tncm91bmRfYmxhY2tfNDA5NngyMDQ4XzM2MC5wbmcnXG4gICBjb25zdCBvYmpQYXRoID0gJzNkL2FuaW1fZ29sZGVudGhpbmtlci5vYmonOyAvLyBVcGRhdGUgd2l0aCB0aGUgYWN0dWFsIHBhdGhcbiAgICBcbiAgICAvL2NvbnN0IG9ialBhdGggPSAnM2QvYW5pbV9tZW51Lm9iaic7XG4gICAgLy8gQ3JlYXRlIGEgZ29sZCBtYXRlcmlhbFxuICAgIGNvbnN0IGdvbGRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGh5c2ljYWxNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhENEFGMzcsIC8vIEdvbGQgY29sb3JcbiAgICAgIG1ldGFsbmVzczogMS41LCAvLyBGdWxsIG1ldGFsbmVzcyBtYWtlcyBpdCBsb29rIG1vcmUgbGlrZSBnb2xkXG4gICAgICByb3VnaG5lc3M6IDAuMywgLy8gQWRqdXN0IHRvIG1ha2UgaXQgc2hpbmllciBvciBtb3JlIG1hdHRlXG4gICAgICByZWZsZWN0aXZpdHk6IDEsIC8vIEZ1bGwgcmVmbGVjdGl2aXR5IGZvciBhIG1ldGFsbGljIGxvb2tcbiAgICB9KTtcblxuICBcblxuICBmdW5jdGlvbiBjcmVhdGVCbG9vbU1hdGVyaWFsKG9yaWdpbmFsTWF0ZXJpYWwsIGJsb29tU3RyZW5ndGggPSAxLjUsIGJsb29tUmFkaXVzID0gMC4yLCBibG9vbVRocmVzaG9sZCA9IDAuOCkge1xuICAgIGNvbnN0IGJsb29tTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgYmFzZVRleHR1cmU6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgYmxvb21UZXh0dXJlOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICB9LFxuICAgICAgdmVydGV4U2hhZGVyOiBgXG4gICAgICAgIHZhcnlpbmcgdmVjMiB2VXY7XG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2VXYgPSB1djtcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgYmFzZVRleHR1cmU7XG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIGJsb29tVGV4dHVyZTtcbiAgICAgICAgdmFyeWluZyB2ZWMyIHZVdjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2ZWM0IGJhc2VDb2xvciA9IHRleHR1cmUyRChiYXNlVGV4dHVyZSwgdlV2KTtcbiAgICAgICAgICB2ZWM0IGJsb29tQ29sb3IgPSB0ZXh0dXJlMkQoYmxvb21UZXh0dXJlLCB2VXYpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IGJhc2VDb2xvciArIGJsb29tQ29sb3IgKiAke2Jsb29tU3RyZW5ndGh9O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIH0pO1xuXG4gICAgYmxvb21NYXRlcmlhbC51bmlmb3Jtcy5iYXNlVGV4dHVyZS52YWx1ZSA9IG9yaWdpbmFsTWF0ZXJpYWwubWFwO1xuICAgIGJsb29tTWF0ZXJpYWwudW5pZm9ybXMuYmxvb21UZXh0dXJlLnZhbHVlID0gb3JpZ2luYWxNYXRlcmlhbC5tYXA7IC8vIFlvdSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggeW91ciBvd24gYmxvb20gdGV4dHVyZSBpZiBuZWVkZWQuXG5cbiAgICBjb25zdCBibG9vbVBhc3MgPSBuZXcgVW5yZWFsQmxvb21QYXNzKG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLCBibG9vbVN0cmVuZ3RoLCBibG9vbVJhZGl1cywgYmxvb21UaHJlc2hvbGQpO1xuXG4gICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoKG9yaWdpbmFsTWF0ZXJpYWwsIGJsb29tTWF0ZXJpYWwpO1xuICB9XG5cblxuXG5cblxuXG4gICAgY29uc3QgbXlTY2VuZSA9IG5ldyBTY2VuZShpbWFnZTM2MFBhdGgsb2JqUGF0aCwgZ29sZE1hdGVyaWFsKTtcbiAgICBcblxuICAgXG4vKiBcbiAgICAgbXlTY2VuZS5hZGRFbGVtZW50KG9ialBhdGgsIHtcbiAgICAgICBtYXRlcmlhbDogZ29sZE1hdGVyaWFsLFxuICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IC0yLCB6OiAwIH0sXG4gICAgICAgcm90YXRpb246IHsgeDogMCwgeTogMCwgejogMCB9LFxuICAgICB9KTsgKi9cblxuXG5cblxuXG5cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgIC8vbXlTY2VuZS5kaXNwb3NlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGlkPVwiYW5pbWF0aW9uX2NvbnRhaW5lclwiPjwvZGl2Pjtcbn07XG5leHBvcnQgZGVmYXVsdCBHb2xkZW5UaGlua2VyQW5pbWF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiT0JKTG9hZGVyIiwiU2NlbmUiLCJHb2xkZW5UaGlua2VyQW5pbWF0aW9uIiwiaW1hZ2UzNjBQYXRoIiwib2JqUGF0aCIsImdvbGRNYXRlcmlhbCIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwiY29sb3IiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJyZWZsZWN0aXZpdHkiLCJjcmVhdGVCbG9vbU1hdGVyaWFsIiwib3JpZ2luYWxNYXRlcmlhbCIsImJsb29tU3RyZW5ndGgiLCJibG9vbVJhZGl1cyIsImJsb29tVGhyZXNob2xkIiwiYmxvb21NYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidW5pZm9ybXMiLCJiYXNlVGV4dHVyZSIsInZhbHVlIiwiYmxvb21UZXh0dXJlIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJtYXAiLCJibG9vbVBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJWZWN0b3IyIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiTWVzaCIsIm15U2NlbmUiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoldenThinkerAnimation.js\n"));

/***/ })

});