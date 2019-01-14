import { UnitsService } from './units.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units-layout',
  templateUrl: './units-layout.component.html'
  // styleUrls: ['./name.component.scss']
})
export class UnitsLayoutComponent implements OnInit {
  constructor(private unitsService: UnitsService) {}

  ngOnInit(): void {
    this.unitsService.loadUnits();
  }
}
