import { Component, OnInit } from '@angular/core';
import { CuponService } from '../cupon.service';

@Component({
  selector: 'app-no-secuencial',
  templateUrl: './no-secuencial.component.html',
  styleUrls: ['./no-secuencial.component.scss']
})
export class NoSecuencialComponent implements OnInit {

  constructor(private cuponService: CuponService) {
  }

  ngOnInit(): void {
    this.cuponService.generateCuponNoSecuencial();
  }

  generateCupon() {
    this.cuponService.generateCuponNoSecuencial();
  }

  get cupon() {
    return this.cuponService.cuponNoSecuencial;
  }
}
