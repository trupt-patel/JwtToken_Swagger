import { Module } from '@nestjs/common';
import { JwtTokenModule } from './jwtToken.module';
import { ResponseService } from 'src/services/response.service';

@Module({
  imports: [JwtTokenModule],
  controllers: [],
  providers: [ResponseService],
})
export class AppModule {}
