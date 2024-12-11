"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
const codeEnum_1 = require("../const/status/codeEnum");
const tagEnum_1 = require("../const/status/tagEnum");
let ResponseService = class ResponseService {
    getResponse200({ msg = null, data = null }) {
        return {
            code: codeEnum_1.HttpStatusCode.OK,
            tag: tagEnum_1.CommonStatusTag.SUCCESS,
            message: msg,
            data: data
        };
    }
    getResponse422({ msg = null }) {
        return {
            code: codeEnum_1.HttpStatusCode.UnprocessableEntity,
            tag: tagEnum_1.CommonStatusTag.FAILED,
            message: msg,
            data: null
        };
    }
    getResponse500() {
        return {
            code: codeEnum_1.HttpStatusCode.InternalServerError,
            tag: tagEnum_1.CommonStatusTag.FAILED,
            message: tagEnum_1.CommonStatusTag.INTERNAL_SERVER_ERROR,
            data: null
        };
    }
    getResponse498() {
        return {
            code: codeEnum_1.HttpStatusCode.InvalidToken,
            tag: tagEnum_1.CommonStatusTag.FAILED,
            message: tagEnum_1.JwtTokenStatusTag.VERIFY_TOKEN_FAILED,
            data: null
        };
    }
};
exports.ResponseService = ResponseService;
exports.ResponseService = ResponseService = __decorate([
    (0, common_1.Injectable)()
], ResponseService);
//# sourceMappingURL=response.service.js.map