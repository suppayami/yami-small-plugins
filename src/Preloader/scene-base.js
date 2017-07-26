import VideoPlayer from './video-player'

export default (Scene_Base) => {
    const _isReady = Scene_Base.prototype.isReady
    Scene_Base.prototype.isReady = function () {
        const videoPlayerIsReady = VideoPlayer.isReady()
        return _isReady.call(this) && videoPlayerIsReady
    }
}