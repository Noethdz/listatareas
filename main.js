const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function onKey() {
    let tecla = String.fromCharCode(event.keyCode);
    console.log("key pressed ", String.fromCharCode(event.keyCode));

    if (tecla == " ") {
        taskInput.value.trim();
        taskInput.placeholder = "No has ingresado un caracter valido";
        taskInput.style.color = "rgb(157, 94, 9)";
        taskInput.style.fontWeight = "bold";
    }
}

function cambiarInput() {
    taskInput.addEventListener("click", () => {
        taskInput.placeholder = "Nueva Tarea";
        taskInput.style.color = "black";
        taskInput.style.fontWeight = "normal";
    });
}

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const taskItem = document.createElement("li");

        taskItem.innerHTML = `<span>${taskText}</span>
        <button class="deleteBtn">X</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskItem.querySelector(".deleteBtn").addEventListener('click', () => {
            taskItem.remove();
        });

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        })
    }

    if (taskText == "") {
        taskInput.placeholder = "No has ingresado tarea";
        taskInput.style.color = "red";
        taskInput.style.fontWeight = "bold";
        cambiarInput();
    }
}