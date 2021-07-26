import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '@app/core/core.module';

import { todoStateKey } from './todo-state/todo.selectors';
import { todoReducer } from './todo-state/todo.reducer';
import { TodoCommandsEffects } from './todo-state/todo-commands.effects';

import { TodoListItemComponent } from './ui';
import { DashboardComponent } from './feature';

const ngrxModules: any = [
    StoreModule.forFeature(todoStateKey, todoReducer),
    EffectsModule.forFeature([ TodoCommandsEffects ]),
];

@NgModule({
    declarations: [
        TodoListItemComponent,
        DashboardComponent,
    ],
    imports: [
        CoreModule,
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        ...ngrxModules,
    ],
    providers: [],
})
export class DashboardModule { }
