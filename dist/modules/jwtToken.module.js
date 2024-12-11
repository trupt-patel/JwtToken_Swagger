"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwtToken_controller_1 = require("../controllers/jwtToken.controller");
const jsonReader_1 = require("../helper/jsonReader");
const jwtToken_service_1 = require("../services/jwtToken.service");
const response_service_1 = require("../services/response.service");
let JwtTokenModule = class JwtTokenModule {
};
exports.JwtTokenModule = JwtTokenModule;
exports.JwtTokenModule = JwtTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                useFactory: () => {
                    const data = (0, jsonReader_1.readConfigurationJsonFile)();
                    return {
                        secret: data.jwt.secretKey,
                        signOptions: { expiresIn: `${data.jwt.expiryTime}m` },
                        algorithm: "HS256",
                    };
                },
            }),
        ],
        controllers: [jwtToken_controller_1.JwtController],
        providers: [response_service_1.ResponseService, jwtToken_service_1.JwtTokenService],
    })
], JwtTokenModule);
//# sourceMappingURL=jwtToken.module.js.map