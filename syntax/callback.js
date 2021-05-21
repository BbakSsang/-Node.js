/*function a()
{
    console.log('a');
}*/
var a = function ()//위 아래가 같다 이 말인즉슨 자바스크립트에서는 함수가 값이다*변수가 될수있다*
{
    console.log('a');
}

function slowfunc(callback) //함수를 변수처럼 선언이 되니 다른함수의 매개변수로 함수가 들어갈수있다 콜백함수..?
{
callback();
}
slowfunc(a);