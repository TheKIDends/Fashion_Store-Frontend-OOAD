import React from "react";
import { Link } from "react-router-dom";
import closeButton from "../images/close.svg";
import {formatter} from "@Utils/formatter.js"

function CartProduct({ product }) {

    const checkQuantity = () => {
        let stockQuantity = product.informationProduct.productQuantities.find((quantity) => quantity.sizeID === product.sizeID).quantity;
        return  Math.min(product.quantityPurchase, stockQuantity)
    }

    return (
        <div className="card-product d-flex">
            <div className="image-product">
                <img src={product.informationProduct.productImages[0].imagePath} alt={""} />
            </div>
            <div className="product__info">
                <div className="product__name d-flex align-items-start justify-content-between">
                    <h5 className="name">{product.informationProduct.productName}</h5>
                    <img src={closeButton} alt="icon close" />
                </div>
                <div className="product__classify">
                    <div className="wrap-product-detail-properties d-flex ">
                        {product.informationProduct.productSizes ? (
                            product.informationProduct.productSizes.map((size, index) =>
                                product.informationProduct.productQuantities.find((quantity) => quantity.sizeID === size.sizeID) ? (
                                    product.informationProduct.productQuantities.find((quantity) => quantity.sizeID === size.sizeID).quantity === 0 ? (
                                        <div key={index} className="size-wrap size size-sold-out">
                                            {size.sizeName}
                                        </div>
                                    ) : (
                                        <div
                                            key={index}
                                            className={`size-wrap size ${product.sizeID === size.sizeID ? "selected-size" : ""}`}
                                        >
                                            {size.sizeName}
                                        </div>
                                    )
                                ) : (
                                    <></>
                                )
                            )
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="product__price d-flex align-items-center">
                    <div className="product__price__sale">{formatter(product.informationProduct.productPrice * product.quantityPurchase)}</div>
                </div>
                <div className="product__quantity d-flex">
                    <button type="button" className="btn btn-light product__quantity__icon d-flex align-items-center justify-content-center">
                        -
                    </button>
                    <div className="d-flex align-items-center justify-content-center quantity">
                        {checkQuantity()}
                    </div>
                    <button type="button" className="btn btn-light product__quantity__icon d-flex align-items-center justify-content-center">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
