export default (ImageManager) => {
    ImageManager.releaseBitmap = function (path, hue) {
        const cacheKey = this._generateCacheKey(path, hue)
        this._imageCache.release(cacheKey)
    }

    ImageManager.releaseGroup = function (group) {
        this._imageCache.releaseGroup(group)
    }

    const _loadNormalBitmap = ImageManager.loadNormalBitmap
    ImageManager.loadNormalBitmap = function (path, hue) {
        const group = path
        const key = this._generateCacheKey(path, hue)
        const bitmap = this._imageCache.get(key)

        if (!bitmap) {
            this._imageCache.addGroup(group, key)
        }

        return _loadNormalBitmap.call(this, path, hue)
    }
}