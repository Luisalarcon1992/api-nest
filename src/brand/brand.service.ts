import { Injectable } from "@nestjs/common";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { Brand } from "./entities/brand.entity";
import { v4 as uuid } from "uuid";

@Injectable()
export class BrandService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: "Brand 1",
    //   createdAt: new Date().getTime(),
    // }
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: new Date().getTime(),
    };

    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);

    if (!brand) throw new Error("Brand not found");

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandUpdated = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandUpdated = {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        };
        return brandUpdated;
      }
    });
    return brandUpdated;
  }

  remove(id: string) {
    this.brands.filter(brand => brand.id !== id);
  }

  fillBrandsWithSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
