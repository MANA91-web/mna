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

        // Here you can implement the logic to save the updated taskData
        console.log('Updated task data:', taskData);

        alert('Task updated successfully!');
    });
});
