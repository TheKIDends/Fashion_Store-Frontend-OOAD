import "./style.scss"
import ProductDetails from "../components/ProductDetails/ProductDetails";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {useCookies} from "react-cookie";
import ConfirmDialog from "@Components/dialogs/ConfirmDialog/ConfirmDialog";
import {API, BREADCRUMB, CONFIRM_DIALOG, EDIT_PRODUCT_PAGE, MESSAGE, SCROLLING} from "@Const";
import NotFoundPage from "@Error/notFoundPage";

const productDetailData = {
  "productID": 63,
  "productName": "Áo Thun Dài Tay Nam, Mềm Mịn, Thoáng Khí",
  "productPrice": 249000,
  "productDescription": "ÁO THUN THIẾT KẾ CONFIDENCE \r\n\r\nÁo thun dài tay thiết kế in ép nhiệt bền bỉ, không rạn vỡ khi giặt ủi. Hình in mang phong cách trẻ trung, tạo điểm nhấn nổi bật.\r\n\r\nChất liệu chủ đạo từ Cotton mang lại cảm giác vải mềm mại, co giãn và đàn hồi tốt, cho bạn trải nghiệm thoải mái tối đa khi mặc.",
  "productImages": [
    {
      "imageID": 293,
      "productID": 63,
      "imagePath": "https://iili.io/JR4LT5G.jpg"
    },
    {
      "imageID": 294,
      "productID": 63,
      "imagePath": "https://iili.io/JR6F7h7.jpg"
    },
    {
      "imageID": 295,
      "productID": 63,
      "imagePath": "https://iili.io/JR6FYQ9.jpg"
    },
    {
      "imageID": 296,
      "productID": 63,
      "imagePath": "https://iili.io/JR6FcBe.jpg"
    }
  ],
  "productSizes": [
    {
      "sizeID": 218,
      "productID": 63,
      "sizeName": "S"
    },
    {
      "sizeID": 219,
      "productID": 63,
      "sizeName": "M"
    },
    {
      "sizeID": 220,
      "productID": 63,
      "sizeName": "L"
    },
    {
      "sizeID": 221,
      "productID": 63,
      "sizeName": "XL"
    }
  ],
  "productQuantities": [
    {
      "quantityID": 218,
      "productID": 63,
      "sizeID": 218,
      "quantity": 30
    },
    {
      "quantityID": 219,
      "productID": 63,
      "sizeID": 219,
      "quantity": 87
    },
    {
      "quantityID": 220,
      "productID": 63,
      "sizeID": 220,
      "quantity": 12
    },
    {
      "quantityID": 221,
      "productID": 63,
      "sizeID": 221,
      "quantity": 65
    }
  ],
  "category": {
    "categoryID": 2,
    "categoryName": "Áo Thun",
    "parentCategoryID": 1,
    "imagePath": "https://iili.io/J5HXHIj.webp",
    "products": null,
    "subCategories": null
  },
  "parentCategory": {
    "categoryID": 1,
    "categoryName": "Áo Nam",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": null
  },
  "quantitySold": 1
};

const EditProductPage = () => {
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const productID = queryParams.productID;

  const [isShowConfirmDialog, setIsShowConfirmDialog] = useState(false);
  const [isError, setIsError] = useState(false);

  const [productImages, setProductImages] = useState([]);
  const [informationProduct, setInformationProduct] = useState({
    productID: productID,
    productName: "",
    productPrice: "",
    productDescription: "",
    productQuantities: [],
    productSizes: [],
    category:{},
    parentCategory:{},
  });
  async function fetchImageAsFile(imageUrl, imageName) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new File([blob], imageName, {type: blob.type});
  }

  const initData = async () => {
    setInformationProduct(productDetailData);

    const fetchImagePromises = productDetailData.productImages.map(imageData => {
      const imageUrl = imageData.imagePath;
      return fetchImageAsFile(imageUrl, imageData.imagePath);
    });


    Promise.all(fetchImagePromises)
        .then(files => {
          setProductImages(files);
        })
        .catch(error => {
          console.error(error);
        });
  }

  useEffect(() => {
    initData().then(r => {});
  }, []);

  return (
      <>
        { isError === true && <NotFoundPage /> }
        { isError === false &&
            <div id="app">
              <main id="main">
                <div className="container profile-wrap">
                  <div className="breadcrumb-wrap">
                    <a href="/">{BREADCRUMB.HOME_PAGE}</a>
                    &gt; <span>{BREADCRUMB.PRODUCT_MANAGEMENT}</span>
                    &gt; <span>{BREADCRUMB.EDIT_PRODUCT}</span>
                  </div>
                </div>

                <div className="container pe-0 ps-0" style={{marginTop: "10px"}}>
                  <ProductDetails informationProduct={informationProduct}
                                  setInformationProduct={setInformationProduct}
                                  productImages={productImages}
                                  setProductImages={setProductImages}
                  />

                  <div className="product-edit__container">
                    <div className="product-edit">
                      <section style={{ marginBottom:"50px" }}>
                        <div className="button-container">
                          <button type="button" className="product-details-btn">
                            {EDIT_PRODUCT_PAGE.SAVE_BTN}
                          </button>
                          <button type="button" className="product-details-btn product-details-btn-danger"
                                  onClick={() => {setIsShowConfirmDialog(true)}}
                          >
                            {EDIT_PRODUCT_PAGE.RESTORE_BTN}
                          </button>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

              </main>

              {isShowConfirmDialog && (
                  <div className="modal-overlay">
                    <ConfirmDialog title={<span style={{color:"#bd0000"}}>{CONFIRM_DIALOG.WARNING_TITLE}</span>}
                                   subTitle={
                                     <>
                                       {CONFIRM_DIALOG.CONFIRM_RESTORE_DATA}
                                     </>
                                   }
                                   titleBtnAccept={CONFIRM_DIALOG.TITLE_BTN_ACCEPT}
                                   titleBtnCancel={CONFIRM_DIALOG.TITLE_BTN_CANCEL}
                                   onAccept={() => {
                                     initData().then(r => {setIsShowConfirmDialog(false)});
                                   }}
                                   onCancel={() => {setIsShowConfirmDialog(false)}}/>
                  </div>
              )}
            </div>
        }
      </>
  );
}

export default EditProductPage;