import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '@app/core/core.module';

import { todoStateKey } from './todo-state/todo.selectors';
import { todoReducer } from './todo-state/todo.reducer';
import { TodoCommandsEffects } from './todo-state/todo-commands.effects';

import { TodoListItemComponent } from './ui/todo-list-item/todo-list-item.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { TodoFacade } from './domain/services/todo-facade/todo-facade.service';

const ngrxModules: any = [
    StoreModule.forFeature(todoStateKey, todoReducer),
    EffectsModule.forFeature([ TodoCommandsEffects ]),
];

@NgModule({
    declarations: [
        TodoListItemComponent,
        DashboardComponent,
    ],
    imports: [
        CoreModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        ...ngrxModules,
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
