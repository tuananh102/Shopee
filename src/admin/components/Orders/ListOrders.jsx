import { Delete, Edit, Upload } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const ListOrders = () => {
  const [salesOrder, setOrder] = useState([]);
  const { data, loading, error } = useQuery(`/salesOrder`); //change SalesOrder here
  // let navigate = useNavigate();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      console.log("Order ", data);
      setOrder(data);
    }
  }, [data]);

  const routeChange = (id) => {
    let path = `edit/${id}`;
    navigate(path);
  };
  const columns = [
    {
      field: "id",
      headerName: "Order #",
      type: "number",
      sortable: true,
      width: 90,
    },
    {
      field: "orderStatus",
      headerName: "Order status",
      type: "string",
      sortable: true,
      renderCell: (cellValues) => {
        console.log("Cell values: ", cellValues);
        return (
          <span className={`order-status order-status-${cellValues.value}`}>
            {cellValues.value}
          </span>
        );
      },
    },
    {
      field: "paymentStatus",
      headerName: "Payment status",
      type: "number",
      sortable: true,
      width: 150,
      renderCell: (cellValues) => {
        return <span>{cellValues.paymentStatus ? "Paid" : "Pending"}</span>;
      },
    },
    {
      field: "shippingStatus",
      headerName: "Shipping status",
      type: "string",
      sortable: true,
      width: 150,
    },
    {
      field: "user",
      headerName: "Customer",
      type: "string",
      sortable: true,
      width: 265,
      renderCell: (cellValues) => {
        return <span>{cellValues.value.email}</span>;
      },
    },
    {
      field: "createdAt",
      headerName: "Created on",
      type: "string",
      sortable: true,
      width: 110,
    },
    {
      field: "orderTotal",
      headerName: "Order total",
      type: "string",
      sortable: true,
      width: 140,
    },
    {
      field: "function",
      headerName: "Function",
      sortModel: null,
      sortable: null,
      width: 140,
      renderCell: (cellValues) => {
        return (
          <>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={(e) => {
                  e.stopPropagation();
                  routeChange(cellValues.id);
                }}
              ></Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={(e) => {
                  e.stopPropagation();
                  routeChange(cellValues.id);
                }}
              ></Button>
            </ButtonGroup>
          </>
        );
      },
    },
  ];
  return (
    <div className="admin-category-wrap">
      <div className="admin-category-heading">
        <h3>Order</h3>
        <div className="admin-category-controls">
          <button className="btn-danger">
            <Link to="trash">
              <Delete />
              Trash
            </Link>
          </button>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }} className="salesOrder-list">
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={salesOrder}
              columns={columns}
              checkboxSelection
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrders;
