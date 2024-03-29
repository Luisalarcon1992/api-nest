import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
  @IsString({ message: "Marca es requerido y debe ser string" })
  readonly marca: string;

  @IsString({ message: "Modelo es requerido y debe ser string" })
  @MinLength(3, { message: "Modelo debe tener al menos 3 caracteres" })
  readonly modelo: string;
}
