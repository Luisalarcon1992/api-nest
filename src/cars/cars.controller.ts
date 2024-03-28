import { Controller, Param, Get, ParseUUIDPipe, Body, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";

@Controller("cars")
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    const cars = this.carsService.finAll();

    return cars;
  }

  @Get(":id")
  getById(@Param("id", ParseUUIDPipe) id: string) {
    if (!this.carsService.finByID(id))
      return {
        message: "Car not found",
        status: 404,
      };

    return this.carsService.finByID(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }
}
