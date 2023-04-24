import React from "react";
import "./SettingAccount.css";
import { useState } from "react";
import Profileaccounttosave from "./Profileaccounttosave";
import { createContext } from "react";
export const Test = createContext();

const SettingAccount = () => {
  const [firstname, setFirstName] = useState();
  const [lasttname, setLastName] = useState();
  const [username, setUserName] = useState();
  const [about, setAbout] = useState();
  const [urls, setUrls] = useState();
  const [emailaddress, setEmailAddress] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [language, setLanguage] = useState();
  const [saveaccount, setSaveAccount] = useState(false);
  const [cancelaccount, setCancelAccount] = useState();
  function saveprofile() {
    setSaveAccount(true);
  }
  function cancelprofile() {
    setFirstName("");
    setLastName("");
    setAbout("");
    setUrls("");
    setEmailAddress("");
    setCountry("");
    setPhoneNumber("");
    setLanguage("");
  }
  const value = {
    firstname,
    lasttname,
    username,
    about,
    urls,
    emailaddress,
    phonenumber,
    country,
    language,
  };
  return (
    <Test.Provider value={value}>
      <div className="container-setting">
        <div className="container-account">
          <div className="title-account">
            <div className="title-account-info">TÀI KHOẢN</div>
          </div>
          <div className="title-profile">
            <div className="title-profile-1">Hồ sơ</div>
            <div className="title-profile-2">
              Thông tin này sẽ được hiển thị công khai, vì vậy hãy cẩn thận với
              những gì bạn chia sẻ.
            </div>
          </div>
          <div className="title-name">
            <div className="title-firstname">
              <div className="title-firstname-1">Họ</div>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="title-firstname-2"
              ></input>
            </div>
            <div className="title-lastname">
              <div className="title-lastname-1">Tên</div>
              <input
                type="text"
                value={lasttname}
                onChange={(e) => setLastName(e.target.value)}
                className="title-lastname-2"
              ></input>
            </div>
          </div>
          <div className="title-username">
            <div className="title-username-1">Tên tài khoản</div>
            <div className="title-username-2">
              <div className="title-username-square">
                <div className="title-username-3">deedword.com/</div>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="title-username-4"
              ></input>
            </div>
          </div>

          <div className="title-about">
            <div className="title-about-1">Sứ mệnh</div>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="about-content"
            ></textarea>
            <div className="title-about-2">Mục tiêu và ước mơ của bạn.</div>
          </div>

          <div className="title-personal-information">
            <div className="title-personal-information-1">
              Thông tin liên hệ
            </div>
            <div className="title-personal-information-2">
              Thông tin này sẽ được hiển thị công khai, vì vậy hãy cẩn thận với
              những gì bạn chia sẻ.
            </div>
          </div>
          <div className="personal-data">
            <div className="data-email">
              <div className="data-email-1">Địa chỉ email</div>
              <input
                type="text"
                value={emailaddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="data-input"
              ></input>
            </div>
            <div className="data-phone">
              <div className="data-phone-1">Số điện thoại</div>
              <input
                type="text"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="data-input"
              ></input>
            </div>
            <div className="data-country">
              <div className="data-country-1">Quốc gia</div>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="data-input"
              ></input>
            </div>
            <div className="data-language">
              <div className="data-language-1">Ngôn ngữ</div>
              <input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="data-input"
              ></input>
            </div>
          </div>
          <div className="time-create-account">
            <div className="time-create-account-info">
              Tài khoản này được tạo vào ngày 5 tháng 1 năm 2017,8:35:40 CH
            </div>
          </div>
          <div className="account-button-end">
            <div className="account-button-cancel">
              <button
                onClick={cancelprofile}
                className="account-button-cancel-1"
              >
                Hủy bỏ
              </button>
            </div>
            <div className="account-button-save">
              <button onClick={saveprofile} className="account-button-save-1">
                Lưu
              </button>
            </div>
          </div>
        </div>
        {saveaccount && (
          <Profileaccounttosave remove={() => setSaveAccount(false)} />
        )}
      </div>
    </Test.Provider>
  );
};

export default SettingAccount;
