import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { Component, ChangeDetectionStrategy, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app/core/state/app.state';
import { Store } from '@ngrx/store';
import { Todo } from '@app/shared/models/todo.model';
import { KpDialogHost } from '@app/kp-dialog/models/kp-dialog-host';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: [ './todo-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit, AfterViewInit {

    public todoForm: FormGroup = this._formBuilder.group({
        text: [ '', Validators.required ],
        isDone: [ false, Validators.required ],
    });

    public get todoTextControl(): FormControl {
        return this.todoForm.get('text') as FormControl;
    }

    public get todoIsDoneControl(): FormControl {
        return this.todoForm.get('isDone') as FormControl;
    }

    public get isInEditMode(): boolean {
        return !!this._todo;
    }

    @ViewChild('todoTextHTMLElement')
    private _todoTextHTMLElement!: ElementRef<HTMLElement>;

    private _todo: ITodo | undefined;

    public constructor(
        private readonly _store: Store<AppState>,
        private readonly _formBuilder: FormBuilder,
        private readonly _hostDialog: KpDialogHost<ITodo>,
    ) { }

    public ngOnInit(): void {
        this._todo = this._hostDialog.data;

        if(this._todo) {
            this.todoForm.setValue({
                text: this._todo.text,
                isDone: this._todo.isDone,
            });
        }
    }

    public ngAfterViewInit(): void {
        if (!this.isInEditMode) {
            this._todoTextHTMLElement.nativeElement.focus();
        }
    }

    public onFormSubmit(): void {
        return this.isInEditMode ? this._updateTodo() : this._createTodo();
    }

    public onCheckboxClick(): void {
        if(!this._todo) return;

        this.todoForm.patchValue({
            isDone: !this.todoForm.value.isDone,
        });

        this._store.dispatch(dashboardActions.toggleTodoIsDone({ todo: this._todo }));
        this._hostDialog.close();
    }

    public onRemoveActionClick(): void {
        if(!this._todo) return;

        this._hostDialog.close();
        this._store.dispatch(dashboardActions.remove({ id: this._todo.id }));
    }

    private _updateTodo(): void {
        if(!this._todo) return;

        this._store.dispatch(dashboardActions.update({ todo: {
            ...this._todo,
            text: this.todoTextControl.value,
            isDone: this.todoIsDoneControl.value,
        }}));
    }

    private _createTodo(): void {
        if(!this.todoTextControl.value) return;

        this._store.dispatch(dashboardActions.create({
            todo: new Todo(this.todoTextControl.value)
        }));

        this.todoForm.reset();
    }
}
