import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { routes } from './routes'
import Home from '../pages/home'

const ro = routes as RouteObject[]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  ...ro
]);

export default router;
