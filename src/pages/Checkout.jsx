import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import * as yup from "yup";
//Schema validation
const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  // password: yup.string().required("This field is required"),
  // passwordConfirmation: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function Checkout() {
  const {
    register,
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [city, setCity] = useState();
  const [activeCity, setActiveCity] = useState();
  const [districts, setDistrists] = useState();
  useEffect(() => {
    axios
      .get(`https://provinces.open-api.vn/api/?depth=3`)
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (activeCity) {
      var data = city.filter((c) => c.code === activeCity);
      console.log("districts :", data);
      setDistrists(data);
    }
  }, [activeCity]);

  const onSubmit = (data) => {
    console.log("Active city: ", activeCity);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Checkout</h1>
      <div className="deliver">
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
          <h2 className="inner-heading form-group col">
            1. Thông tin người nhận
          </h2>
          <div className="form-group row">
            <div className="col-4 label">
              <label htmlFor="name">
                Họ tên
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-4">
              <input
                placeholder="Name"
                className="form-control"
                {...register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-4 label">
              <label htmlFor="phoneNumber">
                Số điện thoại
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-4">
              <input
                placeholder="Phone Number"
                className="form-control"
                type="tel"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="error">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-4 label">
              <label htmlFor="email">
                Email
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-4">
              <input
                placeholder="Email"
                className="form-control"
                type="email"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>
          <h2 className="inner-heading form-group col">
            2. Thông tin nhận hàng
          </h2>
          <div className="form-group row">
            <div className="col-4 label">
              <label htmlFor="city">
                Tỉnh/Thành phố
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-4">
              <Controller
                name="city"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={(e) => {
                      setValue("city", e.value);
                      setActiveCity(e.value);
                    }}
                    // defaultValue={city[0]}
                    // selected={value}
                    options={city?.map((item) => ({
                      ...item,
                      value: item.code,
                      label: item.name,
                    }))}
                  />
                )}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-4 label">
              <label htmlFor="district">
                Quận/Huyện
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-4">
              <Controller
                name="district"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={(e) => {
                      setValue("district", e.value);
                    }}
                    // defaultValue={district[0]}
                    // selected={value}

                    options={districts.districts?.map((item) => ({
                      ...item,
                      value: item.code,
                      label: item.name,
                    }))}
                  />
                )}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit">{"Sign Up"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
