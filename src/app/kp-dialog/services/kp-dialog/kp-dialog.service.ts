import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type } from '@angular/core';
import { KpDialogHostComponent } from '@app/kp-dialog/components/kp-dialog-host/kp-dialog-host.component';
import { KpDialogType } from '@app/kp-dialog/enums/dialog-type.enum';
import { IKpDialogConfig } from '@app/kp-dialog/interfaces/dialog-configuration.interface';
import { KpDialogHost } from '@app/kp-dialog/models/kp-dialog-host/kp-dialog-host';
import { KpDialogRef } from '@app/kp-dialog/models/kp-dialog-ref/kp-dialog-ref';

@Injectable()
export class KpDialogService {

    private CONFIG: IKpDialogConfig = {
        type: KpDialogType.DIALOG,
    };

    private dialogRefs: KpDialogRef[] = [];

    public constructor(
        private readonly _componentFactoryResolver: ComponentFactoryResolver,
        private readonly _applicationRef: ApplicationRef,
        private readonly _injector: Injector,
    ) { }

    public open<DataType = any, ComponentType = any>(componentType: Type<ComponentType>, config: IKpDialogConfig<DataType> = this.CONFIG): KpDialogRef {
        const dialogHost: KpDialogHost = new KpDialogHost<DataType>(config.data);
        const dialogComponent: ComponentRef<ComponentType> = this._createDialogComponent(componentType, dialogHost);
        const dialogRef: KpDialogRef = this._spawnDialog(dialogComponent, config);

        dialogHost.close = () => dialogRef.close();

        this.dialogRefs.push(dialogRef);
        return dialogRef;
    }

    public closeAll(): void {
        this.dialogRefs.forEach((dialogRef) => (dialogRef.close()));
    }

    private _createDialogComponent<ComponentType>(componentType: Type<ComponentType>, dialogHost: KpDialogHost): ComponentRef<ComponentType> {
        const injector: Injector = Injector.create({
            parent: this._injector,
            providers: [
                {
                    provide: KpDialogHost,
                    useValue: dialogHost,
                },
            ],
        });

        const componentFactory: ComponentFactory<ComponentType> = this._componentFactoryResolver.resolveComponentFactory(componentType);
        const componentRef: ComponentRef<ComponentType> = componentFactory.create(injector);

        this._applicationRef.attachView(componentRef.hostView);

        return componentRef;
    }

    private _spawnDialog<ComponentType>(componentRef: ComponentRef<ComponentType>, config: IKpDialogConfig): KpDialogRef {
        const componentFactory: ComponentFactory<KpDialogHostComponent> = this._componentFactoryResolver.resolveComponentFactory(KpDialogHostComponent);
        const dialogComponentRef: ComponentRef<KpDialogHostComponent> = componentFactory.create(this._injector, [ [ componentRef.location.nativeElement ] ]);
        dialogComponentRef.instance.config = config;

        const dialogRef: KpDialogRef = new KpDialogRef(dialogComponentRef);

        dialogRef.afterClosed.subscribe((id) => {
            this._destroyDialog(id, componentRef, dialogComponentRef);
        });

        this._applicationRef.attachView(dialogComponentRef.hostView);
        document.body.appendChild(dialogComponentRef.location.nativeElement);

        return dialogRef;
    }

    private _destroyDialog(id: string, componentRef: ComponentRef<any>, dialogComponentRef: ComponentRef<KpDialogHostComponent>): void {
        this._applicationRef.detachView(dialogComponentRef.hostView);
        dialogComponentRef.destroy();

        this._applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();

        this.dialogRefs = this.dialogRefs.filter((d) => d.id !== id);
    }

}
