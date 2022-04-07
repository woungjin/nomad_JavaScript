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
h1.addEventListener("mouseenter", handelMouseEnter ); // 마우스올리면 작동
h1.addEventListener("mouseleave", handelMouseLeave ); // 마우스가 벗어나면 작동

// ● onclick() 
h1.onclick = handleTitleClick;
h1.onmouseenter = handelMouseEnter;

// ● window.addEventListener : window에서 일어나는 다양한 event 처리
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);