const todoForm = document.querySelector(".formStyle");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear");

const addTodo = (input) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList = "custom-checkbox";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗙";
    deleteButton.classList = "custom-delete";

    const span = document.createElement("span");
    span.textContent = input;
    span.classList = "todo-text";

    const div = document.createElement("div");
    div.classList = "todo-div";
    div.appendChild(checkbox);
    div.appendChild(span);

    li.appendChild(div);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
};

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = todoInput.value;
    if (!input.trim()) {
        todoForm.reset();
        return;
    }
    addTodo(input);
    todoForm.reset();
});
