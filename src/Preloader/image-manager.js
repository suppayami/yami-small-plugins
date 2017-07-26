export default (ImageManager) => {
    ImageManager.releaseBitmap = function (path, hue) {
        const cacheKey = this._generateCacheKey(path, hue)
        this._imageCache.release(cacheKey)
    }
}