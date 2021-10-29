export interface IAuthResponseUser {
    email: string;
    name: string;
    isActivated: boolean;
    id: string;
}

export interface IUserData {
    email?: string;
    password: string;
    name?: string;
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IAuthResponseUser;
}
