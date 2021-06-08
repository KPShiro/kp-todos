import { ModuleWithProviders, NgModule } from "@angular/core";
import { AppInitializer } from "./app-initializer/app-initializer";
import { AppInitializerProvider } from "./app-initializer/app-initializer-provider";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { VibrationService } from "./services/vibration/vibration.service";
import { EmptyStateComponent } from "./components/empty-state/empty-state.component";
import { TodoService } from "./services/todo/todo.service";

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
