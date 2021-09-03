import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-not-found-error-page',
    templateUrl: './not-found-error-page.component.html',
    styleUrls: [ './not-found-error-page.component.scss' ],
})
export class NotFoundErrorPageComponent {
    @HostBinding('class.app-not-found-error-page')
    private readonly addHostClass: boolean = true;
}
