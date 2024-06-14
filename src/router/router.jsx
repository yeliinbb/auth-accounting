import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home';
import Detail from '../pages/DetailPage/Detail';
import Login from '../pages/LoginPage/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'detail/:id', element: <Detail /> }
    ]
  }
]);

export default router;
