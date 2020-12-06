const task = document.getElementById('task').value;
const button = document.getElementById('button');
const pTag = document.getElementById('noText');
const allDoneText = document.getElementById('allDoneText');
const listContainer = document.getElementById('list-container');

button.addEventListener('click', addTaskByClick);
button.addEventListener('keypress', addTaskByEnter);

function noInput(){
  if(task === ''){
    pTag.style.visibility = visible;
  }
}
noInput();



function addTaskByClick(){
    let listitem = document.createElement('li');
    listitem.innerHTML = `<span id='checkmark'>&#9745;</span> ${task}`;
    listContainer.appendChild(listitem);
}

