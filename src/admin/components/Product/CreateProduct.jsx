import React, { useRef, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button } from "@mui/material";
import { Save, SaveAs } from "@mui/icons-material";
import Select from "react-select";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//declare schema
let schema = yup.object().shape({
  productName: yup.string().required(),
  shortDescription: yup.string().required(),
  fullDescription: yup.string().required(),
  category: yup.object().required(),
  manufacturers: yup.object().required(),
  published: false,
  price: yup.number().required("heehee"),
  salePrice: null,
  stockQuantity: null,
});

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const optionsManufacturers = [
  { value: "Apple", label: "Apple" },
  { value: "Samsung", label: "Samsung" },
  { value: "Oppo", label: "Oppo" },
];

export default function CreateProduct() {
  const { register } = useForm({ resolver: yupResolver(schema) });

  const [error, setError] = useState({
    //declare error
    nameError: "",
    shortDescriptionError: "",
    priceError: "",
    categoryError: "",
  });
  console.log("error", error);
  const [dataSubmit, setDataSubmit] = React.useState([
    {
      productName: "",
      shortDescription: "",
      fullDescription: "",
      category: [],
      manufacturers: [],
      published: false,
      price: null,
      salePrice: null,
      stockQuantity: null,
    },
  ]);
  console.log("datasubmit", dataSubmit);

  //Handle change input general

  const handleChange = (e) => {
    if (e.target.value) setError(...error, { nameError: "" });
    setDataSubmit({
      ...dataSubmit,
      [e.target.id]: e.target.value,
    });
  };
  //Validate
  function Validate(dataSubmit) {
    let nameError = "",
      shortDescriptionError = "";
    let priceError = "";
    let categoryError = "";
    if (!dataSubmit.productName) nameError = "Please provide a name";
    if (!dataSubmit.shortDescription)
      shortDescriptionError = "This field is required";
    if (!dataSubmit.price) priceError = "This field is required";
    if (!dataSubmit.category) categoryError = "This field is required";
    if (nameError || shortDescriptionError || priceError || categoryError) {
      setError({
        nameError: nameError,
        shortDescriptionError: shortDescriptionError,
        priceError: priceError,
        categoryError: categoryError,
      });
      return false;
    }
    return true;
  }

  //Submit form
  function handleSubmit() {
    console.log(Validate(dataSubmit));
    if (Validate(dataSubmit)) {
      console.log("fetching post");
      axios.post("product", dataSubmit).then((data) => console.log(data));
    }
  }

  //CKEditor
  const handleCkeditor = (event, editor) => {
    const data = editor.getData();
    setDataSubmit({ ...dataSubmit, fullDescription: data });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="create-product">
      <form
        // ref={multiRef}
        className="create-form"
      >
        <div className="create-product-heading">
          <h3>Create Product</h3>
          <div className="control">
            <Button
              variant="contained"
              style={{ marginRight: "16px" }}
              startIcon={<Save />}
              type="button"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button variant="contained" startIcon={<SaveAs />} color="neutral">
              Save and Continue Edit
            </Button>
          </div>
        </div>
        <div className="form-main">
          {/* <h2 className="form-main-heading">Product Info</h2> */}

          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="name">Product Name</label>
            </div>
            <div className="col-9">
              <input
                {...register("productName")}
                placeholder="Product name"
                className="form-control"
                id="producName"
                onChange={(e) => handleChange(e)}
              />
              {error.nameError && (
                <p className="text-danger ">Please provide a name.</p>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="shortDescription">Short description</label>
            </div>
            <div className="col-9">
              <textarea
                onChange={(e) => handleChange(e)}
                placeholder="Short description"
                className="form-control col-9"
                rows={4}
                cols={25}
                id="shortDescription"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label>Full description</label>
            </div>
            <div className="col-9">
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={handleCkeditor}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="category">Category</label>
            </div>
            <div className="col-9">
              <Select
                options={options}
                isMulti
                onChange={(event) => {
                  setDataSubmit({ ...dataSubmit, category: event });
                }}
                onSubmit={(event) => console.log(event)}
              />
              {error.categoryError && (
                <p className="error">{error.categoryError}</p>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="manufacturers">Manufacturers</label>
            </div>
            <div className="col-9">
              <Select
                options={optionsManufacturers}
                isMulti
                id="manufacturers"
                onChange={(event) => {
                  setDataSubmit({ ...dataSubmit, manufacturers: event });
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="published" className="col-3 label">
              Published
            </label>
            <div className="col-9">
              <input
                onChange={(e) =>
                  setDataSubmit({
                    ...dataSubmit,
                    [e.target.id]: e.target.checked,
                  })
                }
                type="checkbox"
                id="published"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="col-3 label">
              Price
            </label>
            <div className="col-9">
              <input
                type="number"
                min={0}
                className="form-control w-50"
                placeholder="15000 VND"
                id="price"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="salePrice" className="col-3 label">
              Sale Price
            </label>
            <div className="col-9">
              <input
                type="number"
                min={0}
                className="form-control w-50"
                placeholder="15000 VND"
                id="salePrice"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="stockQuantity" className="col-3 label">
              Stock Quantity
            </label>
            <div className="col-9">
              <input
                type="number"
                min={0}
                className="form-control w-50"
                placeholder="1"
                defaultValue={1}
                id="stockQuantity"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
