import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuração de CORS
  app.enableCors({
    origin: 'https://angular-front-kanban.vercel.app/', // Substitua pela origem que você deseja permitir
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeçalhos permitidos
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(parseInt(process.env.PORT) || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
