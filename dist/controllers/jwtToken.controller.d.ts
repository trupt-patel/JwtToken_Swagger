import { Request, Response } from "express";
import { GenerateJwtToken, JwtConfiguration } from "src/models/jwtToken.dto";
import { JwtTokenService } from "src/services/jwtToken.service";
import { ResponseService } from "src/services/response.service";
export declare class JwtController {
    private readonly response;
    private readonly jwtTokenService;
    private readonly config;
    constructor(response: ResponseService, jwtTokenService: JwtTokenService);
    getJwtTokenConfiguration(): Promise<import("../models/response.dto").ResponseDto<Object>>;
    updateJwtTokenConfiguration(response: Response, updateJwtConfiguration: JwtConfiguration): Promise<import("../models/response.dto").ResponseDto<Object>>;
    generateJwtToken(generateTokenDto: GenerateJwtToken, response: Response): Promise<import("../models/response.dto").ResponseDto<Object>>;
    verifyJwtToken(request: Request, response: Response): Promise<import("../models/response.dto").ResponseDto<Object>>;
    removeJwtToken(response: Response): Promise<import("../models/response.dto").ResponseDto<Object>>;
    getJwtToken(request: Request): Promise<import("../models/response.dto").ResponseDto<Object>>;
}
