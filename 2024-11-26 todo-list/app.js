const todoForm = document.querySelector(".formStyle");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear");

const addTodo = (input) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const div = document.createElement("div");
    span.textContent = input;
    span.classList = "todo-text";
    checkbox.type = "checkbox";
    checkbox.classList = "custom-checkbox";
    div.classList = "todo-div";
    div.appendChild(checkbox);
    div.appendChild(span);

    deleteButton.textContent = "🗙";
    deleteButton.classList = "custom-delete";
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
