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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJwtToken = exports.VerifyJwtToken = exports.JwtConfiguration = exports.GenerateJwtToken = void 0;
const swagger_1 = require("@nestjs/swagger");
class GenerateJwtToken {
    constructor({ username }) {
        this.username = username;
    }
}
exports.GenerateJwtToken = GenerateJwtToken;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GenerateJwtToken.prototype, "username", void 0);
class JwtConfiguration {
    constructor({ ExpiryTime, Key }) {
        this.ExpiryTime = ExpiryTime;
        this.Key = Key;
    }
}
exports.JwtConfiguration = JwtConfiguration;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], JwtConfiguration.prototype, "ExpiryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JwtConfiguration.prototype, "Key", void 0);
class VerifyJwtToken {
    constructor({ username, iat, exp }) {
        this.username = username;
        this.iat = iat;
        this.exp = exp;
    }
}
exports.VerifyJwtToken = VerifyJwtToken;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VerifyJwtToken.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VerifyJwtToken.prototype, "iat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VerifyJwtToken.prototype, "exp", void 0);
class GetJwtToken {
    constructor({ encryptedToken, decryptedToken }) {
        this.encryptedToken = encryptedToken;
        this.decryptedToken = decryptedToken;
    }
}
exports.GetJwtToken = GetJwtToken;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetJwtToken.prototype, "encryptedToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", VerifyJwtToken)
], GetJwtToken.prototype, "decryptedToken", void 0);
//# sourceMappingURL=jwtToken.dto.js.map