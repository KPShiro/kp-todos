import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FEATURE_KEY } from './state/dashboard.selectors';
import { featureReducer } from './state/dashboard.reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';

const ngbBootstrapModules: any = [];

@NgModule({
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StoreModule.forFeature(FEATURE_KEY, featureReducer),
        ReactiveFormsModule,
        ...ngbBootstrapModules,
    ],
    exports: [],
    providers: [],
})
export class DashboardModule { }
