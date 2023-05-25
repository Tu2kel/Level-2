// const addToDom = document.getElementById("addResults")


const total = document.getElementById("results");
const addaBtn = document.getElementById("addbtn")
const subaBtn = document.getElementById("subbtn");
const mulaBtn = document.getElementById("mulbtn");

function added(e){
    e.preventDefault()
    const first = parseInt(document.getElementById("addone").value)
    const second = parseInt(document.getElementById("addtwo").value);
    total.textContent = first + second
    document.getElementById("addone").value = "";
    document.getElementById("addtwo").value = "";

    console.log("adds working", e)
}
addaBtn.addEventListener("click", added)

function subtracted(e){
    const first = parseInt(document.getElementById("subone").value);
    const second = parseInt(document.getElementById("subtwo").value);
    total.textContent = first - second
    document.getElementById("subone").value = ""
    document.getElementById("subtwo").value = ""
    
    console.log("sub working", e)
}
subaBtn.addEventListener("click", subtracted);

function multiplied(e){
    const first = parseInt(document.getElementById("mulone").value);
    const second = parseInt(document.getElementById("multwo").value);
    total.textContent = first * second
    document.getElementById("mulone").value = ""
    document.getElementById("multwo").value = ""

    console.log("sub working", e)
}
mulaBtn.addEventListener("click", multiplied);
