import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constant';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';

interface IRoute {
  path: string;
  Component: any;
  key: number;
}
export const publicRouter: IRoute[] = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
    key: 1
  }
];

export const privateRouter: IRoute[] = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
    key: 2
  }
];
