export function replaceItem<T = any>(item: T, index: number, array: T[]): T[] {
    return [
        ...array.slice(0, index),
        item,
        ...array.slice(index + 1, undefined),
    ];
}
