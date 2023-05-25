/*
    # .some()
        Returns: Returns true if at least one item in the array matches your criteria, false otherwise
        Purpose: To see if something exists in an array
        

        # .every()
            Returns: Returns true if EVERY item in the array matches your criteria, false otherwise.
            Purpose: TO see if Everything in an array matches your criteria
*/

// .some()
const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"];

// .some()
// const result = names.some(function (name) {
//   if (name[0] === "J") { // Case Sensitive
//     return true;
//   }
// });

// console.log(result);

//.every()

const result = names.every(function (name) {
  if (name[0] === "J") {
    return true;
  }
  
})

console.log(result);