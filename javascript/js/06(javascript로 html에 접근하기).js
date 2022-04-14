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
