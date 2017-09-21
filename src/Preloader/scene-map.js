import VideoPlayer from './video-player'

const releaseMapAssets = (mapId) => {
    if (!ysp.Preloader.Config.releaseMapChange) {
        return
    }

    const assets = ysp.Preloader.MAP_BASED[mapId]

    if (!assets) {
        return
    }

    for (let image of assets.IMAGES) {
        ImageManager.releaseGroup(`img/${image}.png`)
    }

    for (let movie of assets.VIDEOS) {
        VideoPlayer.releaseVideo(movie)
    }
}

const preloadMapAssets = (mapId) => {
    const assets = ysp.Preloader.MAP_BASED[mapId]

    if (!assets) {
        return
    }

    for (let image of assets.IMAGES) {
        let path = `img/${encodeURIComponent(image)}.png`
        ImageManager.reserveNormalBitmap(`img/${path}.png`, 0, ImageManager._defaultReservationId)
    }

    for (let movie of assets.VIDEOS) {
        VideoPlayer.loadVideo(movie)
    }
}

export default (Scene_Map) => {
    const _onMapLoaded = Scene_Map.prototype.onMapLoaded
    Scene_Map.prototype.onMapLoaded = function () {
        releaseMapAssets($gameMap.mapId())
        _onMapLoaded.call(this)
        preloadMapAssets($gameMap.mapId())
    }
}