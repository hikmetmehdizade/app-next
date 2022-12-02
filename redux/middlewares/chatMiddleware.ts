import { AnyAction, Middleware } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../store';
import s, { SocketIO } from './socket';

type ChatMiddleware = Middleware<
  {},
  undefined,
  ThunkDispatch<RootState, any, AnyAction>
>;
const chatMiddleware: (s: SocketIO) => Middleware =
  (socket) => (store) => (next) => (action) => {};

export default chatMiddleware(s);
