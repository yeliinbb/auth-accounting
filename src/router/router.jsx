import { BrowserRouter, Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom';
// import MainLayout from '../layouts/MainLayout/MainLayout';
// import Home from '../pages/Home';
// import Detail from '../pages/DetailPage/Detail';
// import Login from '../pages/LoginPage/Login';
import { useSelector } from 'react-redux';
import Login from '../pages/LoginPage/Login';
import Detail from '../pages/DetailPage/Detail';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

// const router = createBrowserRouter([
//   {
//     path: '/', // 로그인 페이지 루트면 안됨.
//     element: <Login />
//   },
//   {
//     // 로그인 정보가 있으면 실행되는
//     path: '/',
//     element: <MainLayout />, // // 여기서 토큰 유무 조건 확인해서 navigate -> 새로운 컴포넌트
//     children: [
//       { path: 'home', element: <Home /> },
//       { path: 'detail/:id', element: <Detail /> }
//     ]
//   }
// ]);

// export default router;

const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? <Navigate to="/" /> : element;
};

const PrivateRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? element : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/" element={<PrivateRoute element={<MainLayout />} />}>
          {/* 어차피 자식 컴포넌트로 이동할 때 부모 컴포넌트에서 경로를 거치기 때문에 자식 컴포넌트에는 PrivateRoute를 해줄 필요가 없음. */}
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
