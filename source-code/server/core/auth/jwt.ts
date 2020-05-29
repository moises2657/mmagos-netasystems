import jwt = require("jsonwebtoken");
import {config} from "../../config/config";
import { User } from "./user";
export class Jwt{
    static async verifyToken(token: string): Promise<User>{
        return new Promise((resolve,reject) =>{
            jwt.verify(token,config.application.key_jwt,(err,decoded) =>{
                if(err){
                    reject(null);
                }else{
                    resolve(<User>decoded);
                }
            });
        })
    }

    static create(user: User): string{
        const token = jwt.sign(user,config.application.key_jwt,{
            expiresIn: 1440
        });
        return token;
    }
}