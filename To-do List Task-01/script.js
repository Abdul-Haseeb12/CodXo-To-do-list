document.getElementById('add-button').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        return;
    }

    const todoList = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    const textNode = document.createTextNode(todoText);
    const deleteSpan = document.createElement('span');
    deleteSpan.textContent = '❌';
    deleteSpan.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(textNode);
    listItem.appendChild(deleteSpan);
    todoList.appendChild(listItem);

    todoInput.value = '';
}
