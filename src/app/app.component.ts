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

  CompletedTasks : Todo[] = [];

  addTask (form : NgForm) : void {
    let newTaskName = form.form.value.item;
    let newTask : Todo = { task : newTaskName, completed : false}
    this.Tasks.push(newTask);
  }

  allComplete : boolean = true;

  completeTask (itemIndex : number) : void {
    this.Tasks[itemIndex].completed = true;
  }

  deleteTask (itemIndex : number) : void {
    this.Tasks.splice(itemIndex, 1);
  }

  restoreTask (itemIndex : number) : void {
    this.Tasks[itemIndex].completed = false;
  }
}
