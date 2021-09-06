import { OverlayDialogCloseEventType } from "../enums";

export interface IOverlayDialogCloseEvent<R> {
    type: OverlayDialogCloseEventType;
    data?: R;
}
