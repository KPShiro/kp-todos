import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTodoListComponent } from './app-todo-list.component';

const routes: Routes = [ { path: '', component: AppTodoListComponent } ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AppTodoListRoutingModule { }
