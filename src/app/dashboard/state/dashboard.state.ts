import { ITodo } from "@app/shared/interfaces/todo.interface";

export interface DashboardState {
  todos: ITodo[];
}

export const FEATURE_INITIAL_STATE: DashboardState = {
    todos: [
        {
            id: '1',
            isDone: true,
            text: 'Clean the code',
        },
        {
            id: '2',
            isDone: false,
            text: 'Update documentation',
        },
        {
            id: '3',
            isDone: false,
            text: 'Send updates',
        },
        {
            id: '4',
            isDone: true,
            text: 'Prepare release notes',
        },
        {
            id: '5',
            isDone: false,
            text: 'Create production PullRequest',
        }
    ],
};
