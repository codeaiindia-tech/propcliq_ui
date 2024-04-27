"use client";
import { useState } from "react";
import Select from "react-select";

const LookingFor = (props) => {
  const [looking, setLooking] = useState("");
  const inqueryType = [
    { value: "Apartment", label: "Apartment" },
    { value: "Independent Floor", label: "Independent Floor" },
    { value: "Independent House", label: "Independent House" },
    { value: "Villa", label: "Villa" },
    { value: "Plot", label: "Plot" },
    { value: "Agricultural Land", label: "Agricultural Land" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
    }),
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };


  const onClick = (event) => {
    props.onClick(event.value);
  }

  return (
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="looking"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
        onChange={(event) => onClick(event) }
      />
    </>
  );
};

export default LookingFor;
