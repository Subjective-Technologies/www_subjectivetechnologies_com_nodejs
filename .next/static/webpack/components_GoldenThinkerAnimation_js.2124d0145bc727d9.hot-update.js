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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n\n\n\nclass Scene {\n    init() {\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.renderer.domElement.style.display = \"relative\";\n        this.renderer.domElement.style.margin = \"0\";\n        const canvas = this.renderer.domElement;\n        canvas.style.position = \"absolute\"; // Example to make it absolute positioned\n        canvas.style.left = \"0\";\n        canvas.style.top = \"0\";\n        // Instead of document.body.appendChild(this.renderer.domElement);\n        this.renderer.gammaOutput = false;\n        const container = document.getElementById(\"animation_container\"); // Make sure this is the ID of your container div\n        container.appendChild(this.renderer.domElement);\n        this.camera.position.z = 5;\n        this.controls.target.set(0, 0, 0);\n        this.addLights();\n        this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path\n        // Load the .obj file\n        this.loadObjModel(this.objPath);\n        this.controls.addEventListener(\"change\", ()=>{\n            this.updateObjectInfoArray();\n            this.printSceneState();\n        });\n        document.addEventListener(\"keydown\", (event)=>{\n            if (event.key === \"S\") {\n                this.updateObjectInfoArray();\n                this.printSceneState();\n            } else if (event.key === \"R\") {\n                const snapshotJSON = prompt(\"Enter the snapshot JSON:\");\n                if (snapshotJSON) {\n                    this.restoreSceneState(snapshotJSON);\n                }\n            }\n        });\n        this.animate();\n    }\n    animate() {\n        requestAnimationFrame(()=>this.animate());\n        // Add any animations or updates here\n        this.renderer.render(this.scene, this.camera);\n    }\n    addLights() {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.2);\n        this.scene.add(ambientLight);\n        const pointLight1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight1.position.set(10, 10, 10);\n        this.scene.add(pointLight1);\n        const pointLight2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1);\n        pointLight2.position.set(-10, -10, -10);\n        this.scene.add(pointLight2);\n    }\n    addBackgroundSphere(texturePath) {\n        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 32, 32);\n        sphereGeometry.scale(-1, 1, 1);\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const sphereTexture = textureLoader.load(texturePath);\n        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n            map: sphereTexture\n        });\n        const sphereMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n        this.scene.add(sphereMesh);\n    }\n    updateObjectInfoArray() {\n        this.objectInfoArray.length = 0;\n        this.scene.children.forEach((object)=>{\n            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n            // Collect object information and add to this.objectInfoArray\n            // Similar to what you did in your previous code\n            }\n        });\n    }\n    printSceneState() {\n    // Create a snapshot of the scene's state and print it\n    // Similar to what you did in your previous code\n    }\n    restoreSceneState(sceneStateJSON) {\n    // Restore the scene's state from a JSON string\n    // Similar to what you did in your previous code\n    }\n    // Add methods to add custom elements, manage events, etc.\n    addElement(elementPath) {\n        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n        const { texturePath = null, material = null, position = {\n            x: 0,\n            y: 0,\n            z: 0\n        }, rotation = {\n            x: 0,\n            y: 0,\n            z: 0\n        } } = options;\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(elementPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child instanceof three__WEBPACK_IMPORTED_MODULE_0__.Mesh) {\n                    if (material) {\n                        // Apply the custom material if provided\n                        child.material = material;\n                    }\n                    if (texturePath) {\n                        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n                        const customTexture = textureLoader.load(texturePath);\n                        // Apply the custom texture to the mesh\n                        child.material.map = customTexture;\n                    }\n                }\n            });\n            obj.position.set(position.x, position.y, position.z);\n            obj.rotation.set(rotation.x, rotation.y, rotation.z);\n            this.scene.add(obj);\n        });\n    }\n    // Method to take a snapshot of the current scene state and return it as JSON\n    takeSnapshot() {\n        const snapshot = {};\n        // Iterate over all properties of the Scene object\n        for(const prop in this){\n            if (this.hasOwnProperty(prop)) {\n                // Check if the property is not a function\n                if (typeof this[prop] !== \"function\") {\n                    // Save the property value to the snapshot\n                    snapshot[prop] = this[prop];\n                }\n            }\n        }\n        // Convert the snapshot object to JSON\n        return JSON.stringify(snapshot, null, 2);\n    }\n    loadObjModel(objPath) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            // Process the loaded .obj file\n            // For example, setting position, scale, etc.\n            this.scene.add(obj);\n        });\n    }\n    loadObjModelWithMaterial(objPath, material) {\n        const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n        loader.load(objPath, (obj)=>{\n            obj.traverse((child)=>{\n                if (child.isMesh) {\n                    child.material = material || child.material;\n                }\n            });\n            this.scene.add(obj);\n        });\n    }\n    // ... rest of the Scene class\n    dispose() {\n        // Dispose of geometries, materials, textures, etc.\n        this.scene.traverse((object)=>{\n            if (!object.isMesh) return;\n            object.geometry.dispose();\n            if (object.material.isMaterial) {\n                this.cleanMaterial(object.material);\n            } else {\n                // An array of materials\n                for (const material of object.material)cleanMaterial(material);\n            }\n        });\n        if (this.renderer) {\n            this.renderer.dispose();\n        }\n    // Additional cleanup if needed\n    }\n    cleanMaterial(material) {\n        material.dispose();\n        // Dispose textures\n        for (const key of Object.keys(material)){\n            const value = material[key];\n            if (value && typeof value === \"object\" && \"minFilter\" in value) {\n                value.dispose();\n            }\n        }\n    }\n    constructor(image360Path, objPath, material){\n        this.image360Path = image360Path;\n        this.objPath = objPath;\n        this.material = material; // Store the material\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        if (true) {\n            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n            this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.renderer.domElement);\n        }\n        this.objectInfoArray = [];\n        this.init();\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjtRQUNGO0lBQ0Y7SUFqT0FPLFlBQVluRSxZQUFZLEVBQUVFLE9BQU8sRUFBRXlDLFFBQVEsQ0FBRTtRQUMzQyxJQUFJLENBQUMzQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0UsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ3lDLFFBQVEsR0FBR0EsVUFBVSxxQkFBcUI7UUFDL0MsSUFBSSxDQUFDN0IsS0FBSyxHQUFHLElBQUk1Qyx3Q0FBVztRQUU1QixJQUFJLElBQWtCLEVBQWE7WUFDL0IsSUFBSSxDQUFDdUIsTUFBTSxHQUFHLElBQUl2QixvREFBdUIsQ0FBQyxJQUFJTyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1lBQzNGLElBQUksQ0FBQ0osUUFBUSxHQUFHLElBQUlMLGdEQUFtQjtZQUN2QyxJQUFJLENBQUN5QixRQUFRLEdBQUcsSUFBSXhCLHVGQUFhQSxDQUFDLElBQUksQ0FBQ3NCLE1BQU0sRUFBRSxJQUFJLENBQUNsQixRQUFRLENBQUNLLFVBQVU7UUFDM0U7UUFFQSxJQUFJLENBQUNzRCxlQUFlLEdBQUcsRUFBRTtRQUN6QixJQUFJLENBQUM1RCxJQUFJO0lBQ1g7QUF3TkY7QUFFQSwrREFBZUQsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NjZW5lLmpzPzFkNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlci5qcyc7XG5cbmNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoaW1hZ2UzNjBQYXRoLCBvYmpQYXRoLCBtYXRlcmlhbCkge1xuICAgIHRoaXMuaW1hZ2UzNjBQYXRoID0gaW1hZ2UzNjBQYXRoO1xuICAgIHRoaXMub2JqUGF0aCA9IG9ialBhdGg7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsOyAvLyBTdG9yZSB0aGUgbWF0ZXJpYWxcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMub2JqZWN0SW5mb0FycmF5ID0gW107XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ3JlbGF0aXZlJztcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnOyAvLyBFeGFtcGxlIHRvIG1ha2UgaXQgYWJzb2x1dGUgcG9zaXRpb25lZFxuICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG5cbiAgICAvLyBJbnN0ZWFkIG9mIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuXG4gICAgdGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IGZhbHNlO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25fY29udGFpbmVyJyk7IC8vIE1ha2Ugc3VyZSB0aGlzIGlzIHRoZSBJRCBvZiB5b3VyIGNvbnRhaW5lciBkaXZcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuICAgIHRoaXMuY29udHJvbHMudGFyZ2V0LnNldCgwLCAwLCAwKTtcblxuICAgIHRoaXMuYWRkTGlnaHRzKCk7XG4gICAgdGhpcy5hZGRCYWNrZ3JvdW5kU3BoZXJlKHRoaXMuaW1hZ2UzNjBQYXRoKTsgLy8gVXNlIHRoZSBwcm92aWRlZCAzNjAgaW1hZ2UgcGF0aFxuXG4gICAgLy8gTG9hZCB0aGUgLm9iaiBmaWxlXG4gICAgdGhpcy5sb2FkT2JqTW9kZWwodGhpcy5vYmpQYXRoKTtcblxuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPYmplY3RJbmZvQXJyYXkoKTtcbiAgICAgIHRoaXMucHJpbnRTY2VuZVN0YXRlKCk7XG4gICAgfSk7XG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdTJykge1xuICAgICAgICB0aGlzLnVwZGF0ZU9iamVjdEluZm9BcnJheSgpO1xuICAgICAgICB0aGlzLnByaW50U2NlbmVTdGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdSJykge1xuICAgICAgICBjb25zdCBzbmFwc2hvdEpTT04gPSBwcm9tcHQoJ0VudGVyIHRoZSBzbmFwc2hvdCBKU09OOicpO1xuICAgICAgICBpZiAoc25hcHNob3RKU09OKSB7XG4gICAgICAgICAgdGhpcy5yZXN0b3JlU2NlbmVTdGF0ZShzbmFwc2hvdEpTT04pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcbiAgICAvLyBBZGQgYW55IGFuaW1hdGlvbnMgb3IgdXBkYXRlcyBoZXJlXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgYWRkTGlnaHRzKCkge1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMik7XG4gICAgdGhpcy5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQxID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIHBvaW50TGlnaHQxLnBvc2l0aW9uLnNldCgxMCwgMTAsIDEwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0MSk7XG5cbiAgICBjb25zdCBwb2ludExpZ2h0MiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBwb2ludExpZ2h0Mi5wb3NpdGlvbi5zZXQoLTEwLCAtMTAsIC0xMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodDIpO1xuICB9XG5cbiAgYWRkQmFja2dyb3VuZFNwaGVyZSh0ZXh0dXJlUGF0aCkge1xuICAgIGNvbnN0IHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEwLCAzMiwgMzIpO1xuICAgIHNwaGVyZUdlb21ldHJ5LnNjYWxlKC0xLCAxLCAxKTtcblxuICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgIGNvbnN0IHNwaGVyZVRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgpO1xuXG4gICAgY29uc3Qgc3BoZXJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHNwaGVyZVRleHR1cmUgfSk7XG5cbiAgICBjb25zdCBzcGhlcmVNZXNoID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlR2VvbWV0cnksIHNwaGVyZU1hdGVyaWFsKTtcbiAgICB0aGlzLnNjZW5lLmFkZChzcGhlcmVNZXNoKTtcbiAgfVxuXG4gIHVwZGF0ZU9iamVjdEluZm9BcnJheSgpIHtcbiAgICB0aGlzLm9iamVjdEluZm9BcnJheS5sZW5ndGggPSAwO1xuICAgIFxuICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAvLyBDb2xsZWN0IG9iamVjdCBpbmZvcm1hdGlvbiBhbmQgYWRkIHRvIHRoaXMub2JqZWN0SW5mb0FycmF5XG4gICAgICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpbnRTY2VuZVN0YXRlKCkge1xuICAgIC8vIENyZWF0ZSBhIHNuYXBzaG90IG9mIHRoZSBzY2VuZSdzIHN0YXRlIGFuZCBwcmludCBpdFxuICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICB9XG5cbiAgcmVzdG9yZVNjZW5lU3RhdGUoc2NlbmVTdGF0ZUpTT04pIHtcbiAgICAvLyBSZXN0b3JlIHRoZSBzY2VuZSdzIHN0YXRlIGZyb20gYSBKU09OIHN0cmluZ1xuICAgIC8vIFNpbWlsYXIgdG8gd2hhdCB5b3UgZGlkIGluIHlvdXIgcHJldmlvdXMgY29kZVxuICB9XG5cbiAgLy8gQWRkIG1ldGhvZHMgdG8gYWRkIGN1c3RvbSBlbGVtZW50cywgbWFuYWdlIGV2ZW50cywgZXRjLlxuICBhZGRFbGVtZW50KGVsZW1lbnRQYXRoLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHRleHR1cmVQYXRoID0gbnVsbCwgbWF0ZXJpYWwgPSBudWxsLCBwb3NpdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9LCByb3RhdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9IH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKGVsZW1lbnRQYXRoLCAob2JqKSA9PiB7XG4gICAgICBvYmoudHJhdmVyc2UoKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcbiAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjdXN0b20gbWF0ZXJpYWwgaWYgcHJvdmlkZWRcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRleHR1cmVQYXRoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbVRleHR1cmUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQodGV4dHVyZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgY3VzdG9tIHRleHR1cmUgdG8gdGhlIG1lc2hcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsLm1hcCA9IGN1c3RvbVRleHR1cmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgb2JqLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICAgIG9iai5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XG5cbiAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIFxuIC8vIE1ldGhvZCB0byB0YWtlIGEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYW5kIHJldHVybiBpdCBhcyBKU09OXG4gIHRha2VTbmFwc2hvdCgpIHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBTY2VuZSBvYmplY3RcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb3BlcnR5IGlzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1twcm9wXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIFNhdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBzbmFwc2hvdFxuICAgICAgICAgIHNuYXBzaG90W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIHNuYXBzaG90IG9iamVjdCB0byBKU09OXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LCBudWxsLCAyKTtcbiAgfVxuXG5cbiAgbG9hZE9iak1vZGVsKG9ialBhdGgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQob2JqUGF0aCwgKG9iaikgPT4ge1xuICAgICAgLy8gUHJvY2VzcyB0aGUgbG9hZGVkIC5vYmogZmlsZVxuICAgICAgLy8gRm9yIGV4YW1wbGUsIHNldHRpbmcgcG9zaXRpb24sIHNjYWxlLCBldGMuXG4gICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZE9iak1vZGVsV2l0aE1hdGVyaWFsKG9ialBhdGgsIG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKG9ialBhdGgsIChvYmopID0+IHtcbiAgICAgICAgb2JqLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gbWF0ZXJpYWwgfHwgY2hpbGQubWF0ZXJpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgfSk7XG4gIH1cblxuLy8gLi4uIHJlc3Qgb2YgdGhlIFNjZW5lIGNsYXNzXG5cbiAgXG5cbiAgZGlzcG9zZSgpIHtcbiAgICAvLyBEaXNwb3NlIG9mIGdlb21ldHJpZXMsIG1hdGVyaWFscywgdGV4dHVyZXMsIGV0Yy5cbiAgICB0aGlzLnNjZW5lLnRyYXZlcnNlKG9iamVjdCA9PiB7XG4gICAgICBpZiAoIW9iamVjdC5pc01lc2gpIHJldHVybjtcblxuICAgICAgb2JqZWN0Lmdlb21ldHJ5LmRpc3Bvc2UoKTtcblxuICAgICAgaWYgKG9iamVjdC5tYXRlcmlhbC5pc01hdGVyaWFsKSB7XG4gICAgICAgIHRoaXMuY2xlYW5NYXRlcmlhbChvYmplY3QubWF0ZXJpYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQW4gYXJyYXkgb2YgbWF0ZXJpYWxzXG4gICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2Ygb2JqZWN0Lm1hdGVyaWFsKSBjbGVhbk1hdGVyaWFsKG1hdGVyaWFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBBZGRpdGlvbmFsIGNsZWFudXAgaWYgbmVlZGVkXG4gIFxuICB9XG5cbiAgY2xlYW5NYXRlcmlhbChtYXRlcmlhbCkge1xuICAgIG1hdGVyaWFsLmRpc3Bvc2UoKTtcbiAgXG4gICAgLy8gRGlzcG9zZSB0ZXh0dXJlc1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1hdGVyaWFsKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBtYXRlcmlhbFtrZXldO1xuICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ21pbkZpbHRlcicgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG5cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJPQkpMb2FkZXIiLCJTY2VuZSIsImluaXQiLCJyZW5kZXJlciIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkb21FbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwiY2FudmFzIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiZ2FtbWFPdXRwdXQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjYW1lcmEiLCJ6IiwiY29udHJvbHMiLCJ0YXJnZXQiLCJzZXQiLCJhZGRMaWdodHMiLCJhZGRCYWNrZ3JvdW5kU3BoZXJlIiwiaW1hZ2UzNjBQYXRoIiwibG9hZE9iak1vZGVsIiwib2JqUGF0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVPYmplY3RJbmZvQXJyYXkiLCJwcmludFNjZW5lU3RhdGUiLCJldmVudCIsImtleSIsInNuYXBzaG90SlNPTiIsInByb21wdCIsInJlc3RvcmVTY2VuZVN0YXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInNjZW5lIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwicG9pbnRMaWdodDEiLCJQb2ludExpZ2h0IiwicG9pbnRMaWdodDIiLCJ0ZXh0dXJlUGF0aCIsInNwaGVyZUdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJzY2FsZSIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic3BoZXJlVGV4dHVyZSIsImxvYWQiLCJzcGhlcmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwic3BoZXJlTWVzaCIsIk1lc2giLCJvYmplY3RJbmZvQXJyYXkiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImZvckVhY2giLCJvYmplY3QiLCJzY2VuZVN0YXRlSlNPTiIsImFkZEVsZW1lbnQiLCJlbGVtZW50UGF0aCIsIm9wdGlvbnMiLCJtYXRlcmlhbCIsIngiLCJ5Iiwicm90YXRpb24iLCJsb2FkZXIiLCJvYmoiLCJ0cmF2ZXJzZSIsImNoaWxkIiwiY3VzdG9tVGV4dHVyZSIsInRha2VTbmFwc2hvdCIsInNuYXBzaG90IiwicHJvcCIsImhhc093blByb3BlcnR5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRPYmpNb2RlbFdpdGhNYXRlcmlhbCIsImlzTWVzaCIsImRpc3Bvc2UiLCJnZW9tZXRyeSIsImlzTWF0ZXJpYWwiLCJjbGVhbk1hdGVyaWFsIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlIiwiY29uc3RydWN0b3IiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIldlYkdMUmVuZGVyZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Scene.js\n"));

/***/ })

});