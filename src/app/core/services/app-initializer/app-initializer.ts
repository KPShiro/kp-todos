import { Injectable } from "@angular/core";
import { NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { Observable, of } from "rxjs";

@Injectable()
export class AppInitializer {
    public constructor(
      private readonly _ngModalConfig: NgbModalConfig,
    ) {}

    public init(): Observable<boolean> {
        this._initNgBootstrap();
        return of(true);
    }

    private _initNgBootstrap(): void {
        this._ngModalConfig.centered = true;
        this._ngModalConfig.size = 'md';
    }
}
