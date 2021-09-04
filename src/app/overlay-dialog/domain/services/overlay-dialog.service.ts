import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { OverlayBaseComponent } from '@app/overlay-dialog/ui/overlay-base/overlay-base.component';
import { OverlayDialogRef } from '../models';

@Injectable()
export class OverlayDialogService {

    public constructor(
        private _overlay: Overlay,
        private _injector: Injector,
    ) { }

    private _createInjector(ref: OverlayDialogRef, inj: Injector) {
        const injectorTokens = new WeakMap([ [ OverlayDialogRef, ref ] ]);
        return new PortalInjector(inj, injectorTokens);
    }

    private _createOverlay<R = any, T = any>(config: OverlayConfig, content: string | TemplateRef<any> | Type<any>, data?: T): OverlayDialogRef<R> {
        const overlayRef = this._overlay.create(config);
        const kpOverlayRef = new OverlayDialogRef<R, T>(overlayRef, content, data);
        const injector = this._createInjector(kpOverlayRef, this._injector);
        overlayRef.attach(new ComponentPortal(OverlayBaseComponent, null, injector));

        return kpOverlayRef;
    }

    public openDialog<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data?: T): OverlayDialogRef<R> {
        const config = new OverlayConfig({
            hasBackdrop: true,
            panelClass: [ 'app-overlay-dialog' ],
            backdropClass: 'app-overlay-dialog-backdrop',
            positionStrategy: this._overlay.position()
                .global()
                .centerVertically()
                .centerHorizontally(),
        });

        return this._createOverlay(config, content, data);
    }

    public openBottomSheet<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data?: T): OverlayDialogRef<R> {
        const config = new OverlayConfig({
            hasBackdrop: true,
            panelClass: [ 'app-overlay-dialog-bottom-sheet' ],
            backdropClass: 'app-overlay-dialog-backdrop',
            positionStrategy: this._overlay.position()
                .global()
                .bottom()
                .centerHorizontally(),
        });

        return this._createOverlay(config, content, data);
    }

}
