import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { loadingStateReducer } from './loading.reducer';
import { LOADING_STATE_KEY } from './loading.state';

@NgModule({
    imports: [ StoreModule.forFeature(LOADING_STATE_KEY, loadingStateReducer) ],
})
export class LoadingStateModule {}
