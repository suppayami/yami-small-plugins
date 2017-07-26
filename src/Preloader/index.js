import imageCache from './image-cache'
import imageManager from './image-manager'
import sceneBoot from './scene-boot'
import sceneBase from './scene-base'
import sceneMap from './scene-map'

imageCache(ImageCache)
imageManager(ImageManager)
sceneBoot(Scene_Boot)
sceneBase(Scene_Base)
sceneMap(Scene_Map)

window.ysp = window.ysp || {}
window.ysp.Preloader = window.ysp.Preloader || {}