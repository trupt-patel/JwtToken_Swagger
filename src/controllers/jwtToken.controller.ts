import { Body, Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { routeListEnum } from "src/const/routeListEnum";
import { JwtTokenStatusTag } from "src/const/status/tagEnum";
import { readConfigurationJsonFile } from "src/helper/jsonReader";
import { ConfigurationJSONFileDTO } from "src/models/configuration.dto";
import { GenerateJwtToken, JwtConfiguration, GetJwtToken, VerifyJwtToken } from "src/models/jwtToken.dto";
import { JwtTokenService } from "src/services/jwtToken.service";
import { ResponseService } from "src/services/response.service";
import { FilePath } from "src/const/filePathEnum";
import { promises as fs } from 'fs';
import * as path from 'path';

@Controller()
export class JwtController {

    private readonly config: ConfigurationJSONFileDTO
    constructor(
        private readonly response: ResponseService, 
        private readonly jwtTokenService: JwtTokenService,
        
    ) {
        this.config = readConfigurationJsonFile()
    }

    @Get(routeListEnum.GetJwtConfiguration)
    async getJwtTokenConfiguration() {
        let jwtConfiguration = new JwtConfiguration({
            ExpiryTime: this.config.jwt.expiryTime,
            Key: this.config.jwt.key
        })
        return this.response.getResponse200({ data: jwtConfiguration, msg: null})
    }

    @Put(routeListEnum.UpdateJwtConfiguration)
    async updateJwtTokenConfiguration(@Res({passthrough: true}) response: Response, @Body() updateJwtConfiguration: JwtConfiguration) {
        
        if(updateJwtConfiguration.ExpiryTime != 0)
        {
            this.config.jwt.expiryTime = updateJwtConfiguration.ExpiryTime
            this.config.jwt.key = updateJwtConfiguration.Key
            await fs.writeFile(
                path.join(__dirname, FilePath.Configuration),
                JSON.stringify(this.config, null, 2),
                'utf-8'
            );
            this.jwtTokenService.refreshJwtConfiguration();
            return this.response.getResponse200({ data: updateJwtConfiguration, msg: JwtTokenStatusTag.UPDATE_JWT_CONFIGURATION_SUCCESS});
        }
        return this.response.getResponse422({ msg: JwtTokenStatusTag.UPDATE_JWT_CONFIGURATION_FAILED})
        
    }

    @Post(routeListEnum.GenerateJwtToken)
    async generateJwtToken(@Body() generateTokenDto: GenerateJwtToken, @Res({passthrough: true}) response: Response)
    {
        if(!generateTokenDto.username)
        {
            return this.response.getResponse422({ msg: JwtTokenStatusTag.GENERATED_TOKEN_FAILED})
        }
        let generatedToken: string = await this.jwtTokenService.generateJWTToken({username: generateTokenDto.username});
        this.jwtTokenService.addTokenInCookies(response, generatedToken)
        return this.response.getResponse200({ msg: JwtTokenStatusTag.GENERATED_TOKEN_SUCCESS, data: generatedToken})
    }

    @Get(routeListEnum.VerifyJwtToken)
    async verifyJwtToken(@Req() request: Request, @Res({passthrough: true}) response: Response)
    {
        let decryptJwtToken = await this.jwtTokenService.verifyJwtToken({token: request.cookies[this.config.jwt.key]}) as VerifyJwtToken
        if(decryptJwtToken)
        {
            let generatedToken: string = await this.jwtTokenService.generateJWTToken({username: decryptJwtToken.username});
            this.jwtTokenService.addTokenInCookies(response, generatedToken)
            return this.response.getResponse200({ msg: JwtTokenStatusTag.VERIFY_TOKEN_SUCCESS, data: generatedToken})
        }
        return this.response.getResponse498();
    }

    @Delete(routeListEnum.RemoveJwtToken)
    async removeJwtToken(@Res({passthrough: true}) response: Response)
    {
        response.clearCookie(this.config.jwt.key);
        return this.response.getResponse200({ msg: JwtTokenStatusTag.REMOVE_TOKEN_SUCCESS, data: null})
    }

    @Get(routeListEnum.GetToken)
    async getJwtToken(@Req() request: Request)
    {
        let token = request.cookies[this.config.jwt.key]
        let encDecToken = new GetJwtToken({
            encryptedToken: token,
            decryptedToken: await this.jwtTokenService.verifyJwtToken({token: token}) as VerifyJwtToken
        }) as GetJwtToken
        if(token)
        {
            return this.response.getResponse200({data: encDecToken, msg: null})
        }
        return this.response.getResponse498()
    }
}