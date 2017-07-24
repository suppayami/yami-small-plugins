var ConcatSource = require("webpack-sources").ConcatSource;
var fs = require("fs");

function IncludeHeaderPlugin() { }
module.exports = IncludeHeaderPlugin;

IncludeHeaderPlugin.prototype.apply = function (compiler) {
    compiler.plugin("compilation", function (compilation) {
        compilation.plugin("optimize-chunk-assets", function (chunks, callback) {
            chunks.forEach(function (chunk) {
                var name = chunk.name;
                var headerpath = "./src/" + name + "/header.js";
                try {
                    fs.accessSync(headerpath, fs.F_OK);
                } catch (e) {
                    console.log("Header not found: " + headerpath);
                    return;
                }
                var header = fs.readFileSync(headerpath, "utf8");
                var filename = chunk.files[0];
                compilation.assets[filename] = new ConcatSource(header, compilation.assets[filename]);
            });
            callback();
        });
    });
};