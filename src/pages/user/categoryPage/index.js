import React, {useEffect, useState} from "react"
import "./style.scss"
import "./css/_category.css"
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import ProductsSection from "./ProductsSection/ProductsSection";

import fillterIcon from "./images/bars-filter.svg";
import queryString from "query-string";

import {ScrollToTop} from '@Utils';
import {API, CATEGORY_PAGE, FILTERS, IMAGE_URL, MESSAGE, NUMBER_PRODUCT_LIMIT, SORT} from "@Const";
import {ConfigProvider, Select} from "antd";
import NotFoundPage from "../../error/notFoundPage";

const categoriesData = {
  "categoryID": 1,
  "categoryName": "Áo Nam",
  "parentCategoryID": null,
  "imagePath": "https://iili.io/JR4gFGs.md.png",
  "products": [
    {
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
      "category": null,
      "parentCategory": null,
      "quantitySold": 1
    },
    {
      "productID": 64,
      "productName": "Áo Thun Dài Tay Nam, Thiết Kế Basic",
      "productPrice": 279000,
      "productDescription": "ÁO THUN TRƠN ĐÁP LOGO 5S FASHION\r\n\r\nÁo thun dài tay nâng cao trải nghiệm với chất liệu mới Viscose - sợi tơ tổng hợp có đặc điểm siêu mảnh, mềm mại hơn, độ mịn và bóng nhẹ tạo thẩm mỹ cao hơn.\r\n\r\nSản phẩm áo thun trơn đáp logo tinh tế, màu sắc nam tính dễ mặc, dễ phối đồ ngay cả khi mặc bên trong áo khoác.",
      "productImages": [
        {
          "imageID": 297,
          "productID": 64,
          "imagePath": "https://iili.io/JR4Qfkb.jpg"
        },
        {
          "imageID": 298,
          "productID": 64,
          "imagePath": "https://iili.io/JR6FGYx.jpg"
        },
        {
          "imageID": 299,
          "productID": 64,
          "imagePath": "https://iili.io/JR6FMkQ.jpg"
        },
        {
          "imageID": 300,
          "productID": 64,
          "imagePath": "https://iili.io/JR6FVpV.jpg"
        },
        {
          "imageID": 301,
          "productID": 64,
          "imagePath": "https://iili.io/JR6FXTB.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 222,
          "productID": 64,
          "sizeName": "S"
        },
        {
          "sizeID": 223,
          "productID": 64,
          "sizeName": "M"
        },
        {
          "sizeID": 224,
          "productID": 64,
          "sizeName": "L"
        },
        {
          "sizeID": 225,
          "productID": 64,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 222,
          "productID": 64,
          "sizeID": 222,
          "quantity": 32
        },
        {
          "quantityID": 223,
          "productID": 64,
          "sizeID": 223,
          "quantity": 59
        },
        {
          "quantityID": 224,
          "productID": 64,
          "sizeID": 224,
          "quantity": 49
        },
        {
          "quantityID": 225,
          "productID": 64,
          "sizeID": 225,
          "quantity": 21
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 65,
      "productName": "Áo Thun Dài Tay Nam, Mềm Mịn, Bền Bỉ",
      "productPrice": 219000,
      "productDescription": "ÁO THUN DÀI TAY form trơn basic với 3 sự lựa chọn màu sắc nam tính: xanh cổ vịt, xanh đá và ghi sáng. Cùng chất liệu Cotton pha sợi Spandex tạo độ co giãn tối đa, thoải mái nhất có thể khi mặc.",
      "productImages": [
        {
          "imageID": 302,
          "productID": 65,
          "imagePath": "https://iili.io/JR4Q1CN.jpg"
        },
        {
          "imageID": 303,
          "productID": 65,
          "imagePath": "https://iili.io/JR6Fv3J.jpg"
        },
        {
          "imageID": 304,
          "productID": 65,
          "imagePath": "https://iili.io/JR6F8Yv.jpg"
        },
        {
          "imageID": 305,
          "productID": 65,
          "imagePath": "https://iili.io/JR6FSvR.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 226,
          "productID": 65,
          "sizeName": "S"
        },
        {
          "sizeID": 227,
          "productID": 65,
          "sizeName": "M"
        },
        {
          "sizeID": 228,
          "productID": 65,
          "sizeName": "XL"
        },
        {
          "sizeID": 229,
          "productID": 65,
          "sizeName": "2XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 226,
          "productID": 65,
          "sizeID": 226,
          "quantity": 39
        },
        {
          "quantityID": 227,
          "productID": 65,
          "sizeID": 227,
          "quantity": 59
        },
        {
          "quantityID": 228,
          "productID": 65,
          "sizeID": 228,
          "quantity": 10
        },
        {
          "quantityID": 229,
          "productID": 65,
          "sizeID": 229,
          "quantity": 35
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 66,
      "productName": "Áo Thun Dài Tay Nam, Mềm Mịn, Thấm Hút Hiệu Quả",
      "productPrice": 349000,
      "productDescription": "Áo Thun Dài Tay Nam, Mềm Mịn, Thấm Hút Hiệu Quả nổi bật với chất liệu Viscose từ sợi lụa nhân tạo có cấu trúc tương tự Cotton nhưng được kết hợp với Feezing Nylonj, Spandex giúp tăng độ mềm mại, bền đẹp và đàn hồi của áo.",
      "productImages": [
        {
          "imageID": 306,
          "productID": 66,
          "imagePath": "https://iili.io/JR4ZHAJ.jpg"
        },
        {
          "imageID": 307,
          "productID": 66,
          "imagePath": "https://iili.io/JR6FrTN.jpg"
        },
        {
          "imageID": 308,
          "productID": 66,
          "imagePath": "https://iili.io/JR6F4jI.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 230,
          "productID": 66,
          "sizeName": "M"
        },
        {
          "sizeID": 231,
          "productID": 66,
          "sizeName": "L"
        },
        {
          "sizeID": 232,
          "productID": 66,
          "sizeName": "XL"
        },
        {
          "sizeID": 233,
          "productID": 66,
          "sizeName": "2XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 230,
          "productID": 66,
          "sizeID": 230,
          "quantity": 49
        },
        {
          "quantityID": 231,
          "productID": 66,
          "sizeID": 231,
          "quantity": 85
        },
        {
          "quantityID": 232,
          "productID": 66,
          "sizeID": 232,
          "quantity": 28
        },
        {
          "quantityID": 233,
          "productID": 66,
          "sizeID": 233,
          "quantity": 4
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 67,
      "productName": "Áo Thun Dài Tay Nam, In Chữ Combination",
      "productPrice": 319000,
      "productDescription": "Áo Thun Dài Tay Nam, in Chữ Combination sở hữu kiểu dáng Slim fit vừa vặn, tôn dáng với khả năng giữ ấm cơ thể cực tốt. Áo thun dài tay có đa dạng màu sắc, chủ yếu là các màu basic, dễ mặc và dễ phối. Thiết kế trẻ trung với điểm nhấn là hình in thêu chữ Combination hiện đại.\r\n\r\nChất liệu Viscose hay còn được gọi là sợi lụa nhân tạo, là một trong những dòng chất liệu cao cấp của. Viscose được tổng hợp từ chất xơ của sợi Cellulose làm từ bột ỗ như cây sồi, cây thông, bạch đàn tre... giúp cấu trúc của loại vải này gần như tương tự với Cotton. Tuy nhiên, đặc tính nổi trợi hơn nằm ở độ mềm mịn, thân thiện với làn da cũng như môi trường sống xung quanh. ",
      "productImages": [
        {
          "imageID": 309,
          "productID": 67,
          "imagePath": "https://iili.io/JR4ZRPS.jpg"
        },
        {
          "imageID": 310,
          "productID": 67,
          "imagePath": "https://iili.io/JR6KKaj.jpg"
        },
        {
          "imageID": 311,
          "productID": 67,
          "imagePath": "https://iili.io/JR6Kf8x.jpg"
        },
        {
          "imageID": 312,
          "productID": 67,
          "imagePath": "https://iili.io/JR6KCuV.jpg"
        },
        {
          "imageID": 313,
          "productID": 67,
          "imagePath": "https://iili.io/JR6KnwB.jpg"
        },
        {
          "imageID": 314,
          "productID": 67,
          "imagePath": "https://iili.io/JR6Kzn1.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 234,
          "productID": 67,
          "sizeName": "S"
        },
        {
          "sizeID": 235,
          "productID": 67,
          "sizeName": "L"
        },
        {
          "sizeID": 236,
          "productID": 67,
          "sizeName": "L"
        },
        {
          "sizeID": 237,
          "productID": 67,
          "sizeName": "3XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 234,
          "productID": 67,
          "sizeID": 234,
          "quantity": 3
        },
        {
          "quantityID": 235,
          "productID": 67,
          "sizeID": 235,
          "quantity": 5
        },
        {
          "quantityID": 236,
          "productID": 67,
          "sizeID": 236,
          "quantity": 32
        },
        {
          "quantityID": 237,
          "productID": 67,
          "sizeID": 237,
          "quantity": 34
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 68,
      "productName": "Áo Thun Dài Tay Nam, Mềm Mịn, Thấm Hút",
      "productPrice": 239000,
      "productDescription": "ÁO THUN THIẾT KẾ CONFIDENCE \r\n\r\nÁo thun dài tay thiết kế in ép nhiệt bền bỉ, không rạn vỡ khi giặt ủi. Hình in mang phong cách trẻ trung, tạo điểm nhấn nổi bật.\r\n\r\nChất liệu chủ đạo từ Cotton mang lại cảm giác vải mềm mại, co giãn và đàn hồi tốt, cho bạn trải nghiệm thoải mái tối đa khi mặc.",
      "productImages": [
        {
          "imageID": 315,
          "productID": 68,
          "imagePath": "https://iili.io/JR4tYsp.jpg"
        },
        {
          "imageID": 316,
          "productID": 68,
          "imagePath": "https://iili.io/JR6KY9R.jpg"
        },
        {
          "imageID": 317,
          "productID": 68,
          "imagePath": "https://iili.io/JR6Kaup.jpg"
        },
        {
          "imageID": 318,
          "productID": 68,
          "imagePath": "https://iili.io/JR6KcwN.jpg"
        },
        {
          "imageID": 319,
          "productID": 68,
          "imagePath": "https://iili.io/JR6KltI.jpg"
        },
        {
          "imageID": 320,
          "productID": 68,
          "imagePath": "https://iili.io/JR6K1nt.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 238,
          "productID": 68,
          "sizeName": "S"
        },
        {
          "sizeID": 239,
          "productID": 68,
          "sizeName": "M"
        },
        {
          "sizeID": 240,
          "productID": 68,
          "sizeName": "L"
        },
        {
          "sizeID": 241,
          "productID": 68,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 238,
          "productID": 68,
          "sizeID": 238,
          "quantity": 30
        },
        {
          "quantityID": 239,
          "productID": 68,
          "sizeID": 239,
          "quantity": 39
        },
        {
          "quantityID": 240,
          "productID": 68,
          "sizeID": 240,
          "quantity": 100
        },
        {
          "quantityID": 241,
          "productID": 68,
          "sizeID": 241,
          "quantity": 300
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 70,
      "productName": "Áo Thun Dài Tay Nam, Mềm Mịn, Thoáng Khí",
      "productPrice": 249000,
      "productDescription": "ÁO THUN THIẾT KẾ CONFIDENCE \r\n\r\nÁo thun dài tay thiết kế in ép nhiệt bền bỉ, không rạn vỡ khi giặt ủi. Hình in mang phong cách trẻ trung, tạo điểm nhấn nổi bật.\r\n\r\nChất liệu chủ đạo từ Cotton mang lại cảm giác vải mềm mại, co giãn và đàn hồi tốt, cho bạn trải nghiệm thoải mái tối đa khi mặc.",
      "productImages": [
        {
          "imageID": 329,
          "productID": 70,
          "imagePath": "https://iili.io/JR4Dqps.jpg"
        },
        {
          "imageID": 330,
          "productID": 70,
          "imagePath": "https://iili.io/JR6Kgcb.jpg"
        },
        {
          "imageID": 331,
          "productID": 70,
          "imagePath": "https://iili.io/JR6KrSj.jpg"
        },
        {
          "imageID": 332,
          "productID": 70,
          "imagePath": "https://iili.io/JR6K6Hx.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 245,
          "productID": 70,
          "sizeName": "S"
        },
        {
          "sizeID": 246,
          "productID": 70,
          "sizeName": "M"
        },
        {
          "sizeID": 247,
          "productID": 70,
          "sizeName": "L"
        },
        {
          "sizeID": 248,
          "productID": 70,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 245,
          "productID": 70,
          "sizeID": 245,
          "quantity": 38
        },
        {
          "quantityID": 246,
          "productID": 70,
          "sizeID": 246,
          "quantity": 84
        },
        {
          "quantityID": 247,
          "productID": 70,
          "sizeID": 247,
          "quantity": 48
        },
        {
          "quantityID": 248,
          "productID": 70,
          "sizeID": 248,
          "quantity": 73
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 1
    },
    {
      "productID": 149,
      "productName": "Áo Thun Nam Ngắn Tay, Thiết Kế In Chuyển Màu Trẻ Trung",
      "productPrice": 329000,
      "productDescription": "Áo Thun Nam Ngắn Tay, Thiết Kế In Chuyển Màu Trẻ Trung là item trẻ trung, mới mẻ mà các anh chắc chắn cần có trong tủ đồ của mùa hè. Kiểu dáng Slim fit vừa vặn, tôn dáng mà không quá ôm sát tạo cảm giác gò bó với người mặc. Cổ áo được dệt bo bền đẹp, giữ phom tốt. Điểm nhấn của thiết kế này nằm ở màu in loang chuyển màu độc đáo, hút mắt với bảng màu đa dạng. \r\n\r\nChất vải Cotton USA được biết đến là loại vải có cấu trúc sợi dai và dài vượt trội. Chất liệu này đã hoàn thiện được những ưu điểm có sẵn của cotton truyền thống. Độ thấm hút cao, chịu nhiệt tốt, giữ màu sắc bền đẹp; đồng thời khắc phục hầu hết nhược điểm cũ như: co rút, dễ nhăn, xù, bạc màu. Kết hợp với Spandex giúp sản phẩm có độ đàn hồi tốt, người mặc sẽ thoải mái vận động. Vải thành phẩm được xử lý qua công nghệ Wash giúp bề mặt mềm hơn, độ cầm màu tốt hơn & giảm độ co rút.",
      "productImages": [
        {
          "imageID": 696,
          "productID": 149,
          "imagePath": "https://iili.io/J5HWZ1S.jpg"
        },
        {
          "imageID": 697,
          "productID": 149,
          "imagePath": "https://iili.io/J5HWtr7.jpg"
        },
        {
          "imageID": 698,
          "productID": 149,
          "imagePath": "https://iili.io/J5HWb29.jpg"
        },
        {
          "imageID": 699,
          "productID": 149,
          "imagePath": "https://iili.io/J5HWm7e.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 558,
          "productID": 149,
          "sizeName": "S"
        },
        {
          "sizeID": 559,
          "productID": 149,
          "sizeName": "M"
        },
        {
          "sizeID": 560,
          "productID": 149,
          "sizeName": "L"
        },
        {
          "sizeID": 561,
          "productID": 149,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 558,
          "productID": 149,
          "sizeID": 558,
          "quantity": 29
        },
        {
          "quantityID": 559,
          "productID": 149,
          "sizeID": 559,
          "quantity": 94
        },
        {
          "quantityID": 560,
          "productID": 149,
          "sizeID": 560,
          "quantity": 45
        },
        {
          "quantityID": 561,
          "productID": 149,
          "sizeID": 561,
          "quantity": 43
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 150,
      "productName": "Áo Thun Nam, Chất Vải Freezing Nylon Thoáng Mát",
      "productPrice": 259000,
      "productDescription": "Áo Thun Nam, Chất Vải Freezing Nylon Thoáng Mát là sản phẩm được ứng dụng công nghệ mới đột phá với chất liệu Thun Lạnh siêu nhẹ, mang đến trải nghiệm thoáng mát tối đa cho người mặc. Bền mặt vải mượt hơn, co giãn tốt hơn với hàng ngàn lỗ thoáng khí, thông hơi và thấm hút mồ hôi cực tốt khi mặc. Áo giúp chống bám bụi, chống nhăn hiêu quả giúp chàng trai tiết kiệm được tối đa thời gian là ủi.\r\n\r\nBảng màu áo thun chủ yếu hướng tối các tone màu trung tính, cơ bản, dễ mặc và dễ phối. Công nghệ làm mát đột phá giúp áo thun tăng độ thoáng khí, thoát nhiệt nhanh và giảm ngay từ 5 - 7 độ C khi mặc. Đây là một trong những item mang phong cách thể thao, khỏe khoắn của 5S Fashion không thể thiếu trong tủ đồ hằng ngày, đi chơi, đi tập hay picnic của các chàng trai. ",
      "productImages": [
        {
          "imageID": 700,
          "productID": 150,
          "imagePath": "https://iili.io/J5nodtp.jpg"
        },
        {
          "imageID": 701,
          "productID": 150,
          "imagePath": "https://iili.io/J5noKPt.jpg"
        },
        {
          "imageID": 702,
          "productID": 150,
          "imagePath": "https://iili.io/J5noCSs.jpg"
        },
        {
          "imageID": 703,
          "productID": 150,
          "imagePath": "https://iili.io/J5nozN4.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 562,
          "productID": 150,
          "sizeName": "S"
        },
        {
          "sizeID": 563,
          "productID": 150,
          "sizeName": "M"
        },
        {
          "sizeID": 564,
          "productID": 150,
          "sizeName": "L"
        },
        {
          "sizeID": 565,
          "productID": 150,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 562,
          "productID": 150,
          "sizeID": 562,
          "quantity": 94
        },
        {
          "quantityID": 563,
          "productID": 150,
          "sizeID": 563,
          "quantity": 49
        },
        {
          "quantityID": 564,
          "productID": 150,
          "sizeID": 564,
          "quantity": 43
        },
        {
          "quantityID": 565,
          "productID": 150,
          "sizeID": 565,
          "quantity": 33
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 151,
      "productName": "Áo Thun Nam Ngắn Tay Cổ Tròn, In Chữ Ardent",
      "productPrice": 259000,
      "productDescription": "Áo Thun Nam Cổ Tròn, In Chữ Ardent là thiết kế đơn giản, thoải mái với tính ứng dụng cao. Áo thun có form dáng Slim fit vừa vặn, tôn dáng nhưng không hề gây cảm giác khó chịu hay bó sát khi mặc. Điểm nhấn của mẫu áo thun này nằm ở logo chữ Ardent được in ép nhiệt silicon mỏng với công nghệ High tech sắc nét, đảm bảo không bong tróc, phai mờ trong quá trình sử dụng hay giặt là. \r\n\r\nChất liệu Viscose (hay sợi lụa nhân tạo) là loại sợi tổng hợp từ chất xơ của sợi cellulose làm từ bột gỗ như cây sồi, thông, bạch đàn, cây tre… sở hữu hầu hết những đặc tính vượt trội của các chất liệu khác như lụa, cotton hay vải linen,… Vải Viscose khá mềm mịn, bóng mượt, thoáng khí, khả năng thấm hút mồ hôi và kháng khuẩn tốt. Với đặc tính dễ dàng nhuộm màu nên mẫu áo Polo này có màu sắc đa dạng, bắt mắt để bạn nam có thể thỏa sức lựa chọn.\r\n\r\nĐặc biệt, việc bổ sung thêm thành phần chất liệu Cotton còn giúp tăng  khả năng thoáng khí và thâm hút mồ hôi tăng lên vượt trội, đồng thời cũng khắc phục được những hạn chế của sợi cotton truyền thống. Thành phầm Spandex giúp sản phẩm có độ đàn hồi tốt, giảm độ co rút và người mặc sẽ thoải mái vận động. \r\n\r\nÁo được thiết kế tỉ mỉ đến từng chi tiết: cổ tròn bọc dây dệt giữ phom, mác ép nhiệt cao cấp không gây vướng ngứa khi mặc... Đây là item dễ phối đồ mà mọi chàng trai đều nên sở hữu ít nhất một chiếc trong tủ đồ mùa hè của mình. ",
      "productImages": [
        {
          "imageID": 704,
          "productID": 151,
          "imagePath": "https://iili.io/J5nxUpj.jpg"
        },
        {
          "imageID": 705,
          "productID": 151,
          "imagePath": "https://iili.io/J5nxrTx.jpg"
        },
        {
          "imageID": 706,
          "productID": 151,
          "imagePath": "https://iili.io/J5nx4hQ.jpg"
        },
        {
          "imageID": 707,
          "productID": 151,
          "imagePath": "https://iili.io/J5nx6QV.jpg"
        },
        {
          "imageID": 708,
          "productID": 151,
          "imagePath": "https://iili.io/J5nxiCB.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 566,
          "productID": 151,
          "sizeName": "S"
        },
        {
          "sizeID": 567,
          "productID": 151,
          "sizeName": "M"
        },
        {
          "sizeID": 568,
          "productID": 151,
          "sizeName": "L"
        },
        {
          "sizeID": 569,
          "productID": 151,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 566,
          "productID": 151,
          "sizeID": 566,
          "quantity": 94
        },
        {
          "quantityID": 567,
          "productID": 151,
          "sizeID": 567,
          "quantity": 49
        },
        {
          "quantityID": 568,
          "productID": 151,
          "sizeID": 568,
          "quantity": 43
        },
        {
          "quantityID": 569,
          "productID": 151,
          "sizeID": 569,
          "quantity": 39
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 152,
      "productName": "Áo Thun Nam Ngắn Tay, Thoáng Mát, Chống Nhăn",
      "productPrice": 259000,
      "productDescription": "Áo Thun Nam Ngắn Tay, Thoáng Mát, Chống Nhăn là mẫu áo thun in hình thể thao mới nhất. Áo được thiết kế với form dáng Slim fit, ôm vừa vặn nhưng cũng không quá bó sát, tạo sự thoải mái cho người mặc. Đặc biệt, điểm nhấn của thiết kế này nằm ở họa tiết in chữ nằm vuông góc bên ngực trái của áo bằng công nghệ chuyển nhiệt Plastisol không bóng, bền đẹp, sắc nét, không lo bong tróc trong quá trình sử dụng hay giặt là.  \r\n\r\nVới bảng màu đa dạng, thiết kế trẻ trung, đây được xem là item hiện đại, mang sự năng động, dễ mặc và dễ dàng phối kết hợp cùng nhiều trang phục để phù hợp với nhiều hoàn cảnh khác nhau như mặc ở nhà, đi học, đi chơi, picnic, hẹn hò... ",
      "productImages": [
        {
          "imageID": 709,
          "productID": 152,
          "imagePath": "https://iili.io/J5nzoZl.jpg"
        },
        {
          "imageID": 710,
          "productID": 152,
          "imagePath": "https://iili.io/J5nzzn2.jpg"
        },
        {
          "imageID": 711,
          "productID": 152,
          "imagePath": "https://iili.io/J5nzIGS.jpg"
        },
        {
          "imageID": 712,
          "productID": 152,
          "imagePath": "https://iili.io/J5nzT67.jpg"
        },
        {
          "imageID": 713,
          "productID": 152,
          "imagePath": "https://iili.io/J5nzAF9.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 570,
          "productID": 152,
          "sizeName": "S"
        },
        {
          "sizeID": 571,
          "productID": 152,
          "sizeName": "M"
        },
        {
          "sizeID": 572,
          "productID": 152,
          "sizeName": "L"
        },
        {
          "sizeID": 573,
          "productID": 152,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 570,
          "productID": 152,
          "sizeID": 570,
          "quantity": 43
        },
        {
          "quantityID": 571,
          "productID": 152,
          "sizeID": 571,
          "quantity": 50
        },
        {
          "quantityID": 572,
          "productID": 152,
          "sizeID": 572,
          "quantity": 30
        },
        {
          "quantityID": 573,
          "productID": 152,
          "sizeID": 573,
          "quantity": 59
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 153,
      "productName": "Áo Thun Nam Ngắn Tay, Hạ Nhiệt, Thoáng Khí",
      "productPrice": 279000,
      "productDescription": " Áo Thun Nam, Hạ Nhiệt, Thoáng Khí là một trong những item cơ bản, dễ mặc không thể thiếu trong tủ đồ thời trang hằng ngày. Với thiết kế ngắn tay, cổ tròn kết hợp với form dáng Slim fit ôm vừa vặn, áo thun giúp tôn dáng mà vẫn tạo cảm giác thoải mái, không bó sát vào cơ thể khi mặc. Điểm đặc biệt của sản phẩm là phần họa tiết in chữ RUNNING bằng silicon ứng dụng công nghệ High-tech cao cấp, giúp tăng độ bền đẹp, không lo bong tróc trong quá trình sử dụng. ",
      "productImages": [
        {
          "imageID": 714,
          "productID": 153,
          "imagePath": "https://iili.io/J5nT27n.jpg"
        },
        {
          "imageID": 715,
          "productID": 153,
          "imagePath": "https://iili.io/J5nTBLl.jpg"
        },
        {
          "imageID": 716,
          "productID": 153,
          "imagePath": "https://iili.io/J5nTo1S.jpg"
        },
        {
          "imageID": 717,
          "productID": 153,
          "imagePath": "https://iili.io/J5nTT7e.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 574,
          "productID": 153,
          "sizeName": "S"
        },
        {
          "sizeID": 575,
          "productID": 153,
          "sizeName": "M"
        },
        {
          "sizeID": 576,
          "productID": 153,
          "sizeName": "L"
        },
        {
          "sizeID": 577,
          "productID": 153,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 574,
          "productID": 153,
          "sizeID": 574,
          "quantity": 54
        },
        {
          "quantityID": 575,
          "productID": 153,
          "sizeID": 575,
          "quantity": 94
        },
        {
          "quantityID": 576,
          "productID": 153,
          "sizeID": 576,
          "quantity": 51
        },
        {
          "quantityID": 577,
          "productID": 153,
          "sizeID": 577,
          "quantity": 43
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 43,
      "productName": "Áo Khoác Phao Nam, Dày Dặn, Trượt Nước",
      "productPrice": 1189000,
      "productDescription": "Chiếc áo khoác phao chần bông sử dụng chất liệu Poly ứng dụng công nghệ GORE-TEX trượt nước nhẹ, cản gió hiệu quả, giữ nhiệt, ấm áp tức thì. Thiết kế đường chỉ chần cách điệu nổi bật, mũ trùm có chốt cố định, tay áo bo chun dày dặn, có nhám hạn chế gió lùa tối đa; hình in silicon cao cấp khỏe khoắn. Bảng màu đa dạng, thiết kế thông minh, basic dễ mặc phù hợp trong nhiều hoàn cảnh.",
      "productImages": [
        {
          "imageID": 175,
          "productID": 43,
          "imagePath": "https://iili.io/JR4DWa1.jpg"
        },
        {
          "imageID": 176,
          "productID": 43,
          "imagePath": "https://iili.io/JR4mAmu.jpg"
        },
        {
          "imageID": 177,
          "productID": 43,
          "imagePath": "https://iili.io/JR4m5zb.jpg"
        },
        {
          "imageID": 178,
          "productID": 43,
          "imagePath": "https://iili.io/JR4m7Xj.jpg"
        },
        {
          "imageID": 179,
          "productID": 43,
          "imagePath": "https://iili.io/JR4mYLx.jpg"
        },
        {
          "imageID": 180,
          "productID": 43,
          "imagePath": "https://iili.io/JR4mcqQ.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 135,
          "productID": 43,
          "sizeName": "S"
        },
        {
          "sizeID": 136,
          "productID": 43,
          "sizeName": "M"
        },
        {
          "sizeID": 137,
          "productID": 43,
          "sizeName": "L"
        },
        {
          "sizeID": 138,
          "productID": 43,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 135,
          "productID": 43,
          "sizeID": 135,
          "quantity": 39
        },
        {
          "quantityID": 136,
          "productID": 43,
          "sizeID": 136,
          "quantity": 49
        },
        {
          "quantityID": 137,
          "productID": 43,
          "sizeID": 137,
          "quantity": 43
        },
        {
          "quantityID": 138,
          "productID": 43,
          "sizeID": 138,
          "quantity": 83
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 44,
      "productName": "Áo Khoác Phao Nam, Dày Dặn, Cản Gió, Cản Bụi",
      "productPrice": 999000,
      "productDescription": "Nằm trong BST Thu đông 2023 nhà, áo khoác ATHLETIC ngoài các tính năng đầy đủ của một chiếc áo khoác cap cấp: dày dặn, trượt nước, giữ nhiệt, giữ ấm cực tốt; còn mang một thiết kế biệt với phần mặt ngoài trơn mịn, mặt trong chần bông dày dặn, chắc chắn, đem đến một phong cách hoàn toàn mới so với áo chần bông thông thường, khỏe khoắn hơn, thời trang, năng động hơn. Phần túi ngực ngoài may khóa ẩn phối logo hãng in sắc nét, mũ trùm đầu có chốt cố định hạn chế gió lùa, cổ trụ cao ấm áp. Một item không thể thiếu cho mùa đông này!",
      "productImages": [
        {
          "imageID": 181,
          "productID": 44,
          "imagePath": "https://iili.io/JR4DiwG.jpg"
        },
        {
          "imageID": 182,
          "productID": 44,
          "imagePath": "https://iili.io/JR4DQn4.jpg"
        },
        {
          "imageID": 183,
          "productID": 44,
          "imagePath": "https://iili.io/JR4mXIa.jpg"
        },
        {
          "imageID": 184,
          "productID": 44,
          "imagePath": "https://iili.io/JR4mhhJ.jpg"
        },
        {
          "imageID": 185,
          "productID": 44,
          "imagePath": "https://iili.io/JR4mNBR.jpg"
        },
        {
          "imageID": 186,
          "productID": 44,
          "imagePath": "https://iili.io/JR4mO1p.jpg"
        },
        {
          "imageID": 187,
          "productID": 44,
          "imagePath": "https://iili.io/JR4merN.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 139,
          "productID": 44,
          "sizeName": "S"
        },
        {
          "sizeID": 140,
          "productID": 44,
          "sizeName": "M"
        },
        {
          "sizeID": 141,
          "productID": 44,
          "sizeName": "L"
        },
        {
          "sizeID": 142,
          "productID": 44,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 139,
          "productID": 44,
          "sizeID": 139,
          "quantity": 39
        },
        {
          "quantityID": 140,
          "productID": 44,
          "sizeID": 140,
          "quantity": 83
        },
        {
          "quantityID": 141,
          "productID": 44,
          "sizeID": 141,
          "quantity": 38
        },
        {
          "quantityID": 142,
          "productID": 44,
          "sizeID": 142,
          "quantity": 73
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 45,
      "productName": "Áo Khoác Phao Nam, Dày Dặn, Giữ Nhiệt Tốt",
      "productPrice": 989000,
      "productDescription": "ÁO KHOÁC PHAO NAM CHẦN BÔNG TRƠN BASIC\r\n\r\nMột chiếc áo khoác với thiết kế tối giản, nhưng vẫn lịch sự và sang trọng là một item không thể thiếu trong mùa đông. Nằm trong BST Thu đông 2023 thuộc top bán chạy, sản phẩm áo khoác nam Extra-warm mang đến các tính năng vượt trội cản gió, trượt nước, giữ ấm hiệu quả, dày dặn nhưng vẫn nhẹ nhàng, thoải mái; phù hợp mặc trong nhiều hoàn cảnh với nhiều màu sắc khác nhau giúp bạn phối đồ một cách dễ dàng!\r\n\r\nChất liệu áo khoác 3 lớp:\r\n- Mặt ngoài: 100% Poly giúp cản gió một cách hiệu quả, trượt nước nhẹ, hạn chế bám bụi, độ bền cao\r\n\r\n- Lớp giữa: Chần bông xay kháng khuẩn cao cấp\r\n\r\n- Lớp trong: Lớp gió (lụa) mềm mịn giúp tỏa nhiệt tức thì, giữ nhiệt cực tốt\r\n\r\nThiết kế tinh tế:\r\n- Trơn basic với các đường chỉ chần cực kì chắc chắn giúp cố định bông, hạn chế xô dịch\r\n\r\n- Mũ trùm đầu rộng rãi, có chốt cố định dễ dàng điều chỉnh, hạn chế gió lùa\r\n\r\n- Khóa kéo cao cấp trơn tru, chốt khóa tại cổ áo có phần che khóa tinh tế \r\n\r\n- Túi hai bên, túi ngực sâu rộng, tiện lợi",
      "productImages": [
        {
          "imageID": 188,
          "productID": 45,
          "imagePath": "https://iili.io/JR4mtY7.jpg"
        },
        {
          "imageID": 189,
          "productID": 45,
          "imagePath": "https://iili.io/JR4mDv9.jpg"
        },
        {
          "imageID": 190,
          "productID": 45,
          "imagePath": "https://iili.io/JR4mbpe.jpg"
        },
        {
          "imageID": 191,
          "productID": 45,
          "imagePath": "https://iili.io/JR4mpTu.jpg"
        },
        {
          "imageID": 192,
          "productID": 45,
          "imagePath": "https://iili.io/JR4myhb.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 143,
          "productID": 45,
          "sizeName": "S"
        },
        {
          "sizeID": 144,
          "productID": 45,
          "sizeName": "M"
        },
        {
          "sizeID": 145,
          "productID": 45,
          "sizeName": "L"
        },
        {
          "sizeID": 146,
          "productID": 45,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 143,
          "productID": 45,
          "sizeID": 143,
          "quantity": 34
        },
        {
          "quantityID": 144,
          "productID": 45,
          "sizeID": 144,
          "quantity": 94
        },
        {
          "quantityID": 145,
          "productID": 45,
          "sizeID": 145,
          "quantity": 32
        },
        {
          "quantityID": 146,
          "productID": 45,
          "sizeID": 146,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 46,
      "productName": "Áo Khoác GIó Nam, Cản Gió, Trượt Nước",
      "productPrice": 799000,
      "productDescription": "ÁO KHOÁC GIÓ THỂ THAO PHỐI MÀU & CHẦN CHỈ NỔI. Thiết kế mới cho thu đông 2023 mang đến cho bạn chiếc áo khoác ứng dụng thời trang linh hoạt, form dáng thể thao khoẻ khoắn, màu sắc trẻ trung hiện đại.",
      "productImages": [
        {
          "imageID": 193,
          "productID": 46,
          "imagePath": "https://iili.io/JR4pqyF.jpg"
        },
        {
          "imageID": 194,
          "productID": 46,
          "imagePath": "https://iili.io/JR4pCTg.jpg"
        },
        {
          "imageID": 195,
          "productID": 46,
          "imagePath": "https://iili.io/JR4pnja.jpg"
        },
        {
          "imageID": 196,
          "productID": 46,
          "imagePath": "https://iili.io/JR4poZJ.jpg"
        },
        {
          "imageID": 197,
          "productID": 46,
          "imagePath": "https://iili.io/JR4pzCv.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 147,
          "productID": 46,
          "sizeName": "S"
        },
        {
          "sizeID": 148,
          "productID": 46,
          "sizeName": "M"
        },
        {
          "sizeID": 149,
          "productID": 46,
          "sizeName": "L"
        },
        {
          "sizeID": 150,
          "productID": 46,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 147,
          "productID": 46,
          "sizeID": 147,
          "quantity": 39
        },
        {
          "quantityID": 148,
          "productID": 46,
          "sizeID": 148,
          "quantity": 38
        },
        {
          "quantityID": 149,
          "productID": 46,
          "sizeID": 149,
          "quantity": 48
        },
        {
          "quantityID": 150,
          "productID": 46,
          "sizeID": 150,
          "quantity": 32
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 1
    },
    {
      "productID": 47,
      "productName": "Áo Bomber Nam, Thiết Kế Jaglan",
      "productPrice": 849000,
      "productDescription": "ÁO KHOÁC BOMBER NAM TAY RAGLAN TRẺ TRUNG\r\n\r\nÁo khoác nam hai lớp cản gió, hạn chế bám bụi, thuộc top áo khoác bomber bán chạy nhất với thiết kế trẻ trung dễ mặc, tay áo raglan phối màu, phần bo co giãn, dày dặn dệt kẻ nổi bật. Túi kéo khóa sâu rộng, phom Slimfit vừa vặn. Một item năng động, phong cách và thời trang!",
      "productImages": [
        {
          "imageID": 198,
          "productID": 47,
          "imagePath": "https://iili.io/JR4p7yX.jpg"
        },
        {
          "imageID": 199,
          "productID": 47,
          "imagePath": "https://iili.io/JR4paun.jpg"
        },
        {
          "imageID": 200,
          "productID": 47,
          "imagePath": "https://iili.io/JR4pcjs.jpg"
        },
        {
          "imageID": 201,
          "productID": 47,
          "imagePath": "https://iili.io/JR4pcjs.jpg"
        },
        {
          "imageID": 202,
          "productID": 47,
          "imagePath": "https://iili.io/JR4pEG4.jpg"
        },
        {
          "imageID": 203,
          "productID": 47,
          "imagePath": "https://iili.io/JR4pG6l.jpg"
        },
        {
          "imageID": 204,
          "productID": 47,
          "imagePath": "https://iili.io/JR4pWaS.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 151,
          "productID": 47,
          "sizeName": "S"
        },
        {
          "sizeID": 152,
          "productID": 47,
          "sizeName": "M"
        },
        {
          "sizeID": 153,
          "productID": 47,
          "sizeName": "L"
        },
        {
          "sizeID": 154,
          "productID": 47,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 151,
          "productID": 47,
          "sizeID": 151,
          "quantity": 32
        },
        {
          "quantityID": 152,
          "productID": 47,
          "sizeID": 152,
          "quantity": 83
        },
        {
          "quantityID": 153,
          "productID": 47,
          "sizeID": 153,
          "quantity": 32
        },
        {
          "quantityID": 154,
          "productID": 47,
          "sizeID": 154,
          "quantity": 32
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 48,
      "productName": "Áo Khoác Bomber Nam, Thiết Kế Phối Màu",
      "productPrice": 849000,
      "productDescription": "ÁO KHOÁC BOMBER NAM CAN PHỐI IN CHỮ TRẺ TRUNG\r\n\r\nChúng tôi mang đến cho bạn một outfit mới phong cách với sự kết hợp của áo khoác bomber hai lớp can phối in chữ cách điệu. Vẫn ấm áp với lớp Poly cản gió hiệu quả, trượt nước, trượt bụi, dày dặn. Trẻ trung với thiết kế nổi bật in chữ ngực, đường line tay áo khỏe khoắn, bo cổ dệt phối màu. Với 2 màu sắc cơ bản, nam tính, dễ mặc dễ phối đồ thì đây là item không thể thiếu trong mùa đông này!",
      "productImages": [
        {
          "imageID": 205,
          "productID": 48,
          "imagePath": "https://iili.io/JR4pknj.jpg"
        },
        {
          "imageID": 206,
          "productID": 48,
          "imagePath": "https://iili.io/JR4pvMx.jpg"
        },
        {
          "imageID": 207,
          "productID": 48,
          "imagePath": "https://iili.io/JR4p86Q.jpg"
        },
        {
          "imageID": 208,
          "productID": 48,
          "imagePath": "https://iili.io/JR4pUFV.jpg"
        },
        {
          "imageID": 209,
          "productID": 48,
          "imagePath": "https://iili.io/JR4pgcB.jpg"
        },
        {
          "imageID": 210,
          "productID": 48,
          "imagePath": "https://iili.io/JR4pr8P.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 155,
          "productID": 48,
          "sizeName": "S"
        },
        {
          "sizeID": 156,
          "productID": 48,
          "sizeName": "M"
        },
        {
          "sizeID": 157,
          "productID": 48,
          "sizeName": "L"
        },
        {
          "sizeID": 158,
          "productID": 48,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 155,
          "productID": 48,
          "sizeID": 155,
          "quantity": 38
        },
        {
          "quantityID": 156,
          "productID": 48,
          "sizeID": 156,
          "quantity": 39
        },
        {
          "quantityID": 157,
          "productID": 48,
          "sizeID": 157,
          "quantity": 85
        },
        {
          "quantityID": 158,
          "productID": 48,
          "sizeID": 158,
          "quantity": 18
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 49,
      "productName": "Áo Khoác Bomber Nam, Cản Gió, Thiết Kế Trẻ Trung",
      "productPrice": 939000,
      "productDescription": "ÁO BOMBER NAM LÓT NỈ THIẾT KẾ TÚI CÚC BẤM\r\n\r\nVới chất liệu Polyester cản gió hiệu quả, áo khoác bomber đến từ BST Thu Đông 2023  mang đến cho bạn một item vừa đủ ấm áp, vừa thời trang và dễ phối đồ. Tăng độ ấm với lớp lót nỉ mặt trong mềm mịn, tỏa nhiệt tức thì. Thiết kế đơn giản nhưng lịch lãm, sang trọng, túi chéo phối cúc bấm nổi bật, bo cổ bo tay dày dặn, co giãn. Áo khoác bomber là một loại áo khoác gọn gàng hơn giúp người mặc trông thời trang, phong cách, trẻ trung và năng động hơn.",
      "productImages": [
        {
          "imageID": 211,
          "productID": 49,
          "imagePath": "https://iili.io/JR4yBl2.jpg"
        },
        {
          "imageID": 212,
          "productID": 49,
          "imagePath": "https://iili.io/JR4yoH7.jpg"
        },
        {
          "imageID": 213,
          "productID": 49,
          "imagePath": "https://iili.io/JR4yxR9.jpg"
        },
        {
          "imageID": 214,
          "productID": 49,
          "imagePath": "https://iili.io/JR4yzNe.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 159,
          "productID": 49,
          "sizeName": "S"
        },
        {
          "sizeID": 160,
          "productID": 49,
          "sizeName": "M"
        },
        {
          "sizeID": 161,
          "productID": 49,
          "sizeName": "L"
        },
        {
          "sizeID": 162,
          "productID": 49,
          "sizeName": "XL"
        },
        {
          "sizeID": 163,
          "productID": 49,
          "sizeName": "2XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 159,
          "productID": 49,
          "sizeID": 159,
          "quantity": 39
        },
        {
          "quantityID": 160,
          "productID": 49,
          "sizeID": 160,
          "quantity": 38
        },
        {
          "quantityID": 161,
          "productID": 49,
          "sizeID": 161,
          "quantity": 17
        },
        {
          "quantityID": 162,
          "productID": 49,
          "sizeID": 162,
          "quantity": 37
        },
        {
          "quantityID": 163,
          "productID": 49,
          "sizeID": 163,
          "quantity": 18
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 1
    },
    {
      "productID": 50,
      "productName": " Áo Khoác Bomber Nam, Lót Lông, Thiết Kế Trẻ Trung",
      "productPrice": 899000,
      "productDescription": "ÁO KHOÁC BOMBER LÓT LÔNG TECH TRAINING\r\n\r\nÁo khoác Bomber dáng phồng (áo khoác lính) mang hơi hướng thời trang trẻ trung, nam tính. Thiết kế lót lông toàn bộ bên trong thân áo, đem lại ứng dụng thời trang phù hợp hơn với thời tiết mùa đông lạnh. Đảm bảo mặc đẹp, mặc ấm mà không cần quá nhiều lớp áo.\r\n\r\nChất liệu mà sử dụng lớp lót lông giữ nhiệt, bề mặt vải trượt nước, cản gió tối ưu - một trong những sản phẩm áo khoác trong bộ sưu tập thu đông mà bạn nhất định bạn phải sở hữu!",
      "productImages": [
        {
          "imageID": 215,
          "productID": 50,
          "imagePath": "https://iili.io/JR4yMxa.jpg"
        },
        {
          "imageID": 216,
          "productID": 50,
          "imagePath": "https://iili.io/JR4yVWJ.jpg"
        },
        {
          "imageID": 217,
          "productID": 50,
          "imagePath": "https://iili.io/JR4yWiv.jpg"
        },
        {
          "imageID": 218,
          "productID": 50,
          "imagePath": "https://iili.io/JR4yhfR.jpg"
        },
        {
          "imageID": 219,
          "productID": 50,
          "imagePath": "https://iili.io/JR4yjlp.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 164,
          "productID": 50,
          "sizeName": "S"
        },
        {
          "sizeID": 165,
          "productID": 50,
          "sizeName": "M"
        },
        {
          "sizeID": 166,
          "productID": 50,
          "sizeName": "L"
        },
        {
          "sizeID": 167,
          "productID": 50,
          "sizeName": "XL"
        },
        {
          "sizeID": 168,
          "productID": 50,
          "sizeName": "XXL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 164,
          "productID": 50,
          "sizeID": 164,
          "quantity": 39
        },
        {
          "quantityID": 165,
          "productID": 50,
          "sizeID": 165,
          "quantity": 83
        },
        {
          "quantityID": 166,
          "productID": 50,
          "sizeID": 166,
          "quantity": 84
        },
        {
          "quantityID": 167,
          "productID": 50,
          "sizeID": 167,
          "quantity": 72
        },
        {
          "quantityID": 168,
          "productID": 50,
          "sizeID": 168,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 2
    },
    {
      "productID": 51,
      "productName": "Áo Khoác Bomber Nam, Cản Gió, Trượt Nước",
      "productPrice": 889000,
      "productDescription": "ÁO KHOÁC BOMBER TÚI HỘP\r\n\r\nÁo khoác bomber thiết kế túi hộp trẻ trung, tạo điểm nhấn cùng ứng dụng tiện lợi với diện tích túi lớn để đồ cá nhân nhỏ như ví da, chìa khoá, điện thoại..\r\n\r\nChất liệu sử dụng công nghệ trượt nước, hạn chế thấm ngược ở bề mặt vải ngoài và lớp lót nỉ mềm mỏng, giữ ấm tối ưu. Một chiếc áo khoác vừa thời trang, vừa thích hợp cho những ngày mưa lạnh.",
      "productImages": [
        {
          "imageID": 220,
          "productID": 51,
          "imagePath": "https://iili.io/JR4yvbn.jpg"
        },
        {
          "imageID": 221,
          "productID": 51,
          "imagePath": "https://iili.io/JR4ySxs.jpg"
        },
        {
          "imageID": 222,
          "productID": 51,
          "imagePath": "https://iili.io/JR4yUWG.jpg"
        },
        {
          "imageID": 223,
          "productID": 51,
          "imagePath": "https://iili.io/JR4ygsf.jpg"
        },
        {
          "imageID": 224,
          "productID": 51,
          "imagePath": "https://iili.io/JR4y4f4.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 169,
          "productID": 51,
          "sizeName": "S"
        },
        {
          "sizeID": 170,
          "productID": 51,
          "sizeName": "M"
        },
        {
          "sizeID": 171,
          "productID": 51,
          "sizeName": "L"
        },
        {
          "sizeID": 172,
          "productID": 51,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 169,
          "productID": 51,
          "sizeID": 169,
          "quantity": 38
        },
        {
          "quantityID": 170,
          "productID": 51,
          "sizeID": 170,
          "quantity": 38
        },
        {
          "quantityID": 171,
          "productID": 51,
          "sizeID": 171,
          "quantity": 43
        },
        {
          "quantityID": 172,
          "productID": 51,
          "sizeID": 172,
          "quantity": 48
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 52,
      "productName": "Áo Khoác Bomber Nam, Trẻ Trung, Thanh Lịch",
      "productPrice": 899000,
      "productDescription": "ÁO KHOÁC NAM THIẾT KẾ TRƠN BASIC KIỂU TÚI HỘP\r\n\r\nNằm trong BST Thu đông 2023 của, áo khoác bomber nam với chất liệu Polyester dai bền, mềm mịn, cản gió, trượt nước nhẹ cùng thiết kế tinh giản, thanh lịch với phần túi hộp phong cách là một item không thể thiếu trong tủ đồ của bạn. Vừa ấm, nhẹ nhàng, gọn gàng, vừa trẻ trung, năng động và lịch sự.",
      "productImages": [
        {
          "imageID": 225,
          "productID": 52,
          "imagePath": "https://iili.io/JR69nqv.jpg"
        },
        {
          "imageID": 226,
          "productID": 52,
          "imagePath": "https://iili.io/JR69IdN.jpg"
        },
        {
          "imageID": 227,
          "productID": 52,
          "imagePath": "https://iili.io/JR69uet.jpg"
        },
        {
          "imageID": 228,
          "productID": 52,
          "imagePath": "https://iili.io/JR69AmX.jpg"
        },
        {
          "imageID": 229,
          "productID": 52,
          "imagePath": "https://iili.io/JR695In.jpg"
        },
        {
          "imageID": 230,
          "productID": 52,
          "imagePath": "https://iili.io/JR697Xs.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 173,
          "productID": 52,
          "sizeName": "S"
        },
        {
          "sizeID": 174,
          "productID": 52,
          "sizeName": "M"
        },
        {
          "sizeID": 175,
          "productID": 52,
          "sizeName": "L"
        },
        {
          "sizeID": 176,
          "productID": 52,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 173,
          "productID": 52,
          "sizeID": 173,
          "quantity": 39
        },
        {
          "quantityID": 174,
          "productID": 52,
          "sizeID": 174,
          "quantity": 38
        },
        {
          "quantityID": 175,
          "productID": 52,
          "sizeID": 175,
          "quantity": 34
        },
        {
          "quantityID": 176,
          "productID": 52,
          "sizeID": 176,
          "quantity": 34
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 53,
      "productName": "Áo Khoác Gió Nam 5S Fashion, Cản Gió, Trượt Nước",
      "productPrice": 1089000,
      "productDescription": " ÁO KHOÁC GIÓ NAM THỂ THAO MẶC ĐƯỢC HAI MẶT\r\n\r\nBiến hóa phong cách linh hoạt với chiếc áo khoác đa năng 2IN1 đến từ, một mặt trơn basic lịch lãm, một mặt với thiết kế can phối cùng họa tiết thêu chữ nổi bật, trẻ trung, thể thao và khỏe khoắn. Chất liệu hoàn toàn từ sợi Poly dai bền, mềm mịn, cản gió hiệu quả, trượt nước nhẹ. Áo khoác có mũ rời tháo được, thiết kế thông minh, mặc phù hợp trong nhiều hoàn cảnh.",
      "productImages": [
        {
          "imageID": 231,
          "productID": 53,
          "imagePath": "https://iili.io/JR69Mk7.jpg"
        },
        {
          "imageID": 232,
          "productID": 53,
          "imagePath": "https://iili.io/JR69Vp9.jpg"
        },
        {
          "imageID": 233,
          "productID": 53,
          "imagePath": "https://iili.io/JR69XIe.jpg"
        },
        {
          "imageID": 234,
          "productID": 53,
          "imagePath": "https://iili.io/JR69jLb.jpg"
        },
        {
          "imageID": 235,
          "productID": 53,
          "imagePath": "https://iili.io/JR69NBj.jpg"
        },
        {
          "imageID": 236,
          "productID": 53,
          "imagePath": "https://iili.io/JR69erQ.jpg"
        },
        {
          "imageID": 237,
          "productID": 53,
          "imagePath": "https://iili.io/JR698YB.jpg"
        },
        {
          "imageID": 238,
          "productID": 53,
          "imagePath": "https://iili.io/JR69SkP.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 177,
          "productID": 53,
          "sizeName": "S"
        },
        {
          "sizeID": 178,
          "productID": 53,
          "sizeName": "M"
        },
        {
          "sizeID": 179,
          "productID": 53,
          "sizeName": "L"
        },
        {
          "sizeID": 180,
          "productID": 53,
          "sizeName": "XL"
        },
        {
          "sizeID": 181,
          "productID": 53,
          "sizeName": "XXL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 177,
          "productID": 53,
          "sizeID": 177,
          "quantity": 38
        },
        {
          "quantityID": 178,
          "productID": 53,
          "sizeID": 178,
          "quantity": 49
        },
        {
          "quantityID": 179,
          "productID": 53,
          "sizeID": 179,
          "quantity": 84
        },
        {
          "quantityID": 180,
          "productID": 53,
          "sizeID": 180,
          "quantity": 52
        },
        {
          "quantityID": 181,
          "productID": 53,
          "sizeID": 181,
          "quantity": 85
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 54,
      "productName": "Áo Khoác Gió Nam 5S Fashion, Thiết Kế Cổ Bẻ AKG23011",
      "productPrice": 769000,
      "productDescription": "ÁO KHOÁC GIÓ CỔ BẺ LỊCH LÃM - Thiết kế mới cho outfit thanh lịch mùa thu đông. Sử dụng chất liệu vải Polyester cao cấp có khả năng cản nước, cản gió vượt trội cùng công nghệ hiện đại chống thấm ngược tối ưu. Chiếc áo khoác cực kì thích hợp với thời tiết giao mùa, mưa nhẹ.",
      "productImages": [
        {
          "imageID": 239,
          "productID": 54,
          "imagePath": "https://iili.io/JR69tYN.jpg"
        },
        {
          "imageID": 240,
          "productID": 54,
          "imagePath": "https://iili.io/JR69DvI.jpg"
        },
        {
          "imageID": 241,
          "productID": 54,
          "imagePath": "https://iili.io/JR69bpt.jpg"
        },
        {
          "imageID": 242,
          "productID": 54,
          "imagePath": "https://iili.io/JR69pTX.jpg"
        },
        {
          "imageID": 243,
          "productID": 54,
          "imagePath": "https://iili.io/JR69yjn.jpg"
        },
        {
          "imageID": 244,
          "productID": 54,
          "imagePath": "https://iili.io/JR6H9Qs.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 182,
          "productID": 54,
          "sizeName": "S"
        },
        {
          "sizeID": 183,
          "productID": 54,
          "sizeName": "M"
        },
        {
          "sizeID": 184,
          "productID": 54,
          "sizeName": "L"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 182,
          "productID": 54,
          "sizeID": 182,
          "quantity": 39
        },
        {
          "quantityID": 183,
          "productID": 54,
          "sizeID": 183,
          "quantity": 48
        },
        {
          "quantityID": 184,
          "productID": 54,
          "sizeID": 184,
          "quantity": 58
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 55,
      "productName": "Áo Khoác Gió Nam, Chống Bụi, Trượt Nước",
      "productPrice": 859000,
      "productDescription": "Áo Khoác Gió Nam, Chống Bụi, Trượt Nước là mẫu áo khoác nam đa năng cản gió, cản bụi, cản nước và chống UV là chiếc áo khoác gió sẽ phù hợp cho bạn mặc khi tham gia các hoạt động ngoài trời. 5S Fashion gửi đến các bạn thêm sự lựa chọn với một sản phẩm có thể sử dụng trong mọi hoàn cảnh",
      "productImages": [
        {
          "imageID": 245,
          "productID": 55,
          "imagePath": "https://iili.io/JR6HoZu.jpg"
        },
        {
          "imageID": 246,
          "productID": 55,
          "imagePath": "https://iili.io/JR6HzCb.jpg"
        },
        {
          "imageID": 247,
          "productID": 55,
          "imagePath": "https://iili.io/JR6HIGj.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 185,
          "productID": 55,
          "sizeName": "S"
        },
        {
          "sizeID": 186,
          "productID": 55,
          "sizeName": "M"
        },
        {
          "sizeID": 187,
          "productID": 55,
          "sizeName": "L"
        },
        {
          "sizeID": 188,
          "productID": 55,
          "sizeName": "XL"
        },
        {
          "sizeID": 189,
          "productID": 55,
          "sizeName": "XXL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 185,
          "productID": 55,
          "sizeID": 185,
          "quantity": 84
        },
        {
          "quantityID": 186,
          "productID": 55,
          "sizeID": 186,
          "quantity": 48
        },
        {
          "quantityID": 187,
          "productID": 55,
          "sizeID": 187,
          "quantity": 38
        },
        {
          "quantityID": 188,
          "productID": 55,
          "sizeID": 188,
          "quantity": 41
        },
        {
          "quantityID": 189,
          "productID": 55,
          "sizeID": 189,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 56,
      "productName": "Áo Khoác Nam, Kiểu Dáng Casual Heavy Phối Màu",
      "productPrice": 899000,
      "productDescription": "Áo Khoác Nam, Kiểu Dáng Casual Heavy Phối Màu là lựa chọn hoàn hảo cho các chàng trai trong thời điểm giao mùa. Khác với chế độ chống nước của các loại vải Nilon, các loại áo gió đến từ 5S Fashion được làm từ chất liệu 100% Polyester có màng chống nước siêu siêu mỏng giúp cho nước đọng thành từng hạt và chảy đi. Điều này giúp hạn chế nước mưa ngấm vào bên trong lớp vải mà vẫn đảm bảo sự thông thoáng, dễ chịu khi mặc.\r\n\r\nThiết kế áo basic, trẻ trung, nam tính với bảng màu đa dạng, mang tới nhiều sự lựa chọn theo sở thích của các anh chàng. Túi áo trước ngực và túi vát 2 bên tiện lợi, thời trang kết hợp cùng khóa HKK cao cấp, bền đẹp, không lo hỏng hóc. Áo khoác được làm từ chất liệu 100% Polyester vải gió sở hữu những ưu điểm như độ bền tốt, khả năng chống nước tối ưu, dễ dàng nhuộm màu sắc nét, đẹp mắt, dễ dàng giặt ủi cùng mức giá thành hợp lý, phù hợp với nhiều đối tượng người dùng. ",
      "productImages": [
        {
          "imageID": 248,
          "productID": 56,
          "imagePath": "https://iili.io/JR6HcwF.jpg"
        },
        {
          "imageID": 249,
          "productID": 56,
          "imagePath": "https://iili.io/JR6HlZg.jpg"
        },
        {
          "imageID": 250,
          "productID": 56,
          "imagePath": "https://iili.io/JR6H1na.jpg"
        },
        {
          "imageID": 251,
          "productID": 56,
          "imagePath": "https://iili.io/JR6HEMJ.jpg"
        },
        {
          "imageID": 252,
          "productID": 56,
          "imagePath": "https://iili.io/JR6HG6v.jpg"
        },
        {
          "imageID": 253,
          "productID": 56,
          "imagePath": "https://iili.io/JR6HVFR.jpg"
        },
        {
          "imageID": 254,
          "productID": 56,
          "imagePath": "https://iili.io/JR6HWap.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 190,
          "productID": 56,
          "sizeName": "S"
        },
        {
          "sizeID": 191,
          "productID": 56,
          "sizeName": "M"
        },
        {
          "sizeID": 192,
          "productID": 56,
          "sizeName": "L"
        },
        {
          "sizeID": 193,
          "productID": 56,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 190,
          "productID": 56,
          "sizeID": 190,
          "quantity": 38
        },
        {
          "quantityID": 191,
          "productID": 56,
          "sizeID": 191,
          "quantity": 48
        },
        {
          "quantityID": 192,
          "productID": 56,
          "sizeID": 192,
          "quantity": 95
        },
        {
          "quantityID": 193,
          "productID": 56,
          "sizeID": 193,
          "quantity": 58
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 57,
      "productName": "Áo Khoác Bomber Nam, Lót Lông, Dày Dặn",
      "productPrice": 869000,
      "productDescription": "ÁO KHOÁC BOMBER NAM LÓT LÔNG & CHẦN CHỈ NỔI. Chúng tôi mang đến cho bạn một chiếc áo khoác dày dặn, ấm áp với chất liệu Polyester cao cấp cản gió, trượt nước, lớp lót lông mềm mịn Extra-warm ấm áp tức thì, tỏa nhiệt, giữ nhiệt tốt. Thiết kế khỏe khoắn trẻ trung với đường line chần chỉ nổi tinh tế mang đến cho bạn một phong cách hoàn toàn mới, gọn gàng, thanh lịch, thời trang!",
      "productImages": [
        {
          "imageID": 255,
          "productID": 57,
          "imagePath": "https://iili.io/JR6HtPj.jpg"
        },
        {
          "imageID": 256,
          "productID": 57,
          "imagePath": "https://iili.io/JR6HbKx.jpg"
        },
        {
          "imageID": 257,
          "productID": 57,
          "imagePath": "https://iili.io/JR6HmcQ.jpg"
        },
        {
          "imageID": 258,
          "productID": 57,
          "imagePath": "https://iili.io/JR6HpSV.jpg"
        },
        {
          "imageID": 259,
          "productID": 57,
          "imagePath": "https://iili.io/JR6J9HB.jpg"
        },
        {
          "imageID": 260,
          "productID": 57,
          "imagePath": "https://iili.io/JR6JHAP.jpg"
        },
        {
          "imageID": 261,
          "productID": 57,
          "imagePath": "https://iili.io/JR6JJN1.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 194,
          "productID": 57,
          "sizeName": "S"
        },
        {
          "sizeID": 195,
          "productID": 57,
          "sizeName": "M"
        },
        {
          "sizeID": 196,
          "productID": 57,
          "sizeName": "L"
        },
        {
          "sizeID": 197,
          "productID": 57,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 194,
          "productID": 57,
          "sizeID": 194,
          "quantity": 48
        },
        {
          "quantityID": 195,
          "productID": 57,
          "sizeID": 195,
          "quantity": 94
        },
        {
          "quantityID": 196,
          "productID": 57,
          "sizeID": 196,
          "quantity": 58
        },
        {
          "quantityID": 197,
          "productID": 57,
          "sizeID": 197,
          "quantity": 85
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 58,
      "productName": "Áo Khoác Gió Nam, Cản Gió, Trượt Nước",
      "productPrice": 799000,
      "productDescription": "ÁO KHOÁC GIÓ THỂ THAO NAM CÓ MŨ THIẾT KẾ TÚI DẠNG HỘP. Nằm trong BST Thu đông 2023 mới nhất đến từ, sản xuất hoàn toàn tại Việt Nam. Một chiếc áo khoác hoàn hảo với kiểu dáng thể thao, khỏe khoắn, cản gió, trượt nước nhẹ, giữ ấm hiệu quả, rất thích hợp cho vận động và các hoạt động ngoài trời.\r\n\r\nChất liệu Áo Khoác Nam Có Mũ:\r\n• 100% Polyester: Nhẹ, cản gió vượt trội, trượt nước, hạn chế nhăn và bám bụi, độ bền cao\r\n\r\n• Mặt trong: Lót nỉ dày dặn, mềm mịn, ấm tức thì, giữ nhiệt, giữ ấm tối đa\r\n\r\nThiết kế:\r\n• Trơn basic, với hiệu ứng dệt kẻ ô tinh tế, màu sắc trung tính dễ dàng phối đồ\r\n\r\n• Phom dáng: Regular fit thoải mái\r\n\r\n• Mũ áo khoác có thể tháo rời hoàn toàn, có chốt cố định dễ dàng điều chỉnh\r\n\r\n• Khóa kéo trơn tru, có vạt che ẩn tinh tế, thời trang\r\n\r\n• Túi kéo khóa thiết kế dạng hộp nam tính, khỏe khoắn, phong cách\r\n\r\nCách mix&match Áo Khoác Nam Có Mũ \r\nThiết kế basic với 3 màu trung tính: Đen, Ghi tối, Ghi sáng, áo khoác nam có mũ dễ dàng phối được với nhiều loại quần áo khác nhau để tạo nên những outfit khỏe khoắn, hiện đại, năng động, phù hợp mặc hàng ngày: \r\n\r\n• Outfit công sở: Phối cùng quần tây/quần dài kaki với 1 chiếc áo sơ mi dài tay \r\n\r\n• Outfit thể thao: Một chiếc quần nỉ/quần jogger với chiếc áo thun dài tay đơn sắc bên trong và đừng quên một đôi giày thể thao để tổng thể trở nên khỏe khoắn hơn\r\n\r\n• Outfit daily: Quần jean phối áo nỉ sweater cùng một đôi sneaker là một outfit cực kì trẻ trung, năng động, mặc đi chơi, đi dạo, đi cafe,...\r\n\r\n",
      "productImages": [
        {
          "imageID": 262,
          "productID": 58,
          "imagePath": "https://iili.io/JR6Jvb1.jpg"
        },
        {
          "imageID": 263,
          "productID": 58,
          "imagePath": "https://iili.io/JR6JUWg.jpg"
        },
        {
          "imageID": 264,
          "productID": 58,
          "imagePath": "https://iili.io/JR6Jgsa.jpg"
        },
        {
          "imageID": 265,
          "productID": 58,
          "imagePath": "https://iili.io/JR6J4qJ.jpg"
        },
        {
          "imageID": 266,
          "productID": 58,
          "imagePath": "https://iili.io/JR6J60v.jpg"
        },
        {
          "imageID": 267,
          "productID": 58,
          "imagePath": "https://iili.io/JR6JPgR.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 198,
          "productID": 58,
          "sizeName": "S"
        },
        {
          "sizeID": 199,
          "productID": 58,
          "sizeName": "M"
        },
        {
          "sizeID": 200,
          "productID": 58,
          "sizeName": "L"
        },
        {
          "sizeID": 201,
          "productID": 58,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 198,
          "productID": 58,
          "sizeID": 198,
          "quantity": 84
        },
        {
          "quantityID": 199,
          "productID": 58,
          "sizeID": 199,
          "quantity": 84
        },
        {
          "quantityID": 200,
          "productID": 58,
          "sizeID": 200,
          "quantity": 29
        },
        {
          "quantityID": 201,
          "productID": 58,
          "sizeID": 201,
          "quantity": 85
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 59,
      "productName": "Áo Khoác Gió Nam Cõ Mũ, Giữ Ấm, In Hình Trẻ Trung",
      "productPrice": 799000,
      "productDescription": "ÁO KHOÁC NAM VẢI GIÓ IN CHỮ BEYOND PHONG CÁCH.\r\n\r\nChúng tôi ra mắt mẫu áo khoác nam mới nhất nằm trong BST Thu đông 2023, với thiết kế phá cách hơn, trẻ trung hơn. Áo khoác có 2 lớp dày dặn giữ ấm tốt, phần tay phối line nổi, điểm nổi bật nhất là hình in chữ sau lưng áo phong cách. Mũ trùm đầu rộng có chốt điều chỉnh, áo có vạt che khóa phối cúc tạo điểm nhấn. Phù hợp mặc khoác ngoài và các hoạt động vận động, thể thao.",
      "productImages": [
        {
          "imageID": 268,
          "productID": 59,
          "imagePath": "https://iili.io/JR6d91f.jpg"
        },
        {
          "imageID": 269,
          "productID": 59,
          "imagePath": "https://iili.io/JR6dddl.jpg"
        },
        {
          "imageID": 270,
          "productID": 59,
          "imagePath": "https://iili.io/JR6d272.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 202,
          "productID": 59,
          "sizeName": "S"
        },
        {
          "sizeID": 203,
          "productID": 59,
          "sizeName": "M"
        },
        {
          "sizeID": 204,
          "productID": 59,
          "sizeName": "L"
        },
        {
          "sizeID": 205,
          "productID": 59,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 202,
          "productID": 59,
          "sizeID": 202,
          "quantity": 49
        },
        {
          "quantityID": 203,
          "productID": 59,
          "sizeID": 203,
          "quantity": 95
        },
        {
          "quantityID": 204,
          "productID": 59,
          "sizeID": 204,
          "quantity": 38
        },
        {
          "quantityID": 205,
          "productID": 59,
          "sizeID": 205,
          "quantity": 48
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 60,
      "productName": "Áo Khoác Phao Gile Có Mũ, Thiết Kế Trẻ Trung, Khỏe Khoắn",
      "productPrice": 829000,
      "productDescription": "ÁO KHOÁC NAM GILE KHOÁC NGOÀI CÓ MŨ TRẺ TRUNG\r\n\r\nNằm trong BST Thu đông mới nhất đến từ nhà, chiếc áo khoác kiểu gile với thiết kế tối giản hơn nhưng vẫn đầy đủ hiệu năng của một chiếc áo khoác nam giữ ấm cực tốt. Chất liệu Poly dai bền giúp cản gió hiệu quả, bông xay chần dày dặn, lớp lót gió Extra-warm giữ nhiệt, tỏa hơi ấm tức thì. Thiết kế không tay mang lại sự gọn gàng, phần mũ trùm rộng trẻ trung, khóa kéo ngược cao cấp in logo hãng phần túi ngực thể thao khỏe khoắn.",
      "productImages": [
        {
          "imageID": 271,
          "productID": 60,
          "imagePath": "https://iili.io/JR6dYLg.jpg"
        },
        {
          "imageID": 272,
          "productID": 60,
          "imagePath": "https://iili.io/JR6dcBa.jpg"
        },
        {
          "imageID": 273,
          "productID": 60,
          "imagePath": "https://iili.io/JR6dlEJ.jpg"
        },
        {
          "imageID": 274,
          "productID": 60,
          "imagePath": "https://iili.io/JR6d0rv.jpg"
        },
        {
          "imageID": 275,
          "productID": 60,
          "imagePath": "https://iili.io/JR6dE2R.jpg"
        },
        {
          "imageID": 276,
          "productID": 60,
          "imagePath": "https://iili.io/JR6dG7p.jpg"
        },
        {
          "imageID": 277,
          "productID": 60,
          "imagePath": "https://iili.io/JR6dMkN.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 206,
          "productID": 60,
          "sizeName": "S"
        },
        {
          "sizeID": 207,
          "productID": 60,
          "sizeName": "M"
        },
        {
          "sizeID": 208,
          "productID": 60,
          "sizeName": "L"
        },
        {
          "sizeID": 209,
          "productID": 60,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 206,
          "productID": 60,
          "sizeID": 206,
          "quantity": 84
        },
        {
          "quantityID": 207,
          "productID": 60,
          "sizeID": 207,
          "quantity": 93
        },
        {
          "quantityID": 208,
          "productID": 60,
          "sizeID": 208,
          "quantity": 23
        },
        {
          "quantityID": 209,
          "productID": 60,
          "sizeID": 209,
          "quantity": 48
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 61,
      "productName": " Áo Gió Nam, Cản Gió, Trượt Nước",
      "productPrice": 749000,
      "productDescription": "ÁO KHOÁC NAM CỔ TRỤ THIẾT KẾ HỌA TIẾT HÌNH THOI\r\n\r\nÁo khoác nam vải gió 2 lớp dày dặn, một thiết kế mang phong cách hoàn toàn mới lạ, độc đáo và trẻ trung của. Cổ trụ cao giữ ấm, tay và gấu áo bo chun hạn chế gió lùa, nổi bật là phần thiết kế dệt line nổi từ tay và thân áo ghép thành hình thoi đầy cá tính. Một item hoàn hảo vừa giữ ấm vừa thời trang và năng động!",
      "productImages": [
        {
          "imageID": 278,
          "productID": 61,
          "imagePath": "https://iili.io/JR6dDvV.jpg"
        },
        {
          "imageID": 279,
          "productID": 61,
          "imagePath": "https://iili.io/JR6dbyB.jpg"
        },
        {
          "imageID": 280,
          "productID": 61,
          "imagePath": "https://iili.io/JR6dyj1.jpg"
        },
        {
          "imageID": 281,
          "productID": 61,
          "imagePath": "https://iili.io/JR629ZF.jpg"
        },
        {
          "imageID": 282,
          "productID": 61,
          "imagePath": "https://iili.io/JR62JCg.jpg"
        },
        {
          "imageID": 283,
          "productID": 61,
          "imagePath": "https://iili.io/JR62dGa.jpg"
        },
        {
          "imageID": 284,
          "productID": 61,
          "imagePath": "https://iili.io/JR6226J.jpg"
        },
        {
          "imageID": 285,
          "productID": 61,
          "imagePath": "https://iili.io/JR62F3v.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 210,
          "productID": 61,
          "sizeName": "S"
        },
        {
          "sizeID": 211,
          "productID": 61,
          "sizeName": "M"
        },
        {
          "sizeID": 212,
          "productID": 61,
          "sizeName": "L"
        },
        {
          "sizeID": 213,
          "productID": 61,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 210,
          "productID": 61,
          "sizeID": 210,
          "quantity": 49
        },
        {
          "quantityID": 211,
          "productID": 61,
          "sizeID": 211,
          "quantity": 83
        },
        {
          "quantityID": 212,
          "productID": 61,
          "sizeID": 212,
          "quantity": 81
        },
        {
          "quantityID": 213,
          "productID": 61,
          "sizeID": 213,
          "quantity": 28
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 62,
      "productName": "Áo Phao Nam, Phom Regular Cổ Bẻ Phong Cách",
      "productPrice": 969000,
      "productDescription": "ÁO PHAO CHẦN BÔNG CỔ BẺ CÚC CÀI PHONG CÁCH\r\n\r\nBST Thu đông 2023 mang đến một item hoàn toàn mới lạ, độc đáo với chiếc áo khoác phao chần bông mặt trong, cổ bẻ phối cúc cài. Chất liệu hoàn toàn từ Poly dai bền, cản gió hiệu quả, trượt nước nhẹ, chần bông mặt trong áo chắc chắn, ấm áp, dày dặn. Tay bo phối nhám hạn chế gió lùa, in silicon cao cấp phần ngực tạo điểm nhấn trẻ trung. Vừa ấm, vừa phong cách, lịch lãm, là item không thể thiếu trong mua đông này!",
      "productImages": [
        {
          "imageID": 286,
          "productID": 62,
          "imagePath": "https://iili.io/JR62IGs.jpg"
        },
        {
          "imageID": 287,
          "productID": 62,
          "imagePath": "https://iili.io/JR62AFf.jpg"
        },
        {
          "imageID": 288,
          "productID": 62,
          "imagePath": "https://iili.io/JR62Ra4.jpg"
        },
        {
          "imageID": 289,
          "productID": 62,
          "imagePath": "https://iili.io/JR62Y92.jpg"
        },
        {
          "imageID": 290,
          "productID": 62,
          "imagePath": "https://iili.io/JR62cw7.jpg"
        },
        {
          "imageID": 291,
          "productID": 62,
          "imagePath": "https://iili.io/JR62lt9.jpg"
        },
        {
          "imageID": 292,
          "productID": 62,
          "imagePath": "https://iili.io/JR62EMu.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 214,
          "productID": 62,
          "sizeName": "S"
        },
        {
          "sizeID": 215,
          "productID": 62,
          "sizeName": "M"
        },
        {
          "sizeID": 216,
          "productID": 62,
          "sizeName": "L"
        },
        {
          "sizeID": 217,
          "productID": 62,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 214,
          "productID": 62,
          "sizeID": 214,
          "quantity": 48
        },
        {
          "quantityID": 215,
          "productID": 62,
          "sizeID": 215,
          "quantity": 28
        },
        {
          "quantityID": 216,
          "productID": 62,
          "sizeID": 216,
          "quantity": 72
        },
        {
          "quantityID": 217,
          "productID": 62,
          "sizeID": 217,
          "quantity": 17
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 71,
      "productName": "Áo Polo Nam, Vải Viscose Mềm Mượt, Thoáng Khí",
      "productPrice": 389000,
      "productDescription": "Áo Polo Nam, Vải Viscose Mềm Mượt, Thoáng Khí APC23104 là lựa chọn hoàn hảo cho mùa này nhờ thiết kế trẻ trung, cuốn hút với kiểu dáng Slim fit ôm dáng vừa vặn. Đường may áo chắc chắn, tinh tế đến từng chi tiết. Điểm nhấn của mẫu áo Polo này nằm ở thiết kế phối cúc lạ mắt, mang đến diện mạo trẻ trung mà vẫn thanh lịch, nam tính cho nam giới. \r\n\r\nChất liệu Viscose thoáng mát, mềm mại, mang đến trải nghiệm hoàn hảo khi mặc, ngay cả trong tiết trời mùa hè oi bức. Bổ sung thành phần Freezing Nylon hay còn được biết đến với tên gọi quen thuộc là thun lạnh, với ưu điểm mềm mướt, bề mặt sáng bóng và nhẵn mịn, sợi vải mát lạnh, nhuộm màu sắc nét và tính đàn hồi tự nhiên cao. Kết hợp cùng Spandex tạo ra chất liệu vải có khả năng thấm hút mồ hôi tốt, thoáng khí, kháng khuẩn tốt và có màu sắc cực kỳ bắt mắt cùng với độ đàn hồi tốt giúp thoải mái vận động.",
      "productImages": [
        {
          "imageID": 333,
          "productID": 71,
          "imagePath": "https://iili.io/JR6foJf.jpg"
        },
        {
          "imageID": 334,
          "productID": 71,
          "imagePath": "https://iili.io/JR6fzOl.jpg"
        },
        {
          "imageID": 335,
          "productID": 71,
          "imagePath": "https://iili.io/JR6fuxS.jpg"
        },
        {
          "imageID": 336,
          "productID": 71,
          "imagePath": "https://iili.io/JR6fAW7.jpg"
        },
        {
          "imageID": 337,
          "productID": 71,
          "imagePath": "https://iili.io/JR6fRs9.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 249,
          "productID": 71,
          "sizeName": "S"
        },
        {
          "sizeID": 250,
          "productID": 71,
          "sizeName": "M"
        },
        {
          "sizeID": 251,
          "productID": 71,
          "sizeName": "L"
        },
        {
          "sizeID": 252,
          "productID": 71,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 249,
          "productID": 71,
          "sizeID": 249,
          "quantity": 93
        },
        {
          "quantityID": 250,
          "productID": 71,
          "sizeID": 250,
          "quantity": 38
        },
        {
          "quantityID": 251,
          "productID": 71,
          "sizeID": 251,
          "quantity": 28
        },
        {
          "quantityID": 252,
          "productID": 71,
          "sizeID": 252,
          "quantity": 48
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 72,
      "productName": "Áo Polo Nam, Vải Viscose, Thấm Hút Mồ Hôi Tốt",
      "productPrice": 419000,
      "productDescription": "Áo Polo Nam, Vải Viscose, Thấm Hút Mồ Hôi Tốt là một trong những mẫu áo Polo hot hit nhờ thiết kế đơn giản, chẳng lo \"lỗi mốt\". Mẫu áo này ghi điểm bởi thiết kế trẻ trung, nam tính, cuốn hút cùng kiểu dáng Slim fit tôn dáng, dễ mặc và dễ phối đồ. Cổ - tay áo được dệt bo bền đẹp, sang trọng, mang đến diện mạo cuốn hút cho nam giới. \r\n\r\nÁo được làm từ chất liệu Viscose thoáng mát, mềm mại, mang đên trải nghiệm hoàn hảo khi mặc. Kết hợp với thành phần chất liệu Polyamide và Spandex giúp tăng độ mềm mại, co giãn cực tốt khi mặc, giúp chiếc áo mềm mượt - mát mẻ - mau khô và đặc biệt không lo nhăn nhàu suốt cả ngày. ",
      "productImages": [
        {
          "imageID": 338,
          "productID": 72,
          "imagePath": "https://iili.io/JR6fEbV.jpg"
        },
        {
          "imageID": 339,
          "productID": 72,
          "imagePath": "https://iili.io/JR6fMzB.jpg"
        },
        {
          "imageID": 340,
          "productID": 72,
          "imagePath": "https://iili.io/JR6fVWP.jpg"
        },
        {
          "imageID": 341,
          "productID": 72,
          "imagePath": "https://iili.io/JR6fWs1.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 253,
          "productID": 72,
          "sizeName": "S"
        },
        {
          "sizeID": 254,
          "productID": 72,
          "sizeName": "M"
        },
        {
          "sizeID": 255,
          "productID": 72,
          "sizeName": "L"
        },
        {
          "sizeID": 256,
          "productID": 72,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 253,
          "productID": 72,
          "sizeID": 253,
          "quantity": 38
        },
        {
          "quantityID": 254,
          "productID": 72,
          "sizeID": 254,
          "quantity": 48
        },
        {
          "quantityID": 255,
          "productID": 72,
          "sizeID": 255,
          "quantity": 39
        },
        {
          "quantityID": 256,
          "productID": 72,
          "sizeID": 256,
          "quantity": 41
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 73,
      "productName": "Áo Polo Nam, Vải Silk Cao Cấp, Mềm Mại, Nhẹ Mát",
      "productPrice": 479000,
      "productDescription": "Áo Polo Nam, Vải Silk Cao Cấp, Mềm Mại, Nhẹ Mát sở hữu kiểu dáng Slim fit ôm dáng vừa vặn mà vẫn thoải mái trong mọi hoạt động. Thiết kế khỏe khoắn, màu sắc đa dạng được dệt kẻ Jaccquard phối màu tạo hiệu ứng tinh tế, mang đến phong cách thời thượng, lịch lãm cho nam giới. Đặc biệt, cổ và tay áo được dệt bo đứng dáng kết hợp cùng được phối line 3 màu tạo hiệu ứng nổi bật, thu hút cho tổng thể chiếc áo.\r\n\r\nÁo được làm từ chất liệu Silk cao cấp - Lụa tơ tằm ví như \"Nữ hoàng\" của các loại lụa, Silk được xếp vào top những loại vải đắt đỏ nhất hành tinh và chỉ xuất hiện trong các sản phẩm cao cấp. Với các ưu điểm mềm, mịn, vải rất thoáng mùa hè thì mát mẻ mùa đông thì ấm áp, thấm hút mồ hôi tốt và là gốc sợi tự nhiên nên rất an toàn với da. Chất liệu vải được cấu thành từ Polyester, Cotton là những chất liệu phổ thông tuy nhiên khi thêm 3% Silk giá thành lại tăng tới 50% đủ thấy giá trị của Silk, kết hợp thêm thành phần Lyocel (tencel) một chất liệu vải sinh học cao cấp hơn cả Modal, an toàn và thân thiện với môi trường, sử dụng công nghệ Nano nên sợi vải siêu mảnh cỡ các hạt Nano giúp bề mặt vải mềm, siêu mịn, chống nhăn hiệu quả. ",
      "productImages": [
        {
          "imageID": 342,
          "productID": 73,
          "imagePath": "https://iili.io/JR6fsdG.jpg"
        },
        {
          "imageID": 343,
          "productID": 73,
          "imagePath": "https://iili.io/JR6fL7f.jpg"
        },
        {
          "imageID": 344,
          "productID": 73,
          "imagePath": "https://iili.io/JR6fQe4.jpg"
        },
        {
          "imageID": 345,
          "productID": 73,
          "imagePath": "https://iili.io/JR6fZml.jpg"
        },
        {
          "imageID": 346,
          "productID": 73,
          "imagePath": "https://iili.io/JR6fDI2.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 257,
          "productID": 73,
          "sizeName": "S"
        },
        {
          "sizeID": 258,
          "productID": 73,
          "sizeName": "M"
        },
        {
          "sizeID": 259,
          "productID": 73,
          "sizeName": "L"
        },
        {
          "sizeID": 260,
          "productID": 73,
          "sizeName": "XL"
        },
        {
          "sizeID": 261,
          "productID": 73,
          "sizeName": "XXL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 257,
          "productID": 73,
          "sizeID": 257,
          "quantity": 48
        },
        {
          "quantityID": 258,
          "productID": 73,
          "sizeID": 258,
          "quantity": 38
        },
        {
          "quantityID": 259,
          "productID": 73,
          "sizeID": 259,
          "quantity": 12
        },
        {
          "quantityID": 260,
          "productID": 73,
          "sizeID": 260,
          "quantity": 39
        },
        {
          "quantityID": 261,
          "productID": 73,
          "sizeID": 261,
          "quantity": 41
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 75,
      "productName": "Áo Polo Nam, Chất Liệu Silk Cao Cấp",
      "productPrice": 479000,
      "productDescription": "Áo Polo Nam, Chất Liệu Silk Cao Cấp APC23065 nổi bật với kiểu Slim fit tôn dáng vừa vặn mà vẫn đảm bảo cảm giác thoải mái khi hoạt động. Đây là thiết kế trẻ trung, thời thượng, dễ mặc và dễ phối với mọi trang phục, giúp bạn nam tự tin để diện đi học, đi làm hay đi du lịch đều phù hợp.\r\n\r\nĐiểm nhấn của thiết kế này nằm ở phần dệt bo cổ và tay áo đứng form kết hợp với đường line mang tới phong cách trẻ trung cho người mặc. Tay áo được thêu logo nổi 5S Premium sang trọng, đẳng cấp, đảm bảo hàng chính hãng 100% đến từ thương hiệu. \r\n\r\nÁo Polo được làm từ chất liệu Silk - Lụa tơ tằm được ví như \"Nữ hoàng\" của các loại lụa, Silk được xếp vào top những loại vải đắt đỏ nhất hành tinh và chỉ xuất hiện trong các sản phẩm cao cấp. Với các ưu điểm vượt trội như mềm, mịn, vải rất thoáng mùa hè thì mát mẻ mùa đông thì ấm áp, thấm hút mồ hôi tốt và là gốc sợi tự nhiên nên rất an toàn với da.\r\n\r\nThêm vào đó, việc bổ sung các thành phần chất liệu như Polyester, Cotton giúp gia tăng độ thoáng mát, bền đẹp của áo Polo. Chất vải Lyocel (tencel) - một chất liệu vải cao cấp hơn cả Modal, an toàn và thân thiện với môi trường, sử dụng công nghệ Nano nên sợi vải siêu mảnh cỡ các hạt Nano giúp bề mặt vải mềm, siêu mịn, chống nhăn hiệu quả và có nhiều đặc điểm tương tự Modal. ",
      "productImages": [
        {
          "imageID": 353,
          "productID": 75,
          "imagePath": "https://iili.io/JR6qiCP.jpg"
        },
        {
          "imageID": 354,
          "productID": 75,
          "imagePath": "https://iili.io/JR6qsG1.jpg"
        },
        {
          "imageID": 355,
          "productID": 75,
          "imagePath": "https://iili.io/JR6qL6F.jpg"
        },
        {
          "imageID": 356,
          "productID": 75,
          "imagePath": "https://iili.io/JR6qZ3g.jpg"
        },
        {
          "imageID": 357,
          "productID": 75,
          "imagePath": "https://iili.io/JR6qtaa.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 265,
          "productID": 75,
          "sizeName": "S"
        },
        {
          "sizeID": 266,
          "productID": 75,
          "sizeName": "M"
        },
        {
          "sizeID": 267,
          "productID": 75,
          "sizeName": "L"
        },
        {
          "sizeID": 268,
          "productID": 75,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 265,
          "productID": 75,
          "sizeID": 265,
          "quantity": 43
        },
        {
          "quantityID": 266,
          "productID": 75,
          "sizeID": 266,
          "quantity": 21
        },
        {
          "quantityID": 267,
          "productID": 75,
          "sizeID": 267,
          "quantity": 31
        },
        {
          "quantityID": 268,
          "productID": 75,
          "sizeID": 268,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 77,
      "productName": "Áo Polo Nam, Vải Viscose, Thoáng Mát",
      "productPrice": 379000,
      "productDescription": "Áo Polo Nam, Vải Viscose, Thoáng Mát là thiết kế hiện đại, trẻ trung với kiểu dáng Slim fit ôm vừa vặn, tôn dáng được nam giới lựa chọn. Thiết kế basic, cổ và tay áo được dệt bo sang trọng, lịch sự giúp giữ phom tốt khi mặc. Bảng màu đa dạng, nhã nhặn với các màu sắc trung tính, dễ mặc, dễ phối với hầu hết các trang phục trong tủ đồ nam giới. Đây là một trong những item bán chạy nhất trong bộ sưu tập Xuân Hè.\r\n\r\nÁo được làm từ sự kết hợp của nhiều thành phần chất liệu như Micro Visocse, Freezing Nylon và Spandex đem tới trải nghiệm thoáng mát hoàn hảo cho chiếc áo Polo. Chất liệu này giúp tăng độ mềm mại, mỏng nhẹ và thoáng khí, tăng tốc độ bay hơi, từ đó thấm hút mồ hôi nhanh hơn, phù hợp để mặc đi làm, đi học hay đi chơi... ",
      "productImages": [
        {
          "imageID": 365,
          "productID": 77,
          "imagePath": "https://iili.io/JR6Cwge.jpg"
        },
        {
          "imageID": 366,
          "productID": 77,
          "imagePath": "https://iili.io/JR6COdu.jpg"
        },
        {
          "imageID": 367,
          "productID": 77,
          "imagePath": "https://iili.io/JR6Ckej.jpg"
        },
        {
          "imageID": 368,
          "productID": 77,
          "imagePath": "https://iili.io/JR6CSzQ.jpg"
        },
        {
          "imageID": 369,
          "productID": 77,
          "imagePath": "https://iili.io/JR6CUXV.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 273,
          "productID": 77,
          "sizeName": "S"
        },
        {
          "sizeID": 274,
          "productID": 77,
          "sizeName": "M"
        },
        {
          "sizeID": 275,
          "productID": 77,
          "sizeName": "L"
        },
        {
          "sizeID": 276,
          "productID": 77,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 273,
          "productID": 77,
          "sizeID": 273,
          "quantity": 41
        },
        {
          "quantityID": 274,
          "productID": 77,
          "sizeID": 274,
          "quantity": 24
        },
        {
          "quantityID": 275,
          "productID": 77,
          "sizeID": 275,
          "quantity": 31
        },
        {
          "quantityID": 276,
          "productID": 77,
          "sizeID": 276,
          "quantity": 32
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 78,
      "productName": "Áo Polo Nam, Cotton USA, Co Giãn 4 Chiều",
      "productPrice": 519000,
      "productDescription": "Áo Polo Nam, Cotton USA, Co Giãn 4 Chiều là thiết kế phối màu in tràn độc đáo ứng dụng công nghệ thoáng khí số 1 chuyên biệt của 5S Fashion rất được ưa chuộng hiện nay. Kiểu dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn thoải mái trong mọi hoạt động. Thiết kế đường nét hiện đại, gam màu đa dạng, phù hợp với mọi sở thích, độ tuổi và phong cách. \r\n\r\nÁo Polo được làm từ chất liệu Cotton USA với những ưu điểm vượt trội như co giãn 4 chiều, thấm hút mồ hôi, thoáng mát tối đa. Bề mặt vải tối ưu khả năng thoáng khí, hút ẩm nhanh hơn và mau khô hơn. Bổ sung thành phần Spandex giúp tăng độ co giãn, đàn hồi để nam giới thoải mái trong mọi hoạt động. ",
      "productImages": [
        {
          "imageID": 370,
          "productID": 78,
          "imagePath": "https://iili.io/JR6nx49.jpg"
        },
        {
          "imageID": 371,
          "productID": 78,
          "imagePath": "https://iili.io/JR6nApj.jpg"
        },
        {
          "imageID": 372,
          "productID": 78,
          "imagePath": "https://iili.io/JR6n7hQ.jpg"
        },
        {
          "imageID": 373,
          "productID": 78,
          "imagePath": "https://iili.io/JR6nlEP.jpg"
        },
        {
          "imageID": 374,
          "productID": 78,
          "imagePath": "https://iili.io/JR6n041.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 277,
          "productID": 78,
          "sizeName": "S"
        },
        {
          "sizeID": 278,
          "productID": 78,
          "sizeName": "M"
        },
        {
          "sizeID": 279,
          "productID": 78,
          "sizeName": "L"
        },
        {
          "sizeID": 280,
          "productID": 78,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 277,
          "productID": 78,
          "sizeID": 277,
          "quantity": 32
        },
        {
          "quantityID": 278,
          "productID": 78,
          "sizeID": 278,
          "quantity": 25
        },
        {
          "quantityID": 279,
          "productID": 78,
          "sizeID": 279,
          "quantity": 31
        },
        {
          "quantityID": 280,
          "productID": 78,
          "sizeID": 280,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 79,
      "productName": "Áo Polo Nam, Thấm Hút Mồ Hôi Tốt",
      "productPrice": 419000,
      "productDescription": "Áo Polo Nam, Cotton USA, Thấm Hút Mồ Hôi Tốt nổi bật với kiểu dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn đảm bảo cảm giác thoải mái khi vận động. Với chất liệu Cotton USA mỏng mịn, đạt tiêu chuẩn cao cấp với khả năng co giãn 4 chiều bền đẹp, đem tới cảm nhận về sự mềm mại, dễ chiu và dễ mặc.\r\n\r\nĐiểm nhấn của chiếc áo Polo này nằm ở phần cổ và tay dệt bo phối với các đường line nổi bật, trẻ trung và khỏe khoắn. Đây được đánh giá là dòng áo Polo vừa thời trang, vừa đáp ứng nhu cầu trang phục hè thoải mái và thoáng mát tối đa cho mọi chàng trai. ",
      "productImages": [
        {
          "imageID": 375,
          "productID": 79,
          "imagePath": "https://iili.io/JR6n4j4.jpg"
        },
        {
          "imageID": 376,
          "productID": 79,
          "imagePath": "https://iili.io/JR6n6Zl.jpg"
        },
        {
          "imageID": 377,
          "productID": 79,
          "imagePath": "https://iili.io/JR6nsGS.jpg"
        },
        {
          "imageID": 378,
          "productID": 79,
          "imagePath": "https://iili.io/JR6nL67.jpg"
        },
        {
          "imageID": 379,
          "productID": 79,
          "imagePath": "https://iili.io/JR6ntae.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 281,
          "productID": 79,
          "sizeName": "S"
        },
        {
          "sizeID": 282,
          "productID": 79,
          "sizeName": "M"
        },
        {
          "sizeID": 283,
          "productID": 79,
          "sizeName": "L"
        },
        {
          "sizeID": 284,
          "productID": 79,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 281,
          "productID": 79,
          "sizeID": 281,
          "quantity": 123
        },
        {
          "quantityID": 282,
          "productID": 79,
          "sizeID": 282,
          "quantity": 32
        },
        {
          "quantityID": 283,
          "productID": 79,
          "sizeID": 283,
          "quantity": 31
        },
        {
          "quantityID": 284,
          "productID": 79,
          "sizeID": 284,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 80,
      "productName": "Áo Polo Nam, Cotton USA, Cao Cấp, Thấm Hút Mồ Hôi",
      "productPrice": 419000,
      "productDescription": "Áo Polo Nam, Chất Vải Cotton USA Thoáng Mát, Thấm Hút Mồ Hôi APC23406 nổi bật với phom dáng Slim fit ôm nhẹ vừa vặn mà vẫn thoải mái, linh hoạt trong mọi hoạt động. Thiết kế basic với cổ áo dệt phối kẻ lịch sự. Phần tay áo có thêu logo tinh tế, đẳng cấp. Áo sở hữu bảng màu đa dạng với thiết kế trơn màu khỏe khoắn, dễ dàng phối kết hợp với nhiều kiểu trang phục khác nhau. \r\n\r\nÁo Polo được làm từ chất liệu cao cấp với 63,7% thành phần là Cotton USA . Khi kết hợp với sợi Polyester giúp cho vải có thêm những tính năng như: Tăng độ bền, độ bóng sắc nét, tăng độ bền màu của sản phẩm nhưng vẫn giữ được những ưu điểm của Cotton USA. Đồng thời, bổ sung thành phần Spandex giúp sản phẩm có độ đàn hồi tốt, giảm độ co rút và người mặc sẽ thoải mái vận động. \r\n\r\nVới bề mặt vải tối ưu khả năng thoáng khí, thấm hút nhanh hơn, mau khô hơn, đây được xem là chiếc áo Polo thoải mái nhất cho mùa hè này mà các bạn không nên bỏ qua. ",
      "productImages": [
        {
          "imageID": 380,
          "productID": 80,
          "imagePath": "https://iili.io/JR6osDv.jpg"
        },
        {
          "imageID": 381,
          "productID": 80,
          "imagePath": "https://iili.io/JR6oQxR.jpg"
        },
        {
          "imageID": 382,
          "productID": 80,
          "imagePath": "https://iili.io/JR6oZVp.jpg"
        },
        {
          "imageID": 383,
          "productID": 80,
          "imagePath": "https://iili.io/JR6otiN.jpg"
        },
        {
          "imageID": 384,
          "productID": 80,
          "imagePath": "https://iili.io/JR6obfI.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 285,
          "productID": 80,
          "sizeName": "S"
        },
        {
          "sizeID": 286,
          "productID": 80,
          "sizeName": "M"
        },
        {
          "sizeID": 287,
          "productID": 80,
          "sizeName": "L"
        },
        {
          "sizeID": 288,
          "productID": 80,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 285,
          "productID": 80,
          "sizeID": 285,
          "quantity": 123
        },
        {
          "quantityID": 286,
          "productID": 80,
          "sizeID": 286,
          "quantity": 32
        },
        {
          "quantityID": 287,
          "productID": 80,
          "sizeID": 287,
          "quantity": 31
        },
        {
          "quantityID": 288,
          "productID": 80,
          "sizeID": 288,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 81,
      "productName": "Áo Polo Nam, Thiết Kế Dệt Kẻ Phối Trẻ Trung",
      "productPrice": 419000,
      "productDescription": "Áo Polo Nam, Thiết Kế Dệt Kẻ Phối Trẻ Trung được thiết kế theo phom dáng Slim fit ôm vừa vặn, tôn dáng nhưng vẫn đảm bảo cảm giác thoải mái khi vận động. Thiết kế basic với cổ đứng, tay áo được dệt bo chỉn chu, giữ phom tốt, mang tới dáng vẻ chỉn chu, nam tính cho phái mạnh. Điểm nhấn của mẫu áo này nằm ở họa tiết dệt kẻ ngang phối màu thanh lịch, dễ dàng phối kết hợp với nhiều kiểu trang phục khác nhau, dễ dàng mặc đi làm hay đi chơi. \r\n\r\nÁo Polo được làm từ chất vải Cotton USA được biết đến là loại vải có cấu trúc sợi dai và dài vượt trội. Chất liệu này đã hoàn thiện được những ưu điểm có sẵn của cotton truyền thống. Độ thấm hút cao, chịu nhiệt tốt, giữ màu sắc bền đẹp; đồng thời khắc phục hầu hết nhược điểm cũ như: co rút, dễ nhăn, xù, bạc màu.\r\n\r\nKết hợp với Spandex giúp sản phẩm có độ đàn hồi tốt, người mặc sẽ thoải mái vận động. Vải thành phẩm được xử lý qua công nghệ Wash giúp bề mặt mềm hơn, độ cầm màu tốt hơn & giảm độ co rút.",
      "productImages": [
        {
          "imageID": 385,
          "productID": 81,
          "imagePath": "https://iili.io/JR6xSIf.jpg"
        },
        {
          "imageID": 386,
          "productID": 81,
          "imagePath": "https://iili.io/JR6xgLl.jpg"
        },
        {
          "imageID": 387,
          "productID": 81,
          "imagePath": "https://iili.io/JR6x4B2.jpg"
        },
        {
          "imageID": 388,
          "productID": 81,
          "imagePath": "https://iili.io/JR6xQku.jpg"
        },
        {
          "imageID": 389,
          "productID": 81,
          "imagePath": "https://iili.io/JR6xZmb.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 289,
          "productID": 81,
          "sizeName": "S"
        },
        {
          "sizeID": 290,
          "productID": 81,
          "sizeName": "M"
        },
        {
          "sizeID": 291,
          "productID": 81,
          "sizeName": "L"
        },
        {
          "sizeID": 292,
          "productID": 81,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 289,
          "productID": 81,
          "sizeID": 289,
          "quantity": 23
        },
        {
          "quantityID": 290,
          "productID": 81,
          "sizeID": 290,
          "quantity": 32
        },
        {
          "quantityID": 291,
          "productID": 81,
          "sizeID": 291,
          "quantity": 131
        },
        {
          "quantityID": 292,
          "productID": 81,
          "sizeID": 292,
          "quantity": 15
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 82,
      "productName": "Áo Polo Nam, Cotton USA, Thoáng Mát, Thấm Hút Mồ Hôi",
      "productPrice": 419000,
      "productDescription": "Áo Polo Nam, Cotton USA, Thoáng Mát, Thấm Hút Mồ Hôi sở hữu kiểu dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn thoải mái khi mặc. Thiết kế basic với cổ và tay áo được bo rib giúp giữ phom tốt, họa tiết dệt, phối đường kẻ line giúp tổng thể chiếc áo Polo trở nên đặc biệt, nổi bật hơn mà vẫn dễ dàng phối với các trang phục để mặc đi làm hay đi chơi. ",
      "productImages": [
        {
          "imageID": 390,
          "productID": 82,
          "imagePath": "https://iili.io/JR6IdMl.jpg"
        },
        {
          "imageID": 391,
          "productID": 82,
          "imagePath": "https://iili.io/JR6I2P2.jpg"
        },
        {
          "imageID": 392,
          "productID": 82,
          "imagePath": "https://iili.io/JR6IKc7.jpg"
        },
        {
          "imageID": 393,
          "productID": 82,
          "imagePath": "https://iili.io/JR6IB9e.jpg"
        },
        {
          "imageID": 394,
          "productID": 82,
          "imagePath": "https://iili.io/JR6Inwb.jpg"
        },
        {
          "imageID": 395,
          "productID": 82,
          "imagePath": "https://iili.io/JR6Iotj.jpg"
        },
        {
          "imageID": 396,
          "productID": 82,
          "imagePath": "https://iili.io/JR6Izox.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 293,
          "productID": 82,
          "sizeName": "S"
        },
        {
          "sizeID": 294,
          "productID": 82,
          "sizeName": "M"
        },
        {
          "sizeID": 295,
          "productID": 82,
          "sizeName": "L"
        },
        {
          "sizeID": 296,
          "productID": 82,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 293,
          "productID": 82,
          "sizeID": 293,
          "quantity": 53
        },
        {
          "quantityID": 294,
          "productID": 82,
          "sizeID": 294,
          "quantity": 69
        },
        {
          "quantityID": 295,
          "productID": 82,
          "sizeID": 295,
          "quantity": 11
        },
        {
          "quantityID": 296,
          "productID": 82,
          "sizeID": 296,
          "quantity": 25
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 83,
      "productName": "Áo Polo Nam, Chất Vải Cotton USA Cao Cấp",
      "productPrice": 419000,
      "productDescription": "Áo Polo Nam, Chất Vải Cotton USA Cao Cấp nổi bật với phom dáng Slim fit ôm vừa vặn mà vẫn đảm bảo cảm giác thoải mái khi mặc. Thiết kế basic với cổ - tay áo dệt bo rib giúp giữ phom tốt, mang đến dáng vẻ nam tính, lịch lãm cho nam giới. Điểm nhấn của thiết ké này nằm ở họa tiết dệt kẻ nổi bật, phù hợp với nhiều loại trang phục khác nhau. Áo sở hữu bảng màu đa dạng với màu sắc tươi sáng, sắc nét cùng thiết kế trẻ trung, tỉ mỉ đến từng chi tiết. ",
      "productImages": [
        {
          "imageID": 397,
          "productID": 83,
          "imagePath": "https://iili.io/JR6IVKN.jpg"
        },
        {
          "imageID": 398,
          "productID": 83,
          "imagePath": "https://iili.io/JR6IjHX.jpg"
        },
        {
          "imageID": 399,
          "productID": 83,
          "imagePath": "https://iili.io/JR6IwRn.jpg"
        },
        {
          "imageID": 400,
          "productID": 83,
          "imagePath": "https://iili.io/JR6INNs.jpg"
        },
        {
          "imageID": 401,
          "productID": 83,
          "imagePath": "https://iili.io/JR6IODG.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 297,
          "productID": 83,
          "sizeName": "S"
        },
        {
          "sizeID": 298,
          "productID": 83,
          "sizeName": "M"
        },
        {
          "sizeID": 299,
          "productID": 83,
          "sizeName": "L"
        },
        {
          "sizeID": 300,
          "productID": 83,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 297,
          "productID": 83,
          "sizeID": 297,
          "quantity": 53
        },
        {
          "quantityID": 298,
          "productID": 83,
          "sizeID": 298,
          "quantity": 69
        },
        {
          "quantityID": 299,
          "productID": 83,
          "sizeID": 299,
          "quantity": 11
        },
        {
          "quantityID": 300,
          "productID": 83,
          "sizeID": 300,
          "quantity": 25
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 84,
      "productName": "Áo Polo Nam, Chất Vải PE Cool Mát Lạnh",
      "productPrice": 339000,
      "productDescription": "Áo Polo Nam, Chất Vải PE Cool Mát Lạnh nổi bật với form dáng Slim fit ôm nhẹ vừa vặn, đảm bảo tôn dáng mà vẫn thoải mái khi vận động. Thiết kế basic khỏe khoắn, màu sắc cơ bản dễ dàng phối kết hợp với nhiều trang phục khác nhau mang đến diện mạo trẻ trung, lịch lãm cho nam giới.Họa tiết vệt màu tên vải đước sắp xếp tinh tế, tạo điểm nhấn nổi bật cho tổng thể chiếc áo Polo. Đây là item được ưa chuộng top đầu trong bộ sưu tập Xuân Hè.",
      "productImages": [
        {
          "imageID": 402,
          "productID": 84,
          "imagePath": "https://iili.io/JR6TJOg.jpg"
        },
        {
          "imageID": 403,
          "productID": 84,
          "imagePath": "https://iili.io/JR6T3zJ.jpg"
        },
        {
          "imageID": 404,
          "productID": 84,
          "imagePath": "https://iili.io/JR6TFWv.jpg"
        },
        {
          "imageID": 405,
          "productID": 84,
          "imagePath": "https://iili.io/JR6TKsR.jpg"
        },
        {
          "imageID": 406,
          "productID": 84,
          "imagePath": "https://iili.io/JR6Tqfp.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 301,
          "productID": 84,
          "sizeName": "S"
        },
        {
          "sizeID": 302,
          "productID": 84,
          "sizeName": "M"
        },
        {
          "sizeID": 303,
          "productID": 84,
          "sizeName": "L"
        },
        {
          "sizeID": 304,
          "productID": 84,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 301,
          "productID": 84,
          "sizeID": 301,
          "quantity": 32
        },
        {
          "quantityID": 302,
          "productID": 84,
          "sizeID": 302,
          "quantity": 43
        },
        {
          "quantityID": 303,
          "productID": 84,
          "sizeID": 303,
          "quantity": 123
        },
        {
          "quantityID": 304,
          "productID": 84,
          "sizeID": 304,
          "quantity": 53
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 85,
      "productName": "Áo Polo Nam, Thiết Kế Phối Màu Trẻ Trung",
      "productPrice": 339000,
      "productDescription": "Áo Polo Nam, Thiết Kế Phối Màu Trẻ Trung sở hữu phom dáng Slim fit ôm vừa vặn, tôn dáng tối đa mà không gây cảm giác bó sát khó chịu khi mặc. Thiết kế basic với cổ và tay áo dệt bo phối cùng họa tiết kẻ line phối 2 màu độc đáo mang đến diện mạo nam tính, khỏe khoắn cho phái mạnh. Đặc biệt, đây cũng là thiết kế dễ dàng phối với nhiều loại trang phục khác nhau để nam giới có thể mặc đi làm hay đi chơi đều phù hợp. ",
      "productImages": [
        {
          "imageID": 407,
          "productID": 85,
          "imagePath": "https://iili.io/JR6T1ee.jpg"
        },
        {
          "imageID": 408,
          "productID": 85,
          "imagePath": "https://iili.io/JR6TMzb.jpg"
        },
        {
          "imageID": 409,
          "productID": 85,
          "imagePath": "https://iili.io/JR6TVXj.jpg"
        },
        {
          "imageID": 410,
          "productID": 85,
          "imagePath": "https://iili.io/JR6ThqQ.jpg"
        },
        {
          "imageID": 411,
          "productID": 85,
          "imagePath": "https://iili.io/JR6Tj1V.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 305,
          "productID": 85,
          "sizeName": "S"
        },
        {
          "sizeID": 306,
          "productID": 85,
          "sizeName": "M"
        },
        {
          "sizeID": 307,
          "productID": 85,
          "sizeName": "L"
        },
        {
          "sizeID": 308,
          "productID": 85,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 305,
          "productID": 85,
          "sizeID": 305,
          "quantity": 53
        },
        {
          "quantityID": 306,
          "productID": 85,
          "sizeID": 306,
          "quantity": 12
        },
        {
          "quantityID": 307,
          "productID": 85,
          "sizeID": 307,
          "quantity": 23
        },
        {
          "quantityID": 308,
          "productID": 85,
          "sizeID": 308,
          "quantity": 123
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 86,
      "productName": "Áo Polo Nam, Chất Cotton USA Thoáng Mát",
      "productPrice": 389000,
      "productDescription": "Áo Polo Nam, Chất Cotton USA Thoáng Mát sở hữu phom dáng Slim fit ôm nhẹ vừa vặn mà vẫn linh hoạt, thoải mái trong mọi hoạt động hằng ngày. Áo Polo được thiết kế basic với điểm nhấn là phần cổ - tay áo dệt có phối đường line bắt mắt. Họa tiết dệt kẻ này góp phần mang đế diện mạo thu hút, nam tính và khỏe khoắn hơn cho người mặc. Với bảng màu đa dạng, bạn nam có thể dễ dàng chọn cho mình các màu sắc ưa thích, hợp với phong cách thời trang hằng ngày của mình.",
      "productImages": [
        {
          "imageID": 412,
          "productID": 86,
          "imagePath": "https://iili.io/JR6u2Y7.jpg"
        },
        {
          "imageID": 413,
          "productID": 86,
          "imagePath": "https://iili.io/JR6uFpe.jpg"
        },
        {
          "imageID": 414,
          "productID": 86,
          "imagePath": "https://iili.io/JR6uqhb.jpg"
        },
        {
          "imageID": 415,
          "productID": 86,
          "imagePath": "https://iili.io/JR6unCx.jpg"
        },
        {
          "imageID": 416,
          "productID": 86,
          "imagePath": "https://iili.io/JR6uoEQ.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 309,
          "productID": 86,
          "sizeName": "S"
        },
        {
          "sizeID": 310,
          "productID": 86,
          "sizeName": "M"
        },
        {
          "sizeID": 311,
          "productID": 86,
          "sizeName": "L"
        },
        {
          "sizeID": 312,
          "productID": 86,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 309,
          "productID": 86,
          "sizeID": 309,
          "quantity": 23
        },
        {
          "quantityID": 310,
          "productID": 86,
          "sizeID": 310,
          "quantity": 32
        },
        {
          "quantityID": 311,
          "productID": 86,
          "sizeID": 311,
          "quantity": 43
        },
        {
          "quantityID": 312,
          "productID": 86,
          "sizeID": 312,
          "quantity": 43
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 87,
      "productName": "Áo Polo Nam, Họa Tiết Dệt Kẻ Phối Trẻ Trung",
      "productPrice": 519000,
      "productDescription": "Áo Polo Nam, Họa Tiết Dệt Kẻ Phối Trẻ Trung có kiểu dáng Slim fit ôm vừa vặn với cơ thể, tôn dáng tối đa nhưng vẫn đảm bảo sự thoải mái trong các hoạt động hằng ngày. Áo được thiết kế khá đơn giản với cổ - tay áo bo rib, phối họa tiết kẻ dệt sang trọng, nam tính, dễ dàng kết hợp với nhiều loại trang phục khác nhau, để quý ông có thể tự tin diện đi làm hay đi chơi đều phù hợp. ",
      "productImages": [
        {
          "imageID": 417,
          "productID": 87,
          "imagePath": "https://iili.io/JR6uXun.jpg"
        },
        {
          "imageID": 418,
          "productID": 87,
          "imagePath": "https://iili.io/JR6uOG4.jpg"
        },
        {
          "imageID": 419,
          "productID": 87,
          "imagePath": "https://iili.io/JR6ue6l.jpg"
        },
        {
          "imageID": 420,
          "productID": 87,
          "imagePath": "https://iili.io/JR6uvF2.jpg"
        },
        {
          "imageID": 421,
          "productID": 87,
          "imagePath": "https://iili.io/JR6u8aS.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 313,
          "productID": 87,
          "sizeName": "S"
        },
        {
          "sizeID": 314,
          "productID": 87,
          "sizeName": "M"
        },
        {
          "sizeID": 315,
          "productID": 87,
          "sizeName": "L"
        },
        {
          "sizeID": 316,
          "productID": 87,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 313,
          "productID": 87,
          "sizeID": 313,
          "quantity": 58
        },
        {
          "quantityID": 314,
          "productID": 87,
          "sizeID": 314,
          "quantity": 51
        },
        {
          "quantityID": 315,
          "productID": 87,
          "sizeID": 315,
          "quantity": 94
        },
        {
          "quantityID": 316,
          "productID": 87,
          "sizeID": 316,
          "quantity": 65
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 88,
      "productName": "Áo Polo Nam, Thiết Kế Phối Kẻ Màu Trẻ Trung",
      "productPrice": 499000,
      "productDescription": "Áo Polo Nam, Thiết Kế Phối Kẻ Màu Trẻ Trung nổi bật với kiểu dáng Slim fit ôm nhẹ vừa vặn, đảm bảo cảm giác thoải mái, dễ chịu khi vận động. Điểm nhấn của thiết kế áo Polo này nằm ở phần dệt kẻ tạo họa tiết độc đáo và hút mắt, mang đến diện mạo thời thượng mà không kém phần trẻ trung cho nam giới. \r\n\r\n",
      "productImages": [
        {
          "imageID": 422,
          "productID": 88,
          "imagePath": "https://iili.io/JR6AFFp.png"
        },
        {
          "imageID": 423,
          "productID": 88,
          "imagePath": "https://iili.io/JR6AKcN.jpg"
        },
        {
          "imageID": 424,
          "productID": 88,
          "imagePath": "https://iili.io/JR6AB9t.jpg"
        },
        {
          "imageID": 425,
          "productID": 88,
          "imagePath": "https://iili.io/JR6ACAX.jpg"
        },
        {
          "imageID": 426,
          "productID": 88,
          "imagePath": "https://iili.io/JR6AnNn.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 317,
          "productID": 88,
          "sizeName": "S"
        },
        {
          "sizeID": 318,
          "productID": 88,
          "sizeName": "M"
        },
        {
          "sizeID": 319,
          "productID": 88,
          "sizeName": "L"
        },
        {
          "sizeID": 320,
          "productID": 88,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 317,
          "productID": 88,
          "sizeID": 317,
          "quantity": 43
        },
        {
          "quantityID": 318,
          "productID": 88,
          "sizeID": 318,
          "quantity": 51
        },
        {
          "quantityID": 319,
          "productID": 88,
          "sizeID": 319,
          "quantity": 61
        },
        {
          "quantityID": 320,
          "productID": 88,
          "sizeID": 320,
          "quantity": 92
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 122,
      "productName": "Áo Polo Nam, Phong Cách Thể Thao, Trẻ Trung",
      "productPrice": 479000,
      "productDescription": "Áo Polo Nam, Phong Cách Thể Thao, Trẻ Trung nổi bật với kiểu dáng Slim fit ôm vừa vặn, tôn dáng nhưng vẫn đảm bảo thoải mái khi mặc. Thiết kế phối vải khỏe khoắn kết hợp cùng đường line chạy dọc cổ áo và vai áo, mang đến phong cách thể thao, nam tính cho người mặc. Logo Perfect Life ở ngực trái của áo bền đẹp, tỉ mỉ, đảm bảo không bong tróc trong quá trình sử dụng hay giặt là. Cổ áo và tay áo được dệt bo đứng phom, thanh lịch để nam giới tự tin mặc đi học, đi làm hay đi chơi đều phù hợp. \r\n\r\nSự kết hợp của các thành phần chất liệu là Viscose, Freezing Nylon và Spandex mang tới trải nghiệm mềm mại, thoáng mát tối đa cho chiếc áo Polo. Chất vải này cũng tăng tốc độ hút ẩm, bay hơi nhanh chóng, thấm hút mồ hôi tốt, phù hợp với cả những ngày thời tiết oi nóng, cơ thể đổ nhiều mồ hôi mà không lo bí bách hay có mùi khó chịu khi mặc. ",
      "productImages": [
        {
          "imageID": 616,
          "productID": 122,
          "imagePath": "https://iili.io/JR6BkoN.jpg"
        },
        {
          "imageID": 617,
          "productID": 122,
          "imagePath": "https://iili.io/JR6BvVI.jpg"
        },
        {
          "imageID": 618,
          "productID": 122,
          "imagePath": "https://iili.io/JR6B8Pt.jpg"
        },
        {
          "imageID": 619,
          "productID": 122,
          "imagePath": "https://iili.io/JR6Bgln.jpg"
        },
        {
          "imageID": 620,
          "productID": 122,
          "imagePath": "https://iili.io/JR6BiN4.jpg"
        },
        {
          "imageID": 621,
          "productID": 122,
          "imagePath": "https://iili.io/JR6BQx2.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 451,
          "productID": 122,
          "sizeName": "S"
        },
        {
          "sizeID": 452,
          "productID": 122,
          "sizeName": "M"
        },
        {
          "sizeID": 453,
          "productID": 122,
          "sizeName": "L"
        },
        {
          "sizeID": 454,
          "productID": 122,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 451,
          "productID": 122,
          "sizeID": 451,
          "quantity": 43
        },
        {
          "quantityID": 452,
          "productID": 122,
          "sizeID": 452,
          "quantity": 21
        },
        {
          "quantityID": 453,
          "productID": 122,
          "sizeID": 453,
          "quantity": 31
        },
        {
          "quantityID": 454,
          "productID": 122,
          "sizeID": 454,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 123,
      "productName": "Áo Polo Nam, Kiểu Dáng Regular Fit Thoải Mái",
      "productPrice": 489000,
      "productDescription": "Áo Polo Nam, Kiểu Dáng Regular Fit Thoải Mái suông nhẹ nhưng vẫn ôm vừa đủ, mang tới vẻ ngoài trẻ trung, lịch lãm mà vẫn thoải mái cho người mặc. Áo Polo nổi bật với hiết kế basic, cổ và tay áo cùng màu với vải chính, màu sắc trung tính, hoạt tiết dệt Jaccquard thời trrang tạo điểm nhấn sang trọng, lịch lãm cho nam giới. Đây được xem là item bán chạy nhất hiện nay.\r\n\r\nChất liệu Freezing Nylon hay còn được biết đến với tên gọi khác là thun lạnh siêu mềm, co giãn cực tốt giúp hạn chế tối đa nhăn nhàu khi mặc. Công nghệ Freezing Nylon tối ưu nhiệt, giảm ngay từ 5-7 độ khi mặc trong thời tiết oi bức của mùa hè. Ngoài ra, khi kết hợp thêm thành phần Polyester và Spandex giúp vải có những hiệu ứng melange đẹp mắt cùng với đó là những tính năng mà Polyester có thể bổ trợ cho Freezing Nylon như: Tăng độ bền vải, tăng khả năng thấm hút mồ hôi và giúp sản phẩm nhanh khô.\r\n\r\nVới bàng màu lạ mắt, vừa nhã nhặn, vừa tinh tế, chiếc áo Polo nam này xứng đáng là item \"cần có\" trong tủ đồ của các quý ông để diện trong bất kỳ hoàn cảnh nào, mang tới cho nam giới vẻ ngoài chỉn chu và thu hút. ",
      "productImages": [
        {
          "imageID": 622,
          "productID": 123,
          "imagePath": "https://iili.io/JR6qfIV.jpg"
        },
        {
          "imageID": 623,
          "productID": 123,
          "imagePath": "https://iili.io/JR6qnB1.jpg"
        },
        {
          "imageID": 624,
          "productID": 123,
          "imagePath": "https://iili.io/JR6qoEF.jpg"
        },
        {
          "imageID": 625,
          "productID": 123,
          "imagePath": "https://iili.io/JR6qI2a.jpg"
        },
        {
          "imageID": 626,
          "productID": 123,
          "imagePath": "https://iili.io/JR6qTYJ.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 455,
          "productID": 123,
          "sizeName": "S"
        },
        {
          "sizeID": 456,
          "productID": 123,
          "sizeName": "M"
        },
        {
          "sizeID": 457,
          "productID": 123,
          "sizeName": "L"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 455,
          "productID": 123,
          "sizeID": 455,
          "quantity": 83
        },
        {
          "quantityID": 456,
          "productID": 123,
          "sizeID": 456,
          "quantity": 49
        },
        {
          "quantityID": 457,
          "productID": 123,
          "sizeID": 457,
          "quantity": 12
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 124,
      "productName": "Áo Sơ Mi Nam Dài Tay, Vải Bamboom Kháng Khuẩn Tự Nhiên",
      "productPrice": 629000,
      "productDescription": "Áo Sơ Mi Nam Dài Tay, Vải Bamboom Kháng Khuẩn Tự Nhiên sở hữu thiết kế phom Slim fit ôm nhẹ vừa vặn, tôn dáng mà vẫn thoải mái trong từng hoạt động. Thiết kế vạt lượn chỉn chu kết hợp cùng công nghệ vải không nhăn giúp nam giới tiết kiệm thời gian là ủi mà vẫn giữ được dáng vẻ thanh lịch suốt cả ngày dài.\r\n\r\nÁo sơ mi dài tay được nâng cấp từ phiên bản Bamboo sợi tre được nghiên cứu và ứng dụng với tính nắng chống nhăn tự nhiên. Việc bổ sung thêm sợi Microfiber có cấu trúc siêu mảnh, độ mịn gấp đôi so với sợi tơ. Đây là một trong những chất liệu đặc biệt an toàn, thân thiên với môi trường và làn da người dùng. \r\n\r\nKhi kết hợp Bamboo và Microfiber sẽ đem lại cảm giác mềm mại tuyệt vời, thoải mái hơn cho người mặc, khả năng kháng khuẩn cao đến 90% và chống ẩm mốc vượt trội hơn so với các chất liệu thông thường. ",
      "productImages": [
        {
          "imageID": 627,
          "productID": 124,
          "imagePath": "https://iili.io/JRs15yG.jpg"
        },
        {
          "imageID": 628,
          "productID": 124,
          "imagePath": "https://iili.io/JRs1Yuf.jpg"
        },
        {
          "imageID": 629,
          "productID": 124,
          "imagePath": "https://iili.io/JRs1aj4.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 458,
          "productID": 124,
          "sizeName": "S"
        },
        {
          "sizeID": 459,
          "productID": 124,
          "sizeName": "M"
        },
        {
          "sizeID": 460,
          "productID": 124,
          "sizeName": "L"
        },
        {
          "sizeID": 461,
          "productID": 124,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 458,
          "productID": 124,
          "sizeID": 458,
          "quantity": 93
        },
        {
          "quantityID": 459,
          "productID": 124,
          "sizeID": 459,
          "quantity": 48
        },
        {
          "quantityID": 460,
          "productID": 124,
          "sizeID": 460,
          "quantity": 49
        },
        {
          "quantityID": 461,
          "productID": 124,
          "sizeID": 461,
          "quantity": 51
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 125,
      "productName": "Áo Sơ Mi Ngắn Tay Nam, Phom Dáng Casual Fit Thoải Mái",
      "productPrice": 609000,
      "productDescription": "Áo Sơ Mi Ngắn Tay Nam, Phom Dáng Casual Fit Thoải Mái suông nhẹ, vừa vặn, đảm bảo cảm giác thoải mái trong mọi hoạt động. Thiết kế đơn giản, tà lượn, không túi cùng màu xanh phối với các đường kẻ line thời thượng. Logo Premium vừa mang tới diện mạo thanh lịch, tinh tế, cho các quý ông, vừa đảm bảo đây là mẫu thiết kế độc quyền chính hãng. Điểm nhấn của mẫu áo này nằm ở phần cổ áo với 2 cúc cài lạ mắt được thiết kế song song, vừa trẻ trung, vừa thanh lịch.\r\n\r\nÁo sơ mi Bamboo vải sợi tre đã không còn quá xa lạ, nay được cải tiến hơn với phiên bản nâng cấp thành phần chất liệu: 50% Bamboo & 50% Microfiber. Sợi Microfiber có cấu trúc siêu mảnh, độ mịn gấp đôi so với sợi tơ. Đây là một trong những chất liệu đặc biệt an toàn và thân thiện với người dùng. Sự kết hợp hoàn hảo giữa sợi tre Bamboo và sợi Microfiber sẽ đem lại cảm giác mềm mại tuyệt vời, thoải mái hơn cho người mặc, khả năng kháng khuẩn cao đến 90% và chống ẩm mốc vượt trội hơn chất liệu thông thường.",
      "productImages": [
        {
          "imageID": 630,
          "productID": 125,
          "imagePath": "https://iili.io/JRs133F.jpg"
        },
        {
          "imageID": 631,
          "productID": 125,
          "imagePath": "https://iili.io/JRs1Kva.jpg"
        },
        {
          "imageID": 632,
          "productID": 125,
          "imagePath": "https://iili.io/JRs1fyJ.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 462,
          "productID": 125,
          "sizeName": "S"
        },
        {
          "sizeID": 463,
          "productID": 125,
          "sizeName": "M"
        },
        {
          "sizeID": 464,
          "productID": 125,
          "sizeName": "L"
        },
        {
          "sizeID": 465,
          "productID": 125,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 462,
          "productID": 125,
          "sizeID": 462,
          "quantity": 59
        },
        {
          "quantityID": 463,
          "productID": 125,
          "sizeID": 463,
          "quantity": 84
        },
        {
          "quantityID": 464,
          "productID": 125,
          "sizeID": 464,
          "quantity": 42
        },
        {
          "quantityID": 465,
          "productID": 125,
          "sizeID": 465,
          "quantity": 85
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 126,
      "productName": "Áo Sơ Mi Ngắn Tay Nam, Vải Bamboo, Thoáng Khí",
      "productPrice": 619000,
      "productDescription": "Áo Sơ Mi Nam Ngắn Tay, Vải Bamboo, Thoáng Khí có kiểu dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn đảm bảo cảm giác thoải mái khi mặc. Áo sơ mi được thiết kế basic, dễ mặc, dễ phối, phù hợp với nhiều hoàn cảnh, sự kiện khác nhau. Họa tiết kẻ caro xanh phối trắng trẻ trung, nam tính mà vẫn đảm bảo dáng vẻ thanh lịch, sang trọng cho các quý ông.\r\n\r\nChất vải Bamboo là loại sợi tổng hợp được tạo nên bởi cellulose tách từ cây tre. Vải bamboo có đặc tính thoáng khí mát mẻ, chống tia cực tím, kháng khuẩn, khử mùi tốt và vô cùng thân thiện với môi trường bởi được tạo bởi chất liệu tre không sử dụng hóa chất, an toàn cho người sử dụng. Bổ sung tỉ lệ Microfiber và Spandex mang lại ưu điểm: Giảm độ nhăn, tăng độ bền của vải, màu sắc bắt mắt hơn cho chiếc áo sơ mi.",
      "productImages": [
        {
          "imageID": 633,
          "productID": 126,
          "imagePath": "https://iili.io/JRQOa4a.jpg"
        },
        {
          "imageID": 634,
          "productID": 126,
          "imagePath": "https://iili.io/JRQOl3J.jpg"
        },
        {
          "imageID": 635,
          "productID": 126,
          "imagePath": "https://iili.io/JRQO0Yv.jpg"
        },
        {
          "imageID": 636,
          "productID": 126,
          "imagePath": "https://iili.io/JRQO1vR.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 466,
          "productID": 126,
          "sizeName": "S"
        },
        {
          "sizeID": 467,
          "productID": 126,
          "sizeName": "M"
        },
        {
          "sizeID": 468,
          "productID": 126,
          "sizeName": "L"
        },
        {
          "sizeID": 469,
          "productID": 126,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 466,
          "productID": 126,
          "sizeID": 466,
          "quantity": 58
        },
        {
          "quantityID": 467,
          "productID": 126,
          "sizeID": 467,
          "quantity": 34
        },
        {
          "quantityID": 468,
          "productID": 126,
          "sizeID": 468,
          "quantity": 83
        },
        {
          "quantityID": 469,
          "productID": 126,
          "sizeID": 469,
          "quantity": 49
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 127,
      "productName": "Áo Sơ Mi Ngắn Tay Nam, Vải Bamboo, Kháng Khuẩn",
      "productPrice": 619000,
      "productDescription": "Sơ Mi Cộc Tay Nam, Vải Bamboo, Kháng Khuẩn, Thoáng Mát nổi bật với kiểu dáng Slim fit ôm sát vừa vặn mà không gây cảm giác gò bó khi mặc. Thiết kế basic, cổ áo đứng phom với họa tiết kẻ caro xanh biển tươi mát, trẻ trung, là item không thể thiếu trong tủ đồ của nam giới trong mùa hè này. \r\n\r\nÁo sơ mi được làm từ chất liệu Bamboo được dệt từ 100% sợi tre nhự nhiên, vô cùng mềm mại, chống nhăn nhau, lành tính với làn da, đem tới cảm giác thoải mái, mềm mát khi mặc. Đặc biệt, việc bổ sung thêm thành phần Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái. Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.",
      "productImages": [
        {
          "imageID": 637,
          "productID": 127,
          "imagePath": "https://iili.io/JRQOVjI.jpg"
        },
        {
          "imageID": 638,
          "productID": 127,
          "imagePath": "https://iili.io/JRQOWQt.jpg"
        },
        {
          "imageID": 639,
          "productID": 127,
          "imagePath": "https://iili.io/JRQOhCX.jpg"
        },
        {
          "imageID": 640,
          "productID": 127,
          "imagePath": "https://iili.io/JRQOjGn.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 470,
          "productID": 127,
          "sizeName": "S"
        },
        {
          "sizeID": 471,
          "productID": 127,
          "sizeName": "M"
        },
        {
          "sizeID": 472,
          "productID": 127,
          "sizeName": "L"
        },
        {
          "sizeID": 473,
          "productID": 127,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 470,
          "productID": 127,
          "sizeID": 470,
          "quantity": 58
        },
        {
          "quantityID": 471,
          "productID": 127,
          "sizeID": 471,
          "quantity": 34
        },
        {
          "quantityID": 472,
          "productID": 127,
          "sizeID": 472,
          "quantity": 83
        },
        {
          "quantityID": 473,
          "productID": 127,
          "sizeID": 473,
          "quantity": 49
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 128,
      "productName": "Họa Tiết Trắng Kẻ Xanh Biển",
      "productPrice": 509000,
      "productDescription": "Áo Sơ Mi Nam Cộc Tay, Họa Tiết Trắng Kẻ Xanh Biển là thiết kế mới nhất trong bộ sưu tập Công sở Xuân Hè của 5S Fashion với kiểu dáng Slim fit vừa vặn, tôn dáng. Thiết kế đơn giản, vạt lượn, không túi cùng cổ áo đứng lịch sự. Màu sắc trắng kẻ xanh biển lịch lãm, thời thượng tạo nên dấu ấn thanh lịch, nam tính cho quý ông.\r\n\r\nÁo sơ mi được làm từ chất liệu Bamboo được dệt từ các sợi Cenlulose đến từ cây Tre tự nhiên sở hữu những ưu điểm vượt trội như kháng khuẩn, thấm hút mồ hôi tốt, chống tia UV và ngăn ngừa sự xuất hiện của vi khuẩn, nấm mốc trên quần áo, mềm mại nên rất an toàn với làn da người mặc. Vệc kết hợp thêm với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái. Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.",
      "productImages": [
        {
          "imageID": 641,
          "productID": 128,
          "imagePath": "https://iili.io/JRQO4n9.jpg"
        },
        {
          "imageID": 642,
          "productID": 128,
          "imagePath": "https://iili.io/JRL3nbR.jpg"
        },
        {
          "imageID": 643,
          "productID": 128,
          "imagePath": "https://iili.io/JRL3xxp.jpg"
        },
        {
          "imageID": 644,
          "productID": 128,
          "imagePath": "https://iili.io/JRL3zWN.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 474,
          "productID": 128,
          "sizeName": "S"
        },
        {
          "sizeID": 475,
          "productID": 128,
          "sizeName": "M"
        },
        {
          "sizeID": 476,
          "productID": 128,
          "sizeName": "L"
        },
        {
          "sizeID": 477,
          "productID": 128,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 474,
          "productID": 128,
          "sizeID": 474,
          "quantity": 51
        },
        {
          "quantityID": 475,
          "productID": 128,
          "sizeID": 475,
          "quantity": 47
        },
        {
          "quantityID": 476,
          "productID": 128,
          "sizeID": 476,
          "quantity": 84
        },
        {
          "quantityID": 477,
          "productID": 128,
          "sizeID": 477,
          "quantity": 49
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 129,
      "productName": "Áo Sơ Mi Nam Ngắn Tay, Vải Bamboo, Chống Tia Cực Tím",
      "productPrice": 519000,
      "productDescription": "Áo Sơ Mi Nam Ngắn Tay, Vải Bamboo, Chống Tia Cực Tím có kiểu dáng Slim fit vừa vặn, tôn dáng mà vẫn đảm bảo cảm giác thoải mái trong mọi hoạt động. Áo được thiết kế basic với tà lượn, không túi cùng cổ áo đứng phom lịch sự. Điểm nhấn nằm ở họa tiết trắng kẻ xanh lịch lãm, thời thượng, mang đến diện mạo sang trọng và nam tính cho các quý ông. \r\n\r\nÁo được làm từ chất vải Bamboo sở hữu hàng loạt các ưu điểm như thấm hút tốt hơn sợi Cotton tới 60%, mềm mượt nhưng vẫn giữ được phom dáng, chống nhăn hiệu quả, kháng khuẩn tự nhiên, khử mùi, chống tia UV và tăng cường khả năng bảo vệ da. Có thể nói đây là chiếc áo sơ mi giúp giải quyết nỗi lo về sự gò bò, tạo cảm giác thoải mái mà vẫn đảm bảo vẻ ngoài chỉn chu, lịch sự cho các quý ông. ",
      "productImages": [
        {
          "imageID": 645,
          "productID": 129,
          "imagePath": "https://iili.io/JRQObwB.jpg"
        },
        {
          "imageID": 646,
          "productID": 129,
          "imagePath": "https://iili.io/JRLqj6B.jpg"
        },
        {
          "imageID": 647,
          "productID": 129,
          "imagePath": "https://iili.io/JRLqN3P.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 478,
          "productID": 129,
          "sizeName": "S"
        },
        {
          "sizeID": 479,
          "productID": 129,
          "sizeName": "M"
        },
        {
          "sizeID": 480,
          "productID": 129,
          "sizeName": "L"
        },
        {
          "sizeID": 481,
          "productID": 129,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 478,
          "productID": 129,
          "sizeID": 478,
          "quantity": 48
        },
        {
          "quantityID": 479,
          "productID": 129,
          "sizeID": 479,
          "quantity": 43
        },
        {
          "quantityID": 480,
          "productID": 129,
          "sizeID": 480,
          "quantity": 81
        },
        {
          "quantityID": 481,
          "productID": 129,
          "sizeID": 481,
          "quantity": 83
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 130,
      "productName": "Áo Sơ Mi Nam Ngắn Tay, Vải Bamboo, Kháng Khuẩn",
      "productPrice": 579000,
      "productDescription": "Áo Sơ Mi Ngắn Tay Nam, Vải Bamboo, Kháng khuẩn, Khử Mùi sở hữu kiểu dáng Slim fit ôm vừa vặn, tôn dáng, đảm bảo cảm giác thoải mái, dễ dàng trong mọi hoạt động. Với thiết kế chỉn chu đến từng chi tiết như cổ áo đứng phom, tà lượn, không túi tạo cảm giác thoải mái, phù hợp với nhiều sự kiện và hoàn cảnh. Điểm nhấn của áo sơ mi nằm ở họa tiết chấm in trên nền vải trắng tạo hiệu ứng nổi bật, mang đến phong cách thời trang lịch lãm, thời thượng cho các quý ông. Đây là item áo sơ mi họa tiết luôn nằm trong top bán chạy của 5S Fashion.\r\n\r\nChất liệu Bamboo được dệt từ các sợi Tre tự nhiên sở hữu hàng loạt những ưu điểm như thoáng khí mát mẻ, chống tia cực tím, kháng khuẩn, khử mùi tốt và vô cùng thân thiện với môi trường... Việc kết hợp với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái. Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.",
      "productImages": [
        {
          "imageID": 648,
          "productID": 130,
          "imagePath": "https://iili.io/JRQedFa.jpg"
        },
        {
          "imageID": 649,
          "productID": 130,
          "imagePath": "https://iili.io/JRQe2cJ.jpg"
        },
        {
          "imageID": 650,
          "productID": 130,
          "imagePath": "https://iili.io/JRQe38v.jpg"
        },
        {
          "imageID": 651,
          "productID": 130,
          "imagePath": "https://iili.io/JRQefup.jpg"
        },
        {
          "imageID": 652,
          "productID": 130,
          "imagePath": "https://iili.io/JRQeBtI.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 482,
          "productID": 130,
          "sizeName": "S"
        },
        {
          "sizeID": 483,
          "productID": 130,
          "sizeName": "M"
        },
        {
          "sizeID": 484,
          "productID": 130,
          "sizeName": "L"
        },
        {
          "sizeID": 485,
          "productID": 130,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 482,
          "productID": 130,
          "sizeID": 482,
          "quantity": 41
        },
        {
          "quantityID": 483,
          "productID": 130,
          "sizeID": 483,
          "quantity": 43
        },
        {
          "quantityID": 484,
          "productID": 130,
          "sizeID": 484,
          "quantity": 85
        },
        {
          "quantityID": 485,
          "productID": 130,
          "sizeID": 485,
          "quantity": 83
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 134,
      "productName": "Áo Sơ Mi Cộc Tay, Vải Bamboo Kháng Khuẩn, Không Nhăn",
      "productPrice": 559000,
      "productDescription": "Áo Sơ Mi Cộc Tay, Vải Bamboo Kháng Khuẩn, Không Nhăn được thiết kế theo form dáng Slim fit với kiểu dáng ôm vừa vặn, tôn dáng mà vẫn đảm bảo trải nghiệm thoải mái khi vận động. Điểm nhấn của mẫu áo này nằm ở họa tiết kẻ sọc trắng xanh trẻ trung, thanh lịch, phù hợp với các quý ông công sở. Bên cạnh đó, item áo sơ mi cộc tay này cũng không quá kén dáng khi có thể phối được với hầu hết các trang phuc có trong tủ đồ của bạn nam.\r\n\r\nÁo được làm từ chất liệu Tre tự nhiên với các ưu điểm như thoáng khí mát mẻ, chống tia cực tím, kháng khuẩn, khử mùi tốt và đặc biệt thân thiên với môi trường khi được tạo nên từ các sợi Cellulose tách từ cây tre tự, không dùng hóa chất nên an toàn với cả làn da người mặc. Khi kết hợp với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái. Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.",
      "productImages": [
        {
          "imageID": 662,
          "productID": 134,
          "imagePath": "https://iili.io/JRQeIFs.jpg"
        },
        {
          "imageID": 663,
          "productID": 134,
          "imagePath": "https://iili.io/JRQeTcG.jpg"
        },
        {
          "imageID": 664,
          "productID": 134,
          "imagePath": "https://iili.io/JRQeuSf.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 498,
          "productID": 134,
          "sizeName": "S"
        },
        {
          "sizeID": 499,
          "productID": 134,
          "sizeName": "M"
        },
        {
          "sizeID": 500,
          "productID": 134,
          "sizeName": "L"
        },
        {
          "sizeID": 501,
          "productID": 134,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 498,
          "productID": 134,
          "sizeID": 498,
          "quantity": 14
        },
        {
          "quantityID": 499,
          "productID": 134,
          "sizeID": 499,
          "quantity": 43
        },
        {
          "quantityID": 500,
          "productID": 134,
          "sizeID": 500,
          "quantity": 21
        },
        {
          "quantityID": 501,
          "productID": 134,
          "sizeID": 501,
          "quantity": 30
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 135,
      "productName": "Áo Sơ Mi Nam Ngắn Tay, Vải Modal, Thoáng Khí, Chống Nhăn",
      "productPrice": 569000,
      "productDescription": "Áo Sơ Mi Nam Ngắn Tay, Vải Modal, Thoáng Khí, Chống Nhăn là mẫu áo sở hữu kiểu áo Casual fit thoải mái, dễ mặc, phù hợp với mọi dáng người và mọi độ tuổi. Áo được thiết kế basic với tà bằng trẻ trung mà không kém phần chỉn chu, thanh lịch. \r\n\r\nÁo được làm từ chất liệu Microfiber với cấu trúc sợi siêu mảnh, độ mịn gấp đôi so với sợi tơi, là một trong những chất vải an toàn, thân thiện với môi trường và làn da người mặc. Trong khi đó, Modal là loại vải có nguồn gốc từ gỗ của cây sồi, an toàn với người sử dụng và thân thiện với môi trường. Chất liệu vải Modal có đặc tính mềm mịn, chống nhăn, đàn hồi tốt và hút ẩm cao hơn cotton đến 48%. Kết hợp Modal với Mirofiber giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể.\r\n\r\nThêm vào đó, sự góp mặt của Cotton giúp vải thành phẩm có giá tối ưu hơn mà vẫn giữ được các tính năng thấm hút, thoáng mát của vải & tạo hiệu ứng bề mặt khô hơn giống như những chiếc sơ mi Cotton phong cách casual nhưng vẫn giữ được độ sang trọng cao cấp của vải Modal. ",
      "productImages": [
        {
          "imageID": 665,
          "productID": 135,
          "imagePath": "https://iili.io/JRQegHv.jpg"
        },
        {
          "imageID": 666,
          "productID": 135,
          "imagePath": "https://iili.io/JRQerRR.jpg"
        },
        {
          "imageID": 667,
          "productID": 135,
          "imagePath": "https://iili.io/JRQe4Np.jpg"
        },
        {
          "imageID": 668,
          "productID": 135,
          "imagePath": "https://iili.io/JRQe6DN.jpg"
        },
        {
          "imageID": 669,
          "productID": 135,
          "imagePath": "https://iili.io/JRQeixI.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 502,
          "productID": 135,
          "sizeName": "S"
        },
        {
          "sizeID": 503,
          "productID": 135,
          "sizeName": "M"
        },
        {
          "sizeID": 504,
          "productID": 135,
          "sizeName": "L"
        },
        {
          "sizeID": 505,
          "productID": 135,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 502,
          "productID": 135,
          "sizeID": 502,
          "quantity": 43
        },
        {
          "quantityID": 503,
          "productID": 135,
          "sizeID": 503,
          "quantity": 31
        },
        {
          "quantityID": 504,
          "productID": 135,
          "sizeID": 504,
          "quantity": 51
        },
        {
          "quantityID": 505,
          "productID": 135,
          "sizeID": 505,
          "quantity": 49
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 136,
      "productName": "Áo Sơ Mi Cộc Tay Nam, Vải Bamboo Kháng Khuẩn",
      "productPrice": 609000,
      "productDescription": "Áo Sơ Mi Cộc Tay Nam, Vải Bamboo Kháng Khuẩn nổi bật với kiểu dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn thoải mái trong mọi hoạt động. Sự kết hợp giữa các đường kẻ tạo nên thiết kế áo sơ mi vừa lịch lãm, vừa trẻ trung, nam tính. Áo sơ mi có tone màu xanh blue tươi mát trên nền chất liệu Bamboo mềm mại, thoáng khí mang tới trải nghiệm thoải mái tối đa cho quý ông công sở.\r\n\r\nÁo được làm từ chất liệu Bamboo tự nhiên - một loại sợi tổng hợp được tạo nên bởi cellulose tách từ cây tre. Vải bamboo có đặc tính thoáng khí mát mẻ, chống tia cực tím, kháng khuẩn, khử mùi tốt và vô cùng thân thiện với môi trường bởi được tạo bởi chất liệu tre không sử dụng hóa chất, an toàn cho người sử dụng. Loại vải này rất mềm và mướt nên có thể giảm thiểu độ ma sát với làn da, không gây kích ứng và phù hợp với làn da nhạy cảm.\r\n\r\nKết hợp với Mirofiber - một loại sợi gốc Polyester/Polyamide với tỉ lệ 80/20 có kích thước nhỏ cỡ micro mét tạo cảm giác mềm mịn thoải mái. Do các sợi nhỏ cỡ micro nên mật độ sợi dày hơn giúp vải thành phẩm bền và ổn định hơn, giảm độ co rút và giảm nhăn đáng kể. Bổ sung thêm thành phần Spandex giúp cho áo có độ co giãn nhẹ để người mặc thoải mái hơn trong mọi hoạt động. ",
      "productImages": [
        {
          "imageID": 670,
          "productID": 136,
          "imagePath": "https://iili.io/JRQemJf.jpg"
        },
        {
          "imageID": 671,
          "productID": 136,
          "imagePath": "https://iili.io/JRQepR4.jpg"
        },
        {
          "imageID": 672,
          "productID": 136,
          "imagePath": "https://iili.io/JRQeyOl.jpg"
        },
        {
          "imageID": 673,
          "productID": 136,
          "imagePath": "https://iili.io/JRQk9b2.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 506,
          "productID": 136,
          "sizeName": "S"
        },
        {
          "sizeID": 507,
          "productID": 136,
          "sizeName": "M"
        },
        {
          "sizeID": 508,
          "productID": 136,
          "sizeName": "L"
        },
        {
          "sizeID": 509,
          "productID": 136,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 506,
          "productID": 136,
          "sizeID": 506,
          "quantity": 43
        },
        {
          "quantityID": 507,
          "productID": 136,
          "sizeID": 507,
          "quantity": 31
        },
        {
          "quantityID": 508,
          "productID": 136,
          "sizeID": 508,
          "quantity": 51
        },
        {
          "quantityID": 509,
          "productID": 136,
          "sizeID": 509,
          "quantity": 49
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 138,
      "productName": "Áo Sơ Mi Cộc Tay Nam, Vải Bamboo Kháng Khuẩn",
      "productPrice": 539000,
      "productDescription": "Áo Sơ Mi Cộc Tay Nam, Vải Modal, Mềm Mịn, Co Giãn, Thoáng Mát là mẫu áo sở hữu kiểu dáng Slim fit tôn dáng, dễ mặc cùng màu trắng basic chưa bao giờ lỗi mốt. Với form áo hơi ôm, vạt bằng thoải mái, áo mang tới diện mạo thanh lịch, khỏe khoắn mà không kém phần trẻ trung cho nam giới, phù hợp với mọi dáng người và mọi độ tuổi. Đây là item mà các chàng trai công sở nhất định phải sở hữu ít nhất một chiếc trong tủ đồ của mình. \r\n\r\nVới thành phần 100% Cotton được dệt từ các sợi bông tự nhiên, sờ vào mịn tay, thoáng mát, thấm hút mồ hôi tốt nên đặc biệt phù hợp với thời tiết mùa hè oi bức, giúp nam giới tự tin suốt cả ngày dài. Chất liệu thiên nhiên nên mẫu áo này rất an toàn với người sử dụng và thân thiện với môi trường. ",
      "productImages": [
        {
          "imageID": 678,
          "productID": 138,
          "imagePath": "https://iili.io/JRQkC5x.jpg"
        },
        {
          "imageID": 679,
          "productID": 138,
          "imagePath": "https://iili.io/JRQknOQ.jpg"
        },
        {
          "imageID": 680,
          "productID": 138,
          "imagePath": "https://iili.io/JRQkobV.jpg"
        },
        {
          "imageID": 681,
          "productID": 138,
          "imagePath": "https://iili.io/JRQkIWP.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 514,
          "productID": 138,
          "sizeName": "S"
        },
        {
          "sizeID": 515,
          "productID": 138,
          "sizeName": "M"
        },
        {
          "sizeID": 516,
          "productID": 138,
          "sizeName": "L"
        },
        {
          "sizeID": 517,
          "productID": 138,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 514,
          "productID": 138,
          "sizeID": 514,
          "quantity": 43
        },
        {
          "quantityID": 515,
          "productID": 138,
          "sizeID": 515,
          "quantity": 31
        },
        {
          "quantityID": 516,
          "productID": 138,
          "sizeID": 516,
          "quantity": 51
        },
        {
          "quantityID": 517,
          "productID": 138,
          "sizeID": 517,
          "quantity": 49
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    },
    {
      "productID": 139,
      "productName": "Áo Sơ Mi Ngắn Tay Nam, Chống Nhăn, Kháng Khuẩn",
      "productPrice": 479000,
      "productDescription": "Áo Sơ Mi Ngắn Tay Nam, Chống Nhăn, Kháng Khuẩn với kiểu dáng Slimfit ôm nhẹ, vừa vặn mà vẫn đảm bảo cảm giác thoải mái khi vận động. Áo được thiết kế basic với tà bằng không túi, tone màu trắng đơn giản nhưng tinh tế, ấn tượng mang đến phong thái chuyên nghiệp, nam tính và lịch lãm cho các quý ông. \r\n\r\nChất vải 50% Bamboo + 50% Polyester có đặc tính thoáng khí mát mẻ, kháng khuẩn, khử mùi cực tốt nên rất thích hợp mặc trong những ngày hè oi nóng. Sợi Polyester có kích thước siêu nhỏ tạo cảm giác mềm mịn, đồng thời, giúp áo sơ mi bền đẹp, giảm co rút và chống nhăn hiệu quả",
      "productImages": [
        {
          "imageID": 682,
          "productID": 139,
          "imagePath": "https://iili.io/JRQkXgs.jpg"
        },
        {
          "imageID": 683,
          "productID": 139,
          "imagePath": "https://iili.io/JRQkjdG.jpg"
        },
        {
          "imageID": 684,
          "productID": 139,
          "imagePath": "https://iili.io/JRQkw7f.jpg"
        },
        {
          "imageID": 685,
          "productID": 139,
          "imagePath": "https://iili.io/JRQkNe4.jpg"
        }
      ],
      "productSizes": [
        {
          "sizeID": 518,
          "productID": 139,
          "sizeName": "S"
        },
        {
          "sizeID": 519,
          "productID": 139,
          "sizeName": "M"
        },
        {
          "sizeID": 520,
          "productID": 139,
          "sizeName": "L"
        },
        {
          "sizeID": 521,
          "productID": 139,
          "sizeName": "XL"
        }
      ],
      "productQuantities": [
        {
          "quantityID": 518,
          "productID": 139,
          "sizeID": 518,
          "quantity": 81
        },
        {
          "quantityID": 519,
          "productID": 139,
          "sizeID": 519,
          "quantity": 31
        },
        {
          "quantityID": 520,
          "productID": 139,
          "sizeID": 520,
          "quantity": 28
        },
        {
          "quantityID": 521,
          "productID": 139,
          "sizeID": 521,
          "quantity": 48
        }
      ],
      "category": null,
      "parentCategory": null,
      "quantitySold": 0
    }
  ],
  "subCategories": null
};

const CategoryPage = ({keyword}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const categoryID = queryParams.categoryID;

  const [numberProduct, setNumberProduct] = useState(NUMBER_PRODUCT_LIMIT);
  const [productsData, setProductsData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setSearchValue("");
    setProductsData(categoriesData);
    setNumberProduct(Math.min(categoriesData.products.length, NUMBER_PRODUCT_LIMIT));
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);

    const data = JSON.parse(JSON.stringify(categoriesData));
    if (value === SORT.ASC) {
      data.products = data.products.sort((a, b) => a.productPrice - b.productPrice);
    } else if (value === SORT.DECS) {
      data.products = data.products.sort((a, b) => b.productPrice - a.productPrice);
    }

    setProductsData(data);
    setNumberProduct(Math.min(data.products.length, NUMBER_PRODUCT_LIMIT));
  }

  useEffect(() => {
    setSearchValue("");
    setProductsData(categoriesData);
    setNumberProduct(NUMBER_PRODUCT_LIMIT);
  }, [categoryID]);

  const hasResult = true;

  return (
      <>
        { isError === true && <NotFoundPage /> }
        { isError === false &&
          <main id="main">
            <ScrollToTop />
            <section className="category-wrapper">
              <section className="container container-category" style={{padding:"0"}}>
                <section className="box-filter">
                  <div id="KfIh1dAIDGfFwK40Btv4">
                    <div className="filter-wrapper">
                      <div className="filter-box d-flex align-items-center justify-content-between ">
                        <div className="filter-item d-flex align-items-center">
                          <img src={fillterIcon} className="icon" alt="icon filter"/>
                          <span>{FILTERS.TITLE}</span>
                        </div>

                        <div className="other-item d-flex align-items-center">
                          <div className="sort-box d-flex align-items-center">
                            <span className="title-child">{FILTERS.SORT_BY}</span>

                            <ConfigProvider
                                theme={{
                                  components: {
                                    Select: {
                                      controlItemBgActive: '#ffe6e6',
                                    },
                                  },
                                }}
                            >
                              <Select
                                  value={searchValue}
                                  style={{ width: 170 }}
                                  bordered={false}
                                  size={"small"}
                                  options={[
                                    { value: "", label: FILTERS.SELECT_FILTER_CONDITION },
                                    { value: SORT.ASC, label: FILTERS.PRICE_LOW_TO_HIGH },
                                    { value: SORT.DECS, label: FILTERS.PRICE_HIGH_TO_LOW },
                                  ]}
                                  onChange={(value) => handleSearch(value)}
                              />
                            </ConfigProvider>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </section>
                <div>
                  {hasResult ? (
                      <>
                        <section className="product-result">
                          <section className="product-label ">
                            {productsData.categoryName.toUpperCase()} ({productsData.products.length} sản phẩm)
                          </section>
                        </section>
                        {/*<div className="search-result">*/}
                        <ProductsSection productsData={productsData.products.slice(0, numberProduct)} />
                        {/*</div>*/}
                        <div className="load-more-wrap text-center">
                          {productsData.products.length !== numberProduct ?
                              (<a href="#">
                                <button className="btn btn-vm view-more-product btn-product-winter" id="view-more-product" style={{"marginBottom":"10px"}}
                                        onClick={() => setNumberProduct(Math.min(numberProduct + NUMBER_PRODUCT_LIMIT, productsData.products.length))}
                                >
                                  {CATEGORY_PAGE.SEE_MORE} <i className="fa-solid fa-spinner icon-loading"></i>
                                </button>
                              </a>) : (
                                  <div className="btn btn-vm" style={{"marginBottom":"34px"}}> </div>
                              )
                          }
                        </div>
                      </>
                  ) : (
                      <div className="empty-data text-center"  style={{paddingBottom:"70px"}}>
                        <div className="result-empty" style={{marginTop:"50px"}}>
                          <img src={IMAGE_URL.EMPTY_RESULT_IMG} alt="no data" style={{maxWidth:"200px", marginBottom:"30px"}}/>
                          <p>{CATEGORY_PAGE.NO_RESULTS_FOUND}</p>
                          <span>{CATEGORY_PAGE.PLEASE_TRY_AGAIN_WITH_DIFFERENT_KEYWORD}</span>
                          <span>{CATEGORY_PAGE.EXAMPLE_KEYWORDS}</span>
                        </div>
                      </div>
                  )}
                </div>
              </section>
            </section>
          </main>
        }
      </>
  );
};


export default CategoryPage;