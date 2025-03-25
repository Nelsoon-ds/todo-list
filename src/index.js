import loadTodo from "./components/todoList";
import "./style.css";
import { openModal, closeModal } from "./components/modal";

console.log('Todo index.js s is opened')

document.querySelector(".btn-open").addEventListener("click", openModal);
document.querySelector(".btn-close").addEventListener("click", closeModal);
document.querySelector(".overlay").addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });



loadTodo();
loadModal();