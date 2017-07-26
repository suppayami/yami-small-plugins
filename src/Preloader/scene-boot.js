import VideoPlayer from './video-player'

export default (Scene_Boot) => {
    const _loadSystemImages = Scene_Boot.loadSystemImages
    Scene_Boot.loadSystemImages = function () {
        _loadSystemImages.call(this)
        preloadGlobalAssets()
    }

    const preloadGlobalAssets = () => {
        for (let image of ysp.Preloader.GLOBAL.IMAGES) {
            ImageManager.reserveNormalBitmap(`img/${image}.png`, 0, ImageManager._defaultReservationId)
        }

        for (let movie of ysp.Preloader.GLOBAL.VIDEOS) {
            VideoPlayer.loadVideo(movie)
        }
    }
}