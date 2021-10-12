import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'cupon', pathMatch: 'full' },
  {
    path: "cupon",
    loadChildren: () => import('./cupon/cupon.module').then(m => m.CuponModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
