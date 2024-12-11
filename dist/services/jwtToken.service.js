"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jsonReader_1 = require("../helper/jsonReader");
let JwtTokenService = class JwtTokenService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.config = (0, jsonReader_1.readConfigurationJsonFile)();
        try {
            const data = (0, jsonReader_1.readConfigurationJsonFile)();
            this.jwtInfo = data.jwt;
        }
        catch (error) {
            this.jwtInfo = null;
        }
    }
    async generateJWTToken({ username }) {
        const payload = { username };
        return this.jwtService.sign(payload, {
            secret: this.jwtInfo.secretKey,
            expiresIn: `${this.jwtInfo.expiryTime}m`,
            algorithm: "HS256",
        });
    }
    async verifyJwtToken({ token }) {
        try {
            return this.jwtService.verify(token, { secret: this.jwtInfo.secretKey });
        }
        catch (error) {
            return false;
        }
    }
    async addTokenInCookies(response, token) {
        response.cookie(this.config.jwt.key, token, {
            httpOnly: true,
            expires: new Date(Date.now() + this.config.jwt.expiryTime * 60 * 1000),
        });
    }
};
exports.JwtTokenService = JwtTokenService;
__decorate([
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], JwtTokenService.prototype, "addTokenInCookies", null);
exports.JwtTokenService = JwtTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtTokenService);
//# sourceMappingURL=jwtToken.service.js.map