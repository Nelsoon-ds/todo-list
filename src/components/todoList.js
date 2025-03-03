function loadTodo() {
  let todo1 = Todo('Date night', 'Gotta clean apartment', '12/02/2025', "high", "Buy groceries");
console.log(todo1);
}

function Todo(title, description, dueDate, priority, notes, progress) {
    let todo = {};
    // Set parameters as keys to the object
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.notes = notes;
    todo.progress = progress;
    return todo; 
}







export default loadTodo;
