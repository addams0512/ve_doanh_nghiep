import React from "react";
import "./AboutUs.css";
import { useContext } from "react";
import { ProfilePersonal } from "./AddBusiness";
import { GoLocation } from "react-icons/go";
import { FileContext } from "../../pages/DoanhNghiepPage";
const AboutUs = () => {
  const { finalData } = useContext(FileContext);
  const value = useContext(ProfilePersonal);

  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-container-box">
          <div className="about-us-container-box-left">
            <div className="about-us-container-box-describe">Mô tả</div>
            <div className="about-us-container-box-describe-content">
              {value.describe}
            </div>
          </div>
          <div className="about-us-container-box-right1">
            <div className="about-us-container-box-describe">Địa chỉ</div>
            <div className="about-us-container-box-address-content">
              <div className="about-us-container-box-address-info">
                <GoLocation size={20} />
                {value.address}
              </div>
              <div
                style={{ display: "flex" }}
                className="about-us-container-box-address-info"
              >
                <div
                  style={{ marginLeft: "10px" }}
                  className="about-us-container-box-address-info"
                >
                  {value.ward}
                </div>
                <div
                  style={{ marginLeft: "20px" }}
                  className="about-us-container-box-address-info"
                >
                  {value.street}
                </div>
              </div>
              <div
                style={{ marginLeft: "18px" }}
                className="about-us-container-box-address-info"
              >
                {value.city}
              </div>
            </div>
          </div>
          <div className="about-us-container-box-right2">Bản đồ</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
