// setTimeout(function () {
//   console.log("Inside the setTimeout");
// }, 00);

function flipCoin() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 2);

    if (randomNum === 0) {
      resolve("HEADS");
    } else if (randomNum === 1) {
      reject("TAILS");
    }
  });
}

flipCoin()
  .then((response) => console.log("RESOLVED: " + response))
  .catch((error) => console.log("REJECTED: " + error));