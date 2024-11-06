
document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("removeTaskButton").addEventListener("click", removeTask);

function addTask() {
    let task = document.getElementById("taskInput").value;
    let listItem = document.createElement("li");
    listItem.textContent = task;

    document.getElementById("taskList").appendChild(listItem);
}

function removeTask() {
    let task = document.getElementById("taskInput").value;
    let taskList = document.getElementById("task")
}