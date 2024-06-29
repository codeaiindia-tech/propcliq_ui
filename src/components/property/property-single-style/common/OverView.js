import listings from "@/data/listings";
import React from "react";

const OverView = ({ id, data }) => {
  // const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: data?.bhk,
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: data?.bathroom,
    },
    {
      icon: "flaticon-event",
      label: "Built Up Area",
      value: data?.built_up_area,
    },
    {
      icon: "flaticon-garage",
      label: "Parking",
      value: data?.covered_parking,
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Carpet Area",
      value: data.carpet_area,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: data.category,
    },
  ];

  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
