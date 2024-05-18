import React, {useEffect, useState} from 'react';
import "./style.scss"
import SlideBanner from "./SlideBanner/SlideBanner";
import CategorySection from "./CategorySection/CategorySection";
import CollectionSection from "./CollectionSection/CollectionSection";
import {toast} from "react-toastify";
import {ScrollToTop} from '@Utils';
import {API, MESSAGE} from "@Const";

const collectionsData = [
  {
    "categoryID": 1,
    "categoryName": "Áo Nam",
    "parentCategoryID": null,
    "imagePath": null,
    "products": null,
    "subCategories": [
      {
        "categoryID": 2,
        "categoryName": "Áo Thun",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXHIj.webp",
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
                "quantity": 88
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
            "quantitySold": 0
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
            "quantitySold": 0
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
          }
        ],
        "subCategories": null
      },
      {
        "categoryID": 3,
        "categoryName": "Áo Khoác",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXFEB.webp",
        "products": [
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
                "quantity": 49
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
            "quantitySold": 0
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
            "quantitySold": 0
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
            "quantitySold": 0
          }
        ],
        "subCategories": null
      },
      {
        "categoryID": 4,
        "categoryName": "Áo Polo",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXq21.webp",
        "products": [
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
          }
        ],
        "subCategories": null
      },
      {
        "categoryID": 8,
        "categoryName": "Áo Sơ Mi",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXCkg.webp",
        "products": [
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
          }
        ],
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 5,
    "categoryName": "Quần Nam",
    "parentCategoryID": null,
    "imagePath": null,
    "products": null,
    "subCategories": [
      {
        "categoryID": 7,
        "categoryName": "Quần Short Thể Thao",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXUGV.webp",
        "products": [
          {
            "productID": 90,
            "productName": "Quần Short Thể Thao Nam, Cạp Cúc, Phối Màu Trẻ Trung",
            "productPrice": 469000,
            "productDescription": "Quần Short Thể Thao Nam, Cạp Cúc, Phối Màu Trẻ Trung có phom dáng Slim fit vừa vặn, tôn dáng nhưng vẫn vô cùng thoải mái khi mặc. Thiết kế đơn giản, đường may tinh tế, tỉ mỉ mang tới diện mạo chỉn chu, nam tính cho anh chàng. Quần có túi xẻ hai bên, túi phụ phía sau có khuy cài vô cùng tiện lợi. Đây là mẫu quần short thể thao thuộc top bán chạy tại 5S Fashion.\r\n\r\nQuần được làm từ Polyamide thường được dùng cho dòng quần short nhờ những ưu điểm mềm mướt, bề mặt sáng bóng và nhẵn mịn, sợi vải mát lạnh, nhuộm màu sắc nét và tính đàn hồi tự nhiên cao. Kết hợp với tỉ lệ Spandex cao giúp sản phẩm có độ đàn hồi cực tốt, giúp người mặc thoải mái vận động & tham gia các hoạt động thể thao.",
            "productImages": [
              {
                "imageID": 433,
                "productID": 90,
                "imagePath": "https://iili.io/JRLZCTF.jpg"
              },
              {
                "imageID": 434,
                "productID": 90,
                "imagePath": "https://iili.io/JRLZnhg.jpg"
              },
              {
                "imageID": 435,
                "productID": 90,
                "imagePath": "https://iili.io/JRLZoQa.jpg"
              },
              {
                "imageID": 436,
                "productID": 90,
                "imagePath": "https://iili.io/JRLZzCJ.jpg"
              },
              {
                "imageID": 437,
                "productID": 90,
                "imagePath": "https://iili.io/JRLZIEv.jpg"
              },
              {
                "imageID": 438,
                "productID": 90,
                "imagePath": "https://iili.io/JRLZT4R.jpg"
              },
              {
                "imageID": 439,
                "productID": 90,
                "imagePath": "https://iili.io/JRLZRYN.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 325,
                "productID": 90,
                "sizeName": "S"
              },
              {
                "sizeID": 326,
                "productID": 90,
                "sizeName": "M"
              },
              {
                "sizeID": 327,
                "productID": 90,
                "sizeName": "L"
              },
              {
                "sizeID": 328,
                "productID": 90,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 325,
                "productID": 90,
                "sizeID": 325,
                "quantity": 43
              },
              {
                "quantityID": 326,
                "productID": 90,
                "sizeID": 326,
                "quantity": 23
              },
              {
                "quantityID": 327,
                "productID": 90,
                "sizeID": 327,
                "quantity": 42
              },
              {
                "quantityID": 328,
                "productID": 90,
                "sizeID": 328,
                "quantity": 41
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 91,
            "productName": "Quần Short Thể Thao Nam, Cạp Cúc, In Sườn",
            "productPrice": 469000,
            "productDescription": " \r\nQuần Short Thể Thao Nam, Cạp Cúc, In Sườn là item vừa thoải mái, vừa lịch sự được nam giới yêu thích. Bạn có thể thỏa sức kết hợp quần thể thao với mọi outfit từ Polo, t-shirt, Tanktop với mẫu short thể thao cạp cúc in sườn đến từ nhà 5S Fashion. Set đồ này sẽ mang tới diện mạo trẻ trung, thích hợp với mọi hoạt động di chuyển, tập luyện nhưng vẫn vô cùng lịch sự, tạo cảm giác thoải mái nhất cho người mặc. Thiết kế basic, túi vát 2 bên mix cùng túi sau có cúc cài tiện lợi. \r\n\r\nChất vải Polyamide co giãn thoải mái, tăng độ mềm mại và đàn hồi khi mặc. Đặc biệt, đây cũng là chất liệu nhẹ dịu, an toàn mang tới trải nghiệm thoải mái nhất khi hoạt động suốt cả ngày dài, không gây nóng bí hay đổ mồ hôi khi mặc. Bề mặt vải mềm - mượt - mát - mau khô cùng khả năng giữ phom quần khỏe khoắn, bền đẹp. Việc bổ sung thêm thành phần Spandex nhằm tăng tính thoải mái cho người mặc nhờ sự co giãn, mềm nhẹ và trơn tru. ",
            "productImages": [
              {
                "imageID": 440,
                "productID": 91,
                "imagePath": "https://iili.io/JRLZkCb.jpg"
              },
              {
                "imageID": 441,
                "productID": 91,
                "imagePath": "https://iili.io/JRLZvGj.jpg"
              },
              {
                "imageID": 442,
                "productID": 91,
                "imagePath": "https://iili.io/JRLZ86x.jpg"
              },
              {
                "imageID": 443,
                "productID": 91,
                "imagePath": "https://iili.io/JRLZgaV.jpg"
              },
              {
                "imageID": 444,
                "productID": 91,
                "imagePath": "https://iili.io/JRLZr8B.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 329,
                "productID": 91,
                "sizeName": "S"
              },
              {
                "sizeID": 330,
                "productID": 91,
                "sizeName": "M"
              },
              {
                "sizeID": 331,
                "productID": 91,
                "sizeName": "L"
              },
              {
                "sizeID": 332,
                "productID": 91,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 329,
                "productID": 91,
                "sizeID": 329,
                "quantity": 43
              },
              {
                "quantityID": 330,
                "productID": 91,
                "sizeID": 330,
                "quantity": 40
              },
              {
                "quantityID": 331,
                "productID": 91,
                "sizeID": 331,
                "quantity": 42
              },
              {
                "quantityID": 332,
                "productID": 91,
                "sizeID": 332,
                "quantity": 41
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 92,
            "productName": "Quần Short Thể Thao Nam, Cạp Chun, In Chữ Trẻ Trung",
            "productPrice": 429000,
            "productDescription": "Quần Short Thể Thao, Cạp Chun, In Chữ Trẻ Trung là mẫu quần short thể thao mang phong cách thể thao với kiểu dáng Slim fit vừa vặn, tôn dáng mà vẫn đảm bảo trải nghiệm thoải mái trong mọi hoạt động. Quần được thiết kế basic với túi vát 2 bên tiện lợi, họa tiết hình in nổi cao cấp, bền đẹp và không lo bong tróc. Bảng màu đa dạng, dễ mặc, dễ phối, phù hợp với nhiều hoạt động như mặc thường ngày, đi chơi, đi tập gym, chạy bộ... Đây là item luôn được yêu thích tại 5S Fashion.\r\n\r\nThành phần chất vải chỉ có 14.5% Cotton nhưng loại vải này có bề mặt ngoài mang đậm chất cotton, mềm mại, thấm hút, thoáng mát. Tencel - một chất liệu vải sinh học cao cấp hơn cả Modal, an toàn và thân thiện với môi trường, sử dụng công nghệ Nano nên sợi vải siêu mảnh cỡ các hạt Nano giúp bề mặt vải mềm, siêu mịn, chống nhăn hiệu quả và có nhiều đặc điểm tương tự Modal. Kết hợp cùng 66% Polyester ở mặt trong tạo độ mướt giảm sự cọ sát lên da, giúp tăng độ bền, độ bóng sắc nét, tăng độ bền màu của vải và giúp giá giảm giá thành. 5% Spandex giúp vải có độ co giãn nhẹ giúp người mặc thoải mái vận động & tham gia các hoạt động thể thao.",
            "productImages": [
              {
                "imageID": 445,
                "productID": 92,
                "imagePath": "https://iili.io/JRLZkCb.jpg"
              },
              {
                "imageID": 446,
                "productID": 92,
                "imagePath": "https://iili.io/JRLZvGj.jpg"
              },
              {
                "imageID": 447,
                "productID": 92,
                "imagePath": "https://iili.io/JRLZ86x.jpg"
              },
              {
                "imageID": 448,
                "productID": 92,
                "imagePath": "https://iili.io/JRLZgaV.jpg"
              },
              {
                "imageID": 449,
                "productID": 92,
                "imagePath": "https://iili.io/JRLZr8B.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 333,
                "productID": 92,
                "sizeName": "S"
              },
              {
                "sizeID": 334,
                "productID": 92,
                "sizeName": "M"
              },
              {
                "sizeID": 335,
                "productID": 92,
                "sizeName": "L"
              },
              {
                "sizeID": 336,
                "productID": 92,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 333,
                "productID": 92,
                "sizeID": 333,
                "quantity": 53
              },
              {
                "quantityID": 334,
                "productID": 92,
                "sizeID": 334,
                "quantity": 35
              },
              {
                "quantityID": 335,
                "productID": 92,
                "sizeID": 335,
                "quantity": 91
              },
              {
                "quantityID": 336,
                "productID": 92,
                "sizeID": 336,
                "quantity": 43
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 93,
            "productName": "Quần Short Thể Thao Nam, Cạp Chun, In Chữ Trẻ Trung",
            "productPrice": 429000,
            "productDescription": "Quần Short Thể Thao, Cạp Chun, In Chữ Trẻ Trung là mẫu quần short thể thao mang phong cách thể thao với kiểu dáng Slim fit vừa vặn, tôn dáng mà vẫn đảm bảo trải nghiệm thoải mái trong mọi hoạt động. Quần được thiết kế basic với túi vát 2 bên tiện lợi, họa tiết hình in nổi cao cấp, bền đẹp và không lo bong tróc. Bảng màu đa dạng, dễ mặc, dễ phối, phù hợp với nhiều hoạt động như mặc thường ngày, đi chơi, đi tập gym, chạy bộ... Đây là item luôn được yêu thích tại 5S Fashion.\r\n\r\nThành phần chất vải chỉ có 14.5% Cotton nhưng loại vải này có bề mặt ngoài mang đậm chất cotton, mềm mại, thấm hút, thoáng mát. Tencel - một chất liệu vải sinh học cao cấp hơn cả Modal, an toàn và thân thiện với môi trường, sử dụng công nghệ Nano nên sợi vải siêu mảnh cỡ các hạt Nano giúp bề mặt vải mềm, siêu mịn, chống nhăn hiệu quả và có nhiều đặc điểm tương tự Modal. Kết hợp cùng 66% Polyester ở mặt trong tạo độ mướt giảm sự cọ sát lên da, giúp tăng độ bền, độ bóng sắc nét, tăng độ bền màu của vải và giúp giá giảm giá thành. 5% Spandex giúp vải có độ co giãn nhẹ giúp người mặc thoải mái vận động & tham gia các hoạt động thể thao.",
            "productImages": [
              {
                "imageID": 450,
                "productID": 93,
                "imagePath": "https://iili.io/JRLto9S.jpg"
              },
              {
                "imageID": 451,
                "productID": 93,
                "imagePath": "https://iili.io/JRLtxA7.jpg"
              },
              {
                "imageID": 452,
                "productID": 93,
                "imagePath": "https://iili.io/JRLtzN9.jpg"
              },
              {
                "imageID": 453,
                "productID": 93,
                "imagePath": "https://iili.io/JRLtIte.jpg"
              },
              {
                "imageID": 454,
                "productID": 93,
                "imagePath": "https://iili.io/JRLtuou.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 337,
                "productID": 93,
                "sizeName": "S"
              },
              {
                "sizeID": 338,
                "productID": 93,
                "sizeName": "M"
              },
              {
                "sizeID": 339,
                "productID": 93,
                "sizeName": "L"
              },
              {
                "sizeID": 340,
                "productID": 93,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 337,
                "productID": 93,
                "sizeID": 337,
                "quantity": 53
              },
              {
                "quantityID": 338,
                "productID": 93,
                "sizeID": 338,
                "quantity": 35
              },
              {
                "quantityID": 339,
                "productID": 93,
                "sizeID": 339,
                "quantity": 91
              },
              {
                "quantityID": 340,
                "productID": 93,
                "sizeID": 340,
                "quantity": 43
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 94,
            "productName": "Quần Short Thể Thao Nam, Thoáng Khí, Kháng Khuẩn ",
            "productPrice": 429000,
            "productDescription": "Quần Short Thể Thao 5S Fashion, Thoáng Khí, Kháng Khuẩn QSB23203 sở hữu bề mặt mềm mượt, mát, mau khô cùng khả năng giữ phom quần khỏe khoắn, bền đẹp và không lo nhăn nhàu. Điểm nhấn của thiết kế này nằm ở đường kẻ line phối màu dọc 2 bên sườn quần mang tới diện mạo trẻ trung, khỏe khoắn cho người mặc. \r\n\r\nChất liệu Polyamide hay còn có tên gọi khác của Freezing Nylon, thường được dùng cho dòng quần short thể thao. Với ưu điểm mềm mướt, bề mặt sáng bóng và nhẵn mịn, sợi vải mát lạnh, nhuộm màu sắc nét và tính đàn hồi tự nhiên cao. Kết hợp với tỉ lệ Spandex cao giúp sản phẩm có độ đàn hồi cực tốt, giúp người mặc thoải mái vận động & tham gia các hoạt động thể thao.\r\n\r\nNgoài ra, khi kết hợp với thành phần Viscose là loại sợi tổng hợp từ chất xơ của sợi cellulose làm từ bột gỗ như cây sồi, thông, bạch đàn, cây tre… Đặc tính của Viscose khá mềm mịn, bóng mượt, thoáng khí, khả năng thấm hút mồ hôi và kháng khuẩn tốt. Dễ dàng nhuộm màu để tạo ra những cuộn vải có màu sắc đẹp mắt, thu hút hơn. ",
            "productImages": [
              {
                "imageID": 455,
                "productID": 94,
                "imagePath": "https://iili.io/JRLtjlR.jpg"
              },
              {
                "imageID": 456,
                "productID": 94,
                "imagePath": "https://iili.io/JRLtwSp.jpg"
              },
              {
                "imageID": 457,
                "productID": 94,
                "imagePath": "https://iili.io/JRLtOHN.jpg"
              },
              {
                "imageID": 458,
                "productID": 94,
                "imagePath": "https://iili.io/JRLteRI.jpg"
              },
              {
                "imageID": 459,
                "productID": 94,
                "imagePath": "https://iili.io/JRLtkNt.jpg"
              },
              {
                "imageID": 460,
                "productID": 94,
                "imagePath": "https://iili.io/JRLtSxn.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 341,
                "productID": 94,
                "sizeName": "S"
              },
              {
                "sizeID": 342,
                "productID": 94,
                "sizeName": "M"
              },
              {
                "sizeID": 343,
                "productID": 94,
                "sizeName": "L"
              },
              {
                "sizeID": 344,
                "productID": 94,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 341,
                "productID": 94,
                "sizeID": 341,
                "quantity": 51
              },
              {
                "quantityID": 342,
                "productID": 94,
                "sizeID": 342,
                "quantity": 95
              },
              {
                "quantityID": 343,
                "productID": 94,
                "sizeID": 343,
                "quantity": 34
              },
              {
                "quantityID": 344,
                "productID": 94,
                "sizeID": 344,
                "quantity": 77
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 95,
            "productName": "Quần Short Thể Thao Nam, Thiết Kế Cạp Cúc Xẻ Gấu Thời Trang",
            "productPrice": 499000,
            "productDescription": "Quần Short Thể Thao Nam, Thiết Kế Cạp Cúc Xẻ Gấu Thời Trang sở hữu phom dáng Slim fit ôm vừa vặn, tôn dáng, mang đến diện mạo trẻ trung cho nam giới. Điểm nhấn của mẫu quần này nằm ở thiết kế cạp cúc xẻ gấu thời trang, năng động, thích hợp với hoạt động di chuyển, tập luyện... nhưng vẫn luôn lịch sự, tạo cảm giác thoải mái trong mọi hoạt động. Đặc biệt, lỗ thoáng khi ở 2 bên đùi giúp mang tới trải nghiệm thoáng mát tối đa khi mặc, không bị bí bách hay bết dính mồ hôi. Thiết kế túi vát 2 bên kết hợp với khóa kéo tiện dụng, thích hợp để đựng điện thoại, ví, chìa khóa mà không lo bị rơi... \r\n\r\nQuần short thể thao được làm từ chất liệu Polyamide với bề mặt vải mềm mượt, mát, mau khô, đặc biệt thoáng khí, không bết dính mồ hôi. Việc bổ sung thêm thành phần Spandex giúp tăng độ co giãn, đàn hồi, để bạn nam thoải mái trong mọi hoạt động mà không lo nhăn nhàu, giữ form quần khỏe khoắn, bền đẹp. ",
            "productImages": [
              {
                "imageID": 461,
                "productID": 95,
                "imagePath": "https://iili.io/JRLtQO7.jpg"
              },
              {
                "imageID": 462,
                "productID": 95,
                "imagePath": "https://iili.io/JRLtZb9.jpg"
              },
              {
                "imageID": 463,
                "productID": 95,
                "imagePath": "https://iili.io/JRLtDxe.jpg"
              },
              {
                "imageID": 464,
                "productID": 95,
                "imagePath": "https://iili.io/JRLtmib.jpg"
              },
              {
                "imageID": 465,
                "productID": 95,
                "imagePath": "https://iili.io/JRLtyfj.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 345,
                "productID": 95,
                "sizeName": "S"
              },
              {
                "sizeID": 346,
                "productID": 95,
                "sizeName": "M"
              },
              {
                "sizeID": 347,
                "productID": 95,
                "sizeName": "L"
              },
              {
                "sizeID": 348,
                "productID": 95,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 345,
                "productID": 95,
                "sizeID": 345,
                "quantity": 43
              },
              {
                "quantityID": 346,
                "productID": 95,
                "sizeID": 346,
                "quantity": 55
              },
              {
                "quantityID": 347,
                "productID": 95,
                "sizeID": 347,
                "quantity": 36
              },
              {
                "quantityID": 348,
                "productID": 95,
                "sizeID": 348,
                "quantity": 77
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 96,
            "productName": "Quần Short Thể Thao Nam, Thoáng Khí, Thấm Hút Mồ Hôi",
            "productPrice": 389000,
            "productDescription": "Quần Short Thể Thao Nam, Thoáng Khí, Thấm Hút Mồ Hôi là thiết kế quần short cạp chun mới nhất trong bộ sưu tập quần short thể thao từ 5S Fashion giúp bạn thể hiện phong cách trẻ trung, năng động và khỏe khoắn. Điểm cộng của thiết kế này nằm ở phần cạp chun kết hợp với dây buộc co giãn linh hoạt, dễ dàng điều chỉnh vòng bụng sao cho vừa vặn nhất, mang tới trải nghiệm thoáng mát tối đa trong mọi hoạt động.\r\n\r\nChi tiết chữ \"Breaks\" ứng dụng công nghệ in ép nhiệt cao cấp, bền đẹp, không lo bong tróc trong quá trình mặc. Thiết kế túi vát 2 bên và túi sau tiện dụng, dễ dàng mang theo ví, điện thoại khi đi chơi, đi tập... Đây là item trendy, khỏe khoắn, phù hợp để mặc hằng ngày, đi dạo phố hay tham gia các hoạt động ngoài trời đều giúp nam giới trở nên tự tin hơn bao giờ hết.\r\n\r\nQuần short thể thao được làm từ chất liệu Polyamide kết hợp với Rayon sở hữu những ưu điểm vượt trội như bề mặt vải siêu mềm mịn, dễ chịu, khả năng thấm hút cao, bay hơi nhanh chóng, độ co giãn đàn hồi tốt cùng độ bền cao. Đây cũng là dòng chất liệu mới, vừa mềm mại, vừa thoáng mát tối đa mà nam giới không nên bỏ lỡ. ",
            "productImages": [
              {
                "imageID": 466,
                "productID": 96,
                "imagePath": "https://iili.io/JRLD90x.jpg"
              },
              {
                "imageID": 467,
                "productID": 96,
                "imagePath": "https://iili.io/JRLDHUQ.jpg"
              },
              {
                "imageID": 468,
                "productID": 96,
                "imagePath": "https://iili.io/JRLDdJV.jpg"
              },
              {
                "imageID": 469,
                "productID": 96,
                "imagePath": "https://iili.io/JRLD3OP.jpg"
              },
              {
                "imageID": 470,
                "productID": 96,
                "imagePath": "https://iili.io/JRLDfzF.jpg"
              },
              {
                "imageID": 471,
                "productID": 96,
                "imagePath": "https://iili.io/JRLDqWg.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 349,
                "productID": 96,
                "sizeName": "S"
              },
              {
                "sizeID": 350,
                "productID": 96,
                "sizeName": "M"
              },
              {
                "sizeID": 351,
                "productID": 96,
                "sizeName": "L"
              },
              {
                "sizeID": 352,
                "productID": 96,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 349,
                "productID": 96,
                "sizeID": 349,
                "quantity": 43
              },
              {
                "quantityID": 350,
                "productID": 96,
                "sizeID": 350,
                "quantity": 55
              },
              {
                "quantityID": 351,
                "productID": 96,
                "sizeID": 351,
                "quantity": 36
              },
              {
                "quantityID": 352,
                "productID": 96,
                "sizeID": 352,
                "quantity": 81
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 97,
            "productName": "Quần Short Thể Thao Nam Kháng Khuẩn",
            "productPrice": 429000,
            "productDescription": "Quần Short Thể Thao Nam Kháng Khuẩn là mẫu quần với kiểu dáng Slim fit ôm vừa vặn mà vẫn đảm bảo thoải mái, thoáng mát cho người mặc trong mọi hoạt động. Đây cũng là mẫu quần giúp bạn nam có thể tự tin phối với áo polo, T-shirt, tnaktop để mặc hằng ngày, tập luyện hay đi chơi. Thiết kế cạp chun linh hoạt, dễ mặc với đường line phối màu chạy dọc 2 bên quần mang tới phong cách Sporty khỏe khoắn, nam tính cho người mặc. Đây là một trong những item luôn nằm trong top sản phẩm bán chạy của 5S Fashion.\r\n\r\nQuần short thể thao được làm từ chất liệu Polyamide với bề mặt vải mềm - mượt - mát - mau khô, đặc biệt thoáng khí và không lo bết dính mồ hôi trong mọi hoạt động. Kết hợp với thành phần chất liệu Viscose và Spandex giúp vải có những hiệu ứng melange rõ nét với tính thẩm mỹ cao. Cùng với đó là những tính năng mà Polyester có thể bổ trợ cho Polyamide như: Tăng độ bền vải, tăng khả năng thấm hút mồ hôi và giúp sản phẩm nhanh khô.",
            "productImages": [
              {
                "imageID": 472,
                "productID": 97,
                "imagePath": "https://iili.io/JRLD90x.jpg"
              },
              {
                "imageID": 473,
                "productID": 97,
                "imagePath": "https://iili.io/JRLDHUQ.jpg"
              },
              {
                "imageID": 474,
                "productID": 97,
                "imagePath": "https://iili.io/JRLDdJV.jpg"
              },
              {
                "imageID": 475,
                "productID": 97,
                "imagePath": "https://iili.io/JRLD3OP.jpg"
              },
              {
                "imageID": 476,
                "productID": 97,
                "imagePath": "https://iili.io/JRLDfzF.jpg"
              },
              {
                "imageID": 477,
                "productID": 97,
                "imagePath": "https://iili.io/JRLDqWg.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 353,
                "productID": 97,
                "sizeName": "S"
              },
              {
                "sizeID": 354,
                "productID": 97,
                "sizeName": "M"
              },
              {
                "sizeID": 355,
                "productID": 97,
                "sizeName": "L"
              },
              {
                "sizeID": 356,
                "productID": 97,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 353,
                "productID": 97,
                "sizeID": 353,
                "quantity": 43
              },
              {
                "quantityID": 354,
                "productID": 97,
                "sizeID": 354,
                "quantity": 55
              },
              {
                "quantityID": 355,
                "productID": 97,
                "sizeID": 355,
                "quantity": 36
              },
              {
                "quantityID": 356,
                "productID": 97,
                "sizeID": 356,
                "quantity": 81
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          }
        ],
        "subCategories": null
      },
      {
        "categoryID": 9,
        "categoryName": "Quần Dài Kaki",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXNyu.webp",
        "products": [
          {
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
                "quantity": 51
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          }
        ],
        "subCategories": null
      },
      {
        "categoryID": 10,
        "categoryName": "Quần Short Kaki",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXUGV.webp",
        "products": [
          {
            "productID": 111,
            "productName": "Quần Short Kaki Nam, Thiết Kế Cạp Cúc, Trẻ Trung",
            "productPrice": 499000,
            "productDescription": "Quần Short Kaki Nam, Thiết Kế Cạp Cúc, Trẻ Trung là sản phẩm năm trong bộ sưu tập quần short kaki đang được ưa chuộng. Với kiểu dáng Slim fit vừa vặn, tôn dáng, quần short kaki vừa mang tới diện mạo thanh lịch cho nam giới, vừa đảm bảo sự thoải mái trong mọi hoạt động. \r\n\r\nQuần được làm từ sự kết hợp của các thành phần chất liệu chỉ 14.5% Cotton nhưng loại vải này có bề mặt ngoài mang đậm chất cotton, mềm mại, thấm hút, thoáng mát. Tencel - một chất liệu vải sinh học cao cấp hơn cả Modal, an toàn và thân thiện với môi trường, sử dụng công nghệ Nano nên sợi vải siêu mảnh cỡ các hạt Nano giúp bề mặt vải mềm, siêu mịn, chống nhăn hiệu quả và có nhiều đặc điểm tương tự Modal. Kết hợp cùng 66% Polyester ở mặt trong tạo độ mướt giảm sự cọ sát lên da, giúp tăng độ bền, độ bóng sắc nét, tăng độ bền màu của vải và giúp giá giảm giá thành. 5% Spandex giúp vải có độ co giãn nhẹ giúp người mặc thoải mái vận động & tham gia các hoạt động thể thao.",
            "productImages": [
              {
                "imageID": 556,
                "productID": 111,
                "imagePath": "https://iili.io/JRQ9SxS.jpg"
              },
              {
                "imageID": 557,
                "productID": 111,
                "imagePath": "https://iili.io/JRQ9UW7.jpg"
              },
              {
                "imageID": 558,
                "productID": 111,
                "imagePath": "https://iili.io/JRQ9gs9.jpg"
              },
              {
                "imageID": 559,
                "productID": 111,
                "imagePath": "https://iili.io/JRQ94fe.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 407,
                "productID": 111,
                "sizeName": "S"
              },
              {
                "sizeID": 408,
                "productID": 111,
                "sizeName": "M"
              },
              {
                "sizeID": 409,
                "productID": 111,
                "sizeName": "L"
              },
              {
                "sizeID": 410,
                "productID": 111,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 407,
                "productID": 111,
                "sizeID": 407,
                "quantity": 34
              },
              {
                "quantityID": 408,
                "productID": 111,
                "sizeID": 408,
                "quantity": 23
              },
              {
                "quantityID": 409,
                "productID": 111,
                "sizeID": 409,
                "quantity": 42
              },
              {
                "quantityID": 410,
                "productID": 111,
                "sizeID": 410,
                "quantity": 49
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 112,
            "productName": "Quần Short Kaki Nam, Cạp Cúc, Vải Tencel Thoáng Mát",
            "productPrice": 429000,
            "productDescription": "Quần Short Kaki Nam, Cạp Cúc, Vải Tencel Thoáng Mát với kiểu dáng Slim fit vừa vặn, tôn dáng, dễ dàng kết hợp với hầu hết mọi kiểu áo trong tủ đồ. Thiết kế túi vát 2 bên và 2 túi sau có cúc cài vừa tăng tính thẩm mỹ, thanh lịch cho chiếc, vừa bảo quản ví, điện thoại tốt hơn. Bảng màu đa dạng chủ yếu là các gam màu trung tính, dễ mặc, dễ phối. \r\n\r\nQuần được làm từ vải Tencel (hay còn có tên gọi khác là Lyocell) là loại vải sinh học an toàn và thân thiện với môi trường nhất hiện nay. Loại vải này có nguồn gốc từ gỗ cây sồi với những ưu điểm vượt trội như thấm hút tốt, độ đàn hồi cao, dễ dàng nhuộm màu và thân thiện với làn da của người mặc. Việc bổ sung thêm thành phần Polyester và Spandex giúp vải quần bền đẹp, tăng độ co giãn, đàn hồi thoải mái khi mặc và ít bám bụi, dễ vệ sinh hơn. ",
            "productImages": [
              {
                "imageID": 560,
                "productID": 112,
                "imagePath": "https://iili.io/JRQ9ms1.jpg"
              },
              {
                "imageID": 561,
                "productID": 112,
                "imagePath": "https://iili.io/JRQ9yqF.jpg"
              },
              {
                "imageID": 562,
                "productID": 112,
                "imagePath": "https://iili.io/JRQHHga.jpg"
              },
              {
                "imageID": 563,
                "productID": 112,
                "imagePath": "https://iili.io/JRQHddJ.jpg"
              },
              {
                "imageID": 564,
                "productID": 112,
                "imagePath": "https://iili.io/JRQH25v.jpg"
              },
              {
                "imageID": 565,
                "productID": 112,
                "imagePath": "https://iili.io/JRQHFbp.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 411,
                "productID": 112,
                "sizeName": "S"
              },
              {
                "sizeID": 412,
                "productID": 112,
                "sizeName": "M"
              },
              {
                "sizeID": 413,
                "productID": 112,
                "sizeName": "L"
              },
              {
                "sizeID": 414,
                "productID": 112,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 411,
                "productID": 112,
                "sizeID": 411,
                "quantity": 43
              },
              {
                "quantityID": 412,
                "productID": 112,
                "sizeID": 412,
                "quantity": 51
              },
              {
                "quantityID": 413,
                "productID": 112,
                "sizeID": 413,
                "quantity": 42
              },
              {
                "quantityID": 414,
                "productID": 112,
                "sizeID": 414,
                "quantity": 49
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 113,
            "productName": "Quần Short Kaki Nam, Vải Cotton Co Giãn Thoải Mái",
            "productPrice": 429000,
            "productDescription": "Quần Short Kaki Nam, Vải Cotton Co Giãn Thoải Mái với kiểu dáng Slim fit vừa vặn, tôn dáng mà vẫn thoải mái trong mọi hoạt động, giúp nam giới tự tin mỗi ngày. Quần short kaki nổi bật với thiết kế cạp cúc sang trọng kết hợp cùng 2 túi vát và túi sau có cúc cài vừa tinh tế, vừa tiện lợi. Đây được xem là item không thể thiếu trong tủ đồ của nam giới vào mùa hè, dễ dàng phối kết hợp với hầu hết các kiểu áo đa dạng như polo, t-shirt... của nhà 5S Fashion.\r\n\r\nChất vải Cotton & Polyester khi kết hợp cùng Tencel - 1 loại sợi Nano cao cấp giúp cấu trúc vải chặt chẽ hơn, hạn chế bai rão, bề mặt vải cũng mềm, mịn hơn nhờ các sợi Tencel Nano đan xen giữa các khoảng trống của vải Cotton/Polyester. Tencel có tính kháng khuẩn tương tự Modal và có khả năng chống nhăn giúp anh chàng giữ được dáng vẻ thanh lịch, nam tính suốt cả ngày dài. ",
            "productImages": [
              {
                "imageID": 566,
                "productID": 113,
                "imagePath": "https://iili.io/JRQHG7j.jpg"
              },
              {
                "imageID": 567,
                "productID": 113,
                "imagePath": "https://iili.io/JRQHSkv.jpg"
              },
              {
                "imageID": 568,
                "productID": 113,
                "imagePath": "https://iili.io/JRQHbp4.jpg"
              },
              {
                "imageID": 569,
                "productID": 113,
                "imagePath": "https://iili.io/JRQJfvj.jpg"
              },
              {
                "imageID": 570,
                "productID": 113,
                "imagePath": "https://iili.io/JRQJRaa.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 415,
                "productID": 113,
                "sizeName": "S"
              },
              {
                "sizeID": 416,
                "productID": 113,
                "sizeName": "M"
              },
              {
                "sizeID": 417,
                "productID": 113,
                "sizeName": "L"
              },
              {
                "sizeID": 418,
                "productID": 113,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 415,
                "productID": 113,
                "sizeID": 415,
                "quantity": 51
              },
              {
                "quantityID": 416,
                "productID": 113,
                "sizeID": 416,
                "quantity": 41
              },
              {
                "quantityID": 417,
                "productID": 113,
                "sizeID": 417,
                "quantity": 42
              },
              {
                "quantityID": 418,
                "productID": 113,
                "sizeID": 418,
                "quantity": 43
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 114,
            "productName": "Quần Short Kaki Nam, Mềm Mại, Thoáng Mát",
            "productPrice": 469000,
            "productDescription": "Quần Short Kaki Nam, Mềm Mại, Thoáng Mát với kiểu dáng Slim fit vừa vặn, tôn dáng mà không ôm quá sát, đảm bảo sự thoải mái cho người mặc. Thiết kế basic với đường cắt may tỉ mỉ, mang đến diện mạo chỉn chu, thanh lịch và nam tính cho nam giới. Quần có túi xẻ hai bên kết hợp với túi sau có cúc cài tiện lợi, thích hợp để đựng ví, điện thoại, thẻ... \r\n\r\nThành phần chính của mẫu quần short kaki vẫn là Cotton, vẫn có những tính năng mềm mại, thoáng mát, thấm hút mồ hôi tốt. Khi kết hợp với Linen tạo ra hiệu ứng xược trắng trên bề mặt vải giúp mặt vải trở nên đẹp và lạ mắt. Ngoài ra Linen cũng là một chất tự nhiên nguồn gốc từ cây lanh có độ bền, độ bóng cao, an toàn cho da và thân thiện với môi trường.\r\n\r\nVới 5% Spandex giúp cho chất liệu vải thành phẩm có độ co giãn tương đối tốt, giúp người mặc thoải mái trong ngày Hè. Việc bổ sung thêm sợi Polyester giúp khắc phục nhược điểm bạc màu của dòng vải Cotton, tăng độ bền vải, chống nhăn, chống mài mòn tốt và giúp màu sắc vải bắt mắt hơn lại giúp giảm giá thành đáng kể. ",
            "productImages": [
              {
                "imageID": 571,
                "productID": 114,
                "imagePath": "https://iili.io/JRQHG7j.jpg"
              },
              {
                "imageID": 572,
                "productID": 114,
                "imagePath": "https://iili.io/JRQHSkv.jpg"
              },
              {
                "imageID": 573,
                "productID": 114,
                "imagePath": "https://iili.io/JRQHbp4.jpg"
              },
              {
                "imageID": 574,
                "productID": 114,
                "imagePath": "https://iili.io/JRQJfvj.jpg"
              },
              {
                "imageID": 575,
                "productID": 114,
                "imagePath": "https://iili.io/JRQJRaa.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 419,
                "productID": 114,
                "sizeName": "S"
              },
              {
                "sizeID": 420,
                "productID": 114,
                "sizeName": "M"
              },
              {
                "sizeID": 421,
                "productID": 114,
                "sizeName": "L"
              },
              {
                "sizeID": 422,
                "productID": 114,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 419,
                "productID": 114,
                "sizeID": 419,
                "quantity": 41
              },
              {
                "quantityID": 420,
                "productID": 114,
                "sizeID": 420,
                "quantity": 41
              },
              {
                "quantityID": 421,
                "productID": 114,
                "sizeID": 421,
                "quantity": 42
              },
              {
                "quantityID": 422,
                "productID": 114,
                "sizeID": 422,
                "quantity": 51
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 115,
            "productName": "Quần Short Kaki Nam, Thiết Kết Cạp Cúc Smart",
            "productPrice": 449000,
            "productDescription": "Quần Short Kaki Nam, Thiết Kết Cạp Cúc Smart - Waist là lựa chọn dẫn đầu xu hướng thời trang hè hiện nay nhờ những ưu điểm vượt trội như thiết kế gọn gàng, tiện dụng. Điểm nhấn của mẫu quần này nằm ở phần cạp cúc Smart Waist thông minh với thiết kế giấu cúc sang trọng, thanh lịch, mang đến diện mạo nam tính đầy thu hút cho phái mạnh. Với màu sắc đa dạng cùng kiểu dáng Slim fit, tôn dáng, chuẩn phom, giúp người mặc thoải mái trong từng hoạt động.  \r\nQuần được làm từ Cotton truyền thống làm nên tên tuổi của dòng Khaki. Với sợi bông tự nhiên mang đặc tính vô cùng thoáng mát, thấm hút mồ hôi tốt. Thêm vào đó, kiểu dệt thoi giúp cho cấu trúc vải chắc chắn hơn, ít bị chảy hoặc giãn và tăng tuổi thọ của chiếc quần Kaki. Khi kết hợp với 3% Spandex giúp vải có độ co giãn nhẹ, giúp người mặc thoải mái hơn.",
            "productImages": [
              {
                "imageID": 576,
                "productID": 115,
                "imagePath": "https://iili.io/JRQ2Vpf.jpg"
              },
              {
                "imageID": 577,
                "productID": 115,
                "imagePath": "https://iili.io/JRQ2XI4.jpg"
              },
              {
                "imageID": 578,
                "productID": 115,
                "imagePath": "https://iili.io/JRQ2hhl.jpg"
              },
              {
                "imageID": 579,
                "productID": 115,
                "imagePath": "https://iili.io/JRQ2jQ2.jpg"
              },
              {
                "imageID": 580,
                "productID": 115,
                "imagePath": "https://iili.io/JRQ2OE7.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 423,
                "productID": 115,
                "sizeName": "S"
              },
              {
                "sizeID": 424,
                "productID": 115,
                "sizeName": "M"
              },
              {
                "sizeID": 425,
                "productID": 115,
                "sizeName": "L"
              },
              {
                "sizeID": 426,
                "productID": 115,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 423,
                "productID": 115,
                "sizeID": 423,
                "quantity": 51
              },
              {
                "quantityID": 424,
                "productID": 115,
                "sizeID": 424,
                "quantity": 21
              },
              {
                "quantityID": 425,
                "productID": 115,
                "sizeID": 425,
                "quantity": 51
              },
              {
                "quantityID": 426,
                "productID": 115,
                "sizeID": 426,
                "quantity": 51
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 116,
            "productName": "Quần Short Kaki Nam, Thiết Kết Cạp Chun Pha Cúc",
            "productPrice": 479000,
            "productDescription": "Quần Short Kaki Nam, Thiết Kết Cạp Chun Pha Cúc là mẫu quần short thiết kế bán chun linh hoạt cho vòng bụng, vừa thoải mái nhưng vẫn đảm bảo diện mạo chỉn chu, lịch sự cho nam giới. Phần chun eo giúp tăng độ co giãn, dễ mặc hơn. Quần Short Kaki được may tỉ mi kèm chi tiết thêu tay 5S Matter cực kì tinh tế. Quần sở hữu khóa YKK cao cấp, bền bỉ, đảm bảo không hỏng hóc hay hoen gỉ trong quá trình sử dụng. \r\n\r\nVới kiểu dáng Slim fit ôm vừa vặn kết hợp cùng điểm nhấn ốp dây dệt bản họa tiết ở cạp sau của quần short kaki góp phần mang đến một thiết kế trẻ trung, mới mẻ, dễ dàng mix cùng hầu hết các trang phục trong tủ đồ. ",
            "productImages": [
              {
                "imageID": 581,
                "productID": 116,
                "imagePath": "https://iili.io/JRQ28Yu.jpg"
              },
              {
                "imageID": 582,
                "productID": 116,
                "imagePath": "https://iili.io/JRQ2Skb.jpg"
              },
              {
                "imageID": 583,
                "productID": 116,
                "imagePath": "https://iili.io/JRQ2Upj.jpg"
              },
              {
                "imageID": 584,
                "productID": 116,
                "imagePath": "https://iili.io/JRQ2rTx.jpg"
              },
              {
                "imageID": 585,
                "productID": 116,
                "imagePath": "https://iili.io/JRQ24hQ.jpg"
              },
              {
                "imageID": 586,
                "productID": 116,
                "imagePath": "https://iili.io/JRQ26QV.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 427,
                "productID": 116,
                "sizeName": "S"
              },
              {
                "sizeID": 428,
                "productID": 116,
                "sizeName": "M"
              },
              {
                "sizeID": 429,
                "productID": 116,
                "sizeName": "L"
              },
              {
                "sizeID": 430,
                "productID": 116,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 427,
                "productID": 116,
                "sizeID": 427,
                "quantity": 61
              },
              {
                "quantityID": 428,
                "productID": 116,
                "sizeID": 428,
                "quantity": 51
              },
              {
                "quantityID": 429,
                "productID": 116,
                "sizeID": 429,
                "quantity": 21
              },
              {
                "quantityID": 430,
                "productID": 116,
                "sizeID": 430,
                "quantity": 59
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 117,
            "productName": "Quần Short Kaki Nam, Chất Cotton, Thoải Mái Vận Động",
            "productPrice": 499000,
            "productDescription": "Quần Short Kaki Nam, Chất Cotton, Thoải Mái Vận Động, là mẫu quần short mới với chất liệu Cotton Kaki thoáng mát, thấm hút mồ hôi và nhanh khô. Quần được thiết kế với kiểu dáng basic cùng cạp cúc sang trọng, thanh lịch, thích hợp để mặc hằng ngày, đi chơi, đi picnic đều phù hợp. Kiểu dáng Slim fit vừa vặn, tôn dáng, là item thiết thực nhất cho mùa hè nắng nóng giúp bạn nam luôn cảm thấy thoải mái trong từng chuyển động. ",
            "productImages": [
              {
                "imageID": 587,
                "productID": 117,
                "imagePath": "https://iili.io/JRQfJCQ.jpg"
              },
              {
                "imageID": 588,
                "productID": 117,
                "imagePath": "https://iili.io/JRQff8F.jpg"
              },
              {
                "imageID": 589,
                "productID": 117,
                "imagePath": "https://iili.io/JRQfoZv.jpg"
              },
              {
                "imageID": 590,
                "productID": 117,
                "imagePath": "https://iili.io/JRQf58X.jpg"
              },
              {
                "imageID": 591,
                "productID": 117,
                "imagePath": "https://iili.io/JRQfVFS.jpg"
              },
              {
                "imageID": 592,
                "productID": 117,
                "imagePath": "https://iili.io/JRQfUKB.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 431,
                "productID": 117,
                "sizeName": "S"
              },
              {
                "sizeID": 432,
                "productID": 117,
                "sizeName": "M"
              },
              {
                "sizeID": 433,
                "productID": 117,
                "sizeName": "L"
              },
              {
                "sizeID": 434,
                "productID": 117,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 431,
                "productID": 117,
                "sizeID": 431,
                "quantity": 81
              },
              {
                "quantityID": 432,
                "productID": 117,
                "sizeID": 432,
                "quantity": 47
              },
              {
                "quantityID": 433,
                "productID": 117,
                "sizeID": 433,
                "quantity": 39
              },
              {
                "quantityID": 434,
                "productID": 117,
                "sizeID": 434,
                "quantity": 37
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 118,
            "productName": "Quần Short Kaki Nam, Chất Liệu Cotton, Co Giãn Thoải Mái",
            "productPrice": 469000,
            "productDescription": " \r\nQuần Short Kaki, Chất Liệu Cotton, Co Giãn Thoải Mái là item must have cho mùa hè và những chuyến đi nhờ thiết kế trẻ trung, nam tính cùng form dáng Slim fit ôm vừa vặn, tôn dáng. Với thiết kế basic cùng bảng màu đa dạng, đây chính là mẫu quần short kaki nam linh hoạt cho mọi lứa tuổi và mọi dáng người.",
            "productImages": [
              {
                "imageID": 593,
                "productID": 118,
                "imagePath": "https://iili.io/JRQfJCQ.jpg"
              },
              {
                "imageID": 594,
                "productID": 118,
                "imagePath": "https://iili.io/JRQff8F.jpg"
              },
              {
                "imageID": 595,
                "productID": 118,
                "imagePath": "https://iili.io/JRQfoZv.jpg"
              },
              {
                "imageID": 596,
                "productID": 118,
                "imagePath": "https://iili.io/JRQfVFS.jpg"
              },
              {
                "imageID": 597,
                "productID": 118,
                "imagePath": "https://iili.io/JRQfUKB.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 435,
                "productID": 118,
                "sizeName": "S"
              },
              {
                "sizeID": 436,
                "productID": 118,
                "sizeName": "M"
              },
              {
                "sizeID": 437,
                "productID": 118,
                "sizeName": "L"
              },
              {
                "sizeID": 438,
                "productID": 118,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 435,
                "productID": 118,
                "sizeID": 435,
                "quantity": 51
              },
              {
                "quantityID": 436,
                "productID": 118,
                "sizeID": 436,
                "quantity": 57
              },
              {
                "quantityID": 437,
                "productID": 118,
                "sizeID": 437,
                "quantity": 85
              },
              {
                "quantityID": 438,
                "productID": 118,
                "sizeID": 438,
                "quantity": 37
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          }
        ],
        "subCategories": null
      },
      {
        "categoryID": 11,
        "categoryName": "Quần Short Tây",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXLua.webp",
        "products": [
          {
            "productID": 110,
            "productName": "Quần Short Âu Nam, Cạp Cúc, Thêu Logo Sang Trọng",
            "productPrice": 569000,
            "productDescription": "Quần Short Âu Nam, Cạp Cúc, Thêu Logo Sang Trọng là mẫu quần được ưa chuộng nhờ thiết kế basic với đường cắt may tinh tế, tỉ mỉ, mang đến diện mạo chỉn chu, lịch lãm cho quý ông trong mọi hoàn cảnh. Quần có form dáng Regular fit suông vừa, không ôm quá sát nhưng vẫn tôn dáng, tạo cảm giác thoải mái cho người mặc. Quần sở hữu bảng màu đa dạng với các tone màu trung tính, dễ mặc và dễ phối cho bạn nam thỏa sức lựa chọn. ",
            "productImages": [
              {
                "imageID": 550,
                "productID": 110,
                "imagePath": "https://iili.io/JRLLyfR.jpg"
              },
              {
                "imageID": 551,
                "productID": 110,
                "imagePath": "https://iili.io/JRLQ9lp.jpg"
              },
              {
                "imageID": 552,
                "productID": 110,
                "imagePath": "https://iili.io/JRLQHUN.jpg"
              },
              {
                "imageID": 553,
                "productID": 110,
                "imagePath": "https://iili.io/JRLQdJI.jpg"
              },
              {
                "imageID": 554,
                "productID": 110,
                "imagePath": "https://iili.io/JRLQ2Rt.jpg"
              },
              {
                "imageID": 555,
                "productID": 110,
                "imagePath": "https://iili.io/JRLQ3OX.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 403,
                "productID": 110,
                "sizeName": "S"
              },
              {
                "sizeID": 404,
                "productID": 110,
                "sizeName": "M"
              },
              {
                "sizeID": 405,
                "productID": 110,
                "sizeName": "L"
              },
              {
                "sizeID": 406,
                "productID": 110,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 403,
                "productID": 110,
                "sizeID": 403,
                "quantity": 34
              },
              {
                "quantityID": 404,
                "productID": 110,
                "sizeID": 404,
                "quantity": 23
              },
              {
                "quantityID": 405,
                "productID": 110,
                "sizeID": 405,
                "quantity": 34
              },
              {
                "quantityID": 406,
                "productID": 110,
                "sizeID": 406,
                "quantity": 43
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          }
        ],
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 12,
    "categoryName": "Quần Lót",
    "parentCategoryID": null,
    "imagePath": null,
    "products": null,
    "subCategories": [
      {
        "categoryID": 13,
        "categoryName": "Quần Lót Boxer",
        "parentCategoryID": 12,
        "imagePath": "https://iili.io/J5HjR5X.webp",
        "products": [
          {
            "productID": 142,
            "productName": "Quần Lót Nam, Kháng Khuẩn Hiệu Quả ",
            "productPrice": 96000,
            "productDescription": "Quần Lót Nam, Kháng Khuẩn Hiệu Quả là mẫu quần sịp nam dáng boxer ôm sát vừa vặn với cơ thể, nâng đỡ tốt cho vùng nhạy cảm, tạo cảm giác thoáng mát và thoải mái tối đa khi mặc. Quần được thiết kế cạp chun dệt logo với độ co giãn tốt, không gây lằn bụng. \r\n\r\nQuần sịp đùi nam nổi bật với chất liệu thun lạnh Coolmax sở hữu độ dẻo dai, mềm mại và co giãn bền bỉ cho mọi kích cỡ được kết hợp cùng thiết kế với hàng ngàn lỗ thoáng khí giúp phái mạnh tự tin trong mọi hoạt động hằng ngày. \r\n",
            "productImages": [
              {
                "imageID": 689,
                "productID": 142,
                "imagePath": "https://iili.io/JRDGkb9.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 530,
                "productID": 142,
                "sizeName": "S"
              },
              {
                "sizeID": 531,
                "productID": 142,
                "sizeName": "M"
              },
              {
                "sizeID": 532,
                "productID": 142,
                "sizeName": "L"
              },
              {
                "sizeID": 533,
                "productID": 142,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 530,
                "productID": 142,
                "sizeID": 530,
                "quantity": 50
              },
              {
                "quantityID": 531,
                "productID": 142,
                "sizeID": 531,
                "quantity": 50
              },
              {
                "quantityID": 532,
                "productID": 142,
                "sizeID": 532,
                "quantity": 50
              },
              {
                "quantityID": 533,
                "productID": 142,
                "sizeID": 533,
                "quantity": 50
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 146,
            "productName": "Quần lót nam Modal Air  dáng Trunk",
            "productPrice": 96000,
            "productDescription": "Quần lót nam Modal Air được ra mắt trong BST đồ lót Micro Modal Air lần đầu tiên và duy nhất có tại Việt Nam.\r\n\r\nVới sự kết hợp giữa 92% Micro modal air + 8% spandex tạo nên dòng sản phẩm ưu việt.\r\n\r\nChất liệu Modal vốn là chất liệu có nguồn gốc từ gỗ sồi, nhưng qua nghiên cứu và dệt sợi trên quy trình hiện đại đã tạo nên những thước vải mang tính ưu việt: thân thiện với làn da, không gây kích ứng, có đặc tính kháng khuẩn tự nhiên, thông hơi, thoáng khí, thoải mái suốt ngày dài",
            "productImages": [
              {
                "imageID": 693,
                "productID": 146,
                "imagePath": "https://iili.io/JRDME7V.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 546,
                "productID": 146,
                "sizeName": "S"
              },
              {
                "sizeID": 547,
                "productID": 146,
                "sizeName": "M"
              },
              {
                "sizeID": 548,
                "productID": 146,
                "sizeName": "L"
              },
              {
                "sizeID": 549,
                "productID": 146,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 546,
                "productID": 146,
                "sizeID": 546,
                "quantity": 50
              },
              {
                "quantityID": 547,
                "productID": 146,
                "sizeID": 547,
                "quantity": 50
              },
              {
                "quantityID": 548,
                "productID": 146,
                "sizeID": 548,
                "quantity": 50
              },
              {
                "quantityID": 549,
                "productID": 146,
                "sizeID": 549,
                "quantity": 50
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 147,
            "productName": "Quấn lót nam MICROFIBER STRUCTURE EASY FIT dáng Trunk",
            "productPrice": 96000,
            "productDescription": "Quấn lót nam MICROFIBER STRUCTURE EASY FIT dáng Trunk được ra mắt trong BST đồ lót Micro Modal Air lần đầu tiên và duy nhất có tại Việt Nam.\r\n\r\nVới sự kết hợp giữa 92% Micro modal air + 8% spandex tạo nên dòng sản phẩm ưu việt.\r\n\r\nChất liệu Modal vốn là chất liệu có nguồn gốc từ gỗ sồi, nhưng qua nghiên cứu và dệt sợi trên quy trình hiện đại đã tạo nên những thước vải mang tính ưu việt: thân thiện với làn da, không gây kích ứng, có đặc tính kháng khuẩn tự nhiên, thông hơi, thoáng khí, thoải mái suốt ngày dài",
            "productImages": [
              {
                "imageID": 694,
                "productID": 147,
                "imagePath": "https://iili.io/JRDVFYQ.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 550,
                "productID": 147,
                "sizeName": "S"
              },
              {
                "sizeID": 551,
                "productID": 147,
                "sizeName": "M"
              },
              {
                "sizeID": 552,
                "productID": 147,
                "sizeName": "L"
              },
              {
                "sizeID": 553,
                "productID": 147,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 550,
                "productID": 147,
                "sizeID": 550,
                "quantity": 50
              },
              {
                "quantityID": 551,
                "productID": 147,
                "sizeID": 551,
                "quantity": 50
              },
              {
                "quantityID": 552,
                "productID": 147,
                "sizeID": 552,
                "quantity": 50
              },
              {
                "quantityID": 553,
                "productID": 147,
                "sizeID": 553,
                "quantity": 50
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 148,
            "productName": "Quần lót nam VISCOSE EXTRA SOFT dáng Trunk",
            "productPrice": 96000,
            "productDescription": "Quần lót nam VISCOSE EXTRA SOFT dáng Trunkđược ra mắt trong BST đồ lót Micro Modal Air lần đầu tiên và duy nhất có tại Việt Nam.\r\n\r\nVới sự kết hợp giữa 92% Micro modal air + 8% spandex tạo nên dòng sản phẩm ưu việt.\r\n\r\nChất liệu Modal vốn là chất liệu có nguồn gốc từ gỗ sồi, nhưng qua nghiên cứu và dệt sợi trên quy trình hiện đại đã tạo nên những thước vải mang tính ưu việt: thân thiện với làn da, không gây kích ứng, có đặc tính kháng khuẩn tự nhiên, thông hơi, thoáng khí, thoải mái suốt ngày dài",
            "productImages": [
              {
                "imageID": 695,
                "productID": 148,
                "imagePath": "https://iili.io/JRDVUcx.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 554,
                "productID": 148,
                "sizeName": "S"
              },
              {
                "sizeID": 555,
                "productID": 148,
                "sizeName": "M"
              },
              {
                "sizeID": 556,
                "productID": 148,
                "sizeName": "L"
              },
              {
                "sizeID": 557,
                "productID": 148,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 554,
                "productID": 148,
                "sizeID": 554,
                "quantity": 50
              },
              {
                "quantityID": 555,
                "productID": 148,
                "sizeID": 555,
                "quantity": 50
              },
              {
                "quantityID": 556,
                "productID": 148,
                "sizeID": 556,
                "quantity": 50
              },
              {
                "quantityID": 557,
                "productID": 148,
                "sizeID": 557,
                "quantity": 50
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          }
        ],
        "subCategories": null
      },
      {
        "categoryID": 14,
        "categoryName": "Quần Lót Brief",
        "parentCategoryID": 12,
        "imagePath": "https://iili.io/J5HjR5X.webp",
        "products": [
          {
            "productID": 140,
            "productName": "Quần Lót Nam, Kháng Khuẩn Hiệu Quả",
            "productPrice": 96000,
            "productDescription": "Quần Lót Nam, Kháng Khuẩn Hiệu Quả là thiết kế quần sịp nam brief thông hơi với hàng ngàn lỗ thoáng khí cực kỳ thoải mái. Quần sở hữu lớp kháng khuẩn giúp bảo vệ da một cách tối ưu, chống ẩm và hạn chế nấm mốc cực tốt, an toàn với làn da vùng nhạy cảm. Chất liệu Coolmax sở hữu độ dẻo dai, mềm mại và co giãn bền bỉ cho mọi kích cỡ, từ đó giúp nam giới tự tin trong các hoạt động hằng ngày. \r\n\r\n",
            "productImages": [
              {
                "imageID": 686,
                "productID": 140,
                "imagePath": "https://iili.io/JRD0hlV.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 522,
                "productID": 140,
                "sizeName": "S"
              },
              {
                "sizeID": 523,
                "productID": 140,
                "sizeName": "M"
              },
              {
                "sizeID": 524,
                "productID": 140,
                "sizeName": "L"
              },
              {
                "sizeID": 525,
                "productID": 140,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 522,
                "productID": 140,
                "sizeID": 522,
                "quantity": 40
              },
              {
                "quantityID": 523,
                "productID": 140,
                "sizeID": 523,
                "quantity": 40
              },
              {
                "quantityID": 524,
                "productID": 140,
                "sizeID": 524,
                "quantity": 40
              },
              {
                "quantityID": 525,
                "productID": 140,
                "sizeID": 525,
                "quantity": 20
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          },
          {
            "productID": 141,
            "productName": "Quần Lót Nam, Kháng Khuẩn Hiệu Quả",
            "productPrice": 96000,
            "productDescription": "Quần Lót Nam, Kháng Khuẩn Hiệu Quả là thiết kế quần sịp nam brief thông hơi với hàng ngàn lỗ thoáng khí cực kỳ thoải mái. Quần sở hữu lớp kháng khuẩn giúp bảo vệ da một cách tối ưu, chống ẩm và hạn chế nấm mốc cực tốt, an toàn với làn da vùng nhạy cảm. Chất liệu Coolmax sở hữu độ dẻo dai, mềm mại và co giãn bền bỉ cho mọi kích cỡ, từ đó giúp nam giới tự tin trong các hoạt động hằng ngày. \r\n\r\n",
            "productImages": [
              {
                "imageID": 687,
                "productID": 141,
                "imagePath": "https://iili.io/JRD0DWG.jpg"
              },
              {
                "imageID": 688,
                "productID": 141,
                "imagePath": "https://iili.io/JRD0bsf.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 526,
                "productID": 141,
                "sizeName": "S"
              },
              {
                "sizeID": 527,
                "productID": 141,
                "sizeName": "M"
              },
              {
                "sizeID": 528,
                "productID": 141,
                "sizeName": "L"
              },
              {
                "sizeID": 529,
                "productID": 141,
                "sizeName": "XL"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 526,
                "productID": 141,
                "sizeID": 526,
                "quantity": 50
              },
              {
                "quantityID": 527,
                "productID": 141,
                "sizeID": 527,
                "quantity": 50
              },
              {
                "quantityID": 528,
                "productID": 141,
                "sizeID": 528,
                "quantity": 50
              },
              {
                "quantityID": 529,
                "productID": 141,
                "sizeID": 529,
                "quantity": 50
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          }
        ],
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 15,
    "categoryName": "Phụ Kiện",
    "parentCategoryID": null,
    "imagePath": null,
    "products": null,
    "subCategories": [
      {
        "categoryID": 16,
        "categoryName": "Tất Nam",
        "parentCategoryID": 15,
        "imagePath": "https://iili.io/J5HwxTu.jpg",
        "products": [
          {
            "productID": 109,
            "productName": "Tất Nam, Kháng Khuẩn, Khử Mùi ",
            "productPrice": 19000,
            "productDescription": "Tất Nam sử dụng chất liệu Cotton mềm mại, thấm hút mồ tốt, sản phẩm giữ cho đôi chân luôn thoáng mát nên rất phù hợp với những ai thường mang giày cả ngày. Sản phẩm được dệt bo tròn cổ đảm bảo không bị tụt trong suốt quá trình vận động, đi lại.",
            "productImages": [
              {
                "imageID": 545,
                "productID": 109,
                "imagePath": "https://iili.io/JRQ9dtS.jpg"
              },
              {
                "imageID": 546,
                "productID": 109,
                "imagePath": "https://iili.io/JRQ93o7.jpg"
              },
              {
                "imageID": 547,
                "productID": 109,
                "imagePath": "https://iili.io/JRQ9KPe.jpg"
              },
              {
                "imageID": 548,
                "productID": 109,
                "imagePath": "https://iili.io/JRQ9qKu.jpg"
              },
              {
                "imageID": 549,
                "productID": 109,
                "imagePath": "https://iili.io/JRQ9Bcb.jpg"
              }
            ],
            "productSizes": [
              {
                "sizeID": 402,
                "productID": 109,
                "sizeName": "M"
              }
            ],
            "productQuantities": [
              {
                "quantityID": 402,
                "productID": 109,
                "sizeID": 402,
                "quantity": 100
              }
            ],
            "category": null,
            "parentCategory": null,
            "quantitySold": 0
          }
        ],
        "subCategories": null
      }
    ]
  }
];

const HomePage = () => {
  const [collections, setCollections] = useState(collectionsData);

  return (
      <main id="main">
        <ScrollToTop />
        <SlideBanner />
        <section className="home-content" style={{marginTop:"50px"}}>
          <CategorySection />
          {
            collections.map((collectionData, index) => (
                <CollectionSection key={index} collectionData={collectionData} />
            ))
          }
        </section>

      </main>
  );
}

export default HomePage;