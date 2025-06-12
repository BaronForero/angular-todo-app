import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent} from './todo-list/todo-list.component';
import { TodoItem } from './models/todo-item.model';
import { AddTodoFormComponent} from './add-todo-form/add-todo-form.component';
import { MaterialModule } from './shared/material.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    TodoListComponent,
    AddTodoFormComponent,
    MaterialModule
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  public todos: TodoItem[] = [];
  public formOpen = false;

  constructor() {
    this.loadTodos();
    this.sortTodos();
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private sortTodos(): void {
    this.todos = [
      ...this.todos.filter(todoItem => !todoItem.completed),
      ...this.todos.filter(todoItem => todoItem.completed)
    ];
  }

  private loadTodos() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.todos = JSON.parse(saved);
    }
  }

  public addTodo(todo: { name: string; color: string, }) {
    this.todos.push({
      name: todo.name,
      completed: false,
      color: todo.color
    });
    this.sortTodos();
    this.saveTodos();
  }

  public toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
    this.sortTodos();
  }

  public deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
    this.sortTodos();
  }

}
