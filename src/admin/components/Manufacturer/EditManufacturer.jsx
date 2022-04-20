import { yupResolver } from "@hookform/resolvers/yup";
import { Save, SaveAs } from "@mui/icons-material";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ManufacturerApi from "../../../api/ManufacturerApi";
import { useParams, useNavigate } from "react-router-dom";
//Schema validation
const schema = yup.object().shape({
  manufacturerName: yup.string().required("This field is required"),
});

const EditManufacturer = () => {
  const [openToast, setOpenToast] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [manufacturers, setManufacturers] = useState();
  const [manufacturer, setManufacturer] = useState();
  let redirect = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    ManufacturerApi.getAll()
      .then((res) => {
        setManufacturers(res);
        console.log(manufacturer);
      })
      .catch((err) => console.log(err));
    ManufacturerApi.getById(id)
      .then((res) => {
        setManufacturer(res);
        console.log(manufacturer);
      })
      .catch((err) => console.log(err));
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //handle TOAST
  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  const onSubmit = (data) => {
    if (manufacturers.find((x) => x.name === data.manufacturerName)) {
      if (manufacturer.name === data.manufacturerName) {
        alert("Không có gì thay đổi!");
      } else alert("Tên bạn nhập đã tồn tại!");
    } else {
      const dataSubmit = {
        name: data.manufacturerName,
      };
      console.log(dataSubmit);
      setOpenBackdrop(true);
      ManufacturerApi.put(id, dataSubmit)
        .then((res) => {
          console.log("Edit successfully", res);
          const path = "/admin/manufacturers";
          setTimeout(() => redirect(path), 2000);
        })
        .catch((err) => console.log("Manufacturer :", err))
        .finally(() => {
          setOpenToast(true);
          setOpenBackdrop(false);
        });
    }
  };
  //Add children "null" to options

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={() => setOpenBackdrop(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form onSubmit={handleSubmit(onSubmit)} className="create-form">
        <Snackbar
          open={openToast}
          autoHideDuration={4000}
          onClose={handleCloseToast}
        >
          <Alert
            onClose={handleCloseToast}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Edited manufacturer successfully!
          </Alert>
        </Snackbar>
        <div className="create-form-heading">
          <h3>Edit</h3>
          <div className="create-form-heading-controls">
            <Button variant="contained" startIcon={<Save />} type="submit">
              Save
            </Button>
            <Button variant="contained" startIcon={<SaveAs />} color="success">
              Save and Continue
            </Button>
          </div>
        </div>
        <div className="form-main">
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="manufacturerName">
                Manufacturer Name
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                placeholder="Manufacturer name"
                className="form-control"
                {...register("manufacturerName")}
                id="manufacturerName"
                defaultValue={manufacturer?.name}
              />
              {/*username input */}
              {errors.manufacturerName && (
                <p className="error">{errors.manufacturerName.message}</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditManufacturer;
