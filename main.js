let addBtn = document.getElementById("add");
let container = document.getElementById("list");
let inputElement = document.getElementById("input-field");


addBtn.addEventListener('click', function(){
 var paragraph = document.createElement("p");
 paragraph.classList.add("paragraph");
 paragraph.innerText = inputElement.value;
 container.appendChild(paragraph);
 inputElement.value="";
 
 var cancel = document.createElement("h2");
 cancel.classList.add("remove");
 cancel.innerText = "×";
 container.appendChild(cancel);
 
 paragraph.addEventListener('click', function(){
 paragraph.style.textDecoration ="line-through";
 });
 
 
 cancel.addEventListener('click', function(){
  container.removeChild(cancel);
  container.removeChild(paragraph);
 })
 
});

 