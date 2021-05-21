var fs = require('fs');

/*
//readFileSync
console.log('a')
var result = fs.readFileSync('syntax/sample.txt','utf8');

console.log(result);
console.log('c')
*/

console.log('a')
var result = fs.readFile('syntax/sample.txt','utf8',function(err,result){

console.log(result)
}); //sync가있으면 동기적 없으면 비동기적   //readfilesync는 리턴값을 주는데 readfile은 리턴값이 없음 함수를 3번째 인자로 줘야한다 읽고->utf->함수실행(에러가 있다면 에러인자 2번째파일내용을 인자로 전달 )

console.log(result);
console.log('c')