import { ModuleWithProviders, NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";

import { AppInitializer } from "./domain/services/app-initializer/app-initializer";
import { AppInitializerProvider } from "./domain/services/app-initializer/app-initializer-provider";
import { VibrationService } from "./domain/services/vibration/vibration.service";
import { EmptyStateComponent } from "./ui/empty-state/empty-state.component";
import { TodoService } from "./domain/services/todo/todo.service";

const coreComponents = [
    EmptyStateComponent,
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
    ],
    declarations: [
        ...coreComponents,
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
