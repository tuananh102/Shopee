import { Add, Delete, Remove } from "@mui/icons-material";
import { Checkbox, Icon } from "@mui/material";
import * as React from "react";
import NumberFormat from "react-number-format";
import "../scss/components/Home/Cart.scss";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const [quantity, setQuantity] = React.useState(1);

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

  return (
    <div className="grid wide">
      <table className="cart-table">
        <thead>
          <tr>
            <th>
              <Checkbox />
            </th>
            <th>Sản phẩm</th>
            <th>Đơn giá</th>
            <th className="text-align-center">Số lượng</th>
            <th>Số tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <Checkbox />
            </th>
            <td>
              <div className="cart-item">
                <img
                  src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_960_720.jpg"
                  alt=""
                  className="cart-item-img"
                />
                <h3 className="cart-item-name">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellat reiciendis in, pariatur aut neque recusandae beatae,
                  voluptatum eveniet sunt quos praesentium eos earum odit. Alias
                  ut libero voluptatibus illo facere.
                </h3>
              </div>
            </td>
            <td>
              <span className="cart-item-price">
                <NumberFormat
                  value={34900000}
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
              <span className="cart-item-price">
                <NumberFormat
                  value={34900000 * quantity}
                  suffix=" ₫"
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={0}
                />
              </span>
            </td>
            <td>
              <button className="cart-item-remove">
                <Delete />
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
