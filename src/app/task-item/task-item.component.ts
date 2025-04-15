import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
 Task = '';

@Input () task! : string;
@Output () showTask = new EventEmitter<Task>();


fnShowTask(): void {
  this.showTask.emit(this.task);
}

fnDeleteTask(task: string): void{
  this.fnDeleteTask(this.task);
}
}

