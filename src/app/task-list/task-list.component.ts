import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
 

  tasks: string[] = [];
  saveTask = String;

  constructor() {
    console.log('TaskListComponent initialized');
  }



  addTask(saveTask: any): void {
    this.addTask(saveTask);
  }

  updateTask(): void {

  }

  deleteTask() : void {
  }
}
