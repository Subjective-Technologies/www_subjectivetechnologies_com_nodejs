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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        console.log(\"Calling INIT\");\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"relative\";\n        this.renderer.domElement.style.margin = \"0\";\n        const canvas = this.renderer.domElement;\n        canvas.style.position = \"absolute\"; // Example to make it absolute positioned\n        canvas.style.left = \"0\";\n        canvas.style.top = \"0\";\n        // Instead of document.body.appendChild(this.renderer.domElement);\n        this.renderer.gammaOutput = false;\n        const container = document.getElementById(\"animation_container\"); // Make sure this is the ID of your container div\n        container.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModelWithMaterial(this.objPath, this.material);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.7);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 218);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 500);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    loadObjModelWithMaterial(objPath, material) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child.isMesh) {\n                    child.material = material || child.material;\n                }\n            });\n            this.scene.add(obj);\n        });\n    }\n    // ... rest of the Scene class\n    dispose() {\n        // Dispose of geometries, materials, textures, etc.\n        this.scene.traverse((object)=>{\n            if (!object.isMesh) return;\n            object.geometry.dispose();\n            if (object.material.isMaterial) {\n                this.cleanMaterial(object.material);\n            } else {\n                // An array of materials\n                for (const material of object.material)cleanMaterial(material);\n            }\n        });\n        if (this.renderer) {\n            this.renderer.dispose();\n        }\n    // Additional cleanup if needed\n    }\n    cleanMaterial(material) {\n        material.dispose();\n        // Dispose textures\n        for (const key of Object.keys(material)){\n            const value = material[key];\n            if (value && typeof value === \"object\" && \"minFilter\" in value) {\n                value.dispose();\n            }\n        }\n    }\n    constructor(image360Path, objPath, material, bloom = true){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.material = material; // Store the material\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        if (!bloom) this.objectInfoArray = [];\n        this.init();\n    }\n}\nScene.instance = null;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsT0FBT0EsVUFBVSxZQUFZLGVBQWVBLE9BQU87Z0JBQzlEQSxNQUFNTixPQUFPO1lBQ2Y7UUFDRjtJQUNGO0lBck9BTyxZQUFZbkUsWUFBWSxFQUFFRSxPQUFPLEVBQUVDLFFBQVEsRUFBRWlFLFFBQVEsSUFBSSxDQUFFO1FBRXpELElBQUksQ0FBQ3BFLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDRSxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFVBQVUscUJBQXFCO1FBQy9DLElBQUksQ0FBQ1ksS0FBSyxHQUFHLElBQUkvQyx3Q0FBVztRQUU1QixJQUFJLElBQWtCLEVBQWE7WUFDL0IsSUFBSSxDQUFDeUIsTUFBTSxHQUFHLElBQUl6QixvREFBdUIsQ0FBQyxJQUFJUyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1lBQzNGLElBQUksQ0FBQ0osUUFBUSxHQUFHLElBQUlQLGdEQUFtQjtZQUN2QyxJQUFJLENBQUMyQixRQUFRLEdBQUcsSUFBSTFCLHVGQUFhQSxDQUFDLElBQUksQ0FBQ3dCLE1BQU0sRUFBRSxJQUFJLENBQUNsQixRQUFRLENBQUNLLFVBQVU7UUFDM0U7UUFFQSxJQUFJLENBQUN3RixPQUNMLElBQUksQ0FBQ2pDLGVBQWUsR0FBRyxFQUFFO1FBQ3pCLElBQUksQ0FBQy9ELElBQUk7SUFFWDtBQXlORjtBQTlPTUQsTUFFR29HLFdBQVk7QUE4T3JCLCtEQUFlcEcsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NjZW5lLmpzPzFkNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlci5qcyc7XG5cbmNsYXNzIFNjZW5lIHtcblxuICBzdGF0aWMgaW5zdGFuY2UgID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihpbWFnZTM2MFBhdGgsIG9ialBhdGgsIG1hdGVyaWFsLCBibG9vbSA9IHRydWUpIHtcbiAgICBcbiAgICB0aGlzLmltYWdlMzYwUGF0aCA9IGltYWdlMzYwUGF0aDtcbiAgICB0aGlzLm9ialBhdGggPSBvYmpQYXRoO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDsgLy8gU3RvcmUgdGhlIG1hdGVyaWFsXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWJsb29tKVxuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5ID0gW107XG4gICAgdGhpcy5pbml0KCk7XG4gXG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBJTklUXCIpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdyZWxhdGl2ZSc7XG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJzsgLy8gRXhhbXBsZSB0byBtYWtlIGl0IGFic29sdXRlIHBvc2l0aW9uZWRcbiAgICBjYW52YXMuc3R5bGUubGVmdCA9ICcwJztcbiAgICBjYW52YXMuc3R5bGUudG9wID0gJzAnO1xuXG4gICAgLy8gSW5zdGVhZCBvZiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cblxuICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSBmYWxzZTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWF0aW9uX2NvbnRhaW5lcicpOyAvLyBNYWtlIHN1cmUgdGhpcyBpcyB0aGUgSUQgb2YgeW91ciBjb250YWluZXIgZGl2XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcbiAgICB0aGlzLmNvbnRyb2xzLnRhcmdldC5zZXQoMCwgMCwgMCk7XG5cbiAgICB0aGlzLmFkZExpZ2h0cygpO1xuICAgIHRoaXMuYWRkQmFja2dyb3VuZFNwaGVyZSh0aGlzLmltYWdlMzYwUGF0aCk7IC8vIFVzZSB0aGUgcHJvdmlkZWQgMzYwIGltYWdlIHBhdGhcblxuICAgIC8vIExvYWQgdGhlIC5vYmogZmlsZVxuICAgIHRoaXMubG9hZE9iak1vZGVsV2l0aE1hdGVyaWFsKHRoaXMub2JqUGF0aCx0aGlzLm1hdGVyaWFsKTtcblxuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPYmplY3RJbmZvQXJyYXkoKTtcbiAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgfSk7XG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdTJykge1xuICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdEluZm9BcnJheSgpO1xuICAgICAgICB0aGlzLnByaW50U2NlbmVTdGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdSJykge1xuICAgICAgICBjb25zdCBzbmFwc2hvdEpTT04gPSBwcm9tcHQoJ0VudGVyIHRoZSBzbmFwc2hvdCBKU09OOicpO1xuICAgICAgICBpZiAoc25hcHNob3RKU09OKSB7XG4gICAgICAgICAgdGhpcy5yZXN0b3JlU2NlbmVTdGF0ZShzbmFwc2hvdEpTT04pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcbiAgICAvLyBBZGQgYW55IGFuaW1hdGlvbnMgb3IgdXBkYXRlcyBoZXJlXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgYWRkTGlnaHRzKCkge1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuNyk7XG4gICAgdGhpcy5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQxID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDIxOCk7XG4gICAgcG9pbnRMaWdodDEucG9zaXRpb24uc2V0KDEwLCAxMCwgMTApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQxKTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQyID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDUwMCk7XG4gICAgcG9pbnRMaWdodDIucG9zaXRpb24uc2V0KC0xMCwgLTEwLCAtMTApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQyKTtcbiAgfVxuXG4gIGFkZEJhY2tncm91bmRTcGhlcmUodGV4dHVyZVBhdGgpIHtcbiAgICBjb25zdCBzcGhlcmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxMCwgMzIsIDMyKTtcbiAgICBzcGhlcmVHZW9tZXRyeS5zY2FsZSgtMSwgMSwgMSk7XG5cbiAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICBjb25zdCBzcGhlcmVUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoKTtcblxuICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBzcGhlcmVUZXh0dXJlIH0pO1xuXG4gICAgY29uc3Qgc3BoZXJlTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUdlb21ldHJ5LCBzcGhlcmVNYXRlcmlhbCk7XG4gICAgdGhpcy5zY2VuZS5hZGQoc3BoZXJlTWVzaCk7XG4gIH1cblxuICB1cGRhdGVPYmplY3RJbmZvQXJyYXkoKSB7XG4gICAgdGhpcy5vYmplY3RJbmZvQXJyYXkubGVuZ3RoID0gMDtcbiAgICBcbiAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgLy8gQ29sbGVjdCBvYmplY3QgaW5mb3JtYXRpb24gYW5kIGFkZCB0byB0aGlzLm9iamVjdEluZm9BcnJheVxuICAgICAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaW50U2NlbmVTdGF0ZSgpIHtcbiAgICAvLyBDcmVhdGUgYSBzbmFwc2hvdCBvZiB0aGUgc2NlbmUncyBzdGF0ZSBhbmQgcHJpbnQgaXRcbiAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgfVxuXG4gIHJlc3RvcmVTY2VuZVN0YXRlKHNjZW5lU3RhdGVKU09OKSB7XG4gICAgLy8gUmVzdG9yZSB0aGUgc2NlbmUncyBzdGF0ZSBmcm9tIGEgSlNPTiBzdHJpbmdcbiAgICAvLyBTaW1pbGFyIHRvIHdoYXQgeW91IGRpZCBpbiB5b3VyIHByZXZpb3VzIGNvZGVcbiAgfVxuXG4gIC8vIEFkZCBtZXRob2RzIHRvIGFkZCBjdXN0b20gZWxlbWVudHMsIG1hbmFnZSBldmVudHMsIGV0Yy5cbiAgYWRkRWxlbWVudChlbGVtZW50UGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB0ZXh0dXJlUGF0aCA9IG51bGwsIG1hdGVyaWFsID0gbnVsbCwgcG9zaXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfSwgcm90YXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfSB9ID0gb3B0aW9ucztcblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChlbGVtZW50UGF0aCwgKG9iaikgPT4ge1xuICAgICAgb2JqLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG4gICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgY3VzdG9tIG1hdGVyaWFsIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0ZXh0dXJlUGF0aCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21UZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKHRleHR1cmVQYXRoKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGN1c3RvbSB0ZXh0dXJlIHRvIHRoZSBtZXNoXG4gICAgICAgICAgICBjaGlsZC5tYXRlcmlhbC5tYXAgPSBjdXN0b21UZXh0dXJlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG9iai5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgICBvYmoucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xuXG4gICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG4gIFxuICBcbiAvLyBNZXRob2QgdG8gdGFrZSBhIHNuYXBzaG90IG9mIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFuZCByZXR1cm4gaXQgYXMgSlNPTlxuICB0YWtlU25hcHNob3QoKSB7XG4gICAgY29uc3Qgc25hcHNob3QgPSB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgcHJvcGVydGllcyBvZiB0aGUgU2NlbmUgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBub3QgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHRoaXNbcHJvcF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBTYXZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgc25hcHNob3RcbiAgICAgICAgICBzbmFwc2hvdFtwcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRoZSBzbmFwc2hvdCBvYmplY3QgdG8gSlNPTlxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzbmFwc2hvdCwgbnVsbCwgMik7XG4gIH1cblxuXG4gIGxvYWRPYmpNb2RlbChvYmpQYXRoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKG9ialBhdGgsIChvYmopID0+IHtcbiAgICAgIC8vIFByb2Nlc3MgdGhlIGxvYWRlZCAub2JqIGZpbGVcbiAgICAgIC8vIEZvciBleGFtcGxlLCBzZXR0aW5nIHBvc2l0aW9uLCBzY2FsZSwgZXRjLlxuICAgICAgdGhpcy5zY2VuZS5hZGQob2JqKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRPYmpNb2RlbFdpdGhNYXRlcmlhbChvYmpQYXRoLCBtYXRlcmlhbCkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChvYmpQYXRoLCAob2JqKSA9PiB7XG4gICAgICAgIG9iai50cmF2ZXJzZSgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pc01lc2gpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IGNoaWxkLm1hdGVyaWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG5cbi8vIC4uLiByZXN0IG9mIHRoZSBTY2VuZSBjbGFzc1xuXG4gIFxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgLy8gRGlzcG9zZSBvZiBnZW9tZXRyaWVzLCBtYXRlcmlhbHMsIHRleHR1cmVzLCBldGMuXG4gICAgdGhpcy5zY2VuZS50cmF2ZXJzZShvYmplY3QgPT4ge1xuICAgICAgaWYgKCFvYmplY3QuaXNNZXNoKSByZXR1cm47XG5cbiAgICAgIG9iamVjdC5nZW9tZXRyeS5kaXNwb3NlKCk7XG5cbiAgICAgIGlmIChvYmplY3QubWF0ZXJpYWwuaXNNYXRlcmlhbCkge1xuICAgICAgICB0aGlzLmNsZWFuTWF0ZXJpYWwob2JqZWN0Lm1hdGVyaWFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFuIGFycmF5IG9mIG1hdGVyaWFsc1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG9iamVjdC5tYXRlcmlhbCkgY2xlYW5NYXRlcmlhbChtYXRlcmlhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkaXRpb25hbCBjbGVhbnVwIGlmIG5lZWRlZFxuICBcbiAgfVxuXG4gIGNsZWFuTWF0ZXJpYWwobWF0ZXJpYWwpIHtcbiAgICBtYXRlcmlhbC5kaXNwb3NlKCk7XG4gIFxuICAgIC8vIERpc3Bvc2UgdGV4dHVyZXNcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtYXRlcmlhbCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbWF0ZXJpYWxba2V5XTtcbiAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdtaW5GaWx0ZXInIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuXG4iXSwibmFtZXMiOlsiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiT0JKTG9hZGVyIiwiU2NlbmUiLCJpbml0IiwiY29uc29sZSIsImxvZyIsInJlbmRlcmVyIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJjYW52YXMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJnYW1tYU91dHB1dCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImNhbWVyYSIsInoiLCJjb250cm9scyIsInRhcmdldCIsInNldCIsImFkZExpZ2h0cyIsImFkZEJhY2tncm91bmRTcGhlcmUiLCJpbWFnZTM2MFBhdGgiLCJsb2FkT2JqTW9kZWxXaXRoTWF0ZXJpYWwiLCJvYmpQYXRoIiwibWF0ZXJpYWwiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlT2JqZWN0SW5mb0FycmF5IiwicHJpbnRTY2VuZVN0YXRlIiwiZXZlbnQiLCJrZXkiLCJzbmFwc2hvdEpTT04iLCJwcm9tcHQiLCJyZXN0b3JlU2NlbmVTdGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJzY2VuZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsInBvaW50TGlnaHQxIiwiUG9pbnRMaWdodCIsInBvaW50TGlnaHQyIiwidGV4dHVyZVBhdGgiLCJzcGhlcmVHZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5Iiwic2NhbGUiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInNwaGVyZVRleHR1cmUiLCJsb2FkIiwic3BoZXJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInNwaGVyZU1lc2giLCJNZXNoIiwib2JqZWN0SW5mb0FycmF5IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwib2JqZWN0Iiwic2NlbmVTdGF0ZUpTT04iLCJhZGRFbGVtZW50IiwiZWxlbWVudFBhdGgiLCJvcHRpb25zIiwieCIsInkiLCJyb3RhdGlvbiIsImxvYWRlciIsIm9iaiIsInRyYXZlcnNlIiwiY2hpbGQiLCJjdXN0b21UZXh0dXJlIiwidGFrZVNuYXBzaG90Iiwic25hcHNob3QiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZE9iak1vZGVsIiwiaXNNZXNoIiwiZGlzcG9zZSIsImdlb21ldHJ5IiwiaXNNYXRlcmlhbCIsImNsZWFuTWF0ZXJpYWwiLCJPYmplY3QiLCJrZXlzIiwidmFsdWUiLCJjb25zdHJ1Y3RvciIsImJsb29tIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiaW5zdGFuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});