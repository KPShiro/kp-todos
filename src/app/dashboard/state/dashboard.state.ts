import { ITodo } from "@app/shared/interfaces/todo.interface";

export interface DashboardState {
  todos: ITodo[];
}

export const FEATURE_INITIAL_STATE: DashboardState = {
    todos: [
        {
            id: '1',
            isDone: false,
            text: 'Clean the code',
            children: [
                {
                    id: '6',
                    isDone: false,
                    text: 'Clean FE code',
                    children: [],
                },
                {
                    id: '7',
                    isDone: false,
                    text: 'Clean BE code',
                    children: [],
                },
            ],
        },
        {
            id: '2',
            isDone: false,
            text: 'Update documentation',
            children: [],
        },
        {
            id: '3',
            isDone: false,
            text: 'Send updates',
            children: [],
        },
        {
            id: '4',
            isDone: true,
            text: 'Prepare release notes',
            children: [],
        },
        {
            id: '5',
            isDone: false,
            text: 'Create production PullRequest',
            children: [],
        }
    ],
};
