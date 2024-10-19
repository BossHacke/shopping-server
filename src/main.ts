import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import 'dotenv/config';

async function bootstrap() {
  const logger = new Logger('MainApp');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
  logger.log('##############################################################');
  logger.log(
    `# API PATH: http://localhost:8000 #`,
  );
}
bootstrap();
