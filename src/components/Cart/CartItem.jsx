import { Add, Delete, Remove } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

const CartItem = ({
  item,
  handleDelete,
  isCheckAll,
  setDataSubmit,
  dataSubmit,
}) => {
  const [quantity, setQuantity] = useState(item.cartQuantity);
  const [check, setCheck] = useState(isCheckAll);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    var index = dataSubmit.findIndex((arr) => arr.item.id === item.id);
    if (index !== -1) {
      var arr = [...dataSubmit];
      arr[index].quantity = quantity;
      setDataSubmit(arr);
    }
    setPrice(quantity * item.price);
  }, [quantity]);
  //Handle onchange input quantity
  function handleOnchangeQuantity(e) {
    if (!isNaN(Math.floor(e.target.value))) {
      setQuantity(
        Math.floor(e.target.value) === 0 ? 1 : Math.floor(e.target.value)
      );
    }
    var array = [...dataSubmit]; // make a separate copy of the array
    var index = array.findIndex((arr) => arr.item === item);
    if (index !== -1) {
      array[index].quantity = quantity;
      setDataSubmit(array);
    }
  }

  //Handle decrease quantity
  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  //ChangeCheckbox
  function handleChangeCheckbox(e) {
    setCheck(e.target.checked);
    if (e.target.checked === true) {
      //Checked
      setDataSubmit([...dataSubmit, { quantity: quantity, item: item }]);
    } else {
      var array = [...dataSubmit]; // make a separate copy of the array
      var index = array.findIndex((arr) => arr.item === item);
      if (index !== -1) {
        array.splice(index, 1);
        setDataSubmit(array);
      }
    }
  }

  return (
    <tr>
      <td>
        <Checkbox
          // defaultChecked={isCheckAll}
          // onClick={(e) => handleChangeCheckbox(e)}
          checked={isCheckAll ? isCheckAll : check}
          onChange={(e) => handleChangeCheckbox(e)}
        />
      </td>
      <td>
        <div className="cart-item">
          <img src={item.images[0]} alt="" className="cart-item-img" />
          <h3 className="cart-item-name">{item.name}</h3>
        </div>
      </td>
      <td>
        <span className="cart-item-price">
          <NumberFormat
            value={item.saleprice || item.price}
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
            value={price}
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
