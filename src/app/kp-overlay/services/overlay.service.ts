import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { KpOverlayComponent } from '../components';
import { KpOverlayRef } from '../models';

@Injectable()
export class KpOverlayService {

    public constructor(
        private _overlay: Overlay,
        private _injector: Injector,
    ) { }

    private _createInjector(ref: KpOverlayRef, inj: Injector) {
        const injectorTokens = new WeakMap([ [ KpOverlayRef, ref ] ]);
        return new PortalInjector(inj, injectorTokens);
    }

    private _createOverlay<R = any, T = any>(config: OverlayConfig, content: string | TemplateRef<any> | Type<any>, data?: T): KpOverlayRef<R> {
        const overlayRef = this._overlay.create(config);
        const kpOverlayRef = new KpOverlayRef<R, T>(overlayRef, content, data);
        const injector = this._createInjector(kpOverlayRef, this._injector);
        overlayRef.attach(new ComponentPortal(KpOverlayComponent, null, injector));

        return kpOverlayRef;
    }

    public openDialog<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data?: T): KpOverlayRef<R> {
        const config = new OverlayConfig({
            hasBackdrop: true,
            panelClass: [ 'kp-dialog' ],
            backdropClass: 'kp-overlay-backdrop',
            positionStrategy: this._overlay.position()
                .global()
                .centerVertically()
                .centerHorizontally(),
        });

        return this._createOverlay(config, content, data);
    }

    public openBottomSheet<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data?: T): KpOverlayRef<R> {
        const config = new OverlayConfig({
            hasBackdrop: true,
            panelClass: [ 'kp-bottomSheet' ],
            backdropClass: 'kp-overlay-backdrop',
            positionStrategy: this._overlay.position()
                .global()
                .bottom()
                .centerHorizontally(),
        });

        return this._createOverlay(config, content, data);
    }

}
