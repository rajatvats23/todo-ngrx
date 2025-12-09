import { createReducer, on } from "@ngrx/store";
import { TodoState, initialState } from './todo.state';
import * as TodoActions from './todo.actions';

export const todoReducer = createReducer(
    initialState,

    on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos
    })),

    on(TodoActions.addTodoSuccess, (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    })),

    on(TodoActions.toggleTodoSuccess, (state, { todo }) => ({
        ...state,
        todos: state.todos.map(t =>
            t._id === todo._id ? todo : t
        )
    })),

    on(TodoActions.deleteTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo._id !== id)
    }))
)