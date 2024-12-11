import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
export declare class JwtTokenService {
    private readonly jwtService;
    private jwtInfo;
    private readonly config;
    constructor(jwtService: JwtService);
    generateJWTToken({ username }: {
        username: string;
    }): Promise<string>;
    verifyJwtToken({ token }: {
        token: string;
    }): Promise<any>;
    addTokenInCookies(response: Response, token: String): Promise<void>;
}
