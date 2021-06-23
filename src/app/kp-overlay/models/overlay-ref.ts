import { OverlayRef } from "@angular/cdk/overlay";
import { TemplateRef, Type } from "@angular/core";
import { Subject } from "rxjs";
import { KpOverlayCloseEventType } from "../enums";
import { KpOverlayCloseEvent } from "../interfaces";

export class KpOverlayRef<R = any, T = any> {

    public afterClosed$ = new Subject<KpOverlayCloseEvent<R>>();

    constructor(
        public overlay: OverlayRef,
        public content: string | TemplateRef<any> | Type<any>,
        public data?: T,
    ) {
        overlay.backdropClick().subscribe(() => {
            this._close(KpOverlayCloseEventType.BACKDROP_CLICK);
        });
    }

    private _close(type: KpOverlayCloseEventType, data?: R): void {
        this.overlay.dispose();
        this.afterClosed$.next({ type, data });
        this.afterClosed$.complete();
    }

    public close(data?: R): void {
        this._close(KpOverlayCloseEventType.CLOSE, data);
    }

}
