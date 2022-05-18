import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Skeleton } from "@mui/material";
import { Save } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

//Schema validation
const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phoneNumber: yup.string().required("This field is required"),
  birthday: yup.string().required("This field is required"),
  image: yup.string().required("This field is required"),
});
const Profile = () => {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const userRedux = useSelector((state) => state.user);
  let birthday = new Date(userRedux.user.birthday);
  birthday = `${birthday.getFullYear()}-${birthday.getMonth() < 8 ? "0" : ""}${
    birthday.getMonth() + 1
  }-${birthday.getDate()}`;
  console.log("birthday: ", birthday);
  const [avatar, setAvatar] = useState();
  const user = JSON.parse(localStorage.getItem("loginData"));
  const handleAvatarChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      const filesArray = Array.from(e.target.files);
      setValue("image", filesArray);
      setAvatar(fileArray);
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

    if (data.image) formData.append("image", data.image[0]);
    //Start fetch post
    console.log("fetching post");
    const addProduct = (data) => {
      try {
        axios
          .put(`/account/${userRedux.user.email}`, data, {
            headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            },
          })
          .then(() =>
            toast.success("Lưu thông tin thành công!", {
              position: "bottom-left",
            })
          );
      } catch (error) {
        console.log("Failed to fetch: ", error);
      }
    };
    addProduct(formData);
  };

  return (
    <>
      <ToastContainer />
      {userRedux && (
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
                  defaultValue={userRedux.user.name}
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
                  defaultValue={userRedux.user.email}
                  id="email"
                />
                {/*email input */}
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
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
                  defaultValue={userRedux.user.phoneNumber}
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
                    defaultChecked={userRedux.user.sex === "male"}
                  />
                  <label htmlFor="male">Nam</label>
                  <input
                    {...register("sex")}
                    id="female"
                    value="female"
                    type="radio"
                    name="sex"
                    defaultChecked={userRedux.user.sex === "female"}
                  />
                  <label htmlFor="female">Nữ</label>
                  <input
                    {...register("sex")}
                    id="other"
                    value="other"
                    type="radio"
                    name="sex"
                    defaultChecked={userRedux.user.sex === "other"}
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
                  defaultValue={birthday}
                  id="birthday"
                  type="date"
                  // max={new Date().toISOString()}
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
                src={
                  avatar ||
                  userRedux.user.image ||
                  "/images/avatar-anonymous-300x300.png"
                }
                alt=""
                className="user-avatar-img"
              />
              {/* <Skeleton variant="circular" width={40} height={40} /> */}
              <input
                {...register("image")}
                onChange={(e) => handleAvatarChange(e)}
                accept="image/*"
                type="file"
                id="avatar"
                style={{ display: "none" }}
              />
              <label htmlFor="avatar" className="label-avatar">
                Chọn Ảnh
              </label>
              {errors.image && <p className="error">{errors.image.message}</p>}
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Profile;
