import { Unit } from './../../shared/models/unit';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnitListComponent implements OnInit {
  unitList$$: Observable<Unit[]>;
  constructor(private store: Store<fromStore.AgeOfEmpireState>) {}

  ngOnInit(): void {
    this.unitList$$ = this.store.select(fromStore.getFilteredUnitList);
    this.store.dispatch(new fromStore.LoadUnitsAction());
  }

  showUnitDetail(item) {
    console.log(item);
  }
}
