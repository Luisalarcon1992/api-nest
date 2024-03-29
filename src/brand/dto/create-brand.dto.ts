import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {
  @IsString()
  @MinLength(3, { message: "El nombre requiere al menos 3 dígitos" })
  name: string;
}
