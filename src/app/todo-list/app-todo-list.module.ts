import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTodoListRoutingModule } from './app-todo-list-routing.module';
import { AppTodoListComponent } from './app-todo-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/todo-list.reducer';

@NgModule({
    declarations: [
        AppTodoListComponent
    ],
    imports: [
        CommonModule,
        AppTodoListRoutingModule,
        StoreModule.forFeature('todos', reducer),
    ]
})
export class AppTodoListModule { }
