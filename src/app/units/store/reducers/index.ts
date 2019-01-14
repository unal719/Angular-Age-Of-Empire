import * as fromUnits from './units.reducer';
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

export interface AgeOfEmpireState {
  units: fromUnits.UnitsState;
}

export const reducers: ActionReducerMap<AgeOfEmpireState> = {
  units: fromUnits.reducer
};

export const getAgeOfEmpireState = createFeatureSelector<AgeOfEmpireState>(
  'ageOfEmpire'
);

/**
 * get units state
 */
export const getUnitsState = createSelector(
  getAgeOfEmpireState,
  (state: AgeOfEmpireState) => state.units
);

export const getAgeNameFilter = createSelector(
  getUnitsState,
  fromUnits.getAgeName
);

export const getFilteredUnitList = createSelector(
  getUnitsState,
  fromUnits.getUnitFilteredList
);
