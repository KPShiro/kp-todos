import { ModuleWithProviders, NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";

import { AppInitializer } from "./domain/services/app-initializer/app-initializer";
import { AppInitializerProvider } from "./domain/services/app-initializer/app-initializer-provider";
import { VibrationService } from "./domain/services/vibration/vibration.service";
import { EmptyStateComponent } from "./ui/empty-state/empty-state.component";
import { TodoService } from "./domain/services/todo/todo.service";
import { LastUpdateDatePipe } from './domain/pipes/lastUpdateDate/last-update-date-pipe.pipe';

const coreComponents = [
    EmptyStateComponent,
];

const corePipes = [
    LastUpdateDatePipe,
];

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
    ],
    exports: [
        NgbModule,
        CommonModule,
        ...coreComponents,
        ...corePipes,
    ],
    declarations: [
        ...coreComponents,
        ...corePipes,
    ],
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                AppInitializer,
                AppInitializerProvider,
                VibrationService,
                TodoService,
            ],
        };
    }
}
