"use client";

import listings from "@/data/listings";
import React, { useState, useEffect } from "react";
import ListingSidebar from "../../sidebar";
import AdvanceFilterModal from "@/components/common/advance-filter-two";
import TopFilterBar from "./TopFilterBar";
import FeaturedListings from "./FeatuerdListings";
import Pagination from "../../Pagination";
import PaginationTwo from "../../PaginationTwo";
import { useInView } from 'react-intersection-observer'
import Link from "next/link";
import Image from "next/image";

export default function PropertyFiltering() {

  const NUMBER_OF_USERS_TO_FETCH = 12

  const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH)
  const [users, setUsers] = useState([]);
  const [propertyCount, setPropertyCount] = useState(0);
  



  const { ref, inView } = useInView()
  const [filteredData, setFilteredData] = useState([]);

  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [sortedFilteredData, setSortedFilteredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [colstyle, setColstyle] = useState(false);
  const [pageItems, setPageItems] = useState([]);
  const [pageContentTrac, setPageContentTrac] = useState([]);

  useEffect(() => {
    setPageItems(
      sortedFilteredData.slice((pageNumber - 1) * 10, pageNumber * 10)
    );
    setPageContentTrac([
      (pageNumber - 1) * 10 + 1,
      pageNumber * 10,
      sortedFilteredData.length,
    ]);
  }, [pageNumber, sortedFilteredData]);


  const getProperties = async (offset, limit) => {
    try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({skip:offset, limit}),
        };
        const response = await fetch(
          `${process.env.baseUrl}/properties`,
          requestOptions,
          { cache: "no-store" }
        );
        const data = await response.json();
      return data.data
    } catch (error) {
      console.log(error)
      throw new Error(`An error happened: ${error}`)
    }
  }


  const loadMoreUsers = async () => {
    // const apiUsers = await getUsers(offset, NUMBER_OF_USERS_TO_FETCH)
    // setUsers(users => [...users, ...apiUsers])
    // setOffset(offset => offset + NUMBER_OF_USERS_TO_FETCH)
    const apiUsers = await getProperties(offset, NUMBER_OF_USERS_TO_FETCH)
    setUsers(users => [...users, ...apiUsers])
    setOffset(offset => offset + NUMBER_OF_USERS_TO_FETCH)
  }

  useEffect(() => {
    if (inView) {
      loadMoreUsers()
    }
  }, [inView])


  const [listingStatus, setListingStatus] = useState("All");
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathroms, setBathroms] = useState(0);
  const [location, setLocation] = useState("All Cities");
  const [squirefeet, setSquirefeet] = useState([]);
  const [yearBuild, setyearBuild] = useState([]);
  const [categories, setCategories] = useState([]);

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

    document.querySelectorAll(".filterSelect").forEach(function (element) {
      element.value = "All Cities";
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
  };

  useEffect(() => {
    console.log("paraamst :::::: HOME LISTING COL-2 ::::::::");
    const fetchData = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({skip:0, limit:12}),
      };
      const response = await fetch(
        `${process.env.baseUrl}/properties`,
        requestOptions,
        { cache: "no-store" }
      );
      const data = await response.json();
      setUsers(data.data);
      setPropertyCount(data.count)
    };
    fetchData();




    // const refItems = listings.filter((elm) => {
    //   if (listingStatus == "All") {
    //     return true;
    //   } else if (listingStatus == "Buy") {
    //     return !elm.forRent;
    //   } else if (listingStatus == "Rent") {
    //     return elm.forRent;
    //   }
    // });

    // let filteredArrays = [];

    // if (propertyTypes.length > 0) {
    //   const filtered = refItems.filter((elm) =>
    //     propertyTypes.includes(elm.propertyType)
    //   );
    //   filteredArrays = [...filteredArrays, filtered];
    // }
    // filteredArrays = [
    //   ...filteredArrays,
    //   refItems.filter((el) => el.bed >= bedrooms),
    // ];
    // filteredArrays = [
    //   ...filteredArrays,
    //   refItems.filter((el) => el.bath >= bathroms),
    // ];

    // filteredArrays = [
    //   ...filteredArrays,
    //   !categories.length
    //     ? [...refItems]
    //     : refItems.filter((elm) =>
    //         categories.every((elem) => elm.features.includes(elem))
    //       ),
    // ];

    // if (location != "All Cities") {
    //   filteredArrays = [
    //     ...filteredArrays,
    //     refItems.filter((el) => el.city == location),
    //   ];
    // }

    // if (priceRange.length > 0) {
    //   const filtered = refItems.filter(
    //     (elm) =>
    //       Number(elm.price.split("$")[1].split(",").join("")) >=
    //         priceRange[0] &&
    //       Number(elm.price.split("$")[1].split(",").join("")) <= priceRange[1]
    //   );
    //   filteredArrays = [...filteredArrays, filtered];
    // }
    // if (squirefeet.length > 0 && squirefeet[1]) {
    //   const filtered = refItems.filter(
    //     (elm) => elm.sqft >= squirefeet[0] && elm.sqft <= squirefeet[1]
    //   );
    //   filteredArrays = [...filteredArrays, filtered];
    // }
    // if (yearBuild.length > 0) {
    //   const filtered = refItems.filter(
    //     (elm) =>
    //       elm.yearBuilding >= yearBuild[0] && elm.yearBuilding <= yearBuild[1]
    //   );
    //   filteredArrays = [...filteredArrays, filtered];
    // }

    // const commonItems = refItems.filter((item) =>
    //   filteredArrays.every((array) => array.includes(item))
    // );

    // setFilteredData(commonItems);
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
  ]);

  useEffect(() => {
    setPageNumber(1);
    if (currentSortingOption == "Newest") {
      const sorted = [...filteredData].sort(
        (a, b) => a.yearBuilding - b.yearBuilding
      );
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price Low") {
      const sorted = [...filteredData].sort(
        (a, b) =>
          a.price.split("$")[1].split(",").join("") -
          b.price.split("$")[1].split(",").join("")
      );
      setSortedFilteredData(sorted);
    } else if (currentSortingOption.trim() == "Price High") {
      const sorted = [...filteredData].sort(
        (a, b) =>
          b.price.split("$")[1].split(",").join("") -
          a.price.split("$")[1].split(",").join("")
      );
      setSortedFilteredData(sorted);
    } else {
      setSortedFilteredData(filteredData);
    }
  }, [filteredData, currentSortingOption]);
  return (
    <section className="pt0 pb90 bgc-f7">

    {/* <div className='flex flex-col gap-3'>
      {users.map((user) => (
        <h1>{user._id}</h1>
      ))}
      <div ref={ref}>
        Loading...
      </div>
    </div> */}



      <div className="container">
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

        {/* <!-- Advance Feature Modal Start --> */}
        <div className="advance-feature-modal">
          <div
            className="modal fade"
            id="advanceSeachModal"
            tabIndex={-1}
            aria-labelledby="advanceSeachModalLabel"
            aria-hidden="true"
          >
            <AdvanceFilterModal filterFunctions={filterFunctions} />
          </div>
        </div>
        {/* <!-- Advance Feature Modal End --> */}

        {/* <div className="row">
          <TopFilterBar
            pageContentTrac={pageContentTrac}
            colstyle={colstyle}
            setColstyle={setColstyle}
            filterFunctions={filterFunctions}
            setCurrentSortingOption={setCurrentSortingOption}
          />
        </div> */}
        {/* End TopFilterBar */}

        <div className="row">
          <h6 className="list-title">{propertyCount} properties</h6>
        </div>
        <div className="row">


        {/* {users.map((user) => (
        <FeaturedListings colstyle={colstyle} data={pageItems} />
      ))} */}

{users.map((listing) => (
        <div
          className={` ${colstyle ? "col-sm-12" : "col-md-3"}  `}
          key={listing.id}
        >
          <div
            className={
              colstyle
                ? "listing-style1 listCustom listing-type"
                : "listing-style1"
            }
          >
            <Link href={`/property/${listing._id}`}>
              <div className="list-thumb">
                <Image
                  width={382}
                  height={248}
                  className="w-100  cover"
                  style={{ height: "354px" }}
                  src={listing?.files[0]?.path || "/images/listings/g4-10.jpg"}
                  alt="listings"
                />
                <div className="sale-sticker-wrap">
                  
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    {listing?.service}
                  </div>
                  
                </div>

                <div className="list-price">
                  {listing?.service === "Sell"
                    ? listing?.monthly_rent
                    : listing.monthly_rent + " / mo"}
                </div>
              </div>
              <div className="list-content">
                <h6 className="list-title">
                  {listing.bhk} {listing?.address_details?.area}{" "}
                  {listing?.address_details?.locality}
                </h6>
                <p className="list-text">{listing.location}</p>
                <div className="list-meta d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-bed" /> {listing?.bhk}
                  </a>
                  <a href="#">
                    <span className="flaticon-shower" /> {listing?.bathroom}{" "}
                    bath
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" />{" "}
                    {listing?.built_up_area?.includes("sqft")
                      ? listing?.built_up_area
                      : listing?.built_up_area + "sqft"}
                  </a>
                </div>

                <hr className="mt-2 mb-2" />
                <div className="list-meta2 d-flex justify-content-between align-items-center">
                  <span className="for-what">For {listing?.service}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}

      <div ref={ref}>
        
      </div>



          {/* <FeaturedListings colstyle={colstyle} data={pageItems} /> */}
        </div>
        {/* End .row */}

        <div className="row">
          {/* <PaginationTwo
            pageCapacity={10}
            data={sortedFilteredData}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          /> */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
}
