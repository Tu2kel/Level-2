
//#region GET
function getData() {
    
    const element = document.getElementById("akTodo-list");
    element.style.listStyle = 'none'
    while (element.childNodes.length > 0) {
      element.removeChild(element.childNodes[0]);
    }
  
  axios
    .get("https://api.vschool.io/AkTodoList/todo/")
    .then((response) => {
      // const allTodo = response.data
      for (let i = 0; i < response.data.length; i++) {
        const li = document.createElement("li");

        const h1 = document.createElement("h1");
        h1.textContent = response.data[i].title; // TAKES THE TITLE TO SHOW IN H1
        li.appendChild(h1); // PUTS INFO ON PAGE DOC.BODY APPENDING THE H1 SAVED INFO

        //DELETE BUTTON
        const x = document.createElement("button");
        x.textContent = "Delete";
        x.classname = "delete-btn";
        x.id = "deleted";
        x.addEventListener("click", () => {
          deleteTodo(response.data[i]._id);
        });
        li.appendChild(x);
        //i === 0 && console.log(response.data[i]._id);
        // i === true ? true : false
        // i === true && true
        // if (i) true

        //INPUT
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = "completed";
        li.appendChild(input); // PUTS CHECKBOX ON PAGE DOC.BODY APPENDING THE CHECKBOX

        const img = document.createElement("img");

        img.src = response.data[i].imgUrl; // TAKES THE IMAGE TO SHOW IN IMG
        li.appendChild(img); // PUTS INFO ON PAGE DOC.BODY APPENDING THE IMG SAVED INFO
        
        img.style.height = "300px";

        if (response.data[i].imgUrl === response.data[1].imgUrl) {
          setTimeout(function () {
            img.style.opacity = "0.5";
            console.log("Inside the setTimeout");
          }, 1000);
        }
        if (response.data[i].imgUrl === response.data[0].imgUrl) {
          setTimeout(function () {
            img.style.position = "relative";
            img.style.left = "300px";

            console.log("5s rule");
          }, 2000);
        }

        // Add edit form for put request
        // 1st add html, input element for the title, imgurl, description
        // 2nd add put request with id "response.data.id"
        /* 
          let updatedTodoData = {
            title: newTitle,
            imgUrl: newUrl,
            descripting: newDescription
          }
        
          editBtn.onClick = putTodo(updatedTodaData, response.data.id)
        */
       // 3rd add put request with id "response.data.id"
       element.appendChild(li)
      }
    })
    .catch((error) => console.log(error));
}

//#endregion

//#region POST
  getData();
function postTodo(todoData) {

  const akTodo = {
    // DEFINE THE POST THEN SEND AS AN ARGUMENT
    completed: false,
    title: "",
    description: "I DID IT👏🏽",
    price: 25000,
    imgUrl: "https://tinyurl.com/5d4vbyap",
  }
  //console.log(todoData)
  
  axios
    .post("https://api.vschool.io/AkTodoList/todo/", todoData)
    .then((response) => {
      // akTodo.setAttribute("_id");
      getData();
      console.log(response.data);
    })
    .catch((error) => console.log(error));

    
}

