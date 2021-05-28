import { ModuleWithProviders, NgModule } from "@angular/core";
import { AppInitializer } from "./app-initializer/app-initializer";
import { AppInitializerProvider } from "./app-initializer/app-initializer-provider";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { VibrationService } from "./services/vibration.service";

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
    ],
    exports: [
        NgbModule,
        CommonModule,
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
            ],
        };
    }
}
