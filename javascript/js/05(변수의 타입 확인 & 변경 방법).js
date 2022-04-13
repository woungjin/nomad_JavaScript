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