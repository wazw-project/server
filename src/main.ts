/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import  {AppModule}  from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT) || 3333
  app.enableCors();
  await app.listen(port);
}
bootstrap();
