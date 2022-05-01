import React, { useEffect, useRef, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button } from "@mui/material";
import { Save, SaveAs } from "@mui/icons-material";
import Select from "react-select";
import productApi from "../../../api/productApi";
import axios from "axios";
import CategoryApi from "../../../api/CategoryApi";
import ManufacturerApi from "../../../api/ManufacturerApi";
import { ToastContainer, toast } from "react-toastify";
export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState({
    //declare error
    productName: "",
    shortDescription: "",
    price: "",
    category: "",
    manufacturers: "",
    images: "",
  });
  const [selectedFile, setSelectedFile] = useState([]);
  // console.log("error", error);
  const [dataSubmit, setDataSubmit] = React.useState({
    productName: "",
    shortDescription: "",
    fullDescription: "Full",
    category: [],
    manufacturerId: 1,
    published: false,
    price: null,
    salePrice: null,
    stockQuantity: 1,
    images: null,
  });
  const [category, setCategory] = useState([
    {
      value: "",
      label: "",
    },
  ]);
  const [manufacturer, setManufacturer] = useState([
    {
      value: "",
      label: "",
    },
  ]);
  useEffect(() => {
    CategoryApi.getAll()
      .then((res) => {
        setCategory(
          res.map((item) => ({
            ...item,
            value: item.id,
            label: item.name,
          }))
        );
        console.log(res);
      })
      .catch((err) => console.log(err));
    productApi
      .getById(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    ManufacturerApi.getAll()
      .then((res) => {
        setManufacturer(
          res.map((item) => ({
            ...item,
            value: item.id,
            label: item.name,
          }))
        );
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(category);
  // if (category) {
  //   category.map((data) =>
  //     optionCategory.push({ value: data.id, label: data.name })
  //   );
  //   console.log(optionCategory);
  // }
  const refChooseImage = useRef();
  console.log("datasubmit", dataSubmit);

  //Handle change input general

  const handleChange = (e) => {
    if (e.target.value) setError({ ...error, [e.target.id]: "" });
    setDataSubmit({
      ...dataSubmit,
      [e.target.id]: e.target.value,
    });
  };
  //Validate
  function Validate(dataSubmit) {
    let productName = "";
    let shortDescription = "";
    let price = "";
    let category = "";
    let manufacturerId = "";
    let images = "";
    if (!dataSubmit.productName) productName = "Please provide a name";
    if (!dataSubmit.shortDescription)
      shortDescription = "This field is required";
    if (!dataSubmit.price) price = "This field is required";
    if (dataSubmit.category === "") category = "This field is required";
    if (!dataSubmit.manufacturerId) manufacturerId = "This field is required";
    if (!dataSubmit.images) images = "This field is required";
    if (
      productName ||
      shortDescription ||
      price ||
      category ||
      manufacturerId ||
      images
    ) {
      setError({
        productName: productName,
        shortDescription: shortDescription,
        price: price,
        category: category,
        manufacturer: manufacturer,
        images: images,
      });
      return false;
    }
    return true;
  }

  //Submit form
  function handleSubmit(e) {
    console.log(Validate(dataSubmit));

    // console.log(formData);
    if (Validate(dataSubmit)) {
      var formData = new FormData();

      //append all data submit to form data
      formData.append("name", dataSubmit.productName);
      formData.append("shortDescription", dataSubmit.shortDescription);
      formData.append("fullDescription", dataSubmit.fullDescription);
      for (var i = 0; i < dataSubmit.category.length; i++) {
        formData.append("category", dataSubmit.category[i].value);
      }
      formData.append("published", dataSubmit.published);
      formData.append("price", dataSubmit.price);
      if (dataSubmit.salePrice)
        formData.append("salePrice", dataSubmit.salePrice);
      formData.append("manufacturerId", dataSubmit.manufacturerId);
      formData.append("stockQuantity", dataSubmit.stockQuantity);

      for (const key of Object.keys(dataSubmit.images)) {
        formData.append("images", dataSubmit.images[key]);
      }
      //Start fetch post
      console.log("fetching post");
      const addProduct = async (data) => {
        try {
          await axios.post(process.env.REACT_APP_API_URL + "/product", data, {
            headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            },
          });
        } catch (error) {
          console.log("Failed to add a product: ", error);
        }
      };
      addProduct(formData).finally(
        toast.success("Edited successfully!", { position: "bottom-left" })
      );
    }
  }

  //CKEditor
  const handleCkeditor = (event, editor) => {
    const data = editor.getData();
    setDataSubmit({ ...dataSubmit, fullDescription: data });
  };

  //Handle Image change
  console.log("selectedFile", selectedFile);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      const filesArray = Array.from(e.target.files);
      console.log(filesArray);
      setError({ images: "" });
      setDataSubmit({
        ...dataSubmit,
        images: filesArray,
      });
      setSelectedFile((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  //Handle clear Images
  const handleClearImages = () => {
    setSelectedFile([]);
    refChooseImage.current.value = "";
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="create-product">
      <ToastContainer />
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
              color="success"
            >
              Save
            </Button>
          </div>
        </div>
        <div className="form-main">
          {/* <h2 className="form-main-heading">Product Info</h2> */}

          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="name">
                Product Name
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                placeholder="Product name"
                className="form-control"
                id="productName"
                defaultValue={product?.name}
                onChange={(e) => handleChange(e)}
              />
              <p className="error">{error.productName}</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="shortDescription">
                Short description<span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <textarea
                onChange={(e) => handleChange(e)}
                placeholder="Short description"
                className="form-control col-9"
                defaultValue={product?.shortDescription}
                rows={4}
                cols={25}
                id="shortDescription"
              />
              <p className="error">{error.shortDescription}</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label>Full description</label>
            </div>
            <div className="col-9" id="ckeditor">
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => {
                  editor.setData(product.fullDescription);
                }}
                onChange={handleCkeditor}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="manufacturer">
                Manufacturers
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <Select
                options={manufacturer}
                defaultValue={product?.manufacturerId}
                id="manufacturer"
                onChange={(event) => {
                  setDataSubmit({ ...dataSubmit, manufacturerId: event.value });
                }}
              />
              <p className="error">{error.manufacturer}</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="category">
                Category
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <Select
                options={category}
                isMulti
                defaultValue={product?.category}
                onChange={(e) => {
                  if (e.length > 0) setError({ ...error, category: "" });
                  setDataSubmit({ ...dataSubmit, category: e });
                }}
                onSubmit={(event) => console.log(event)}
              />

              <p className="error">{error.category}</p>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="image" className="col-3 label">
              Image
            </label>
            <div className="col-9">
              <input
                multiple
                onChange={handleImageChange}
                type="file"
                id="image"
                accept="image/*"
                ref={refChooseImage}
              />
              <p className="error">{error.images}</p>

              {selectedFile.length !== 0 && (
                <div className="preview-image">
                  <h3 className="preview"> Selected:</h3>
                  <ul className="image-list">
                    {selectedFile.map((image, index) => (
                      <li className="image-list-item" key={index}>
                        <img src={image} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {dataSubmit.images && (
                <Button variant="outlined" onClick={handleClearImages}>
                  Clear
                </Button>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="published" className="col-3 label">
              Published
            </label>
            <div className="col-9">
              <input
                defaultChecked={product?.isPublished}
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
              <span className="error">&nbsp;*</span>
            </label>
            <div className="col-9">
              <input
                type="number"
                min={0}
                className="form-control w-50"
                placeholder="15000 VND"
                id="price"
                defaultValue={product?.price}
                onChange={(e) => handleChange(e)}
              />
              <p className="error">{error.price}</p>
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
                defaultValue={product?.salePrice}
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
                defaultValue={product?.stockQuantity}
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
