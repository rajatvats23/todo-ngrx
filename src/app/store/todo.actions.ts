import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const loadTodos = createAction(
    '[Todo] Load Todos'
)

export const loadTodosSuccess = createAction(
    '[Todo] Load Todos Success',
    props<{ todos: Todo[] }>()
)

export const loadTodosFailure = createAction(
    '[Todo] Load Todos Failure',
    props<{ error: string }>()
)

export const addTodo = createAction(
    '[Todo] Add Todo',
    props<{ title: string }>()
)

export const addTodoSuccess = createAction(
    '[Todo] Add Todo Success',
    props<{ todo: Todo }>()
)

export const addTodoFailure = createAction(
    '[Todo] Add Todo Failure',
    props<{ error: string }>()
)

export const toggleTodo = createAction(
    '[Todo] Toggle Todo',
    props<{ id: string; completed: boolean }>()
)

export const toggleTodoSuccess = createAction(
    '[Todo] Toggle Todo Success',
    props<{ todo: Todo }>()
)

export const toggleTodoFailure = createAction(
    '[Todo] Toggle Todo Failure',
    props<{ error: string }>()
)

export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props<{ id: string }>()
)

export const deleteTodoSucess = createAction(
    '[Todo] Delete Todo Success',
    props<{ id: string }>()
)

export const deleteTodoFailure = createAction(
    '[Todo] Delete Todo Failure',
    props<{ error: string }>()
)