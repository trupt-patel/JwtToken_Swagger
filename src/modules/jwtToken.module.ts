import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtController } from "src/controllers/jwtToken.controller";
import { readConfigurationJsonFile } from "src/helper/jsonReader";
import { ConfigurationJSONFileDTO } from "src/models/configuration.dto";
import { JwtTokenService } from "src/services/jwtToken.service";
import { ResponseService } from "src/services/response.service";

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => {
        const data = readConfigurationJsonFile() as ConfigurationJSONFileDTO;
        return {
          secret: data.jwt.secretKey,
          signOptions: { expiresIn: `${data.jwt.expiryTime}m` },
          algorithm:  "HS256",
        };
      },
    }),
  ],
    controllers: [JwtController],
    providers: [ResponseService, JwtTokenService],
  })
  export class JwtTokenModule {}