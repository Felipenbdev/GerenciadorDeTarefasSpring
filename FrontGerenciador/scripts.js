const apiUrl = 'http://localhost:8080/tasks';

async function fetchTasks() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const tasks = await response.json();
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');

            const taskDetails = document.createElement('span');
            taskDetails.textContent = `${task.title} - ${task.description}`;
            if (task.completed) {
                taskDetails.classList.add('completed');
            }

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('actions');

            const completeButton = document.createElement('button');
            completeButton.textContent = task.completed ? 'Concluída' : 'Click para concluir';
            completeButton.classList.add('completed-button');
            completeButton.disabled = task.completed;
            completeButton.addEventListener('click', () => completeTask(task.id, taskDetails, completeButton));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => deleteTask(task.id));

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit-button');
            editButton.addEventListener('click', () => editTask(task.id, task.title, task.description));

            actionsDiv.appendChild(completeButton);
            actionsDiv.appendChild(deleteButton);
            actionsDiv.appendChild(editButton);

            li.appendChild(taskDetails);
            li.appendChild(actionsDiv);

            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Fetch tasks failed:', error);
    }
}

async function completeTask(taskId, taskDetailsElement, completeButton) {
    try {
        const response = await fetch(`${apiUrl}/updateStatus/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: true })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Task status updated successfully');
        taskDetailsElement.classList.add('completed');
        completeButton.textContent = 'Concluída';
        completeButton.disabled = true;
    } catch (error) {
        console.error('Update task status failed:', error);
    }
}

async function deleteTask(taskId) {
    try {
        const response = await fetch(`${apiUrl}/${taskId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Task deleted successfully');
        fetchTasks();
    } catch (error) {
        console.error('Delete task failed:', error);
    }
}

async function addTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;

    const task = {
        title,
        description,
        completed: false
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Task added successfully');
        fetchTasks();
    } catch (error) {
        console.error('Add task failed:', error);
    }
}

async function editTask(taskId, currentTitle, currentDescription) {
    const newTitle = prompt("Edite o título:", currentTitle);
    const newDescription = prompt("Edite a descrição:", currentDescription);

    if (newTitle && newDescription) {
        try {
            const response = await fetch(`${apiUrl}/updateTitleAndDes/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTitle, description: newDescription })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Task updated successfully');
            fetchTasks();
        } catch (error) {
            console.error('Edit task failed:', error);
        }
    } else {
        alert('Título e descrição não podem ser vazios.');
    }
}

document.getElementById('add-task-button').addEventListener('click', addTask);

fetchTasks();
