const cl = console.log;
const todoList = document.getElementById('todoList');
const todoform = document.getElementById('todoform');
const todoitem = document.getElementById('todoitem');

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




function onformSubmit(eve){
    eve.preventDefault();

    let newtodo ={
        todoItem : todoitem.value,
        id : Date.now().toString()
    }

    todoform.reset();

    todoArr.push(newtodo);

    let li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center'
    li.id = newtodo.id;
    li.innerHTML = `<strong>${newtodo.todoItem}</strong>

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

                    </div>`

    todoList.appendChild(li);

    Swal.fire({
        title: `A new todo ${newtodo.todoItem} added succesfully!`,
        timer : 3000,
        icon : 'success'
    })
}





todoform.addEventListener('submit', onformSubmit);