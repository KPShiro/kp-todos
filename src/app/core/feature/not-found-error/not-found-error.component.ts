import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-not-found-error',
    templateUrl: './not-found-error.component.html',
    styleUrls: [ './not-found-error.component.scss' ],
})
export class NotFoundErrorComponent {
    @HostBinding('class.kp-error-page')
    private readonly addHostClass: boolean = true;
}
