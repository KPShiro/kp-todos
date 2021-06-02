import * as dashboardCommands from '@app/dashboard/state/commands';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@app/core/state/app.state';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-todo-create-form',
    templateUrl: './todo-create-form.component.html',
    styleUrls: [ './todo-create-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateFormComponent {
    public form: FormGroup = this._formBuilder.group({
        text: [ '', Validators.required ],
    });

    public constructor(
        private readonly _store: Store<AppState>,
        private readonly _formBuilder: FormBuilder,
    ) { }

    public onFormSubmit(): void {
        this._store.dispatch(dashboardCommands.createTodo({ text: this.form.value.text }));
        this.form.reset();
    }
}
