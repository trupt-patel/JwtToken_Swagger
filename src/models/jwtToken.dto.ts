import { ApiProperty } from "@nestjs/swagger";

export class GenerateJwtToken {
    @ApiProperty()
    username: string

    constructor( {username} : {username: string}) {
        this.username = username;
    }
}

export class JwtConfiguration {
    @ApiProperty()
    ExpiryTime: number;
    @ApiProperty()
    Key: string

    constructor( {ExpiryTime, Key} : {ExpiryTime: number, Key: string}) {
        this.ExpiryTime = ExpiryTime;
        this.Key = Key;
    }
}

export class VerifyJwtToken {
    @ApiProperty()
    username: string
    @ApiProperty()
    iat: number
    @ApiProperty()
    exp: number

    constructor( {username, iat, exp} : {username: string, iat: number, exp: number}) {
        this.username = username;
        this.iat = iat;
        this.exp = exp
    }
}

export class GetJwtToken {
    @ApiProperty()
    encryptedToken: string
    @ApiProperty()
    decryptedToken: VerifyJwtToken

    constructor( {encryptedToken, decryptedToken} : {encryptedToken: string, decryptedToken: VerifyJwtToken }) {
        this.encryptedToken = encryptedToken;
        this.decryptedToken = decryptedToken;
    }
}