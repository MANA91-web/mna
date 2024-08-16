document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskFile = document.getElementById('task-file').files[0];

    const li = document.createElement('li');
    const fileURL = URL.createObjectURL(taskFile);

    li.innerHTML = `${taskName} - Due: ${taskDeadline} - <a href="${fileURL}" target="_blank">View File</a>`;

    document.getElementById('task-list').appendChild(li);

    document.getElementById('task-name').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-file').value = '';
});
