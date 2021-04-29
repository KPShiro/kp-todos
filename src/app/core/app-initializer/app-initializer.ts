import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class AppInitializer {

    public init(): Observable<boolean> {
        this._initNgBootstrap();
        return of(true);
    }

    private _initNgBootstrap(): void { }

}
