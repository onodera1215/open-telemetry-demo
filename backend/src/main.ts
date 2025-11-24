import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupInstrumentation } from 'instrumentation';

async function bootstrap() {
  setupInstrumentation();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
