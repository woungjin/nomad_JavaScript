// ==== ＊ 4.function 생성 방법 ====
// ● function == function a () {}
function sayHello(nameOfPerson, age) {
    console.log("Hello! "+ nameOfPerson + age);
}

sayHello("jin", 10);
sayHello("dal", 20);
sayHello("test", 30);

function plus(num1, num2) {
    console.log(num1 + num2);
}
function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
divide(40, 2);

// 객체 내부에 함수 생성 
const player = {
    name: "nico",
    sayHello: function(otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

player.sayHello("lynn");

// 계산기 만들기 & return문 활용
const calculator = {
    plus : function(a,b) {
        return a+b;
    },
    min : function(a,b) {
        return a-b;
    },
    times: function(a, b) {
        return a*b;
    },
    div : function(a,b) {
        return a/b;
    },
    powerOf : function(a,b) {
        return a**b;
    },
};

const plusResult = calculator.plus(2,4);
const minusResult = calculator.min(plusResult, 5);
const tiemsResult = calculator.times(10, minusResult);
const divideResult = calculator.div(tiemsResult, plusResult)
const powerResult = calculator.powerOf(divideResult, minusResult);

document.write(plusResult)