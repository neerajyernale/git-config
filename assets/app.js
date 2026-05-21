const cl = console.log;
const todoList = document.getElementById('todoList');
const todoForm = document.getElementById('todoForm');

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

// / UPDATE
function onTodoUpdate(){
    let updatedValue = todoitem.value;

    let getIndex = todoArr.findIndex(todo =>{
        return todo.id === EDIT_ID
    });

    // update array
    todoArr[getIndex].todoItem = updatedValue;

    // update UI
    let li = document.getElementById(EDIT_ID);
    li.querySelector('strong').innerText = updatedValue;

    // reset
    todoform.reset();
    addtodobtn.classList.remove('d-none');
    updatebtn.classList.add('d-none');

    Swal.fire({
        title: `Todo updated successfully !!!`,
        timer: 3000,
        icon: 'success'
    });
}

// EVENTS

updatebtn.addEventListener('click', onTodoUpdate);