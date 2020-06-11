import express from 'express';
import routes from '../routes';
import {
    getJoin, postJoin,
    login,
    logout,
    users,
    userDetail,
    editProfile,
    changePassword
} from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.get(routes.join, getJoin);
userRouter.post(routes.join, postJoin);

userRouter.get(routes.login, login);
userRouter.get(routes.logout, logout);
userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
