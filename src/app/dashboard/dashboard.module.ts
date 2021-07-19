import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { todoStateKey } from './todo-state/todo.selectors';
import { todoReducer } from './todo-state/todo.reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoEditFormComponent } from './components/todo-edit-form/todo-edit-form.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoCommandsEffects } from './todo-state/todo-commands.effects';
import { TodoCreateFormComponent } from './components/todo-create-form/todo-create-form.component';
import { CoreModule } from '@app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { TodoListItemPlaceholderComponent } from './components/todo-list-item-placeholder/todo-list-item-placeholder.component';

const ngbBootstrapModules: any = [];

const ngrxModules: any = [
    StoreModule.forFeature(todoStateKey, todoReducer),
    EffectsModule.forFeature([ TodoCommandsEffects ]),
];

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
        TodoEditFormComponent,
        TodoCreateFormComponent,
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
