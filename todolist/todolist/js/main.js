let todos = [
    {
        id: ramdomID(),
        tittle: "Đi đá bóng",
        status: false
    },
    {
        id: ramdomID(),
        tittle: "Đi chơi game",
        status: true
    },
    {
        id: ramdomID(),
        tittle: "Làm bài tập về nhà",
        status: true
    }
]

const todoListEL = document.querySelector(".todo-list");
const todoInputEL = document.querySelector("#todo-input")
const btnAdd = document.querySelector("#btn-add")

function ramdomID() {
    return Math.floor(Math.random() * 10000);
}

function renderTodos(arr) {
    todoListEL.innerHTML = "";
    if (arr.length == 0) {
        todoListEL.innerHTML = "Không có công việc nào trong danh sách";
        return
    }

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todoListEL.innerHTML += `
        <div class="todo-item ${t.status ? "active-todo" : ""}">
            <div class="todo-item-title">
                <input type="checkbox" ${t.status ? "checked" : ""} onclick="toggleStatus(${t.id})""/>
                <p>${t.tittle}</p>
            </div>
            <div class="option">
                <button class="btn btn-update">
                    <img src="./img/pencil.svg" alt="icon" />
                </button>
                 <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                     <img src="./img/remove.svg" alt="icon" />
                </button>
            </div>
            </div>
         `

    }
}
renderTodos(todos)

btnAdd.addEventListener('click', function () {
    let tittle = todoInputEL.value;
    if (tittle.trim() == "") {
        alert("Tiêu đề không được để trống");
        return
    }
    let newTodo = {
        id: ramdomID(),
        tittle: tittle,
        status: false
    }

    todos.push(newTodo);

    renderTodos(todos)
    todoInputEL.value = ""

})

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
            renderTodos(todos)
            return
        }
    }
}


function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
            renderTodos(todos)
            return
        }

    }
}
