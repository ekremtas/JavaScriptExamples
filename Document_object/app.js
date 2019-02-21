// let value;

// value = document.scripts;

// value = document.links[4].getAttribute("class");
// value = document.links[1].getAttribute("href");
// value = document.body;
// value = document.links[2].className;
// value = document.links[2].classList;
// //value = document.links[0].href;


// value = document.getElementById("important");
// value = document.getElementById("todo");
// value = document.getElementById("todo-form");

// value = document.getElementsByClassName("list-group-item");
// value = document.getElementsByClassName("card-header");
// value = document.getElementsByClassName("btn-dark");


// value = document.getElementsByTagName("li");

// value = document.querySelector("li");

// value = document.querySelector(".btn-dark");

// value = document.querySelector("#important");

// value = document.querySelectorAll("li")[1];
// value = document.querySelectorAll("li");

// value.forEach(function(el){
//     console.log(el);
// });

//console.log(value);


// const value = document.querySelector("#clear-todos");
// let values = document.querySelector("#clear-todos").textContent;
// let valuess = document.querySelector("#clear-todos");
// document.querySelector("#clear-todos").className = "btn btn-danger";

// document.getElementById("ekrem").className = "btn btn-primary";
// document.getElementById("ekrem").style.backgroundColor = "#000";

// let ekrem = document.querySelector("#clear-todos").textContent = "Change My Name";
// //values = "Change My Name";




// console.log(ekrem);
// console.log(values);
// console.log(value);


// let x = document.querySelectorAll("li:nth-child(even)");

// x.forEach(function(deger){
//                             deger.style.color="green";
//                             deger.style.backgroundColor="yellow";

//                         });


// console.log(x);


// const a = document.querySelector(".list-group");
// const b = document.querySelector(".list-group-item:nth-child(2)");
// const c = document.querySelector(".card.row");

// console.log(c);

// let d = c.children;
// d = c.children[2].children[1].textContent="Ekrem TAŞ";

// console.log(d);


// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id="deneme";
// newLink.className="btn btn-primary";
// newLink.href="https://www.google.com";
// newLink.target="_blank";

// newLink.appendChild(document.createTextNode("Google'ye gider."));

// cardbody.appendChild(newLink);

// console.log(newLink);


//          DİNAMİK ELEMENT SİLME
// const ListGroup = document.querySelector("ul.list-group");
// const ListGroupItem = document.querySelectorAll("li.list-group-item");

// //ListGroup.remove();
// //ListGroup.removeChild(ListGroup.lastElementChild);
// ListGroup.removeChild(ListGroupItem[1]);
// ListGroup.removeChild(ListGroupItem[3]);

// console.log(ListGroup);
// console.log(ListGroupItem);


// const CARDBODY = document.querySelectorAll(".card-body")[1];
// const CARDBODY2 = document.getElementsByClassName("card-body")[1];

// const NewElement = document.createElement("h2");

// NewElement.className = "card-title";
// NewElement.style.color="red";
// NewElement.id= "card-title";
// NewElement.classList.add("NewClass");
// NewElement.style.backgroundColor="white";
// //NewElement.classList.remove("card-title");
// //NewElement.textContent="Merhaba";
// NewElement.appendChild(document.createTextNode("Merhabalar"));

// const oldEl = document.querySelector("#tasks-title");

// CARDBODY.replaceChild(NewElement,oldEl);

// console.log(oldEl);
// console.log(NewElement);
// console.log(CARDBODY);
// console.log(CARDBODY2);



const todoInput = document.getElementById("todo");
let elem;
elem = todoInput;
elem = todoInput.classList;

//elem = todoInput.placeholder;
//elem = todoInput.getAttribute("placeholder");
document.getElementById("todo").setAttribute("placeholder","Yaz Hadi");
document.getElementById("todo").setAttribute("title","asdasd");
// elem = todoInput.setAttribute("placeholder","ekrem");
document.getElementById("todo").removeAttribute("title");

console.log(todoInput);







