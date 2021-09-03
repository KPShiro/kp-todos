import { KpOverlayCloseEventType } from "../enums/overlay-close-event-type.enum";

export interface KpOverlayCloseEvent<R> {
    type: KpOverlayCloseEventType;
    data?: R;
}
