const co = require('co');
const fs = require('fs');
const util = require('util');

const {readFileAsync} = require('./util/fsPromise');
const readdirAsync = util.promisify(fs.readdir);

const path = './data';

(async () => {
    const files = await readdirAsync(path);
    const filesPromises = files.map((file) => {
        return readFileAsync(`${path}/${file}`, 'utf-8');
    });

    const resultArr = await Promise.all(filesPromises);
    resultArr.forEach((data)=>{
        const {text} = JSON.parse(data);
        console.log(text);
    })
})();
