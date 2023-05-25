// import axios from "axios";
const newerTodo = {
  title: "My Practice todo",
  description: "My Practice todo B",
  imgUrl: "https://tinyurl.com/4czpeanc",
};

axios
  .post("https://api.vschool.io/AkTodoList/todo/", newerTodo)
  .then((res) => console.log("newerTodo", res.data))
  .catch((err) => console.log(err));
