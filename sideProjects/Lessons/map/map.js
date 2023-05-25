//.MAP()

/*returns: A new array the same size as the input array
    purpose: allows you to take an array of data and create a new array of data from it.*/


// const users = [{ name: "joe" }, { name: "steve" }, { name: "lisa" }];
// const result = users.map((x) => x.name);
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = arr.map(x => x + 10);
// console.log(result[4]);

// function doubleNumbers(arr){
//   return arr.map(x => x * 2)
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr){
//   return arr.map(x => JSON.stringify(x));

// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr){

//     return arr.map(x => x.charAt(0).toUpperCase() + x.toLowerCase().slice(1))
//   // your code here
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function namesOnly(arr){
//   // your code here

//   return arr.map(x => x.name)
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr){

//     let toMatrix = arr.map(x => {

//             if (arr.age > 16 ) {
//             return arr.name + " can go to the Matrix";
//             }else{
//             return arr.name + " is under age!!"
//             }
//     })

// }
// console.log(toMatrix);

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// function readyToPutInTheDOM(arr){

//     return arr.map(x => `<h1>${x.name}</h1> <h2>${x.age}</h2> `);
//   // your code here
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
// Your code here
const squared = nums.map(function (item) {
  return item * item;
});

console.log(squared);

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const uppercase = names.map((name) => {
//   return name[0].toUpperCase() + name.slice(1);
//   return `${name[0].toUpperCase()}${name.slice(1)}`;
});
console.log(uppercase);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// Your code here
const elements = pokemon.map((mon) => {
  return `<p>${mon}</p>`;
});

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}