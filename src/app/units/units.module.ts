import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsLayoutComponent } from './units-layout.component';
import { Ng5SliderModule } from 'ng5-slider';
import { UnitsRoutingModule } from './units.routing';
import { UnitsService } from './units.service';
import { HttpClientModule } from '@angular/common/http';
import { UnitFilterComponent } from './unit-filter/unit-filter.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { UnitDetailComponent } from './detail/unit-detail.component';
@NgModule({
  declarations: [
    UnitsLayoutComponent,
    UnitFilterComponent,
    UnitListComponent,
    UnitDetailComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    HttpClientModule,
    Ng5SliderModule,
    StoreModule.forFeature('ageOfEmpire', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  providers: [UnitsService]
})
export class UnitsModule {}
