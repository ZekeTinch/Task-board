// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let list = JSON.parse(localStorage.getItem('list'));
    if (!list) {
        list = [];
    }
    return list;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    

    }



// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $('.draggable').draggable({
        opacity: 0.7,
        zIndex: 100,

        helper: function (e) {

            const original = $(e.target).hasClass('ui-draggable')
                ? $(e.target)
                : $(e.target).closest('.ui-draggable');

            return original.clone().css({
                width: original.outerWidth(),
            });
        },
    });

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault()
    const task = {
        id: generateTaskId(),
        title: $('#task-title').val(),
        description:
        $('#message-text').val(),
        dueDate: $('#due-date').val(),
        status: 'to-do',
    }
    
    console.log('hello')

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    event.preventDefault()
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // render the task list

    // add event listeners
    $("#submit").on('click', handleAddTask);

    // make lanes droppable

    // make the due date field a date picker
    $('#due-date').datepicker({
        changeMonth: true,
        changeYear: true,
    });
});
