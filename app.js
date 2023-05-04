
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
        revertBtnOnSubmit();
        };
    })
}

function addTask() {
    const toDoList = document.querySelector('#todo-list');
    const taskEntry = document.createElement('div');
    taskEntry.classList.add('task-entry');

    let titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    let titleEntry = document.createElement('span');
    titleEntry.classList.add('title-entry');
    titleEntry.textContent = title;
    titleContainer.appendChild(titleEntry);

    const functionalContainer = document.createElement('div');
    functionalContainer.classList.add('funcitional-container');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = "Due Date: " 
    const dueDateEntry = document.createElement('input');
    dueDateEntry.type = 'date';
    functionalContainer.appendChild(dueDateLabel);
    functionalContainer.appendChild(dueDateEntry);
    titleContainer.appendChild(functionalContainer);

    const btnContainer = document.createElement('span');
    btnContainer.classList.add('button-container');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-button');
    editBtn.textContent = "Edit";
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = "Delete";
    functionalContainer.appendChild(btnContainer);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    let descEntry = document.createElement('div');
    descEntry.classList.add('description-entry');
    descEntry.textContent = description;

    toDoList.appendChild(taskEntry);
    taskEntry.appendChild(titleContainer);
    taskEntry.appendChild(descEntry);

    const deleteTask = (function(){
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function () {
                taskEntry.remove();
            });
        }
    })();

    editTask();

        //function submitEdit() if we open an edit form
}

//FUNCTIONS//
function revertBtnOnSubmit() {
    form.remove();
    document.querySelector('#add-task-button').style.display = 'initial';
}

function editTask() {
    document.querySelector('.title-entry').contentEditable = 'false';
    document.querySelector('.description-entry').contentEditable = 'false';
    let editBtn = document.querySelector('.edit-button');
        
    editBtn.addEventListener('click', function() {
        if ((document.querySelector('.title-entry').contentEditable == 'false') && (document.querySelector('.description-entry').contentEditable === 'false')) {
                document.querySelector('.title-entry').contentEditable = 'true';
                document.querySelector('.description-entry').contentEditable = 'true';
                editBtn.textContent = "Done";
        } else {
                document.querySelector('.title-entry').contentEditable = 'false';
                document.querySelector('.description-entry').contentEditable = 'false';
                editBtn.textContent = "Edit";
        }        
    });
    
}

//CLICK EVENT MODULE//
const clickEventModule = (function() {

    const addTaskBtn = document.querySelector('#add-task-button');
    addTaskBtn.addEventListener('click', () => {
        openForm();
    });

})();
