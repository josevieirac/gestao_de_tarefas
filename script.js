let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    alert("Digite uma tarefa válida!");
    return;
  }

  tasks.push({text: taskText, completed: false});
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const  checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed =checkbox.checked;
      renderTasks();
    });

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.style.marginLeft = "10px";

    removeButton.addEventListener("click", () => {
      removeTask(index);
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);

    list.appendChild(li);
  }); 
}

function removeTask(index){
  tasks.splice(index, 1);

  renderTasks();
}