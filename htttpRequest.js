let todosData = [];

const getData = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      todosData = response.data;
      todosData.length = 5; //limit to 10
      createTableData(todosData);
    })
    .catch((error) => {
      console.log(error);
    });
};

//create table data of any size, base on first obj in json
function createTableData(data) {
  const dataSection = document.getElementById("data-section");
  const table = document.createElement("table");

  //Create table header
  let keyArray = Object.keys(data[0]);
  const headerRow = document.createElement("tr");
  keyArray.forEach((element) => {
    const th = document.createElement("th");
    th.innerText = element.toUpperCase();
    headerRow.append(th);
  });
  table.append(headerRow);

  //Create table data , loop each object and create td for each
  todosData.forEach((obj) => {
    const dataRow = document.createElement("tr");
    for (const value in obj) {
      const td = document.createElement("td");

      //if value is another obj
      if (typeof obj[value] === "object") {
        //Get first object value
        td.innerText = Object.values(obj[value])[0];
      } else {
        td.innerText = obj[value];
      }
      dataRow.append(td);
    }
    table.append(dataRow);
  });

  dataSection.append(table);
  document.getElementById("get-data").innerHTML = "";
  document.getElementById("close-data-button").style.display = "block";
}

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
