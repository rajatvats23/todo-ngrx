import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from './todo.state';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
    selectTodoState,
    (state) => state.todos
)

export const selectTodoCount = createSelector(
    selectAllTodos,
    (todos) => todos.length
)

export const selectCompletedTodos = createSelector(
    selectAllTodos,
    (todos) => todos.filter(t => t.completed)
)