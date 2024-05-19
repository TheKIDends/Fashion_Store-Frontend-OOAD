import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {formatter} from "@Utils/formatter";
import {API, HEADER, MESSAGE} from "@Const";

const SearchDialog = ({keyword}) => {
  const [searchItem, setSearchItem] = useState({});

  const filteredSearchItem = searchItem;

  const [isDialogVisible, setIsDialogVisible] = useState(true);
  const hasResults = filteredSearchItem.length > 0;

  return (
      hasResults && (<div
          className="result-box position-absolute"
          style={{ display: isDialogVisible ? 'block' : 'none' }}
      >
        {filteredSearchItem.map((product, index) => (
            <div key={index}>
              <Link to={"/product?productID=" + product.productID}>
                <div className="item-search d-flex">
                  <div className="product-image d-flex align-items-center justify-content-start">
                    <img src={product.productImages[0].imagePath} alt={`Product Image ${product.productID}`} />
                  </div>
                  <div className="product-info">
                    <div className="product-name">{product.productName}</div>
                    <div className="product-price d-flex align-items-center">
                      <div className="sale-price">{formatter(product.productPrice)}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
        ))}
        <div className="view_all_search">
          <Link to={"/search/" + keyword} id = {keyword}>
            { HEADER.SEARCH_DIALOG.VIEW_ALL }
          </Link>
        </div>
      </div>)
  );
};

export default SearchDialog;