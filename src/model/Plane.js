import { PlaneGeometry, MeshLambertMaterial, Mesh } from 'three'

export const WITH = 50
export const HEIGHT = 50

export default class Plane {
  
  constructor(scene) {
    this._scene = scene
  }

  set scene(scene) {
    this._scene = scene
  }

  addPlane() {
    const plane = new Mesh(
      new PlaneGeometry(WITH, HEIGHT),
      new MeshLambertMaterial({ color: 0xffffff })
    )
    plane.rotation.x = -.5 * Math.PI
    this._scene.add(plane)
  }
}