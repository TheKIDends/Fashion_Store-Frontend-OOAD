import React, {useContext, useEffect, useRef, useState} from "react";
import "./style.scss";
import "./css/cart.css";

import {useCookies} from "react-cookie";
import {useLocation, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

import queryString from 'query-string';

import closeButton from "./images/close.svg";
import cardIcon from "./images/card.svg"
import cod from "./images/cod.svg"
import {formatter} from "@Utils/formatter.js"

import AddressSection from "../components/AddressSection/AddressSection";
import {ScrollToTop} from '@Utils';
import {API, BREADCRUMB, CHECKOUT_PAGE, ERROR, IMAGE_URL, MESSAGE} from "@Const";

const checkoutData = {
  "productID": 108,
  "productName": "Quần Kaki Dài Nam, Đứng Phom, Tôn Dáng",
  "productPrice": 649000,
  "productDescription": "Quần Kaki Dài Nam, Đứng Phom, Tôn Dáng nổi bật với kiểu dáng Slim fit vừa vặn, tôn dáng mà vẫn đảm bảo cảm giác thoải mái khi mặc. Độ dài quần vừa phải, bảng màu đâ dạng, phù hợp với mọi lứa tuổi. Với chất liệu 97% Cotton, quần dài kaki giúp giải quyết nỗi lo nóng bí, khó khăn khi vận động, nhất là trong những ngày tiết trời mùa hè oi bức. Đặc biệt, việc bổ sung thêm 3% thành phần Spandex giúp nâng cao trải nghiệm về độ co giãn, đem tới cảm giác thoải mái khi mặc. Đây là một trong những mẫu quần công sở bán chạy nhất tại 5S Fashion mà các chàng trai không nên bỏ lỡ.",
  "productImages": [
    {
      "imageID": 540,
      "productID": 108,
      "imagePath": "https://iili.io/JRLylZ7.jpg"
    },
    {
      "imageID": 541,
      "productID": 108,
      "imagePath": "https://iili.io/JRLy1n9.jpg"
    },
    {
      "imageID": 542,
      "productID": 108,
      "imagePath": "https://iili.io/JRLyEGe.jpg"
    },
    {
      "imageID": 543,
      "productID": 108,
      "imagePath": "https://iili.io/JRLyV3b.jpg"
    },
    {
      "imageID": 544,
      "productID": 108,
      "imagePath": "https://iili.io/JRLyWaj.jpg"
    }
  ],
  "productSizes": [
    {
      "sizeID": 397,
      "productID": 108,
      "sizeName": "S"
    },
    {
      "sizeID": 398,
      "productID": 108,
      "sizeName": "M"
    },
    {
      "sizeID": 399,
      "productID": 108,
      "sizeName": "L"
    },
    {
      "sizeID": 400,
      "productID": 108,
      "sizeName": "XL"
    },
    {
      "sizeID": 401,
      "productID": 108,
      "sizeName": "2XL"
    }
  ],
  "productQuantities": [
    {
      "quantityID": 397,
      "productID": 108,
      "sizeID": 397,
      "quantity": 45
    },
    {
      "quantityID": 398,
      "productID": 108,
      "sizeID": 398,
      "quantity": 43
    },
    {
      "quantityID": 399,
      "productID": 108,
      "sizeID": 399,
      "quantity": 94
    },
    {
      "quantityID": 400,
      "productID": 108,
      "sizeID": 400,
      "quantity": 29
    },
    {
      "quantityID": 401,
      "productID": 108,
      "sizeID": 401,
      "quantity": 47
    }
  ],
  "category": {
    "categoryID": 9,
    "categoryName": "Quần Dài Kaki",
    "parentCategoryID": 5,
    "imagePath": "https://iili.io/J5HXNyu.webp",
    "products": null,
    "subCategories": null
  },
  "parentCategory": {
    "categoryID": 5,
    "categoryName": "Quần Nam",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": null
  },
  "quantitySold": 5
};

const CheckoutPage = () => {
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const productID = queryParams.productID;
  const sizeID = parseInt(queryParams.sizeID, 10);
  const currentQuantity = parseInt(queryParams.quantity, 10);

  const apiProductDetailByID = API.PUBLIC.PRODUCT_ENDPOINT + productID;

  const [selectedSizeID, setSelectedSizeID] = useState(sizeID)
  const [amount, setAmount] = useState(currentQuantity)
  const [product, setProduct] = useState({})
  const [selectedAddress, setSelectedAddress] = useState({a:1})
  const [userID, setUserID] = useState(null);

  const [loading, setLoading] = useState(true);
  const newProduct = useRef(null);

  useEffect(() => {
    const data = checkoutData;
    setProduct(data);
    newProduct.current = data;
  }, []);

  return (
      <main id ="main-checkout" style={{paddingBottom:"30px"}}>
        <ScrollToTop />
        <section className="cart__wrapper container">
          <nav style={{"--bs-breadcrumb-divider": "none"}} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to ="/">{BREADCRUMB.HOME_PAGE}</Link></li>
              <li className="breadcrumb-item"> &gt;</li>
              <li className="breadcrumb-item active" aria-current="page">{BREADCRUMB.PAYMENT}</li>
            </ol>
          </nav>

          { !amount ?
              <div className="cart-empty" style={{minHeight:"450px", margin:"0"}}>
                <div className="cart-empty__img">
                  <img src={IMAGE_URL.EMPTY_PRODUCT_IMG} alt="no data"/>
                  <p>{CHECKOUT_PAGE.EMPTY_CART_MESSAGE}</p>
                </div>
                <div className="cart-empty__action">
                  <a href="/" type="button" className="btn btn-danger cart__bill__total">
                    <span>{CHECKOUT_PAGE.BUY_NOW}</span>
                  </a>
                </div>
              </div>
              :
              <div className="content-page">
                <div className="row">
                  <div className="left-content col-xl-8 col-lg-8 col-md-6 col-12">
                    <div className="card-product d-flex">
                      <div className="image-product">
                        <Link to ={"/product?productID=" + product.productID}>
                          <img src={product.productImages && product.productImages[0].imagePath} alt={""} />
                        </Link>
                      </div>
                      <div className="product__info">
                        <div className="product__name d-flex align-items-start justify-content-between">
                          <Link to ={"/product?productID=" + product.productID}>
                            <h5 className="name">{product.productName}</h5>
                          </Link>
                          <img src={closeButton} alt="icon close"/>
                        </div>
                        <div className="product__classify">
                          <div className="wrap-product-detail-properties d-flex ">
                            { product.productSizes && product.productSizes.map((size, index) =>
                              (
                                product.productQuantities.find((quantity) => quantity.quantityID === size.sizeID) ?
                                  (
                                    product.productQuantities.find((quantity) => quantity.quantityID === size.sizeID).quantity <= 0 ?
                                      <div key={index} className="size-wrap size size-sold-out">{size.sizeName}</div>
                                      :
                                      <div key={index}
                                           className={`size-wrap size ${selectedSizeID === size.sizeID ? 'selected-size' : ''}`}
                                      >{size.sizeName}</div>
                                  )
                                  : <></>
                              ))
                            }
                          </div>
                        </div>
                        <div className="product__price d-flex align-items-center">
                          <div className="product__price__sale">
                            {formatter(product.productPrice * amount)}
                          </div>
                        </div>
                        <div className="product__quantity d-flex">
                          <button type="button" className="btn btn-light product__quantity__icon d-flex align-items-center justify-content-center">
                            -
                          </button>
                          <div className="d-flex align-items-center justify-content-center quantity">{amount}</div>
                          <button type="button" className="btn btn-light product__quantity__icon d-flex align-items-center justify-content-center">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="right-content col-xl-4 col-lg-4 col-md-6 col-12">
                    <AddressSection selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress}/>

                    <div className="cart__address">
                      <div className="cart__address__title d-flex align-items-center justify-content-between">
                        <div className="cart__address__title__left mb-20px">
                          <img src={cardIcon} alt="icon payment method" />
                          <h5 className="mb-0">{CHECKOUT_PAGE.PAYMENT_METHOD}</h5>
                        </div>
                      </div>
                      <div className="list-payment-method">
                        <div className="item-method d-flex justify-content-start align-items-center" style={{cursor:"default"}}>
                          {/*<input type="radio" name="payment" value="1" checked onChange={() => 1}/>*/}
                          <div className="image-method" style={{marginLeft:"20px"}}>
                            <img src={cod} width="24" height="22" alt="icon payment method cod" />
                          </div>
                          <div className="cart__address__description pdr-76px">
                            <div className="fw-bold">{CHECKOUT_PAGE.COD}</div>
                            <div className="font-12 ">{CHECKOUT_PAGE.CASH_ON_DELIVERY}</div>
                          </div>
                        </div>
                      </div>
                      <div className="cart__bill position-relative">
                        <div className="row me-0 ms-0">
                          <div className="col-6 cart__bill--mb">
                            <div className="cart__bill__ml cart__bill__title">{CHECKOUT_PAGE.SUBTOTAL}</div>
                          </div>
                          <div className="col-6 cart__bill--mb">
                            <div className="cart__bill__value">
                              <div className="cart__bill__title text-end">{formatter(product.productPrice * amount)}</div>
                              {/*<div className="bill__price__save text-end">(tiết kiệm 269k)</div>*/}
                            </div>
                          </div>
                          <div className="col-6 cart__bill--mb">
                            <div className="cart__bill__ml cart__bill__title">{CHECKOUT_PAGE.SHIPPING_FEE}</div>
                          </div>
                          <div className="col-6 cart__bill--mb">
                            <div className="cart__bill__value">
                              <div className="cart__bill__title text-end">
                                <span>{CHECKOUT_PAGE.FREE}</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 cart__bill--mb row-sum">
                            <div className="cart__bill__ml cart__bill__title">{CHECKOUT_PAGE.TOTAL_AMOUNT}</div>
                          </div>
                          <div className="col-6 cart__bill--mb  row-sum">
                            <div className="cart__bill__value">
                              <div className="cart__bill__title text-end text-red">{formatter(product.productPrice * amount)}</div>
                            </div>
                          </div>
                        </div>
                        <span>
                          <button data-address="[]" id="btn-checkout" type="button" className="btn btn-danger cart__bill__total">
                              <span className="text-checkout">{CHECKOUT_PAGE.PAYMENT_TOTAL}  {formatter(product.productPrice * amount)} <span>{CHECKOUT_PAGE.COD}</span></span>
                          </button>
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </section>
      </main>
  );
}

export default CheckoutPage;
