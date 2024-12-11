import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import { routeListEnum } from './const/routeListEnum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS and cookie parser
  app.enableCors({
    credentials: true,
  });
  app.use(cookieParser());

  // Set global prefix
  app.setGlobalPrefix(routeListEnum.API_START_NOTATION);

  // Set up Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('JWT Token')
    .setVersion('1.0')
    .build();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Listen on the given port or default to 4000
  await app.listen(3000);
}
