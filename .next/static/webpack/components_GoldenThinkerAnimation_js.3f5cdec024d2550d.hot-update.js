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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        console.log(\"Calling INIT\");\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"relative\";\n        this.renderer.domElement.style.margin = \"0\";\n        const canvas = this.renderer.domElement;\n        canvas.style.position = \"absolute\"; // Example to make it absolute positioned\n        canvas.style.left = \"0\";\n        canvas.style.top = \"0\";\n        // Instead of document.body.appendChild(this.renderer.domElement);\n        this.renderer.gammaOutput = false;\n        const container = document.getElementById(\"animation_container\"); // Make sure this is the ID of your container div\n        container.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModelWithMaterial(this.objPath, this.material);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.7);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 218);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 500);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    loadObjModelWithMaterial(objPath, material) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child.isMesh) {\n                    child.material = material || child.material;\n                }\n            });\n            this.scene.add(obj);\n        });\n    }\n    // ... rest of the Scene class\n    dispose() {\n        // Dispose of geometries, materials, textures, etc.\n        this.scene.traverse((object)=>{\n            if (!object.isMesh) return;\n            object.geometry.dispose();\n            if (object.material.isMaterial) {\n                this.cleanMaterial(object.material);\n            } else {\n                // An array of materials\n                for (const material of object.material)cleanMaterial(material);\n            }\n        });\n        if (this.renderer) {\n            this.renderer.dispose();\n        }\n    // Additional cleanup if needed\n    }\n    cleanMaterial(material) {\n        material.dispose();\n        // Dispose textures\n        for (const key of Object.keys(material)){\n            const value = material[key];\n            if (value && typeof value === \"object\" && \"minFilter\" in value) {\n                value.dispose();\n            }\n        }\n    }\n    constructor(image360Path, objPath, material, bloom = true){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.material = material; // Store the material\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        this.objectInfoArray = [];\n        this.init();\n    }\n}\nScene.instance = null;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsT0FBT0EsVUFBVSxZQUFZLGVBQWVBLE9BQU87Z0JBQzlEQSxNQUFNTixPQUFPO1lBQ2Y7UUFDRjtJQUNGO0lBcE9BTyxZQUFZbkUsWUFBWSxFQUFFRSxPQUFPLEVBQUVDLFFBQVEsRUFBRWlFLFFBQVEsSUFBSSxDQUFFO1FBRXpELElBQUksQ0FBQ3BFLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDRSxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFVBQVUscUJBQXFCO1FBQy9DLElBQUksQ0FBQ1ksS0FBSyxHQUFHLElBQUkvQyx3Q0FBVztRQUU1QixJQUFJLElBQWtCLEVBQWE7WUFDL0IsSUFBSSxDQUFDeUIsTUFBTSxHQUFHLElBQUl6QixvREFBdUIsQ0FBQyxJQUFJUyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1lBQzNGLElBQUksQ0FBQ0osUUFBUSxHQUFHLElBQUlQLGdEQUFtQjtZQUN2QyxJQUFJLENBQUMyQixRQUFRLEdBQUcsSUFBSTFCLHVGQUFhQSxDQUFDLElBQUksQ0FBQ3dCLE1BQU0sRUFBRSxJQUFJLENBQUNsQixRQUFRLENBQUNLLFVBQVU7UUFDM0U7UUFFQSxJQUFJLENBQUN1RCxlQUFlLEdBQUcsRUFBRTtRQUN6QixJQUFJLENBQUMvRCxJQUFJO0lBRVg7QUF5TkY7QUE3T01ELE1BRUdvRyxXQUFZO0FBNk9yQiwrREFBZXBHLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZS5qcz8xZDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyc7XG5pbXBvcnQgeyBPQkpMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXIuanMnO1xuXG5jbGFzcyBTY2VuZSB7XG5cbiAgc3RhdGljIGluc3RhbmNlICA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoaW1hZ2UzNjBQYXRoLCBvYmpQYXRoLCBtYXRlcmlhbCwgYmxvb20gPSB0cnVlKSB7XG4gICAgXG4gICAgdGhpcy5pbWFnZTM2MFBhdGggPSBpbWFnZTM2MFBhdGg7XG4gICAgdGhpcy5vYmpQYXRoID0gb2JqUGF0aDtcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7IC8vIFN0b3JlIHRoZSBtYXRlcmlhbFxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5vYmplY3RJbmZvQXJyYXkgPSBbXTtcbiAgICB0aGlzLmluaXQoKTtcbiBcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIElOSVRcIik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ3JlbGF0aXZlJztcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnOyAvLyBFeGFtcGxlIHRvIG1ha2UgaXQgYWJzb2x1dGUgcG9zaXRpb25lZFxuICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG5cbiAgICAvLyBJbnN0ZWFkIG9mIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuXG4gICAgdGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IGZhbHNlO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25fY29udGFpbmVyJyk7IC8vIE1ha2Ugc3VyZSB0aGlzIGlzIHRoZSBJRCBvZiB5b3VyIGNvbnRhaW5lciBkaXZcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuICAgIHRoaXMuY29udHJvbHMudGFyZ2V0LnNldCgwLCAwLCAwKTtcblxuICAgIHRoaXMuYWRkTGlnaHRzKCk7XG4gICAgdGhpcy5hZGRCYWNrZ3JvdW5kU3BoZXJlKHRoaXMuaW1hZ2UzNjBQYXRoKTsgLy8gVXNlIHRoZSBwcm92aWRlZCAzNjAgaW1hZ2UgcGF0aFxuXG4gICAgLy8gTG9hZCB0aGUgLm9iaiBmaWxlXG4gICAgdGhpcy5sb2FkT2JqTW9kZWxXaXRoTWF0ZXJpYWwodGhpcy5vYmpQYXRoLHRoaXMubWF0ZXJpYWwpO1xuXG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU9iamVjdEluZm9BcnJheSgpO1xuICAgICAgdGhpcy5wcmludFNjZW5lU3RhdGUoKTtcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1MnKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT2JqZWN0SW5mb0FycmF5KCk7XG4gICAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1InKSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90SlNPTiA9IHByb21wdCgnRW50ZXIgdGhlIHNuYXBzaG90IEpTT046Jyk7XG4gICAgICAgIGlmIChzbmFwc2hvdEpTT04pIHtcbiAgICAgICAgICB0aGlzLnJlc3RvcmVTY2VuZVN0YXRlKHNuYXBzaG90SlNPTik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpO1xuICAgIC8vIEFkZCBhbnkgYW5pbWF0aW9ucyBvciB1cGRhdGVzIGhlcmVcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICBhZGRMaWdodHMoKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC43KTtcbiAgICB0aGlzLnNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodDEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMjE4KTtcbiAgICBwb2ludExpZ2h0MS5wb3NpdGlvbi5zZXQoMTAsIDEwLCAxMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDEpO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodDIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgNTAwKTtcbiAgICBwb2ludExpZ2h0Mi5wb3NpdGlvbi5zZXQoLTEwLCAtMTAsIC0xMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDIpO1xuICB9XG5cbiAgYWRkQmFja2dyb3VuZFNwaGVyZSh0ZXh0dXJlUGF0aCkge1xuICAgIGNvbnN0IHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEwLCAzMiwgMzIpO1xuICAgIHNwaGVyZUdlb21ldHJ5LnNjYWxlKC0xLCAxLCAxKTtcblxuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIGNvbnN0IHNwaGVyZVRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgpO1xuXG4gICAgY29uc3Qgc3BoZXJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHNwaGVyZVRleHR1cmUgfSk7XG5cbiAgICBjb25zdCBzcGhlcmVNZXNoID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlR2VvbWV0cnksIHNwaGVyZU1hdGVyaWFsKTtcbiAgICB0aGlzLnNjZW5lLmFkZChzcGhlcmVNZXNoKTtcbiAgfVxuXG4gIHVwZGF0ZU9iamVjdEluZm9BcnJheSgpIHtcbiAgICB0aGlzLm9iamVjdEluZm9BcnJheS5sZW5ndGggPSAwO1xuICAgIFxuICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAvLyBDb2xsZWN0IG9iamVjdCBpbmZvcm1hdGlvbiBhbmQgYWRkIHRvIHRoaXMub2JqZWN0SW5mb0FycmF5XG4gICAgICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpbnRTY2VuZVN0YXRlKCkge1xuICAgIC8vIENyZWF0ZSBhIHNuYXBzaG90IG9mIHRoZSBzY2VuZSdzIHN0YXRlIGFuZCBwcmludCBpdFxuICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICB9XG5cbiAgcmVzdG9yZVNjZW5lU3RhdGUoc2NlbmVTdGF0ZUpTT04pIHtcbiAgICAvLyBSZXN0b3JlIHRoZSBzY2VuZSdzIHN0YXRlIGZyb20gYSBKU09OIHN0cmluZ1xuICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICB9XG5cbiAgLy8gQWRkIG1ldGhvZHMgdG8gYWRkIGN1c3RvbSBlbGVtZW50cywgbWFuYWdlIGV2ZW50cywgZXRjLlxuICBhZGRFbGVtZW50KGVsZW1lbnRQYXRoLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHRleHR1cmVQYXRoID0gbnVsbCwgbWF0ZXJpYWwgPSBudWxsLCBwb3NpdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9LCByb3RhdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9IH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKGVsZW1lbnRQYXRoLCAob2JqKSA9PiB7XG4gICAgICBvYmoudHJhdmVyc2UoKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjdXN0b20gbWF0ZXJpYWwgaWYgcHJvdmlkZWRcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRleHR1cmVQYXRoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbVRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgY3VzdG9tIHRleHR1cmUgdG8gdGhlIG1lc2hcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsLm1hcCA9IGN1c3RvbVRleHR1cmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2JqLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICAgIG9iai5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XG5cbiAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIFxuIC8vIE1ldGhvZCB0byB0YWtlIGEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYW5kIHJldHVybiBpdCBhcyBKU09OXG4gIHRha2VTbmFwc2hvdCgpIHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBTY2VuZSBvYmplY3RcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb3BlcnR5IGlzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1twcm9wXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIFNhdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBzbmFwc2hvdFxuICAgICAgICAgIHNuYXBzaG90W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIHNuYXBzaG90IG9iamVjdCB0byBKU09OXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LCBudWxsLCAyKTtcbiAgfVxuXG5cbiAgbG9hZE9iak1vZGVsKG9ialBhdGgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQob2JqUGF0aCwgKG9iaikgPT4ge1xuICAgICAgLy8gUHJvY2VzcyB0aGUgbG9hZGVkIC5vYmogZmlsZVxuICAgICAgLy8gRm9yIGV4YW1wbGUsIHNldHRpbmcgcG9zaXRpb24sIHNjYWxlLCBldGMuXG4gICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZE9iak1vZGVsV2l0aE1hdGVyaWFsKG9ialBhdGgsIG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKG9ialBhdGgsIChvYmopID0+IHtcbiAgICAgICAgb2JqLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gbWF0ZXJpYWwgfHwgY2hpbGQubWF0ZXJpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cblxuLy8gLi4uIHJlc3Qgb2YgdGhlIFNjZW5lIGNsYXNzXG5cbiAgXG5cbiAgZGlzcG9zZSgpIHtcbiAgICAvLyBEaXNwb3NlIG9mIGdlb21ldHJpZXMsIG1hdGVyaWFscywgdGV4dHVyZXMsIGV0Yy5cbiAgICB0aGlzLnNjZW5lLnRyYXZlcnNlKG9iamVjdCA9PiB7XG4gICAgICBpZiAoIW9iamVjdC5pc01lc2gpIHJldHVybjtcblxuICAgICAgb2JqZWN0Lmdlb21ldHJ5LmRpc3Bvc2UoKTtcblxuICAgICAgaWYgKG9iamVjdC5tYXRlcmlhbC5pc01hdGVyaWFsKSB7XG4gICAgICAgIHRoaXMuY2xlYW5NYXRlcmlhbChvYmplY3QubWF0ZXJpYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQW4gYXJyYXkgb2YgbWF0ZXJpYWxzXG4gICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2Ygb2JqZWN0Lm1hdGVyaWFsKSBjbGVhbk1hdGVyaWFsKG1hdGVyaWFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBBZGRpdGlvbmFsIGNsZWFudXAgaWYgbmVlZGVkXG4gIFxuICB9XG5cbiAgY2xlYW5NYXRlcmlhbChtYXRlcmlhbCkge1xuICAgIG1hdGVyaWFsLmRpc3Bvc2UoKTtcbiAgXG4gICAgLy8gRGlzcG9zZSB0ZXh0dXJlc1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1hdGVyaWFsKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBtYXRlcmlhbFtrZXldO1xuICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ21pbkZpbHRlcicgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG5cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJPQkpMb2FkZXIiLCJTY2VuZSIsImluaXQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZXIiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZG9tRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbiIsImNhbnZhcyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImdhbW1hT3V0cHV0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY2FtZXJhIiwieiIsImNvbnRyb2xzIiwidGFyZ2V0Iiwic2V0IiwiYWRkTGlnaHRzIiwiYWRkQmFja2dyb3VuZFNwaGVyZSIsImltYWdlMzYwUGF0aCIsImxvYWRPYmpNb2RlbFdpdGhNYXRlcmlhbCIsIm9ialBhdGgiLCJtYXRlcmlhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVPYmplY3RJbmZvQXJyYXkiLCJwcmludFNjZW5lU3RhdGUiLCJldmVudCIsImtleSIsInNuYXBzaG90SlNPTiIsInByb21wdCIsInJlc3RvcmVTY2VuZVN0YXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInNjZW5lIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwicG9pbnRMaWdodDEiLCJQb2ludExpZ2h0IiwicG9pbnRMaWdodDIiLCJ0ZXh0dXJlUGF0aCIsInNwaGVyZUdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJzY2FsZSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic3BoZXJlVGV4dHVyZSIsImxvYWQiLCJzcGhlcmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwic3BoZXJlTWVzaCIsIk1lc2giLCJvYmplY3RJbmZvQXJyYXkiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImZvckVhY2giLCJvYmplY3QiLCJzY2VuZVN0YXRlSlNPTiIsImFkZEVsZW1lbnQiLCJlbGVtZW50UGF0aCIsIm9wdGlvbnMiLCJ4IiwieSIsInJvdGF0aW9uIiwibG9hZGVyIiwib2JqIiwidHJhdmVyc2UiLCJjaGlsZCIsImN1c3RvbVRleHR1cmUiLCJ0YWtlU25hcHNob3QiLCJzbmFwc2hvdCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkT2JqTW9kZWwiLCJpc01lc2giLCJkaXNwb3NlIiwiZ2VvbWV0cnkiLCJpc01hdGVyaWFsIiwiY2xlYW5NYXRlcmlhbCIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZSIsImNvbnN0cnVjdG9yIiwiYmxvb20iLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIldlYkdMUmVuZGVyZXIiLCJpbnN0YW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});