import { OverlayRef } from "@angular/cdk/overlay";
import { TemplateRef, Type } from "@angular/core";
import { Subject } from "rxjs";
import { OverlayDialogCloseEventType } from "../enums";
import { IOverlayDialogCloseEvent } from "../interfaces";

export class OverlayDialogRef<R = any, T = any> {

    public afterClosed$ = new Subject<IOverlayDialogCloseEvent<R>>();

    constructor(
        public overlay: OverlayRef,
        public content: string | TemplateRef<any> | Type<any>,
        public data?: T,
    ) {
        overlay.backdropClick().subscribe(() => {
            this._close(OverlayDialogCloseEventType.BACKDROP_CLICK);
        });
    }

    private _close(type: OverlayDialogCloseEventType, data?: R): void {
        this.overlay.dispose();
        this.afterClosed$.next({ type, data });
        this.afterClosed$.complete();
    }

    public close(data?: R): void {
        this._close(OverlayDialogCloseEventType.ACTION_CLOSE, data);
    }

}
