import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { home, search } from '../controllers/videoControllers';
import { getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
    githubLogin, 
    postGithubLogin } from '../controllers/userControllers';
import { onlyPublic, onlyPrivate } from "../middlewares";
    
const globalRouter = express.Router();
    
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
    routes.gitHubCallback,
    passport.authenticate('github', { failureRedirect: '/login'}),
    postGithubLogin
);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
