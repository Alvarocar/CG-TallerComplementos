import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Gui from './config/GUI'
import Stats from 'three/examples/jsm/libs/stats.module'
import Plane from './model/Plane'
import Building from './model/Building'

// Stats
const stats = Stats()
document.body.appendChild(stats.dom)

// Debug
export const GUI = new Gui()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xffffff, 10, 100)

// Plane
const plane = new Plane( scene )
plane.addPlane()

// Buildings

const buildingGenerator = new Building( scene )

GUI.gui.add(buildingGenerator, "addBuilding")
.name("Generar un Edificio")

// Lights

const L1 = new THREE.DirectionalLight(0xffffff, .4)
L1.position.set(20, 15, 23)
const L2 = L1.clone()
L2.position.x = -20
scene.add(L1, L2)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 20, 30)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const tick = () =>
{
    controls.update()

    stats.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()