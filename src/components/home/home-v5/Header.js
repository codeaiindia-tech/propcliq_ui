"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

import HeroContent from "../home-v2/hero/HeroContent";
import FilterContent from "./filter-with-property/FilterContent";
import FilterContentHeader from "./filter-with-property/FilterContentHeader";

const Header = ({ onChildClick }) => {
  console.log("props:::::", onChildClick);

  const [navbar, setNavbar] = useState(false);
  const [menubar, setMenubar] = useState(false);

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 10) {
      setNavbar(true);

      if (window.scrollY >= 500) {
        onChildClick?.(true);
        setMenubar(true);
      } else {
        onChildClick?.(false);
        setMenubar(false);
      }
    } else {
      setNavbar(false);
      onChildClick?.(false);
      setMenubar(false);
    }
  }, [onChildClick]);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [changeBackground]);

  return (
    <>
      <header
        className={`header-nav nav-homepage-style main-menu ${
          navbar ? "slideInDown animated" : ""
        }`}
      >
        {!menubar ? (
          <nav className="posr bg-red-500">
            <div className="container posr menu_bdrt1">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="logos mr40">
                      <Link
                        className="header-logo logo1"
                        href="/"
                        style={{ position: "relative", right: "100%" }}
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/images/propCliq.jpg"
                          alt="Header Logo"
                          className="shadow-xl bg-green-500"
                        />
                      </Link>
                      <Link className="header-logo logo2" href="/">
                        <Image
                          width={90}
                          height={75}
                          src="/images/prop-cliq.png"
                          alt="Header Logo"
                        />
                      </Link>
                    </div>

                    <MainMenu />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex align-items-center">
                    <a
                      href="https://my.propcliq.com"
                      className="login-info d-flex align-items-center"
                      role="button"
                    >
                      <i className="far fa-user-circle fz16 me-2" />
                      <span className="d-none d-xl-block">
                        Login / Register
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="posr">
            <div className="container">
              <div className="container posr menu_bdrt1">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="logos mr40">
                        <Link
                          className="header-logo logo1"
                          style={{ position: "absolute", right: "100%" }}
                          href="/"
                        >
                          <Image
                            width={90}
                            height={75}
                            src="/images/propCliq.jpg"
                            alt="Header Logo"
                          />
                        </Link>
                        <Link className="header-logo logo2" href="/">
                          <Image
                            width={90}
                            height={75}
                            src="/images/prop-cliq.png"
                            alt="Header Logo"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="inner-banner-style1 text-center"
                    style={{ marginTop: "9%" }}
                  >
                    <FilterContentHeader />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>

      <div className="signup-modal">
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal />
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
    </>
  );
};

export default Header;