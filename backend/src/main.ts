import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RestResponseInterceptor } from './common/interceptors/rest-response.interceptor';
import { RestExceptionFilter } from './common/filters/rest-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new RestResponseInterceptor());
  app.useGlobalFilters(new RestExceptionFilter());

  await app.listen(process.env.PORT ?? 3333);
}

bootstrap();
