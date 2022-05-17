import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { removeToCart } from "../../services/actions/cart";

import { Link, Outlet } from "react-router-dom";
import CartItem from "./CartItem";

const selectCart = (state) => state.cart;

export default function CartList() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartRaw = useSelector(selectCart);
  const [cart, setCart] = useState(cartRaw.cartItems);
  const [checkAll, setCheckAll] = useState(false);
  const dispatch = useDispatch();
  const [dataSubmit, setDataSubmit] = useState([]);
  // console.log("Cart - local:", cartRaw);
  // console.log("Total price", totalPrice);

  useEffect(() => {
    function sumAll(dataSubmit) {
      var i;
      var sum = 0;
      for (i = 0; i < dataSubmit.length; i++) {
        sum += dataSubmit[i].item.price * dataSubmit[i].quantity;
      }
      return sum;
    }
    const result = sumAll(dataSubmit);
    setTotalPrice(result);
  }, [dataSubmit]);
  //Handle delete cart item
  function handleDelete(item) {
    const action = removeToCart(item);
    dispatch(action);
    localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    toast.success("Removed to card successfully!", {
      position: "bottom-left",
    });
  }

  //handle Purchase
  function handlePurchaseClick() {
    var user = localStorage.getItem("user");
    console.log("user", user);
    if (user === null) alert("Please login to continue!");
  }
  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>{""}</th>
            <th>Sản phẩm</th>
            <th>Đơn giá</th>
            <th className="text-align-center">Số lượng</th>
            <th>Số tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                isCheckAll={checkAll}
                setDataSubmit={setDataSubmit}
                dataSubmit={dataSubmit}
              />
            ))}
        </tbody>
      </table>
      {cart.length === 0 && (
        <div className="no-cart">Không có sản phẩm nào trong giỏ hàng</div>
      )}
      <div className="cart-purchase">
        {/* <FormControlLabel
          control={<Checkbox onChange={(e) => setCheckAll(e.target.checked)} />}
          label="Chọn tất cả"
        />
        <button className="cart-item-remove">Xóa</button> */}

        <span>Tổng thanh toán ({dataSubmit.length} sản phẩm ):</span>
        <span className="total-price">
          <NumberFormat
            value={totalPrice}
            suffix=" ₫"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
          />
        </span>
        <Link
          to="checkout"
          // onClick={handlePurchaseClick}
          className="btn btn--primary purchase"
        >
          Mua hàng
        </Link>
      </div>
    </div>
  );
}
