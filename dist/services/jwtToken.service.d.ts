import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
export declare class JwtTokenService {
    private readonly jwtService;
    private jwtInfo;
    private config;
    constructor(jwtService: JwtService);
    refreshJwtConfiguration(): Promise<void>;
    generateJWTToken({ username }: {
        username: string;
    }): Promise<string>;
    verifyJwtToken({ token }: {
        token: string;
    }): Promise<any>;
    addTokenInCookies(response: Response, token: String): Promise<void>;
}
