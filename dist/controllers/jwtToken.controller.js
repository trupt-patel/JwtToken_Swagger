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
exports.JwtController = void 0;
const common_1 = require("@nestjs/common");
const routeListEnum_1 = require("../const/routeListEnum");
const tagEnum_1 = require("../const/status/tagEnum");
const jsonReader_1 = require("../helper/jsonReader");
const jwtToken_dto_1 = require("../models/jwtToken.dto");
const jwtToken_service_1 = require("../services/jwtToken.service");
const response_service_1 = require("../services/response.service");
let JwtController = class JwtController {
    constructor(response, jwtTokenService) {
        this.response = response;
        this.jwtTokenService = jwtTokenService;
        this.config = (0, jsonReader_1.readConfigurationJsonFile)();
    }
    async generateJwtToken(generateTokenDto, response) {
        if (!generateTokenDto.username) {
            return this.response.getResponse422({ msg: tagEnum_1.JwtTokenStatusTag.GENERATED_TOKEN_FAILED });
        }
        let generatedToken = await this.jwtTokenService.generateJWTToken({ username: generateTokenDto.username });
        this.jwtTokenService.addTokenInCookies(response, generatedToken);
        return this.response.getResponse200({ msg: tagEnum_1.JwtTokenStatusTag.GENERATED_TOKEN_SUCCESS, data: generatedToken });
    }
    async verifyJwtToken(verifyToken, request, response) {
        let decryptJwtToken = await this.jwtTokenService.verifyJwtToken({ token: request.cookies[this.config.jwt.key] });
        if (decryptJwtToken) {
            let generatedToken = await this.jwtTokenService.generateJWTToken({ username: decryptJwtToken.username });
            this.jwtTokenService.addTokenInCookies(response, generatedToken);
            return this.response.getResponse200({ msg: tagEnum_1.JwtTokenStatusTag.VERIFY_TOKEN_SUCCESS, data: generatedToken });
        }
        return this.response.getResponse498();
    }
    async removeJwtToken(response) {
        response.clearCookie(this.config.jwt.key);
        return this.response.getResponse200({ msg: tagEnum_1.JwtTokenStatusTag.REMOVE_TOKEN_SUCCESS, data: null });
    }
    async getJwtToken(getToken, request) {
        let token = request.cookies[this.config.jwt.key];
        let encDecToken = new jwtToken_dto_1.GetJwtToken({
            encryptedToken: token,
            decryptedToken: await this.jwtTokenService.verifyJwtToken({ token: token })
        });
        if (token) {
            return this.response.getResponse200({ data: encDecToken, msg: null });
        }
        return this.response.getResponse498();
    }
};
exports.JwtController = JwtController;
__decorate([
    (0, common_1.Post)(routeListEnum_1.routeListEnum.GenerateJwtToken),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jwtToken_dto_1.GenerateJwtToken, Object]),
    __metadata("design:returntype", Promise)
], JwtController.prototype, "generateJwtToken", null);
__decorate([
    (0, common_1.Get)(routeListEnum_1.routeListEnum.VerifyJwtToken),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jwtToken_dto_1.VerifyJwtToken, Object, Object]),
    __metadata("design:returntype", Promise)
], JwtController.prototype, "verifyJwtToken", null);
__decorate([
    (0, common_1.Delete)(routeListEnum_1.routeListEnum.RemoveJwtToken),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JwtController.prototype, "removeJwtToken", null);
__decorate([
    (0, common_1.Get)(routeListEnum_1.routeListEnum.GetToken),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jwtToken_dto_1.GetJwtToken, Object]),
    __metadata("design:returntype", Promise)
], JwtController.prototype, "getJwtToken", null);
exports.JwtController = JwtController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [response_service_1.ResponseService,
        jwtToken_service_1.JwtTokenService])
], JwtController);
//# sourceMappingURL=jwtToken.controller.js.map