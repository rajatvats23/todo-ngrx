import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo';
import { TodoItemComponent } from '../todo-item/todo-item';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';
import { selectAllTodos } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TodoItemComponent],
  standalone: true,
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.todos$ = this.store.select(selectAllTodos);
  }

  onToggle(id: number) {
    this.store.dispatch(TodoActions.toggleTodo({id}))
  }
  
  onDelete(id: number) {
    this.store.dispatch(TodoActions.deleteTodo({id}))
  }
}