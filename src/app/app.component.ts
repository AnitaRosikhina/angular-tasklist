import { Component } from '@angular/core';
import {ITask} from "./tasklist/user.interfase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tasklist';
  taskInput = ''
  tasks: ITask[] = []
  error = false

  addUser(): void {
    if(this.taskInput) {
      this.tasks.push({taskName: this.taskInput, status: false})
      this.taskInput = ''
      this.error = false
    } else {
      this.error = true
    }
  }
}
