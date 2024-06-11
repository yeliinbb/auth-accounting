import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/LoginPage/Login';
import router from './router/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer closeOnClick position="top-right" autoClose={3000} hideProgressBar={true} limit={1} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
