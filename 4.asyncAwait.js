const co = require('co');
const fs = require('fs');
const util = require('util');

const {readFileAsync} = require('./util/fsPromise');
const readdirAsync = util.promisify(fs.readdir);

const path = './data';

(async () => {
   const files = await readdirAsync(path);

   for(const file of files) {
       const data = await readFileAsync(`${path}/${file}`, 'utf-8');

       const {text} = JSON.parse(data);
       console.log(text);
   }
})();
