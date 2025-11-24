import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { openTelemetrySdk } from 'instrumentation';

async function bootstrap() {
  openTelemetrySdk.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
