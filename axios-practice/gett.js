// TO SHOW ON WEBPAGE
axios
  .get("https://api.vschool.io/AkTodoList/todo/")
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      const h1 = document.createElement("h1");
      h1.textContent = response.data[i].title; // TAKES THE TITLE TO SHOW IN H1

      document.body.appendChild(h1); // PUTS INFO ON PAGE DOC.BODY APPENDING THE H1 SAVED INFO

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = "completed";
      // input.textContent = "Complete"
      document.body.appendChild(input); // PUTS CHECKBOX ON PAGE DOC.BODY APPENDING THE CHECKBOX
      

      //TRYING SOMETHING OUT
      
        // const x = document.createElement("button");
        // x.textContent = "Delete";
        // x.id = "deleted";
        // document.body.appendChild(x);
        // console.log("Item added successfully");
      
            
      //BELOW HERE IS FINE ABOVE IS ???
      input.addEventListener("click", (event) => {
        if (event.target.checked) {
          if (response.data[i].completed === true) {
            // SYNCHRONOUS IT RAN AFTER NOT ABOVE LINE 8
            h1.style.textDecoration = "line-through";
            h1.style.color = "darkred";
            input.checked = true;
          } else {
            h1.style.textDecoration = "none";
            h1.style.color = "yellowgreen";
            input.checked = false;
            alert("Finish Todo Item");
          }
        }

        const checkbox = event.target; //THE ONE I CLICK
        const value = checkbox.value;
        const checked = checkbox.checked;
        console.log(value, checked);
      });

      if (response.data[i].completed === true) {
        // SYNCHRONOUS IT RAN AFTER NOT ABOVE LINE 8
        h1.style.textDecoration = "line-through";
        h1.style.color = "darkred";
      }
      

      const img = document.createElement("img");

      img.src = response.data[i].imgUrl; // TAKES THE IMAGE TO SHOW IN IMG
      document.body.appendChild(img); // PUTS INFO ON PAGE DOC.BODY APPENDING THE IMG SAVED INFO
      img.style.height = "300px";

      if (response.data[i].imgUrl === response.data[1].imgUrl) {
        setTimeout(function () {
          img.style.opacity = "0.5";
          console.log("Inside the setTimeout");
        }, 5000);
      }
      if (response.data[i].imgUrl === response.data[0].imgUrl) {
        setTimeout(function () {
          img.style.position = "relative";
          img.style.left = "300px";

          console.log("Inside the setTimeout");
        }, 5000);
      }
    }
    
  })
  .catch((error) => console.log(error));

// items.style.textDecoration = "underline";


// //#endregion

//#region POST


function createaTodo() {
  axios
    .post("https://api.vschool.io/AkTodoList/todo/", akTodo)
    .then((response) => {
      // akTodo.setAttribute("_id");
      const akTodo = {
        
        completed: false,
        title: "AK CORRECT POST TO API",
        description: "I DID IT👏🏽",
        price: 25000,
        imgUrl: "https://tinyurl.com/5d4vbyap",
      };
      console.log(response.data);
    })

    .catch((error) => console.log(error));
}
//#endregion

//#region PUT
const todoList = document.getElementById("akTodo-list");

function getData() {
  axios
    .get("https://api.vschool.io/AkTodoList/todo/")
    .then((response) => listData(response.data))
    .catch((error) => console.log(error));
}

function listData(data) {
  clearListData();

  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    createTodo(data[i]);
  }
}

function clearListData() {
  const element = document.getElementById("akTodo-list");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
 const x = document.createElement("button");
 x.textContent = "Delete";
 x.id = "deleted";
 document.body.appendChild(x);
 console.log("Item added successfully");

deleteClicked = (e) => {
        if (e.target(this)) return;
        // const li = 
        e.target.closest("deleted");
        this.remove(e);
        console.log("Item deleted successfully");
      }
      this.addEventListener("click", deleteClicked);


      

// function createTodo(todo) {
//   const container = document.createElement("div");
//   const title = document.createElement("h1");
//   const description = document.createElement("p");
//   const price = document.createElement("p");
//   const imgUrl = document.createElement("img");
//   const completedBox = document.createElement("div");
//   const completed = document.createElement("p");
//   const checkbox = document.createElement("input");
//   const buttons = document.createElement("div");
//   const editButton = document.createElement("button");
//   const deleteButton = document.createElement("button");

//   container.className = "item-box";
//   container.id = "container";
//   title.textContent = todo.title;
//   description.textContent = todo.description;
//   price.textContent = `$${todo.price}`;
//   imgUrl.src = todo.imgUrl;
//   imgUrl.className = "image";
//   buttons.className = "buttons";
//   editButton.textContent = "edit";
//   deleteButton.textContent = "delete";
//   deleteButton.className = "delete";
//   completedBox.className = "completed-box";
//   completedBox.textContent = "completed";
//   checkbox.setAttribute("type", "checkbox");

//   container.appendChild(title);
//   container.appendChild(description);
//   container.appendChild(price);
//   container.appendChild(imgUrl);
//   container.appendChild(buttons);
//   buttons.appendChild(editButton);
//   buttons.appendChild(deleteButton);
//   container.appendChild(completedBox);
//   completed 



// }
// function deleteClicked (e) {
//   if (!e.target.matches(e.currentTarget)) return;
//   const li = e.target.closest("delete");
//   li.remove();
//   console.log("Item deleted successfully");
// }
// deleteButton.addEventListener("click", deleteClicked);

