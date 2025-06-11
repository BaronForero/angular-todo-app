import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../models/todo-item.model';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [
    TodoItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {
  @Input() todos: TodoItem[] = [];
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

}

