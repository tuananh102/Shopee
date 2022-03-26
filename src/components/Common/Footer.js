import React from "react";
import Icon from "@mdi/react";
import "../../scss/components/Footer.scss";
import { mdiFacebook, mdiInstagram, mdiLinkedin } from "@mdi/js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about-shopee">
        <div className="grid wide">
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3">
              <h3 className="footer-heading">Chăm sóc khách hàng</h3>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Shopee Blog
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Shopee Mall
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Hướng dẫn mua hàng
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Hướng dẫn bán hàng
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Thanh toán
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Shopee Xu
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Vận chuyển
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Trả hàng &amp; Hoàn tiền
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Chăm sóc khách hàng
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Chính sách bảo hành
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-md-3 ">
              <h3 className="footer-heading">Về Shopee</h3>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Giới thiệu về Shopee Việt Nam
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Tuyển dụng
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Điều khoản Shopee
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Chính sách bảo mật
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Chính hãng
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Kênh người bán{" "}
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Flash Sales
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Chương trình tiếp thị liên kết Shopee
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    Liên hệ với truyền thông
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <div className="footer-checkout">
                <h3 className="footer-heading">Thanh toán</h3>
                <ul className="footer-list-icons">
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-visa"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-master-card"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-jcb"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-amex"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-cod"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-installment"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-shopeepay"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div className="footer-transport">
                <h3 className="footer-heading">Đơn vị vận chuyển</h3>
                <ul className="footer-list-icons">
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-shopee-express"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-ghtk"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-ghn"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-viettel-post"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-vnpost"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-jnt"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-grab-express"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-ninja-van"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                  <li className="footer-list-icon">
                    <div
                      className="footer-list-icon__img footer-best-express"
                      style={{
                        backgroundImage: "url(/images/footer_img.png)",
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <h3 className="footer-heading">Theo dõi chúng tôi trên</h3>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    <Icon
                      path={mdiFacebook}
                      size={1.3}
                      className="footer-list-item__link-icon"
                    />
                    Facebook
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    <Icon
                      path={mdiInstagram}
                      size={1.3}
                      className="footer-list-item__link-icon"
                    />
                    Instagram
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="/#" className="footer-list-item__link">
                    <Icon
                      path={mdiLinkedin}
                      size={1.3}
                      className="footer-list-item__link-icon"
                    />
                    LinkedIn
                  </a>
                </li>
              </ul>
              <h3 className="footer-heading">Tải ứng dụng Shopee ngay thôi</h3>
              <div className="footer__qr">
                <a href="/#">
                  <img
                    src="/images/qr_code.png"
                    alt="Qr Code"
                    className="footer__qr-img"
                  />
                </a>
                <div className="footer__qr-apps">
                  <a href="/#" className="footer__qr-apps-link">
                    <img
                      src="/images/app_store.png"
                      alt="App Store"
                      className="footer__qr-apps-img"
                    />
                  </a>
                  <a href="/#" className="footer__qr-apps-link">
                    <img
                      src="/images/ch_play.png"
                      alt="Google Play"
                      className="footer__qr-apps-img"
                    />
                  </a>
                  <a href="/#" className="footer__qr-apps-link">
                    <img
                      src="/images/app_gallery.png"
                      alt="AppGallery"
                      className="footer__qr-apps-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-6 col-sm-4 col-md-3">
              <h3 className="footer-heading">Tải ứng dụng</h3>
              <div className="footer__qr">
                <a href="/#">
                  <img
                    src="/images/qr_code.png"
                    alt="Qr Code"
                    className="footer__qr-img"
                  />
                </a>
                <div className="footer__qr-apps">
                  <a href="/#" className="footer__qr-apps-link">
                    <img
                      src="/images/app_store.png"
                      alt="App Store"
                      className="footer__qr-apps-img"
                    />
                  </a>
                  <a href="/#" className="footer__qr-apps-link">
                    <img
                      src="/images/ch_play.png"
                      alt="Google Play"
                      className="footer__qr-apps-img"
                    />
                  </a>
                  <a href="/#" className="footer__qr-apps-link">
                    <img
                      src="/images/app_gallery.png"
                      alt="AppGallery"
                      className="footer__qr-apps-img"
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="grid wide d-sm-flex justify-content-center footer-region">
          <p className="permission">
            © 2022 Shopee. Tất cả các quyền được bảo lưu.
          </p>
          <div className="footer-region-national">
            <span className="footer-region-label">
              {" "}
              Quốc gia &amp; Khu vực:{" "}
            </span>
            <a href="/#" className="footer-region-link">
              Singapore
            </a>
            <a href="/#" className="footer-region-link">
              Indonesia
            </a>
            <a href="/#" className="footer-region-link">
              Đài Loan
            </a>
            <a href="/#" className="footer-region-link">
              Thái Lan
            </a>
            <a href="/#" className="footer-region-link">
              Malaysia
            </a>
            <a href="/#" className="footer-region-link">
              Việt Nam
            </a>
            <a href="/#" className="footer-region-link">
              Phillippines
            </a>
            <a href="/#" className="footer-region-link">
              Brazil
            </a>
            <a href="/#" className="footer-region-link">
              Mexico
            </a>
            <a href="/#" className="footer-region-link">
              Colombia
            </a>
            <a href="/#" className="footer-region-link">
              Chile
            </a>
            <a href="/#" className="footer-region-link">
              Poland
            </a>
            <a href="/#" className="footer-region-link">
              Spain
            </a>
            <a href="/#" className="footer-region-link">
              France
            </a>
            <a href="/#" className="footer-region-link">
              India
            </a>
            <a href="/#" className="footer-region-link">
              Argentina
            </a>
          </div>
        </div>
        <div className="footer-doc">
          <div className="grid wide">
            <ul className="footer-doc__legal-list">
              <li className="footer-doc__legal-item ">
                <a href="/#" className="footer-doc__legal-link">
                  Chính sách bảo mật
                </a>
              </li>
              <li className="footer-doc__legal-item ">
                <a href="/#" className="footer-doc__legal-link">
                  Quy chế hoạt động
                </a>
              </li>
              <li className="footer-doc__legal-item ">
                <a href="/#" className="footer-doc__legal-link">
                  Chính sách vận chuyển
                </a>
              </li>
              <li className="footer-doc__legal-item ">
                <a href="/#" className="footer-doc__legal-link">
                  Chính sách trả hàng và hoàn tiền
                </a>
              </li>
            </ul>
            <div className="footer-doc__license">
              <a href="/#" className="footer-doc__license-link">
                <img
                  src="/images/logoCCDV.png"
                  className="footer-doc__license-img"
                  alt="license"
                />
              </a>
              <a href="/#" className="footer-doc__license-link">
                <img
                  src="/images/logoCCDV.png"
                  className="footer-doc__license-img"
                  alt="license"
                />
              </a>
              <a className="footer-doc__license-link" href="/#">
                <div
                  style={{
                    backgroundImage: "url(/images/footer_img.png)",
                  }}
                  className="footer-doc__license-img footer-doc__license-regulation"
                />
              </a>
            </div>
            <h4 className="footer-doc__company-name">Công ty TNHH Shopee</h4>
            <div className="footer-doc__copyright">
              <p>
                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu
                Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt
                Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
              </p>
              <p>
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
                liên hệ: 024 73081221 (ext 4678)
              </p>
              <p>
                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch &amp; Đầu tư TP Hà
                Nội cấp lần đầu ngày 10/02/2015
              </p>
              <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
