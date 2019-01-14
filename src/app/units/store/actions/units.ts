import { Unit } from './../../../shared/models/unit';
import { Action } from '@ngrx/store';

export const LOAD_UNITS = '[UNITS] Load Units';
export const LOAD_UNITS_SUCCESS = '[UNITS] Load Units Success';
export const LOAD_UNITS_FAIL = '[UNITS] Load Units Fail';
export const FILTERED_UNITS_FOR_AGE = '[UNITS] Fitered Age';
export const FILTERED_UNITS_FOR_COST = '[UNITS] Fitered Cost';

export class LoadUnitsAction implements Action {
  readonly type = LOAD_UNITS;
}

export class LoadUnitsSuccessAction implements Action {
  readonly type = LOAD_UNITS_SUCCESS;

  constructor(public payload: Unit[]) {}
}

export class LoadUnitsFailAction implements Action {
  readonly type = LOAD_UNITS_FAIL;

  constructor(public payload: any) {}
}

export class FilteredAgeUnitAction implements Action {
  readonly type = FILTERED_UNITS_FOR_AGE;
  constructor(public payload) {}
}
export class FilteredCostUnitAction implements Action {
  readonly type = FILTERED_UNITS_FOR_COST;
  constructor(public payload) {}
}

export type UnitsAction =
  | LoadUnitsAction
  | LoadUnitsSuccessAction
  | LoadUnitsFailAction
  | FilteredAgeUnitAction
  | FilteredCostUnitAction;
