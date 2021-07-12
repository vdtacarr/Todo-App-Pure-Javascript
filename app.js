// const element = document.querySelector("#clear-todos");

// let element2 = document.querySelectorAll("li:nth-child(odd)");
// element.style.color = "#000";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.innerHTML = "<span style :'color:green'>Silin </span>";
// console.log(element2);   

/* <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>                */
// const newlink = document.createElement("a");
// newlink.id = "clear-todos";
// newlink.className = "btn btn-danger";
// newlink.href = "https://www.google.com.tr";
// newlink.target = "_blank";
// newlink.appendChild(document.createTextNode("Farklı sayfaya git"));

// const cardbody = document.getElementsByClassName("card-body")[1];
// cardbody.appendChild(newlink);
// console.log(newlink);
// console.log(cardbody);

// const todolist = document.querySelector(".card-body .list-group");
// const todos =  document.querySelectorAll(".list-group-item");
// todos[0].remove();
// console.log(todolist);
// console.log(todos);



// const filter = document.getElementById("filter");
// const todoform = document.getElementById("todo-form");
// todoform.addEventListener("submit",submitForm);
// function submitForm(e){
//     console.log("Submit eventi");
//     e.preventDefault();
// }
// filter.addEventListener("focus",function(e) {
//     console.log(e.target.placeholder);
// })

// document.addEventListener("keydown",run);
// function run(e){
//     console.log(e.key);
// }
// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup",changeText);
// function changeText(e){
//     header.textContent = e.target.value;
// }

// const cardbody = document.querySelectorAll(".card-body")[1];
// const title = document.querySelector("#tasks-title");

// cardbody.addEventListener("mouseenter",run);
// cardbody.addEventListener("mouseleave",run);

// function run(e){
//     console.log(e.type);
// }
// const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(){

//     console.log("SAYFA yÜKLENDİ");
// }
// const cardbody = document.querySelectorAll(".card-body")[1];
// cardbody.addEventListener("click",run);
// function run(e){
//     if(e.target.className == "fa fa-remove"){
//         console.log("silme işlemi");

//     }
// }
// const getlangs =() => ["python","java","C++"];
// const  [lang1,lang2,lang3] = getlangs();
// console.log(lang1,lang2,lang3);
// const langs =["python","java","C++"];
// console.log(...langs);

// const addNumbers = (a,b,c) => console.log(a+b+c);
// numbers = [100,100,200];
// addNumbers(...numbers);

// const cities = new Map();
// cities.set("ANkara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// cities.forEach(function(value,key){
// console.log(key,value);
// })
// function Employee(name,age,salary){
//         this.name = name ;
//         this.age = age;
//         this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("name: " + this.name + "Yaş : " + this.age + "Maaş: "+ this.salary);
// } 
// const emp = new Employee("Vedat",25,5500);
// console.log(emp);
// class Employee{
//     constructor(name,age,salary){
//         this.name = name ;
//         this.age = age;
//         this.salary = salary;
//     }
//     showInfos(){
//         console.log("name: " + this.name + "Yaş : " + this.age + "Maaş: "+ this.salary);
//     }
// }
// const emp = new Employee("vedat",25,5500); 
// console.log(emp);
// class Person {
//     constructor(name,age){  
//         this.name = name; 
//         this.age = age;
//     }
//         showInfos() {
//              console.log("name: " + this.name + "Yaş : " + this.age );
//         }
            
//     }
// class Employee extends Person{
//     constructor(name,age,salary){
//     // this.name = name ;
//     // this.age = age;
//     super(name,age);
//     this.salary = salary;
// }
// }