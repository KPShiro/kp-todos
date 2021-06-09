import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY } from './state/loading.state';
import { loadingReducer } from './state/loading.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadingEffects } from './state/loading.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_KEY, loadingReducer),
        EffectsModule.forFeature([ LoadingEffects ]),
    ],
})
export class LoadingModule {}
