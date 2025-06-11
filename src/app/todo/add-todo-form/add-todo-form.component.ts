import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@Component({
  standalone: true,
  selector: 'app-add-todo-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.scss'
})
export class AddTodoFormComponent {

  @Output() save = new EventEmitter<{ name: string, color:string }>();
  @Output() cancel  = new EventEmitter<void>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      color: ['#000000']
    });
  }

  public onSave(){
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.form.reset({ color: '#000000' });
    }
  }

  public onCancel() {
    this.cancel.emit();
    this.form.reset({ color: '#000000' });
  }

  public resetForm() {
    this.form.reset({color: '#000000'});
  }

}
