import { Component, OnInit } from '@angular/core';
import { CuponService } from '../cupon.service';

@Component({
  selector: 'app-secuencial',
  templateUrl: './secuencial.component.html',
  styleUrls: ['./secuencial.component.scss']
})
export class SecuencialComponent implements OnInit {
  constructor(private cuponService: CuponService) {
  }

  ngOnInit(): void {
    this.cuponService.generateCuponSecuencial();
  }

  generateCupon() {
    this.cuponService.generateCuponSecuencial();
  }

  get cupon() {
    return this.cuponService.cuponSecuencial;
  }

}
