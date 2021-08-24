import { ModuleWithProviders, NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@app/core/core.module';

import { TodoListItemComponent } from './ui/todo-list-item/todo-list-item.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { TodoFacade } from './domain/services/todo-facade/todo-facade.service';

@NgModule({
    declarations: [
        TodoListItemComponent,
        DashboardComponent,
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
