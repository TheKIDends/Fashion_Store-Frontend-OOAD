import React, {useContext, useEffect, useState} from "react"
import {useCookies} from "react-cookie";
import {Link, useLocation, useNavigate} from "react-router-dom";

import "./style.scss"
import ProductDetailContent from "./ProductDetailContent/ProductDetailContent";

import {ScrollToTop} from '@Utils';
import {API, BREADCRUMB, MESSAGE, PRODUCT_DETAIL_PAGE} from "@Const";
import NotFoundPage from "../../error/notFoundPage";

const productInfoData = {
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

const ProductDetailPage = () => {
  const [informationProduct, setInformationProduct] = useState({});
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setInformationProduct(productInfoData);
    setIsError(false);
  }, []);

  const BreadcrumbProduct = () => {
   return (
      <section className="bread-crumb">
        <div className="container pe-0 ps-0">
          <div className="row me-0 ms-0">
            <div className="col-12 pe-0 ps-0">
              <ul className="breadcrumb">
                <li className="link">
                  <Link to="/"><span>{BREADCRUMB.HOME_PAGE}</span></Link>
                  <span className="mr_lr">&nbsp;&gt;&nbsp;</span>
                </li>

                { informationProduct.parentCategory &&
                    <li className="link">
                      <span>{(informationProduct.parentCategory.categoryName ? informationProduct.parentCategory.categoryName : PRODUCT_DETAIL_PAGE.CATEGORY_1)}</span>
                      <span className="mr_lr">&nbsp;&gt;&nbsp;</span>
                    </li>
                }
                { informationProduct.category &&
                    <li className="link">
                      <span>{(informationProduct.category.categoryName ? informationProduct.category.categoryName : PRODUCT_DETAIL_PAGE.CATEGORY_2)}</span>
                      <span className="mr_lr">&nbsp;&gt;&nbsp;</span>
                    </li>
                }
                <li className="link breadcrumb__name">{informationProduct.productName}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
      <>
        { isError === true && <NotFoundPage /> }
        { isError === false &&
            <div id="app" style={{paddingBottom:"30px"}}>
              <ScrollToTop />
              <main id="main" >
                <div className="product-detail-section" id="product--content" data-id="64a37a5143b0542a360991d2">
                  <BreadcrumbProduct />

                  <section className="detail-product">
                    <div className="container pe-0 ps-0">
                      <ProductDetailContent informationProduct={informationProduct} />
                    </div>
                  </section>

                </div>
              </main>
            </div>
        }
      </>
  );
}

export default ProductDetailPage;