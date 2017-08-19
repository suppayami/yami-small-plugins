import spine from './spine'
import loader from './loader'
import sceneBase from './scene-base'

window.ysp = window.ysp || {}

sceneBase(Scene_Base)

const exports = {
    spine,
    loader,
}
window.ysp.Spine = Object.assign({}, window.ysp.Spine, exports)