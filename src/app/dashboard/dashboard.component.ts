import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

    @HostBinding('class.full-page')
    private readonly _fillWindow: boolean = true;

    public constructor() { }

}
