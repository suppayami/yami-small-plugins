let videoCache = {}
let videoMap = {}

const loadVideo = (videoName) => {
    if (videoCache[videoName]) {
        return videoCache[videoName]
    }
    let texture = PIXI.Texture.fromVideo(`movies/${videoName}`)
    texture.baseTexture.autoPlay = false
    videoCache[videoName] = texture
    return texture
}

const newVideo = (videoName, id = "video") => {
    let video = new PIXI.Sprite(loadVideo(videoName))
    video.update = () => {
        video.texture.update()
    }
    videoMap[id] = video
    return video
}

const playVideo = (video) => {
    video.texture.baseTexture.source.play()
    // hax
    SceneManager._scene._spriteset.addVideo(video)
}

const playVideoById = (id) => {
    const video = getVideo(id)
    playVideo(video)
}

const stopVideo = (video) => {
    video.texture.baseTexture.source.pause()
    // hax
    SceneManager._scene._spriteset.removeVideo(video)
}

const stopVideoById = (id) => {
    const video = getVideo(id)
    stopVideo(video)
    delete videoMap[id]
}

const setLoop = (video) => {
    video.texture.baseTexture.source.loop = true
}

const setLoopById = (id) => {
    const video = getVideo(id)
    setLoop(video)
}

const releaseVideo = (videoName) => {
    delete videoCache[videoName]
}

const getVideoById = (id) => {
    return videoMap[id]
}

export default {
    newVideo,
    loadVideo,
    playVideoById,
    stopVideoById,
    setLoopById,
    releaseVideo,
    getVideoById,
}