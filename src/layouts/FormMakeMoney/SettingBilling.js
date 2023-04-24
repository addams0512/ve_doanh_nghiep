import React from "react";
import "./SettingBilling.css";
import { BsBoxSeam, BsCreditCard } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdTrackChanges } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
import { useState } from "react";
export default function SettingBilling() {
  const [openFileAddOption, setOpenFileAddOption] = useState(false);
  // const [currentId, setCurrentId] = useState();

  function openService() {
    setOpenFileAddOption(!openFileAddOption);
  }

  const servicePack = [
    {
      id: 1,
      name: "Dùng thử",
      price: "Miễn Phí",
    },
    {
      id: 2,
      name: "Chốt sales",
      price: "200,000 VND",
    },
    {
      id: 3,
      name: "Đa năng",
      price: "499,000 VND",
    },
  ];
  const [serviceData, setServiceData] = useState(servicePack);
  const [fillterService, setFillterService] = useState(servicePack);
  function chooseService(id) {
    const array = servicePack.filter((e) => e.id === id);
    setFillterService(array);
    console.log(array);
  }
  return (
    <div className="setting-billing-container">
      <div className="setting-billing-heading">
        <div className="setting-billing-heading-title">
          Gói hiện tại:{" "}
          <span style={{ color: "rgb(15,96,88)" }}> Executive</span>
        </div>
        <div className="setting-billing-heading-content">
          Thank for being a prenium member and supportting our development.
        </div>
      </div>
      <div className="setting-billing-body">
        <div
          className="setting-billing-body-choose-service"
          style={{ background: openFileAddOption ? "white" : "" }}
        >
          <div className="choose-service-icons">
            <BsBoxSeam size={30} />
          </div>
          <div className="choose-service-price-name">
            <div className="choose-service-name">Chọn gói</div>
            <div className="choose-service-price">
              {fillterService[0].price} {fillterService[0].name}
              {/* {serviceData[currentId - 1]?.price}{" "}
              {serviceData[currentId - 1]?.name} */}
            </div>
          </div>
          <button onClick={openService} className="choose-service-icons-plus">
            <div>
              <AiOutlinePlusCircle size={30} color="rgb(15,96,88)" />
            </div>
          </button>
        </div>
        {/* Bảng gói dịch vụ  */}
        {openFileAddOption && (
          <div className="setting-billing-body-choose-service-option">
            {serviceData.map((e) => {
              return (
                <>
                  <div
                    onClick={() => {
                      // setCurrentId(e.id);
                      chooseService(e.id);
                      setOpenFileAddOption(false);
                    }}
                    className="setting-billing-body-choose-service-add-option"
                  >
                    <p>{e.name}</p>
                    <p>{e.price}</p>
                  </div>
                </>
              );
            })}
          </div>
        )}
        <div className="setting-billing-body-change-service">
          <div className="change-service-icons">
            <MdTrackChanges size={30} color="rgb(15,96,88)" />
          </div>
          <div className="change-service-accept">Change Plan</div>
        </div>
      </div>
      <div style={{ marginTop: "60px" }} className="setting-billing-heading">
        <div className="setting-billing-heading-title">
          Hình thức thanh toán
        </div>
        <div className="setting-billing-heading-content">
          Renews on 15 January, 2021.
        </div>
      </div>
      <div className="setting-billing-body">
        <div className="setting-billing-body-choose-service">
          <div className="choose-service-icons">
            <BsCreditCard size={30} />
          </div>
          <div className="choose-service-price-name">
            <div className="choose-service-name">Visa</div>
            <div className="choose-service-price">****6450</div>
          </div>
          <div className="choose-service-icons-plus">
            <TbPencilMinus size={30} color="rgb(15,96,88)" />
          </div>
        </div>
        <p style={{ marginTop: "20px", marginLeft: "20px" }}>
          If you update your payment method, it will only be displayed here
          after your next billing cycle.
        </p>
        <div className="setting-billing-body-cancel-service">
          <div className="choose-service-cancel">Cancel Subcription </div>
        </div>
      </div>
    </div>
  );
}
