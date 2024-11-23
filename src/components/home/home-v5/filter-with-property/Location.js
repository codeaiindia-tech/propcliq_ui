"use client";
import Select from "react-select";

const Location = (props) => {
  const inqueryType = [
    { value: "Delhi", label: "Delhi" },
    { value: "Greater Noida", label: "Greater Noida" },
    { value: "Noida", label: "Noida" },
    { value: "Noida Extension", label: "Noida Extension" },
    { value: "Gurgaon", label: "Gurgaon" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#b69031"
          : isHovered
          ? "#b69031"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  const onClick = (event) => {
    props.onClick(event.value);
  };

  return (
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
        onChange={(event) => onClick(event)}
      />
    </>
  );
};

export default Location;
