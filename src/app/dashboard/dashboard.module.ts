import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FEATURE_KEY } from './state/dashboard.selectors';
import { featureReducer } from './state/dashboard.reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
    declarations: [
        TodoListComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StoreModule.forFeature(FEATURE_KEY, featureReducer),
    ],
    exports: [],
    providers: [],
})
export class DashboardModule { }
