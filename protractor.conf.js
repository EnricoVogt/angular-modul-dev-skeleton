let util = require("./util.js");
let testfiles = util.getTestFiles('test-e2e.js');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: testfiles
};
