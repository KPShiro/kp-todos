import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { KpDialogModule } from './kp-dialog/kp-dialog.module';
import { KpOverlayModule } from './kp-overlay/kp-overlay.module';
import { LoadingModule } from './loading/loading.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: environment.storeDevtools.maxAge,
            logOnly: environment.production,
        }),
        KpDialogModule.forRoot(),
        KpOverlayModule.forRoot(),
        ReactiveFormsModule,
        LoadingModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
