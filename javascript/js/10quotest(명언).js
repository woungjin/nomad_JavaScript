const quotes = [
    {
        quote: "목표를 잡고 계획을 하지말고 맡아진 일에대헤 최선을 다해보자",
        author: "-누군가-"
    },
    { 
        quote: "내일 해야할 6개의 과제를 적는다 ",
        author: "-유투버-"
    },
    {
        quote: " 회사는 회사다 어디든 비슷하다",
        author: "-이진웅-"
    },
    {
        quote: "어디든 꼰대 야근은 존재하며 야근수당은 없다",
        author: "-이진웅-"
    },
    {
        quote: "무슨일이든 하면 하게되고 시간은 흐른다 ",
        author: "-누군가-"
    },
    {
        quote: "자그마한 상처에 내 자신을 버리지말자 상처를 봉합하자",
        author: "홀리"
    },
    {
        quote: "포기는 너무많이해봣다 그러니 포기를 포기하지말자",
        author: "이진웅"
    },
    {
        quote: "유재석은 말한다 모든것을 만족 할 수 없다고 하루하루 열심히 살자",
        author: "-유재석-"
    },
    {
        quote: "나에게 마지막 개발자로서의 길이 생긴다면 다시는 나에게 독이되고 무책임한 사람이 되지않겠다 다짐합니다",
        author: "-이진웅-"
    },
    {
        quote: " 무언가를 최고로 잘할 필요는 없다 하지만 내가생각하는 범위내에서 최선을 다하지말고 그걸 벗어나서 최선을 다하는 혼신을 다하자 최고로 잘할필요는 없다 하지만 최선을 다해볼 필요는 있다 내 인생이 성공인지 실패인지는 모른다 그저 살아가는 동안 최선을 다하는것이다 ",
        author: "-유재석-"
    },
    {
        quote: "고통이 우릴 끝낼건지 아니면 더 강하게 만들건지 우리의 선택에 달려있다",
        author: "-홀리-"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;