import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'list', loadChildren: () => import('./todo-list/app-todo-list.module').then(m => m.AppTodoListModule) },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
