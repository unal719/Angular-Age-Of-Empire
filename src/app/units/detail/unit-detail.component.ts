import { Unit } from 'src/app/shared/models/unit';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitsService } from '../units.service';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {
  unitId: number;
  unitDetail: Unit;
  show: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private unitsService: UnitsService
  ) {
    this.route.params.subscribe(param => (this.unitId = +param.unitId));
  }

  ngOnInit(): void {
    this.unitsService.getUnitDetail(this.unitId).subscribe((response: Unit) => {
      this.unitDetail = response;
      this.show = true;
    });
  }
}
