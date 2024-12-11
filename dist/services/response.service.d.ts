import { ResponseDto } from "src/models/response.dto";
export declare class ResponseService {
    getResponse200({ msg, data }: {
        msg: string | null | boolean;
        data: any;
    }): ResponseDto<Object>;
    getResponse422({ msg }: {
        msg: string | null | boolean;
    }): ResponseDto<Object>;
    getResponse500(): ResponseDto<Object>;
    getResponse498(): ResponseDto<Object>;
}
