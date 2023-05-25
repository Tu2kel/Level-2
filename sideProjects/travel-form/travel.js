const form = document["travel"]


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  
  const clone = document.getElementById("clonedContainer");
  const math = Math.ceil(Math.random() * 999999);

  console.log("FIRED UP", e);
  //GREETING HEADER
  const header = document.getElementById("header");
  let greeting = "Your form has been Saved " + ` Confirmation # JS${math} `;
  clone.append(greeting);
  clone.append(document.createElement("br"));
  //NAME H1
  const h1 = document.getElementById("h1");
  let fullname = ` Name: ${fname.value} ${lname.value} `;
  clone.append(fullname);
  clone.append(document.createElement("br"));
  //AGE H1
  const h1Age = document.getElementById("ages"); //h1
  let persAge = ` Age: ${age.value} `;
  clone.append(persAge);
  clone.append(document.createElement("br"));

  // RADIO SELECTION H2
  const data = document.getElementsByName("gender")
  const h2 = document.getElementById("h2");
  let radio = ` Gender: ${form.gender.value} `;
  clone.append(radio)
  clone.append(document.createElement("br"));

  //CHECKBOX P




  
 let food = ` `;
  const checkedInputs = []
  for (let i = 0; i < form.meal.length; i++) {
    

            if (form.meal[i].checked) {
              
              checkedInputs.push(form.meal[i].value);
              const p = document.getElementById("para");
              
              
              clone.append(food);
              console.log(form.meal[i]);

              food = ` Meal Choice: ${checkedInputs[0]} `;

            }
  }
  
    
    
  //DROPDOWN <P>
  const para = document.getElementById("para2")
  const nameData = document.getElementsByName("trip")
  let destination = ` Destination: ${form.selection.value} `
  clone.append(destination);
  clone.append(document.createElement("br"));
  


  //BELOW TO SEE IF WE CAN PULL FROM THE RADIO AND CHECKBOX FUNCTIONS DECLARING VAR $
  let popup = `${greeting} ${fullname} ${persAge} ${radio} ${food} ${destination} `;
  alert(popup);

  document.body.append(clone); //COMMENT OUT TO REMOVE DOM DISPLAY
})