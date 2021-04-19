import { AppInitializer } from "./app-initializer";

export function appInitializerFactory(initializer: AppInitializer): () => Promise<boolean> {
    return () => initializer.init().toPromise();
}
