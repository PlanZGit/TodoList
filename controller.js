//Controller
const addToDo = () => {
  const title = document.getElementById("input-title");
  const date = document.getElementById("input-date");
  let isDone = false;
  createToDo(title.value, date.value);
  render();
};

// function deleteToDo(event) {
//   const deletButton = event.target
//   const idToDelete = deletButton.id
//   removeTodo(idToDelete)
//   render()
// }

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
