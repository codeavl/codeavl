import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading = false;
  error: string | null = null;

  private taskService = inject(TaskService);

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.loading = true;
    this.taskService.getTasks()
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load tasks';
          this.loading = false;
        }
      });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id)
      .subscribe({
        next: () => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        },
        error: (err) => {
          this.error = 'Failed to delete task';
        }
      });
  }
}