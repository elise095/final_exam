const task = document.getElementById('task');
const button = document.getElementById('button');
const pTag = document.getElementById('noText');
const allDoneText = document.getElementById('allDoneText');
const listContainer = document.getElementById('list-container');
//const checkmark = &#9745;;

button.addEventListener('click', addTask);
window.addEventListener('keydown', addTaskByEnter);
task.addEventListener('click', removePtag);
task.addEventListener('keydown', removePtagByEnter);

function removeItem(event){
    event.target.remove();
    if(listContainer.childElementCount === 1){
      allDoneText.classList.remove('none');
    }
}

function addTask(){
  if(task.value == ''){
    pTag.classList.remove("none");
    return;
  }
    let listitem = document.createElement('li');
    listitem.addEventListener('click', removeItem);

    if(task.value.includes('!')){
      listitem.classList.add("urgent");
    }

    listitem.innerHTML = `<span id='checkmark'>&#9745;</span> ${task.value}`;
    listContainer.appendChild(listitem);
    allDoneText.classList.add("none");
    task.value = '';
}
function addTaskByEnter(event){
  if (event.keyCode === 13){
    addTask();
  }
}
function removePtag(){
  pTag.classList.add('none');
}
function removePtagByEnter(event){
  if(event.keyCode === 13){
     removePtag();
  }
}