import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.css']
})
export class AddTodoComponent {
  constructor(private store: Store) {}

  onSubmit(input: HTMLInputElement) {
    const title = input.value.trim();
    if (title) {
      this.store.dispatch(TodoActions.addTodo({title}));
      input.value = '';
    }
  }
}