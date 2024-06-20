import GlobalStyle from './GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from 'react-modal';
import AppRouter from './router/Router';

ReactModal.setAppElement('#root');

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer closeOnClick position="top-right" autoClose={3000} hideProgressBar={true} limit={1} />
      {/* <RouterProvider router={router} /> */}
      {/* <Router /> */}
      <AppRouter />
    </>
  );
};

export default App;
