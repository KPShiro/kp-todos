import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '@app/core/core.module';

import { TodoListComponent, TodoListItemComponent, TodoListItemPlaceholderComponent } from './ui';
import { DashboardComponent } from './feature/dashboard.component';

import { todoStateKey } from './todo-state/todo.selectors';
import { todoReducer } from './todo-state/todo.reducer';
import { TodoCommandsEffects } from './todo-state/todo-commands.effects';

const ngbBootstrapModules: any = [];

const ngrxModules: any = [
    StoreModule.forFeature(todoStateKey, todoReducer),
    EffectsModule.forFeature([ TodoCommandsEffects ]),
];

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
        DashboardComponent,
        TodoListItemPlaceholderComponent,
    ],
    imports: [
        CoreModule,
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        ...ngrxModules,
        ...ngbBootstrapModules,
    ],
    providers: [],
})
export class DashboardModule { }
