import passport from "passport";
import User from "./models/User";

passport.user(User.createStrategy());               // define How to log-in

passport.serializeUser(User.serializeUser());       // put the user id into cookie/session
passport.deserializeUser(User.deserializeUser());   // check the user id included in cookie/session 