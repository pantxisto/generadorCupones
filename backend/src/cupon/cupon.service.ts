import { Injectable } from '@nestjs/common';
import * as path from 'path';
const fs = require('fs');

@Injectable()
export class CuponService {
  generateCuponSecuencial() {
    let rawCuponConfig = fs.readFileSync(
      path.join(__dirname, '../assets/config/cuponSecuencial.json'),
    );
    let cuponConfig = JSON.parse(rawCuponConfig) as { cantidad: number };
    const cupon = [];
    let cuponNumber = Math.floor(Math.random() * 10);
    for (let i = 0; i < cuponConfig.cantidad; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (j < 6) row.push(0);
        else {
          row.push(cuponNumber);
          cuponNumber++;
          if (cuponNumber === 10) cuponNumber = 0;
        }
      }
      cupon.push(row);
    }
    return cupon;
  }

  generateCuponNoSecuencial() {
    let rawCuponConfig = fs.readFileSync(
      path.join(__dirname, '../assets/config/cuponNoSecuencial.json'),
    );
    let cuponConfig = JSON.parse(rawCuponConfig) as { cantidad: number };
    const cupon = [];
    for (let i = 0; i < cuponConfig.cantidad; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        row.push(Math.floor(Math.random() * 10));
      }
      cupon.push(row);
    }
    return cupon;
  }
}
