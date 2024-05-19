import { useEffect, useState} from "react";
import './style.scss';

import {useCookies} from 'react-cookie';

import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {API, ERROR, MESSAGE, PROFILE_PAGE} from "@Const";

const userInfoData = {
  "userID": 4,
  "fullName": "Bùi Minh Hoạt",
  "email": "khachhang@gmail.com",
  "hashedPassword": null,
  "phoneNumber": "09090909",
  "gender": "Nam",
  "dateBirthday": "1933-02-03",
  "avatarPath": "https://iili.io/J5HNvHP.jpg",
  "isAdmin": true
};

const ProfilePersonalInformationPage = () => {
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [userID, setUserID] = useState(queryParams.userID);

  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateBirthday, setDateBirthday] = useState({ day: '', month: '', year: '' });

  useEffect(() => {
    const data = userInfoData;
    let dateParts = [];
    let year = "";
    let month = "";
    let day = "";
    try {
      dateParts = data.dateBirthday.split("-");
      year = dateParts[0].toString();
      month = dateParts[1].toString();
      day = dateParts[2].toString();
      if (day[0] === "0") day = day[1];
      if (month[0] === "0") month = month[1];
    } catch (error) {}

    console.log(data);
    setUserData(data);
    setName(data.fullName);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setGender(data.gender);
    setDateBirthday({ day, month, year });
  }, []);

  return (
      <div className="col-8 content-children item-row">
        <div className="information-wrap">
          <div className="header-wrap">
            <span className="title">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.EDIT_PERSONAL_INFORMATION}</span>
          </div>
          <div className="form-wrap">
            <form method="POST" action="https://profile/update-info" className="form" id="form-info">
              <input type="hidden" name="_token" value="3b5uU0DbQ1xoXiDiljwxaFX7Pa9usSichthgGiHt" />
              <div className="input-wrap">
                <label className="title">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.FULL_NAME}</label>
                <span className="error--message"></span>
                <input
                    type="text"
                    placeholder={PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.FULL_NAME_PLACEHOLDER}
                    className="input__info input"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-wrap">
                <label className="title">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.EMAIL}</label>
                <input
                    className="input"
                    type="email"
                    placeholder={PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.EMAIL_PLACEHOLDER}
                    readOnly
                    disabled
                    name="email"
                    value={email}
                />
              </div>
              <div className="input-wrap">
                <label className="title">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.PHONE_NUMBER}</label>
                <span className="error--message"></span>
                <input
                    readOnly
                    disabled
                    type="text"
                    placeholder={PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.PHONE_NUMBER_PLACEHOLDER}
                    className="input__info input"
                    name="phoneNumber"
                    value={phoneNumber}
                />
              </div>
              <div className="input-wrap">
                <label className="title">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.GENDER}</label>
                <div className="form-radio">
                  <div className="radio-item">
                    <input
                        type="radio"
                        name="gender"
                        id="0"
                        value="0"
                        checked={gender === PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.MALE}
                        onChange={() => setGender(PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.MALE)}
                    />
                    <label htmlFor="0">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.MALE}</label>
                  </div>
                  <div className="radio-item">
                    <input
                        type="radio"
                        name="gender"
                        id="1"
                        value="1"
                        checked={gender === PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.FEMALE}
                        onChange={() => setGender(PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.FEMALE)}
                    />
                    <label htmlFor="1">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.FEMALE}</label>
                  </div>
                  <div className="radio-item">
                    <input
                        type="radio"
                        name="gender"
                        id="2"
                        value="2"
                        checked={gender === PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.OTHER}
                        onChange={() => setGender(PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.OTHER)}
                    />
                    <label htmlFor="2">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.OTHER}</label>
                  </div>
                </div>
              </div>
              <div className="input-wrap">
                <label className="title">{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.BIRTH_DATE}</label>
                <div className="date-of-birth">
                  <div className="choose-date">
                    <span className="label-date" style={{ display: 'none' }}>{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.DAY}</span>
                    <select
                        className="select-day form-select"
                        id="day"
                        name="date"
                        value={dateBirthday ? dateBirthday.day : ''}
                        onChange={(e) => {
                          setDateBirthday({ ...dateBirthday, day: e.target.value });
                        }}
                    >
                      <option value="day" className="option-date" style={{ display: 'none' }}></option>
                      {Array.from({ length: 31 }, (_, i) => (
                          <option key={i} value={i + 1}>Ngày {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="choose-date">
                    <span className="label-month" style={{ display: 'none' }}>{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.MONTH}</span>
                    <select
                        className="select-month form-select"
                        id="month"
                        name="month"
                        value={dateBirthday ? dateBirthday.month : ''}
                        onChange={(e) => {
                          setDateBirthday({ ...dateBirthday, month: e.target.value });
                        }}
                    >
                      <option value="month" className="option-month" style={{ display: 'none' }}></option>
                      {Array.from({ length: 12 }, (_, i) => (
                          <option key={i} value={i + 1}>Tháng {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="choose-date">
                    <span className="label-year" style={{ display: 'none' }}>{PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.YEAR}</span>
                    <select
                        className="select-year form-select"
                        id="year"
                        name="year"
                        value={dateBirthday ? dateBirthday.year : ''}
                        onChange={(e) => {
                          setDateBirthday({ ...dateBirthday, year: e.target.value });
                        }}
                    >
                      <option value="year" className="option-year" style={{ display: 'none' }}></option>
                      {Array.from({ length: 91 }, (_, i) => (
                          <option key={i} value={1933 + i}>Năm {1933 + i}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="btn-wrap">
            <button type="button" className="btn btn-primary btn-save-information">
              {PROFILE_PAGE.PROFILE_PERSONAL_INFORMATION_PAGE.SAVE_INFORMATION}
            </button>
          </div>
          <span className="error--message error-save"></span>
        </div>
      </div>
  );
}

export default ProfilePersonalInformationPage;