function putTodo(todoData, id) {
  axios
    .put(`https://api.vschool.io/AkTodoList/todo/${id}`, todoData)
    .then((response) => {
      getData();
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}

function deleteTodo(id) {
  console.log(`deleteTodo ${id}`)

  axios
    .delete(`https://api.vschool.io/AkTodoList/todo/${id}`)
    .then((response) => {getData()})
    
    .catch((error) => console.log(error));
    
}


//#endregion

//#region PUT
const todoList = document.getElementById('akTodo-list')



// function getListData(){
//   axios
//     .get("https://api.vschool.io/AkTodoList/todo/")
//       .then((response) => listData(response.data)) 
//         .catch((error) => console.log(error));

// }

// function listData (data){
//   //clearListData()

//     for (let i = 0; i < data.length; i++) {
//       postTodo(data[0]);
//     }

//     console.log('listData', data)
// }





//#region
//CREATE TO DO BELOW
function createTodo(todo){
  //FOR NOW KEEP IT IN PUT SECTION
  const todoList = document.getElementById("akTodo-list");

  const container = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const price = document.createElement("p");
  const imgUrl = document.createElement("img");
  const completedBox = document.createElement("div");
  const completed = document.createElement("p");
  const checkbox = document.createElement("input");
  const buttons = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  container.classname = "item-box";
  container.id = "container";
  title.textContent = todo.title;
  description.textContent = todo.description;
  price.textContent = `${todo.price}`;
  imgUrl.src = todo.imgUrl;
  imgUrl.classname = "image";
  buttons.classname = "buttons";
  editButton.textContent = "edit";
  deleteButton.textContent = "delete";
  completedBox.classname = "completed-box";
  completedBox.textContent = "completed";
  checkbox.setAttribute("type", "checkbox");

  todoList.appendChild(container);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(price);
  container.appendChild(imgUrl);
  container.appendChild(buttons);
  buttons.appendChild(editButton);
  buttons.appendChild(deleteButton);
  container.appendChild(completedBox);
  completedBox.appendChild(completed);
  completedBox.appendChild(checkbox);

  console.log(todo);
  //#endregion
  //CHECKBOX SECTION BELOW
  checkbox.addEventListener("click", (e) => {
    console.log(e);
    if (checkbox.checked) {
      title.style.textDecoration = "line-through";

      const updates = {
        completed: true,
      };

      axios
        .put(`https://api.vschool.io/AkTodoList/todo/${todo._id}`, updates)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    } else if (!checkbox.cheked) {
      title.style.color = "yellowgreen";
      alert("Finish Task");

      const updates = {
        completed: false,
      };
      axios
        .put(`https://api.vschool.io/AkTodoList/todo/${todo._id}`, updates)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }
  });

  //#region
  //EDIT SECTION BELOW
  // editButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   container.removeChild(title);
  //   container.removeChild(description);
  //   container.removeChild(price);
  //   container.removeChild(imgUrl);

  //   const editForm = document.createElement("form");
  //   console.log(editForm);
  //   const titleInput = document.createElement("input");
  //   const descriptionInput = document.createElement("input");
  //   const priceInput = document.createElement("input");
  //   const imgUrlInput = document.createElement("input");
  //   const save = document.createElement("button");

  //   titleInput.setAttribute("type", "text");
  //   titleInput.setAttribute("name", "title-Input");
  //   titleInput.value = todo.title;

  //   descriptionInput.setAttribute("type", "text");
  //   descriptionInput.setAttribute("name", "description-Input");
  //   descriptionInput.value = todo.description;

  //   priceInput.setAttribute("type", "text");
  //   priceInput.setAttribute("name", "price-Input");
  //   priceInput.value = todo.price;

  //   imgUrlInput.setAttribute("type", "text");
  //   imgUrlInput.setAttribute("name", "imgUrl-Input");
  //   imgUrlInput.value = todo.imgUrl;

  //   save.textContent = "Save";

  //   console.log(titleInput);

  //   container.prepend(editForm);
  //   editForm.appendChild(titleInput);
  //   editForm.appendChild(descriptionInput);
  //   editForm.appendChild(priceInput);
  //   editForm.appendChild(imgUrlInput);
  //   editForm.appendChild(save);

  //   editForm.addEventListener("submit", function (e) {
  //     e.preventDefault();
  //   });

  //   const edits = {
  //     title: editForm["title-input"].value,
  //     description: editForm["description-input"].value,
  //     price: editForm["price-input"].value,
  //     imgUrl: editForm["imgUrl-input"].value,
  //   };

  //   editForm["price-input"].value = 0;

  //   axios
  //     .put(`https://api.vschool.io/AkTodoList/todo/${todo._id}`, edits)
  //     .then((response) => getData()) //<-----------------------------------------NEED GET DATA FUNCTION
  //     .catch((error) => console.log(error));
  // });

  //#endregion

  //#region DELETE

  axios
    .delete(`https://api.vschool.io/AkTodoList/todo/${todo._id}`)
    .then((response) => todoList.removeChild(container)) //>----------------NEED CONTAINER CLASS
    .catch((error) => console.log(error));

  //#endregion
}

// DO THESE STAY GLOBAL
// const todoform = document.getElementById('todo-form')

// todoform.addEventListener('submit', function(e) {
// postData(newTodo)
//   e.preventDefault();
// })



// const newTodo = {
//   title:       todoform.title.value,
//   description: todoform.description.value,
//   price:       todoform.price.value,
//   imgUrl:      todoform['imgUrl'].value
// }

// todoform.title = ""
// todoform.description.value = ""
// todoform.price.value = ""
// todoform.imgUrl.value = ""


