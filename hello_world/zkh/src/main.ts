import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {PORT_BACKEND_IN} = process.env;
  await app.enableCors();
  await app.listen(PORT_BACKEND_IN);
}
bootstrap();
