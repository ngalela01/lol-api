import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initORM } from './orm';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtGuard } from './modules/auth/jwt.guard';

async function bootstrap() {
  const orm = await initORM();
  const em = orm.em.fork();

  const app = await NestFactory.create(AppModule);

  // Guard global
  app.useGlobalGuards(app.get(JwtGuard));

  const config = new DocumentBuilder()
    .setTitle('LOL API')
    .setDescription('The LOL API description')
    .setVersion('1.0')
    .addTag('auth')     // affiché en premier
    .addTag('users') 
    .addBearerAuth() 
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
