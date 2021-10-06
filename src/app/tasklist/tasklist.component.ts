import {Component, Input} from '@angular/core';
import { ITask } from "./user.interfase";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input() tasks: ITask[] = []
  status = false
  editTask = ''
  editingIndex: number = 0
  error = false
  blockEdit = false

  changeStatus(index: number): void {
    this.tasks[index].status = !this.tasks[index].status
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1)
  }

  edit(task: ITask, index: number){
    this.editTask = task.taskName
    this.editingIndex = index
    this.blockEdit = true
  }

  save(): void {
    if(this.editTask) {
      this.tasks[this.editingIndex] = {
        taskName: this.editTask,
        status: false
      }
      this.editTask = ''
      this.error = false
      this.blockEdit = false
    } else {
      this.error = true
    }
  }
}
