import React, {useEffect, useState} from "react";
import locationDot from "../../cartPage/images/location-dot.svg";
import arrowRight from "../../checkoutPage/images/angle-right.svg";
import {useCookies} from "react-cookie";
import AddressModal from "./AddressModal";
import {toast} from "react-toastify";
import {ADDRESS_SECTION, API, MESSAGE} from "@Const"; // Assuming you have an arrow-right image


const addressData = [
  {
    "addressID": 5,
    "usersID": 4,
    "recipientName": "Bùi Minh Hoạt",
    "recipientPhone": "0912345678",
    "addressDetails": "144 Xuân Thuỷ, Cầu Giấy, Hà Nội",
    "isDefault": true
  },
  {
    "addressID": 6,
    "usersID": 4,
    "recipientName": "Nguyễn Châu Khanh",
    "recipientPhone": "0999999999",
    "addressDetails": "Hà Nội",
    "isDefault": false
  }
];

function AddressSection({ selectedAddress,  setSelectedAddress }) {
  const [addresses, setAddresses] = useState([{}]);

  useEffect(() => {
    const data = addressData;
    if (selectedAddress.addressID === undefined && data.length !== 0) {
      setSelectedAddress(data.find((address) => {return address.isDefault === true}));
    }
    setAddresses(data);
  }, []);

  return (
      <>
        <div className="cart__address cursor-pointer">
          { !addresses.length ?
            <>
              <div className="cart__address__title d-flex align-items-center justify-content-between">
                <div className="cart__address__title__left mb-6px">
                  <img src={locationDot} alt="icon address" />
                  <h5 className="mb-0">{ADDRESS_SECTION.SHIPPING_ADDRESS}</h5>
                </div>
              </div>
              <div className="cart__address__description">
                <div>{ADDRESS_SECTION.CREATE_SHIPPING_ADDRESS_HERE}</div>
              </div>
            </>
            :
            <>
              <div className="cart__address__title d-flex align-items-center justify-content-between">
                <div className="cart__address__title__left mb-6px">
                  <img src={locationDot} alt="icon address" />
                  <h5 className="mb-0">{ADDRESS_SECTION.SHIPPING_ADDRESS}</h5>
                </div>
                <div className="d-flex align-items-center">
                  <span className="change-address">{ADDRESS_SECTION.CHANGE_ADDRESS}</span>
                  <img src={arrowRight} alt="icon arrow next" />
                </div>
              </div>
              <div className="cart__address__description">
                <div>
                  {selectedAddress.recipientName}
                  <span>|</span> {selectedAddress.recipientPhone}
                </div>
                <div> {selectedAddress.addressDetails}</div>
              </div>
            </>
          }
        </div>

      </>
  );
}

export default AddressSection;
