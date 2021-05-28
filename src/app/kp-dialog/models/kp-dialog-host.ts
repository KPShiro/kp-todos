export class KpDialogHost<T = any> {

    public constructor(
        public readonly data?: T,
    ) { }

    public close!: () => void;

}
