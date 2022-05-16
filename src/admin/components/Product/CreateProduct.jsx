import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Save, SaveAs } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import ManufacturerApi from "../../../api/ManufacturerApi";
import { ToastContainer, toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import productApi from "../../../api/productApi";
import CategoryApi from "../../../api/CategoryApi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//Schema validation
const schema = yup.object().shape({
  productName: yup.string().required("This field is required"),
  shortDescription: yup.string().required("This field is required"),
  manufacturerId: yup.number().required("This field is required"),
  category: yup.array().required("This field is required"),
  price: yup
    .number()
    .typeError("Amount must be a number")
    .moreThan(0, "Price is greater than zero")
    .required("This field is required"),
  salePrice: yup
    .number()
    .strip()
    .default(0)
    .lessThan(yup.ref("price"), "Sale price shoule be less than price")
    .notRequired(),
  images: yup.mixed().required("This field is required"),
});
export default function CreateProduct() {
  const {
    register,
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
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
  const refChooseImage = useRef();
  // console.log("datasubmit", dataSubmit);

  //Handle reset
  function handleReset() {
    reset({ productName: "" });
  }
  const [dataSubmit, setDataSubmit] = useState({
    fullDescription: "",
  });
  //CKEditor
  const handleCkeditor = (event, editor) => {
    const data = editor.getData();
    setDataSubmit({ ...dataSubmit, fullDescription: data });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      const filesArray = Array.from(e.target.files);
      console.log(filesArray);
      // setError({ images: "" });
      // setDataSubmit({
      //   ...dataSubmit,
      //   images: filesArray,
      // });
      setValue("images", filesArray);
      setSelectedFile((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  //Handle clear Images
  const handleClearImages = () => {
    setSelectedFile([]);
    refChooseImage.current.value = "";
  };
  const onSubmit = (data) => {
    console.log("Data submit: ", data);
    const dataToSend = {
      name: data.productName,
      shortDescription: data.shortDescription,
      fullDescription: data.fullDescription,
      category: data.category,
      manufacturerId: data.manufacturerId,
      published: data.published,
      price: data.price,
      salePrice: data.salePrice,
      stockQuantity: data.stockQuantity,
      images: data.images,
    };
    console.log("dataToSend hook form: ", dataToSend);
    var formData = new FormData();

    //append all data submit to form data
    formData.append("name", dataToSend.name);
    formData.append("shortDescription", dataToSend.shortDescription);
    formData.append("fullDescription", dataToSend.fullDescription);
    for (var i = 0; i < dataToSend.category.length; i++) {
      formData.append("category", dataToSend.category[i].value);
    }
    formData.append("published", dataToSend.published);
    formData.append("price", dataToSend.price);
    if (dataToSend.salePrice)
      formData.append("salePrice", dataToSend.salePrice);
    formData.append("manufacturerId", dataToSend.manufacturerId);
    formData.append("stockQuantity", dataToSend.stockQuantity);

    for (const key of Object.keys(dataToSend.images)) {
      formData.append("images", dataToSend.images[key]);
    }
    setOpenBackdrop(true);
    //Start fetching post
    console.log("fetching post");
    const addProduct = async (data) => {
      try {
        await axios
          .post("/product", data, {
            headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            },
          })
          .then((res) => {
            console.log("Add successfully", res);
            handleReset();
          });
      } catch (error) {
        console.log("Failed to add a product: ", error);
      }
    };
    addProduct(formData).then(
      toast.success("Added product successfully!", {
        position: "bottom-left",
      })
    );
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="create-product">
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
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
              type="submit"
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
              <label htmlFor="name">
                Product Name
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                placeholder="Product name"
                className="form-control"
                {...register("productName")}
              />
              {errors.productName && (
                <p className="error">{errors.productName.message}</p>
              )}
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
                {...register("shortDescription")}
                placeholder="Short description"
                className="form-control col-9"
                rows={4}
                cols={25}
                id="shortDescription"
              />
              {errors.shortDescription && (
                <p className="error">{errors.shortDescription.message}</p>
              )}
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
                onChange={(e, editor) =>
                  setValue("fullDescription", editor.getData())
                }
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
              <Controller
                name="manufacturerId"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={(e) => setValue("manufacturerId", e.value)}
                    defaultValue={manufacturer[0]}
                    // selected={value}
                    options={manufacturer}
                  />
                )}
              />
              {errors.manufacturer && (
                <p className="error">{errors.manufacturer.message}</p>
              )}
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
              <Controller
                name="category"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={(e) => {
                      // console.log("Select:", e);
                      setValue("category", e);
                    }}
                    // defaultValue={category[0]}
                    isMulti={true}
                    // selected={value}
                    options={category}
                  />
                )}
              />
              {errors.category && (
                <p className="error">{errors.category.messgae}</p>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="image" className="col-3 label">
              Image
            </label>
            <div className="col-9">
              <input
                multiple
                {...register("images")}
                onChange={handleImageChange}
                type="file"
                id="image"
                accept="image/*"
                ref={refChooseImage}
              />
              {errors.images && (
                <p className="error">{errors.images.message}</p>
              )}

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
              {/* {dataSubmit.images && (
                <Button variant="outlined" onClick={handleClearImages}>
                  Clear
                </Button>
              )} */}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="published" className="col-3 label">
              Published
            </label>
            <div className="col-9">
              <input
                {...register("published")}
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
                {...register("price")}
              />
              {errors.price && <p className="error">{errors.price.message}</p>}
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
                defaultValue={0}
                className="form-control w-50"
                placeholder="15000 VND"
                id="salePrice"
                {...register("salePrice")}
              />
              {errors.salePrice && (
                <p className="error">{errors.salePrice.message}</p>
              )}
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
                {...register("stockQuantity")}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
