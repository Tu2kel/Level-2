// .filter()

/* Returns: A new array with only the filtered out items from the original array
    Purpose: Reducing a data set into a sub-data set.
        Ex: Initial array has all movies ( action, fantasy, horror )
            You could use filter to return an array with only the action movies.*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = arr.filter((x) => (x % 2 === 0 ? "x" : ""));
// console.log(result);


// const movies = [
//   { name: "movie1", genre: "horror" },
//   { name: "movie2", genre: "action" },
//   { name: "movie3", genre: "action" },
//   { name: "movie4", genre: "fantasy" }
// ];
// const result = movies.filter((x) => x.genre === "action");
// console.log(result);



// function fiveAndGreaterOnly(arr) {

//     const results = arr.filter(x => x > 5 )

//     return results

// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// function evensOnly(arr) {

//     const results = arr.filter((x) => x % 2 === 0);

//     return results
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]



// function fiveCharactersOrFewerOnly(arr) {

//     const x = arr.filter(x => x.length <= 5 )

//     return x

// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]



// function peopleWhoBelongToTheIlluminati(arr){
 
//     const out = arr.filter(x => x.member === true )
//     return out

// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]



// function ofAge(arr){
 
//     const older = arr.filter(x => x.age >= 18)
//     return older

// }
// // test
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]));
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]

