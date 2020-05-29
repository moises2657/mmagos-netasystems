import crypto from 'crypto';

import {config} from '../../config/config';
const PwdHash = (password: string) =>{
    return crypto.createHash('sha256').update(`${config.application.salt_pwd}${password}`).digest('base64');
}

module.exports = PwdHash;
