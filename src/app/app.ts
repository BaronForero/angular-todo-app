import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {AddTodoFormComponent} from './todo/add-todo-form/add-todo-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    AddTodoFormComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
}
