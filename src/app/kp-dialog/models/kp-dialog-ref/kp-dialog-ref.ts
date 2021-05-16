import * as uuid from 'uuid';

import { ComponentRef } from "@angular/core";
import { KpDialogHostComponent } from "@app/kp-dialog/components/kp-dialog-host/kp-dialog-host.component";
import { Observable, Subject } from "rxjs";

export class KpDialogRef {

    private readonly _afterClosed: Subject<string> = new Subject<string>();
    public readonly afterClosed: Observable<string> = this._afterClosed.asObservable();

    public constructor(
        private readonly _componentRef: ComponentRef<KpDialogHostComponent>,
        public readonly id: string = uuid.v4(),
    ) {
        this._componentRef.instance.afterClosed.subscribe(() => {
            this._afterClosed.next(this.id);
            this._afterClosed.complete();
        });
    }

    public close(): void {
        this._componentRef.instance.close();
    }

}
