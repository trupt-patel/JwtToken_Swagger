import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import { routeListEnum } from './const/routeListEnum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
  })
  app.use(cookieParser());
  app.setGlobalPrefix(routeListEnum.API_START_NOTATION);

  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('JWT Token')
  .setVersion('1.0')
  .build();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
