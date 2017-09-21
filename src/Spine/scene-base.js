import loader from './loader'

export default (Scene_Base) => {
    let _isReady = Scene_Base.prototype.isReady
    Scene_Base.prototype.isReady = function () {
        return _isReady.call(this) && loader.isLoaded()
    }
}