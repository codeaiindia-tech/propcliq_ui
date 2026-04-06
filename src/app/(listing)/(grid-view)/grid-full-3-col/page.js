"use client";

import { useSearchParams } from "next/navigation";
import DefaultHeader from "@/components/common/DefaultHeader";
import Header from "@/components/home/home-v5/Header";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";

import React, { useEffect, useMemo, useState } from "react";

const GridFull3Col = () => {
  const [properties, setProperties] = useState([]);
  const urlParams = useSearchParams();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL

  if(!base_url){
    console.log("BASE URL IS MISSING")
  }
  
  const paramObj = useMemo(()=>{
    const obj = {}
    for (const key of urlParams.keys()){
      const value = urlParams.get(key)
      
      if(value && value.trim() !== "" ){
        obj[key] = value
      }

    }

    return obj

  }, [urlParams])

  const getProperties = async (paramsObj) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paramsObj),
      cache: "no-store"
    };
    try {
      const res = await fetch(
        `${base_url}/properties`,
        requestOptions
      );
      // const prop = await res.json();
      // setProperties(prop.data);

      if(!res.ok){
        console.log("PROPERTIES API FAILED :: ", res.status, prop)
        setProperties([])
        return;
      }

      const prop = await res.json()

      setProperties(Array.isArray(prop?.data) ? prop.data : [] )

    } catch (error) {
      console.log("Error fetching properties API :: ", error.message)
      setProperties([])
    }
  };

  console.log("paramObj:::::", paramObj);


  useEffect(() => {
    getProperties(paramObj)
  }, [paramObj]);

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
                <h2 className="title">
                  {paramObj.search}, {paramObj.looking}, {paramObj.location}{" "}
                </h2>
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
