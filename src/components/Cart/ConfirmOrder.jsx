import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const ConfirmOrder = ({ isSuccess, data, totalPrice }) => {
  const [show, setShow] = useState();
  useEffect(() => {
    setShow(isSuccess.success);
  }, [isSuccess.success]);
  return (
    <Modal size="lg" show={show}>
      <Modal.Body>
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button
              type="button"
              className="btn-close"
              onClick={() => setShow(false)}
            />
          </div>
          <div className="modal-body text-start text-black p-4">
            <h5
              className="modal-title text-uppercase mb-5"
              id="exampleModalLabel"
            >
              {isSuccess.user}
            </h5>
            <h4 className="mb-5" style={{ color: "#35558a" }}>
              Thanks for your order
            </h4>
            <p className="mb-0" style={{ color: "#35558a" }}>
              Payment summary
            </p>
            <hr
              className="mt-2 mb-4"
              style={{
                height: 0,
                backgroundColor: "transparent",
                opacity: ".75",
                borderTop: "2px dashed #9e9e9e",
              }}
            />
            {data?.map((item, index) => (
              <div className="d-flex justify-content-between" key={index}>
                <p className="fw-bold mb-0">
                  {item.item.name} (Số lượng:{item.quantity})
                </p>
                <p className="text-muted mb-0">
                  <NumberFormat
                    value={
                      (item.item.salePrice || item.item.price) * item.quantity
                    }
                    suffix=" ₫"
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={0}
                  />
                </p>
              </div>
            ))}
            <div className="d-flex justify-content-between">
              <p className="small mb-0">Shipping</p>
              <p className="small mb-0">
                <NumberFormat
                  value={0}
                  suffix=" ₫"
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={0}
                />
              </p>
            </div>
            <div className="d-flex justify-content-between pb-1">
              <p className="small">Coupon</p>
              <p className="small">
                <NumberFormat
                  value={0}
                  suffix=" ₫"
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={0}
                />
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bold">Total</p>
              <p className="fw-bold" style={{ color: "#35558a" }}>
                <NumberFormat
                  value={totalPrice}
                  suffix=" ₫"
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={0}
                />
              </p>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center border-top-0 py-4">
            <Link
              to="/user/purchase"
              type="button"
              className="btn btn-primary btn-lg mb-1"
              style={{ backgroundColor: "#35558a" }}
            >
              Track your order
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmOrder;
