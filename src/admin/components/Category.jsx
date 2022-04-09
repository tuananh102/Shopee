import * as React from "react";
import Button from "@mui/material/Button";
import { DataGrid, GridToolbar, viVN } from "@mui/x-data-grid";
import { viVN as coreViVN } from "@mui/material/locale";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Switch,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

// let theme = createTheme(
//   {
//     typography: {
//       // Tell MUI what's the font-size on the html element is.
//       htmlFontSize: 10,
//     },
//     // palette: {
//     //   mode: "dark",
//     // },
//   },
//   viVN,
//   coreViVN
// );
// theme = responsiveFontSizes(theme);
export default function AutoHeightGrid() {
  const [products, setProducts] = React.useState([]);
  const { data, loading, error } = useQuery(`/products`);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      // window.scrollTo(0, 0);
      setProducts(data);
      console.log("HOME PRODUCT:", data);
    }
    return () => setProducts(null);
  }, [data]);
  console.log(data);
  const routeChange = (id) => {
    let path = `edit`;
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
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (v) => (
        <div className="product-img" style={{ width: "80px", height: "80px" }}>
          <img
            src={v.row.image}
            alt=""
            style={{ width: "100%", height: "100%", padding: "20px" }}
          />
        </div>
      ),
    },
    { field: "title", type: "text", width: 250, headerName: "Title" },
    {
      field: "price",
      headerName: "Price",
      width: 50,
      sortable: true,
    },
    {
      field: "published",
      headerName: "Published",
      sortModel: null,
      sortable: null,
      renderCell: (cellValues) => {
        return <Switch defaultChecked onClick={(e) => e.stopPropagation()} />;
      },
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
              console.log(cellValues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            initialState={{
              sorting: {
                sortModel: [{ field: "image", sort: null }],
              },
            }}
            rows={data}
            columns={columns}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      </div>
    </div>
  );
}
