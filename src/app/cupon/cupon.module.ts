import { NgModule } from '@angular/core';

import { CuponComponent } from './cupon.component';
import { SecuencialComponent } from './secuencial/secuencial.component';
import { NoSecuencialComponent } from './no-secuencial/no-secuencial.component';
import { CommonModule } from '@angular/common';
import { CuponRoutingModule } from './cupon-routing.module';
import { CuponWidgetComponent } from '../common/cupon-widget/cupon-widget.component';
import { CuponService } from './cupon.service';

@NgModule({
  declarations: [
    CuponComponent,
    SecuencialComponent,
    NoSecuencialComponent,
    CuponWidgetComponent
  ],
  imports: [
    CommonModule,
    CuponRoutingModule
  ],
  providers: [CuponService],
})
export class CuponModule { }
