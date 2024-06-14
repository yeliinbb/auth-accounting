import GlobalStyle from './GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

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
