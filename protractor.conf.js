let util = require("./util.js");
let testfiles = util.getTestFiles('test-unit.js');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: testfiles
};