import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, ElementRef, OnInit } from '@angular/core';
import { IKpDialogConfig } from '@app/kp-dialog/interfaces/dialog-configuration.interface';

@Component({
    selector: 'kp-dialog',
    templateUrl: './kp-dialog-host.component.html',
    styleUrls: [ './kp-dialog-host.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KpDialogHostComponent implements OnInit {

    private get _dialogContentElement(): HTMLElement {
        return this.elementRef.nativeElement.querySelector('.kp-dialog-content') as HTMLElement;
    }

    private get _dialogBackdropElement(): HTMLElement {
        return this.elementRef.nativeElement.querySelector('.kp-dialog-backdrop') as HTMLElement;
    }

    @Input()
    public config!: IKpDialogConfig;

    @Output()
    public afterClosed: EventEmitter<void> = new EventEmitter();

    public constructor(
        private elementRef: ElementRef<HTMLElement>,
    ) { }

    public ngOnInit(): void {
        this.elementRef.nativeElement.classList.add('kp-dialog');
        this.elementRef.nativeElement.classList.add(`kp-dialog--${this.config.type}`);

        this.config.dialogClass?.forEach((cssClass) => {
            this._dialogContentElement.classList.add(cssClass);
        });

        this.config.backdropClass?.forEach((cssClass) => {
            this._dialogBackdropElement.classList.add(cssClass);
        });
    }

    public close(): void {
        this._dialogContentElement.style.animation = `${this.config.type}Out 0.5s`;
        this._dialogBackdropElement.style.animation = 'backdropOut 0.5s';
    }

    public animationDone(event: AnimationEvent): void {
        if(event.animationName === `${this.config.type}Out`)
            this.afterClosed.emit();
    }

}
