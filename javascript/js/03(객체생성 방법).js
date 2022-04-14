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
 
