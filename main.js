let tasksLeft = 0;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        tasksLeft++;

        listItem.addEventListener("click", function() {
            toggleStrikethrough(listItem);
        }, false);
        
        listItem.innerHTML = `${taskText}`;

        taskList.appendChild(listItem);
        taskInput.value="";

    }
    
}

function toggleStrikethrough(element) {
    
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
        tasksLeft--;
    }

    if (tasksLeft === 0) {
        $("#taskList").after(alert("Parabéns, você terminou suas tarefas!"));
    }
}
