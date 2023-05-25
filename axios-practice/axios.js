//#region GET
function getData() {
  const element = document.getElementById("akTodo-list").innerHTML = ""

  element.style.listStyle = "none";
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
        input.id = "complete";
        li.appendChild(input); // PUTS CHECKBOX ON PAGE DOC.BODY APPENDING THE CHECKBOX

        input.addEventListener("click", () => {
          (response.data[i]._id);
          console.log();
        });

    console.log(input);

        const img = document.createElement("img");

        img.src = response.data[i].imgUrl; // TAKES THE IMAGE TO SHOW IN IMG
        li.appendChild(img); // PUTS INFO ON PAGE DOC.BODY APPENDING THE IMG SAVED INFO

        img.style.height = "200px";

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
        element.appendChild(li);
      }
    })
    .catch((error) => console.log(error));
}
getData() 
// DOESN'T DISPLAY UNTIL CALLED GLOBALLY 
//#endregion


//#region POST
// function postTodo(todoData) {

//   const akTodo = {
//     // DEFINE THE POST THEN SEND AS AN ARGUMENT



//     completed: false,
//     title: todoData.title,
//     description: todoData.description,
//     price: todoData.price,
//     imgUrl: todoData.imgUrl

    

//     completed: true,
//     title: "POST THIS ONE",
//     description: "I DID IT👏🏽 AGAIN",
//     price: 25000,
//     imgUrl: "https://tinyurl.com/muyvatc9"
//   };
//   console.log(akTodo);
  
//   axios
//     .post("https://api.vschool.io/AkTodoList/todo/", akTodo)
//     .then((response) => {
//       getData();
//       console.log(response.data);
//     })
//     .catch((error) => console.log(error));

//     console.log(akTodo);
// }
// postTodo();
//#endregion


//#region PUT
// function putTodo(todoData, id) {
//     const updateTodo = {
//       title: todoData.title,
//       description: todoData.description,
//       price: todoData.price,
//       imgUrl: todoData.imgUrl


//     }
const todoForm = document['todo-form']
todoForm.addEventListener('submit', function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    todoForm.title.value = ""
  axios
  .post("https://api.vschool.io/AkTodoList/todo/", )
    // .post(`https://api.vschool.io/AkTodoList/todo/${id}`, newTodo)
    .then((response) => {
      getData();
      
      console.log(response.data);
    })
    .catch((error) => console.log(error));
})
//#endregion




//#region DELETE
function deleteTodo(id) {
  console.log(`deleteTodo ${id}`)

  axios
    .delete(`https://api.vschool.io/AkTodoList/todo/${id}`)
    .then((response) => {getData()})
    
    .catch((error) => console.log(error));
    
}


//#endregion



// input.todoData.title
// input.todoData.description
// input.todoData.price
// input.todoData.imgUrl



