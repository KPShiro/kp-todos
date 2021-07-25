import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'app-todo-list-item-placeholder',
    templateUrl: './todo-list-item-placeholder.component.html',
    styleUrls: [ './todo-list-item-placeholder.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemPlaceholderComponent {
    @HostBinding('class.app-todo-list-item-placeholder')
    private readonly _addHostClass: boolean = true;
}
