 //================================================================
// ==== ＊ 11. 시간초를 활용한 시계만들기 ====
// ● setInterval()
// : 기본 동작이 반복적으로 일어난다
// ● padStart(숫자,"추가할문자");
// : 맨앞에 문자를 숫자자릿수만큼 추가함
// ● padEnd(숫자, "추가할문자")
// : 맨뒤에 문자를 숫자자릿수만큼 추가함
// ● String().padStart() : padStart는 String만 취급하기에 String()으로 변환시켜주어야함
const clock = document.querySelector("h2#clock");

function getClock() { // 2. 함수실행
    const date = new Date(); // 3. 날짜 Date객체를 가져온다
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}` // 4. 날짜 정보 저장
}
getClock(); // 1. 웹페이지 실행시 바로 실행되게끔 한다 
setInterval(getClock, 1000); //  5.getClock()가 실행된후 1초마다 갱신됨 setInterval(실행함수 , 간격(시간));
// ● setTimeout() 
// : 기본 동작이 한번 일어난다 
setTimeout(getClock, 1000);  