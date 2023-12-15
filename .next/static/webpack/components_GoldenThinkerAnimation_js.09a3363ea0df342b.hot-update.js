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

/***/ "./components/Scene.js":
/*!*****************************!*\
  !*** ./components/Scene.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.gammaOutput = false;\n        document.body.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(\"images/360/background_black_4096x2048_360.png\");\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.2);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    constructor(){\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        this.objectInfoArray = [];\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vY29tcG9uZW50cy9TY2VuZS5qcz8xZDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyc7XG5pbXBvcnQgeyBPQkpMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXIuanMnO1xuXG5jbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLm9iamVjdEluZm9BcnJheSA9IFtdO1xuICB9XG4gIFxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcbiAgICB0aGlzLmNvbnRyb2xzLnRhcmdldC5zZXQoMCwgMCwgMCk7XG4gICAgXG4gICAgdGhpcy5hZGRMaWdodHMoKTtcbiAgICB0aGlzLmFkZEJhY2tncm91bmRTcGhlcmUoJ2ltYWdlcy8zNjAvYmFja2dyb3VuZF9ibGFja180MDk2eDIwNDhfMzYwLnBuZycpO1xuICAgIFxuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPYmplY3RJbmZvQXJyYXkoKTtcbiAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnUycpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPYmplY3RJbmZvQXJyYXkoKTtcbiAgICAgICAgdGhpcy5wcmludFNjZW5lU3RhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnUicpIHtcbiAgICAgICAgY29uc3Qgc25hcHNob3RKU09OID0gcHJvbXB0KCdFbnRlciB0aGUgc25hcHNob3QgSlNPTjonKTtcbiAgICAgICAgaWYgKHNuYXBzaG90SlNPTikge1xuICAgICAgICAgIHRoaXMucmVzdG9yZVNjZW5lU3RhdGUoc25hcHNob3RKU09OKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGUoKSk7XG4gICAgLy8gQWRkIGFueSBhbmltYXRpb25zIG9yIHVwZGF0ZXMgaGVyZVxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIGFkZExpZ2h0cygpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjIpO1xuICAgIHRoaXMuc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICBjb25zdCBwb2ludExpZ2h0MSA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBwb2ludExpZ2h0MS5wb3NpdGlvbi5zZXQoMTAsIDEwLCAxMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDEpO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodDIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgcG9pbnRMaWdodDIucG9zaXRpb24uc2V0KC0xMCwgLTEwLCAtMTApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQyKTtcbiAgfVxuXG4gIGFkZEJhY2tncm91bmRTcGhlcmUodGV4dHVyZVBhdGgpIHtcbiAgICBjb25zdCBzcGhlcmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxMCwgMzIsIDMyKTtcbiAgICBzcGhlcmVHZW9tZXRyeS5zY2FsZSgtMSwgMSwgMSk7XG5cbiAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICBjb25zdCBzcGhlcmVUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoKTtcblxuICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBzcGhlcmVUZXh0dXJlIH0pO1xuXG4gICAgY29uc3Qgc3BoZXJlTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUdlb21ldHJ5LCBzcGhlcmVNYXRlcmlhbCk7XG4gICAgdGhpcy5zY2VuZS5hZGQoc3BoZXJlTWVzaCk7XG4gIH1cblxuICB1cGRhdGVPYmplY3RJbmZvQXJyYXkoKSB7XG4gICAgdGhpcy5vYmplY3RJbmZvQXJyYXkubGVuZ3RoID0gMDtcbiAgICBcbiAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgLy8gQ29sbGVjdCBvYmplY3QgaW5mb3JtYXRpb24gYW5kIGFkZCB0byB0aGlzLm9iamVjdEluZm9BcnJheVxuICAgICAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaW50U2NlbmVTdGF0ZSgpIHtcbiAgICAvLyBDcmVhdGUgYSBzbmFwc2hvdCBvZiB0aGUgc2NlbmUncyBzdGF0ZSBhbmQgcHJpbnQgaXRcbiAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgfVxuXG4gIHJlc3RvcmVTY2VuZVN0YXRlKHNjZW5lU3RhdGVKU09OKSB7XG4gICAgLy8gUmVzdG9yZSB0aGUgc2NlbmUncyBzdGF0ZSBmcm9tIGEgSlNPTiBzdHJpbmdcbiAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgfVxuXG4gIC8vIEFkZCBtZXRob2RzIHRvIGFkZCBjdXN0b20gZWxlbWVudHMsIG1hbmFnZSBldmVudHMsIGV0Yy5cbiAgYWRkRWxlbWVudChlbGVtZW50UGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB0ZXh0dXJlUGF0aCA9IG51bGwsIG1hdGVyaWFsID0gbnVsbCwgcG9zaXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfSwgcm90YXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfSB9ID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChlbGVtZW50UGF0aCwgKG9iaikgPT4ge1xuICAgICAgb2JqLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG4gICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgY3VzdG9tIG1hdGVyaWFsIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0ZXh0dXJlUGF0aCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21UZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGN1c3RvbSB0ZXh0dXJlIHRvIHRoZSBtZXNoXG4gICAgICAgICAgICBjaGlsZC5tYXRlcmlhbC5tYXAgPSBjdXN0b21UZXh0dXJlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG9iai5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgICBvYmoucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xuXG4gICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG4gIFxuICBcbiAvLyBNZXRob2QgdG8gdGFrZSBhIHNuYXBzaG90IG9mIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFuZCByZXR1cm4gaXQgYXMgSlNPTlxuICB0YWtlU25hcHNob3QoKSB7XG4gICAgY29uc3Qgc25hcHNob3QgPSB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgcHJvcGVydGllcyBvZiB0aGUgU2NlbmUgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBub3QgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHRoaXNbcHJvcF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBTYXZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgc25hcHNob3RcbiAgICAgICAgICBzbmFwc2hvdFtwcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRoZSBzbmFwc2hvdCBvYmplY3QgdG8gSlNPTlxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzbmFwc2hvdCwgbnVsbCwgMik7XG4gIH1cblxuXG4gICAgbG9hZE9iak1vZGVsKG9ialBhdGgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQob2JqUGF0aCwgKG9iaikgPT4ge1xuICAgICAgLy8gUHJvY2VzcyB0aGUgbG9hZGVkIC5vYmogZmlsZVxuICAgICAgLy8gRm9yIGV4YW1wbGUsIHNldHRpbmcgcG9zaXRpb24sIHNjYWxlLCBldGMuXG4gICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG4gIFxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG5cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJPQkpMb2FkZXIiLCJTY2VuZSIsImluaXQiLCJyZW5kZXJlciIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnYW1tYU91dHB1dCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsImNvbnRyb2xzIiwidGFyZ2V0Iiwic2V0IiwiYWRkTGlnaHRzIiwiYWRkQmFja2dyb3VuZFNwaGVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVPYmplY3RJbmZvQXJyYXkiLCJwcmludFNjZW5lU3RhdGUiLCJldmVudCIsImtleSIsInNuYXBzaG90SlNPTiIsInByb21wdCIsInJlc3RvcmVTY2VuZVN0YXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInNjZW5lIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwicG9pbnRMaWdodDEiLCJQb2ludExpZ2h0IiwicG9pbnRMaWdodDIiLCJ0ZXh0dXJlUGF0aCIsInNwaGVyZUdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJzY2FsZSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic3BoZXJlVGV4dHVyZSIsImxvYWQiLCJzcGhlcmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwic3BoZXJlTWVzaCIsIk1lc2giLCJvYmplY3RJbmZvQXJyYXkiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImZvckVhY2giLCJvYmplY3QiLCJzY2VuZVN0YXRlSlNPTiIsImFkZEVsZW1lbnQiLCJlbGVtZW50UGF0aCIsIm9wdGlvbnMiLCJtYXRlcmlhbCIsIngiLCJ5Iiwicm90YXRpb24iLCJsb2FkZXIiLCJvYmoiLCJ0cmF2ZXJzZSIsImNoaWxkIiwiY3VzdG9tVGV4dHVyZSIsInRha2VTbmFwc2hvdCIsInNuYXBzaG90IiwicHJvcCIsImhhc093blByb3BlcnR5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRPYmpNb2RlbCIsIm9ialBhdGgiLCJjb25zdHJ1Y3RvciIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiV2ViR0xSZW5kZXJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});