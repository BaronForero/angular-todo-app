import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'todo-input',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {

  @Output() add = new EventEmitter<string>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submit() {
    if (this.form.valid) {
      this.add.emit(this.form.value.task!);
      this.form.reset();
    }
  }
}


