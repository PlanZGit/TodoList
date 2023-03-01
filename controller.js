//Controller
const addToDo = () => {
  const title = document.getElementById("input-title");
  const date = document.getElementById("input-date");
  let isDone = false;
  createToDo(title.value, date.value);
  title.value = "";
  render();
};

function checkfunc(event) {
  // console.log(event)
  setCheckBox(event.target.id, event.target.checked);
  // render()
}

function editButtonFunc(event) {
  setIsEditing(event.target.id, true);
  render_isEditing(event.target.id);
}

function updateButtonFunc(event) {
  const title = document.getElementById("update-input-title");
  const date = document.getElementById("update-input-date");
  let id = event.target.id;
  updateTodo(id, title.value, date.value);
  setIsEditing(id, false);
  render();
}

function cancelButtonFunc(event) {
  setIsEditing(event.target.id, false);
  render();
}

const onDelete = (todoToDelete) => {
  //button onclick set to function, param is object
  return () => {
    console.log(todoToDelete); //object when clicked
    removeTodo(todoToDelete.id); //object id
    render();
  };
};

//log todos
const logList = () => {
  console.log(todos);
};

// Get the input field
var input = document.getElementById("input-title");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("press-me").click();
  }
});
