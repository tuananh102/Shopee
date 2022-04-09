import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Table } from "react-bootstrap";
// import PreLoader from "./features/PreLoader";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import {
  Button,
  ButtonGroup,
  Checkbox,
  IconButton,
  Switch,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";

function CheckBoxProduct() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}
const ProductList = () => {
  const { data, loading, error } = useQuery(`/products`);
  const [isChecked, setIsChecked] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data) {
      // window.scrollTo(0, 0);
      setProducts(data);
      console.log("HOME PRODUCT:", data);
    }
    return () => setProducts(null);
  }, [data]);
  return (
    <div className="admin-products">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {error && "ERROR"}
      <div className="admin-products-heading">
        <h3>Product</h3>
        <div className="admin-products-controls">
          <button className="btn-success">
            <Link to="create">
              <i className="bx bxs-plus-square" />
              Add new
            </Link>
          </button>
          <button className="btn-primary">Export</button>
          <button className="btn-success">Import</button>
          <button className="btn-danger">
            <Link to="trash">
              <i className="bx bx-trash" />
              Delete
            </Link>
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Checkbox onClick={() => setIsChecked(!isChecked)} />
            </th>
            <th>Picture</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Published</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>
                <CheckBoxProduct prop={isChecked} />
              </td>
              <td>
                {item.image ? (
                  <div className="product-img">
                    <img src={item.image} alt="" className="" />
                  </div>
                ) : (
                  <Box>
                    <Skeleton />
                  </Box>
                )}
              </td>
              <td>
                <div className="product-name" title={item.title}>
                  {item.title}
                </div>
              </td>
              <td>{item.price}</td>
              <td>{item.rating.count}</td>
              <td>
                <Switch defaultChecked />
              </td>
              <td>
                <Link to={`edit/${item.id}`}>
                  <Button variant="outlined" startIcon={<Edit />}>
                    Edit
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
