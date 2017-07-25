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
    SceneManager._scene._spriteset.addVideo(video)
    video.texture.baseTexture.source.play()
}

const playVideoById = (id) => {
    let video = getVideoById(id)
    playVideo(video)
}

const stopVideo = (video) => {
    SceneManager._scene._spriteset.removeVideo(video)
    video.texture.baseTexture.source.pause()
}

const stopVideoById = (id) => {
    const video = getVideoById(id)
    stopVideo(video)
    delete videoMap[id]
}

const setLoop = (video) => {
    video.texture.baseTexture.source.loop = true
}

const setLoopById = (id) => {
    const video = getVideoById(id)
    setLoop(video)
}

const releaseVideo = (videoName) => {
    delete videoCache[videoName]
}

const getVideoById = (id) => {
    return videoMap[id]
}

const isReady = () => {
    return !Object.values(videoCache).some((video) => !video.baseTexture.hasLoaded)
}

export default {
    newVideo,
    loadVideo,
    playVideo,
    playVideoById,
    stopVideoById,
    setLoopById,
    releaseVideo,
    getVideoById,
    isReady,
}