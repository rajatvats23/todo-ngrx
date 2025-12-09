import { createReducer, on } from "@ngrx/store";
import { TodoState, initialState} from './todo.state';
import * as TodoActions from './todo.actions';

export const todoReducer = createReducer(
    initialState,

    on(TodoActions.addTodo, (state, { title }) => ({
        ...state,
        todos: [...state.todos, {
            id: Date.now(),
            title,
            completed: false
        }]
    })),

    on(TodoActions.toggleTodo, (state, {id}) => ({
        ...state,
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),

    on(TodoActions.deleteTodo, (state, {id}) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    }))
)