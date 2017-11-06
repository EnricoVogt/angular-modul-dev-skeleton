var fs = require('fs');
var path = require("path");

module.exports = {
    getTestFiles: function getTestFiles(indicator) {
        let testfiles = [];
        let readDirRecursiveSync = function (_path) {
            let files = fs.readdirSync(_path);
            files.forEach(function (file) {
                pathCombined = path.join(_path, file);
                stats = fs.lstatSync(pathCombined);
                if (stats.isDirectory()) {
                    readDirRecursiveSync(pathCombined);
                } else if (stats.isFile()) {
                    if (pathCombined.indexOf(indicator) !== -1) {
                        pathCombined = pathCombined.replace(process.cwd() + '/', '');
                        testfiles.push(pathCombined);
                    }
                }
            });
        }

        readDirRecursiveSync(path.join(process.cwd(), 'src'));
        return testfiles;
    }
}