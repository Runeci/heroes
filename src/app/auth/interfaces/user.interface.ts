import { ExpirationToken } from './token.interface';

export interface User {
    username?: string,
    password: string,
    email: string,
}


export interface CurrentUser {
    userInfo: User,
    token: ExpirationToken,
}
