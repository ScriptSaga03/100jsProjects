let input=document.getElementById('input');
let button=document.getElementById('button');

let container=document.getElementsByClassName('container')[0];




button.addEventListener('click',()=>{
    const task=input.value;

    if(task===""){
        alert("please enter a task")
        return
    }
    // create div and delete button
    let div=document.createElement('div');
    div.textContent=task;
    div.classList.add('task-item')
    let deletebutton=document.createElement('button');
    deletebutton.innerHTML=`<i class="fas fa-trash"></i>`;
    deletebutton.classList.add('delete-btn');


    // remove items
    deletebutton.addEventListener('click',()=>{
        container.removeChild(div)
    })


    // add child
    div.appendChild(deletebutton)
    container.appendChild(div)
    input.value='';
})