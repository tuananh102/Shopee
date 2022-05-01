import { Add, Delete, Remove } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import NumberFormat from "react-number-format";

const CartItem = ({ item, handleTotalPrice, handleDelete }) => {
  const [quantity, setQuantity] = useState(item.cartQuantity);
  //Handle onchange input quantity
  function handleOnchangeQuantity(e) {
    if (!isNaN(Math.floor(e.target.value))) {
      setQuantity(
        Math.floor(e.target.value) === 0 ? 1 : Math.floor(e.target.value)
      );
    }
  }

  //Handle decrease quantity
  function handleDecrease() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  //ChangeCheckbox
  function handleChangeCheckbox(e) {
    if (e.target.checked === true) {
      //Checked
      handleTotalPrice(quantity * item.price);
    } else console.log("Check false");
  }

  return (
    <tr>
      <td>
        <Checkbox onChange={(e) => handleChangeCheckbox(e)} />
      </td>
      <td>
        <div className="cart-item">
          <img src={item.image} alt="" className="cart-item-img" />
          <h3 className="cart-item-name">{item.name}</h3>
        </div>
      </td>
      <td>
        <span className="cart-item-price">
          <NumberFormat
            value={item.price}
            suffix=" ₫"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
          />
        </span>
      </td>
      <td>
        <div className="cart-item-quantity">
          <button className="quantity-control" onClick={handleDecrease}>
            <Remove />
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => handleOnchangeQuantity(e)}
          />
          <button
            className="quantity-control"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Add />
          </button>
        </div>
      </td>
      <td>
        <span className="cart-item-price total">
          <NumberFormat
            value={item.price * quantity}
            suffix=" ₫"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
          />
        </span>
      </td>
      <td>
        <button className="cart-item-remove" onClick={() => handleDelete(item)}>
          <Delete />
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
