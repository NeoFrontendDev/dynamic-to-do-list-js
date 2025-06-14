document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    const savedTasks = localStorage.getItem("tasks");
    let tasks = savedTasks ? JSON.parse(savedTasks) : [];
  
    function createTaskElement(taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.classList.add("task-item");

      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';

      removeButton.onclick = function () {
        taskList.removeChild(li);
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      };

      li.appendChild(removeButton);
      taskList.appendChild(li);
    }
  
    tasks.forEach(taskText => {
      createTaskElement(taskText);
    });

    function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      createTaskElement(taskText);
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = "";
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
