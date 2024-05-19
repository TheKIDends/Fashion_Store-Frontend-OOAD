import React, {useEffect, useRef, useState} from "react";
import "./style.scss";
import "./css/_search.css"

import ProductsSection from "./ProductsSection/ProductsSection";
import {useLocation} from "react-router-dom";
import {toast} from "react-toastify";

import fillterIcon from "../categoryPage/images/bars-filter.svg";

import {ScrollToTop} from '@Utils';
import {API, FILTERS, IMAGE_URL, MESSAGE, NUMBER_PRODUCT_LIMIT, SEARCH_PRODUCT_PAGE, SORT} from "@Const";
import {ConfigProvider, Select} from "antd";

const searchData = [
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 2
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 98,
    "productName": "Quần Short Thể Thao Nam, Thoáng Mát, Co Giãn",
    "productPrice": 449000,
    "productDescription": "Quần Short Thể Thao Nam, Thoáng Mát, Co Giãn được thiết kế theo phong cách trẻ trung, tôn dáng, thích hợp cho mọi hoạt động, dù là mặc thường ngày hay đi tập, đi chạy bộ... Chất liệu cao cấp, vừa mỏng nhẹ, vừa thoáng mát cùng khả năng chống nhăn nhàu vượt trội, giúp giữ cho chiếc quần luôn đứng phom, khỏe khoắn khi mặc. Bảng màu đa dạng, chủ yếu là các gam màu trầm dễ mặc, dễ phối. \r\n\r\nThiết kế basic với 2 túi vát và 1 túi sau tiện dụng. Cạp chun với dây điều chỉnh giúp chiếc quần trở nên thoải mái hơn khi mặc, phù hợp với mọi dáng người. Điểm nhấn của mẫu quần này nằm ở logo thêu tay bên đùi vô cùng tinh tế, tỉ mỉ mang tới diện mạo thanh lịch, nam tính mà không kém phần thoải mái.",
    "productImages": [
      {
        "imageID": 478,
        "productID": 98,
        "imagePath": "https://iili.io/JRLDl1f.jpg"
      },
      {
        "imageID": 479,
        "productID": 98,
        "imagePath": "https://iili.io/JRLD0g4.jpg"
      },
      {
        "imageID": 480,
        "productID": 98,
        "imagePath": "https://iili.io/JRLDEdl.jpg"
      },
      {
        "imageID": 481,
        "productID": 98,
        "imagePath": "https://iili.io/JRLDG72.jpg"
      },
      {
        "imageID": 482,
        "productID": 98,
        "imagePath": "https://iili.io/JRLDMeS.jpg"
      },
      {
        "imageID": 483,
        "productID": 98,
        "imagePath": "https://iili.io/JRLDVm7.jpg"
      },
      {
        "imageID": 484,
        "productID": 98,
        "imagePath": "https://iili.io/JRLDXI9.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 357,
        "productID": 98,
        "sizeName": "S"
      },
      {
        "sizeID": 358,
        "productID": 98,
        "sizeName": "M"
      },
      {
        "sizeID": 359,
        "productID": 98,
        "sizeName": "L"
      },
      {
        "sizeID": 360,
        "productID": 98,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 357,
        "productID": 98,
        "sizeID": 357,
        "quantity": 84
      },
      {
        "quantityID": 358,
        "productID": 98,
        "sizeID": 358,
        "quantity": 94
      },
      {
        "quantityID": 359,
        "productID": 98,
        "sizeID": 359,
        "quantity": 43
      },
      {
        "quantityID": 360,
        "productID": 98,
        "sizeID": 360,
        "quantity": 62
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 99,
    "productName": "Quần Short Thể Thao Nam, Cạp Chun, Thoáng Mát",
    "productPrice": 398000,
    "productDescription": "Quần Short Thể Thao Nam, Thoáng Mát, Co Giãn được thiết kế theo phong cách trẻ trung, tôn dáng, thích hợp cho mọi hoạt động, dù là mặc thường ngày hay đi tập, đi chạy bộ... Chất liệu cao cấp, vừa mỏng nhẹ, vừa thoáng mát cùng khả năng chống nhăn nhàu vượt trội, giúp giữ cho chiếc quần luôn đứng phom, khỏe khoắn khi mặc. Bảng màu đa dạng, chủ yếu là các gam màu trầm dễ mặc, dễ phối. \r\n\r\nThiết kế basic với 2 túi vát và 1 túi sau tiện dụng. Cạp chun với dây điều chỉnh giúp chiếc quần trở nên thoải mái hơn khi mặc, phù hợp với mọi dáng người. Điểm nhấn của mẫu quần này nằm ở logo thêu tay bên đùi vô cùng tinh tế, tỉ mỉ mang tới diện mạo thanh lịch, nam tính mà không kém phần thoải mái.",
    "productImages": [
      {
        "imageID": 485,
        "productID": 99,
        "imagePath": "https://iili.io/JRLDerx.jpg"
      },
      {
        "imageID": 486,
        "productID": 99,
        "imagePath": "https://iili.io/JRLDvdQ.jpg"
      },
      {
        "imageID": 487,
        "productID": 99,
        "imagePath": "https://iili.io/JRLD87V.jpg"
      },
      {
        "imageID": 488,
        "productID": 99,
        "imagePath": "https://iili.io/JRLDSkB.jpg"
      },
      {
        "imageID": 489,
        "productID": 99,
        "imagePath": "https://iili.io/JRLDUmP.jpg"
      },
      {
        "imageID": 490,
        "productID": 99,
        "imagePath": "https://iili.io/JRLDrI1.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 361,
        "productID": 99,
        "sizeName": "S"
      },
      {
        "sizeID": 362,
        "productID": 99,
        "sizeName": "M"
      },
      {
        "sizeID": 363,
        "productID": 99,
        "sizeName": "L"
      },
      {
        "sizeID": 364,
        "productID": 99,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 361,
        "productID": 99,
        "sizeID": 361,
        "quantity": 84
      },
      {
        "quantityID": 362,
        "productID": 99,
        "sizeID": 362,
        "quantity": 94
      },
      {
        "quantityID": 363,
        "productID": 99,
        "sizeID": 363,
        "quantity": 43
      },
      {
        "quantityID": 364,
        "productID": 99,
        "sizeID": 364,
        "quantity": 62
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 100,
    "productName": "Quần Short Thể Thao Nam, Thoáng Mát, Thấm Hút Mồ Hôi",
    "productPrice": 479000,
    "productDescription": "Quần Short Thể Thao, Thoáng Mát, Thấm Hút Mồ Hôi nổi bật với kiểu dáng dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn đảm bảo cảm giác thoải mái khi vận động. Đây là item quần short thể thao \"hot\" của nhà 5S Fashion giúp dễ dàng phối kết hợp với mọi loại áo hè mà ai cũng cần có trong tủ đồ. Thiết kế cạp cúc lịch sự, tôn dáng giúp mẫu quần này phù hợp mặc cả khi đi chơi, đi dạo phố, hẹn hò hay mặc hằng ngày ở nhà.\r\n\r\nThiết kế túi vát 2 bên kết hợp cùng túi sau tiện lợi. Bảng màu đa dạng với các tone màu từ trung tính, dễ mặc và dễ phối. Quần với sự kết hợp của 2 thành phần chất liệu là 90% Polyamide 10% Spandex. Polyamide là tên gọi khác của Freezing Nylon, thường được dùng cho dòng quần short, sịp. Với ưu điểm mềm mướt, bề mặt sáng bóng và nhẵn mịn, sợi vải mát lạnh, nhuộm màu sắc nét và tính đàn hồi tự nhiên cao. Kết hợp với tỉ lệ Spandex cao giúp sản phẩm có độ đàn hồi cực tốt, giúp người mặc thoải mái vận động & tham gia các hoạt động thể thao.",
    "productImages": [
      {
        "imageID": 491,
        "productID": 100,
        "imagePath": "https://iili.io/JRLb24f.jpg"
      },
      {
        "imageID": 492,
        "productID": 100,
        "imagePath": "https://iili.io/JRLbF24.jpg"
      },
      {
        "imageID": 493,
        "productID": 100,
        "imagePath": "https://iili.io/JRLbKYl.jpg"
      },
      {
        "imageID": 494,
        "productID": 100,
        "imagePath": "https://iili.io/JRLbfv2.jpg"
      },
      {
        "imageID": 495,
        "productID": 100,
        "imagePath": "https://iili.io/JRLbIEb.jpg"
      },
      {
        "imageID": 496,
        "productID": 100,
        "imagePath": "https://iili.io/JRLbA3x.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 365,
        "productID": 100,
        "sizeName": "S"
      },
      {
        "sizeID": 366,
        "productID": 100,
        "sizeName": "M"
      },
      {
        "sizeID": 367,
        "productID": 100,
        "sizeName": "L"
      },
      {
        "sizeID": 368,
        "productID": 100,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 365,
        "productID": 100,
        "sizeID": 365,
        "quantity": 53
      },
      {
        "quantityID": 366,
        "productID": 100,
        "sizeID": 366,
        "quantity": 81
      },
      {
        "quantityID": 367,
        "productID": 100,
        "sizeID": 367,
        "quantity": 51
      },
      {
        "quantityID": 368,
        "productID": 100,
        "sizeID": 368,
        "quantity": 82
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 101,
    "productName": "Quần Short Thể Thao Nam, Cạp Cúc In Chữ Keep Fit",
    "productPrice": 399000,
    "productDescription": "Quần Short Thể Thao Nam, Cạp Cúc In Chữ Keep Fit là item manh phong cách thể thao, khỏe khoắn không thể thiếu trong mùa hè này. Với chất liệu cao cấp, vừa mỏng nhẹ, thoáng mát, vừa chống nhăn nhàu hiệu quả, giúp cho quần short thể thao luôn đứng form, khỏe khoắn khi mặc. Với kiểu dáng Slim fit ôm dáng vừa vặn, quần giúp các chàng trai tự tin khoe ra vóc dáng cơ thể săn chắc và chuẩn đẹp. Bảng màu đa dạng với các tone màu trung tính, dễ mặc, dễ phối và đặc biệt mát mẻ cho ngày hè oi bức.",
    "productImages": [
      {
        "imageID": 497,
        "productID": 101,
        "imagePath": "https://iili.io/JRLbWaR.jpg"
      },
      {
        "imageID": 498,
        "productID": 101,
        "imagePath": "https://iili.io/JRLbXvp.jpg"
      },
      {
        "imageID": 499,
        "productID": 101,
        "imagePath": "https://iili.io/JRLbhyN.jpg"
      },
      {
        "imageID": 500,
        "productID": 101,
        "imagePath": "https://iili.io/JRLbwuI.jpg"
      },
      {
        "imageID": 501,
        "productID": 101,
        "imagePath": "https://iili.io/JRLbNjt.jpg"
      },
      {
        "imageID": 502,
        "productID": 101,
        "imagePath": "https://iili.io/JRLbOZX.jpg"
      },
      {
        "imageID": 503,
        "productID": 101,
        "imagePath": "https://iili.io/JRLbknn.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 369,
        "productID": 101,
        "sizeName": "S"
      },
      {
        "sizeID": 370,
        "productID": 101,
        "sizeName": "M"
      },
      {
        "sizeID": 371,
        "productID": 101,
        "sizeName": "L"
      },
      {
        "sizeID": 372,
        "productID": 101,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 369,
        "productID": 101,
        "sizeID": 369,
        "quantity": 53
      },
      {
        "quantityID": 370,
        "productID": 101,
        "sizeID": 370,
        "quantity": 81
      },
      {
        "quantityID": 371,
        "productID": 101,
        "sizeID": 371,
        "quantity": 51
      },
      {
        "quantityID": 372,
        "productID": 101,
        "sizeID": 372,
        "quantity": 82
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 102,
    "productName": "Quần Short Thể Thao Nam, Vải Thun Lạnh Thoáng Mát",
    "productPrice": 349000,
    "productDescription": "Quần Short Nam, Vải Thun Lạnh Thoáng Mát là thiết kế vừa đáp ứng tiêu chí thời trang, cuốn hút, vừa tiện dụng, thoải mái trong mọi hoạt động. Thiết kế đơn giản, phối màu chạy dọc 2 bên quần tạo ứng năng động, khỏe khoắn cho tổng thể. Chất liệu Freezing Nylon mềm mát, co giãn tốt, thấm hút mồ hôi, đem lại trải nghiệm thoáng mát tối đa khi mặc. Bảng màu đa dạng, chủ yếu là các tone màu trung tính, dễ mặc, thích hợp để mặc hằng ngày hay tham gia các hoạt động thể thao như chạy bộ, tập gym...  ",
    "productImages": [
      {
        "imageID": 504,
        "productID": 102,
        "imagePath": "https://iili.io/JRLbiw7.jpg"
      },
      {
        "imageID": 505,
        "productID": 102,
        "imagePath": "https://iili.io/JRLbst9.jpg"
      },
      {
        "imageID": 506,
        "productID": 102,
        "imagePath": "https://iili.io/JRLbQne.jpg"
      },
      {
        "imageID": 507,
        "productID": 102,
        "imagePath": "https://iili.io/JRLbZMu.jpg"
      },
      {
        "imageID": 508,
        "productID": 102,
        "imagePath": "https://iili.io/JRLbt6b.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 373,
        "productID": 102,
        "sizeName": "S"
      },
      {
        "sizeID": 374,
        "productID": 102,
        "sizeName": "M"
      },
      {
        "sizeID": 375,
        "productID": 102,
        "sizeName": "L"
      },
      {
        "sizeID": 376,
        "productID": 102,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 373,
        "productID": 102,
        "sizeID": 373,
        "quantity": 82
      },
      {
        "quantityID": 374,
        "productID": 102,
        "sizeID": 374,
        "quantity": 34
      },
      {
        "quantityID": 375,
        "productID": 102,
        "sizeID": 375,
        "quantity": 82
      },
      {
        "quantityID": 376,
        "productID": 102,
        "sizeID": 376,
        "quantity": 45
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 103,
    "productName": "Quần Short Thể Thao Nam, Cạp Chun, Thoáng Mát",
    "productPrice": 409000,
    "productDescription": "Quần Short Thể Thao Nam, Cạp Chun, Thoáng Mát là must have item không thể thiếu trong tủ đồ của nam giới với khả năng chống nhăn lên tới 99%. Với chất liệu cao cấp, mỏng nhẹ, thoáng mát, giữ cho chiếc quần luôn đứng form, khỏe khoắn khi mặc. Bảng màu quần đa dạng, thiết kế đơn giản, trẻ trung mang phong cách thể thao, khỏe khoắn, phù hợp với mọi lứa tuổi. Đây là mẫu quần short thể thao được yêu thích nhất tại.\r\n\r\nQuần có kiểu dáng Slim fit vừa vặn, tôn dáng mà vẫn đảm bảo mang tới trải nghiệm thoải mái trong từng cử động. Thiết kế khỏe khoắn với túi quần tiện dụng. Quần có cạp chun co giãn kết hợp với dây rút linh hoạt giúp người mặc dễ dàng điều chỉnh và thoải mái trong từng vận động. ",
    "productImages": [
      {
        "imageID": 509,
        "productID": 103,
        "imagePath": "https://iili.io/JRLmzNI.jpg"
      },
      {
        "imageID": 510,
        "productID": 103,
        "imagePath": "https://iili.io/JRLmItt.jpg"
      },
      {
        "imageID": 511,
        "productID": 103,
        "imagePath": "https://iili.io/JRLmuoX.jpg"
      },
      {
        "imageID": 512,
        "productID": 103,
        "imagePath": "https://iili.io/JRLmAVn.jpg"
      },
      {
        "imageID": 513,
        "productID": 103,
        "imagePath": "https://iili.io/JRLm7KG.jpg"
      },
      {
        "imageID": 514,
        "productID": 103,
        "imagePath": "https://iili.io/JRLmYlf.jpg"
      },
      {
        "imageID": 515,
        "productID": 103,
        "imagePath": "https://iili.io/JRLmaS4.jpg"
      },
      {
        "imageID": 516,
        "productID": 103,
        "imagePath": "https://iili.io/JRLmlHl.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 377,
        "productID": 103,
        "sizeName": "S"
      },
      {
        "sizeID": 378,
        "productID": 103,
        "sizeName": "M"
      },
      {
        "sizeID": 379,
        "productID": 103,
        "sizeName": "L"
      },
      {
        "sizeID": 380,
        "productID": 103,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 377,
        "productID": 103,
        "sizeID": 377,
        "quantity": 82
      },
      {
        "quantityID": 378,
        "productID": 103,
        "sizeID": 378,
        "quantity": 34
      },
      {
        "quantityID": 379,
        "productID": 103,
        "sizeID": 379,
        "quantity": 82
      },
      {
        "quantityID": 380,
        "productID": 103,
        "sizeID": 380,
        "quantity": 45
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 104,
    "productName": "Quần Short Thể Thao Nam, Cạp Chun Thoáng Khí ",
    "productPrice": 389000,
    "productDescription": "Quần Short Thể Thao Nam, Cạp Chun Thoáng Khí sở hữu phom dáng Slim fit ôm vừa vặn, tôn dáng mà vẫn đảm bảo trải nghiệm thoải mái khi vận động. Quần short thể thao được thiết kế khỏe khoắn với túi 2 bên và túi sau mông tiện lợi. Thiết kế cạp chun co giãn kết hợp với dây rút linh hoạt, dễ dàng phù hợp với mọi dáng người khác nhau. Bảng màu quần đa dạng, chủ yếu là các gam màu trung tính, dễ mặc, dễ phối, đem tới nhiều lựa kết hợp trang phục cho mùa hè này.",
    "productImages": [
      {
        "imageID": 517,
        "productID": 104,
        "imagePath": "https://iili.io/JRLm4fa.jpg"
      },
      {
        "imageID": 518,
        "productID": 104,
        "imagePath": "https://iili.io/JRLm60J.jpg"
      },
      {
        "imageID": 519,
        "productID": 104,
        "imagePath": "https://iili.io/JRLmPUv.jpg"
      },
      {
        "imageID": 520,
        "productID": 104,
        "imagePath": "https://iili.io/JRLmsJR.jpg"
      },
      {
        "imageID": 521,
        "productID": 104,
        "imagePath": "https://iili.io/JRLmLRp.jpg"
      },
      {
        "imageID": 522,
        "productID": 104,
        "imagePath": "https://iili.io/JRLmQON.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 381,
        "productID": 104,
        "sizeName": "S"
      },
      {
        "sizeID": 382,
        "productID": 104,
        "sizeName": "M"
      },
      {
        "sizeID": 383,
        "productID": 104,
        "sizeName": "L"
      },
      {
        "sizeID": 384,
        "productID": 104,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 381,
        "productID": 104,
        "sizeID": 381,
        "quantity": 44
      },
      {
        "quantityID": 382,
        "productID": 104,
        "sizeID": 382,
        "quantity": 52
      },
      {
        "quantityID": 383,
        "productID": 104,
        "sizeID": 383,
        "quantity": 68
      },
      {
        "quantityID": 384,
        "productID": 104,
        "sizeID": 384,
        "quantity": 45
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 105,
    "productName": "Quần Short Thể Thao Nam, RUNNING, Thoáng Mát",
    "productPrice": 409000,
    "productDescription": "Quần Short Thể Thao Nam RUNNING, Thoáng Mát, Nhanh Khô là mẫu quần được thiết kế với form dáng Slim fit ôm nhẹ vừa vặn mà vẫn đảm bảo cảm giác thoải mái khi vận động. Sở hữu thiết kế basic khỏe khoắn, túi quần trước sau tiện lợi cùng phần cạp cục nam tính, chỉn chu, mẫu quần short thể thao này có thể dễ dàng phối kết hợp với hầu hết các trang phục khác nhau.\r\n\r\nĐây là mẫu quần short thể thao cạp cúc phối can cạp chun lót bên trong vừa mang đến diện mạo chỉn chu, thanh lịch, vừa không lo gò bó khi mặc. Logo Just Keep Running trước gấu quần được in silicon nổi bằng công nghệ High-tech cao cấp, đảm bảo không bong tróc trong quá trình sử dụng, giặt là. ",
    "productImages": [
      {
        "imageID": 523,
        "productID": 105,
        "imagePath": "https://iili.io/JRLpHgf.jpg"
      },
      {
        "imageID": 524,
        "productID": 105,
        "imagePath": "https://iili.io/JRLpdJ4.jpg"
      },
      {
        "imageID": 525,
        "productID": 105,
        "imagePath": "https://iili.io/JRLp25l.jpg"
      },
      {
        "imageID": 526,
        "productID": 105,
        "imagePath": "https://iili.io/JRLp3e2.jpg"
      },
      {
        "imageID": 527,
        "productID": 105,
        "imagePath": "https://iili.io/JRLpFbS.jpg"
      },
      {
        "imageID": 528,
        "productID": 105,
        "imagePath": "https://iili.io/JRLpfz7.jpg"
      },
      {
        "imageID": 529,
        "productID": 105,
        "imagePath": "https://iili.io/JRLpqX9.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 385,
        "productID": 105,
        "sizeName": "S"
      },
      {
        "sizeID": 386,
        "productID": 105,
        "sizeName": "M"
      },
      {
        "sizeID": 387,
        "productID": 105,
        "sizeName": "L"
      },
      {
        "sizeID": 388,
        "productID": 105,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 385,
        "productID": 105,
        "sizeID": 385,
        "quantity": 64
      },
      {
        "quantityID": 386,
        "productID": 105,
        "sizeID": 386,
        "quantity": 86
      },
      {
        "quantityID": 387,
        "productID": 105,
        "sizeID": 387,
        "quantity": 68
      },
      {
        "quantityID": 388,
        "productID": 105,
        "sizeID": 388,
        "quantity": 59
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 106,
    "productName": "Quần Short Thể Thao Nam, Cạp Chun Thoải Mái",
    "productPrice": 399000,
    "productDescription": "Quần Short Thể Thao Nam, Cạp Chun Thoải Mái là mẫu quần short thể thao làm từ chất liệu Polyamide thoáng khí, không lo bết dính mồ hôi khi mặc. Đặc biệt, mẫu quần này sở hữu bề mặt vải mềm mượt, mát, thoáng khí và mau khô mà vẫn giữ form tốt, bền đẹp mang đến vẻ ngoài năng động, khỏe khoắn cho nam giới. Đây là mẫu quần short độc quyền của 5S Fashion với thiết kế basic, phù hợp với mọi độ tuổi cùng chất liệu bền đẹp, thoáng mát và mau khô, không lo nhăn nhàu trong suốt quá trình sử dụng.\r\n\r\nQuần short thể thao có kiểu dáng Slim fit ôm vừa vặn, tôn dáng kết hợp cùng thiết kế lỗ thông hơi siêu thoáng khí, hút ẩm nhanh và đánh bay mồ hôi bết dính trên da. Đây là thiết kế quần short thể thao basic với màu sắc cơ bản, dễ mặc, dễ phối với hầu hết các loại trang phục khác nhau. ",
    "productImages": [
      {
        "imageID": 530,
        "productID": 106,
        "imagePath": "https://iili.io/JRLpl1a.jpg"
      },
      {
        "imageID": 531,
        "productID": 106,
        "imagePath": "https://iili.io/JRLp0rJ.jpg"
      },
      {
        "imageID": 532,
        "productID": 106,
        "imagePath": "https://iili.io/JRLpEdv.jpg"
      },
      {
        "imageID": 533,
        "productID": 106,
        "imagePath": "https://iili.io/JRLpG7R.jpg"
      },
      {
        "imageID": 534,
        "productID": 106,
        "imagePath": "https://iili.io/JRLpMep.jpg"
      },
      {
        "imageID": 535,
        "productID": 106,
        "imagePath": "https://iili.io/JRLpXII.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 389,
        "productID": 106,
        "sizeName": "S"
      },
      {
        "sizeID": 390,
        "productID": 106,
        "sizeName": "M"
      },
      {
        "sizeID": 391,
        "productID": 106,
        "sizeName": "L"
      },
      {
        "sizeID": 392,
        "productID": 106,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 389,
        "productID": 106,
        "sizeID": 389,
        "quantity": 64
      },
      {
        "quantityID": 390,
        "productID": 106,
        "sizeID": 390,
        "quantity": 86
      },
      {
        "quantityID": 391,
        "productID": 106,
        "sizeID": 391,
        "quantity": 68
      },
      {
        "quantityID": 392,
        "productID": 106,
        "sizeID": 392,
        "quantity": 59
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 107,
    "productName": "Quần Short Thể Thao Nam, Thoáng Khí",
    "productPrice": 389000,
    "productDescription": "Quần Short Thể Thao Nam, Thoáng Khí là mẫu quần không thể bỏ qua trong mùa hè này nhờ thiết kế lỗ thông hơi siêu thoáng khí, hút ẩm nhanh, đánh bay mồ hôi bết dính trên da. Với chất liệu 86% Polyamide 14% Spandex, quần short thể thao nổi bật với những ưu điểm như: mềm mượt, nhẵn mịn, sợi vải mát lạnh với tính đàn hồi tự nhiên cao. Đây được xem là mẫu quần short thể thao hoàn hảo cho các hoạt động thể dục thể thao, tập gym, chạy bộ mang đến trải nghiệm thoải mái và thoáng mát tối đa. ",
    "productImages": [
      {
        "imageID": 536,
        "productID": 107,
        "imagePath": "https://iili.io/JRLperG.jpg"
      },
      {
        "imageID": 537,
        "productID": 107,
        "imagePath": "https://iili.io/JRLpv2f.jpg"
      },
      {
        "imageID": 538,
        "productID": 107,
        "imagePath": "https://iili.io/JRLp874.jpg"
      },
      {
        "imageID": 539,
        "productID": 107,
        "imagePath": "https://iili.io/JRLpSkl.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 393,
        "productID": 107,
        "sizeName": "S"
      },
      {
        "sizeID": 394,
        "productID": 107,
        "sizeName": "M"
      },
      {
        "sizeID": 395,
        "productID": 107,
        "sizeName": "L"
      },
      {
        "sizeID": 396,
        "productID": 107,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 393,
        "productID": 107,
        "sizeID": 393,
        "quantity": 32
      },
      {
        "quantityID": 394,
        "productID": 107,
        "sizeID": 394,
        "quantity": 34
      },
      {
        "quantityID": 395,
        "productID": 107,
        "sizeID": 395,
        "quantity": 61
      },
      {
        "quantityID": 396,
        "productID": 107,
        "sizeID": 396,
        "quantity": 59
      }
    ],
    "category": {
      "categoryID": 7,
      "categoryName": "Quần Short Thể Thao",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
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
  },
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
    "category": {
      "categoryID": 11,
      "categoryName": "Quần Short Tây",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXLua.webp",
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
    "quantitySold": 0
  },
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 119,
    "productName": "Quần Short Kaki Nam, Họa Tiết Hươu Bắt Mắt",
    "productPrice": 439000,
    "productDescription": "Quần Short Kaki, Họa Tiết Con Hươu Bắt Mắt luôn là lựa chọn ưu tiên của nam giới nhờ tính ứng dụng cao, có thể diện đi chơi, đi dạo phố, hẹn hò, tham gia các hoạt động thể thao hoặc đi biển. Quần có kiểu dáng Slim fit ôm vừa vặn, giúp người mặc tự tin, thoải mái khi hoạt động mà không lo bị khó chịu hay gò bó. Điểm nhấn nổi bật của thiết kế này nằm ở họa tiết con hượu trên phần thân quần mang phong cách trẻ trung, tươi mới. \r\n\r\nVới form dáng thông minh, độ dài vừa vặn, phù hợp với mọi lứa tuổi cùng bảng màu đa dạng, quần Short Kaki là lựa chọn dễ dàng kết hợp với mọi loại áo hè mà ai cũng nên có trong tủ đồ. \r\n\r\n",
    "productImages": [
      {
        "imageID": 598,
        "productID": 119,
        "imagePath": "https://iili.io/JRQzL7V.jpg"
      },
      {
        "imageID": 599,
        "productID": 119,
        "imagePath": "https://iili.io/JRQzQkB.jpg"
      },
      {
        "imageID": 600,
        "productID": 119,
        "imagePath": "https://iili.io/JRQzZmP.jpg"
      },
      {
        "imageID": 601,
        "productID": 119,
        "imagePath": "https://iili.io/JRQzDI1.jpg"
      },
      {
        "imageID": 602,
        "productID": 119,
        "imagePath": "https://iili.io/JRQzbhF.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 439,
        "productID": 119,
        "sizeName": "S"
      },
      {
        "sizeID": 440,
        "productID": 119,
        "sizeName": "M"
      },
      {
        "sizeID": 441,
        "productID": 119,
        "sizeName": "L"
      },
      {
        "sizeID": 442,
        "productID": 119,
        "sizeName": "XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 439,
        "productID": 119,
        "sizeID": 439,
        "quantity": 81
      },
      {
        "quantityID": 440,
        "productID": 119,
        "sizeID": 440,
        "quantity": 57
      },
      {
        "quantityID": 441,
        "productID": 119,
        "sizeID": 441,
        "quantity": 71
      },
      {
        "quantityID": 442,
        "productID": 119,
        "sizeID": 442,
        "quantity": 62
      }
    ],
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
  {
    "productID": 120,
    "productName": "Quần Short Kaki Nam, Chất Vải Bamboo Tự Nhiên",
    "productPrice": 429000,
    "productDescription": "Quần Short Kaki Nam, Chất Vải Bamboo Tự Nhiên có kiểu dáng Slim fit ôm sát vừa vặn, phù hợp với mọi dáng người giúp che đi tối đa khuyết điểm trên cơ thể nam giới. Quần short kaki được thiết kế basic, dễ dàng kết hợp với nhiều kiểu áo khác nhau: áo T-shirt, áo Polo, tanktop hay  sơ mi cộc... Với mỗi cách phối kết hợp sẽ mang đến một diện mạo khác nhau như thanh lịch, tinh tế hay khỏe khoắn, cá tính. ",
    "productImages": [
      {
        "imageID": 603,
        "productID": 120,
        "imagePath": "https://iili.io/JRQ5mQI.jpg"
      },
      {
        "imageID": 604,
        "productID": 120,
        "imagePath": "https://iili.io/JRQ7d2s.jpg"
      },
      {
        "imageID": 605,
        "productID": 120,
        "imagePath": "https://iili.io/JRQ72YG.jpg"
      },
      {
        "imageID": 606,
        "productID": 120,
        "imagePath": "https://iili.io/JRQ73vf.jpg"
      },
      {
        "imageID": 607,
        "productID": 120,
        "imagePath": "https://iili.io/JRQ7Fp4.jpg"
      },
      {
        "imageID": 608,
        "productID": 120,
        "imagePath": "https://iili.io/JRQ7qj2.jpg"
      }
    ],
    "productSizes": [
      {
        "sizeID": 443,
        "productID": 120,
        "sizeName": "S"
      },
      {
        "sizeID": 444,
        "productID": 120,
        "sizeName": "M"
      },
      {
        "sizeID": 445,
        "productID": 120,
        "sizeName": "L"
      },
      {
        "sizeID": 446,
        "productID": 120,
        "sizeName": "XL"
      },
      {
        "sizeID": 447,
        "productID": 120,
        "sizeName": "2XL"
      }
    ],
    "productQuantities": [
      {
        "quantityID": 443,
        "productID": 120,
        "sizeID": 443,
        "quantity": 39
      },
      {
        "quantityID": 444,
        "productID": 120,
        "sizeID": 444,
        "quantity": 84
      },
      {
        "quantityID": 445,
        "productID": 120,
        "sizeID": 445,
        "quantity": 18
      },
      {
        "quantityID": 446,
        "productID": 120,
        "sizeID": 446,
        "quantity": 48
      },
      {
        "quantityID": 447,
        "productID": 120,
        "sizeID": 447,
        "quantity": 42
      }
    ],
    "category": {
      "categoryID": 10,
      "categoryName": "Quần Short Kaki",
      "parentCategoryID": 5,
      "imagePath": "https://iili.io/J5HXUGV.webp",
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
    "quantitySold": 0
  },
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
    "category": {
      "categoryID": 14,
      "categoryName": "Quần Lót Brief",
      "parentCategoryID": 12,
      "imagePath": "https://iili.io/J5HjR5X.webp",
      "products": null,
      "subCategories": null
    },
    "parentCategory": {
      "categoryID": 12,
      "categoryName": "Quần Lót",
      "parentCategoryID": null,
      "imagePath": "https://iili.io/JR4gFGs.md.png",
      "products": null,
      "subCategories": null
    },
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
    "category": {
      "categoryID": 14,
      "categoryName": "Quần Lót Brief",
      "parentCategoryID": 12,
      "imagePath": "https://iili.io/J5HjR5X.webp",
      "products": null,
      "subCategories": null
    },
    "parentCategory": {
      "categoryID": 12,
      "categoryName": "Quần Lót",
      "parentCategoryID": null,
      "imagePath": "https://iili.io/JR4gFGs.md.png",
      "products": null,
      "subCategories": null
    },
    "quantitySold": 0
  },
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
    "category": {
      "categoryID": 13,
      "categoryName": "Quần Lót Boxer",
      "parentCategoryID": 12,
      "imagePath": "https://iili.io/J5HjR5X.webp",
      "products": null,
      "subCategories": null
    },
    "parentCategory": {
      "categoryID": 12,
      "categoryName": "Quần Lót",
      "parentCategoryID": null,
      "imagePath": "https://iili.io/JR4gFGs.md.png",
      "products": null,
      "subCategories": null
    },
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
    "category": {
      "categoryID": 13,
      "categoryName": "Quần Lót Boxer",
      "parentCategoryID": 12,
      "imagePath": "https://iili.io/J5HjR5X.webp",
      "products": null,
      "subCategories": null
    },
    "parentCategory": {
      "categoryID": 12,
      "categoryName": "Quần Lót",
      "parentCategoryID": null,
      "imagePath": "https://iili.io/JR4gFGs.md.png",
      "products": null,
      "subCategories": null
    },
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
    "category": {
      "categoryID": 13,
      "categoryName": "Quần Lót Boxer",
      "parentCategoryID": 12,
      "imagePath": "https://iili.io/J5HjR5X.webp",
      "products": null,
      "subCategories": null
    },
    "parentCategory": {
      "categoryID": 12,
      "categoryName": "Quần Lót",
      "parentCategoryID": null,
      "imagePath": "https://iili.io/JR4gFGs.md.png",
      "products": null,
      "subCategories": null
    },
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
    "category": {
      "categoryID": 13,
      "categoryName": "Quần Lót Boxer",
      "parentCategoryID": 12,
      "imagePath": "https://iili.io/J5HjR5X.webp",
      "products": null,
      "subCategories": null
    },
    "parentCategory": {
      "categoryID": 12,
      "categoryName": "Quần Lót",
      "parentCategoryID": null,
      "imagePath": "https://iili.io/JR4gFGs.md.png",
      "products": null,
      "subCategories": null
    },
    "quantitySold": 0
  }
];

const SearchProductPage = () => {
  const location = useLocation().pathname;
  const encodedSearchString = location.substring("/search/".length);
  const decodedSearchString = decodeURIComponent(encodedSearchString);

  const [productsData, setProductsData] = useState([]);
  const [numberProduct, setNumberProduct] = useState(NUMBER_PRODUCT_LIMIT);
  const hasResult = true;

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue("");
    setProductsData(searchData);
    setNumberProduct(Math.min(searchData.length, NUMBER_PRODUCT_LIMIT));
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);

    let data = JSON.parse(JSON.stringify(searchData));

    if (value === SORT.ASC) {
      data = data.sort((a, b) => a.productPrice - b.productPrice);
    } else if (value === SORT.DECS) {
      data = data.sort((a, b) => b.productPrice - a.productPrice);
    }

    console.log(data);
    setProductsData(data);
    setNumberProduct(Math.min(data.length, NUMBER_PRODUCT_LIMIT));
  }

  return (
      <main id="main">
        <ScrollToTop />
        <section className="search-page">
          <section className="container search-wrapper">
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
                              defaultValue={searchValue}
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
                    <div className="search-title">
                      Có {productsData.length} kết quả cho từ khóa "{decodedSearchString}"
                    </div>
                    <div className="product-result">
                      <ProductsSection productsData={productsData.slice(0, numberProduct)} />
                    </div>
                    <div className="load-more-wrap text-center">
                      {productsData.length !== numberProduct ?
                          (<a href="#">
                            <button className="btn btn-vm view-more-product btn-product-winter" id="view-more-product" style={{"marginBottom":"10px"}}
                                    onClick={() => setNumberProduct(Math.min(numberProduct + NUMBER_PRODUCT_LIMIT, productsData.length))}
                            >
                              {SEARCH_PRODUCT_PAGE.SEE_MORE} <i className="fa-solid fa-spinner icon-loading"></i>
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
                        <p>{SEARCH_PRODUCT_PAGE.NO_RESULTS_FOUND}</p>
                        <span>{SEARCH_PRODUCT_PAGE.PLEASE_TRY_AGAIN_WITH_DIFFERENT_KEYWORD}</span>
                        <span>{SEARCH_PRODUCT_PAGE.EXAMPLE_KEYWORDS}</span>
                    </div>
                  </div>
              )}
            </div>
          </section>
        </section>
      </main>
  );
};


export default SearchProductPage;