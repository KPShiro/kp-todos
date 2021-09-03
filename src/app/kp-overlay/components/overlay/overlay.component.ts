import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, Type } from '@angular/core';
import { KpOverlayContentType } from '../../enums';
import { KpOverlayRef } from '../../models';

@Component({
    selector: 'kp-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: [ './overlay.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpOverlayComponent implements OnInit {

    public contentType: KpOverlayContentType = KpOverlayContentType.COMPONENT;
    public content!: string | TemplateRef<any> | Type<any>;
    public context: any;

    public constructor(
        private _ref: KpOverlayRef,
    ) { }

    public ngOnInit(): void {
        this.content = this._ref.content;

        if (typeof this.content === 'string'){
            this.contentType = KpOverlayContentType.STRING;
        } else if (this.content instanceof TemplateRef){
            this.contentType = KpOverlayContentType.TEMPLATE;
            this.context = {
                close: this._ref.close.bind(this._ref),
            };
        } else {
            this.contentType = KpOverlayContentType.COMPONENT;
        }
    }

    public close(): void {
        this._ref.close();
    }

}
