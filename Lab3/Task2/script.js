const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAll);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const taskText = input.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(delBtn);

    list.appendChild(li);

    input.value = "";

    checkbox.addEventListener("change", function(){
        span.classList.toggle("done");
    });

    delBtn.addEventListener("click", function(){
        list.removeChild(li);
    });
}
function clearAll(){
    if(confirm("Delete all tasks?")){
        list.innerHTML = "";
    }
}
