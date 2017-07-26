export default (ImageCache) => {
    ImageCache.release = function (key) {
        if (this._items[key]) {
            delete this._items[key]
        }
    }
}