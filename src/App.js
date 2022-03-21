import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Common/NotFound";
import Home from "./pages/Home";
import Spinner from "react-bootstrap/Spinner";
const Main = React.lazy(() => import("./Main"));
const Admin = React.lazy(() => import("./admin/Admin"));

function App() {
  return (
    <Routes>
      <Route
        path="admin"
        element={
          <React.Suspense fallback={<Spinner animation="border" />}>
            <Admin />
          </React.Suspense>
        }
      ></Route>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Spinner animation="border" />}>
            <Main />
          </React.Suspense>
        }
      >
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
