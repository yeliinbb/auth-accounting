import GlobalStyle from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from 'react-modal';
import AppRouter from './shared/Router';

ReactModal.setAppElement('#root');

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        closeOnClick
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        limit={1}
      />
      <AppRouter />
    </>
  );
};

export default App;
