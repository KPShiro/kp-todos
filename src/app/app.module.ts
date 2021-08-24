import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgrxStateModule } from './ngrx/ngrx.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgrxStateModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        DashboardModule.forRoot(),
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
