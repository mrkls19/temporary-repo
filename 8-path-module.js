const path = require('path')


console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
//------------------------- foldername---folder inside folder -- the file inside the subfolder
console.log(filePath)


const base = path.basename(filePath)
// ------------view all the file inside the folder
console.log(base)


const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)