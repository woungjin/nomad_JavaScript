


/*
1. 변수의 정의법
2. 배열 선언법
3. 객체 생성법
4. 함수 생성법
5.변수의 타입 확인 및 변경
6.html 접근하는 선택자(querySelector)
7.Event

//================================================================
// ==== ＊ 1. 변수 정의  ====
// ● const & let & var 의 차이점 
// const : 변하지 않을 값을 만들 때 사용 (주로 사용)
// let : 값의 변화가 있을떄 사용, (변화가 있을 변수에만 사용)
// var : 옛날 버전의 변수 생성, 
*/

/*
//================================================================
// ==== ＊ 2.배열 생성 방법 ====
// ● 배열 == const arr = ["","",""];
const arrStr = ["1234", "Hello" , "World"];
arrStr.push("My Name is ");
console.log(arrStr);
*/

/* 
//================================================================
// ==== ＊ 3.객체(Object) 생성방법 ====
// ● 객체 == const object = { : , : , }
const player = {
    name: "jin",
    points : 10,
    fat : true,
};
console.log(player.name)
console.log(player["name"])
player.fat = false;         // 객체의 참조로는 const의 값을 변경 가능 
player.lastName = "potato"; // 새 프로퍼티 생성가능
console.log(player)
*/


/*
//================================================================
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
*/

/*
//================================================================
// ==== ＊ 5.변수의 타입 확인 & 변경 방법 ====

// ● parseInt / ● isNaN() = is Not a Number 숫자가 아니라면 true 
const age = parseInt(prompt("How old are you?")); // parseInt : String -> Int

// isNaN = 숫자형에 대헤 boolean형태로 값을 반환함
console.log(isNaN(age)); // isNan [ string : true / int : false를 반환 ] 
console.log(age)
if(isNaN(age) || age <0) {
    console.log(age+"는 올바른 숫자가 아닙니다 다시 입력해 주세요.");
} else if(age < 18) {
    console.log("you are too young.")
} else if (age >=18 && age <= 50) {
    console.log("you can drink")
} else if (age >50 && age <= 80) {
    console.log("you should exercise")
} else if (age === 100) {
    console.log("wow yuou are wirse")
} else if(age > 80) {
    console.log("you can do whatever you want.")
}
*/


/* 주석처리 
//================================================================
// ==== ＊ 6.자바스크립트로 html에 접근하여 사용하기 ====

// ● getElementById
// 특정한 id의 값을 불러올때 사용 
// const title = document.getElementById("title");
// title.innerText = "Got you";

// console.log(title.id)
// console.log(title.className);

// ● getElementsByClassName
// 대량의 ClassName을 가져올 때 사용 
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// ● getElementsByTagName
// 특정한 모든 태그들을 가져옴 ex) button, h1, div...
const test1 = document.getElementsByTagName("h1");
console.log(test1)

// ● querySelector()
// css의 형식으로 알맞은 셀렉터 한개를 불러올 수 있다 (자주 이용)
// getElementsByClassName 의 업그레이드버전으로 명시를 제대로 해줘야함 
const title = document.querySelector(".hello h1")
const test2 = document.querySelector(".hello h1:first-child");
console.log(title);

title.innerText = "hello I'm querySelector";
console.log(title);

// ● querySelectorAll
const titles = document.querySelectorAll(".hello h1")
console.log(titles)
titles[2].innerText = "dfsfd";
*/


