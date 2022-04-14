const toDoForm = document.querySelector("#todo-form"); // 1. form의 태그를 가져옴 
const toDoInput = toDoForm.querySelector("input"); // 2. form태그의 input을 가져옴
const toDoList = document.querySelector("#todo-list"); // 3. ul태그를 가져옴 

function handleToDoSubmit(event) { // 5. form의  submit 함수를 실행 
    event.preventDefault(); // 6. submit 중단
    const newTodo = toDoInput.value; // 7. value값 저장
    toDoInput.value = ""; // 8. 값 전달시 다시 input내용을 비움
}

toDoForm.addEventListener("submit",handleToDoSubmit); // 4. form의 submit event를 추가함