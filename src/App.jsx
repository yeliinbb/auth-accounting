import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/LoginPage/Login";
import router from "./router/router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
