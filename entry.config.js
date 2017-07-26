const helpers = require('./webpack/helpers')

const getEntries = (srcPath) => {
    const pluginList = helpers.getDirs(srcPath)
    let entries = {}
    for (let plugin of pluginList) {
        entries[plugin] = `./${srcPath}/${plugin}/index.js`
    }
    return entries
}

module.exports = getEntries('src')