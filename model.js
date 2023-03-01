//Model - array data
let todos;

//Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos"));

//Check if array
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: "learn HTML",
      date: "09/30/2022",
      id: "id1",
      isDone: false,
      isEditing: undefined,
    },
    {
      title: "learn CSS",
      date: "09/30/2022",
      id: "id2",
      isDone: true,
      isEditing: undefined,
    },
    {
      title: "learn JavaScript",
      date: "09/30/2022",
      id: "id3",
      isDone: false,
      isEditing: undefined,
    },
  ];
}

//Set Date
let tDate = new Date();
document.getElementById("input-date").value =
  tDate.getFullYear() +
  "-" +
  (tDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  tDate.getDate().toString().padStart(2, "0");

//Save todo
function saveToDo() {
  //Save A string and associated with a key - localStorage.setItem('key','data');
  //return the string and associated with a key - localStorage.getItem('key');
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Creates a todo
function createToDo(title, dueDate) {
  const id = "" + new Date().getTime(); //change number to string Try TypeScript
  let checked = false;
  todos.push({
    title: title,
    date: dueDate,
    id: id,
    isDone: checked,
    isEditing: undefined,
  });

  saveToDo();
}

//Deletes a todo
function removeTodo(idToDelete) {
  //filter return array with filters remove
  //If the id matches idToDelete, return false , For everything else return true
  todos = todos.filter((todo) => {
    if (idToDelete === todo.id) {
      return false;
    } else {
      return true;
    }
  });

  saveToDo();
}
//Save todo checkbox
const setCheckBox = (idCheckBox, isChecked) => {
  todos.forEach(function (todo) {
    if (todo.id === idCheckBox) {
      todo.isDone = isChecked;
    }
  });

  saveToDo();
};

//Edit todo
function setIsEditing(id, IsEditing) {
  todos.forEach(function (todo) {
    if (todo.id === id) {
      todo.isEditing = IsEditing;
    }
  });
}

//update todo
function updateTodo(id, title, date) {
  todos.forEach(function (todo) {
    if (todo.id === id) {
      todo.isEditing = false;
      todo.title = title;
      todo.date = date;
    }
  });
}
