import express = require('express');
import { User } from '../core/auth/user';
import { Jwt } from '../core/auth/jwt';
import UserModel from '../models/UserModel';
const PwdHash = require('../core/auth/PwdHash');
export class AuthController{

    Login = async (req: express.Request,res: express.Response) =>{
        const resultUser= await (<any>UserModel).findByEmail(req.body.email)

        if (!resultUser){
            return res.json({
                sucefull: false,
                message: 'El correo electrónico no está registrado',
                token: null,
                errorCode: 1
            });
        }

        if(resultUser.password != PwdHash(req.body.password)){
            return res.json({
                sucefull: false,
                message: 'Contraseña incorrecta',
                token: null,
                errorCode: 2
            });
        }
        
        const user : User={
            uid: resultUser._id
        };
        const token = Jwt.create(user);
        res.json({
            sucefull: true,
            message: 'Bienvenido',
            token: token
        });
    }

    VerifyToken =  async(req: express.Request,res: express.Response) =>{
        res.send(true);
    }
}