const fs = require('fs');
const util = require('util');
const {readFileAsync} = require('./util/fsPromise');

const readdirAsync = util.promisify(fs.readdir);

const path = './data';

readdirAsync(path).then((files)=>{
    const filesPromises = files.map((file) => {
        return readFileAsync(`${path}/${file}`, 'utf-8');
    });

    return Promise.all(filesPromises);
}).then(results => {
    results.forEach((result)=>{
        const {text} = JSON.parse(result);
        console.log(text);
    });
});
