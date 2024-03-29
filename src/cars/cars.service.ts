import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { ICars } from "./interface/cars.interface";
import { CreateCarDto } from "./dto/create-car.dto";

@Injectable()
export class CarsService {
  private cars: ICars[] = [];

  findAll() {
    return this.cars;
  }

  finByID(id: string) {
    const car = this.cars.find(car => car.id === id);
    return car;
  }

  createCar(newCar: CreateCarDto) {
    const { marca, modelo } = newCar;

    const car = {
      id: uuid(),
      modelo,
      marca,
    };

    this.cars.push(car);

    return car;
  }

  deleteCar(id: string) {
    this.finByID(id);

    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeed(carsSeed: ICars[]) {
    this.cars = carsSeed;
  }
}
