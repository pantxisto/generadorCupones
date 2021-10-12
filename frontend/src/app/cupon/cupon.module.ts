import { NgModule } from '@angular/core';

import { CuponComponent } from './cupon.component';
import { SecuencialComponent } from './secuencial/secuencial.component';
import { NoSecuencialComponent } from './no-secuencial/no-secuencial.component';
import { CommonModule } from '@angular/common';
import { CuponRoutingModule } from './cupon-routing.module';
import { CuponWidgetComponent } from '../common/cupon-widget/cupon-widget.component';
import { CuponService } from './cupon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CuponComponent,
    SecuencialComponent,
    NoSecuencialComponent,
    CuponWidgetComponent
  ],
  imports: [
    CommonModule,
    CuponRoutingModule,
    HttpClientModule
  ],
  providers: [CuponService],
})
export class CuponModule { }
