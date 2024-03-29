import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // dejamos pasar la data solamente las que nos importa
      // forbidNonWhitelisted: true, // is habilitamos esto, dara error e informará que campos no son permitidos
    }),
  );

  await app.listen(3000);
}
bootstrap();
