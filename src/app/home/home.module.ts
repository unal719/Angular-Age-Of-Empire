import { HomeRoutingModule } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  providers: []
})
export class HomeModule {}
