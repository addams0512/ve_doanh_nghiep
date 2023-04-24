import React from "react";
import "./Setting.css";
import { AiOutlineSetting } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { HiOutlineKey } from "react-icons/hi";
import { RiBillLine } from "react-icons/ri";
import { useState } from "react";
import SettingAccount from "./SettingAccount";
import SettingNotifications from "./SettingNotifications";
import SettingSecurity from "./SettingSecurity";
import SettingBilling from "./SettingBilling";

export default function Setting() {
  const [accountDisplay, setAccountDisplay] = useState(true);
  const [notiDisplay, setNotiDisplay] = useState(false);
  const [securityDisplay, setSecurityDisplay] = useState(false);
  const [billingDisplay, setBillingDisplay] = useState(false);
  function showAccount() {
    setAccountDisplay(true);
    setNotiDisplay(false);
    setSecurityDisplay(false);
    setBillingDisplay(false);
  }
  function showNoti() {
    setNotiDisplay(true);
    setAccountDisplay(false);
    setSecurityDisplay(false);
    setBillingDisplay(false);
  }
  function showSecurity() {
    setSecurityDisplay(true);
    setAccountDisplay(false);
    setNotiDisplay(false);
    setBillingDisplay(false);
  }
  function showBilling() {
    setBillingDisplay(true);
    setAccountDisplay(false);
    setNotiDisplay(false);
    setSecurityDisplay(false);
  }
  return (
    <div className="setting-container">
      <div className="setting-all">
        <div className="setting-info">
          <div className="setting-info-1">Cài đặt</div>
        </div>
        <div
          onClick={showAccount}
          style={
            accountDisplay ? { backgroundColor: "#373c4a", color: "white" } : {}
          }
          className="setting-service"
        >
          <div className="setting-service-icon">
            <AiOutlineSetting size={20} />
          </div>
          <div className="setting-service-info">
            <div className="setting-service-info-1">Tài khoản</div>
            <div className="setting-service-info-2">
              Thông tin tài khoản kiếm tiền
            </div>
          </div>
        </div>
        <div
          onClick={showNoti}
          style={
            notiDisplay ? { backgroundColor: "#373c4a", color: "white" } : {}
          }
          className="setting-service"
        >
          <div className="setting-service-icon">
            <BiBell size={20} />
          </div>
          <div className="setting-service-info">
            <div className="setting-service-info-1">Thông báo</div>
            <div className="setting-service-info-2">
              Thông báo công việc & lượt tương tác với khách hàng
            </div>
          </div>
        </div>
        <div
          onClick={showSecurity}
          style={
            securityDisplay
              ? { backgroundColor: "#373c4a", color: "white" }
              : {}
          }
          className="setting-service"
        >
          <div className="setting-service-icon">
            <HiOutlineKey size={20} />
          </div>
          <div className="setting-service-info">
            <div className="setting-service-info-1">Bảo mật</div>
            <div className="setting-service-info-2">
              Bảo mật thông tin công việc của bạn
            </div>
          </div>
        </div>
        <div
          onClick={showBilling}
          style={
            billingDisplay ? { backgroundColor: "#373c4a", color: "white" } : {}
          }
          className="setting-service"
        >
          <div className="setting-service-icon">
            <RiBillLine size={20} />
          </div>
          <div className="setting-service-info">
            <div className="setting-service-info-1">Tất toán</div>
            <div className="setting-service-info-2">
              Nghiệm thu & thu hồi thành quả
            </div>
          </div>
        </div>
      </div>
      {accountDisplay && <SettingAccount />}
      {notiDisplay && <SettingNotifications />}
      {securityDisplay && <SettingSecurity />}
      {billingDisplay && <SettingBilling />}
    </div>
  );
}
