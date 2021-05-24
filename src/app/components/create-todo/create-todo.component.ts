import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToDo } from 'src/app/state/to-do.action';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  
  todoForm: FormGroup = {} as FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.todoForm = this.createToDoForm();
  }

  createToDoForm() {
    return this.fb.group({
      title: [''],
      isCompleted: [false],
      description: [''],
    });
  }

  onSaveToDo() {
    console.log('form val', this.todoForm.value);
    this.store.dispatch(addToDo(this.todoForm.value));
    this.router.navigate(['/list']);
  }

  onCancel() {
    this.router.navigate(['/list']);
  }
}
