/*

# .forEach
    Returns: Undefined 
    Purpose: Used in place of a for-loop
        Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
                forEach will always loop the entire length of the array.
                
    # .find()
        Returns: The first item it finds in the array that matches your criteria
        Purpose: Finding an item in an array
    
        # .findIndex()
            Returns: The index number of the first item it finds in the array that matches your criteria
            Purpose: Finding the index number of an item in an array

*/

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr2 = [];
// arr1.forEach((x) => x % 2 === 0 && arr2.push(x));
// console.log(arr2);





// .find()

const users = [{ name: "joe" }, { name: "julie" }, { name: "rick" }];

// const result = users.find(user => user.name === "julie")

// console.log(result);

const userIndex = users.findIndex(function (user) {
  if (user.name === "joe") {
    return true;
  }
});

console.log(userIndex);