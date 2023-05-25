// const axios = require("axios");

// axios.get("https://swapi.co/api/people/1").then((response) => {
//   console.log(response.data);
// });

/*--------------------------------------*/

// Get All

// CONSOLE LOGS IN THIS SET UP
// axios.get("https://api.vschool.io/anthony/todo")
//         .then(response => console.log(response))
//         .catch(error => console.log(error))


// TO SHOW ON WEBPAGE 
axios
  .get("https://api.vschool.io/anthony/todo/")
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      const h1 = document.createElement("h1");
      h1.textContent = response.data[i].title; // TAKES THE TITLE TO SHOW IN H1
      document.body.appendChild(h1); // PUTS INFO ON PAGE DOC.BODY APPENDING THE H1 SAVED INFO
    }
  })
  .catch((error) => console.log(error));

