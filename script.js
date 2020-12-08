const task = document.getElementById('task');
const button = document.getElementById('button');
const pTag = document.getElementById('noText');
const allDoneText = document.getElementById('allDoneText');
const listContainer = document.getElementById('list-container');

button.addEventListener('click', addTask);
window.addEventListener('keydown', addTaskByEnter);
task.addEventListener('input', removePtag);

function removeItem(event){
    event.target.remove();
    if(listContainer.childElementCount === 1){
      allDoneText.classList.remove('none');
    }
}

function removePtag(){
  pTag.classList.add('none');
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
    function letShorten(cucc){
      if(cucc.length >= 62){
        let shortToDo = cucc.slice(0, 59);
        return `${shortToDo}...`;
      }
      return cucc;
    }
    listitem.setAttribute('title', `${task.value}`);
    listitem.innerHTML = `<span id='checkmark'>&#9745;</span> ${letShorten(task.value)}`;
    listContainer.appendChild(listitem);
    allDoneText.classList.add("none");
    task.value = '';
}
function addTaskByEnter(event){
  if (event.keyCode === 13){
    addTask();
  }
}
