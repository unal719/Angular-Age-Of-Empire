import { Unit } from 'src/app/shared/models/unit';
import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-unit-filter',
  templateUrl: './unit-filter.component.html',
  styleUrls: ['./unit-filter.component.scss']
})
export class UnitFilterComponent implements OnInit {
  options: Options = {
    floor: 0,
    ceil: 200
  };

  selectedAgeFilter$$: Observable<string>;
  costWood = {
    name: 'Wood',
    selected: false,
    value: 0,
    maxValue: 200
  };
  costGold = {
    name: 'Gold',
    selected: false,
    value: 0,
    maxValue: 200
  };
  costFood = {
    name: 'Food',
    selected: false,
    value: 0,
    maxValue: 200
  };
  unitBufferList: Unit[];
  constructor(private store: Store<fromStore.AgeOfEmpireState>) {}

  ngOnInit(): void {
    this.selectedAgeFilter$$ = this.store.select(fromStore.getAgeNameFilter);
  }

  selectAge(filterName) {
    this.store.dispatch(new fromStore.FilteredAgeUnitAction(filterName));
  }

  checkedWood(status) {
    Object.assign(this.costWood, { selected: status });
    this.store.dispatch(new fromStore.FilteredCostUnitAction(this.costWood));
  }
  checkedGold(status) {
    Object.assign(this.costGold, { selected: status });
    this.store.dispatch(new fromStore.FilteredCostUnitAction(this.costGold));
  }
  checkedFood(status) {
    Object.assign(this.costFood, { selected: status });
    this.store.dispatch(new fromStore.FilteredCostUnitAction(this.costFood));
  }
  setWoodCost() {
    setTimeout(() => {
      this.store.dispatch(new fromStore.FilteredCostUnitAction(this.costWood));
    }, 500);
  }
  setGoldCost() {
    setTimeout(() => {
      this.store.dispatch(new fromStore.FilteredCostUnitAction(this.costGold));
    }, 500);
  }
  setFoodCost() {
    setTimeout(() => {
      this.store.dispatch(new fromStore.FilteredCostUnitAction(this.costFood));
    }, 500);
  }
}
