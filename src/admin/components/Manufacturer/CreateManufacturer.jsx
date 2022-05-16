import { yupResolver } from "@hookform/resolvers/yup";
import { Save, SaveAs } from "@mui/icons-material";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ManufacturerApi from "../../../api/ManufacturerApi";

//Schema validation
const schema = yup.object().shape({
  manufacturerName: yup.string().required("This field is required"),
});

const CreateManufacturer = () => {
  const [openToast, setOpenToast] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [manufacturer, setManufacturer] = useState();
  const refInput = useRef();

  useEffect(() => {
    ManufacturerApi.getAll()
      .then((res) => {
        setManufacturer(res);
        console.log(manufacturer);
      })
      .catch((err) => console.log(err));
  }, []);
  const {
    register,
    handleSubmit,
    reset,
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
    if (manufacturer.find((x) => x.name === data.manufacturerName)) {
      alert("Tên bạn nhập đã tồn tại!");
    } else {
      const dataSubmit = {
        name: data.manufacturerName,
      };
      console.log(dataSubmit);
      setOpenBackdrop(true);
      ManufacturerApi.post(dataSubmit)
        .then((res) => {
          console.log("Add successfully", res);
          reset({ manufacturerName: "" });
          refInput.current.focus();
        })
        .catch((err) => console.log("Manufacturer :", err))
        .finally(() => {
          setOpenToast(true);
          setOpenBackdrop(false);
        });
    }
  };

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
            Added manufacturer successfully!
          </Alert>
        </Snackbar>
        <div className="create-form-heading">
          <h3>Create</h3>
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
              <label htmlFor="manufacturerName" ref={refInput}>
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

export default CreateManufacturer;
