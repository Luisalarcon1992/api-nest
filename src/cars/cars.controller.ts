import { Controller, Param, Get, ParseUUIDPipe, Body, Post, Patch, UsePipes, Delete } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";

@Controller("cars")
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    const cars = this.carsService.findAll();

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
  @UsePipes()
  createCar(@Body() createCarDto: CreateCarDto) {
    const car = this.carsService.createCar(createCarDto);

    return car;
  }

  @Patch(":id")
  updateCar(@Param("id", ParseUUIDPipe) id: string, @Body() updateCarDto: CreateCarDto) {
    return {
      id,
      updateCarDto,
    };
  }

  @Delete(":id")
  deleteCar(@Param("id", ParseUUIDPipe) id: string) {
    this.carsService.deleteCar(id);

    return {
      message: "Car deleted",
      status: 200,
    };
  }
}
