import React, {useEffect, useRef, useState} from "react";
import locationDot from "../../checkoutPage/images/location-dot.svg"
import plus from '../../profilePage/images/plus.svg'
import "../../checkoutPage/style.scss"
import {useCookies} from "react-cookie";
import {toast} from "react-toastify";
import {ADDRESS_MODAL, ADDRESS_SECTION, API, MESSAGE} from "@Const";

function AddressModal({ userID, selectedAddress, closeModalListAddress, confirmAddress }) {
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const updateAddressID = useRef(0);

  const [openModal, setOpenModal] = useState(ADDRESS_MODAL.LIST_ADDRESS)

  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [idSelected, setIdSelected] = useState(selectedAddress.addressID);

  const resetInputModal = () => {
    setRecipientName("");
    setRecipientPhone("");
    setAddressDetails("");
  }

  const switchModal = (modal, updateID) => {
    setOpenModal(modal);
    updateAddressID.current = updateID;
    resetInputModal();
  }

  return (
      <div className="modal-create-address visible">
        <div className="modal-create-address__backdrop"></div>
        <div className="modal-create-address__content-wrap">
          <div className="modal-create-address__content d-flex flex-column justify-content-between"
               style={{height:"590px"}}
          >

            {openModal === ADDRESS_MODAL.LIST_ADDRESS &&
                <>
                  <div>
                    <div className="modal-title">
                      <img src={locationDot} alt="icon location" />
                      {ADDRESS_SECTION.SHIPPING_ADDRESS_TITLE}
                    </div>
                    <div className="list-address">
                      <div style={{overflow: "auto", maxHeight:"296px", padding: addressList && addressList.length > 3 ? "0 10px 0 10px" : "0 15px 0 10px"}}>
                        { addressList && addressList.map((address, index) => (
                            <div className="item-address d-flex align-items-center justify-content-between"
                                 key={index}
                                 onClick={() => {setIdSelected(address.addressID)}}
                            >
                              <div className="address-detail d-flex">
                                <input
                                    type="radio"
                                    name="address"
                                    onChange={() => {setIdSelected(address.addressID)}}
                                    id={address.addressID}
                                    value={address.addressID}
                                    checked={address.addressID === idSelected}
                                />

                                <div className="center-content">
                                  <label>
                                    <div className="cart__address__description">
                                      <div className="d-flex justify-content-between">
                                        <div className="fw-bold">{address.recipientName} | {address.recipientPhone}</div>
                                      </div>

                                      <div className="address">{address.addressDetails}</div>
                                    </div>
                                  </label>
                                  {address.isDefault ?
                                      <div className="text_default active">{ADDRESS_SECTION.DEFAULT}</div>
                                      :
                                      <div className="text_default">
                                        {ADDRESS_SECTION.SET_DEFAULT}
                                      </div>
                                  }
                                </div>
                              </div>

                              <div className="action-address">
                              <span className="text-edit"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      switchModal(ADDRESS_MODAL.UPDATE_ADDRESS, address.addressID)
                                    }}
                              >{ADDRESS_SECTION.EDIT}
                              </span>
                              </div>
                            </div>
                        ))}
                      </div>
                      <div style={{padding: `5px 15px 0 10px`}}>
                        <div className="item-address d-flex justify-content-between align-items-center cursor-point"
                             onClick={() => switchModal(ADDRESS_MODAL.CREATE_ADDRESS)}
                        >
                          <div className="cart__address__description pdr-76px pdl-25_17">
                            <div className="fw-bold mb-6px">{ADDRESS_SECTION.ADD_NEW_ADDRESS}</div>
                          </div>
                          <img className="icon_plus_address" src={plus} alt="icon add address" />
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="modal-create-address-footer">
                    <div className="btn-cancel" onClick={closeModalListAddress}>{ADDRESS_SECTION.CANCEL}</div>
                    <div className="btn-submit" onClick={() => confirmAddress(addressList.find((address) => address.addressID === idSelected))}>{ADDRESS_SECTION.CONFIRM}</div>
                  </div>
                </>
            }

            {openModal === ADDRESS_MODAL.CREATE_ADDRESS &&
                <>
                  <div>
                    <div className="modal-title">
                      <img src={locationDot} alt="icon address"/>
                      {ADDRESS_SECTION.SHIPPING_ADDRESS}
                    </div>
                    <div className="modal-sub-title">
                      {ADDRESS_SECTION.ADD_ADDRESS}
                    </div>
                    <div className="input-item">
                      <div className="input-item__title">
                        {ADDRESS_SECTION.FULL_NAME}
                      </div>
                      <div className="input-item__value">
                        <input className="name" type="text"
                               placeholder={ADDRESS_SECTION.FULL_NAME_PLACEHOLDER}
                               onChange={(e) => setRecipientName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <hr />
                      <div className="input-item">
                        <div className="input-item__title">
                          {ADDRESS_SECTION.PHONE_NUMBER}
                        </div>
                        <div className="input-item__value">
                          <input className="phone" type="text"
                                 placeholder={ADDRESS_SECTION.PHONE_NUMBER_PLACEHOLDER}
                                 value={recipientPhone}
                                 onChange={(e) => {
                                   if (!isNaN(e.target.value)) setRecipientPhone(e.target.value)
                                 }}
                          />
                        </div>
                      </div>

                      <hr />

                      <div className="input-item">
                        <div className="input-item__title">
                          {ADDRESS_SECTION.ADDRESS}
                        </div>
                        <div className="input-item__value">
                          <input className="address" type="text"
                                 placeholder={ADDRESS_SECTION.ADDRESS_PLACEHOLDER}
                                 onChange={(e) => setAddressDetails(e.target.value)}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-create-address-footer ">
                    {/*<div onClick={updateAddress} className="btn-submit">Cập nhật</div>*/}
                    <div className="btn-cancel" onClick={() => switchModal(ADDRESS_MODAL.LIST_ADDRESS)}>{ADDRESS_SECTION.CANCEL}</div>
                    <div className="btn-submit" >{ADDRESS_SECTION.CONFIRM}</div>
                  </div>
                </>
            }

            {openModal === ADDRESS_MODAL.UPDATE_ADDRESS &&
                <>
                  <div>
                    <div className="modal-title">
                      <img src={locationDot} alt="icon address"/>
                      {ADDRESS_SECTION.SHIPPING_ADDRESS}
                    </div>
                    <div className="modal-sub-title">
                      {ADDRESS_SECTION.EDIT_ADDRESS}
                    </div>
                    <div className="input-item">
                      <div className="input-item__title">
                        {ADDRESS_SECTION.FULL_NAME}
                      </div>
                      <div className="input-item__value">
                        <input className="name" type="text"
                               placeholder={ADDRESS_SECTION.FULL_NAME_PLACEHOLDER}
                               onChange={(e) => setRecipientName(e.target.value)}
                               defaultValue={addressList.find((address) => address.addressID === updateAddressID.current).recipientName}
                        />
                      </div>
                    </div>
                    <div>
                      <hr />
                      <div className="input-item">
                        <div className="input-item__title">
                          {ADDRESS_SECTION.PHONE_NUMBER}
                        </div>
                        <div className="input-item__value">
                          <input className="phone" type="text"
                                 placeholder={ADDRESS_SECTION.PHONE_NUMBER_PLACEHOLDER}
                                 value={recipientPhone}
                                 onChange={(e) => {
                                   if (!isNaN(e.target.value)) setRecipientPhone(e.target.value)
                                 }}
                                 defaultValue={addressList.find((address) => address.addressID === updateAddressID.current).recipientPhone}
                          />
                        </div>
                      </div>

                      <hr />

                      <div className="input-item">
                        <div className="input-item__title">
                          {ADDRESS_SECTION.ADDRESS}
                        </div>
                        <div className="input-item__value">
                          <input className="address" type="text"
                                 placeholder={ADDRESS_SECTION.ADDRESS_PLACEHOLDER}
                                 onChange={(e) => setAddressDetails(e.target.value)}
                                 defaultValue={addressList.find((address) => address.addressID === updateAddressID.current).addressDetails}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-create-address-footer ">
                    <div className="btn-cancel" onClick={() => switchModal(ADDRESS_MODAL.LIST_ADDRESS)}>{ADDRESS_SECTION.CANCEL}</div>
                    <div className="btn-submit">{ADDRESS_SECTION.UPDATE}</div>
                  </div>
                </>
            }

          </div>
        </div>
      </div>
  );
}

export default AddressModal;
