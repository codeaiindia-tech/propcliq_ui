"use client";

// Import useState from 'react' library
import { useState, useEffect } from "react";

import Explore from "@/components/common/Explore";
import Footer from "@/components/home/home-v5/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v5/FeatuerdListings";
import FeatuerdProjects from "@/components/home/home-v5/FeatuerdProjects";
import Header from "@/components/home/home-v5/Header";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/home-v5/PropertiesByCities";
import Testimonial from "@/components/home/home-v5/Testimonial";
import FilterWithProperties from "@/components/home/home-v5/filter-with-property";
import Blog from "@/components/common/Blog";
import Hero from "@/components/home/home-v5/Hero";
import ApartmentTypes from "@/components/home/home-v5/ApartmentTypes";
import Cta from "@/components/home/home-v5/Cta";
import Link from "next/link";
import PropertyListing from "@/components/home/home-v5/PropertyListing";

// export const metadata = {
//   title: "Home v5 || Homez - Real Estate NextJS Template",
// };
// export const revalidate = 0;

async function getData() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };
  const res = await fetch(`${process.env.baseUrl}/properties`, requestOptions, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // console.log("res.json()", res.json())

  return res.json();
}

const handleChildClick = (newMessage) => {
  setMessage(newMessage);
};

const Home_V5 = () => {
  // let properties = getData();
  // console.log("properties ::", properties);

  const [message, setMessage] = useState(false);
  const handleChildClick = (newMessage) => {
    setMessage(newMessage);
  };
  const [data, setData] = useState(null);
  const [projects, setProject] = useState(null);
  useEffect(() => {
    console.log("paraamst :::::: HOME ::::::::");
    const fetchData = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      };
      const response = await fetch(
        `${process.env.baseUrl}/properties`,
        requestOptions,
        { cache: "no-store" }
      );
      const data = await response.json();

      console.log("data::::", data);

      setData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("paraam  ::: ::: st :::::: Projects ::::::::");
    const fetchProjects = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      };
      const response = await fetch(
        `${process.env.baseUrl}/projects`,
        requestOptions,
        { cache: "no-store" }
      );
      const data = await response.json();
      setProject(data);
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* Main Header Nav */}
      {/* <p>Message from Child: {JSON.stringify(message)}</p> */}
      <Header onChildClick={handleChildClick} />
      {/* <>{JSON.stringify(sendDataToParent)}</> */}
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Hero Slide */}
      <div className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      {/* Edn Hero Slide */}

      {/* Filter with properties */}
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {!message ? <FilterWithProperties /> : null}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Filter with properties */}

      {/* Discover Our Featured Listings */}
      <section className="pt-0 pb0 bgc-f7 pb50-md">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Crown Projects</h2>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                {projects ? (
                  <FeatuerdProjects properties={projects.data} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Discover Our Featured Listings */}

      {/* CTA */}
      <Cta />
      {/* CTA */}

      {/* Discover Our Featured properties */}
      <section className="pt-0 bgc-f7 pb50-md">
        <div className="container">
          <div className="row align-items-center boosted" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2 ">
                <h2 className="title-boost">Boosted Properties in Demand</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-2-col">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                {data ? <FeaturedListings properties={data.data} /> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Discover Our Featured properties */}

      {/* Discover Our Featured Dealers */}
      <section className=" pt0 bgc-f7 pb50-md topDealers">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Our Top Dealers</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-2-col">
                  See All Dealers
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                {data ? <FeaturedListings properties={data.data} /> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Discover Our Featured Dealers */}

      {/* Explore property-city */}
      <section className="pb0-md pb0">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                <p className="paragraph">
                  Following are the demanded cities for exploring your property
                </p>
              </div>
            </div>
            {/* End col-lg-9 */}

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="">
                  {" "}
                  {/*/map-v4"> */}
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            {/* End col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore property-city */}

      {/* Explore Apartment Types cities */}
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Explore Your Type</h2>
                <p className="paragraph">Explore from our 1000+ options</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore Apartment Types cities */}

      {/* Explore Apartment */}
      <section className="pb90 pb30-md bgc-thm-light">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Why PropCliQ?</h2>
                <p className="paragraph">How we are making you job easy</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Explore />
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Our Testimonials */}
      <section className="pb0-md">
        <div className="container maxw1600">
          <div className="row  justify-content-center text-center align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">People are loving our service</h2>
                <p className="paragraph">
                  Please experience yourself and share your thoughts
                </p>
              </div>
            </div>
            {/* End header */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials */}

      {/* Popular Property */}
      <PropertyListing />
      {/* End  Popular Property */}

      {/* Explore Blog */}
      <section className="pb0 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* Explore Blog */}

      {/* Our Partners */}
      <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V5;
