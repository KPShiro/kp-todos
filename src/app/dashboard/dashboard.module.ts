import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FEATURE_KEY } from './state/selectors';
import { dashboardStateReducer } from './state/reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoEditFormComponent } from './components/todo-edit-form/todo-edit-form.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardCommandsEffects } from './state/commands-effects';
import { TodoCreateFormComponent } from './components/todo-create-form/todo-create-form.component';
import { CoreModule } from '@app/core/core.module';

const ngbBootstrapModules: any = [];

const ngrxModules: any = [
    StoreModule.forFeature(FEATURE_KEY, dashboardStateReducer),
    EffectsModule.forFeature([ DashboardCommandsEffects ]),
];

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
        TodoEditFormComponent,
        TodoCreateFormComponent,
    ],
    imports: [
        CoreModule,
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        ...ngrxModules,
        ...ngbBootstrapModules,
    ],
    exports: [],
    providers: [],
})
export class DashboardModule { }
