import React from "react";
import Sidebar from "../components/Sidebar";
import "./FormMakeMoneyPage.css";
// import Phonebook from "../layouts/CreateWebsite/Phonebook";
// import CreateEnterprise from "../layouts/CreateWebsite/CreateEnterprise";
import Setting from "../layouts/FormMakeMoney/Setting";
const CalendarPages = () => {
  return (
    <div className="form-make-money-page">
      <Sidebar />
      {/* <CreateEnterprise /> */}
      {/* <Phonebook /> */}
      <Setting />
    </div>
  );
};

export default CalendarPages;
