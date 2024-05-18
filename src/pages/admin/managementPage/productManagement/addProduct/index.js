import React, {useState} from "react";
import "./style.scss"

import ProductDetails from "../components/ProductDetails/ProductDetails";
import {toast} from "react-toastify";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import ConfirmDialog from "@Components/dialogs/ConfirmDialog/ConfirmDialog";
import {ADD_PRODUCT_PAGE, API, BREADCRUMB, CONFIRM_DIALOG, MESSAGE, SCROLLING} from "@Const";

const AddProductPage = () => {
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const navigate = useNavigate();

  const location = useLocation();

  const { productID } = useParams();
  const [productImages, setProductImages] = useState([]);

  const [isShowConfirmDialog, setIsShowConfirmDialog] = useState(false);

  const [informationProduct, setInformationProduct] = useState({
    productID: productID,
    productName: "",
    productPrice: "",
    productDescription: "",
    productQuantities: [],
    productSizes: [],
    category: location.state?.subCategory ?? {},
    parentCategory:location.state?.category ?? {},
  });

  return (
      <div id="app">
        <main id="main">
          <div className="container profile-wrap">
            <div className="breadcrumb-wrap">
              <a href="/">{BREADCRUMB.HOME_PAGE}</a>
              &gt; <span>{BREADCRUMB.PRODUCT_MANAGEMENT}</span>
              &gt; <span>{BREADCRUMB.ADD_PRODUCT}</span>
            </div>
          </div>

          <div className="container pe-0 ps-0" style={{marginTop: "10px"}}>
            <ProductDetails informationProduct={informationProduct}
                            setInformationProduct={setInformationProduct}
                            productImages={productImages}
                            setProductImages={setProductImages}
            />

            <div data-v-03749d40="" className="product-edit__container">
              <div data-v-03749d40="" className="product-edit">
                <section style={{ marginBottom:"50px" }}>
                  <div className="button-container">
                    <button type="button" className="product-details-btn">
                      {ADD_PRODUCT_PAGE.SAVE_BTN}
                    </button>
                    <button type="button" className="product-details-btn product-details-btn-danger"
                            onClick={() => {setIsShowConfirmDialog(true)}}
                    >
                      {ADD_PRODUCT_PAGE.REFRESH_BTN}
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {isShowConfirmDialog && (
              <div className="modal-overlay">
                <ConfirmDialog title={<span style={{color:"#bd0000"}}>{CONFIRM_DIALOG.WARNING_TITLE}</span>}
                               subTitle={
                                 <>
                                   {CONFIRM_DIALOG.CONFIRM_REFRESH_DATA}
                                 </>
                               }
                               titleBtnAccept={CONFIRM_DIALOG.TITLE_BTN_ACCEPT}
                               titleBtnCancel={CONFIRM_DIALOG.TITLE_BTN_CANCEL}
                               onAccept={() => {
                                 setInformationProduct({
                                     productID: productID,
                                     productName: "",
                                     productPrice: "",
                                     productDescription: "",
                                     productQuantities: [],
                                     productSizes: [],
                                     category: location.state?.subCategory ?? {},
                                     parentCategory:location.state?.category ?? {},
                                 });
                                 setProductImages([]);
                                 setIsShowConfirmDialog(false);
                               }}
                               onCancel={() => {setIsShowConfirmDialog(false)}}/>
              </div>
          )}

        </main>
      </div>
  );
}

export default AddProductPage;