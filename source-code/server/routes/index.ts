import express=require('express'); 

import {AuthController} from '../controllers/AuthContoller';
import { UserController } from '../controllers/UserController';

const Middleware = require('../core/middleware')
const router = express.Router();
const authController = new AuthController();
const userController = new UserController();
router.post('/auth/verifyToken',Middleware,authController.VerifyToken);
router.post('/auth',authController.Login);
router.get('/user/getInfo',Middleware,userController.getInfo);

module.exports = router;