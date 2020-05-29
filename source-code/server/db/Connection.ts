import { config } from "../config/config";
import mongoose from 'mongoose';
export class Connection{
    get = (dbName: string)=>{
        const connectionUrl = `${config.application.db_server.host}${dbName}`;
        
        return mongoose.connect(connectionUrl, {useNewUrlParser: true});
    }
}