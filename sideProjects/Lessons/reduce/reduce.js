/*
# .reduce()
    Returns: Whatever you want it to! (See video for explanation)
    Purpose: Take an array of data and Reduce it into a smaller or completely different data set.

*/

// .reduce()

// 1 - reduce the array of numbers into a sum of all the numbers
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result1 = nums.reduce((final, num) => final += num)

    
// console.log(result1);


// 2 - reduce the users to an array of strings of the user's first and last names
// const users = [
//     { fName: "joe", lName: "smithy" },
//     { fName: "tina", lName: "johnson" },
//     { fName: "rick", lName: "sanchez" }
// ]

// const result = users.reduce(function (final, user) {
//   final.push(user.fName + " " + user.lName);
//   return final;
// }, []);

// console.log(result)
    

// 3 - reduce the array into a count of how many people voted
// const voters = [
//     { name: "steve", voted: true },
//     { name: "janet", voted: true },
//     { name: "rebecca", voted: false },
//     { name: "harvey", voted: true },
// ]

// const voteCount = voters.reduce(function (final, voter){

//     if (!voter.voted) {
//         final++
//     }
//         return final
// }, 0)

// console.log(voteCount);
    
// const voterObj = voters.reduce(
//   function (final, voter) {
//     if (voter.voted) {
//       final.didVote++;
//     } else {
//       final.didntVote++;
//     }
//     return final;
//   },
//   { didVote: 0, didntVote: 0 }
// );

// console.log(voterObj);

                                    // import axios from "axios"

                                    // axios.get('https://api.github.com/users/Tu2kel/repos')
                                    //     .then((result) => {
                                    //         console.log(result);
                                    //     }).catch((err) => {
                                    //         console.log(err);
                                    //     });

// function total(arr) {

//    return arr.reduce((final, num) => final += num, 0)

    
// }

// console.log(total([1,2,3])); // Output should equal 6



// function stringConcat(arr) {
  
//    return arr.reduce((final, num) => final + num, [] )

// }

// console.log(stringConcat([1,2,3])); // "123"

// function totalVotes(arr) {
//   return arr.reduce((final, vote) =>{

//     if (vote.voted) {
//         final++
       
   

//    }
//     return final
   
// },0); 

// }
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7


function shoppingSpree(arr) {

    return arr.reduce((final, deal) => {

       results = final.price + deal
    })

    
    
    
}
console.log(results)


var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005
