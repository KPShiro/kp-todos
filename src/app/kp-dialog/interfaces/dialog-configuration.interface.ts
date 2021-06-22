import { KpDialogType } from "../enums/dialog-type.enum";

export interface IKpDialogConfig {
    type: KpDialogType;
    backdropClass?: string[];
    dialogClass?: string[];
}

export const DEFAULT_KP_DIALOG_CONFIG: IKpDialogConfig = {
    type: KpDialogType.DIALOG,
};
