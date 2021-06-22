import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { KpDialogHost } from '@app/kp-dialog/models/kp-dialog-host';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { TodoFacade } from '@app/dashboard/services/todo.facade';
import { utils } from '@app/shared/functions/utils';

@Component({
    selector: 'app-todo-edit-form',
    templateUrl: './todo-edit-form.component.html',
    styleUrls: [ './todo-edit-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditFormComponent implements OnInit {

    public form: FormGroup = this._formBuilder.group({
        text: [ '', [ Validators.required ] ],
        isDone: [ false, [ Validators.required ] ],
    });

    public get todoTextControl(): FormControl {
        return this.form?.get('text') as FormControl;
    }

    public get todoIsDoneControl(): FormControl {
        return this.form?.get('isDone') as FormControl;
    }

    private _todo!: ITodo;

    public constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _hostDialog: KpDialogHost<ITodo>,
        private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        if(!utils.isDefAndNotNull(this._hostDialog.data)) {
            throw new Error('Provide Todo item');
        }

        this._todo = this._hostDialog.data;

        this.form.setValue({
            text: this._todo.text,
            isDone: this._todo.isDone,
        });
    }

    public onFormSubmit(): void {
        if(!this.form.dirty && !this.form.touched) {
            return;
        }

        this._todoFacade.updateTodo({
            id: this._todo.id,
            changes: {
                text: this.todoTextControl.value,
                isDone: this.todoIsDoneControl.value,
            }
        });
    }

    public onCheckboxClick(): void {
        this.form.patchValue({
            isDone: !this.form.value.isDone,
        });

        this._todoFacade.updateTodo({
            id: this._todo.id,
            changes: {
                isDone: this.todoIsDoneControl.value,
            }
        });
    }

    public onRemoveActionClick(): void {
        this._todoFacade.deleteTodo(this._todo.id);
    }
}
