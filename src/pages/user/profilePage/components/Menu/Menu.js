import React, {useEffect, useState} from "react";
import "./style.scss"

import {useCookies} from "react-cookie";
import {useLocation, useNavigate} from "react-router-dom";

import {ROUTERS} from "../../utils/router";
import {API, MESSAGE, PROFILE_PAGE, SCROLLING, IMAGE_URL} from "@Const";

import iconOrder from "../../images/order.svg";
import iconEdit from "../../images/edit.svg";
import iconAddress from "../../images/address.svg";
import iconUnlocked from "../../images/unlocked.svg";
import iconLogout from "../../images/logout.svg";

import {useLogout} from "@Components/dialogs/utils/logout";
import queryString from "query-string";
import {toast} from "react-toastify";

const userInfoData = {
  "userID": 4,
  "fullName": "Nguyễn Văn Vinh",
  "email": "khachhang@gmail.com",
  "hashedPassword": null,
  "phoneNumber": "09090909",
  "gender": "Nam",
  "dateBirthday": "1933-02-03",
  "avatarPath": "https://iili.io/J5nNDS1.jpg",
  "isAdmin": false
};

const Menu = () => {
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [userID, setUserID] = useState(queryParams.userID);

  const logout = useLogout();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(userInfoData);

  const [menuItemsProfile, setMenuItemsProfile] = useState([
    {
      icon: iconOrder,
      text: PROFILE_PAGE.MENU_ITEMS.ORDERS,
      link: "/profile" + ROUTERS.USER.ORDERS_PAGE + "?userID=" + userID,
    },
    {
      icon: iconEdit,
      text: PROFILE_PAGE.MENU_ITEMS.EDIT_PROFILE,
      link: "/profile" + ROUTERS.USER.PERSONAL_INFORMATION + "?userID=" + userID,
    },
    {
      icon: iconAddress,
      text: PROFILE_PAGE.MENU_ITEMS.ADDRESS_BOOK,
      link: "/profile" + ROUTERS.USER.ADDRESS + "?userID=" + userID,
    },
    {
      icon: iconUnlocked,
      text: PROFILE_PAGE.MENU_ITEMS.CHANGE_PASSWORD,
      link: "/profile" + ROUTERS.USER.CHANGE_PASSWORD + "?userID=" + userID,
    },
    {
      icon: iconLogout,
      text: PROFILE_PAGE.MENU_ITEMS.LOGOUT,
      link: "/",
    },
  ]);

  const renderMenu = (menuItemsProfile) => {
    const menuItemsJSX = [];
    for (let i = 0; i < menuItemsProfile.length; i++) {
      const menuItem = menuItemsProfile[i];
      menuItemsJSX.push(
          <li className="item-wrap" key={i}>
            <div className="img-wrap">
              <img src={menuItem.icon} alt={`icon ${menuItem.text}`}/>
            </div>
            <div>
              <div className="text navigate-text pointer-cursor"
                   onClick = {() => {
                       if (menuItem.text !== PROFILE_PAGE.MENU_ITEMS.LOGOUT) {
                           navigate(menuItem.link, {
                               state: { scrolling: SCROLLING.SMOOTH },
                           });
                       }
                   }}
              >
                {menuItem.text}
              </div>
            </div>
          </li>
      );
    }
    return menuItemsJSX;
  }

  return (
      <div className="col-4 menu-wrap item-row">
        <div className="header-wrap">
          <div className="image-wrap">
            <img style={{width:"64px", height:"64px"}}
                src={userData.avatarPath ? userData.avatarPath : IMAGE_URL.DEFAULT_AVATAR_IMG}
                alt={''}
                id="action-upload"
            />

          </div>

          <div className="text-header" style={{margin:"0 0 0 10px"}}>
            <p>{PROFILE_PAGE.HELLO_TITLE}</p>
            <p className="name">{userData.fullName}</p>
          </div>
        </div>

        <div className="menu-nav-wrap">
          <ul>{renderMenu(menuItemsProfile)}</ul>
        </div>
      </div>
  );
};

export default Menu;
