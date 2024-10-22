import React, { useState } from "react";
import CVForm from "../../components/template_cv/CVForm";
import Preview from "../../components/template_cv/Preview";

const CVBuilder = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    socialMedia: [],
    summary: "",
    education: [],
    workExperience: [],
    organizationExperience: [],
    skillsAchievements: [],
  });

  // Update state based on changes in the CVForm
  const handlePreviewUpdate = (newData) => {
    setData(newData);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex">
      <div className="row w-100">
        {/* CV Form Section */}
        <div className="col-md-6 p-4 bg-white shadow">
          <h1 className="text-center mb-4">CV Generator</h1>
          <CVForm onPreview={handlePreviewUpdate} />
        </div>

        {/* Preview Section */}
        <div className="col-md-6 p-4 bg-white shadow ">
          <h1 className="text-center mb-4">Preview CV</h1>
          <Preview data={data} />
        </div>
      </div>
    </div>
  );
};

export default CVBuilder;
