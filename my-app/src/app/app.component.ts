import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TaskListComponent],
})
export class AppComponent {
  title = 'my-app';
}
