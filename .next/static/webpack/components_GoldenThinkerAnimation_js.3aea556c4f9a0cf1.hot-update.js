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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        console.log(\"Calling INIT\");\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"relative\";\n        this.renderer.domElement.style.margin = \"0\";\n        const canvas = this.renderer.domElement;\n        canvas.style.position = \"absolute\"; // Example to make it absolute positioned\n        canvas.style.left = \"0\";\n        canvas.style.top = \"0\";\n        // Instead of document.body.appendChild(this.renderer.domElement);\n        this.renderer.gammaOutput = false;\n        const container = document.getElementById(\"animation_container\"); // Make sure this is the ID of your container div\n        container.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModelWithMaterial(this.objPath, this.material);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        if (this.bloom) {\n            composer.render();\n        } else {\n            this.renderer.render(this.scene, this.camera);\n        }\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.7);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 218);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 500);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    loadObjModelWithMaterial(objPath, material) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child.isMesh) {\n                    child.material = material || child.material;\n                }\n            });\n            this.scene.add(obj);\n        });\n    }\n    // ... rest of the Scene class\n    dispose() {\n        // Dispose of geometries, materials, textures, etc.\n        this.scene.traverse((object)=>{\n            if (!object.isMesh) return;\n            object.geometry.dispose();\n            if (object.material.isMaterial) {\n                this.cleanMaterial(object.material);\n            } else {\n                // An array of materials\n                for (const material of object.material)cleanMaterial(material);\n            }\n        });\n        if (this.renderer) {\n            this.renderer.dispose();\n        }\n    // Additional cleanup if needed\n    }\n    cleanMaterial(material) {\n        material.dispose();\n        // Dispose textures\n        for (const key of Object.keys(material)){\n            const value = material[key];\n            if (value && typeof value === \"object\" && \"minFilter\" in value) {\n                value.dispose();\n            }\n        }\n    }\n    constructor(image360Path, objPath, material, bloom = true){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.material = material; // Store the material\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        if (!bloom) {\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n                antialias: true\n            });\n            const bloomPass = new UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), bloomStrength, bloomRadius, bloomThreshold);\n            bloomPass.strength = 1.0;\n            bloomPass.radius = 0.1;\n            bloomPass.threshold = 0.9;\n            this.renderPass = new RenderPass(scene, camera);\n            this.composer = new EffectComposer(renderer);\n            composer.addPass(renderPass);\n            composer.addPass(bloomPass);\n        }\n        this.objectInfoArray = [];\n        this.init();\n    }\n}\nScene.instance = null;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEdBQUcsSUFBSXFFLGVBQWU3RztZQUNuQ3dDLFNBQVNzRSxPQUFPLENBQUNIO1lBQ2pCbkUsU0FBU3NFLE9BQU8sQ0FBQ1o7UUFFbkI7UUFDQSxJQUFJLENBQUNwQyxlQUFlLEdBQUcsRUFBRTtRQUN6QixJQUFJLENBQUNqRSxJQUFJO0lBRVg7QUE2TkY7QUE3UE1ELE1BRUdtSCxXQUFZO0FBNlByQiwrREFBZW5ILEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZS5qcz8xZDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyc7XG5pbXBvcnQgeyBPQkpMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXIuanMnO1xuXG5jbGFzcyBTY2VuZSB7XG5cbiAgc3RhdGljIGluc3RhbmNlICA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoaW1hZ2UzNjBQYXRoLCBvYmpQYXRoLCBtYXRlcmlhbCwgYmxvb20gPSB0cnVlKSB7XG4gICAgXG4gICAgdGhpcy5pbWFnZTM2MFBhdGggPSBpbWFnZTM2MFBhdGg7XG4gICAgdGhpcy5vYmpQYXRoID0gb2JqUGF0aDtcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7IC8vIFN0b3JlIHRoZSBtYXRlcmlhbFxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKCFibG9vbSkge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xuICAgICAgY29uc3QgYmxvb21QYXNzID0gbmV3IFVucmVhbEJsb29tUGFzcyhuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSwgYmxvb21TdHJlbmd0aCwgYmxvb21SYWRpdXMsIGJsb29tVGhyZXNob2xkKTtcbiAgICAgIGJsb29tUGFzcy5zdHJlbmd0aCA9IDEuMDtcbiAgICAgIGJsb29tUGFzcy5yYWRpdXMgPSAwLjE7XG4gICAgICBibG9vbVBhc3MudGhyZXNob2xkID0gMC45O1xuICAgICAgdGhpcy5yZW5kZXJQYXNzID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSk7XG4gICAgICB0aGlzLmNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyKTtcbiAgICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyUGFzcyk7XG4gICAgICBjb21wb3Nlci5hZGRQYXNzKGJsb29tUGFzcyk7XG5cbiAgICB9XG4gICAgdGhpcy5vYmplY3RJbmZvQXJyYXkgPSBbXTtcbiAgICB0aGlzLmluaXQoKTtcbiBcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIElOSVRcIik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ3JlbGF0aXZlJztcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnOyAvLyBFeGFtcGxlIHRvIG1ha2UgaXQgYWJzb2x1dGUgcG9zaXRpb25lZFxuICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG5cbiAgICAvLyBJbnN0ZWFkIG9mIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuXG4gICAgdGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IGZhbHNlO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25fY29udGFpbmVyJyk7IC8vIE1ha2Ugc3VyZSB0aGlzIGlzIHRoZSBJRCBvZiB5b3VyIGNvbnRhaW5lciBkaXZcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuICAgIHRoaXMuY29udHJvbHMudGFyZ2V0LnNldCgwLCAwLCAwKTtcblxuICAgIHRoaXMuYWRkTGlnaHRzKCk7XG4gICAgdGhpcy5hZGRCYWNrZ3JvdW5kU3BoZXJlKHRoaXMuaW1hZ2UzNjBQYXRoKTsgLy8gVXNlIHRoZSBwcm92aWRlZCAzNjAgaW1hZ2UgcGF0aFxuXG4gICAgLy8gTG9hZCB0aGUgLm9iaiBmaWxlXG4gICAgdGhpcy5sb2FkT2JqTW9kZWxXaXRoTWF0ZXJpYWwodGhpcy5vYmpQYXRoLHRoaXMubWF0ZXJpYWwpO1xuXG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU9iamVjdEluZm9BcnJheSgpO1xuICAgICAgdGhpcy5wcmludFNjZW5lU3RhdGUoKTtcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1MnKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT2JqZWN0SW5mb0FycmF5KCk7XG4gICAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1InKSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90SlNPTiA9IHByb21wdCgnRW50ZXIgdGhlIHNuYXBzaG90IEpTT046Jyk7XG4gICAgICAgIGlmIChzbmFwc2hvdEpTT04pIHtcbiAgICAgICAgICB0aGlzLnJlc3RvcmVTY2VuZVN0YXRlKHNuYXBzaG90SlNPTik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpO1xuICAgIC8vIEFkZCBhbnkgYW5pbWF0aW9ucyBvciB1cGRhdGVzIGhlcmVcbiAgICBpZiAodGhpcy5ibG9vbSl7XG4gICAgICBjb21wb3Nlci5yZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExpZ2h0cygpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjcpO1xuICAgIHRoaXMuc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICBjb25zdCBwb2ludExpZ2h0MSA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAyMTgpO1xuICAgIHBvaW50TGlnaHQxLnBvc2l0aW9uLnNldCgxMCwgMTAsIDEwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0MSk7XG5cbiAgICBjb25zdCBwb2ludExpZ2h0MiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCA1MDApO1xuICAgIHBvaW50TGlnaHQyLnBvc2l0aW9uLnNldCgtMTAsIC0xMCwgLTEwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0Mik7XG4gIH1cblxuICBhZGRCYWNrZ3JvdW5kU3BoZXJlKHRleHR1cmVQYXRoKSB7XG4gICAgY29uc3Qgc3BoZXJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMTAsIDMyLCAzMik7XG4gICAgc3BoZXJlR2VvbWV0cnkuc2NhbGUoLTEsIDEsIDEpO1xuXG4gICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgY29uc3Qgc3BoZXJlVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCk7XG5cbiAgICBjb25zdCBzcGhlcmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc3BoZXJlVGV4dHVyZSB9KTtcblxuICAgIGNvbnN0IHNwaGVyZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChzcGhlcmVHZW9tZXRyeSwgc3BoZXJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHNwaGVyZU1lc2gpO1xuICB9XG5cbiAgdXBkYXRlT2JqZWN0SW5mb0FycmF5KCkge1xuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5Lmxlbmd0aCA9IDA7XG4gICAgXG4gICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG4gICAgICAgIC8vIENvbGxlY3Qgb2JqZWN0IGluZm9ybWF0aW9uIGFuZCBhZGQgdG8gdGhpcy5vYmplY3RJbmZvQXJyYXlcbiAgICAgICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcmludFNjZW5lU3RhdGUoKSB7XG4gICAgLy8gQ3JlYXRlIGEgc25hcHNob3Qgb2YgdGhlIHNjZW5lJ3Mgc3RhdGUgYW5kIHByaW50IGl0XG4gICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gIH1cblxuICByZXN0b3JlU2NlbmVTdGF0ZShzY2VuZVN0YXRlSlNPTikge1xuICAgIC8vIFJlc3RvcmUgdGhlIHNjZW5lJ3Mgc3RhdGUgZnJvbSBhIEpTT04gc3RyaW5nXG4gICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gIH1cblxuICAvLyBBZGQgbWV0aG9kcyB0byBhZGQgY3VzdG9tIGVsZW1lbnRzLCBtYW5hZ2UgZXZlbnRzLCBldGMuXG4gIGFkZEVsZW1lbnQoZWxlbWVudFBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgdGV4dHVyZVBhdGggPSBudWxsLCBtYXRlcmlhbCA9IG51bGwsIHBvc2l0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH0sIHJvdGF0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH0gfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQoZWxlbWVudFBhdGgsIChvYmopID0+IHtcbiAgICAgIG9iai50cmF2ZXJzZSgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGN1c3RvbSBtYXRlcmlhbCBpZiBwcm92aWRlZFxuICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGV4dHVyZVBhdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjdXN0b20gdGV4dHVyZSB0byB0aGUgbWVzaFxuICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gY3VzdG9tVGV4dHVyZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBvYmoucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgICAgb2JqLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcblxuICAgICAgdGhpcy5zY2VuZS5hZGQob2JqKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgXG4gLy8gTWV0aG9kIHRvIHRha2UgYSBzbmFwc2hvdCBvZiB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhbmQgcmV0dXJuIGl0IGFzIEpTT05cbiAgdGFrZVNuYXBzaG90KCkge1xuICAgIGNvbnN0IHNuYXBzaG90ID0ge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHByb3BlcnRpZXMgb2YgdGhlIFNjZW5lIG9iamVjdFxuICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJvcGVydHkgaXMgbm90IGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3Byb3BdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gU2F2ZSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gdGhlIHNuYXBzaG90XG4gICAgICAgICAgc25hcHNob3RbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0aGUgc25hcHNob3Qgb2JqZWN0IHRvIEpTT05cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc25hcHNob3QsIG51bGwsIDIpO1xuICB9XG5cblxuICBsb2FkT2JqTW9kZWwob2JqUGF0aCkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChvYmpQYXRoLCAob2JqKSA9PiB7XG4gICAgICAvLyBQcm9jZXNzIHRoZSBsb2FkZWQgLm9iaiBmaWxlXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgc2V0dGluZyBwb3NpdGlvbiwgc2NhbGUsIGV0Yy5cbiAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkT2JqTW9kZWxXaXRoTWF0ZXJpYWwob2JqUGF0aCwgbWF0ZXJpYWwpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQob2JqUGF0aCwgKG9iaikgPT4ge1xuICAgICAgICBvYmoudHJhdmVyc2UoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuaXNNZXNoKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwgPSBtYXRlcmlhbCB8fCBjaGlsZC5tYXRlcmlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQob2JqKTtcbiAgICB9KTtcbiAgfVxuXG4vLyAuLi4gcmVzdCBvZiB0aGUgU2NlbmUgY2xhc3NcblxuICBcblxuICBkaXNwb3NlKCkge1xuICAgIC8vIERpc3Bvc2Ugb2YgZ2VvbWV0cmllcywgbWF0ZXJpYWxzLCB0ZXh0dXJlcywgZXRjLlxuICAgIHRoaXMuc2NlbmUudHJhdmVyc2Uob2JqZWN0ID0+IHtcbiAgICAgIGlmICghb2JqZWN0LmlzTWVzaCkgcmV0dXJuO1xuXG4gICAgICBvYmplY3QuZ2VvbWV0cnkuZGlzcG9zZSgpO1xuXG4gICAgICBpZiAob2JqZWN0Lm1hdGVyaWFsLmlzTWF0ZXJpYWwpIHtcbiAgICAgICAgdGhpcy5jbGVhbk1hdGVyaWFsKG9iamVjdC5tYXRlcmlhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBbiBhcnJheSBvZiBtYXRlcmlhbHNcbiAgICAgICAgZm9yIChjb25zdCBtYXRlcmlhbCBvZiBvYmplY3QubWF0ZXJpYWwpIGNsZWFuTWF0ZXJpYWwobWF0ZXJpYWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZGl0aW9uYWwgY2xlYW51cCBpZiBuZWVkZWRcbiAgXG4gIH1cblxuICBjbGVhbk1hdGVyaWFsKG1hdGVyaWFsKSB7XG4gICAgbWF0ZXJpYWwuZGlzcG9zZSgpO1xuICBcbiAgICAvLyBEaXNwb3NlIHRleHR1cmVzXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobWF0ZXJpYWwpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG1hdGVyaWFsW2tleV07XG4gICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbWluRmlsdGVyJyBpbiB2YWx1ZSkge1xuICAgICAgICB2YWx1ZS5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcblxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIk9CSkxvYWRlciIsIlNjZW5lIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJlciIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkb21FbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwiY2FudmFzIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiZ2FtbWFPdXRwdXQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjYW1lcmEiLCJ6IiwiY29udHJvbHMiLCJ0YXJnZXQiLCJzZXQiLCJhZGRMaWdodHMiLCJhZGRCYWNrZ3JvdW5kU3BoZXJlIiwiaW1hZ2UzNjBQYXRoIiwibG9hZE9iak1vZGVsV2l0aE1hdGVyaWFsIiwib2JqUGF0aCIsIm1hdGVyaWFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZU9iamVjdEluZm9BcnJheSIsInByaW50U2NlbmVTdGF0ZSIsImV2ZW50Iiwia2V5Iiwic25hcHNob3RKU09OIiwicHJvbXB0IiwicmVzdG9yZVNjZW5lU3RhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmxvb20iLCJjb21wb3NlciIsInJlbmRlciIsInNjZW5lIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwicG9pbnRMaWdodDEiLCJQb2ludExpZ2h0IiwicG9pbnRMaWdodDIiLCJ0ZXh0dXJlUGF0aCIsInNwaGVyZUdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJzY2FsZSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic3BoZXJlVGV4dHVyZSIsImxvYWQiLCJzcGhlcmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwic3BoZXJlTWVzaCIsIk1lc2giLCJvYmplY3RJbmZvQXJyYXkiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImZvckVhY2giLCJvYmplY3QiLCJzY2VuZVN0YXRlSlNPTiIsImFkZEVsZW1lbnQiLCJlbGVtZW50UGF0aCIsIm9wdGlvbnMiLCJ4IiwieSIsInJvdGF0aW9uIiwibG9hZGVyIiwib2JqIiwidHJhdmVyc2UiLCJjaGlsZCIsImN1c3RvbVRleHR1cmUiLCJ0YWtlU25hcHNob3QiLCJzbmFwc2hvdCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkT2JqTW9kZWwiLCJpc01lc2giLCJkaXNwb3NlIiwiZ2VvbWV0cnkiLCJpc01hdGVyaWFsIiwiY2xlYW5NYXRlcmlhbCIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYmxvb21QYXNzIiwiVW5yZWFsQmxvb21QYXNzIiwiVmVjdG9yMiIsImJsb29tU3RyZW5ndGgiLCJibG9vbVJhZGl1cyIsImJsb29tVGhyZXNob2xkIiwic3RyZW5ndGgiLCJyYWRpdXMiLCJ0aHJlc2hvbGQiLCJyZW5kZXJQYXNzIiwiUmVuZGVyUGFzcyIsIkVmZmVjdENvbXBvc2VyIiwiYWRkUGFzcyIsImluc3RhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});