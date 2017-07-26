const loadVideo = (videoName) => {
    if (!window.ysp.VideoPlayer) {
        return
    }

    window.ysp.VideoPlayer.loadVideo(videoName)
}

const releaseVideo = (videoName) => {
    if (!window.ysp.VideoPlayer) {
        return
    }

    window.ysp.VideoPlayer.releaseVideo(videoName)
}

const isReady = () => {
    if (!window.ysp.VideoPlayer) {
        return true
    }

    return window.ysp.VideoPlayer.isReady()
}

export default {
    loadVideo,
    releaseVideo,
    isReady,
}