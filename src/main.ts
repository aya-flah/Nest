import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Water Resource Management API')
    .setDescription('API pour la gestion des ressources hydriques')
    .setVersion('1.0')
    .addTag('source-types')
    .addTag('capture-points')
    .addTag('usage-reports')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3005);
  
  console.log('========================================');
  console.log('✅ Application running on: http://localhost:3005');
  console.log('📚 Swagger docs: http://localhost:3005/api');
  console.log('========================================');
}

bootstrap().catch(err => {
  console.error('❌ Error starting application:', err);
  process.exit(1);
});