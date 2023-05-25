// const { default: axios } = require("axios");

 
const portraits = document.getElementById("portraits");
const container = document.getElementById("container")


function getData (){  

  document.getElementById("portraits").textContent = ""
  // document.getElementById("container");
   container.append(portraits);
    axios.get("https://api.vschool.io/akAjaxProj/todo/")
          .then((response) => domData(response.data))
          .catch((error) => console.log(error));

} //End of getData()

function domData(data) {
 

  //PASSING DATA
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    div.classList.add(data[i]._id);
    portraits.appendChild(div)
    console.log(data, "Div of portrait Data");
    //TITLE
    const akTitle = document.createElement("h1")
    akTitle.textContent = `Title: ` + data[i].title ;
    div.appendChild(akTitle)

    //DESCRIPTION 
    const akDescription = document.createElement("h2")
    akDescription.textContent = `Description: ${data[i].description} `;
    div.appendChild(akDescription)

    //PRICE
    const akPrice = document.createElement("h3")
    akPrice.innerText = `Price: ${data[i].price} `;
    div.appendChild(akPrice)

    //IMG
    const akImg = document.createElement("img")

    akImg.src = data[i].imgUrl;
    // akImg.style.height = "200px";
    akImg.style.border = " solid red";
    div.appendChild(akImg)

    //DELETE 
    const x = document.createElement("button")
    x.innerText = "Delete"
    x.classList.add(data[i]._id); 
    div.appendChild(x)

      x.addEventListener("click", e => {
        console.log(`Successfully Deleted this ID:🙋🏽‍♂️ ${data[i]._id}`);
        e.preventDefault()

        const id = e.target.parentElement.className
        const idtarget = e.target.className
        console.log("Deleted:", id);

        axios.delete(`https://api.vschool.io/akAjaxProj/todo/${idtarget}`)
          .then((res) => getData(res)) // REFRESHES AFTER DELETE BY
          .catch((err) => console.log(err));
          

      }) //end of Delete event




          

          // axios.put(`https://api.vschool.io/akAjaxProj/todo/${id} `, updates)
          //       .then((response) => console.log(response.data))
          //       .catch((error) => console.log(error));


  } //end of for Loop
}//end of domData()
getData();

//POST
const form = document.ajaxForm

  form.addEventListener("submit", e => {
    e.preventDefault();
      const postData = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
      }; // end of PostData() from form inputs

      console.log("Form info added 😀", e);

      form.title.value = ""
      form.reset()

      axios.post("https://api.vschool.io/akAjaxProj/todo/", postData)
        .then((response) => getData())
        .catch((error) => console.log(error));
        

  }) // end of Form eventListener
    


        











