import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { ICars } from "./interface/cars.interface";

@Injectable()
export class CarsService {
  private cars: ICars[] = [
    {
      id: uuid(),
      marca: "Toyota",
      modelo: "Corolla",
    },
    {
      id: uuid(),
      marca: "Honda",
      modelo: "Civic",
    },
    {
      id: uuid(),
      marca: "Ford",
      modelo: "Fiesta",
    },
  ];

  finAll() {
    return this.cars;
  }

  finByID(id: string) {
    const car = this.cars.find(car => car.id === id);
    return car;
  }
}
