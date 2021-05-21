# DailyNode.js
https://opentutorials.org/module/3549

#### 상수
JS는 상수의 사칙연산을 지원한다 
ex) console.log(1)-->1
    console.log(1+3)-->4 ...
    <hr>
#### string
' ' or " " 짝만 이루면 상관없다
ex)'1' + '2' = 12로 출력
문자열로 할 수 있는 글자 수 계산 str.length 등..
<hr>
#### var
var a=1; console.log(a)-->1
한번 var로 변수를 선언하면 그 뒤 수정에는 var를 사용할 필요 없다

#### template
var a = "박상현"
`Lorem Ipsum is ${a}simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` 과 같이` 를 시작과 끝에 붙임으로써 템플릿임을 지정할 수 있다(물결아래)
+변수는 ${변수} 그 외 <pre>와 같이 줄바꿈 자유

5-16
###동기적 비동기적 nodejs는 비동기적으로 작업을 해야한다

var fs = require('fs');
---
/*
//readFileSync
console.log('a')
var result = fs.readFileSync('syntax/sample.txt','utf8');

console.log(result);
console.log('c')
*/

console.log('a')
var result = fs.readFile('syntax/sample.txt','utf8',function(err,result)//여긴 비동기적실행 
{

console.log(result)
}); //sync가있으면 동기적 없으면 비동기적   //readfilesync는 리턴값을 주는데 readfile은 리턴값이 없음 함수를 3번째 인자로 줘야한다 읽고->utf->함수실행(에러가 있다면 에러인자 2번째파일내용을 인자로 전달 )

console.log(result);
console.log('c')

결과로는 a->b->c 그 이유로는 b를 처리하는시간에 간편한 c를 출력하고 b처리가 끝나면 출력하기 때문
---
###callback 함수
/*function a()
{
    console.log('a');
}*/
var a = function ()//위 아래가 같다 이 말인즉슨 자바스크립트에서는 함수가 값이다*변수가 될수있다*
{
    console.log('a');
}

function slowfunc(callback) <b>함수를 변수처럼 선언이 되니 다른함수의 매개변수로 함수가 들어갈수있다 콜백함수..?</b>
{
callback();
}
slowfunc(a);
---
###pm2 
pm2 설치
npm install pm2 -g
만약에 오류가 난다면 sudo를 입력 "윈도우에서는 choco를 인스톨 후 choco install sudo하면 이후 sudo 사용 가능"
https://chocolatey.org/install 초코의 홈페이지

pm2 명령어
시작 : pm2 start app.js  ++수정시 재시작하고싶으면 pm2 start app.js --watch(지켜보다가 수정발생시 자동재시작)
리스트 : pm2 monit or list
끄기 재시작 삭제: pm2 stop 'id' || pm2 restart 'id' || pm2 delete 'id'
로그확인 : pm2 log