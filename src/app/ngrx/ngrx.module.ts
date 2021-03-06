import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { LoadingStateModule } from './loading-state/loading-state.module';
import { TodoStateModule } from './todo-state/todo-state.module';

@NgModule({
    imports: [
        StoreModule.forRoot({ }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: environment.storeDevtools.maxAge,
            logOnly: environment.production,
        }),
        LoadingStateModule,
        TodoStateModule,
    ],
})
export class NgrxStateModule {}