// //================================================================
// // ==== ＊ 7. Event 생성및 활용 ====
// // ● addEventListener("event", function) : event발생시 function을 실행시킨다 (괄호는 넣지않는다)
// const h1 = document.querySelector(".hello h1:first-child");
// function handleTitleClick() {
//     h1.style.color = 'red';
// }
// function handelMouseEnter() {
//     h1.innerHTML = "Mouse is here!";
// }
// function handelMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize() {
//     document.body.style.backgroundColor = "purple";
// }
// function handleWindowCopy() {
//     alert("copy")
// }
// function handleWindowOffline() {
//     alert("no Wifi");
// }
// function handleWindowOnline() {
//     alert("ohhh good!");
// }
// // title.addEventListener("click", handleTitleClick); // 클릭시 작동
// h1.addEventListener("mouseenter", handelMouseEnter ); // 마우스올리면 작동
// h1.addEventListener("mouseleave", handelMouseLeave ); // 마우스가 벗어나면 작동

// // ● onclick() 
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handelMouseEnter;

// // ● window.addEventListener : window에서 일어나는 다양한 event 처리
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

//================================================================
// ==== ＊ 8.자바스크립트로 html에 접근하여 사용하기 ====
// ● 
// const h1 = document.querySelector(".hello h1:first-child");

// function handleH1Click() {
//     const Color = h1.style.color // 중복코드 변화 
//     let newColor; // 값이 변하는 let을 생성함으로서 newColor 에 대한 값을 변경함
//     if(Color === "blue") {
//         newColor = "tomato"; 
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor; // newColor의 값을 대입시킴
// }

// h1.addEventListener("click", handleH1Click);

//================================================================
// ==== ＊ 9. 자바스크립트로 css활용하기 ====
// 자바스크립트로 style을 바로 건드는게 아닌 style에 값을 가져와 적용만해주는것
// ● className & classList
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
//     const clickedClass = "clicked"; // 여러개의 class를 가질 수 있다.
//     if(h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass); // h1.className = "";
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }
// h1.addEventListener("click", handleTitleClick);

// // ● toggle() 
// // : classList에서 className이 있는지를 확인하고 존재하면 삭제하고 없으면 생성
// function handleTitleClick() {
//     const clickedClass = "clicked"; 
//     h1.classList.toggle("clicked"); // toggle()하나로 코드를 줄임
// }
// h1.addEventListener("click", handleTitleClick);

//================================================================
// ==== ＊ 10. 함수동작의 이벤트  ====
// ● .preventDefault()
// : 실행되는 대상에 대한 함수의 정보를 나타낼때 사용하며 해당 event를 정지시킨다 
// ● localStorage 
// : 브라우저에서 값을 저장해서 나중에 가져다 쓸 수 있다.
// localStorage.removeItem() / .getItem() / .setItem() 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

loginForm.addEventListener("submit", onLoginSubmit); // 1. 사용자 로그인 버튼 클릭시 작동
function onLoginSubmit(event) { // 2.함수실행 / event : 실행되는 대상에 대한 함수의 정보를 나타냄 
    event.preventDefault(); // 3. 뭐가 클릭되는지 정보를 알고싶을때 실행되는 이벤트를 중단함
    loginForm.classList.add(HIDDEN_CLASSNAME); // 4. form숨기기
    const username = loginInput.value; // 5. 사용자가 입력한 정보 가져오기
    localStorage.setItem(USERNAME_KEY,username); // 6. 유저정보 저장
    // greeting.innerText = "Hello " + username; // 일반적인 string 합치기
    // greeting.innerText = `Hello ${username}`; // 최신방법의 string 합치기
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username); // 7. 문구 나타내는 함수 실행 
}

function paintGreetings(username) { 
    greeting.innerHTML = `Hello ${username}`; // 2. 유저정보 값 입력
    greeting.classList.remove(HIDDEN_CLASSNAME); // 3. hidden 클래스 삭제
    
}

const savedUsername =  localStorage.getItem(USERNAME_KEY); // 1. 값이 있는지 여부
if(savedUsername ===null) { // 2. 값의 유무 판단
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 3. 값이없다면 form나타내기
    loginForm.addEventListener("submit", onLoginSubmit); // 4. 실행
} else {
    paintGreetings(savedUsername); // 5. // 값이있다면 실행
}

//================================================================
// ==== ＊ 11.   ====