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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"block\";\n        this.renderer.domElement.style.margin = \"0\";\n        this.renderer.gammaOutput = false;\n        document.body.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModel(this.objPath);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.2);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    constructor(image360Path, objPath){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        this.objectInfoArray = [];\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUIsQ0FBQyxJQUFJTyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1lBQzNGLElBQUksQ0FBQ0osUUFBUSxHQUFHLElBQUlMLGdEQUFtQjtZQUN2QyxJQUFJLENBQUNxQixRQUFRLEdBQUcsSUFBSXBCLHVGQUFhQSxDQUFDLElBQUksQ0FBQ2lCLE1BQU0sRUFBRSxJQUFJLENBQUNiLFFBQVEsQ0FBQ0ssVUFBVTtRQUN6RTtRQUNBLElBQUksQ0FBQ2tELGVBQWUsR0FBRyxFQUFFO0lBQzNCO0FBNEpGO0FBRUEsK0RBQWV6RCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2NlbmUuanM/MWQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xuaW1wb3J0IHsgT0JKTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvT0JKTG9hZGVyLmpzJztcblxuY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihpbWFnZTM2MFBhdGgsIG9ialBhdGgpIHtcbiAgICB0aGlzLmltYWdlMzYwUGF0aCA9IGltYWdlMzYwUGF0aDtcbiAgICB0aGlzLm9ialBhdGggPSBvYmpQYXRoO1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLm9iamVjdEluZm9BcnJheSA9IFtdO1xuICB9XG4gIFxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIFxuXG4gICAgdGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuICAgIHRoaXMuY29udHJvbHMudGFyZ2V0LnNldCgwLCAwLCAwKTtcblxuICAgIHRoaXMuYWRkTGlnaHRzKCk7XG4gICAgdGhpcy5hZGRCYWNrZ3JvdW5kU3BoZXJlKHRoaXMuaW1hZ2UzNjBQYXRoKTsgLy8gVXNlIHRoZSBwcm92aWRlZCAzNjAgaW1hZ2UgcGF0aFxuXG4gICAgLy8gTG9hZCB0aGUgLm9iaiBmaWxlXG4gICAgdGhpcy5sb2FkT2JqTW9kZWwodGhpcy5vYmpQYXRoKTtcblxuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPYmplY3RJbmZvQXJyYXkoKTtcbiAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgfSk7XG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdTJykge1xuICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdEluZm9BcnJheSgpO1xuICAgICAgICB0aGlzLnByaW50U2NlbmVTdGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdSJykge1xuICAgICAgICBjb25zdCBzbmFwc2hvdEpTT04gPSBwcm9tcHQoJ0VudGVyIHRoZSBzbmFwc2hvdCBKU09OOicpO1xuICAgICAgICBpZiAoc25hcHNob3RKU09OKSB7XG4gICAgICAgICAgdGhpcy5yZXN0b3JlU2NlbmVTdGF0ZShzbmFwc2hvdEpTT04pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcbiAgICAvLyBBZGQgYW55IGFuaW1hdGlvbnMgb3IgdXBkYXRlcyBoZXJlXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgYWRkTGlnaHRzKCkge1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMik7XG4gICAgdGhpcy5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQxID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIHBvaW50TGlnaHQxLnBvc2l0aW9uLnNldCgxMCwgMTAsIDEwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0MSk7XG5cbiAgICBjb25zdCBwb2ludExpZ2h0MiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBwb2ludExpZ2h0Mi5wb3NpdGlvbi5zZXQoLTEwLCAtMTAsIC0xMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDIpO1xuICB9XG5cbiAgYWRkQmFja2dyb3VuZFNwaGVyZSh0ZXh0dXJlUGF0aCkge1xuICAgIGNvbnN0IHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEwLCAzMiwgMzIpO1xuICAgIHNwaGVyZUdlb21ldHJ5LnNjYWxlKC0xLCAxLCAxKTtcblxuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIGNvbnN0IHNwaGVyZVRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgpO1xuXG4gICAgY29uc3Qgc3BoZXJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHNwaGVyZVRleHR1cmUgfSk7XG5cbiAgICBjb25zdCBzcGhlcmVNZXNoID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlR2VvbWV0cnksIHNwaGVyZU1hdGVyaWFsKTtcbiAgICB0aGlzLnNjZW5lLmFkZChzcGhlcmVNZXNoKTtcbiAgfVxuXG4gIHVwZGF0ZU9iamVjdEluZm9BcnJheSgpIHtcbiAgICB0aGlzLm9iamVjdEluZm9BcnJheS5sZW5ndGggPSAwO1xuICAgIFxuICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAvLyBDb2xsZWN0IG9iamVjdCBpbmZvcm1hdGlvbiBhbmQgYWRkIHRvIHRoaXMub2JqZWN0SW5mb0FycmF5XG4gICAgICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpbnRTY2VuZVN0YXRlKCkge1xuICAgIC8vIENyZWF0ZSBhIHNuYXBzaG90IG9mIHRoZSBzY2VuZSdzIHN0YXRlIGFuZCBwcmludCBpdFxuICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICB9XG5cbiAgcmVzdG9yZVNjZW5lU3RhdGUoc2NlbmVTdGF0ZUpTT04pIHtcbiAgICAvLyBSZXN0b3JlIHRoZSBzY2VuZSdzIHN0YXRlIGZyb20gYSBKU09OIHN0cmluZ1xuICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICB9XG5cbiAgLy8gQWRkIG1ldGhvZHMgdG8gYWRkIGN1c3RvbSBlbGVtZW50cywgbWFuYWdlIGV2ZW50cywgZXRjLlxuICBhZGRFbGVtZW50KGVsZW1lbnRQYXRoLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHRleHR1cmVQYXRoID0gbnVsbCwgbWF0ZXJpYWwgPSBudWxsLCBwb3NpdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9LCByb3RhdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9IH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKGVsZW1lbnRQYXRoLCAob2JqKSA9PiB7XG4gICAgICBvYmoudHJhdmVyc2UoKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjdXN0b20gbWF0ZXJpYWwgaWYgcHJvdmlkZWRcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRleHR1cmVQYXRoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbVRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgY3VzdG9tIHRleHR1cmUgdG8gdGhlIG1lc2hcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsLm1hcCA9IGN1c3RvbVRleHR1cmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2JqLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICAgIG9iai5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XG5cbiAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIFxuIC8vIE1ldGhvZCB0byB0YWtlIGEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYW5kIHJldHVybiBpdCBhcyBKU09OXG4gIHRha2VTbmFwc2hvdCgpIHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBTY2VuZSBvYmplY3RcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb3BlcnR5IGlzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1twcm9wXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIFNhdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBzbmFwc2hvdFxuICAgICAgICAgIHNuYXBzaG90W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIHNuYXBzaG90IG9iamVjdCB0byBKU09OXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LCBudWxsLCAyKTtcbiAgfVxuXG5cbiAgbG9hZE9iak1vZGVsKG9ialBhdGgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQob2JqUGF0aCwgKG9iaikgPT4ge1xuICAgICAgLy8gUHJvY2VzcyB0aGUgbG9hZGVkIC5vYmogZmlsZVxuICAgICAgLy8gRm9yIGV4YW1wbGUsIHNldHRpbmcgcG9zaXRpb24sIHNjYWxlLCBldGMuXG4gICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG4gIFxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG5cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJPQkpMb2FkZXIiLCJTY2VuZSIsImluaXQiLCJyZW5kZXJlciIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkb21FbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwiZ2FtbWFPdXRwdXQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsImNvbnRyb2xzIiwidGFyZ2V0Iiwic2V0IiwiYWRkTGlnaHRzIiwiYWRkQmFja2dyb3VuZFNwaGVyZSIsImltYWdlMzYwUGF0aCIsImxvYWRPYmpNb2RlbCIsIm9ialBhdGgiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlT2JqZWN0SW5mb0FycmF5IiwicHJpbnRTY2VuZVN0YXRlIiwiZXZlbnQiLCJrZXkiLCJzbmFwc2hvdEpTT04iLCJwcm9tcHQiLCJyZXN0b3JlU2NlbmVTdGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJzY2VuZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsInBvaW50TGlnaHQxIiwiUG9pbnRMaWdodCIsInBvaW50TGlnaHQyIiwidGV4dHVyZVBhdGgiLCJzcGhlcmVHZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5Iiwic2NhbGUiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInNwaGVyZVRleHR1cmUiLCJsb2FkIiwic3BoZXJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInNwaGVyZU1lc2giLCJNZXNoIiwib2JqZWN0SW5mb0FycmF5IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwib2JqZWN0Iiwic2NlbmVTdGF0ZUpTT04iLCJhZGRFbGVtZW50IiwiZWxlbWVudFBhdGgiLCJvcHRpb25zIiwibWF0ZXJpYWwiLCJ4IiwieSIsInJvdGF0aW9uIiwibG9hZGVyIiwib2JqIiwidHJhdmVyc2UiLCJjaGlsZCIsImN1c3RvbVRleHR1cmUiLCJ0YWtlU25hcHNob3QiLCJzbmFwc2hvdCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zdHJ1Y3RvciIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiV2ViR0xSZW5kZXJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});