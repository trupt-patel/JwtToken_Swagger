import { HttpCode, Injectable } from "@nestjs/common";
import { HttpStatusCode } from "src/const/status/codeEnum";
import { CommonStatusTag, JwtTokenStatusTag } from "src/const/status/tagEnum";
import { ResponseDto } from "src/models/response.dto";

@Injectable()
export class ResponseService {

    getResponse200( {msg = null, data = null} : {msg: string | null | boolean, data: any} ): ResponseDto<Object> {
        return {
            code: HttpStatusCode.OK,
            tag: CommonStatusTag.SUCCESS,
            message: msg,
            data: data
        }
    }

    getResponse422( {msg = null} : {msg: string | null | boolean} ): ResponseDto<Object> {
        return {
            code: HttpStatusCode.UnprocessableEntity,
            tag: CommonStatusTag.FAILED,
            message: msg,
            data: null
        }
    }

    getResponse500(): ResponseDto<Object> {
        return {
            code: HttpStatusCode.InternalServerError,
            tag: CommonStatusTag.FAILED,
            message: CommonStatusTag.INTERNAL_SERVER_ERROR,
            data: null
        }
    }

    getResponse498(): ResponseDto<Object> {
        return {
            code: HttpStatusCode.InvalidToken,
            tag: CommonStatusTag.FAILED,
            message: JwtTokenStatusTag.VERIFY_TOKEN_FAILED,
            data: null
        }
    }

}