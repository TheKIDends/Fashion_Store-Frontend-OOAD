import React, {useEffect, useState} from "react";
import "./style.scss"
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

import {toast} from "react-toastify";

import {PiUserListBold} from "react-icons/pi";
import {IoSearch} from "react-icons/io5";
import {TbListSearch} from "react-icons/tb";
import {MdOutlineAdminPanelSettings, MdOutlineEmail} from "react-icons/md";
import {HiOutlinePhone, HiOutlineTrash, HiPlus} from "react-icons/hi";

import {ConfigProvider, Select, Tooltip} from "antd";

import {isSubstringIgnoreCaseAndAccents} from '@Utils';
import ConfirmDialog from "@Components/dialogs/ConfirmDialog/ConfirmDialog";
import {
  ACCOUNT_LIST_PAGE,
  API,
  BREADCRUMB,
  CONFIRM_DIALOG,
  MESSAGE,
  SEARCH,
  SELECT,
  IMAGE_URL,
  TAB_LIST_TEXT,
  TOOLTIP
} from "@Const";

const userInfoData = [
  {
    "userID": 1,
    "fullName": "Bùi Minh Hoạt",
    "email": "official.buiminhhoat@gmail.com",
    "hashedPassword": null,
    "phoneNumber": "09123456789",
    "gender": "Nam",
    "dateBirthday": "2003-09-06",
    "avatarPath": "https://iili.io/J5HNvHP.jpg",
    "isAdmin": true
  },
  {
    "userID": 2,
    "fullName": "Nguyễn Châu Khanh",
    "email": "21020019@vnu.edu.vn",
    "hashedPassword": null,
    "phoneNumber": "09123456789",
    "gender": null,
    "dateBirthday": null,
    "avatarPath": "https://iili.io/J5HMHIR.jpg",
    "isAdmin": true
  },
  {
    "userID": 3,
    "fullName": "Nguyễn Tiến Dũng",
    "email": "21020057@vnu.edu.vn",
    "hashedPassword": null,
    "phoneNumber": "09123456789",
    "gender": null,
    "dateBirthday": null,
    "avatarPath": "https://iili.io/J5HNZJI.jpg",
    "isAdmin": false
  },
  {
    "userID": 5,
    "fullName": "Hoàng Văn Huy",
    "email": "21020076@vnu.edu.vn",
    "hashedPassword": null,
    "phoneNumber": "09123456789",
    "gender": null,
    "dateBirthday": null,
    "avatarPath": "https://iili.io/J5HMiyG.md.jpg",
    "isAdmin": false
  },
  {
    "userID": 6,
    "fullName": "Trần Bá Toản",
    "email": "21020091@vnu.edu.vn",
    "hashedPassword": null,
    "phoneNumber": "09123456789",
    "gender": null,
    "dateBirthday": null,
    "avatarPath": "https://iili.io/J5HMiyG.md.jpg",
    "isAdmin": false
  },
];

