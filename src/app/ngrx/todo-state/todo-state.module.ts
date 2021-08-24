import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TODO_STATE_KEY } from './todo-state';
import { TodoStateEffects } from './todo-state-effects';
import { todoStateReducer } from './todo-state-reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(TODO_STATE_KEY, todoStateReducer),
        EffectsModule.forFeature([ TodoStateEffects ]),
    ],
})
export class TodoStateModule {}
