import React from "react";
import { mdiCellphone, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
const BannerListMenu = () => {
  return (
    <div className="list-menu">
      <ul className="list-menu__list">
        <li className="list-menu__list-item  list-menu__list-item--has-child">
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
          <div className="list-menu child-list-menu">
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
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
        <li className="list-menu__list-item">
          <a href="/" className="list-menu__list-item-link">
            Điện thoại
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BannerListMenu;
