import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey, IState } from '../reducer/hotel.reducer';


export const selectAppState = createFeatureSelector<IState>(appFeatureKey);
export const selectHotels = createSelector(
  selectAppState,
  (state: IState) => state?.data
);
