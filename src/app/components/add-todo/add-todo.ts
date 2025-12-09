import { Component } from '@angular/core';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.css']
})
export class AddTodoComponent {
  constructor(private todoService: TodoService) {}

  onSubmit(input: HTMLInputElement) {
    const title = input.value.trim();
    if (title) {
      this.todoService.addTodo(title);
      input.value = '';
    }
  }
}