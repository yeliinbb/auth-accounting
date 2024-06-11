import { Outlet, useLocation } from 'react-router-dom';
import HeaderNavigationBar from './HeaderNavigationBar';

const MainLayout = () => {
  const location = useLocation();
  // console.log(location);
  const isLoginPage = location.path === '/';

  return (
    <>
      {!isLoginPage && <HeaderNavigationBar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
