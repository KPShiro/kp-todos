import { KpDialogType } from "../enums/dialog-type.enum";

export interface IKpDialogConfig<T = any> {
    type: KpDialogType;
    backdropClass?: string[];
    dialogClass?: string[];
    data?: T | undefined;
}

export const DEFAULT_KP_DIALOG_CONFIG: IKpDialogConfig = {
    type: KpDialogType.DIALOG,
};
