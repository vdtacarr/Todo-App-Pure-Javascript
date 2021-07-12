//Tüm Elementleri Seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList =   document.querySelector(".list-group");
const firstCardBody =  document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter =  document.querySelector("#filter");
const clearButton =  document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){

form.addEventListener("submit",addTodo);
document.addEventListener("DOMContentLoaded",loadAllTodosUI);
secondCardBody.addEventListener("click",deleteTodo);
filter.addEventListener("keyup",filtertodos);
clearButton.addEventListener("click",clearallTodos);

}

function clearallTodos(e){
     //Arayüzden todoları temizleme
    if(confirm("Tümünü silmek istediğinize emin misiniz ?")){
        todoList.innerHTML = "" ;

    }
   
}

function filtertodos(e){
const filterValue = e.target.value.toLowerCase();
const listItems = document.querySelectorAll(".list-group-item");
listItems.forEach(function(listItem){
    const text =listItem.textContent.toLowerCase();
    if(text.indexOf(filterValue) === -1){
        //Bulamadı
        listItem.setAttribute("style","display : none !important");
    }
    else{
        listItem.setAttribute("style","display : block");
    }
})
}

function deleteTodo(e){
if(e.target.className === "fa fa-remove"){
    e.target.parentElement.parentElement.remove();
    deletetodoFromStorage(e.target.parentElement.parentElement.textContent)
    showAlert("success","Todo Başarıyla silindi.");
}
}

function deletetodoFromStorage(deletetodo){
let todos = gettodosfromstorage();
todos.forEach(function(todo,index){
    if(todo === deletetodo){
        todos.splice(index,1);  //Arrayden değeri sil
    }
})
localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosUI(){
    let todos = gettodosfromstorage();
    todos.forEach(function(todo) {
        addtodotoUI(todo);

    })
}

function addTodo(e){
   const newtodo =  todoInput.value.trim();
   

   if(newtodo === ""){
    /*<div class="alert alert-danger" role="alert">
    This is a danger alert—check it out!
  </div> */
       showAlert("danger","Lütfen bir todo girin..");
   } 
   
   
   else{
       //if(searchInListItems(newtodo) !== false){
   
   addtodotoUI(newtodo);
   addtodotoStorage(newtodo);
   showAlert("success","Todo Başarıyla Eklendi.");

   
}
  // }


    e.preventDefault();
}

function gettodosfromstorage(){  //storagedan tüm todoları al
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addtodotoStorage(newTodo){

    let todos = gettodosfromstorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));


}

function showAlert(type,message){
const alert = document.createElement("div");
alert.className =`alert alert-${type}`;
alert.textContent = message;
firstCardBody.appendChild(alert);
window.setTimeout(function(){
alert.remove();
},1000)
}

function addtodotoUI(newtodo){//String değerini list item oalrak UI a ekle.
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newtodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";

}

/*function searchInListItems(value){

const listItems = document.querySelectorAll(".list-group-item");
listItems.forEach(function(listItem){
    const text = listItem.textContent.toLowerCase();
    if(text === value){
        showAlert("danger","Exists");
        return false;
        break;
    }
})
}*/
