const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todosUl = document.querySelector("#todos");

const todosJson = JSON.parse(localStorage.getItem("todoslocal"));

if (todosJson) {
  todosJson.forEach((todoJson) => {
    addTodo(todoJson);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerHTML = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");

      updateLS();
    });

    todoEl.addEventListener("dblclick", (e) => {
      e.preventDefault();
      todoEl.remove();
    });

    todosUl.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todosEl) => {
    todos.push({
      text: todosEl.innerText,
      completed: todosEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todoslocal", JSON.stringify(todos));
}
