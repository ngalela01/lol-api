import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initORM } from './orm';

async function bootstrap() {
  const orm = await initORM();
  const em = orm.em.fork();

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
