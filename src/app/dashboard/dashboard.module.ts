import { ModuleWithProviders, NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@app/core/core.module';

import { TodoListGroupItemComponent } from './ui/todo-list-group-item/todo-list-group-item.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { TodoFacade } from './domain/services/todo-facade/todo-facade.service';
import { TodoListGroupComponent } from './ui/todo-list-group/todo-list-group.component';

@NgModule({
    declarations: [
        TodoListGroupItemComponent,
        DashboardComponent,
        TodoListGroupComponent,
    ],
    imports: [
        CoreModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [],
})
export class DashboardModule {

    public static forRoot(): ModuleWithProviders<DashboardModule> {
        return {
            ngModule: DashboardModule,
            providers: [
                TodoFacade,
            ],
        };
    }

}
