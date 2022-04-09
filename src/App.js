import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Common/NotFound";
import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
import Spinner from "react-bootstrap/Spinner";
import PreLoader from "./features/PreLoader";
import Dashboard from "./admin/components/Dashboard";
import Product from "./admin/components/Product";
import Order from "./admin/components/Order";
import Shipments from "./admin/components/Shipments";
import Category from "./admin/components/Category";
import Backdrop from "@mui/material/Backdrop";

import CircularProgress from "@mui/material/CircularProgress";

import Manufacturers from "./admin/components/Manufacturers";
import ProductList from "./admin/components/Product/ProductList";
import CreateProduct from "./admin/components/Product/CreateProduct";
import EditProduct from "./admin/components/Product/EditProduct";
import ProductTrash from "./admin/components/Product/ProductTrash";
const Main = React.lazy(() => import("./Main"));
const Admin = React.lazy(() => import("./admin/Admin"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
function App() {
  return (
    <Routes>
      <Route
        path="admin"
        element={
          <React.Suspense
            fallback={
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Admin />
          </React.Suspense>
        }
      >
        <Route index element={<Dashboard />}></Route>
        <Route path="product" element={<Product />}>
          <Route index element={<ProductList />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="trash" element={<ProductTrash />} />
        </Route>
        <Route path="category" element={<Category />}></Route>
        <Route path="manufacturers" element={<Manufacturers />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="shipments" element={<Shipments />}></Route>
        <Route path="setting" element={<Dashboard />}></Route>
      </Route>
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
