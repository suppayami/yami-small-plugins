const fs = require('fs')

module.exports = {
    getDirs: (path) => fs.readdirSync(path).filter(f => fs.statSync(`${path}/${f}`).isDirectory())
}