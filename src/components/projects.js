// Create a structure for adding projects
function Projects(title, description) {
    let todo = {};
  
  
    // Set parameters as keys to the object
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.notes = notes;

    const setProjectTitle = (title) => {
        this.title = title;
        return this;

    }
  
    return todo, setProjectTitle
  }
  