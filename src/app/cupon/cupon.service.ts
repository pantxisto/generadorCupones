import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CuponService {
  cuponSecuencial: BehaviorSubject<any[]>;
  cuponNoSecuencial: BehaviorSubject<any[]>;
  constructor() {
    this.cuponSecuencial = new BehaviorSubject<any[]>([[0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 2], [0, 0, 0, 0, 0, 3], [0, 0, 0, 0, 0, 4], [0, 0, 0, 0, 0, 5]]);
    this.cuponNoSecuencial = new BehaviorSubject<any[]>([[0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 2, 2], [0, 0, 0, 0, 3, 3], [0, 0, 0, 0, 4, 4], [0, 0, 0, 0, 5, 5]]);
  }

  generateCuponSecuencial() {
    console.log("Generar Cupón Secuencial");
  }

  generateCuponNoSecuencial() {
    console.log("Generar Cupón No Secuencial");
  }
}
