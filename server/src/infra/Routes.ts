import BaseRoute from './routes/BaseRoute';
import AlbumRoute from './routes/AlbumRoute';
import { UserRoute } from "./routes/UserRoute";
import AuthenticationRoute from './routes/AuthenticationRoute';
import { ObjectType } from 'typedi';

const Routes : ObjectType<BaseRoute>[] = [UserRoute, AuthenticationRoute, AlbumRoute];

export default Routes;