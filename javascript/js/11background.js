 //================================================================
// ==== ＊ 13. javascript를 활용한 배경이미지 입히기 ====
// ● createElement()
// : Element생성시 사용
// ● appendChild()
// : 해당 Element를 body에 적용시킬때 사용
const images = ["0.jpg","1.jpg","2,jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

console.log(bgImage)

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);