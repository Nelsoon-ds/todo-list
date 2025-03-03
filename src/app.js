export class Todo {
  constructor(title, description, dueDate, priority, notes, progress) {

    // Set parameters as keys to the object
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.progress = progress;
} 

updateProgress(newProgress) {
    this.progress = newProgress;
}




  }
