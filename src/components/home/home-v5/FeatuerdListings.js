"use client";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FeaturedListings = ({ properties }) => {
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
        {properties.slice(0, 10).map((listing) => (
          <SwiperSlide key={listing._id}>
            <div className="item">
              <div className="listing-style7 mb60">
                <div className="list-thumb">
                  <Image
                    width={400}
                    height={185}
                    className="w-100 h-100 cover"
                    src={
                      listing?.files[0]?.path || "/images/listings/g4-10.jpg"
                    }
                    alt="listings"
                    style={{
                      width: "400px !important",
                      height: "185px !important",
                    }}
                  />
                  <div className="sale-sticker-wrap">
                    <div className="list-tag rounded-0 fz12">
                      <span className="flaticon-electricity" />
                      FEATURED
                    </div>

                    <div className="list-tag2 rounded-0 fz12">
                      FOR {listing?.service}
                    </div>
                  </div>

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
                    <Link href={`/property/${listing?._id}`}>
                      {listing?.address_details?.project}
                    </Link>
                  </h6>

                  <div className="d-flex justify-content-between align-items-center">
                    {listing.service !== "Sell" ? (
                      <div className="list-price">
                        {listing.monthly_rent} / <span>mo</span>
                      </div>
                    ) : (
                      <>
                        <p>
                          <Link href={`/property/${listing?._id}`}>
                            {listing?.name}
                            <h6 className="list-title">
                              {listing.bhk} {listing?.address_details?.area}{" "}
                              {listing?.address_details?.locality}
                            </h6>
                          </Link>
                          <p>
                            <h6 className="list-title">
                              INR {listing?.monthly_rent}
                            </h6>
                          </p>
                        </p>
                      </>
                    )}
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

export default FeaturedListings;
