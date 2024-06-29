"use client";
import dealerData from "@/data/dealer";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Dealer = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".dealer_next__active",
          prevEl: ".dealer_prev__active",
        }}
        pagination={{
          el: ".dealer_pagination__active",
          clickable: true,
        }}
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
        {dealerData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="item">
              <div
                className="testimonial-style3 mt-1 mx-1 position-relative mb60"
                style={{ padding: "10px" }}
              >
                <div className="testimonial-content">
                  <span className="icon">“</span>
                </div>
                <div className="thumb d-flex align-items-center mb40">
                  <div className="flex-shrink-0">
                    <Image
                      width={60}
                      height={60}
                      className="wa"
                      src={testimonial.image}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span
                      className="mb-0"
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      {testimonial.name}
                    </span>
                    <span
                      className="btn btn-sm btn-warning"
                      style={{
                        padding: ".25rem .4rem",
                        fontSize: ".875rem",
                        lineHeight: ".5",
                        borderRadius: ".2rem",
                        float: "right",
                        fontWeight: "800",
                      }}
                    >
                      Prop Cliq Pro
                    </span>
                    <p>
                      <span
                        className="label label-default"
                        style={{ background: "antiquewhite" }}
                      >
                        {testimonial.location}
                      </span>
                    </p>

                    <p>
                      <span className="list-title">
                        <strong>{testimonial.experience} years</strong>{" "}
                        Experience
                      </span>
                      <span className="list-title">
                        <strong>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                          {testimonial.properties}
                        </strong>{" "}
                        properties
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <button className="dealer_prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination dealer_pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="dealer_next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>

      {/* End .row for navigation and pagination */}
    </>
  );
};

export default Dealer;
