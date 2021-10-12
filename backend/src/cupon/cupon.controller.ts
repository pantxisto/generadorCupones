import { Controller, Get } from '@nestjs/common';
import { CuponService } from './cupon.service';

@Controller('cupon')
export class CuponController {
  constructor(private cuponService: CuponService) {}

  @Get('secuencial')
  generateSecuencial() {
    return this.cuponService.generateCuponSecuencial();
  }

  @Get('noSecuencial')
  generateNoSecuencial() {
    return this.cuponService.generateCuponNoSecuencial();
  }
}
