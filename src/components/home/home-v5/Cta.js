import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="cta-banner4 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto" data-aos="fade-in">
            <div className="cta-style4 position-relative text-center">
              <h1 className="sub-title fw400 text-white">PROP HELP CRM!</h1>
              <h6 className="cta-title mb30 text-white">
                Looking for a new property leand managemnt CRM, for schedulings
                and followups, calling, recordings and email we are here an
                awesome solution!
              </h6>
              <div className="d-block d-sm-flex justify-content-center">
                <Link href="/" className="ud-btn btn-white">
                  Manage Calls
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="/" className="ud-btn btn-white">
                  Manage Contacts
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="/" className="ud-btn btn-white">
                  Manage Recording
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="/" className="ud-btn btn-white">
                  Manage Users
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="/" className="ud-btn btn-white">
                  Manage CRM
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
