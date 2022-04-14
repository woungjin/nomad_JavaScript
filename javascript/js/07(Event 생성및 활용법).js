// ==== ＊ 7. Event 생성및 활용 ====
// ● addEventListener("event", function) : event발생시 function을 실행시킨다 (괄호는 넣지않는다)
const h1 = document.querySelector(".hello h1:first-child");
function handleTitleClick() {
    h1.style.color = 'red';
}
function handelMouseEnter() {
    h1.innerHTML = "Mouse is here!";
}
function handelMouseLeave() {
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "purple";
}
function handleWindowCopy() {
    alert("copy")
}
function handleWindowOffline() {
    alert("no Wifi");
}
function handleWindowOnline() {
    alert("ohhh good!");
}
// title.addEventListener("click", handleTitleClick); // 클릭시 작동
h1.addEventListener("mouseenter", handelMouseEnter ); // mouseenter : 마우스올리면 작동
h1.addEventListener("mouseleave", handelMouseLeave ); // mouseleave : 마우스가 벗어나면 작동

// ● onclick() 
h1.onclick = handleTitleClick;
h1.onmouseenter = handelMouseEnter;

// ● window.addEventListener : window에서 일어나는 다양한 event 처리
window.addEventListener("resize", handleWindowResize); // resize : 웹페이지의 사이즈변동시 작동
window.addEventListener("copy", handleWindowCopy); // copy : ctrl + c 복사시 작동됨
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//================================================================
// ==== ＊ 8.자바스크립트로 html에 접근하여 사용하기 ====
const h1 = document.querySelector(".hello h1:first-child");

function handleH1Click() {
    const Color = h1.style.color // 중복코드 변화 
    let newColor; // 값이 변하는 let을 생성함으로서 newColor 에 대한 값을 변경함
    if(Color === "blue") {
        newColor = "tomato"; 
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor; // newColor의 값을 대입시킴
}

h1.addEventListener("click", handleH1Click);

//================================================================
// ==== ＊ 9. 자바스크립트로 css활용하기 ====
// 자바스크립트로 style을 바로 건드는게 아닌 style에 값을 가져와 적용만해주는것
// ● className & classList
const h1 = document.querySelector("div.hello:first-child h1"); 
function handleTitleClick() {
    const clickedClass = "clicked"; // 여러개의 class를 가질 수 있다.
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass); // h1.className = "";
    } else {
        h1.classList.add(clickedClass);
    }
}
h1.addEventListener("click", handleTitleClick);

// ● toggle() 
// : classList에서 className이 있는지를 확인하고 존재하면 삭제하고 없으면 생성
function handleTitleClick() {
    const clickedClass = "clicked"; 
    h1.classList.toggle("clicked"); // toggle()하나로 코드를 줄임
}
h1.addEventListener("click", handleTitleClick);

//
