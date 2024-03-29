import { Injectable } from "@nestjs/common";
import { CARS_SEED } from "./data/cars.seed";
import { BRANDS_SEED } from "./data/brands.seed";
import { CarsService } from "../cars/cars.service";
import { BrandService } from "src/brand/brand.service";

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandService,
  ) {}

  populateDb() {
    this.carsService.fillCarsWithSeed(CARS_SEED);
    this.brandService.fillBrandsWithSeed(BRANDS_SEED);
    return "Seed Executed!";
  }
}
