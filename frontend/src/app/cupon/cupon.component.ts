import { Component, OnInit } from '@angular/core';
import { Cupon } from './interfaces/cupon.interface';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.scss']
})
export class CuponComponent implements OnInit {
  cuponActiveComponent: Cupon | null;
  isCuponDeactivated: boolean;
  constructor() {
    this.isCuponDeactivated = true;
    this.cuponActiveComponent = null;
  }

  ngOnInit(): void {
  }

  onActivate(activeComponent: any) {
    this.cuponActiveComponent = activeComponent;
    this.isCuponDeactivated = false;
  }

  onDeactivate(_: any) {
    this.cuponActiveComponent = null;
    this.isCuponDeactivated = true;
  }

  generateCupon() {
    this.cuponActiveComponent?.generateCupon();
  }
}
