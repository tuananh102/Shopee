import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import * as yup from "yup";
//Schema validation

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên người nhận"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Số điện thoại không đúng")
    .typeError()
    .required("Vui lòng nhập số điện thoại"),

  email: yup.string().email().required("Vui lòng nhập email"),
  address: yup.string().required("Vui lòng nhập địa chỉ nhận hàng"),
  city: yup.mixed().required("Vui lòng chọn Tỉnh/Thành phố "),
  district: yup.mixed().required("Vui lòng chọn Quận/Huyện"),
  ward: yup.mixed().required("Vui lòng chọn Phường/Xã"),
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
  const [activeDistrict, setActiveDistrict] = useState();
  const [districts, setDistrists] = useState();
  const [wards, setWards] = useState();
  useEffect(() => {
    axios
      .get(`https://provinces.open-api.vn/api/?depth=3`)
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (activeCity) {
      var data = city.filter((c) => c.code === activeCity);
      const districtsByCode = data[0].districts;
      // console.log("District got: ", districtsByCode);
      setDistrists(districtsByCode || []);
    }
  }, [activeCity]);
  useEffect(() => {
    if (activeDistrict) {
      var data = districts.filter((c) => c.code === activeDistrict);
      const wardsByCode = data[0].wards;
      // console.log("Wards got: ", wardsByCode);
      setWards(wardsByCode || []);
    }
  }, [activeDistrict]);
  const onSubmit = (data) => {
    console.log("data prepare submid: ", data);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Checkout</h1>
      <div className="deliver">
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
          <h2 className="inner-heading form-group col">
            1. Thông tin người nhận
          </h2>
          {/* Họ tên */}
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
          {/* Sđt */}
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
          {/* Email */}
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
          {/* Thông tin nhận hàng */}
          <h2 className="inner-heading form-group col">
            2. Thông tin nhận hàng
          </h2>
          {/* Tỉnh/Thành phố */}
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
                      setValue("city", e.label);
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
              {errors.city && <p className="error">{errors.city.message}</p>}
            </div>
          </div>
          {/* Quận huyện */}
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
                      setValue("district", e.label);
                      setActiveDistrict(e.value);
                    }}
                    // defaultValue={districts[0]}
                    // selected={value}
                    options={districts?.map((item) => ({
                      ...item,
                      value: item.code,
                      label: item.name,
                    }))}
                  />
                )}
              />
              {errors.district && (
                <p className="error">{errors.district.message}</p>
              )}
            </div>
          </div>
          {/* Phường/Xã */}
          <div className="form-group row">
            <div className="col-4 label">
              <label htmlFor="ward">
                Phường/Xã
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-4">
              <Controller
                name="ward"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    onChange={(e) => {
                      setValue("ward", e.label);
                      // setActiveDistrict(e.value);
                    }}
                    // defaultValue={wards[0]}
                    // selected={value}
                    options={wards?.map((item) => ({
                      ...item,
                      value: item.code,
                      label: item.name,
                    }))}
                  />
                )}
              />
              {errors.ward && <p className="error">{errors.ward.message}</p>}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-4 label">
              <label htmlFor="address">
                Địa chỉ cụ thể
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-4">
              <input
                placeholder="Số nhà, ngõ, tên đường..."
                className="form-control"
                type="address"
                {...register("address")}
              />
              {errors.address && (
                <p className="error">{errors.address.message}</p>
              )}
            </div>
          </div>
          {/* Phương thức thanh toán */}
          <h2 className="inner-heading form-group">
            3. Phương thức thanh toán
          </h2>
          {/* Họ tên */}
          <div className="form-group row">
            <div className="col-6 label">
              <label htmlFor="name">
                Họ tên
                <span className="error">&nbsp;*</span>
              </label>
            </div>
            <div className="col-6">
              <input
                placeholder="Name"
                className="form-control"
                {...register("name")}
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
