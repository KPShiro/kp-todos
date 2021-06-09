import * as dashboardCommands from '@app/dashboard/state/commands';

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app/core/state/app.state';
import { Store } from '@ngrx/store';
import { KpDialogHost } from '@app/kp-dialog/models/kp-dialog-host';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Component({
    selector: 'app-todo-edit-form',
    templateUrl: './todo-edit-form.component.html',
    styleUrls: [ './todo-edit-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditFormComponent implements OnInit {

    public form: FormGroup = this._formBuilder.group({
        text: [ '', Validators.required ],
        isDone: [ false, Validators.required ],
    });

    public get todoTextControl(): FormControl {
        return this.form?.get('text') as FormControl;
    }

    public get todoIsDoneControl(): FormControl {
        return this.form?.get('isDone') as FormControl;
    }

    private readonly _todo: ITodo | undefined;

    public constructor(
        private readonly _store: Store<AppState>,
        private readonly _formBuilder: FormBuilder,
        private readonly _hostDialog: KpDialogHost<ITodo>,
    ) {
        this._todo = this._hostDialog.data;
    }

    public ngOnInit(): void {
        if(!this._todo) return;

        this.form.setValue({
            text: this._todo.text,
            isDone: this._todo.isDone,
        });
    }

    public onFormSubmit(): void {
        if (!this._todo) return;

        this._store.dispatch(dashboardCommands.updateTodo({
            update: {
                id: this._todo.id,
                changes: {
                    text: this.todoTextControl.value,
                    isDone: this.todoIsDoneControl.value,
                },
            },
        }));
    }

    public onCheckboxClick(): void {
        if (!this._todo) return;

        this.form.patchValue({
            isDone: !this.form.value.isDone,
        });

        this._store.dispatch(dashboardCommands.updateTodo({
            update: {
                id: this._todo.id,
                changes: { isDone: !this._todo.isDone, },
            },
        }));

        if (!this.todoIsDoneControl.value) return;

        this._hostDialog.close();
    }

    public onRemoveActionClick(): void {
        if (!this._todo) return;

        this._store.dispatch(dashboardCommands.deleteTodo({ id: this._todo.id }));
        this._hostDialog.close();
    }
}
