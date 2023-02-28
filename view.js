//View
function render() {
  //reset our list
  document.getElementById("todoList").innerHTML = "";

  //create
  let list = document.getElementById("todoList");
  todos.forEach((todo) => {
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = todo.id;
    checkBox.onchange = checkfunc;
    checkBox.checked = todo.isDone;
    checkBox.style.margin = "0px";

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    // editButton.style.marginLeft = "12px";
    editButton.id = todo.id;
    editButton.onclick = editButtonFunc;

    let container = document.createElement("div");
    container.className = "todo-container";

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = onDelete(todo);
    //deleteButton.id = todo.id
    // container.innerText = todo.title + " " + todo.date;

    todoCheckBoxContainter = document.createElement("div");
    todoTitleContainter = document.createElement("div");
    todoButtonContainter = document.createElement("div");

    //add to did container
    todoCheckBoxContainter.appendChild(checkBox);
    todoTitleContainter.innerHTML = todo.title + " " + todo.date;

    todoButtonContainter.appendChild(editButton);
    todoButtonContainter.appendChild(deleteButton);

    container.appendChild(todoTitleContainter);
    container.appendChild(todoButtonContainter);
    container.prepend(todoCheckBoxContainter);

    list.appendChild(container);
  });
}

function render_isEditing(id) {
  //reset our list
  document.getElementById("todoList").innerHTML = "";

  //render isEditing
  let list = document.getElementById("todoList");

  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Rename todo";
  textInput.id = "update-input-title";

  let dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "update-input-date";

  let cancelButton = document.createElement("button");
  cancelButton.innerText = "cancel";
  cancelButton.style.marginLeft = "12px";
  cancelButton.id = id;
  cancelButton.onclick = cancelButtonFunc;

  let updateButton = document.createElement("button");
  updateButton.innerText = "Update";
  updateButton.id = id;
  updateButton.onclick = updateButtonFunc;

  list.appendChild(textInput);
  list.appendChild(dateInput);
  list.appendChild(cancelButton);
  list.appendChild(updateButton);
}

render();
