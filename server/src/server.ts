import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import put_router from './route/put_route';
import default_route from './route/default_route';
import post_route from './route/post_route';
import user_route from './route/user_route';
import { requireAuth } from './middleware/authenticate_jwt_middleware';

dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('post', post_route)

app.use('/', default_route);
//app.use('*', checkUser);
app.use('/user', requireAuth, user_route);

// UPDATE
app.use('/put', put_router);

app.listen(PORT, () => console.log(`${PORT}`));

