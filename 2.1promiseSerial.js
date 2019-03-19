const fs = require('fs');
const util = require('util');
const {readFileAsync} = require('./util/fsPromise');

const readdirAsync = util.promisify(fs.readdir);

const path = './data';

readdirAsync(path).then((files)=>{
    return files.reduce((promiseChain, file) => {
        return promiseChain.then((result)=>{
            return readFileAsync(`${path}/${file}` , 'utf-8')
                .then((data) => {
                return [...result, data];
            });
        });
    }, Promise.resolve([]));

}).then(results => {
    results.forEach((result)=>{
        const {text} = JSON.parse(result);
        console.log(text);
    });
});
