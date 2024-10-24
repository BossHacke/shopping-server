import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('MainApp');
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  app.setGlobalPrefix('api', { exclude: [''] });
  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted: true,
  }));

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Shopping Web')
    .setDescription('Shopping Api description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.enableCors();
  await app.listen(port);
  logger.log('##############################################################');
  logger.log(
    `# API PATH: http://localhost:8000 #`,
  );
}
bootstrap();
