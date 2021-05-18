import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FEATURE_KEY } from './state/dashboard.selectors';
import { featureReducer } from './state/dashboard.reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './state/dashboard.effects';

const ngbBootstrapModules: any = [];

const ngrxModules: any = [
    StoreModule.forFeature(FEATURE_KEY, featureReducer),
    EffectsModule.forFeature([ DashboardEffects ]),
];

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
        EmptyStateComponent,
        TodoFormComponent,
    ],
    imports: [
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
