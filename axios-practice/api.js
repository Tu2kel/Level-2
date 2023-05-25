/*FOR TESTING OUT OF LEVEL 2 APP.JS*/

// GET ; seats all in container = #todo-list

const todoList = document.getElementById("akTodo-list");
// todoList.style.grid = "display";

function getData() {
  document.getElementById("akTodo-list").textContent = ""; // EMPTY'S OLD FORM
  axios
    .get("https://api.vschool.io/AkTodoList/todo")
    .then((res) => domData(res.data))
    .catch((err) => console.log(err));
}
//#region SETS THE TODOS TO THE DOM
function domData(data) {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    //LOOPS THRU domDATA FUNCTION PASSING DATA
    const div = document.createElement("div"); //CREATED DIV
    div.classList.add(data[i]._id); //
    todoList.appendChild(div); //ADDS DIVS IN CONTAINER ON DOM

    //TITLE
    const akTitle = document.createElement("h1");
    akTitle.textContent = "Title: " + data[i].title;
    akTitle.style.textDecoration = "overline underline";
    akTitle.style.fontStyle = "oblique";
    akTitle.style.fontSize = "35px"; // MAY CHANGE
    div.appendChild(akTitle);

    //DESCRIPTION
    const akDescription = document.createElement("p");
    akDescription.textContent = "Item: " + data[i].description;
    akDescription.style.textDecoration = "underline";
    akDescription.style.fontSize = "25px";
    div.appendChild(akDescription);

    // PRICE
    const akPrice = document.createElement("h2");
    akPrice.textContent = "Price: " + data[i].price;
    akPrice.style.textDecoration = "underline";
    div.appendChild(akPrice);

    //IMG
    const akImg = document.createElement("img");
    akImg.src = data[i].imgUrl;
    akImg.style.height = "300px";
    div.appendChild(akImg);
    akImg.style.border = " solid red";

    //DELETE
    const x = document.createElement("button"); // CREATE BUTTON
    x.textContent = "x"; // LABEL BUTTON
    x.id = "x";
    x.classList.add(data[i]._id); // ADDED ID
    div.appendChild(x);
    x.style.color = "red";
    x.style.background = "black";

    //LISTENS FOR CLICK TO DELETE
    x.addEventListener("click", function (e) {
      e.preventDefault();

      const id = e.target.parentElement.className;
      const targetId = e.target.className;
      console.log("Deleted", id);

      axios
        .delete(`https://api.vschool.io/AkTodoList/todo/${targetId}`)
        .then((res) => getData()) // REFRESHES AFTER DELETE BY
        .catch((err) => console.log(err));
    });

    // #endregion

    // CHECKBOX PUT
    const checkBox = document.createElement("input"); //CREATED
    checkBox.setAttribute("type", "checkbox"); // TYPE IS CHECKBOX
    checkBox.classList.add("checkbox");

    div.appendChild(checkBox); //APPEND CHECKBOX TO DOM
    if (data[i].completed === true) {
      //IF CHECKED DO THESE
      akTitle.style.textDecoration = "line-through";
      akTitle.style.color = "red";
      akDescription.style.textDecoration = "line-through";
      akDescription.style.color = "red";
      akPrice.style.textDecoration = "line-through";
      akPrice.style.color = "red";
      checkBox.checked = true;
    }

    checkBox.addEventListener("click", function (e) {
      const id = e.target.parentElement.className;

      console.log(id);

      if (checkBox.checked) {
        akTitle.style.textDecoration = "line-through";
        akDescription.style.textDecoration = "line-through";
        akPrice.style.textDecoration = "line-through";
        alert("Completed Task");
        
        const updates = {
          // CHECKS FOR CHECKED BOX
          completed: true,
        };

        axios
          .put(`https://api.vschool.io/AkTodoList/todo/${id}`, updates)
          .then((res) => getData())
          .catch((error) => console.log(error));
      } else if (!checkBox.checked) {
        akTitle.style.color = "yellowgreen";
        akDescription.style.textDecoration = "underline";
        akPrice.style.color = "green";
        alert("Task back to Incompleted");
        const updates = {
          //CHECKS FOR UNCHECKED BOX
          completed: false,
        };

        axios
          .put(`https://api.vschool.io/AkTodoList/todo/${id}`, updates)
          .then((res) => getData())
          .catch((error) => console.log(error));
      }
    });
  }
}
getData();

// POST
const postForm = document["todo-form"];

submits.style.color = "red";
submits.style.background = "black";
submits.style.height = "35px";

postForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = {
    title: postForm.title.value,
    description: postForm.description.value,
    price: postForm.price.value,
    imgUrl: postForm.imgUrl.value,
  };
  postForm.title.value = "";
  postForm.reset();
  axios
    .post("https://api.vschool.io/AkTodoList/todo", newTodo)
    .then((res) => getData())
    .catch((err) => console.log(err));
});
