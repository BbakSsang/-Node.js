var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function (error, filelist) {//filelist = 배열형식 
    console.log(filelist);
})
