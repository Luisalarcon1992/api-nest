import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CarsController } from "./cars/cars.controller";
import { CarsService } from "./cars/cars.service";
import { CarsModule } from "./cars/cars.module";
import { BrandModule } from './brand/brand.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandModule, SeedModule],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
