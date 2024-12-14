"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonStatusTag = exports.JwtTokenStatusTag = void 0;
var JwtTokenStatusTag;
(function (JwtTokenStatusTag) {
    JwtTokenStatusTag["GENERATED_TOKEN_SUCCESS"] = "GENERATED_TOKEN_SUCCESS";
    JwtTokenStatusTag["GENERATED_TOKEN_FAILED"] = "GENERATED_TOKEN_FAILED";
    JwtTokenStatusTag["VERIFY_TOKEN_SUCCESS"] = "VERIFY_TOKEN_SUCCESS";
    JwtTokenStatusTag["VERIFY_TOKEN_FAILED"] = "VERIFY_TOKEN_FAILED";
    JwtTokenStatusTag["REMOVE_TOKEN_SUCCESS"] = "REMOVE_TOKEN_SUCCESS";
    JwtTokenStatusTag["UPDATE_JWT_CONFIGURATION_SUCCESS"] = "UPDATE_JWT_CONFIGURATION_SUCCESS";
    JwtTokenStatusTag["UPDATE_JWT_CONFIGURATION_FAILED"] = "Expiry Time should not be 0";
})(JwtTokenStatusTag || (exports.JwtTokenStatusTag = JwtTokenStatusTag = {}));
var CommonStatusTag;
(function (CommonStatusTag) {
    CommonStatusTag["SUCCESS"] = "SUCCESS";
    CommonStatusTag["FAILED"] = "FAILED";
    CommonStatusTag["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
    CommonStatusTag["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(CommonStatusTag || (exports.CommonStatusTag = CommonStatusTag = {}));
//# sourceMappingURL=tagEnum.js.map