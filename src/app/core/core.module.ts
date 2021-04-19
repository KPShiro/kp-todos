import { NgModule } from "@angular/core";
import { NGRXModule } from "./ngrx/ngrx.module";
import { AppInitializer } from "./services/app-initializer/app-initializer";
import { AppInitializerProvider } from "./services/app-initializer/app-initializer-provider";

@NgModule({
    imports: [
        NGRXModule,
    ],
    providers: [
        AppInitializer,
        AppInitializerProvider,
    ]
})
export class CoreModule { }
