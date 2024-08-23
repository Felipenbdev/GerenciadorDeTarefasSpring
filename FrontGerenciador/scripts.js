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
            li.textContent = `${task.title} - ${task.description}`;
            if (task.completed) {
                li.classList.add('completed');
            }
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Fetch tasks failed:', error);
    }
}

async function addTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const completed = document.getElementById('task-completed').checked;

    const task = {
        title,
        description,
        completed
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
        console.log('Task added successfully'); // Debug message
        fetchTasks(); // Recarregar a lista de tarefas após adicionar
    } catch (error) {
        console.error('Add task failed:', error);
    }
}

// Adiciona um ouvinte de evento para o botão
document.getElementById('add-task-button').addEventListener('click', addTask);

// Fetch tasks on page load
fetchTasks();
