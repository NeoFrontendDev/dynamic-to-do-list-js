document.addEventListener("DOMContentLoaded", () => {
    // Select key elements
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add functionality (example: adding tasks)
    addButton.addEventListener("click", () => {
        if (taskInput.value.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskInput.value;
            taskList.appendChild(listItem);
            taskInput.value = ""; // Clear input after adding task
        }
    });
});
