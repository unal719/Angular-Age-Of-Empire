import { Unit } from './../shared/models/unit';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../shared/services/data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UnitsService extends DataService {
  private endPointUrl: string = 'units';
  private deetailEndPointUrl: string = 'unit';

  constructor(http: HttpClient) {
    super(http);
  }

  loadUnits(): Observable<Unit[]> {
    return this.GetAll(`${this.endPointUrl}`);
  }

  getUnitDetail(unitId: number): Observable<Unit> {
    return this.Get(`${this.deetailEndPointUrl}`, unitId);
  }
}
