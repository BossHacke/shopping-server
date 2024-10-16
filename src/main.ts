import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('MainApp');
  const app = await NestFactory.create(AppModule);
  logger.log('##############################################################');
  logger.log(
    `# API PATH: http://localhost:8000 #`,
  );
  await app.listen(8000);
}
bootstrap();
