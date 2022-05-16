import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { removeToCart } from "../services/actions/cart";
import CartItem from "../components/Cart/CartItem";
import "../scss/components/Home/Cart.scss";

const selectCart = (state) => state.cart;

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartRaw = useSelector(selectCart);
  const [cart, setCart] = useState(cartRaw.cartItems);
  const [checkAll, setCheckAll] = useState(false);
  const dispatch = useDispatch();
  const handleTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };
  console.log("Cart - local:", cartRaw);

  console.log("Total price", totalPrice);
  //Handle delete cart item
  function handleDelete(item) {
    const action = removeToCart(item);
    dispatch(action);
    localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    toast.success("Removed to card successfully!", {
      position: "bottom-left",
    });
  }

  return (
    <div className="grid wide">
      <ToastContainer />
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
                handleTotalPrice={handleTotalPrice}
                handleDelete={handleDelete}
                isCheckAll={checkAll}
              />
            ))}
        </tbody>
      </table>
      {cart.length === 0 && (
        <div className="no-cart">Không có sản phẩm nào trong giỏ hàng</div>
      )}
      <div className="cart-purchase">
        <FormControlLabel
          control={<Checkbox onChange={(e) => setCheckAll(e.target.checked)} />}
          label="Chọn tất cả"
        />
        <button className="cart-item-remove">Xóa</button>

        <span>Tổng thanh toán ({0} sản phẩm ):</span>
        <span className="total-price">
          <NumberFormat
            value={0}
            suffix=" ₫"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
          />
        </span>
        <a href="/#" className="btn btn--primary purchase">
          Mua hàng
        </a>
      </div>
    </div>
  );
}
