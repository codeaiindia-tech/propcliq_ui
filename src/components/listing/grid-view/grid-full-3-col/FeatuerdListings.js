"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  console.log("data:::::", data);
  return (
    <>
      {data.map((listing) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
          }  `}
          key={listing.id}
        >
          <div
            className={
              colstyle
                ? "listing-style1 listCustom listing-type"
                : "listing-style1"
            }
          >
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100  cover"
                style={{ height: "230px" }}
                src={listing?.files[0]?.path || "/images/listings/g4-10.jpg"}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="list-price">
                {listing.monthly_rent} / <span>mo</span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v6/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} bed
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} bath
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} sqft
                </a>
              </div>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">For {listing.service}</span>
                <div className="icons d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
