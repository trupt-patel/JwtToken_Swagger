export declare class JwtTokenDTO {
    key: string;
    secretKey: string;
    expiryTime: number;
}
export declare class ConfigurationJSONFileDTO {
    jwt: JwtTokenDTO;
}
