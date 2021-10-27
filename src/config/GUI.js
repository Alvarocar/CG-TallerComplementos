import * as dat from 'dat.gui'

export default class Gui {

  constructor() {
    this._gui = new dat.GUI()
  }
  get gui(){
    return this._gui
  }
  /**
   * 
   * @param {string} nameFolder 
   * @param {*} mesh 
   */
  addBasicGUI(nameFolder, mesh) {
    const mainF = this._gui.addFolder(nameFolder)
  const positionF = mainF.addFolder("position")
  positionF.add(mesh.position, "x").step(.1)
  positionF.add(mesh.position, "y").step(.1)
  positionF.add(mesh.position, "z").step(.1)
  const rotationF = mainF.addFolder("rotation")
  rotationF.add(mesh.rotation, "x").step(.1)
  rotationF.add(mesh.rotation, "y").step(.1)
  rotationF.add(mesh.rotation, "z").step(.1)
  const sizeF = mainF.addFolder("size")
  sizeF.add(mesh.scale, "x").step(.1)
  sizeF.add(mesh.scale, "y").step(.1)
  sizeF.add(mesh.scale, "z").step(.1)
  }
}