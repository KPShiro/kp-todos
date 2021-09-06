import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, Type } from '@angular/core';
import { OverlayDialogContentType } from '@app/overlay-dialog/domain/enums';
import { OverlayDialogRef } from '@app/overlay-dialog/domain/models';

@Component({
    selector: 'app-overlay-base',
    templateUrl: './overlay-base.component.html',
    styleUrls: [ './overlay-base.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayBaseComponent implements OnInit {

    public contentType: OverlayDialogContentType = OverlayDialogContentType.COMPONENT;
    public content!: string | TemplateRef<any> | Type<any>;
    public context: any;

    public constructor(
        private _ref: OverlayDialogRef,
    ) { }

    public ngOnInit(): void {
        this.content = this._ref.content;

        if (typeof this.content === 'string'){
            this.contentType = OverlayDialogContentType.STRING;
        } else if (this.content instanceof TemplateRef){
            this.contentType = OverlayDialogContentType.TEMPLATE;
            this.context = {
                close: this._ref.close.bind(this._ref),
            };
        } else {
            this.contentType = OverlayDialogContentType.COMPONENT;
        }
    }

    public close(): void {
        this._ref.close();
    }

}
