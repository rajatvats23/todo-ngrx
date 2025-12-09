import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo';
import { AddTodoComponent } from '../add-todo/add-todo';
import { TodoItemComponent } from '../todo-item/todo-item';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TodoItemComponent],
  standalone: true,
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.todos$;
  }

  onToggle(id: number) {
    this.todoService.toggleTodo(id);
  }

  onDelete(id: number) {
    this.todoService.deleteTodo(id);
  }
}