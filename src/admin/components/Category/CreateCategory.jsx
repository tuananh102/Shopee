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
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import CategoryApi from "../../../api/CategoryApi";

//Schema validation
const schema = yup.object().shape({
  categoryName: yup.string().required("This field is required"),
});

const CreateCategory = () => {
  const [openToast, setOpenToast] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [category, setCategory] = useState();
  // category initial
  //Declare options
  let options = [{ value: null, label: "Null" }];
  useEffect(() => {
    CategoryApi.getAll()
      .then((res) => {
        setCategory(res);
      })
      .catch((err) => console.log(err));
  }, []);
  if (category) {
    category.map((data) => options.push({ value: data.id, label: data.name }));
  }
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
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
    const dataSubmit = {
      name: data.categoryName,
      parentId: data.parentId?.value,
    };
    setOpenBackdrop(true);
    CategoryApi.post(dataSubmit)
      .then((res) => {
        console.log("Add successfully", res);
        handleReset();
      })
      .catch((err) => console.log("Category :", err))
      .finally(() => {
        toast.success("Added category successfully", {
          position: "bottom-left",
        });
        setOpenBackdrop(false);
      });
  };

  function handleReset() {
    reset({ categoryName: "" });
  }

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
        <ToastContainer />
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
              <label htmlFor="categoryName">
                Category Name
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                placeholder="Category name"
                className="form-control"
                {...register("categoryName")}
                id="categoryName"
              />
              {/*username input */}
              {errors.categoryName && (
                <p className="error">{errors.categoryName.message}</p>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="name">
                Parent Category
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <Controller
                name="parentId"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={onChange}
                    defaultValue={options[0]}
                    // selected={value}
                    options={options}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateCategory;
