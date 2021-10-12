import { Module } from '@nestjs/common';
import { CuponController } from './cupon.controller';
import { CuponService } from './cupon.service';

@Module({
    imports: [],
    controllers: [CuponController],
    providers: [CuponService],
  })
export class CuponModule {}
