import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FEATURE_KEY } from './todo-state/todo.selectors';
import { todoReducer } from './todo-state/todo.reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoEditFormComponent } from './components/todo-edit-form/todo-edit-form.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo-state/todo.effects';
import { TodoCreateFormComponent } from './components/todo-create-form/todo-create-form.component';
import { CoreModule } from '@app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { TodoFacade } from './services/todo.facade';

const ngbBootstrapModules: any = [];

const ngrxModules: any = [
    StoreModule.forFeature(FEATURE_KEY, todoReducer),
    EffectsModule.forFeature([ TodoEffects ]),
];

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
        TodoEditFormComponent,
        TodoCreateFormComponent,
        DashboardComponent,
    ],
    imports: [
        CoreModule,
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        ...ngrxModules,
        ...ngbBootstrapModules,
    ],
    providers: [
        TodoFacade,
    ],
})
export class DashboardModule { }
