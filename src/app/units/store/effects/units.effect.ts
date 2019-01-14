import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, concatMap } from 'rxjs/operators';
import { UnitsService } from '../../units.service';
import * as unitActions from '../actions/units';
@Injectable()
export class UnitsEffects {
  constructor(private actions$: Actions, private unitsService: UnitsService) {}
  @Effect()
  loadGames$ = this.actions$.ofType(unitActions.LOAD_UNITS).pipe(
    switchMap(() => {
      return this.unitsService.loadUnits().pipe(
        map(response => response),
        concatMap(unitsRes => [
          new unitActions.LoadUnitsSuccessAction(unitsRes['units'])
        ])
      );
    })
  );
}
