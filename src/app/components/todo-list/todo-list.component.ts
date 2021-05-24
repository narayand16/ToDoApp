import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IToDo } from 'src/app/models/todo.model';
import { GetToDoList } from 'src/app/state/to-do.action';
import { ToDoState } from 'src/app/state/to-do.reducer';
import { getToDoList } from 'src/app/state/to-do.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<IToDo[]> | undefined;

  constructor(private router: Router, private store: Store<ToDoState>) { }

  ngOnInit(): void {
    // this.store.dispatch(GetToDoList());
    this.todos$ = this.store.pipe(select(getToDoList));
  }

  addToDo() {
    this.router.navigate(['/create']);
  }

}
