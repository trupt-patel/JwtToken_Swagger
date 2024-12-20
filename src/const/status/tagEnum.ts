export enum JwtTokenStatusTag {
    GENERATED_TOKEN_SUCCESS = "GENERATED_TOKEN_SUCCESS",
    GENERATED_TOKEN_FAILED = "GENERATED_TOKEN_FAILED",
    VERIFY_TOKEN_SUCCESS = "VERIFY_TOKEN_SUCCESS",
    VERIFY_TOKEN_FAILED= "VERIFY_TOKEN_FAILED",
    REMOVE_TOKEN_SUCCESS = "REMOVE_TOKEN_SUCCESS",
    UPDATE_JWT_CONFIGURATION_SUCCESS = "UPDATE_JWT_CONFIGURATION_SUCCESS",
    UPDATE_JWT_CONFIGURATION_FAILED = "Expiry Time should not be 0"
}

export enum CommonStatusTag {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}