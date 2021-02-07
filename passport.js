import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userControllers";

import routes  from './routes';

passport.use(User.createStrategy());               // define How to log-in

passport.use(new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000${routes.gitHubCallback}`
    },
    githubLoginCallback
    )
);

passport.serializeUser(User.serializeUser());       // put the user id into cookie/session
passport.deserializeUser(User.deserializeUser());   // check the user id included in cookie/session 