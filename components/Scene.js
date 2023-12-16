import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

class Scene {
  constructor(image360Path, objPath) {
    this.image360Path = image360Path;
    this.objPath = objPath;
    this.scene = new THREE.Scene();
    if (typeof window !== 'undefined') {
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }
    this.objectInfoArray = [];
  }
  

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.style.display = 'relative';
    this.renderer.domElement.style.margin = '0';
    const canvas = this.renderer.domElement;
    canvas.style.position = 'absolute'; // Example to make it absolute positioned
    canvas.style.left = '0';
    canvas.style.top = '0';

    // Instead of document.body.appendChild(this.renderer.domElement);


    this.renderer.gammaOutput = false;
    const container = document.getElementById('animation_container'); // Make sure this is the ID of your container div
    container.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;
    this.controls.target.set(0, 0, 0);

    this.addLights();
    this.addBackgroundSphere(this.image360Path); // Use the provided 360 image path

    // Load the .obj file
    this.loadObjModel(this.objPath);

    this.controls.addEventListener('change', () => {
      this.updateObjectInfoArray();
      this.printSceneState();
    });


    document.addEventListener('keydown', (event) => {
      if (event.key === 'S') {
        this.updateObjectInfoArray();
        this.printSceneState();
      } else if (event.key === 'R') {
        const snapshotJSON = prompt('Enter the snapshot JSON:');
        if (snapshotJSON) {
          this.restoreSceneState(snapshotJSON);
        }
      }
    });

    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    // Add any animations or updates here
    this.renderer.render(this.scene, this.camera);
  }

  addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    this.scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-10, -10, -10);
    this.scene.add(pointLight2);
  }

  addBackgroundSphere(texturePath) {
    const sphereGeometry = new THREE.SphereGeometry(10, 32, 32);
    sphereGeometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    const sphereTexture = textureLoader.load(texturePath);

    const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });

    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(sphereMesh);
  }

  updateObjectInfoArray() {
    this.objectInfoArray.length = 0;
    
    this.scene.children.forEach((object) => {
      if (object instanceof THREE.Mesh) {
        // Collect object information and add to this.objectInfoArray
        // Similar to what you did in your previous code
      }
    });
  }

  printSceneState() {
    // Create a snapshot of the scene's state and print it
    // Similar to what you did in your previous code
  }

  restoreSceneState(sceneStateJSON) {
    // Restore the scene's state from a JSON string
    // Similar to what you did in your previous code
  }

  // Add methods to add custom elements, manage events, etc.
  addElement(elementPath, options = {}) {
    const { texturePath = null, material = null, position = { x: 0, y: 0, z: 0 }, rotation = { x: 0, y: 0, z: 0 } } = options;

    const loader = new OBJLoader();
    loader.load(elementPath, (obj) => {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (material) {
            // Apply the custom material if provided
            child.material = material;
          }

          if (texturePath) {
            const textureLoader = new THREE.TextureLoader();
            const customTexture = textureLoader.load(texturePath);

            // Apply the custom texture to the mesh
            child.material.map = customTexture;
          }
        }
      });

      obj.position.set(position.x, position.y, position.z);
      obj.rotation.set(rotation.x, rotation.y, rotation.z);

      this.scene.add(obj);
    });
  }
  
  
 // Method to take a snapshot of the current scene state and return it as JSON
  takeSnapshot() {
    const snapshot = {};

    // Iterate over all properties of the Scene object
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        // Check if the property is not a function
        if (typeof this[prop] !== 'function') {
          // Save the property value to the snapshot
          snapshot[prop] = this[prop];
        }
      }
    }

    // Convert the snapshot object to JSON
    return JSON.stringify(snapshot, null, 2);
  }


  loadObjModel(objPath) {
    const loader = new OBJLoader();
    loader.load(objPath, (obj) => {
      // Process the loaded .obj file
      // For example, setting position, scale, etc.
      this.scene.add(obj);
    });
  }
  

  dispose() {
    // Dispose of geometries, materials, textures, etc.
    this.scene.traverse(object => {
      if (!object.isMesh) return;

      object.geometry.dispose();

      if (object.material.isMaterial) {
        this.cleanMaterial(object.material);
      } else {
        // An array of materials
        for (const material of object.material) cleanMaterial(material);
      }
    });

    if (this.renderer) {
      this.renderer.dispose();
    }

    // Additional cleanup if needed
  
  }

  cleanMaterial(material) {
    material.dispose();
  
    // Dispose textures
    for (const key of Object.keys(material)) {
      const value = material[key];
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose();
      }
    }
  }



  
}

export default Scene;

