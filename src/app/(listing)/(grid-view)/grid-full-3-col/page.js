'use client'



import { useSearchParams } from "next/navigation";
import DefaultHeader from "@/components/common/DefaultHeader";
import Header from "@/components/home/home-v5/Header";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";

import React, {useEffect, useState} from "react";

const GridFull3Col = () => {
  const [properties, setProperties] = useState([]);
  const urlParams = useSearchParams()
  const paramsObj = Array.from(urlParams.keys()).reduce(
    (acc, val) => ({ ...acc, [val]: urlParams.get(val) }),
    {}
  );

  const getProperties = async (paramsObj) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paramsObj)
    };
    const res = await fetch("http://localhost:7001/properties", requestOptions, {cache: 'no-store'});
    const prop = await res.json();
    setProperties(prop.data);
  }

  console.log("paramsObj:::::", paramsObj)
  useEffect(() => {
    try{
      getProperties(paramsObj);
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* <Header /> */}
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">{paramsObj.search}, {paramsObj.looking}, {paramsObj.location} </h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">For Rent</a>
                </div>
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter"
                >
                  <span className="flaticon-settings" /> Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering properties={properties} />
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default GridFull3Col;
