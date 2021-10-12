import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuponController } from './cupon/cupon.controller';
import { CuponService } from './cupon/cupon.service';
import { CuponModule } from './cupon/cupon.module';

@Module({
  imports: [CuponModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
