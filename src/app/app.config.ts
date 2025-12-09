import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { todoReducer } from './store/todo.reducer';
import { TodoEffects } from './store/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideStore({todos: todoReducer}),
    provideEffects([TodoEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};