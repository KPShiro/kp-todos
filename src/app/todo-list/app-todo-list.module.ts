import { NgModule } from '@angular/core';
import { AppTodoListRoutingModule } from './app-todo-list-routing.module';
import { AppTodoListComponent } from './app-todo-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/todo-list.reducer';
import { FEATURE_KEY } from './ngrx/todo-list.selectors';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        AppTodoListComponent
    ],
    imports: [
        CoreModule,
        AppTodoListRoutingModule,
        StoreModule.forFeature(FEATURE_KEY, reducer),
    ]
})
export class AppTodoListModule { }
