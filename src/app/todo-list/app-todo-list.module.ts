import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTodoListRoutingModule } from './app-todo-list-routing.module';
import { AppTodoListComponent } from './app-todo-list.component';

@NgModule({
    declarations: [
        AppTodoListComponent
    ],
    imports: [
        CommonModule,
        AppTodoListRoutingModule
    ]
})
export class AppTodoListModule { }
