let to_be_deleted_task = document.getElementById('task1');
let tasks = document.querySelector('.lists');
let taskCount = document.querySelector('#counter');

let completedTask = 0;
const fragment = new DocumentFragment();

function addTask() {
    new_task = document.getElementById('input-field');
    var taskDiv = document.createElement('div');
    var task = document.createElement("li");
    var image = document.createElement("img");
    var checkImage = document.createElement("img");

    checkImage.src = 'tickMark.png';
    checkImage.classList.add('done');

    image.src = 'trash.png';
    image.classList.add('trash');

    taskDiv.classList.add('task');

    task.innerHTML = new_task.value;

    taskDiv.append(task, checkImage, image);
    fragment.append(taskDiv);
    tasks.append(fragment);

    image.addEventListener('click', ()=> {
        let taskToBeDeleted = image.parentNode;
        taskToBeDeleted.remove();
    })
    
    checkImage.addEventListener('click', ()=> {
        completedTask++;
        let taskToBeDeleted = image.parentNode;
        taskToBeDeleted.remove();
        
        taskCount.innerText = completedTask;
    })
}