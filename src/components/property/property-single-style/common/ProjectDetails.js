import React from "react";

const ProjectDetails = ({ projectData }) => {
  console.log("data", projectData);

  const columns = [
    [
      {
        label: "Property ID",
        value: projectData._id.slice(0, 2),
      },
      {
        label: "Price",
        value: projectData.show_price_on_website,
      },
      {
        label: "Project Size",
        value: projectData.project_size,
      },
      {
        label: "Builder Name",
        value: projectData.builder_display_name,
      },
      {
        label: "Project Name",
        value: projectData.display_name,
      },
    ],
    [
      {
        label: "RERA No",
        value: projectData.rera_registration_number,
      },
      {
        label: "No of Towers",
        value: projectData.number_of_towers,
      },
      {
        label: "Property Type",
        value: projectData.property_type,
      },
      {
        label: "Project Status",
        value: projectData.project_status,
      },
      {
        label: "Bank List",
        value: projectData.bank_list,
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
