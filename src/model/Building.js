import { BoxGeometry, Mesh, MeshPhongMaterial } from 'three'
import Colors from '../colors.json'
import { HEIGHT as PLANE_HEIGHT, WITH as PLANE_WITH } from './Plane'

const nameColors = Object.keys(Colors)

export const MIN_HEIGHT = 2
export const MAX_HEIGHT = 20
export const WITH = 3
export const DEPTH = 3


export default class Building {
  constructor(scene) {
    this._scene = scene
  }
  addBuilding() {
    const height = this._randomHeight
    const randomBuilding = new Mesh( 
      new BoxGeometry( WITH, height, DEPTH),
      new MeshPhongMaterial({ color: this._randomColor })
    )
    const [x, y , z] = this._randomPosition
    // The Height grows in y+ and y-
    // we add half the height to "y" position to correct it
    randomBuilding.position.set(x, y + height/2, z)

    this._scene.add(randomBuilding)
  }
  
  set scene(scene) {
    this._scene = scene
  }
  
  get _randomHeight() {
    return Math.random() * ( MAX_HEIGHT - MIN_HEIGHT ) + MIN_HEIGHT
  }

  get _randomColor() {
    const max = nameColors.length - 1
    const position = Math.floor(Math.random() * max)
    return Number(Colors[nameColors[position]])
  }

  get _randomPosition() {
    const xMax  = (PLANE_WITH / 2) - WITH/2
    const zMax = (PLANE_HEIGHT / 2) - DEPTH/2
    let randomX = Math.random() * ( xMax + xMax ) - xMax
    let randomZ = Math.random() * ( zMax + zMax ) - zMax
    return [randomX, 0, randomZ]
  }
}