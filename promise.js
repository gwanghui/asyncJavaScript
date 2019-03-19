const fs = require('fs');
const util = require('util');

const readdirAsync = util.promisify(fs.readdir);

const path = './data';

