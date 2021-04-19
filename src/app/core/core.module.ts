import { ModuleWithProviders, NgModule } from "@angular/core";
import { AppInitializer } from "./services/app-initializer/app-initializer";
import { AppInitializerProvider } from "./services/app-initializer/app-initializer-provider";

@NgModule()
export class CoreModule {
    public static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                AppInitializer,
                AppInitializerProvider,
            ]
        };
    }
}
