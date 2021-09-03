export interface ITodoDto {
    id: string;
    parentId: string | undefined;
    isDone: boolean;
    text: string | undefined;
}
