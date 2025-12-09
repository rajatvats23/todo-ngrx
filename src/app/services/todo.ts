import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  
  todos$ = this.todosSubject.asObservable();

  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(newTodo);
    this.todosSubject.next(this.todos);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todosSubject.next(this.todos);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.todosSubject.next(this.todos);
  }
}