import { Module } from '@nestjs/common';
import { JwtTokenModule } from './jwtToken.module';
import { ResponseService } from 'src/services/response.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
@Module({
  imports: [
    JwtTokenModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist', 'node_modules', 'swagger-ui-dist'),
      serveRoot: '/api',  // You can change this path
    }),
  ],
  controllers: [],
  providers: [ResponseService],
})
export class AppModule {}
