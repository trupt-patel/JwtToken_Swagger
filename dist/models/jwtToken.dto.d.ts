export declare class GenerateJwtToken {
    username: string;
    constructor({ username }: {
        username: string;
    });
}
export declare class JwtConfiguration {
    ExpiryTime: number;
    Key: string;
    constructor({ ExpiryTime, Key }: {
        ExpiryTime: number;
        Key: string;
    });
}
export declare class VerifyJwtToken {
    username: string;
    iat: number;
    exp: number;
    constructor({ username, iat, exp }: {
        username: string;
        iat: number;
        exp: number;
    });
}
export declare class GetJwtToken {
    encryptedToken: string;
    decryptedToken: VerifyJwtToken;
    constructor({ encryptedToken, decryptedToken }: {
        encryptedToken: string;
        decryptedToken: VerifyJwtToken;
    });
}
