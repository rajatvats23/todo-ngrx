import { Todo } from '../models/todo.model';

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: []
}