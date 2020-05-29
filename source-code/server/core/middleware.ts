
import { Jwt } from './auth/jwt';


const middleware = (req: any,res: any, next :any)=>{
    const token = req.headers['access-token'];
    if(token){
        Jwt.verifyToken(<string>token).then(payload =>{
            req.user = payload;
            next();
        }).catch(err=>{
            return res.status(401).send({message:'Unauthorized'});
        })
    }else{
        return res.status(401).send({message:'Unauthorized'});
    }
};
module.exports = middleware;
