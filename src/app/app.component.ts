import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoLab';

  Tasks : Todo[] = [
    { task : 'order items from Ikea', completed: false},
    { task: 'respond to Uncle Dan', completed: true},
    { task: 'put up fan', completed: false},
    { task: 'look at christmas calendar', completed: false}
  ];

  addTask (form : NgForm) : void {
    let newTaskName = form.form.value.item;
    let newTask : Todo = { task : newTaskName, completed : false}
    this.Tasks.push(newTask);
  }

  allComplete() : boolean {
    if (this.Tasks.length == 0) {
      return true;
    }
    else if (this.Tasks.filter (t => t.completed == false).length == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  completeTask (itemIndex : number) : void {
    this.Tasks[itemIndex].completed = true;
  }

  deleteTask (itemIndex : number) : void {
    let resultTask : Todo = this.filteredTasks[itemIndex];
    this.filteredTasks.splice(itemIndex, 1);
    let i : number = this.Tasks.indexOf(resultTask);
    this.Tasks.splice(i, 1);
  }

  restoreTask (itemIndex : number) : void {
    this.Tasks[itemIndex].completed = false;
  }

  filteredTasks : Todo[] = this.Tasks;

  filterTasks(input : string) {
    this.filteredTasks = this.Tasks.filter(T => T.task.includes(input));
  }
}
