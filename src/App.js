import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { viVN as coreViVN } from "@mui/material/locale";
import { viVN } from "@mui/x-data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Category from "./admin/components/Category";
import CategoryList from "./admin/components/Category/CategoryList";
import CreateCategory from "./admin/components/Category/CreateCategory";
import EditCategory from "./admin/components/Category/EditCategory";
import Dashboard from "./admin/components/Dashboard";
import CreateManufacturer from "./admin/components/Manufacturer/CreateManufacturer";
import EditManufacturer from "./admin/components/Manufacturer/EditManufacturer";
import ManufacturerList from "./admin/components/Manufacturer/ManufacturerList";
import Manufacturers from "./admin/components/Manufacturers";
import Order from "./admin/components/Order";
import EditOrder from "./admin/components/Orders/EditOrder";
import ListOrders from "./admin/components/Orders/ListOrders";
import TrashOrders from "./admin/components/Orders/TrashOrders";
import Product from "./admin/components/Product";
import CreateProduct from "./admin/components/Product/CreateProduct";
import EditProduct from "./admin/components/Product/EditProduct";
import ProductList from "./admin/components/Product/ProductList";
import ProductTrash from "./admin/components/Product/ProductTrash";
import Shipments from "./admin/components/Shipments";
import NotFound from "./pages/NotFound";
import CartList from "./components/Cart/CartList";
import Notifications from "./components/Users/Notifications";
import Profile from "./components/Users/Profile";
import Purchase from "./components/Users/Purchase";
import PreLoader from "./features/PreLoader";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import User from "./pages/User";

// Customize MUI theme
let theme = createTheme(
  {
    typography: {
      // Tell MUI what's the font-size on the html element is.
      htmlFontSize: 10,
    },
    palette: {
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  },
  viVN,
  coreViVN
);
theme = responsiveFontSizes(theme);

const Main = React.lazy(() => import("./Main"));
const Admin = React.lazy(() => import("./admin/Admin"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="admin"
          element={
            <React.Suspense fallback={<PreLoader />}>
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
          <Route path="category" element={<Category />}>
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CreateCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
            <Route path="trash" element={<ProductTrash />} />
          </Route>
          <Route path="manufacturers" element={<Manufacturers />}>
            <Route index element={<ManufacturerList />} />
            <Route path="create" element={<CreateManufacturer />} />
            <Route path="edit/:id" element={<EditManufacturer />} />
            <Route path="trash" element={<ProductTrash />} />
          </Route>
          <Route path="order" element={<Order />}>
            <Route index element={<ListOrders />} />
            <Route path="edit" element={<EditOrder />} />
            <Route path="trash" element={<TrashOrders />} />
          </Route>
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
          <Route path="cart" element={<Cart />}>
            {/* <Route index element={<CartList />} /> */}
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
