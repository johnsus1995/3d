import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

// mesh.position.normalize()

mesh.position.set(0.7,-0.6,1)

//axis helper
// X axis is red. The Y axis is green. The Z axis is blue.
const axesHelper = new THREE.AxesHelper();
scene.add( axesHelper );

// scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// or
mesh.scale.set(2,0.5,0.5)

const wireframe = new THREE.WireframeGeometry(geometry);

// create black wireframe material
const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

// create wireframe mesh and add to scene
const wireframeMesh = new THREE.LineSegments(wireframe, wireframeMaterial);
mesh.add(wireframeMesh);

// reordering axises
mesh.rotation.reorder("YXZ")
mesh.rotation.y = 0.25 * Math.PI
mesh.rotation.x =0.25 * Math.PI
// mesh.rotation.z = 0.7 * Math.PI
// Rotation


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

// camera.lookAt(new THREE.Vector3(3,0,0))
camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)