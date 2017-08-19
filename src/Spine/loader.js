let raws = {}
let spines = {}
let filesToLoad = 0

const _loadRaw = (path) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', path)
        xhr.onload = () => resolve(xhr.responseText)
        xhr.onerror = () => resolve(xhr.statusText)
        xhr.send()
    })
}

const _loadTexture = (path) => {
    return new Promise((resolve, reject) => {
        let texture = PIXI.BaseTexture.fromImage(path)
        texture.on('loaded', (baseTexture) => resolve(baseTexture))
        texture.on('error', (baseTexture) => reject(baseTexture))
    })
}

const loadAssets = (spineName) => {
    let setup = ysp.Spine.SETUP[spineName]
    if (raws[spineName]) {
        return
    }
    raws[spineName] = {}
    filesToLoad = filesToLoad + 3

    _loadRaw(setup.json)
        .then((res) => {
            raws[spineName].json = JSON.parse(res)
            filesToLoad = filesToLoad - 1
        })
        .catch((res) => {
            console.log(res)
        })

    _loadRaw(setup.atlas)
        .then((res) => {
            raws[spineName].atlas = res
            filesToLoad = filesToLoad - 1
        })
        .catch((res) => {
            console.log(res)
        })

    _loadTexture(setup.texture)
        .then((texture) => {
            raws[spineName].texture = texture
            filesToLoad = filesToLoad - 1
        })
        .catch((texture) => {
            console.log(`Couldn't load: ${setup.texture}`)
        })
}

const loadSkeleton = (spineName) => {
    let setup = ysp.Spine.SETUP[spineName]

    if (spines[spineName]) {
        return spines[spineName]
    }

    if (!raws[spineName]) {
        console.log(`[Error] Spine '${spineName}' hasn't pre-loaded`)
        return
    }

    let rawSkeletonData = raws[spineName].json
    let rawAtlasData = raws[spineName].atlas

    let spineAtlas = new PIXI.spine.core.TextureAtlas(rawAtlasData, function (line, callback) {
        callback(raws[spineName].texture)
    })

    let spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(spineAtlas)
    let spineJsonParser = new PIXI.spine.core.SkeletonJson(spineAtlasLoader)

    let spineData = spineJsonParser.readSkeletonData(rawSkeletonData)
    spines[spineName] = spineData

    return spines[spineName]
}

const isLoaded = () => {
    return filesToLoad === 0
}

export default {
    loadAssets,
    loadSkeleton,
    isLoaded,
    raws,
    spines,
}