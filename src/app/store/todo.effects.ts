import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoApiService } from '../services/todo-api.service';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {

    private actions$ = inject(Actions);
    private todoApi = inject(TodoApiService);

    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addTodo),
            mergeMap(action =>
                this.todoApi.createTodo(action.title).pipe(
                    map(todo => TodoActions.addTodoSuccess({ todo })),
                    catchError(error => of(TodoActions.addTodoFailure({ error: error.message })))

                )
            )
        )
    )

    deleteTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.deleteTodo),
            mergeMap(action =>
                this.todoApi.deleteTodo(action.id).pipe(
                    map(response => TodoActions.deleteTodoSucess({id: action.id})),
                    catchError(error => of(TodoActions.deleteTodoFailure({ error: error.message })))
                )
            )
        ))

    toggleTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.toggleTodo),
            mergeMap(action =>
                this.todoApi.updateTodo(action.id, { completed: !action.completed }).pipe(
                    map(todo => TodoActions.toggleTodoSuccess({ todo })),
                    catchError(error =>
                        of(TodoActions.toggleTodoFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // Effect: Listen for loadTodos action
    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            // 1. Only react when loadTodos is dispatched
            ofType(TodoActions.loadTodos),

            // 2. Call the API
            mergeMap(() =>
                this.todoApi.getAllTodos().pipe(
                    // 3. Success: dispatch loadTodosSuccess with the data
                    map(todos => TodoActions.loadTodosSuccess({ todos })),

                    // 4. Error: dispatch loadTodosFailure
                    catchError(error =>
                        of(TodoActions.loadTodosFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}