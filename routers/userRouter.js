import express from 'express';
import routes from '../routes';
import {
    //getJoin, postJoin,
    //getLogin, postLogin,
    logout,
    users,
    userDetail,
    editProfile,
    changePassword
} from '../controllers/userControllers';


const userRouter = express.Router();

//userRouter.get(routes.join, getJoin);     //→globalRouter
//userRouter.post(routes.join, postJoin);   //→globalRouter
//userRouter.get(routes.login, getLogin);   //→globalRouter
//userRouter.post(routes.login, postLogin); //→globalRouter

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.logout, logout);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
