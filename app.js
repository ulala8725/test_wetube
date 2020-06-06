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