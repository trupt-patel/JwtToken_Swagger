export class JwtTokenDTO{
    key: string;
    secretKey: string;
    expiryTime: number;
}

export class ConfigurationJSONFileDTO{
    jwt: JwtTokenDTO
}