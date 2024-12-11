import { Body, Controller, Delete, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { routeListEnum } from "src/const/routeListEnum";
import { JwtTokenStatusTag } from "src/const/status/tagEnum";
import { readConfigurationJsonFile } from "src/helper/jsonReader";
import { ConfigurationJSONFileDTO } from "src/models/configuration.dto";
import { GenerateJwtToken, GetJwtToken, VerifyJwtToken } from "src/models/jwtToken.dto";
import { JwtTokenService } from "src/services/jwtToken.service";
import { ResponseService } from "src/services/response.service";

@Controller()
export class JwtController {

    private readonly config: ConfigurationJSONFileDTO

    constructor(
        private readonly response: ResponseService, 
        private readonly jwtTokenService: JwtTokenService,
        
    ) {
        this.config = readConfigurationJsonFile()
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
    async verifyJwtToken(@Body() verifyToken: VerifyJwtToken,@Req() request: Request, @Res({passthrough: true}) response: Response)
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
    async getJwtToken(@Body() getToken: GetJwtToken, @Req() request: Request)
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