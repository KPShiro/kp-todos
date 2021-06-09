import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY } from './state/loading.state';
import { loadingReducer } from './state/loading.reducer';

@NgModule({
    imports: [ StoreModule.forFeature(FEATURE_KEY, loadingReducer) ],
})
export class LoadingModule {}
