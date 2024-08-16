document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskFile = document.getElementById('task-file').files[0];
    const highlight = document.getElementById('highlight').checked;
    const fileURL = URL.createObjectURL(taskFile);

    const li = document.createElement('li');
    if (highlight) {
        li.style.backgroundColor = '#ffeb3b';
    }
    li.innerHTML = `<strong>${taskName}</strong> - Due: ${taskDeadline}<br>${taskDesc}<br><a href="${fileURL}" target="_blank">View File</a> <button class="delete-btn">Delete</button>`;

    document.getElementById('task-list').appendChild(li);

    saveTask({ taskName, taskDeadline, taskDesc, fileURL, highlight });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
        deleteTask(taskName);
    });

    document.getElementById('task-name').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-file').value = '';
    document.getElementById('highlight').checked = false;
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
        if (task.highlight) {
            li.style.backgroundColor = '#ffeb3b';
        }
        li.innerHTML = `<strong>${task.taskName}</strong> - Due: ${task.taskDeadline}<br>${task.taskDesc}<br><a href="${task.fileURL}" target="_blank">View File</a> <button class="delete-btn">Delete</button>`;
        document.getElementById('task-list').appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
            deleteTask(task.taskName);
        });
    });
}
