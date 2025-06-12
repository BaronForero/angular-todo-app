import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

@Component({
  standalone: true,
  selector: 'app-todo-item',
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() name: string = '';
  @Input() completed: boolean = false;
  @Input() color: string = '#000000';

  @Output() toggle = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
}
