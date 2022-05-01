import React, { useEffect } from "react";
import { mdiCellphone, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
const BannerListMenu = ({ data }) => {
  return (
    <div className="list-menu">
      <ul className="list-menu__list">
        {/* <li className="list-menu__list-item  list-menu__list-item--has-child">
          <a href="/" className="list-menu__list-item-link">
            <Icon
              path={mdiCellphone}
              size={1.4}
              className="list-menu__list-item-icon"
            />
            <h4 className="list-menu__list-item-name">
              Điện thoại
              <Icon path={mdiChevronRight} size={1.4} />
            </h4>
          </a>
          <div
            className="list-menu child-list-menu"
            style={{
              right: "calc(-100% - 10px)",
            }}
          >
            <ul className="list-menu__list">
              <li className="list-menu__list-item list-menu__list-item--has-child">
                <a href="/" className="list-menu__list-item-link">
                  <h4 className="list-menu__list-item-name">
                    Apple
                    <Icon path={mdiChevronRight} size={1.4} />
                  </h4>
                </a>
                <div className="list-menu child-list-menu">
                  <ul className="list-menu__list">
                    <li className="list-menu__list-item list-menu__list-item--has-child">
                      <a href="/" className="list-menu__list-item-link">
                        <h4 className="list-menu__list-item-name">
                          Iphone 13 Series
                        </h4>
                      </a>
                    </li>
                    <li className="list-menu__list-item list-menu__list-item--has-child">
                      <a href="/" className="list-menu__list-item-link">
                        <h4 className="list-menu__list-item-name">
                          Iphone 12 Series
                        </h4>
                      </a>
                    </li>
                    <li className="list-menu__list-item list-menu__list-item--has-child">
                      <a href="/" className="list-menu__list-item-link">
                        <h4 className="list-menu__list-item-name">
                          Iphone 11 Series
                        </h4>
                      </a>
                    </li>
                    <li className="list-menu__list-item list-menu__list-item--has-child">
                      <a href="/" className="list-menu__list-item-link">
                        <h4 className="list-menu__list-item-name">
                          Iphone X | XR
                        </h4>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li> */}
        {data &&
          data
            .filter((c) => c.parentId == null)
            .map((item) => (
              <li className="list-menu__list-item" key={item.id}>
                <Link
                  to={`/category/${item.id}`}
                  className="list-menu__list-item-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default BannerListMenu;
