import { ResponseInterface } from './responseInterface';

export interface LoginResponseInterface extends ResponseInterface{
    token: string;
    errorCode: number;
}