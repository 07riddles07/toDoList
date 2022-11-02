const inputField = document.querySelector(".inputField");
const btn = document.querySelector(".btn");
const toDoContainer = document.querySelector(".toDoContainer");

const lang = navigator.language; // определяет язык браузера
let date = new Date(); 
let dayNumber = date.getDate(); 
let month = date.getMonth(); // получение месяца
let dayName = date.toLocaleString(lang,{weekday: 'long' }); // получения названия дня недели
let monthName = date.toLocaleString(lang,{ month: 'long' }); // получение названия месяца
let year = date.getFullYear(); // получение текущего года  

let displayDate = `${dayName}, 
${monthName} ${dayNumber}, ${year}`;

document.getElementById('monthName').innerHTML= displayDate;

btn.addEventListener("click", list) 
function list() {
  const item = document.createElement("li");
  item.innerText = inputField.value;

  if (inputField.value.length === 0) {
    return false;
    }

  item.classList.add("toDoAdded");
  toDoContainer.appendChild(item);
  inputField.value = "";

  item.addEventListener("click", () => {
    item.classList.add("toDoCompleted");
  });

  item.addEventListener("dblclick", () => {
    toDoContainer.removeChild(item);
  });

}

document.addEventListener('keydown', function(e){
  if (e.key === "Enter") {
    list()

  }})








