export default (Spriteset_Base) => {
    let _createUpperLayer = Spriteset_Base.prototype.createUpperLayer
    Spriteset_Base.prototype.createUpperLayer = function () {
        this.createVideos()
        _createUpperLayer.call(this)
    }

    Spriteset_Base.prototype.createVideos = function () {
        this._videosContainer = new Sprite()
        this.addChild(this._videosContainer)
    }

    Spriteset_Base.prototype.addVideo = function (video) {
        this._videosContainer.addChild(video)
    }

    Spriteset_Base.prototype.removeVideo = function (video) {
        this._videosContainer.removeChild(video)
    }
}