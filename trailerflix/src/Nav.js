import React, { useEffect, useState } from "react";
import "./Nav.css";
import AOS from "aos";

function Nav() {
  const [show, handleShow] = useState(false);
  AOS.init();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav_bar ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://i.ibb.co/x3NjFXB/logo2.png"
        alt="Netflix-Logo"
      />
      {/* <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      /> */}
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
