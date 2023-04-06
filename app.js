
toDoArray = [];

//OBJECT CONSTRUCTOR FUNCTION//
function ToDoItem(title, description) {
    this.title = title
    this.description = description
}

//DOM MANIPULATION//
function openForm() {
    const formContainer = document.querySelector('#form-container');
    const form = document.createElement('form');
    form.id = 'form';

    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.placeholder = "Title";

    let descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.placeholder = "Description";

    const submitItemBtn = document.createElement('input');
    submitItemBtn.type = 'submit';
    submitItemBtn.id = 'submit-item-button';
    submitItemBtn.value = "Submit";

    formContainer.appendChild(form);
    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(submitItemBtn);

    document.querySelector('#add-task-button').style.display = 'none';

    //on form submit: create new todo objects and then their elements
    submitItemBtn.addEventListener('click', () => {
        form.onsubmit = (e) => {
            e.preventDefault();
            newToDoItem = new ToDoItem(title, description);
        
            //object properties to be assigned from the form input values
            title = document.getElementById('title').value;
            description = document.getElementById('description').value;
            
            toDoArray.push(newToDoItem);
            console.log(newToDoItem);
            console.log(toDoArray);
            
            addTask();
            createText();
            revertBtnOnSubmit();
        };
    })
}

function addTask() {
    const toDoList = document.querySelector('#todo-list');
    const taskEntry = document.createElement('div');
    taskEntry.classList.add('task-entry');

    let titleEntry = document.createElement('span');
    titleEntry.classList.add('title-entry');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-button');
    editBtn.textContent = "Edit";
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = "Delete";

    let descEntry = document.createElement('div');
    descEntry.classList.add('description-entry');

    toDoList.appendChild(taskEntry);
    taskEntry.appendChild(titleEntry);
    taskEntry.appendChild(editBtn);
    taskEntry.appendChild(deleteBtn);
    taskEntry.appendChild(descEntry);

    const deleteTask = (function(){
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function () {
                taskEntry.remove();
            });
        }
    })();

    //function editTask()

        //function submitEdit()
}

//entry elements to be assigned from the object properties
function createText() {
    let titleEntry = document.querySelector('.title-entry');
    titleEntry.textContent = title;

    let descEntry = document.querySelector('.description-entry');
    descEntry.textContent = description;
}

//FUNCTIONS//
function revertBtnOnSubmit() {
    form.style.display = 'none';
    document.querySelector('#add-task-button').style.display = 'initial';
}

//CLICK EVENT MODULE//
const clickEventModule = (function() {

    const addTaskBtn = document.querySelector('#add-task-button');
    addTaskBtn.addEventListener('click', () => {
        openForm();
    });

})();