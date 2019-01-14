import { UnitsLayoutComponent } from './units-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UnitDetailComponent } from './detail/unit-detail.component';

const unitsRoutes: Routes = [
  { path: '', component: UnitsLayoutComponent },
  { path: 'unit/:unitId', component: UnitDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(unitsRoutes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule {}
