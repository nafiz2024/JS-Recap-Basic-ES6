const loadTodo = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    fetch(url)
        .then(res => res.json())
        .then(data => displayTodo(data))
};

const displayTodo = todo => {
    const todoContainer = document.getElementById('todo_container');
    todoContainer.innerHTML = '';

    todo.forEach(td => {
        const div = document.createElement('div');
        div.classList.add('todo');
        div.innerHTML = `
            <div class="card w-96 h-full bg-base-100 card-lg shadow-sm">
          <div class="card-body p-3">
            <h2 class="card-title">${td.completed ? '<i class="fa-solid fa-square-check"></i>' : '<i class="fa-regular fa-square-check"></i>'}</h2>
            <p>
              ${td.title}
            </p>
          </div>
        </div>
        `;
        todoContainer.appendChild(div);
    });
}

loadTodo();