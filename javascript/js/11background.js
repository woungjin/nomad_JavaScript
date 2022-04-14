 //================================================================
// ==== ＊ 13. javascript를 활용한 배경이미지 입히기 ====
// ● createElement()
// : Element생성시 사용
// ● appendChild()
// : 해당 Element를 body에 적용시킬때 사용 객체만을 저장할 수 있음 
// ● append()
// : 문자열등 객체 추가가능 appendChild()보다 많은것을 저장함  
const images = ["0.jpg","1.jpg","2,jpg"]; // 1. 이미지 배열 생성 

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 2. 이미지의 랜덤한 값을 가져옴

const bgImage = document.createElement("img"); // 3. img태그 생성 

bgImage.src = `img/${chosenImage}`; // 4. img태그에 src경로를 입력 

document.body.appendChild(bgImage); // 5. body에 img태그추가 prepend() : 맨처음에 더함 / append : 맨마지막에 더함