"use client";

import listings from "@/data/listings";
import React, { useState, useEffect } from "react";
import ListingSidebar from "../../sidebar";
import TopFilterBar from "./TopFilterBar";
import FeaturedListings from "./FeatuerdListings";

import PaginationTwo from "../../PaginationTwo";

export default function PropertyFiltering() {
  const [filteredData, setFilteredData] = useState([]);

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [sortedFilteredData, setSortedFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const [colstyle, setColstyle] = useState(false);
  const [pageItems, setPageItems] = useState([]);

  const [pageContentTrac, setPageContentTrac] = useState([]);

  const [listingStatus, setListingStatus] = useState("All");
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathroms, setBathroms] = useState(0);
  const [location, setLocation] = useState("All Cities");
  const [squirefeet, setSquirefeet] = useState([]);
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getPriceValue = (price) => {
    if (typeof price !== "string") return 0;

    const numericPrice = price.replace(/\$/g, "").replace(/,/g, "").trim();
    const parsed = Number(numericPrice);

    return Number.isNaN(parsed) ? 0 : parsed;
  };

  useEffect(() => {
    setPageItems(
      Array.isArray(sortedFilteredData)
        ? sortedFilteredData.slice((pageNumber - 1) * 8, pageNumber * 8)
        : []
    );
    setPageContentTrac([
      (pageNumber - 1) * 8 + 1,
      pageNumber * 8,
      Array.isArray(sortedFilteredData) ? sortedFilteredData.length : 0,
    ]);
  }, [pageNumber, sortedFilteredData]);

  const resetFilter = () => {
    setListingStatus("All");
    setPropertyTypes([]);
    setPriceRange([0, 100000]);
    setBedrooms(0);
    setBathroms(0);
    setLocation("All Cities");
    setSquirefeet([]);
    setyearBuild([0, 2050]);
    setCategories([]);
    setCurrentSortingOption("Newest");
    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });
  };

  const handlelistingStatus = (elm) => {
    setListingStatus((pre) => (pre == elm ? "All" : elm));
  };

  const handlepropertyTypes = (elm) => {
    if (elm == "All") {
      setPropertyTypes([]);
    } else {
      setPropertyTypes((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const handlepriceRange = (elm) => {
    setPriceRange(elm);
  };
  const handlebedrooms = (elm) => {
    setBedrooms(elm);
  };
  const handlebathroms = (elm) => {
    setBathroms(elm);
  };
  const handlelocation = (elm) => {
    console.log(elm);
    setLocation(elm);
  };
  const handlesquirefeet = (elm) => {
    setSquirefeet(elm);
  };
  const handleyearBuild = (elm) => {
    setyearBuild(elm);
  };
  const handlecategories = (elm) => {
    if (elm == "All") {
      setCategories([]);
    } else {
      setCategories((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el != elm)] : [...pre, elm]
      );
    }
  };
  const filterFunctions = {
    handlelistingStatus,
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlelocation,
    handlesquirefeet,
    handleyearBuild,
    handlecategories,
    priceRange,
    listingStatus,
    propertyTypes,
    resetFilter,

    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    setPropertyTypes,
    setSearchQuery,
  };

  useEffect(() => {
    const refItems = Array.isArray(listings)
      ? listings.filter((elm) => {
          if (listingStatus == "All") {
            return true;
          } else if (listingStatus == "Buy") {
            return !elm?.forRent;
          } else if (listingStatus == "Rent") {
            return elm?.forRent;
          }
          return true;
        })
      : [];

    let filteredArrays = [];

    if (propertyTypes.length > 0) {
      const filtered = refItems.filter((elm) =>
        propertyTypes.includes(elm?.propertyType)
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => Number(el?.bed || 0) >= bedrooms),
    ];

    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => Number(el?.bath || 0) >= bathroms),
    ];

    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => {
        const city = el?.city?.toLowerCase?.() || "";
        const locationValue = el?.location?.toLowerCase?.() || "";
        const title = el?.title?.toLowerCase?.() || "";
        const features = Array.isArray(el?.features)
          ? el.features.join(" ").toLowerCase()
          : "";
        const query = searchQuery.toLowerCase();

        return (
          city.includes(query) ||
          locationValue.includes(query) ||
          title.includes(query) ||
          features.includes(query)
        );
      }),
    ];

    filteredArrays = [
      ...filteredArrays,
      !categories.length
        ? [...refItems]
        : refItems.filter((elm) => {
            const features = Array.isArray(elm?.features) ? elm.features : [];
            return categories.every((elem) => features.includes(elem));
          }),
    ];

    if (location != "All Cities") {
      filteredArrays = [
        ...filteredArrays,
        refItems.filter((el) => el?.city == location),
      ];
    }

    if (priceRange.length > 0) {
      const filtered = refItems.filter((elm) => {
        const priceValue = getPriceValue(elm?.price);
        return priceValue >= priceRange[0] && priceValue <= priceRange[1];
      });
      filteredArrays = [...filteredArrays, filtered];
    }

    if (squirefeet.length > 0 && squirefeet[1]) {
      console.log(squirefeet);
      const filtered = refItems.filter(
        (elm) =>
          Number(elm?.sqft || 0) >= Number(squirefeet[0]) &&
          Number(elm?.sqft || 0) <= Number(squirefeet[1])
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    if (yearBuild.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          Number(elm?.yearBuilding || 0) >= Number(yearBuild[0]) &&
          Number(elm?.yearBuilding || 0) <= Number(yearBuild[1])
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    const commonItems = refItems.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );

    setFilteredData(commonItems);
  }, [
    listingStatus,
    propertyTypes,
    priceRange,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    searchQuery,
  ]);

  useEffect(() => {
    setPageNumber(1);

    if (currentSortingOption == "Newest") {
      const sorted = [...filteredData].sort(
        (a, b) => Number(a?.yearBuilding || 0) - Number(b?.yearBuilding || 0)
      );
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price Low") {
      const sorted = [...filteredData].sort(
        (a, b) => getPriceValue(a?.price) - getPriceValue(b?.price)
      );
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price High") {
      const sorted = [...filteredData].sort(
        (a, b) => getPriceValue(b?.price) - getPriceValue(a?.price)
      );
      setSortedFilteredData(sorted);
    } else {
      setSortedFilteredData(filteredData);
    }
  }, [filteredData, currentSortingOption]);

  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-4 d-none d-lg-block">
            <ListingSidebar filterFunctions={filterFunctions} />
          </div>
          {/* End .col-lg-4 */}

          {/* start mobile filter sidebar */}
          <div
            className="offcanvas offcanvas-start p-0"
            tabIndex="-1"
            id="listingSidebarFilter"
            aria-labelledby="listingSidebarFilterLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="listingSidebarFilterLabel">
                Listing Filter
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body p-0">
              <ListingSidebar filterFunctions={filterFunctions} />
            </div>
          </div>
          {/* End mobile filter sidebar */}

          <div className="col-lg-8">
            <div className="row align-items-center mb20">
              <TopFilterBar
                pageContentTrac={pageContentTrac}
                colstyle={colstyle}
                setColstyle={setColstyle}
                setCurrentSortingOption={setCurrentSortingOption}
              />
            </div>
            {/* End TopFilterBar */}

            <div className="row mt15">
              <FeaturedListings colstyle={colstyle} data={pageItems} />
            </div>
            {/* End .row */}

            <div className="row">
              <PaginationTwo
                pageCapacity={8}
                data={sortedFilteredData}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
            {/* End .row */}
          </div>
          {/* End .col-lg-8 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
}