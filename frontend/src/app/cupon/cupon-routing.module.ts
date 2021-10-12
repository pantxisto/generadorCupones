import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuponComponent } from './cupon.component';
import { NoSecuencialComponent } from './no-secuencial/no-secuencial.component';
import { SecuencialComponent } from './secuencial/secuencial.component';

const routes: Routes = [
  {
    path: '',
    component: CuponComponent,
    children: [
      { path: 'secuencial', component: SecuencialComponent },
      { path: 'noSecuencial', component: NoSecuencialComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuponRoutingModule { }
