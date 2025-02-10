import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class TodoComponent {
  tasks: string[] = ['Buy groceries', 'Learn Angular'];
  newTask: string = '';
  editIndex: number | null = null;

  addTask() {
    if (this.newTask.trim()) {
      if (this.editIndex !== null) {
        this.tasks[this.editIndex] = this.newTask.trim();
        this.editIndex = null;
      } else {
        this.tasks.push(this.newTask.trim());
      }
      this.newTask = '';
    }
  }

  editTask(index: number) {
    this.newTask = this.tasks[index];
    this.editIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.editIndex === index) {
      this.newTask = '';
      this.editIndex = null;
    }
  }
}