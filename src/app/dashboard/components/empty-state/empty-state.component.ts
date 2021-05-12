import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'app-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: [ './empty-state.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyStateComponent {
    @HostBinding('class.app-empty-state')
    private _addHostClass: boolean = true;
}
