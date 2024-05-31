// Retrieve tasks and nextId from localStorage
const toDoDiv = $('#todo-cards');
const inProgressDiv = $('#in-progress-cards');
const doneDiv = $('#done-cards');
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return Math.random().toString(36);
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
        .addClass('card task-card draggable my-3')
        .attr('data-task-id', task.id);
    const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.description);
    const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);

    taskCard.append(cardHeader);
    taskCard.append(cardBody);
    taskCard.append(cardDescription);
    taskCard.append(cardDueDate);

    if (task.status === 'to-do') {
        toDoDiv.append(taskCard);
    } else if (task.status === 'in-progress-cards') { 
        inProgressDiv.append(taskCard)
    } else {
        doneDiv.append(taskCard)
    }


}



// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // need to clear divs of previous tasks

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task){
        createTaskCard(task)
    })

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();
    // get all tasks
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const task = {
        id: generateTaskId(),
        title: $('#task-title').val(),
        description:
            $('#message-text').val(),
        dueDate: $('#due-date').val(),
        status: 'to-do',
    };

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTaskList()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    const cardDeleteBtn = $('<button>')
    .getElementById("delete");
   

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    event.preventDefault()
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // render the task list
    renderTaskList()
    // add event listeners
    $("#submit").on('click', handleAddTask);

    // make lanes droppable

    // make the due date field a date picker
    $('#due-date').datepicker({
        changeMonth: true,
        changeYear: true,
    });

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
});