const AccountListPage = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const [usersData, setUsersData] = useState([]);
  const [deletedUser, setDeletedUser] = useState(null);

  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedSearch, setSelectedSearch] = useState(SEARCH.USER.VALUE.FULL_NAME);

  const [userID, setUserID] = useState(4);

  async function fetchImageAsFile(imageUrl, imageName) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new File([blob], imageName, {type: blob.type});
  }

  const initData = async () => {
    const fetchImagePromises = userInfoData.map(item => {
      if (!item.avatarPath) {
        return null;
      }
      const imageUrl = item.avatarPath;
      return fetchImageAsFile(imageUrl, item.avatarPath);
    });

    Promise.all(fetchImagePromises)
        .then(files => {
          let newUsers = [];
          for (let i = 0; i < userInfoData.length; ++i) {
            newUsers.push({
              ...userInfoData[i],
              isShow:true,
              imageFile: files[i],
              imageURL: files[i]?URL.createObjectURL(files[i]):null,
            });
          }
          setUsersData(newUsers);
        })
        .catch(error => {
          console.error(error);
        });
  }

  useEffect(() => {
    initData().then(r => {});
  }, []);

  const handleSearchInputChange = () => {
    if (!searchInputValue || searchInputValue === "") {
      setUsersData((newUsers) =>
          usersData.map((user) => { return { ...user, isShow: true }; })
      );
      return;
    }
    switch (selectedSearch) {
      case SEARCH.USER.VALUE.FULL_NAME:
        setUsersData((newUsers) =>
            usersData.map((user) => {
              if (isSubstringIgnoreCaseAndAccents(searchInputValue, user.fullName)) {
                return { ...user, isShow: true };
              }
              return { ...user, isShow: false };
            })
        );

        break;
      case SEARCH.USER.VALUE.PHONE_NUMBER:
        setUsersData((newUsers) =>
            usersData.map((user) => {
              if (isSubstringIgnoreCaseAndAccents(searchInputValue, user.phoneNumber)) {
                return { ...user, isShow: true };
              }
              return { ...user, isShow: false };
            })
        );
        break;
      case SEARCH.USER.VALUE.EMAIL:
        setUsersData((newUsers) =>
            usersData.map((user) => {
              if (isSubstringIgnoreCaseAndAccents(searchInputValue, user.email)) {
                return { ...user, isShow: true };
              }
              return { ...user, isShow: false };
            })
        );
        break;
    }
  };

  useEffect(() => {
    handleSearchInputChange();
  }, [searchInputValue]);

  const ListUserSection = () => {
    return (
        <section>
          <div style={{boxShadow: "1px 1px 4px 0 rgba(0, 0, 0, 0.102)", overflow: "hidden",
            borderRadius:"3px", border:"1px solid #E4E4E4", padding:"0", backgroundColor:"#FAFAFA"}}>

            <div>
              {
                  usersData && usersData.map((user, index) => (
                      user.isShow &&
                      <div key={index} style={{borderBottom:"1px solid #E4E4E4"}}>
                        <div className={`user-field`}>

                          <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center", width: "100%",height:"100%"}}>

                            <div style={{borderRadius:"100%", border:"3px solid #a30000", padding:"2px"}}>
                              <img
                                  className="img-subCategory"
                                  src={user.imageURL?user.imageURL:IMAGE_URL.DEFAULT_AVATAR_IMG}
                                  alt=""
                              />
                            </div>
                            <span style={{flex:"0.9", marginLeft:"14px", fontSize:"15px", fontWeight:"600", color:"#9D9D9D", cursor:"default"}}>
                              {user.fullName}
                            </span>

                            <MdOutlineEmail style={{fontSize:"18px", margin:"0 7px 0 15px", color:"#9D9D9D"}}/>
                            <span  style={{flex:"1", fontSize:"14px", fontWeight:"600", color:"#9D9D9D", wordBreak: "break-word", cursor:"default", marginRight:"12px"}}>
                              {user.email}
                            </span>

                            <HiOutlinePhone style={{fontSize:"18px", margin:"0 7px 2px 15px", color:"#9D9D9D"}}/>
                            <span  style={{flex:"0.6", fontSize:"14px", fontWeight:"600", color:"#9D9D9D", wordBreak: "break-word", cursor:"default"}}>
                              {user.phoneNumber}
                            </span>
                          </div>


                          <div style={{display:"flex", alignItems:"center"}}>
                            {
                              userID === user.userID ?
                                  <div style={{display:"flex", alignItems:"center", marginRight:"38px"}}>
                                    <MdOutlineAdminPanelSettings style={{fontSize:"22px", margin:"0 7px 2px 15px", color:"#9D9D9D"}}/>
                                    <span  style={{fontSize:"14px", fontWeight:"600", color:"#9D9D9D", minWidth:"110px", width:"110px", cursor:"not-allowed"}}>
                                      {SELECT.PERMISSION.LABEL.ADMIN}
                                    </span>
                                  </div>
                                  :
                                  <div style={{display:"flex", alignItems:"center", marginRight:"30px"}}>
                                    <MdOutlineAdminPanelSettings style={{fontSize:"22px", margin:"0 7px 2px 15px", color:"#9D9D9D"}}/>
                                    <Tooltip title={<div style={{margin:"5px ", fontWeight:"500"}}>{TOOLTIP.EDIT_ACCESS_PERMISSION}</div>} color={"#4A4444"}>
                                      <div style={{marginRight:"8px"}}>
                                        <ConfigProvider
                                            theme={{
                                              components: {
                                                Select: {
                                                  controlItemBgActive: '#ffe6e6',
                                                  paddingSM: 0,
                                                  colorText: '#9D9D9D',
                                                  fontSize: 13,
                                                  fontSizeLG: 14,
                                                },
                                              },
                                            }}
                                        >
                                          <Select
                                              defaultValue={user.isAdmin ? SELECT.PERMISSION.VALUE.ADMIN : SELECT.PERMISSION.VALUE.USER}
                                              style={{ width: 110 }}
                                              bordered={false}
                                              size={"large"}
                                              options={[
                                                { value: SELECT.PERMISSION.VALUE.USER, label: SELECT.PERMISSION.LABEL.USER },
                                                { value: SELECT.PERMISSION.VALUE.ADMIN, label: SELECT.PERMISSION.LABEL.ADMIN },
                                              ]}
                                          />
                                        </ConfigProvider>
                                      </div>
                                    </Tooltip>
                                  </div>
                            }

                            {
                              userID === user.userID ?
                                  <div style={{width: "65px", marginRight:"20px"}}/>
                                  :
                                  <Tooltip title={<div style={{margin:"5px ", fontWeight:"500"}}>{TOOLTIP.DELETE_USER}</div>} color={"#4A4444"}>
                                    <div className="pointer-cursor btn-user"
                                         style={{marginRight:"20px"}}
                                         onClick={() => {
                                           setDeletedUser({
                                             userID: user.userID,
                                             fullName: user.fullName,
                                           })
                                         }}
                                    >
                                      <HiOutlineTrash />
                                    </div>
                                  </Tooltip>
                            }



                            <Tooltip title={<div style={{margin:"5px ", fontWeight:"500"}}>{TOOLTIP.USER_DETAILS}</div>} color={"#4A4444"}>
                              <div className="pointer-cursor btn-user"
                                   style={{marginRight:"0", fontSize:"21px"}}
                              >
                                <PiUserListBold  style={{marginLeft:"4px"}}/>
                              </div>
                            </Tooltip>

                          </div>

                        </div>
                      </div>
                  ))
              }
            </div>

          </div>
        </section>
    );
  }

  return (
      <div id="app">
        <main id="main">
          <div className="container profile-wrap">
            <div className="breadcrumb-wrap">
              <a href="/">{BREADCRUMB.HOME_PAGE}</a>
              &gt; <span>{BREADCRUMB.ACCOUNT_MANAGEMENT}</span>
              &gt; <span>{BREADCRUMB.ACCOUNT_LIST}</span>
            </div>
          </div>

          <div className="container pe-0 ps-0" style={{paddingBottom: "100px", minWidth:"800px"}}>
            <div style={{margin:"0 70px 0 40px"}}>

              <p className="category-title" style={{paddingTop: "30px", display:"flex", justifyContent:"space-between"}}>
                {ACCOUNT_LIST_PAGE.USER_LIST}
                <button type="button" className="add-account-btn"
                        onClick={() => {navigate('/admin/management-page/add-account')}}
                >
                  <HiPlus style={{fontSize:"22px", padding:"0 0px 3px 0", marginRight:"4px"}}/>
                  <span style={{marginRight:"5px"}}>{ACCOUNT_LIST_PAGE.ADD_USER_BTN}</span>
                </button>
              </p>

              <div style={{boxShadow: "1px 1px 4px 0 rgba(0, 0, 0, 0.102)", overflow: "hidden", marginBottom:"10px",
                borderRadius:"3px", border:"1px solid #E4E4E4", padding:"0", backgroundColor:"#FAFAFA", height:"75px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", height:"100%", paddingLeft:"35px"}}>
                  <div style={{display:"flex", color:"#333333", fontSize:"18px", fontWeight:"800", marginTop:"7px", alignItems:"center"}}>
                    <TbListSearch style={{padding:"0 0 2px", fontSize:"28px", marginRight:"10px"}}/>
                    <span>{ACCOUNT_LIST_PAGE.SEARCH_BY}</span>
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
                          defaultValue={SEARCH.USER.VALUE.FULL_NAME}
                          style={{ width: 170 }}
                          bordered={false}
                          size={"large"}
                          options={[
                            { value: SEARCH.USER.VALUE.FULL_NAME, label: SEARCH.USER.LABEL.FULL_NAME },
                            { value: SEARCH.USER.VALUE.PHONE_NUMBER, label: SEARCH.USER.LABEL.PHONE_NUMBER },
                            { value: SEARCH.USER.VALUE.EMAIL, label: SEARCH.USER.LABEL.EMAIL },
                          ]}
                          onChange={(value) => {setSelectedSearch(value)}}
                      />
                    </ConfigProvider>

                  </div>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginRight:"35px"}}>
                    <div style={{display:"flex", alignItems:"center", height:"35px", borderBottom:"2px solid #ac0000"}}>
                      <input
                          className="placeholder-color"
                          style={{fontSize:"15px", width:"250px",backgroundColor:"#FAFAFA", border:"none", margin:"0 5px 0 5px"}}
                          type="text"
                          value={searchInputValue}
                          placeholder={ACCOUNT_LIST_PAGE.SEARCH_KEYWORD_PLACEHOLDER}
                          onChange={(e) => setSearchInputValue(e.target.value)}
                      />
                      <IoSearch style={{color:"#ac0000", padding:"0px 0 0px", fontSize:"20px", marginRight:"10px"}}/>
                    </div>
                  </div>

                </div>
              </div>

              <ListUserSection />

            </div>
          </div>
        </main>
        {deletedUser && (
            <div className="modal-overlay">
              <ConfirmDialog title={<span style={{color:"#bd0000"}}>{CONFIRM_DIALOG.WARNING_TITLE}</span>}
                             subTitle={ <>
                               {CONFIRM_DIALOG.CONFIRM_DELETE_USER_SUBTITLE_1} <span style={{color:"#bd0000"}}>{deletedUser.fullName}</span> {CONFIRM_DIALOG.CONFIRM_DELETE_USER_SUBTITLE_2} <br />
                             </>
                             }
                             titleBtnAccept={CONFIRM_DIALOG.DELETE_TITLE_BTN_ACCEPT}
                             titleBtnCancel={CONFIRM_DIALOG.CANCEL_TITLE_BTN_CANCEL}
                             onCancel={() => {setDeletedUser(null)}}/>
            </div>
        )}
      </div>
  );
}

export default AccountListPage;