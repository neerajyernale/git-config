const cl = console.log;
const todoList = document.getElementById('todoList');
const addTodoBtn = document.getElementById('addTodoBtn');
const updateTodoBtn = document.getElementById('updateTodoBtn');

let EDIT_ID = null;

let todoArr = [
    {
        id: '1',
        todoItem: 'Learn JS'
    },
    {
        id: '2',
        todoItem: 'Learn React'
    },
    {
        id: '3',
        todoItem: 'Learn Bootstrap'
    }
];



function createArr(arr) {

    let result = '';

    arr.forEach(obj => {

        result += `
            <li
                id="${obj.id}"
                class="list-group-item d-flex justify-content-between align-items-center">

                <strong>${obj.todoItem}</strong>

                <div>

                    <i
                        onclick="onTodoEdit(this)"
                        class="fa-solid fa-pen-to-square fa-2x text-primary me-3"
                        role="button">
                    </i>

                    <i
                        onclick="onTodoRemove(this)"
                        class="fa-solid fa-trash fa-2x text-danger"
                        role="button">
                    </i>

                </div>

            </li>
        `;
    });

    todoList.innerHTML = result;
}

createArr(todoArr);

// EDIT
function onEdit(ele){
    EDIT_ID = ele.closest('li').id;

    let EDIT_OBJ = todoArr.find(todo =>{
        return todo.todoId === EDIT_ID
    });

    todoItemControl.value = EDIT_OBJ.todoItem;

    addTodoBtn.classList.add('d-none');
    updateTodoBtn.classList.remove('d-none');
}