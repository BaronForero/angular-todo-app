import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoComponent} from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
}
