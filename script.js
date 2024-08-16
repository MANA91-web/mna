document.querySelectorAll('.save-btn').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.parentElement.parentElement;
        const taskData = {
            deliverable: row.cells[0].innerText,
            owner: row.cells[1].innerText,
            startDate: row.cells[2].innerText,
            deadline: row.cells[3].innerText,
            status: row.cells[4].innerText,
            notes: row.cells[8].innerText
        };

        saveTaskData(row.rowIndex, taskData);
        alert('Task updated and saved successfully!');
    });
});

function saveTaskData(index, taskData) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index - 1] = taskData; // rowIndex starts from 1, subtract 1 for 0-based index
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');

    tasks.forEach((task, i) => {
        const row = taskList.rows[i];
        row.cells[0].innerText = task.deliverable;
        row.cells[1].innerText = task.owner;
        row.cells[2].innerText = task.startDate;
        row.cells[3].innerText = task.deadline;
        row.cells[4].innerText = task.status;
        row.cells[8].innerText = task.notes;
    });
}

// Load tasks on page load
window.onload = loadTasks;
