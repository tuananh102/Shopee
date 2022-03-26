import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Common/NotFound";
import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
import Spinner from "react-bootstrap/Spinner";
import PreLoader from "./features/PreLoader";
const Main = React.lazy(() => import("./Main"));
const Admin = React.lazy(() => import("./admin/Admin"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
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
          <React.Suspense fallback={<PreLoader />}>
            <Main />
          </React.Suspense>
        }
      >
        <Route path="/" element={<Home />}></Route>
        <Route
          path="products/:id"
          element={
            <React.Suspense fallback={<PreLoader />}>
              <ProductDetails />
            </React.Suspense>
          }
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
