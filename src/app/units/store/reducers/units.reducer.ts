import { Cost } from 'src/app/shared/models/cost';
import { Unit } from './../../../shared/models/unit';
import * as fromUnits from '../actions/units';
import { isNull } from 'util';
export interface UnitsState {
  unitList: Unit[];
  unitFilteredList: Unit[];
  ageName: string;
  costs: Cost[];
}
export const initialState: UnitsState = {
  unitList: [],
  unitFilteredList: [],
  ageName: 'All',
  costs: []
};

export function reducer(
  state = initialState,
  action: fromUnits.UnitsAction
): UnitsState {
  switch (action.type) {
    case fromUnits.LOAD_UNITS: {
      return {
        ...state
      };
    }
    case fromUnits.LOAD_UNITS_SUCCESS: {
      const unitList = action.payload;
      const unitFilteredList = action.payload;
      return {
        ...state,
        unitList,
        unitFilteredList
      };
    }

    case fromUnits.FILTERED_UNITS_FOR_AGE: {
      const ageName = action.payload;
      let unitFilteredList = state.unitList;
      if (ageName !== 'All') {
        unitFilteredList = state.unitList.filter(unit => unit.age === ageName);
        if (state.costs.length > 0) {
          unitFilteredList = unitFilteredList.filter(unitItem => {
            const unitRequireCosts = state.costs.filter(cost => {
              if (unitItem.cost && !isNull(unitItem.cost)) {
                const unitRequireCost = unitItem.cost;
                const unitReqıireCostValue = unitRequireCost[cost.name];
                if (
                  cost.name in unitRequireCost &&
                  (unitReqıireCostValue > cost.value &&
                    unitReqıireCostValue <= cost.maxValue)
                ) {
                  return cost;
                }
              }
            });
            if (unitRequireCosts.length === state.costs.length) {
              return unitItem;
            }
          });
        }
      }

      return {
        ...state,
        ageName,
        unitFilteredList
      };
    }
    case fromUnits.FILTERED_UNITS_FOR_COST: {
      const newCost = action.payload;
      let unitFilteredList = state.unitList;
      let costs = state.costs.filter(cost => cost.name !== newCost.name);
      if (newCost.selected) {
        costs = [...costs, newCost];
      }

      if (state.ageName !== 'All') {
        unitFilteredList = state.unitList.filter(
          unit => unit.age === state.ageName
        );

        if (costs.length > 0) {
          unitFilteredList = unitFilteredList.filter(unitItem => {
            const unitRequireCosts = costs.filter(cost => {
              if (unitItem.cost && !isNull(unitItem.cost)) {
                const unitRequireCost = unitItem.cost;
                const unitReqıireCostValue = unitRequireCost[cost.name];
                if (
                  cost.name in unitRequireCost &&
                  (unitReqıireCostValue > cost.value &&
                    unitReqıireCostValue <= cost.maxValue)
                ) {
                  return cost;
                }
              }
            });
            if (unitRequireCosts.length === costs.length) {
              return unitItem;
            }
          });
        }
      }

      return {
        ...state,
        costs,
        unitFilteredList
      };
    }
  }
  return state;
}

export const getUnitFilteredList = (state: UnitsState) =>
  state.unitFilteredList;
export const getAgeName = (state: UnitsState) => state.ageName;
