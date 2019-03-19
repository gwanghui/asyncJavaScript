const fs = require('fs');

const readFileAsync = (filePath, options) => {
    // 1. pending 2. resolve 3. reject
    return new Promise((resolve, reject) =>{
        fs.readFile(filePath, options, (err, data) => {
            if(err) {
                reject(err);
            }else {
                resolve(data);
            }
        });
    });
};

module.exports = {
  readFileAsync
};
