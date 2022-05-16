import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Skeleton } from "@mui/material";
import { Save } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

//Schema validation
const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phoneNumber: yup.string().required("This field is required"),
  birthday: yup.string().required("This field is required"),
});
const Profile = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [avatar, setAvatar] = useState();
  console.log("local storage: ", localStorage.getItem("loginData"));
  // localStorage.getItem("loginData") != undefined
  // ? JSON.parse(localStorage.getItem("loginData"))?.imageUrl
  // : null
  //Change avatar
  const handleAvatarChange = (e) => {
    // console.log(e);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      const filesArray = Array.from(e.target.files);
      console.log(filesArray);
      // setDataSubmit({
      //   ...dataSubmit,
      //   images: filesArray,
      // });
      setAvatar(fileArray);
      // Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  //Onsubmit
  const onSubmit = (data) => {
    console.log(data);
    var formData = new FormData();

    //append all data submit to form data
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("sex", data.sex);
    formData.append("birthday", data.birthday);

    if (data.avatar) formData.append("images", data.avatar[0]);
    //Start fetch post
    console.log("fetching post");
    const addProduct = (data) => {
      try {
        axios.post(process.env.REACT_APP_API_URL + "/account", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        });
      } catch (error) {
        console.log("Failed to fetch: ", error);
      }
    };
    addProduct(formData)
      .then((res) => console.log("Saved successfully", res))
      .finally(
        toast.success("Saved successfully!", {
          position: "bottom-left",
        })
      );
    // const dataSubmit = {
    //   name: data.categoryName,
    //   parentId: data.parentId?.value,
    // };
    // console.log(dataSubmit);
    // setOpenBackdrop(true);
    // CategoryApi.post(dataSubmit)
    //   .then((res) => console.log("Add successfully"))
    //   .catch((err) => console.log("Category :", err))
    //   .finally(() => {
    //     toast.success("Added category successfully", {
    //       position: "bottom-left",
    //     });
    //     setOpenBackdrop(false);
    //   });
  };

  return (
    <>
      <ToastContainer />
      <form className="user-form row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-8">
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="name">
                Name
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                placeholder="Name"
                className="form-control"
                {...register("name")}
                id="name"
              />
              {/*username input */}
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="email">
                Email
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                placeholder="Email"
                className="form-control"
                {...register("email")}
                id="email"
              />
              {/*email input */}
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="phoneNumber">
                Phone Number
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                placeholder="Phone number"
                className="form-control"
                {...register("phoneNumber")}
                id="phoneNumber"
              />
              {/*phoneNumber input */}
              {errors.phoneNumber && (
                <p className="error">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="sex">
                Giới tính
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <div className="sex-input">
                <input
                  {...register("sex")}
                  id="male"
                  value="male"
                  type="radio"
                  name="sex"
                />
                <label htmlFor="male">Nam</label>
                <input
                  {...register("sex")}
                  id="female"
                  value="female"
                  type="radio"
                  name="sex"
                />
                <label htmlFor="female">Nữ</label>
                <input
                  {...register("sex")}
                  id="other"
                  value="other"
                  type="radio"
                  name="sex"
                />
                <label htmlFor="other">Khác</label>
              </div>
              {/*sex input */}
              {errors.sex && <p className="error">{errors.sex.message}</p>}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3 label">
              <label htmlFor="birthday">
                Birthday
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-9">
              <input
                className="form-control"
                {...register("birthday")}
                id="birthday"
                type="date"
              />
              {/*birthday input */}
              {errors.birthday && (
                <p className="error">{errors.birthday.message}</p>
              )}
            </div>
          </div>
          <div className="from-group row">
            <div className="col-3"></div>
            <div className="col-9">
              <Button
                style={{ marginLeft: "4px" }}
                variant="contained"
                startIcon={<Save />}
                type="submit"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="col-4 user-avatar">
          <div className="user-avatar-container">
            <img
              src={avatar || "/images/avatar-anonymous-300x300.png"}
              alt=""
              className="user-avatar-img"
            />
            {/* <Skeleton variant="circular" width={40} height={40} /> */}
            <input
              onChange={(e) => handleAvatarChange(e)}
              {...register("avatar")}
              accept="image/*"
              type="file"
              id="avatar"
              style={{ display: "none" }}
            />
            <label htmlFor="avatar" className="label-avatar">
              Chọn Ảnh
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
