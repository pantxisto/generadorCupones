import { Test, TestingModule } from '@nestjs/testing';
import { CuponController } from './cupon.controller';

describe('CuponController', () => {
  let controller: CuponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuponController],
    }).compile();

    controller = module.get<CuponController>(CuponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
