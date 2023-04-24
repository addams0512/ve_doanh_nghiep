import React, { createContext, useContext } from "react";
import "./AddBusiness.css";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";
import AboutBusiness from "../../components/Business/AboutBusiness";
import { FileContext } from "../../pages/DoanhNghiepPage";

export const ProfilePersonal = createContext();
export default function AddBusiness({ showBusiness }) {
  const [openPageAfter, setOpenPageAfter] = useState(false);
  const [closePageBefor, setClosePageBefor] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState();
  const [MST, setMST] = useState("");
  const [CCCDOrCMNDNumber, setCCCDOrCMNDNumber] = useState("");
  const [GPKDNumber, setGPKDNumber] = useState("");
  const [address, setAddress] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [field, setField] = useState("");
  const [describe, setDescribe] = useState("");
  const { finalData, setFinalData } = useContext(FileContext);
  const showYourBusiness = () => {
    showBusiness();
  };
  const saveprofile = () => {
    const nextId = finalData.length > 0 ? finalData.at(-1).id + 1 : 0;
    setFinalData(() => {
      return {
        id: nextId,
        companyName: companyName,
        name: name,
        MST: MST,
        CCCDOrCMNDNumber: CCCDOrCMNDNumber,
        GPKDNumber: GPKDNumber,
        address: address,
        ward: ward,
        street: street,
        city: city,
        field: field,
        describe: describe,
      };
    });
  };
  const value = {
    companyName,
    name,
    MST,
    CCCDOrCMNDNumber,
    GPKDNumber,
    address,
    ward,
    street,
    city,
    field,
    describe,
  };
  function openpage2() {
    setOpenPageAfter(true);
    setClosePageBefor(false);
  }
  return (
    <div className="add-business-container-all">
      <div className="add-business-container">
        {/* Trang taoj doanh  nghiep */}
        <ProfilePersonal.Provider value={value}>
          <div style={{ display: "grid", gridTemplateColumns: "500px 900px" }}>
            <div style={{ backgroundColor: "rgb(230, 230, 230)" }}>
              {
                <div className="add-business-create-file-business-container">
                  <div className="add-business-create-file-business-heading">
                    <div className="add-business-create-file-business-heading-tittle">
                      TẠO TRANG DOANH NGHIỆP
                    </div>
                  </div>
                  {closePageBefor && (
                    <div className="add-business-create-file-business-body">
                      <div className="add-business-create-file-business-body-tittle">
                        <div className="add-business-create-file-business-body-tittle-info">
                          Thông tin doanh nghiệp
                        </div>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            Tên doanh nghiệp
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Deedword"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            Tên chủ doanh nghiệp
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Họ và tên"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            MST
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="MST"
                          value={MST}
                          onChange={(e) => setMST(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            CCCD/CMND của doanh nghiệp
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="CCCD/CMND"
                          value={CCCDOrCMNDNumber}
                          onChange={(e) => setCCCDOrCMNDNumber(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            Giấy phép kinh doanh
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Số GPKD"
                          value={GPKDNumber}
                          onChange={(e) => setGPKDNumber(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            Địa chỉ
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Số nhà, tên đường"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-address">
                        <div className="add-business-create-file-business-body-porfile-personal">
                          <div className="add-business-create-file-business-body-profile">
                            <div className="add-business-create-file-business-name-profile">
                              Phường
                            </div>
                            <div className="add-business-create-file-business-compulsory">
                              (*)
                            </div>
                          </div>
                          <input
                            type="text"
                            placeholder="Phường"
                            value={ward}
                            onChange={(e) => setWard(e.target.value)}
                            className="add-business-create-file-business-address-info"
                          ></input>
                        </div>
                        <div
                          style={{ marginLeft: "10px" }}
                          className="add-business-create-file-business-body-porfile-personal"
                        >
                          <div className="add-business-create-file-business-body-profile">
                            <div className="add-business-create-file-business-name-profile">
                              Quận
                            </div>
                            <div className="add-business-create-file-business-compulsory">
                              (*)
                            </div>
                          </div>
                          <input
                            type="text"
                            placeholder="Quận"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            className="add-business-create-file-business-address-info"
                          ></input>
                        </div>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            Thành phố
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Thành phố"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            Lĩnh vực
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Lĩnh vực"
                          value={field}
                          onChange={(e) => setField(e.target.value)}
                          className="add-business-create-file-business-info"
                        ></input>
                      </div>
                      <div className="add-business-create-file-business-body-porfile-personal">
                        <div className="add-business-create-file-business-body-profile">
                          <div className="add-business-create-file-business-name-profile">
                            Mô tả
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <textarea
                          value={describe}
                          onChange={(e) => setDescribe(e.target.value)}
                          className="add-business-create-file-business-info-describe"
                        ></textarea>
                      </div>
                      <div className="add-business-create-file-business-bottom">
                        <button
                          onClick={openpage2}
                          className="add-business-create-file-business-btn"
                        >
                          TIẾP TỤC
                        </button>
                      </div>
                    </div>
                  )}
                  {/* thoong tin trang 2 */}
                  {openPageAfter && (
                    <div className="add-business-create-file-business-page-2">
                      <div className="add-business-create-file-business-body-tittle">
                        <div className="add-business-create-file-business-body-tittle-info">
                          Thông tin doanh nghiệp
                        </div>
                      </div>
                      <div className="add-business-create-file-business-profile-logo-personal">
                        <div className="add-business-create-file-business-profile-logo">
                          <div className="add-business-create-file-business-name-profile">
                            Logo doanh nghiệp
                          </div>
                          <div className="add-business-create-file-business-compulsory">
                            (*)
                          </div>
                        </div>
                        <div className="add-business-create-file-business-profile-logi-img">
                          <div className="add-business-create-file-business-profile-logo-circles">
                            <HiOutlinePlus size={30} color="gray" />
                          </div>
                          <div className="add-business-create-file-business-profile-logo-fix-icon">
                            <BsPencilSquare />
                          </div>
                          <div className="add-business-create-file-business-profile-logo-fix-content">
                            Chỉnh sửa
                          </div>
                        </div>
                      </div>{" "}
                      <div
                        style={{ marginTop: "35px" }}
                        className="add-business-create-file-business-profile-logo-personal"
                      >
                        <div className="add-business-create-file-business-profile-background-pic">
                          <div className="add-business-create-file-business-name-profile">
                            Ảnh nền doanh nghiệp
                          </div>
                          <div className="add-business-create-file-business-profile-add-background-pic">
                            <HiOutlinePlus size={30} color="gray" />
                          </div>
                        </div>
                        <div className="add-business-create-file-business-profile-background-pic-fix">
                          <div className="add-business-create-file-business-profile-background-pic-fix-icon">
                            <BsPencilSquare />
                          </div>
                          <div className="add-business-create-file-business-profile-background-pic-fix-content">
                            Chỉnh sửa
                          </div>
                        </div>
                      </div>
                      <div className="add-business-create-file-business-page-2-bottom">
                        <button
                          onClick={showYourBusiness}
                          className="add-business-create-file-business-page-2-btn"
                        >
                          XONG
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }
            </div>

            {/* trang doanh nghiệp */}
            <AboutBusiness />
          </div>
        </ProfilePersonal.Provider>
      </div>
    </div>
  );
}
