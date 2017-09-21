const encodeURIImageName = (imageName) => {
    let sep = imageName.split('/')
    let imageRealName = sep.pop()
    return `${sep.join('/')}/${encodeURIComponent(imageRealName)}`
}

export default {
    encodeURIImageName
}