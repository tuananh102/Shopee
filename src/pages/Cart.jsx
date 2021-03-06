import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { removeToCart } from "../services/actions/cart";
import CartItem from "../components/Cart/CartItem";
import ConfirmOrder from "../components/Cart/ConfirmOrder";
import "../scss/components/Home/Cart.scss";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

const selectCart = (state) => state.cart;

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartRaw = useSelector(selectCart);
  const [cart, setCart] = useState(cartRaw.cartItems);
  const [checkAll, setCheckAll] = useState(false);
  const dispatch = useDispatch();
  const [dataSubmit, setDataSubmit] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSuccess, setIsSuccess] = useState({
    success: false,
    user: "",
  });

  useEffect(() => {
    console.log("Is success", isSuccess);
  }, [isSuccess]);

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
    <div className="grid wide">
      <ToastContainer />
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>{""}</th>
              <th>S???n ph???m</th>
              <th>????n gi??</th>
              <th className="text-align-center">S??? l?????ng</th>
              <th>S??? ti???n</th>
              <th>Thao t??c</th>
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
          <div className="no-cart">Kh??ng c?? s???n ph???m n??o trong gi??? h??ng</div>
        )}
        <div className="cart-purchase">
          {/* <FormControlLabel
          control={<Checkbox onChange={(e) => setCheckAll(e.target.checked)} />}
          label="Ch???n t???t c???"
        />
        <button className="cart-item-remove">X??a</button> */}

          <span>T???ng thanh to??n ({dataSubmit.length} s???n ph???m ):</span>
          <span className="total-price">
            <NumberFormat
              value={totalPrice}
              suffix=" ???"
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={0}
            />
          </span>
          <button
            onClick={() => {
              if (totalPrice !== 0) {
                setIsCheckout(true);
                window.scrollTo(0, 450);
              }
            }}
            className="btn btn--primary purchase"
          >
            Mua h??ng
          </button>
        </div>
      </div>
      {isCheckout && (
        <Checkout
          setIsSuccess={setIsSuccess}
          setIsCheckout={setIsCheckout}
          totalPrice={totalPrice}
          products={dataSubmit}
        />
      )}
      {isSuccess.success && (
        <ConfirmOrder
          isSuccess={isSuccess}
          data={dataSubmit}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
}
