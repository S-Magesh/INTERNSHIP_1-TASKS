const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      <button class="complete-btn" onclick="completeTask(this)">Done</button>
    </div>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle("completed");
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const span = li.querySelector(".task-text");
  const newTask = prompt("Edit your task:", span.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim();
  }
}
