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
import { Add, Delete, Download, Edit, Upload } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import productApi from "../../../api/productApi";

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
  const { data, loading, error } = useQuery(`/product`);
  const [isChecked, setIsChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [isPublished, setIsPublished] = useState();
  useEffect(() => {
    if (data) {
      // console.log("List product in admin site: ", data);
      setProducts(data);
    }
    return () => setProducts(null);
  }, [data]);

  //Set ispublished
  function handleChangePublished(e, data) {
    const dataSubmit = {
      isPublished: e.target.checked,
    };
    //setIsPublished(e.target.checked)
    productApi
      .updatePublished(data.id, dataSubmit)
      .then((res) => console.log("Update published success", res))
      .catch((err) => console.log("Some thing went wrong! ", err));
  }
  let navigate = useNavigate();
  const routeChangeEdit = (id) => {
    let path = `edit/${id}`;
    navigate(path);
  };
  // const routeChangeDelete = (id) => {
  //   let path = `edit/${id}`;
  //   navigate(path);
  // };
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
              <Add />
              Add new
            </Link>
          </button>
          <button className="btn-primary">
            <Download />
            Export
          </button>
          <button className="btn-success">
            <Upload />
            Import
          </button>
          <button className="btn-danger">
            <Link to="trash">
              <Delete />
              Trash
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
            <tr key={index}>
              <td>
                <CheckBoxProduct prop={isChecked} />
              </td>
              <td>
                {item.images ? (
                  <div className="product-img">
                    <img src={item.images[0]} alt="" className="" />
                  </div>
                ) : (
                  <Box>
                    <Skeleton />
                  </Box>
                )}
              </td>
              <td>
                <div className="product-name" title={item.name}>
                  {item.name}
                </div>
              </td>
              <td>{item.price}</td>
              <td>{item.stockQuantity}</td>
              <td>
                <Switch
                  defaultChecked={item.isPublished}
                  onChange={(e) => handleChangePublished(e, item)}
                />
              </td>
              <td>
                <ButtonGroup>
                  <Button
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={(e) => {
                      e.stopPropagation();
                      routeChangeEdit(item.id);
                    }}
                  ></Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                  ></Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
