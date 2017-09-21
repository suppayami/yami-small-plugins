import VideoPlayer from './video-player'
import Helpers from './helpers'

const preloadGlobalAssets = () => {
    for (let image of ysp.Preloader.GLOBAL.IMAGES) {
        let path = `img/${Helpers.encodeURIImageName(image)}.png`
        ImageManager.reserveNormalBitmap(`${path}`, 0, ImageManager._defaultReservationId)
    }

    for (let movie of ysp.Preloader.GLOBAL.VIDEOS) {
        VideoPlayer.loadVideo(movie)
    }
}

export default (Scene_Boot) => {
    const _loadSystemImages = Scene_Boot.loadSystemImages
    Scene_Boot.loadSystemImages = function () {
        _loadSystemImages.call(this)
        preloadGlobalAssets()
    }
}