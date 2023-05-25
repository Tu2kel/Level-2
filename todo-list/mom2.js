

// //Add
// const addItem = document["addItem"];
// const list = document.getElementById("list");

// function addItemClicked(e) {
//   e.preventDefault();
//   const shoplist = addItem.title.value.trim();
// //   shoplist.trim();

//   if (!shoplist) return;
//   const li = document.createElement("li");
//   li.textContent = shoplist;
//   li.classList.add("genList");
//   list.appendChild(li);

//   const x = document.createElement("button");
//   x.textContent = "x";
//   x.name = "deleted";
//   li.appendChild(x);
//   addItem.title.value = ""; 
//   console.log("Item added successfully");
// }
// addItem.addEventListener("submit", addItemClicked);

// //#region DELETE
// function deleteClicked(e) {

//   if (!e.target.matches(".genList button")) return;
//   const li = e.target.closest(".genList");
//   li.remove();
//   console.log("Item deleted successfully");
// }
// list.addEventListener("click", deleteClicked);

// //#endRegion

// //#region GROCERY LINE PARA 
// const items = document.createElement("p");
//     items.textContent = '🍔🍟Grocery Items🍕';
//     items.id = "items";
//     items.style.color = "red";
//     items.style.fontSize = "20px";
//     items.style.fontWeight = "bold";
//     items.style.textDecoration = "underline";
//     items.style.textAlign = "center";
//     list.insertBefore(items, list.firstChild);

// //#endregion





const numArr = [3,4,5]
numArr2 = numArr.reduce((final, curr) => final += curr, 0 )
  console.log(numArr2);



  






    