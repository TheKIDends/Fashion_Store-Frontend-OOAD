import React, {createContext, useEffect, useState} from 'react';
import './style.scss'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {useCookies} from "react-cookie";
import BackToTopButton from "../../components/buttons/BackToTopButton/BackToTopButton";
import {API, MESSAGE} from "@Const";

export const CartContext = createContext();

const cartEndpointData = {
    "cartID": 4,
    "userID": 4,
    "cartItems": [
        {
            "cartItemID": 30,
            "cartID": 4,
            "productID": 97,
            "sizeID": 354,
            "quantityPurchase": 2,
            "product": {
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
            }
        },
        {
            "cartItemID": 31,
            "cartID": 4,
            "productID": 126,
            "sizeID": 469,
            "quantityPurchase": 3,
            "product": {
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
                "category": {
                    "categoryID": 8,
                    "categoryName": "Áo Sơ Mi",
                    "parentCategoryID": 1,
                    "imagePath": "https://iili.io/J5HXCkg.webp",
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
                "quantitySold": 0
            }
        },
        {
            "cartItemID": 32,
            "cartID": 4,
            "productID": 63,
            "sizeID": 218,
            "quantityPurchase": 1,
            "product": {
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
            }
        }
    ]
};

const MasterLayout = ({children, ...props}) => {
    const [amountInCart, setAmountInCart] = useState(0);
    const divStyle = {
        marginTop: "80px",
    };

    const [cookies] = useCookies(['access_token']);
    const accessToken = cookies.access_token;

    useEffect(() => {
        setAmountInCart(cartEndpointData.cartItems.length);
    }, [])


    return (
        <div {...props}>
            <CartContext.Provider value={{amountInCart}}>
                <Header/>
                <div style={divStyle}>
                    {children}
                </div>
                <Footer/>
            </CartContext.Provider>

            <BackToTopButton/>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                style={{fontSize: "15px"}}
            />
        </div>
    );
}

export default MasterLayout;