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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"block\";\n        this.renderer.domElement.style.margin = \"0\";\n        const canvas = this.renderer.domElement;\n        canvas.style.position = \"relative\"; // Example to make it absolute positioned\n        canvas.style.left = \"0\";\n        canvas.style.top = \"0\";\n        // Instead of document.body.appendChild(this.renderer.domElement);\n        window.addEventListener(\"resize\", onWindowResize, false);\n        function onWindowResize() {\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        }\n        this.renderer.gammaOutput = false;\n        document.body.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModel(this.objPath);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.2);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    constructor(image360Path, objPath){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        this.objectInfoArray = [];\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYUMsT0FBTyxFQUFFO1FBQ3BCLE1BQU00QyxTQUFTLElBQUk3RSw4RUFBU0E7UUFDNUI2RSxPQUFPbkIsSUFBSSxDQUFDekIsU0FBUyxDQUFDNkM7WUFDcEIsK0JBQStCO1lBQy9CLDZDQUE2QztZQUM3QyxJQUFJLENBQUNsQyxLQUFLLENBQUNHLEdBQUcsQ0FBQytCO1FBQ2pCO0lBQ0Y7SUFsTEFVLFlBQVl6RCxZQUFZLEVBQUVFLE9BQU8sQ0FBRTtRQUNqQyxJQUFJLENBQUNGLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDRSxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDVyxLQUFLLEdBQUcsSUFBSTlDLHdDQUFXO1FBQzVCLElBQUksSUFBa0IsRUFBYTtZQUNqQyxJQUFJLENBQUNvQixNQUFNLEdBQUcsSUFBSXBCLG9EQUF1QixDQUFDLElBQUlPLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVyxFQUFFLEtBQUs7WUFDM0YsSUFBSSxDQUFDSixRQUFRLEdBQUcsSUFBSUwsZ0RBQW1CO1lBQ3ZDLElBQUksQ0FBQzRCLFFBQVEsR0FBRyxJQUFJM0IsdUZBQWFBLENBQUMsSUFBSSxDQUFDbUIsTUFBTSxFQUFFLElBQUksQ0FBQ2YsUUFBUSxDQUFDSyxVQUFVO1FBQ3pFO1FBQ0EsSUFBSSxDQUFDd0QsZUFBZSxHQUFHLEVBQUU7SUFDM0I7QUEyS0Y7QUFFQSwrREFBZS9ELEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZS5qcz8xZDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyc7XG5pbXBvcnQgeyBPQkpMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXIuanMnO1xuXG5jbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGltYWdlMzYwUGF0aCwgb2JqUGF0aCkge1xuICAgIHRoaXMuaW1hZ2UzNjBQYXRoID0gaW1hZ2UzNjBQYXRoO1xuICAgIHRoaXMub2JqUGF0aCA9IG9ialBhdGg7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5ID0gW107XG4gIH1cbiAgXG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xuICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7IC8vIEV4YW1wbGUgdG8gbWFrZSBpdCBhYnNvbHV0ZSBwb3NpdGlvbmVkXG4gICAgY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcblxuICAgIC8vIEluc3RlYWQgb2YgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG5cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuXG5cbiAgICB0aGlzLnJlbmRlcmVyLmdhbW1hT3V0cHV0ID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDU7XG4gICAgdGhpcy5jb250cm9scy50YXJnZXQuc2V0KDAsIDAsIDApO1xuXG4gICAgdGhpcy5hZGRMaWdodHMoKTtcbiAgICB0aGlzLmFkZEJhY2tncm91bmRTcGhlcmUodGhpcy5pbWFnZTM2MFBhdGgpOyAvLyBVc2UgdGhlIHByb3ZpZGVkIDM2MCBpbWFnZSBwYXRoXG5cbiAgICAvLyBMb2FkIHRoZSAub2JqIGZpbGVcbiAgICB0aGlzLmxvYWRPYmpNb2RlbCh0aGlzLm9ialBhdGgpO1xuXG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU9iamVjdEluZm9BcnJheSgpO1xuICAgICAgdGhpcy5wcmludFNjZW5lU3RhdGUoKTtcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1MnKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT2JqZWN0SW5mb0FycmF5KCk7XG4gICAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1InKSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90SlNPTiA9IHByb21wdCgnRW50ZXIgdGhlIHNuYXBzaG90IEpTT046Jyk7XG4gICAgICAgIGlmIChzbmFwc2hvdEpTT04pIHtcbiAgICAgICAgICB0aGlzLnJlc3RvcmVTY2VuZVN0YXRlKHNuYXBzaG90SlNPTik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpO1xuICAgIC8vIEFkZCBhbnkgYW5pbWF0aW9ucyBvciB1cGRhdGVzIGhlcmVcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICBhZGRMaWdodHMoKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC4yKTtcbiAgICB0aGlzLnNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodDEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgcG9pbnRMaWdodDEucG9zaXRpb24uc2V0KDEwLCAxMCwgMTApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHBvaW50TGlnaHQxKTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQyID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIHBvaW50TGlnaHQyLnBvc2l0aW9uLnNldCgtMTAsIC0xMCwgLTEwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0Mik7XG4gIH1cblxuICBhZGRCYWNrZ3JvdW5kU3BoZXJlKHRleHR1cmVQYXRoKSB7XG4gICAgY29uc3Qgc3BoZXJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMTAsIDMyLCAzMik7XG4gICAgc3BoZXJlR2VvbWV0cnkuc2NhbGUoLTEsIDEsIDEpO1xuXG4gICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG4gICAgY29uc3Qgc3BoZXJlVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCk7XG5cbiAgICBjb25zdCBzcGhlcmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc3BoZXJlVGV4dHVyZSB9KTtcblxuICAgIGNvbnN0IHNwaGVyZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChzcGhlcmVHZW9tZXRyeSwgc3BoZXJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHNwaGVyZU1lc2gpO1xuICB9XG5cbiAgdXBkYXRlT2JqZWN0SW5mb0FycmF5KCkge1xuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5Lmxlbmd0aCA9IDA7XG4gICAgXG4gICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG4gICAgICAgIC8vIENvbGxlY3Qgb2JqZWN0IGluZm9ybWF0aW9uIGFuZCBhZGQgdG8gdGhpcy5vYmplY3RJbmZvQXJyYXlcbiAgICAgICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcmludFNjZW5lU3RhdGUoKSB7XG4gICAgLy8gQ3JlYXRlIGEgc25hcHNob3Qgb2YgdGhlIHNjZW5lJ3Mgc3RhdGUgYW5kIHByaW50IGl0XG4gICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gIH1cblxuICByZXN0b3JlU2NlbmVTdGF0ZShzY2VuZVN0YXRlSlNPTikge1xuICAgIC8vIFJlc3RvcmUgdGhlIHNjZW5lJ3Mgc3RhdGUgZnJvbSBhIEpTT04gc3RyaW5nXG4gICAgLy8gU2ltaWxhciB0byB3aGF0IHlvdSBkaWQgaW4geW91ciBwcmV2aW91cyBjb2RlXG4gIH1cblxuICAvLyBBZGQgbWV0aG9kcyB0byBhZGQgY3VzdG9tIGVsZW1lbnRzLCBtYW5hZ2UgZXZlbnRzLCBldGMuXG4gIGFkZEVsZW1lbnQoZWxlbWVudFBhdGgsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgdGV4dHVyZVBhdGggPSBudWxsLCBtYXRlcmlhbCA9IG51bGwsIHBvc2l0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH0sIHJvdGF0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH0gfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQoZWxlbWVudFBhdGgsIChvYmopID0+IHtcbiAgICAgIG9iai50cmF2ZXJzZSgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGN1c3RvbSBtYXRlcmlhbCBpZiBwcm92aWRlZFxuICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGV4dHVyZVBhdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCh0ZXh0dXJlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjdXN0b20gdGV4dHVyZSB0byB0aGUgbWVzaFxuICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwubWFwID0gY3VzdG9tVGV4dHVyZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBvYmoucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgICAgb2JqLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcblxuICAgICAgdGhpcy5zY2VuZS5hZGQob2JqKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgXG4gLy8gTWV0aG9kIHRvIHRha2UgYSBzbmFwc2hvdCBvZiB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhbmQgcmV0dXJuIGl0IGFzIEpTT05cbiAgdGFrZVNuYXBzaG90KCkge1xuICAgIGNvbnN0IHNuYXBzaG90ID0ge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHByb3BlcnRpZXMgb2YgdGhlIFNjZW5lIG9iamVjdFxuICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJvcGVydHkgaXMgbm90IGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3Byb3BdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gU2F2ZSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gdGhlIHNuYXBzaG90XG4gICAgICAgICAgc25hcHNob3RbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0aGUgc25hcHNob3Qgb2JqZWN0IHRvIEpTT05cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc25hcHNob3QsIG51bGwsIDIpO1xuICB9XG5cblxuICBsb2FkT2JqTW9kZWwob2JqUGF0aCkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICBsb2FkZXIubG9hZChvYmpQYXRoLCAob2JqKSA9PiB7XG4gICAgICAvLyBQcm9jZXNzIHRoZSBsb2FkZWQgLm9iaiBmaWxlXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgc2V0dGluZyBwb3NpdGlvbiwgc2NhbGUsIGV0Yy5cbiAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcblxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiT3JiaXRDb250cm9scyIsIk9CSkxvYWRlciIsIlNjZW5lIiwiaW5pdCIsInJlbmRlcmVyIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJjYW52YXMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwib25XaW5kb3dSZXNpemUiLCJjYW1lcmEiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZ2FtbWFPdXRwdXQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInoiLCJjb250cm9scyIsInRhcmdldCIsInNldCIsImFkZExpZ2h0cyIsImFkZEJhY2tncm91bmRTcGhlcmUiLCJpbWFnZTM2MFBhdGgiLCJsb2FkT2JqTW9kZWwiLCJvYmpQYXRoIiwidXBkYXRlT2JqZWN0SW5mb0FycmF5IiwicHJpbnRTY2VuZVN0YXRlIiwiZXZlbnQiLCJrZXkiLCJzbmFwc2hvdEpTT04iLCJwcm9tcHQiLCJyZXN0b3JlU2NlbmVTdGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJzY2VuZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsInBvaW50TGlnaHQxIiwiUG9pbnRMaWdodCIsInBvaW50TGlnaHQyIiwidGV4dHVyZVBhdGgiLCJzcGhlcmVHZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5Iiwic2NhbGUiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInNwaGVyZVRleHR1cmUiLCJsb2FkIiwic3BoZXJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInNwaGVyZU1lc2giLCJNZXNoIiwib2JqZWN0SW5mb0FycmF5IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwib2JqZWN0Iiwic2NlbmVTdGF0ZUpTT04iLCJhZGRFbGVtZW50IiwiZWxlbWVudFBhdGgiLCJvcHRpb25zIiwibWF0ZXJpYWwiLCJ4IiwieSIsInJvdGF0aW9uIiwibG9hZGVyIiwib2JqIiwidHJhdmVyc2UiLCJjaGlsZCIsImN1c3RvbVRleHR1cmUiLCJ0YWtlU25hcHNob3QiLCJzbmFwc2hvdCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zdHJ1Y3RvciIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiV2ViR0xSZW5kZXJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});