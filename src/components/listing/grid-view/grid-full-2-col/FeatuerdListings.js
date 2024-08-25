import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data.map((listing) => (
        <div
          className={` ${colstyle ? "col-sm-12" : "col-md-6"}  `}
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
                  {/* {!listing.forRent && ( */}
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    {listing?.service}
                  </div>
                  {/* )} */}
                </div>

                <div className="list-price">
                  {listing?.service === "Sell"
                    ? listing?.monthly_rent
                    : listing.monthly_rent + " / mo"}
                </div>
              </div>
              <div className="list-content">
                {/* <div className="list-agent topFive">
                  <Image
                    width={114}
                    height={114}
                    className="rounded-circle w-full h-full cover"
                    src="/images/team/agent-single-1.png"
                    alt="agent"
                  />
                </div> */}
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
                  {/* <div className="icons d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
