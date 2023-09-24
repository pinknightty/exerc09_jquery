function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskText}<li onclick="toggleStrikethrough(this)"></li>`;

        taskList.appendChild(listItem);
        taskInput.value="";
       
    }
    
}

function toggleStrikethrough(element) {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
    }
}


