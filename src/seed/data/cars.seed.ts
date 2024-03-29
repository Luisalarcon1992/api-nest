import { Brand } from "src/brand/entities/brand.entity";
import { ICars } from "src/cars/interface/cars.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: ICars[] = [
  {
    id: uuid(),
    marca: "Toyota",
    modelo: "Corolla",
  },
  {
    id: uuid(),
    marca: "Chevrolet",
    modelo: "Camaro",
  },
  {
    id: uuid(),
    marca: "BMW",
    modelo: "X5",
  },
  {
    id: uuid(),
    marca: "Mercedes-Benz",
    modelo: "E-Class",
  },
  {
    id: uuid(),
    marca: "Audi",
    modelo: "A4",
  },
];
