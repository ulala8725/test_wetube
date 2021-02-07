import express from 'express';            // server
import morgan from 'morgan';              // logger
import helmet from 'helmet';              // security
import bodyParser from 'body-parser';     // data from user
import cookieParser from 'cookie-parser'; // cookie
import passport from 'passport';          // user authentication
//import mongoose from 'mongoose';
import session from 'express-session';    // session
//import MongoStore from 'connect-mongo';
import { localsMiddleware } from './middlewares';

import routes from './routes';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import './passport';

const app = express();

//const CookieStore = MongoStore(session);

// call middleware before routes
app.use(helmet());
app.set('view engine', 'pug'); 

// express.static() : built-in middelware function to give file from directory
// no checking controller or view
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(session({
    secret: process.env.COOKIE_SECRET,  // encrypt sessionId with random string
    resave: true,                       
    saveUninitialized: false           // implement login session
    //,store: new CookieStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());

// convert local variables to global variables
app.use(localsMiddleware);

// route
app.use('/', globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;