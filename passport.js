import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import { githubLoginCallback, facebookLoginCallback } from "./controllers/userControllers";

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

passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: `http://localhost:4000${routes.facebookCallback}`,
    profileFields: ['id', 'displayName', 'photos', 'email'],
    scope: ['public_profile', 'email']
  },
  facebookLoginCallback
));

//passport.serializeUser(User.serializeUser());       // put the user id into cookie/session
//passport.deserializeUser(User.deserializeUser());   // check the user id included in cookie/session 

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
});
