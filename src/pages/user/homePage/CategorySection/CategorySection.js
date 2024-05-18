import React, {useContext, useEffect, useState} from "react";
import './style.scss';
import {useCookies} from "react-cookie";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import {API, HOME_PAGE, MESSAGE} from "@Const";

const categoriesData = [
  {
    "categoryID": 1,
    "categoryName": "Áo Nam",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 2,
        "categoryName": "Áo Thun",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXHIj.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 3,
        "categoryName": "Áo Khoác",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXFEB.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 4,
        "categoryName": "Áo Polo",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXq21.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 8,
        "categoryName": "Áo Sơ Mi",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXCkg.webp",
        "products": null,
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 5,
    "categoryName": "Quần Nam",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 7,
        "categoryName": "Quần Short Thể Thao",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXUGV.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 9,
        "categoryName": "Quần Dài Kaki",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXNyu.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 10,
        "categoryName": "Quần Short Kaki",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXUGV.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 11,
        "categoryName": "Quần Short Tây",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXLua.webp",
        "products": null,
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 12,
    "categoryName": "Quần Lót",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 13,
        "categoryName": "Quần Lót Boxer",
        "parentCategoryID": 12,
        "imagePath": "https://iili.io/J5HjR5X.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 14,
        "categoryName": "Quần Lót Brief",
        "parentCategoryID": 12,
        "imagePath": "https://iili.io/J5HjR5X.webp",
        "products": null,
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 15,
    "categoryName": "Phụ Kiện",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 16,
        "categoryName": "Tất Nam",
        "parentCategoryID": 15,
        "imagePath": "https://iili.io/J5HwxTu.jpg",
        "products": null,
        "subCategories": null
      }
    ]
  }
];

// Hàm render danh mục sản phẩm
const renderProductCategories = (productCategories) => {
  const SEARCH_LINK = 'category?categoryID='
  return productCategories.map((category, index) => (
      <div className="owl-item active" key={index} style={{ width: '119px' }}>
        <Link to={SEARCH_LINK + category.categoryID}>
          <div className="category-box">
            <div className="image-wrap position-relative w-100">
              <div className="image-wrap__img position-absolute w-100">
                {/*<img*/}
                {/*    lazy-src={category.imagePath}*/}
                {/*    alt={`Icon danh mục SP 400 x 400 px_${category.categoryName}`}*/}
                {/*    loading="lazy"*/}
                {/*    src={category.imagePath}*/}
                {/*/>*/}

                <img
                    style={{
                      borderRadius: '50%',
                      width: '400px', /* Thay đổi kích thước mong muốn */
                      height: '400-x', /* Thay đổi kích thước mong muốn */
                      objectFit: 'cover', /* Đảm bảo hình ảnh được hiển thị đúng tỷ lệ */
                    }}
                    lazy-src={category.imagePath}
                    alt={`Icon danh mục SP 400 x 400 px_${category.categoryName}`}
                    loading="lazy"
                    src={category.imagePath}
                />

              </div>
            </div>
            <div className="text text-center">
              <p>{category.categoryName}</p>
            </div>
          </div>
        </Link>
      </div>
  ));
};

const CategorySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxCategoriesPerPage = 11;
  const [categoryItem, setCategoryItem] = useState([{}])

  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  useEffect(() => {

    const data = categoriesData;
    const allSubCategories = [];

    // Hàm đệ quy để duyệt và ghép các subCategories
    const flattenCategories = (categories) => {
      categories.forEach((category) => {
        allSubCategories.push(category); // Thêm category hiện tại vào mảng allSubCategories
        if (category.subCategories && category.subCategories.length > 0) {
          flattenCategories(category.subCategories); // Gọi đệ quy nếu category có subCategories
        }
      });
    };

    // Gọi hàm flattenCategories với mảng gốc chứa categories
    flattenCategories(data);

    setCategoryItem(allSubCategories);
  }, []);

  const handlePrevClick = () => {
      setCurrentSlide(Math.max(0, currentSlide - maxCategoriesPerPage));
  };

  const handleNextClick = () => {
    setCurrentSlide(Math.min(Math.max(0, categoryItem.length - maxCategoriesPerPage), currentSlide + maxCategoriesPerPage));
  };

  return (
      <section className="category">
        <div className="category-wrap">
          <div className="title">
            <p className="text-center mb-0">{HOME_PAGE.PRODUCT_CATEGORIES_TITLE}</p>
          </div>
          <div className="content owl-carousel owl-theme owl-loaded owl-drag" id="content-category">
            <div className="owl-stage-outer">
              <div className="owl-stage"
                   style={{ transform: `translate3d(-${currentSlide * 119}px, 0px, 0px)`, transition: 'all 0.3s ease 0s', width: '50000px' }}>
                {renderProductCategories(categoryItem)}
              </div>
            </div>
            <div className="owl-nav">
              <button
                  type="button"
                  role="presentation"
                  className={`owl-prev ${currentSlide === 0 ? 'hide' : ''}`}
                  onClick={handlePrevClick}>
                <span aria-label="Previous">‹</span>
              </button>
              <button
                  type="button"
                  role="presentation"
                  className={`owl-next ${currentSlide === categoryItem.length - maxCategoriesPerPage + 1 ? 'hide' : ''}`}
                  onClick={handleNextClick}>
                <span aria-label="Next">›</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};
export default CategorySection;
