document.addEventListener('DOMContentLoaded', loadTasks);

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskFile = document.getElementById('task-file').files[0];
    const fileURL = URL.createObjectURL(taskFile);

    const li = document.createElement('li');
    li.innerHTML = `${taskName} - Due: ${taskDeadline} - <a href="${fileURL}" target="_blank">View File</a> <button class="delete-btn">Delete</button>`;

    document.getElementById('task-list').appendChild(li);

    saveTask({ taskName, taskDeadline, fileURL });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
        deleteTask(taskName);
    });

    document.getElementById('task-name').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-file').value = '';
});

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.taskName} - Due: ${task.taskDeadline} - <a href="${task.fileURL}" target="_blank">View File</a> <button class="delete-btn">Delete</button>`;
        document.getElementById('task-list').appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
            deleteTask(task.taskName);
        });
    });
}

function deleteTask(taskName) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.taskName !== taskName);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
