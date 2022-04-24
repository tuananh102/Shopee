import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "../scss/admin/style.scss";


function Admin() {
  const [offCanvas, setOffCanvas] = useState(true);
  return (
     <>
     <div className={`sidebar ${!offCanvas && "active"}`}>
        <Link to="." className="logo-details">
          <img src="/images/shopee-admin-50.png" alt="logo-admin" />
          <span className="logo_name">Admin Site</span>
        </Link>
        <Accordion onMouseEnter={() => setOffCanvas(true)}>
          <Link to="." className="sidebar-alone active">
            <i className="bx bxs-dashboard" />
            <span className="links_name">Dashboard</span>
          </Link>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Link to="#" className="active">
                <i className="bx bx-book" />
                <span className="links_name">Catalog</span>
              </Link>
            </Accordion.Header>
            <Accordion.Body as="ul">
              <li>
                <Link to="product" className="">
                  <i className="bx bx-box" />
                  <span className="links_name">Product</span>
                </Link>
              </li>
              <li>
                <Link to="category" className="">
                  <i className="bx bx-category" />
                  <span className="links_name">Category</span>
                </Link>
              </li>
              <li>
                <Link to="manufacturers" className="">
                  <i className="bx bxs-factory"></i>
                  <span className="links_name">Manufacturers</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Link to="#" className="active">
                <i className="bx bxs-cart-alt"></i>
                <span className="links_name">Sales</span>
              </Link>
            </Accordion.Header>
            <Accordion.Body as="ul">
              <li>
                <Link to="order" className="">
                  <i className="bx bx-box" />
                  <span className="links_name">Order</span>
                </Link>
              </li>
              <li>
                <Link to="shipments" className="">
                  <i className="bx bx-category" />
                  <span className="links_name">Shipments</span>
                </Link>
              </li>
              <li>
                <Link to="giftcards" className="">
                  <i className="bx bxs-factory"></i>
                  <span className="links_name">Gift Cards</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <ul className="nav-links">
          <li>
            <Link to="dashboard" className="active">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
         
          <li className="log_out">
            <Link to="">
              <i className="bx bx-log-out" />
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul> */}
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i
              className="bx bx-menu"
              onClick={() => setOffCanvas(!offCanvas)}
            />
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search pe-auto" />
          </div>
          <div className="profile-details">
            <img src="/images/user.jpg" alt="" />
            <span className="admin_name">Tuan Anh</span>
            <i className="bx bx-chevron-down" />
          </div>
        </nav>
        <div className="home-content">
          <Outlet />
        </div>
      </section></>
  );
}
export default Admin;
