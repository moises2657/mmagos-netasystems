import express = require('express');
import UserModel from '../models/UserModel';

export class UserController{
    getInfo = async (req: express.Request,res: express.Response) =>{

        const resultUser= await UserModel.findById((<any>req).user.uid)
        res.json(resultUser);
    }

}