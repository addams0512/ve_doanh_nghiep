import React, { createContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import YourBusiness from "../layouts/Business/YourBusiness";
import "./DoanhNghiepPage.css";
import CreateBusiness from "../layouts/Business/CreateBusiness";
import AddBusiness from "../layouts/Business/AddBusiness";
export const FileContext = createContext();
const DoanhNghiepPage = () => {
  const [isCreateBusiness, setIsCreateBusiness] = useState(false);
  const [isYourBusiness, setIsYourBusiness] = useState(true);
  const [isAddBusiness, setIsAddBusiness] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const value = {
    finalData,
    setFinalData,
  };
  return (
    <div className="business-page">
      <Sidebar />
      <FileContext.Provider value={value}>
        {isYourBusiness && (
          <YourBusiness
            createBusinessPage={() => {
              setIsCreateBusiness(true);
              setIsYourBusiness(false);
            }}
            displayAddYourBusiness={() => {
              setIsYourBusiness(false);
              setIsAddBusiness(true);
            }}
          />
        )}
        {isAddBusiness && (
          <AddBusiness
            showBusiness={() => {
              setIsAddBusiness(false);
              setIsYourBusiness(true);
            }}
          />
        )}
        {isCreateBusiness && <CreateBusiness />}
      </FileContext.Provider>
    </div>
  );
};

export default DoanhNghiepPage;
