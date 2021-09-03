import { APP_INITIALIZER, Provider } from "@angular/core";
import { AppInitializer } from "./app-initializer";
import { appInitializerFactory } from "./app-initializer-factory";

export const AppInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [ AppInitializer ],
    multi: true,
};
