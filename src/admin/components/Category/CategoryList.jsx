import { Delete, Edit, Upload } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const { data, loading, error } = useQuery(`/category`);
  // let navigate = useNavigate();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      setCategory(data);
    }
  }, [data]);

  const routeChange = (id) => {
    let path = `edit/${id}`;
    navigate(path);
  };
  const columns = [
    {
      field: "id",
      headerName: "Id",
      type: "number",
      width: 40,
      sortable: true,
    },
    {
      field: "name",
      headerName: "Name",
      type: "string",
      sortable: true,
      width: 300,
    },
    {
      field: "parentId",
      headerName: "Parent Id",
      type: "number",
      sortable: true,
    },
    {
      field: "function",
      headerName: "Function",
      sortModel: null,
      sortable: null,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={(e) => {
              e.stopPropagation();
              routeChange(cellValues.id);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];
  return (
    <div className="admin-category-wrap">
      <div className="admin-category-heading">
        <h3>Category</h3>
        <div className="admin-category-controls">
          <button className="btn-success">
            <Link to="create">
              <Add />
              Add new
            </Link>
          </button>
          <button className="btn-primary">
            <Upload />
            Import
          </button>
          <button className="btn-danger">
            <Link to="trash">
              <Delete />
              Delete
            </Link>
          </button>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }} className="category-list">
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={category}
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

export default CategoryList;
