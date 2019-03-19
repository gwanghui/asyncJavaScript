const co = require('co');
const fs = require('fs');
const util = require('util');

const {readFileAsync} = require('./util/fsPromise');
const readdirAsync = util.promisify(fs.readdir);

const path = './data';

co(function *() {
   const files = yield readdirAsync(path);

   for(const file of files) {
       const data = yield readFileAsync(`${path}/${file}`, 'utf-8');

       const {text} = JSON.parse(data);
       console.log(text);
   }
});
