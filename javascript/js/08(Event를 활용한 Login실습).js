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
    logout.classList.remove(HIDDEN_CLASSNAME); 
    paintGreetings(savedUsername); // 5. // 값이있다면 실행
}
