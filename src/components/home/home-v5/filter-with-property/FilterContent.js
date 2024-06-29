"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import LookingFor from "./LookingFor";
import Location from "./Location";

const initialValues = {
  search: "",
  looking: "",
  location: "",
  priceMin: "",
  priceMax: "",
};

const FilterContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("rent");
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOnChangeMinPrice = (e) => {
    let valuess = { min: e.target.value, max: values.priceMax };
    setPrice({ value: valuess });
    setValues({
      ...values,
      priceMin: valuess.min,
      priceMax: valuess.max,
    });
  };

  const handleOnChangeMaxPrice = (e) => {
    let valuess = { min: values.priceMin, max: e.target.value };
    setPrice({ value: valuess });
    setValues({
      ...values,
      priceMin: valuess.min,
      priceMax: valuess.max,
    });
  };

  const tabs = [
    { id: "rent", label: "Rent" },
    { id: "buy", label: "Buy" },
    { id: "sold", label: "Sold" },
  ];

  const [price, setPrice] = useState({ value: { min: 0, max: 50000000 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });
    setValues({
      ...values,
      priceMin: value.min,
      priceMax: value.max,
    });
  };

  const handleOnChangePrice = (value) => {
    setPrice({ value });
    setValues({
      ...values,
      priceMin: value.min,
      priceMax: value.max,
    });
  };

  const serializeObject = async (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };

  async function getData(values) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const res = await fetch(
      `${process.env.baseUrl}/properties`,
      requestOptions,
      { cache: "no-store" }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const searchProperty = async () => {
    const urls = await serializeObject(values);
    router.push(`/grid-full-3-col?${urls}`);
  };

  const lookingFor = (value) => {
    setValues({
      ...values,
      looking: value,
    });
  };

  const locationFor = (value) => {
    setValues({
      ...values,
      location: value,
    });
  };

  return (
    <div className="advance-style4 at-home5 mt-100 mt50-lg mb10 mx-auto animate-up-2">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content text-start">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style3 at-home5">
              <div className="row align-items-center">
                <div className="col-md-4 col-xl-3 bdrr1 bdrrn-sm">
                  <label>Search</label>
                  <div className="advance-search-field position-relative">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <input
                          className="form-control bgc-f7 bdrs12 ps-0"
                          type="text"
                          name="search"
                          id="search"
                          placeholder={`SEARCH`} //Enter Keyword for ${tab.label}`}
                          onChange={handleInputChange}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-3 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0 px-0">
                    <div className="bootselect-multiselect">
                      <label className="fz14">Looking For</label>
                      <LookingFor onClick={lookingFor} />
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0">
                    <div className="bootselect-multiselect">
                      <label className="fz14">Location</label>
                      <Location onClick={locationFor} />
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0">
                    <div className="dropdown-lists">
                      <label className="fz14 mb-1">Price</label>
                      <div
                        className="btn open-btn text-start dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        style={{ fontSize: "13px" }}
                      >
                        ₹{price.value.min} - ₹{price.value.max}{" "}
                        <i className="fas fa-caret-down" />
                      </div>
                      <div className="dropdown-menu">
                        <div className="widget-wrapper pb20 mb0 pl20 pr20">
                          <div className="range-wrapper at-home10">
                            <InputRange
                              formatLabel={() => ``}
                              maxValue={50000000}
                              minValue={0}
                              value={price.value}
                              onChange={(value) => handleOnChange(value)}
                              id="slider"
                            />
                            <div className="d-flex align-items-center">
                              {/* <span id="slider-range-value1">
                                {price.value.min}
                              </span> */}
                              <input
                                className="form-control bgc-f7 bdrs12 ps-0"
                                type="text"
                                name="priceMin"
                                id="priceMin"
                                value={price.value.min}
                                onChange={(value) =>
                                  handleOnChangeMinPrice(value)
                                }
                                style={{
                                  border: "1px solid #ddd",
                                  height: "50px",
                                }}
                              />
                              <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                              {/* <span id="slider-range-value2">
                                {price.value.max}
                              </span> */}
                              <input
                                className="form-control bgc-f7 bdrs12 ps-0"
                                type="text"
                                name="priceMax"
                                id="priceMax"
                                value={price.value.max}
                                onChange={(value) =>
                                  handleOnChangeMaxPrice(value)
                                }
                                style={{
                                  border: "1px solid #ddd",
                                  height: "50px",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    {/* <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced
                    </button> */}
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="button"
                      onClick={searchProperty}
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterContent;
