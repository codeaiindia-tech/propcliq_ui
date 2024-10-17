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
import Dealer from "@/components/home/home-v5/Dealer";

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
      <section className="pt-0 pb0 bgc-f7 pb50-md" style={{ marginTop: "-4%" }}>
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title" style={{ marginBottom: "30px" }}>
                  Crown Projects
                </h2>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-project-slider">
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
                <h2 className="title-boost" style={{ marginBottom: "30px" }}>
                  Boosted Properties in Demand
                </h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/all-properties">
                  See All Properties {data ? `(${data.count})` : null}
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
                <h2 className="title" style={{ marginBottom: "30px" }}>
                  Our Top Dealers
                </h2>
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
            <div className="col-lg-12">
              <div
                className="dealer-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Dealer />
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

      <section className="footer-style1 pt60 pb-0">
        <div className="container">
          <div className="row">
            <h6 className="text-white mb25">Frequent Search</h6>

            <div className="col-sm-3 col-lg-3">
              <div className="footer-widget ">
                <div className="link-style1 mb30">
                  <div className="link-list">
                    <a href="#"> Property in Noida</a>
                    <a href="#"> Property in Noida Extension</a>
                    <a href="#3"> Property in Greater Noida</a>
                    <a href="#4"> Property in Ghaziabad</a>
                    <a href="#5"> Property in Delhi</a>
                    <a href="#7"> Property in Gurugram</a>
                    <a href="#9"> Property in Chandigarh</a>
                    <a href="#11"> Property in Meerut</a>
                    <a href="#12"> Property in Dehradun</a>
                  </div>
                  <div className="link-list">
                    <a href="#1"> Apartment in Noida</a>
                    <a href="#2"> Apartment in Noida Extension</a>
                    <a href="#3"> Apartment in Greater Noida</a>
                    <a href="#4"> Apartment in Ghaziabad</a>
                    <a href="#5"> Apartment in Delhi</a>
                    <a href="#7"> Apartment in Gurugram</a>
                    <a href="#9"> Apartment in Chandigarh</a>
                    <a href="#11"> Apartment in Meerut</a>
                    <a href="#12"> Apartment in Dehradun</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3 col-lg-3">
              <div className="footer-widget ">
                <div className="link-style1 mb30">
                  <div className="link-list">
                    <a href="#1"> Villa in Noida</a>
                    <a href="#2"> Villa in Noida Extension</a>
                    <a href="#3"> Villa in Greater Noida</a>
                    <a href="#4"> Villa in Ghaziabad</a>
                    <a href="#5"> Villa in Delhi</a>
                    <a href="#7"> Villa in Gurugram</a>
                    <a href="#9"> Villa in Chandigarh</a>
                    <a href="#11"> Villa in Meerut</a>
                    <a href="#12"> Villa in Dehradun</a>
                  </div>
                  <div className="link-list">
                    <a href="#1"> Low Rise Apartment in Noida</a>
                    <a href="#2"> Low Rise Apartment in Noida Extension</a>
                    <a href="#3"> Low Rise Apartment in Greater Noida</a>
                    <a href="#4"> Low Rise Apartment in Ghaziabad</a>
                    <a href="#5"> Low Rise Apartment in Delhi</a>
                    <a href="#7"> Low Rise Apartment in Gurugram</a>
                    <a href="#9"> Low Rise Apartment in Chandigarh</a>
                    <a href="#11"> Low Rise Apartment in Meerut</a>
                    <a href="#12"> Low Rise Apartment in Dehradun</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3 col-lg-3">
              <div className="footer-widget ">
                <div className="link-style1 mb30">
                  <div className="link-list">
                    <a href="#1"> Plot in Noida</a>
                    <a href="#2"> Plot in Noida Extension</a>
                    <a href="#3"> Plot in Greater Noida</a>
                    <a href="#4"> Plot in Ghaziabad</a>
                    <a href="#5"> Plot in Delhi</a>
                    <a href="#7"> Plot in Gurugram</a>
                    <a href="#9"> Plot in Chandigarh</a>
                    <a href="#11"> Plot in Meerut</a>
                    <a href="#12"> Plot in Dehradun</a>
                  </div>
                  <div className="link-list">
                    <a href="#1"> Residential Property in Noida</a>
                    <a href="#2"> Residential Property in Noida Extension</a>
                    <a href="#3"> Residential Property in Greater Noida</a>
                    <a href="#4"> Residential Property in Ghaziabad</a>
                    <a href="#5"> Residential Property in Delhi</a>
                    <a href="#7"> Residential Property in Gurugram</a>
                    <a href="#9"> Residential Property in Chandigarh</a>
                    <a href="#11"> Residential Property in Meerut</a>
                    <a href="#12"> Residential Property in Dehradun</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="footer-widget ">
                <div className="link-style1 mb30">
                  <div className="link-list">
                    <a href="#1">Commercial Property in Noida</a>
                    <a href="#2">Commercial Property in Noida Extension</a>
                    <a href="#3">Commercial Property in Greater Noida</a>
                    <a href="#4">Commercial Property in Ghaziabad</a>
                    <a href="#5">Commercial Property in Delhi</a>
                    <a href="#7">Commercial Property in Gurugram</a>
                    <a href="#9">Commercial Property in Chandigarh</a>
                    <a href="#11">Commercial Property in Meerut</a>
                    <a href="#12">Commercial Property in Dehradun</a>
                  </div>
                  <div className="link-list">
                    <a href="#1">Independent Floor in Noida</a>
                    <a href="#2">Independent Floor in Noida Extension</a>
                    <a href="#3">Independent Floor in Greater Noida</a>
                    <a href="#4">Independent Floor in Ghaziabad</a>
                    <a href="#5">Independent Floor in Delhi</a>
                    <a href="#7">Independent Floor in Gurugram</a>
                    <a href="#9">Independent Floor in Chandigarh</a>
                    <a href="#11">Independent Floor in Meerut</a>
                    <a href="#12">Independent Floor in Dehradun</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V5;
