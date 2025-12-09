import { Component, signal } from '@angular/core';
import { AddTodoComponent } from './components/add-todo/add-todo';
import { TodoItemComponent } from './components/todo-item/todo-item';
import { TodoListComponent } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [AddTodoComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
}
