export default (ImageCache) => {
    ImageCache.prototype.release = function (key) {
        if (this._items[key]) {
            delete this._items[key]
        }
    }

    ImageCache.prototype.addGroup = function (group, key) {
        this._itemGroups = this._itemGroups || {}
        this._itemGroups[group] = this._itemGroups[group] || []
        this._itemGroups[group].push(key)
    }

    ImageCache.prototype.releaseGroup = function (group) {
        this._itemGroups = this._itemGroups || {}

        if (!this._itemGroups[group]) {
            return
        }

        for (let key of this._itemGroups[group]) {
            this.release(key)
        }
        delete this._itemGroups[group]
    }
}