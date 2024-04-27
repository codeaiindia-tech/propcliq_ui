"use client";
import Select from "react-select";

const Location = (props) => {
  const inqueryType = [
    { value: "Greater Noida", label: "Greater Noida" }
  ];

  const customStyles = {
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
        name="colors"
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

export default Location;
