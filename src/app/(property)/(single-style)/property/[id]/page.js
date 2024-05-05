"use client";
import { useState, useEffect } from 'react';
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import EnergyClass from "@/components/property/property-single-style/common/EnergyClass";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import PropertyViews from "@/components/property/property-single-style/common/property-view";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
import VirtualTour360 from "@/components/property/property-single-style/common/VirtualTour360";
import AllReviews from "@/components/property/property-single-style/common/reviews";
import ContactWithAgent from "@/components/property/property-single-style/sidebar/ContactWithAgent";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyGallery from "@/components/property/property-single-style/single-v1/PropertyGallery";
import React from "react";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import WalkScore from "@/components/property/property-single-style/common/WalkScore";
import Image from "next/image";
import Link from "next/link";
// export const metadata = {
//   title: "Property Single V1 || Homez - Real Estate NextJS Template",
// };

const SingleV1 = ({params}) => {

  const [data, setData] = useState(null);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    console.log("paraamst ::::::", params)
    const fetchData = async () => {
      const response = await fetch(`${process.env.baseUrl}/project/getProperty/${params.id}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [params]);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);


  return (
    <>
      {/* Main Header Nav */}
      {/* <DefaultHeader /> */}

      {/* Main Header Nav */}
      {!navbar ? <DefaultHeader /> : null}
      {/* End Main Header Nav */}
      {/* {JSON.stringify(data.data)} */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property All Single V1 */}
      { data ? <section className="pt60 pb90 bgc-f7">
        <div className="container">
        <div className={`row ${navbar ? "sticky-inside-header" : ""}`}>
        <Link
                className="header-logo logo1"
                href="/"
                style={{ position: "absolute", left: "-300px" }}
              >
                <Image
                  width={90}
                  height={75}
                  src="/images/propCliq.jpg"
                  alt="Header Logo"
                />
              </Link>
            <PropertyHeader id={params.id} data={data.data} />
          </div>
          {/* End .row */}

          <div className="row mb30 mt30">
            <PropertyGallery id={params.id} data={data.data}/>
          </div>
          {/* End .row */}

          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Overview</h4>
                <div className="row">
                  <OverView data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Property Description</h4>
                <ProperytyDescriptions data={data.data} />
                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <PropertyDetails data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
                  <PropertyAddress data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Features &amp; Amenities</h4>
                <div className="row">
                  <PropertyFeaturesAminites data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Energy Class</h4>
                <div className="row">
                  <EnergyClass data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Floor Plans</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans data={data.data} />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                <h4 className="title fz17 mb30">Video</h4>
                <div className="row">
                  <PropertyVideo data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">360° Virtual Tour</h4>
                <div className="row">
                  <VirtualTour360 data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">What&apos;s Nearby?</h4>
                <div className="row">
                  <PropertyNearby data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Walkscore</h4>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="fw400 mb20">
                      10425 Tabor St Los Angeles CA 90034 USA
                    </h4>
                    <WalkScore data={data.data} />
                  </div>
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Mortgage Calculator</h4>
                <div className="row">
                  <MortgageCalculator data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <PropertyViews data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Home Value</h4>
                <div className="row">
                  <HomeValueChart data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Get More Information</h4>
                <InfoWithForm data={data.data} />
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  {/* <AllComments /> */}
                  <AllReviews data={data.data} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Leave A Review</h4>
                <div className="row">
                  <ReviewBoxForm data={data.data}/>
                </div>
              </div>
              {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className="col-lg-4">
              <div className="column">
                <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                  <h4 className="form-title mb5">Schedule a tour</h4>
                  <p className="text">Choose your preferred day</p>
                  <ScheduleTour data={data.data}/>
                </div>
                {/* End .Schedule a tour */}

                <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                  <div className="widget-wrapper mb-0">
                    <h6 className="title fz17 mb30">Get More Information</h6>
                    <ContactWithAgent data={data.data}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Discover Our Featured Listings</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section> : null }
      {/* End Property All Single V1  */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleV1;
