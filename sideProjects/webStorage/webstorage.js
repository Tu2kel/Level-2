//Setter  JSON.stringify => turning JS into JSON

localStorage.setItem("name", "Kelley")
localStorage.setItem("age", 20)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["Tina ", "Amber ", "Vicky"]))
localStorage.setItem(
  "adress",
  JSON.stringify({ street: "123 street", city: "SLC" })
);

//GETTERS JSON.parse => Turns JSON into JS

const names = localStorage.getItem("name")
const friends = JSON.parse(localStorage.getItem("friends"));
console.log(names);

// Remove
localStorage.removeItem("age")

