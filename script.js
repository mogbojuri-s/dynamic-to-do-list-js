// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');  // Add button
    const taskInput = document.getElementById('task-input');    // Task input field
    const taskList = document.getElementById('task-list');      // Task list container

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();  // Remove whitespace

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create the list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add event listener to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the button and the list item to the list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event: Click the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event: Press "Enter" key inside input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
