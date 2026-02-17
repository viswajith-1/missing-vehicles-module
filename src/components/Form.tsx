import { useState } from "react";
import OfficerForm from "./OfficerForm";
import RForm from "./RForm";
import FForm from "./FForm";

const Form = () => {
  const [action, setAction] = useState("Found");
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    setActiveTab(tab);
  };

  const renderForm = () => {
    if (action === "Found") {
      return activeTab === "1"
        ? <OfficerForm onNext={toggle} />
        : <FForm />;
    }

    if (action === "Recovery") {
      return activeTab === "1"
        ? <OfficerForm onNext={toggle} />
        : <RForm />;
    }

    return null;
  };

  return (
    <div className="recovery-form-card">
      <div className="search-card-head">
        <h6 className="table-card-title">
          {action === "Found" ? "FOUND FORM" : "RECOVERY FORM"}
        </h6>
      </div>

      {renderForm()}
    </div>
  );
};

export default Form;