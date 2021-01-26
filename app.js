import express from 'express';            // server
import morgan from 'morgan';              // logger
import helmet from 'helmet';              // security
import bodyParser from 'body-parser';     // data from user
import cookieParser from 'cookie-parser'; // cookie
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';
import { localsMiddleware } from './middlewares';

const app = express();

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

// convert local variables to global variables
app.use(localsMiddleware);

// route
app.use('/', globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;