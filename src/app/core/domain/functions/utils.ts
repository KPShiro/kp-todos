export type Defined<T> = T extends undefined ? never : T;

export class utils {
    public static isDef<T = any>(value: T): value is Defined<T> {
        return value !== void 0;
    }

    public static isNull(value: any): value is null {
        return value === null;
    }

    public static isDefAndNotNull<T = any>(value: T): value is NonNullable<T> {
        return this.isDef(value) && !this.isNull(value);
    }
}
