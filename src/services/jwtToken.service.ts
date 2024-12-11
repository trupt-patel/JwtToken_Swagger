import { Injectable, Res } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { readConfigurationJsonFile } from "src/helper/jsonReader";
import { ConfigurationJSONFileDTO, JwtTokenDTO } from "src/models/configuration.dto";

@Injectable()
export class JwtTokenService {
    private jwtInfo: JwtTokenDTO;
    private readonly config: ConfigurationJSONFileDTO;

    constructor(private readonly jwtService: JwtService) {
        this.config = readConfigurationJsonFile();
        try {
            const data = readConfigurationJsonFile() as ConfigurationJSONFileDTO;
            this.jwtInfo = data.jwt;
        } catch (error) {
            this.jwtInfo = null; 
        }
    }

    async generateJWTToken({ username }: { username: string }): Promise<string> {
        const payload: object = { username };
        return this.jwtService.sign(payload, {
            secret: this.jwtInfo.secretKey, 
            expiresIn: `${this.jwtInfo.expiryTime}m`,
            algorithm:  "HS256",
        });
    }

    async verifyJwtToken({ token } : {token:string}) {
        try{
            return this.jwtService.verify(token, { secret: this.jwtInfo.secretKey })
        }
        catch(error){
            return false
        }
    }

    async addTokenInCookies(@Res({passthrough: true}) response: Response, token: String){
        response.cookie(this.config.jwt.key, token, {
            httpOnly: true,
            expires: new Date(Date.now() + this.config.jwt.expiryTime * 60 * 1000),
        });
    }
}