"use client";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FeatuerdProjects = ({ properties }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        pagination={{
          el: ".featured-pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {properties.slice(0, 4).map((listing) => (
          <SwiperSlide key={listing._id}>
            <div className="item">
              <div className="listing-style7 mb60">
                <div className="list-thumb">
                  <Link href={`/project/${listing?._id}`}>
                    <Image
                      width={400}
                      height={185}
                      className="w-100 h-100 cover"
                      src="/images/cf611f4cdd313f2.jpeg"
                      alt="listings"
                      style={{
                        width: "400px !important",
                        height: "185px !important",
                      }}
                    />
                  </Link>

                  {/* <Image
                  width={90}
                  height={75}
                  src="/images/propCliq.jpg"
                  alt="Header Logo"
                /> */}

                  <div className="list-meta">
                    <a href="#" className="mr5">
                      <span className="flaticon-fullscreen" />
                    </a>
                    <a href="#" className="mr5">
                      <span className="flaticon-new-tab" />
                    </a>
                    <a href="#">
                      <span className="flaticon-like" />
                    </a>
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Link href={`/project/${listing?._id}`}>
                      {listing?.name}
                    </Link>
                  </h6>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="list-price">
                      {listing.show_price_on_website}
                    </div>
                    <div className="list-meta2 d-flex align-items-center">
                      <a href="#" className="mr10">
                        <span className="flaticon-bed mr5" /> {listing.bed}
                      </a>
                      <a href="#" className="mr10">
                        <span className="flaticon-shower mr5" /> {listing.bath}
                      </a>
                      <a href="#">
                        <span className="flaticon-expand" /> {listing.sqft}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
    </>
  );
};

export default FeatuerdProjects;
