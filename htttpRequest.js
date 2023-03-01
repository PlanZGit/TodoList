//HTTP GET
const getAllData = () => {
  axios
    .get("https://mockend.com/PlanZGit/TodoList/posts")
    .then((response) => {
      console.log(response);
      // createTableData(todosData);
    })
    .catch((error) => {
      console.log(error);
    });
};

//HTTP GET
const getData = () => {
  axios
    .get(`https://mockend.com/PlanZGit/TodoList/posts/${1}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

//HTTP POST
const postData = () => {
  axios
    .post(`https://jsonplaceholder.typicode.com/posts`, todos)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

//HTTP PUT
const updateData = () => {
  axios
    .put(`https://mockend.com/PlanZGit/TodoList/posts/${1}`, todos[0])
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

//HTTP DELETE
const deleteData = () => {
  axios
    .delete(`https://mockend.com/PlanZGit/TodoList/posts/${1}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

function closeData() {
  let button = document.getElementById("close-data-button");
  if (button.innerText === "Open") {
    button.innerText = "Close";
    document.getElementById("data-section").style.display = "block";
  } else {
    button.innerText = "Open";
    document.getElementById("data-section").style.display = "none";
  }
}

// //create table data of any size, base on first obj in json
// function createTableData(data) {
//   const dataSection = document.getElementById("data-section");
//   const table = document.createElement("table");

//   //Create table header
//   let keyArray = Object.keys(data[0]);
//   const headerRow = document.createElement("tr");
//   keyArray.forEach((element) => {
//     const th = document.createElement("th");
//     th.innerText = element.toUpperCase();
//     headerRow.append(th);
//   });
//   table.append(headerRow);

//   //Create table data , loop each object and create td for each
//   todosData.forEach((obj) => {
//     const dataRow = document.createElement("tr");
//     for (const value in obj) {
//       const td = document.createElement("td");

//       //if value is another obj
//       if (typeof obj[value] === "object") {
//         //Get first object value
//         td.innerText = Object.values(obj[value])[0];
//       } else {
//         td.innerText = obj[value];
//       }
//       dataRow.append(td);
//     }
//     table.append(dataRow);
//   });
//   dataSection.append(table);
// }
