import {
  Backspace,
  Delete,
  Edit,
  RestoreFromTrash,
  RestoreFromTrashOutlined,
  Upload,
} from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const TrashOrders = () => {
  const [salesOrder, setOrder] = useState([]);
  const { data, loading, error } = useQuery(`/salesOrder`); //change SalesOrder here
  // let navigate = useNavigate();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      var trashData = data.map((o) => o.isDeleted);
      setOrder(trashData);
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
      field: "OrderStatus",
      headerName: "Order status",
      type: "string",
      sortable: true,
    },
    {
      field: "PaymentStatus",
      headerName: "Payment status",
      type: "number",
      sortable: true,
      width: 150,
    },
    {
      field: "ShippingStatus",
      headerName: "Shipping status",
      type: "text",
      sortable: true,
      width: 150,
    },
    {
      field: "Customer",
      headerName: "Customer",
      type: "text",
      sortable: true,
    },
    {
      field: "CreatedOn",
      headerName: "Created on",
      type: "text",
      sortable: true,
    },
    {
      field: "OrderTotal",
      headerName: "Order total",
      type: "text",
      sortable: true,
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
                startIcon={<RestoreFromTrash />}
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
          <button className="btn-primary">
            <Link to="..">
              <Backspace />
              &nbsp;Go back
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

export default TrashOrders;
