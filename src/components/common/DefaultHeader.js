"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FilterContent from "../home/home-v5/filter-with-property/FilterContent";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);

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
      <header
        className={`header-nav nav-homepage-style light-header menu-home4 main-menu ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <nav className="posr">
          <div className="container">
            <Link
              className="header-logo logo1"
              style={{ position: "absolute", left: "42px" }}
              href="/"
            >
              <Image
                width={90}
                height={75}
                src="/images/propCliq.jpg"
                alt="Header Logo"
              />
            </Link>
            <Link className="header-logo logo2" 
            style={{ position: "absolute", left: "42px" }} href="/">
              <Image
                width={90}
                height={75}
                src="/images/prop-cliq.png"
                alt="Header Logo"
              />
            </Link>
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="inner-banner-style1 text-center"
                  style={{ marginTop: "80px" }}
                >
                  <FilterContent />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}
      <div className="signup-modal">
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal />
          </div>
        </div>
      </div>
      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default DefaultHeader;
